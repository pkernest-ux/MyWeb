const path = "ar-data.json";
const saveContract = "ar-project-collection-v4";
const angleCalibrationContract = "ar-angle-calibration-v1";
const fieldSurveyContract = "ar-field-survey-v1";
const { validateFieldSurvey, applyFieldSurvey } = require("../shared/ar-field-survey.js");
const adminRole = "ar_admin";
const sourceBlobShaHeader = "X-AR-Source-Blob-Sha";

const jsonResponseHeaders = (sourceBlobSha = "") => ({
  "Cache-Control": "no-store, max-age=0",
  "Content-Type": "application/json; charset=utf-8",
  [sourceBlobShaHeader]: sourceBlobSha
});

const respond = (context, status, body, sourceBlobSha = "") => {
  context.res = {
    status,
    headers: jsonResponseHeaders(sourceBlobSha),
    body
  };
};

const parseClientPrincipal = (value) => {
  if (typeof value !== "string" || !value.trim()) return null;

  try {
    const principal = JSON.parse(Buffer.from(value, "base64").toString("utf8"));
    return principal && typeof principal === "object" && !Array.isArray(principal)
      ? principal
      : null;
  } catch {
    return null;
  }
};

const hasRole = (principal, role) => (
  Array.isArray(principal?.userRoles) && principal.userRoles.includes(role)
);

const getRequiredSetting = (name) => {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
};

const isSafeRepo = (value) => /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(value);
const isSafeBranch = (value) => (
  value.length <= 255 &&
  /^[A-Za-z0-9._/-]+$/.test(value) &&
  !value.startsWith("/") &&
  !value.endsWith("/") &&
  !value.endsWith(".lock") &&
  !value.includes("//") &&
  !value.includes("..")
);
const isGitObjectSha = (value) => /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(value);

const readWriteConfiguration = () => {
  if (process.env.AR_SYNC_WRITE_ENABLED !== "true") {
    return {
      error: {
        status: 503,
        body: {
          error: "AR cloud writes are disabled.",
          code: "SYNC_WRITE_DISABLED"
        }
      }
    };
  }

  const repo = getRequiredSetting("GITHUB_REPO");
  const branch = getRequiredSetting("GITHUB_BRANCH");
  const token = getRequiredSetting("GITHUB_CONTENT_TOKEN");
  const missingSettings = [
    ["GITHUB_REPO", repo],
    ["GITHUB_BRANCH", branch],
    ["GITHUB_CONTENT_TOKEN", token]
  ].filter(([, value]) => !value).map(([name]) => name);

  if (missingSettings.length > 0) {
    return {
      error: {
        status: 503,
        body: {
          error: "AR cloud sync is not configured.",
          code: "SYNC_CONFIGURATION_ERROR",
          missingSettings
        }
      }
    };
  }

  if (!isSafeRepo(repo) || !isSafeBranch(branch)) {
    return {
      error: {
        status: 503,
        body: {
          error: "AR cloud sync target is invalid.",
          code: "SYNC_CONFIGURATION_ERROR"
        }
      }
    };
  }

  return { repo, branch, token };
};

