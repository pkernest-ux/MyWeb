const repo = process.env.GITHUB_REPO || "pkernest-ux/MyWeb";
const branch = process.env.GITHUB_BRANCH || "main";
const path = "ar-data.json";
const saveContract = "ar-project-collection-v4";
const angleCalibrationContract = "ar-angle-calibration-v1";

const isAuthenticatedPrincipal = (value) => {
  if (typeof value !== "string" || !value.trim()) return false;

  try {
    const principal = JSON.parse(Buffer.from(value, "base64").toString("utf8"));
    return (
      Array.isArray(principal?.userRoles) &&
      principal.userRoles.includes("authenticated")
    );
  } catch {
    return false;
  }
};

const normalizeCollection = (json) => {
  if (Array.isArray(json?.projects)) {
    return {
      version: json.version || "7.1",
      activeProjectId: json.activeProjectId || json.projects[0]?.project?.id || null,
      projects: json.projects
    };
  }

  if (json?.project || Array.isArray(json?.buildings)) {
    return {
      version: "7.1",
      activeProjectId: json.project?.id || "published",
      projects: [json]
    };
  }

  return { version: "7.1", activeProjectId: null, projects: [] };
};

module.exports = async function (context, req) {
  const principalHeader = req.headers["x-ms-client-principal"];

  if (!isAuthenticatedPrincipal(principalHeader)) {
    context.res = {
      status: 403,
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "Content-Type": "application/json"
      },
      body: {
        error: "Login required.",
        code: "AUTH_REQUIRED"
      }
    };
    return;
  }

  const token = process.env.GITHUB_CONTENT_TOKEN;

  if (!token) {
    context.res = {
      status: 500,
      body: { error: "Missing GITHUB_CONTENT_TOKEN app setting." }
    };
    return;
  }

  const body = req.body;
  const requestContract = req.headers["x-ar-save-contract"];

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    context.res = {
      status: 400,
      body: { error: "Invalid AR content payload." }
    };
    return;
  }

  if (![saveContract, angleCalibrationContract].includes(requestContract)) {
    context.res = {
      status: 428,
      body: { error: "Please reload the AR admin before syncing cloud data." }
    };
    return;
  }

  const isAngleCalibration = requestContract === angleCalibrationContract;
  const payload = body.payload;
  const calibration = body.calibration;

  if (!isAngleCalibration && (!payload || typeof payload !== "object" || Array.isArray(payload))) {
    context.res = {
      status: 400,
      body: { error: "Invalid AR project payload." }
    };
    return;
  }

  if (isAngleCalibration) {
    const requiredIds = [
      calibration?.projectId,
      calibration?.buildingId,
      calibration?.floorId,
      calibration?.nodeId
    ];
    const bearing = Number(calibration?.guideReferenceBearing);
    if (
      !calibration ||
      typeof calibration !== "object" ||
      Array.isArray(calibration) ||
      requiredIds.some(value => typeof value !== "string" || !value.trim()) ||
      !["marker", "waypoint"].includes(calibration.nodeType) ||
      calibration.guideReferenceBearing === null ||
      calibration.guideReferenceBearing === "" ||
      !Number.isFinite(bearing) ||
      bearing < 0 ||
      bearing >= 360
    ) {
      context.res = {
        status: 400,
        body: { error: "Invalid AR angle calibration payload." }
      };
      return;
    }
  }

  const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}`;
  const refApiUrl = `https://api.github.com/repos/${repo}/git/ref/heads/${branch.split("/").map(encodeURIComponent).join("/")}`;
  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "User-Agent": "myweb-ar-admin",
    "X-GitHub-Api-Version": "2022-11-28"
  };

  try {
    const readLatestCollection = async () => {
      const refResponse = await fetch(`${refApiUrl}?t=${Date.now()}`, {
        headers,
        cache: "no-store"
      });

      if (!refResponse.ok) {
        throw new Error(`Unable to read GitHub branch ref: ${refResponse.status}`);
      }

      const refInfo = await refResponse.json();
      const headCommitSha = refInfo.object?.sha;

      if (!headCommitSha) {
        throw new Error("GitHub branch ref did not include a commit SHA.");
      }

      const currentResponse = await fetch(
        `${apiUrl}?ref=${encodeURIComponent(headCommitSha)}&t=${Date.now()}`,
        { headers, cache: "no-store" }
      );

      if (!currentResponse.ok) {
        throw new Error(`Unable to read AR content file from GitHub: ${currentResponse.status}`);
      }

      const current = await currentResponse.json();
      let currentText = "";

      if (current.encoding === "base64" && current.content) {
        currentText = Buffer.from(current.content, "base64").toString("utf8");
      } else if (current.download_url) {
        const rawResponse = await fetch(current.download_url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Cache-Control": "no-cache",
            "User-Agent": "myweb-ar-admin"
          },
          cache: "no-store"
        });

        if (!rawResponse.ok) {
          throw new Error(`Unable to download AR content file from GitHub: ${rawResponse.status}`);
        }

        currentText = await rawResponse.text();
      }

      if (!currentText) {
        throw new Error("AR content file is empty or unavailable from GitHub.");
      }

      const currentJson = JSON.parse(currentText);
      return { current, collection: normalizeCollection(currentJson), headCommitSha };
    };

    const { current, collection, headCommitSha } = await readLatestCollection();
    let nextProjects;
    let nextActiveProjectId;
    let commitMessage;
    let responseCalibration = null;

    if (isAngleCalibration) {
      const bearing = Math.round(Number(calibration.guideReferenceBearing) * 10) / 10;
      const projectIndex = collection.projects.findIndex(
        item => item?.project?.id === calibration.projectId
      );
      if (projectIndex < 0) throw new Error("AR calibration project not found.");

      const targetProject = collection.projects[projectIndex];
      const targetBuilding = (targetProject.buildings || []).find(
        item => item?.id === calibration.buildingId
      );
      const targetFloor = (targetBuilding?.floors || []).find(
        item => item?.id === calibration.floorId
      );
      const nodeCollection = calibration.nodeType === "marker"
        ? targetFloor?.markers
        : targetFloor?.waypoints;
      const targetNode = (nodeCollection || []).find(item => item?.id === calibration.nodeId);
      if (!targetNode) throw new Error("AR calibration node not found.");

      targetNode.guideDirectionMode = "manual";
      targetNode.guideReferenceBearing = bearing;
      targetNode.guideAngleCalibratedAt = new Date().toISOString();
      targetNode.guideAngleCalibrationSource = "v3-field-calibration";
      targetProject.project = {
        ...(targetProject.project || {}),
        updatedAt: targetNode.guideAngleCalibratedAt
      };

      nextProjects = collection.projects;
      nextActiveProjectId = collection.activeProjectId || calibration.projectId;
      commitMessage = `Calibrate V3 AR angle for ${calibration.nodeId}`;
      responseCalibration = {
        projectId: calibration.projectId,
        buildingId: calibration.buildingId,
        floorId: calibration.floorId,
        nodeId: calibration.nodeId,
        nodeType: calibration.nodeType,
        guideDirectionMode: "manual",
        guideReferenceBearing: bearing,
        updatedAt: targetNode.guideAngleCalibratedAt
      };
    } else {
      const projectId = payload.project?.id;
      if (!projectId) throw new Error("Missing AR project id.");

      nextProjects = collection.projects.filter(item => item?.project?.id !== projectId);
      nextProjects.push(payload);
      nextProjects.sort((a, b) => (b?.project?.updatedAt || "").localeCompare(a?.project?.updatedAt || ""));
      nextActiveProjectId = projectId;
      commitMessage = "Update AR guide data from admin";
    }

    const nextContent = {
      version: "7.1",
      activeProjectId: nextActiveProjectId,
      projects: nextProjects
    };

    const content = Buffer.from(JSON.stringify(nextContent, null, 2) + "\n", "utf8").toString("base64");
    const updateResponse = await fetch(apiUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        message: commitMessage,
        content,
        sha: current.sha,
        branch
      })
    });

    const result = await updateResponse.json().catch(() => ({}));

    if (!updateResponse.ok) {
      throw new Error(result.message || `GitHub update failed: ${updateResponse.status}`);
    }

    context.res = {
      status: 200,
      body: {
        ok: true,
        contract: requestContract,
        commit: result.commit?.html_url,
        sourceCommit: headCommitSha,
        projectIds: nextProjects.map(item => item?.project?.id).filter(Boolean),
        calibration: responseCalibration
      }
    };
  } catch (error) {
    context.log.error(error);
    context.res = {
      status: 500,
      body: { error: error.message }
    };
  }
};