const normalizeCollection = (json) => {
  if (Array.isArray(json?.projects)) {
    return {
      ...json,
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
  const principal = parseClientPrincipal(req.headers["x-ms-client-principal"]);

  if (!principal || !hasRole(principal, "authenticated")) {
    respond(context, 401, {
      error: "Login required.",
      code: "AUTH_REQUIRED"
    });
    return;
  }

  if (!hasRole(principal, adminRole)) {
    respond(context, 403, {
      error: "AR administrator role required.",
      code: "ADMIN_ROLE_REQUIRED"
    });
    return;
  }

  const writeConfiguration = readWriteConfiguration();
  if (writeConfiguration.error) {
    respond(
      context,
      writeConfiguration.error.status,
      writeConfiguration.error.body
    );
    return;
  }

  const { repo, branch, token } = writeConfiguration;
  const body = req.body;
  const requestContract = req.headers["x-ar-save-contract"];

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    respond(context, 400, {
      error: "Invalid AR content payload.",
      code: "INVALID_PAYLOAD"
    });
    return;
  }

  if (![saveContract, angleCalibrationContract, fieldSurveyContract].includes(requestContract)) {
    respond(context, 428, {
      error: "Please reload the AR admin before syncing cloud data.",
      code: "SYNC_CONTRACT_REQUIRED"
    });
    return;
  }

  const isAngleCalibration = requestContract === angleCalibrationContract;
  const isFieldSurvey = requestContract === fieldSurveyContract;
  const payload = body.payload;
  const calibration = body.calibration;
  let expectedSourceBlobSha = "";
  let projectId = "";
  let fieldSurvey = null;

  if (isFieldSurvey) {
    try {
      fieldSurvey = validateFieldSurvey(body.fieldSurvey);
    } catch (error) {
      respond(context, error.status || 400, {
        error: error.message,
        code: error.code || "INVALID_FIELD_SURVEY"
      });
      return;
    }
  }

  if (!isAngleCalibration && !isFieldSurvey) {
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      respond(context, 400, {
        error: "Invalid AR project payload.",
        code: "INVALID_PROJECT_PAYLOAD"
      });
      return;
    }

    projectId = typeof payload.project?.id === "string" ? payload.project.id.trim() : "";
    if (!projectId) {
      respond(context, 400, {
        error: "Missing AR project id.",
        code: "INVALID_PROJECT_ID"
      });
      return;
    }

  }

  if (typeof body.expectedSourceBlobSha !== "string" || !body.expectedSourceBlobSha.trim()) {
    respond(context, 428, {
      error: "The source blob revision is required before syncing.",
      code: "SYNC_REVISION_REQUIRED"
    });
    return;
  }

  expectedSourceBlobSha = body.expectedSourceBlobSha.trim().toLowerCase();
  if (!isGitObjectSha(expectedSourceBlobSha)) {
    respond(context, 400, {
      error: "Invalid source blob revision.",
      code: "INVALID_SOURCE_REVISION"
    });
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
      respond(context, 400, {
        error: "Invalid AR angle calibration payload.",
        code: "INVALID_CALIBRATION_PAYLOAD"
      });
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
  let sourceBlobSha = "";

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
      if (!isGitObjectSha(current.sha || "")) {
        throw new Error("GitHub AR content response did not include a valid blob SHA.");
      }

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
    sourceBlobSha = current.sha.toLowerCase();

    if (sourceBlobSha !== expectedSourceBlobSha) {
      respond(context, 409, {
        error: "Cloud AR data changed after it was loaded. Reload before syncing.",
        code: "SYNC_CONFLICT",
        expectedSourceBlobSha,
        sourceBlobSha,
        sourceCommit: headCommitSha
      }, sourceBlobSha);
      return;
    }

    let nextProjects;
    let nextActiveProjectId;
    let commitMessage;
    let responseCalibration = null;
    let responseObservationId = null;
    let surveyedCollection = null;

    if (isFieldSurvey) {
      const applied = applyFieldSurvey(collection, fieldSurvey);
      surveyedCollection = applied.collection;
      nextProjects = surveyedCollection.projects;
      nextActiveProjectId = surveyedCollection.activeProjectId;
      responseCalibration = applied.calibration;
      responseObservationId = applied.observationId;
      commitMessage = `Save field survey for ${fieldSurvey.nodeId.slice(0, 80)}`;
      if (JSON.stringify(surveyedCollection) === JSON.stringify(collection)) {
        respond(context, 200, {
          ok: true,
          contract: requestContract,
          unchanged: true,
          sourceCommit: headCommitSha,
          sourceBlobSha,
          projectIds: nextProjects.map(item => item?.project?.id).filter(Boolean),
          observationId: responseObservationId,
          calibration: responseCalibration
        }, sourceBlobSha);
        return;
      }
    } else if (isAngleCalibration) {
      const bearing = Math.round(Number(calibration.guideReferenceBearing) * 10) / 10;
      const projectIndex = collection.projects.findIndex(
        item => item?.project?.id === calibration.projectId
      );
      if (projectIndex < 0) {
        respond(context, 409, {
          error: "AR calibration project is no longer available. Reload before syncing.",
          code: "SYNC_TARGET_NOT_FOUND",
          sourceBlobSha
        }, sourceBlobSha);
        return;
      }

      const targetProject = collection.projects[projectIndex];
      const targetBuilding = (Array.isArray(targetProject?.buildings) ? targetProject.buildings : []).find(
        item => item?.id === calibration.buildingId
      );
      const targetFloor = (Array.isArray(targetBuilding?.floors) ? targetBuilding.floors : []).find(
        item => item?.id === calibration.floorId
      );
      const nodeCollection = calibration.nodeType === "marker"
        ? targetFloor?.markers
        : targetFloor?.waypoints;
      const targetNode = (Array.isArray(nodeCollection) ? nodeCollection : []).find(
        item => item?.id === calibration.nodeId
      );
      if (!targetNode) {
        respond(context, 409, {
          error: "AR calibration node is no longer available. Reload before syncing.",
          code: "SYNC_TARGET_NOT_FOUND",
          sourceBlobSha
        }, sourceBlobSha);
        return;
      }

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
      const commitNodeId = calibration.nodeId.replace(/[\r\n]/g, " ").slice(0, 80);
      commitMessage = `Calibrate V3 AR angle for ${commitNodeId}`;
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
      nextProjects = collection.projects.filter(item => item?.project?.id !== projectId);
      nextProjects.push(payload);
      nextProjects.sort((a, b) => {
        const bUpdatedAt = typeof b?.project?.updatedAt === "string" ? b.project.updatedAt : "";
        const aUpdatedAt = typeof a?.project?.updatedAt === "string" ? a.project.updatedAt : "";
        return bUpdatedAt.localeCompare(aUpdatedAt);
      });
      nextActiveProjectId = projectId;
      commitMessage = "Update AR guide data from admin";
    }

    const nextContent = surveyedCollection || {
      ...collection,
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

    if (updateResponse.status === 409) {
      respond(context, 409, {
        error: "Cloud AR data changed while it was being saved. Reload before syncing.",
        code: "SYNC_CONFLICT",
        sourceBlobSha,
        refreshRequired: true
      }, sourceBlobSha);
      return;
    }

    if (updateResponse.status === 422) {
      respond(context, 422, {
        error: "GitHub rejected the AR content update.",
        code: "GITHUB_VALIDATION_FAILED",
        sourceBlobSha
      }, sourceBlobSha);
      return;
    }

    if (!updateResponse.ok) {
      throw new Error(`GitHub update failed: ${updateResponse.status}`);
    }

    const updatedSourceBlobSha = result.content?.sha;
    if (!isGitObjectSha(updatedSourceBlobSha || "")) {
      throw new Error("GitHub update response did not include a valid blob SHA.");
    }
    sourceBlobSha = updatedSourceBlobSha.toLowerCase();

    respond(context, 200, {
      ok: true,
      contract: requestContract,
      commit: result.commit?.html_url,
      sourceCommit: headCommitSha,
      sourceBlobSha,
      projectIds: nextProjects.map(item => item?.project?.id).filter(Boolean),
      ...(isFieldSurvey ? { observationId: responseObservationId } : {}),
      calibration: responseCalibration
    }, sourceBlobSha);
  } catch (error) {
    if (isFieldSurvey && error.status && error.code) {
      respond(context, error.status, {
        error: error.message,
        code: error.code,
        sourceBlobSha
      }, sourceBlobSha);
      return;
    }
    context.log.error(error);
    respond(context, 502, {
      error: "Unable to synchronize AR content with GitHub.",
      code: "GITHUB_SYNC_FAILED"
    }, sourceBlobSha);
  }
};
