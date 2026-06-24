const repo = process.env.GITHUB_REPO || "pkernest-ux/MyWeb";
const branch = process.env.GITHUB_BRANCH || "main";
const path = "ar-data.json";

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

const summarizeProject = (item) => {
  const floorStats = (item.buildings || []).reduce((stats, building) => {
    (building.floors || []).forEach((floor) => {
      if (floor.imageUrl) stats.floorPlans += 1;
      stats.markers += (floor.markers || []).length;
      stats.waypoints += (floor.waypoints || []).length;
      stats.edges += (floor.edges || []).length;
    });
    return stats;
  }, { floorPlans: 0, markers: 0, waypoints: 0, edges: 0 });

  return {
    project: item.project || {},
    systemConfig: item.systemConfig || {},
    stats: floorStats
  };
};

module.exports = async function (context, req) {
  const token = process.env.GITHUB_CONTENT_TOKEN;
  const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}`;
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "myweb-ar-content",
    "X-GitHub-Api-Version": "2022-11-28"
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${apiUrl}?ref=${encodeURIComponent(branch)}`, { headers });

    if (!response.ok) {
      throw new Error(`Unable to read AR content file from GitHub: ${response.status}`);
    }

    const file = await response.json();
    let text = "";

    if (file.encoding === "base64" && file.content) {
      text = Buffer.from(file.content, "base64").toString("utf8");
    } else if (file.download_url) {
      const rawResponse = await fetch(file.download_url, {
        headers: token ? { Authorization: `Bearer ${token}`, "User-Agent": "myweb-ar-content" } : { "User-Agent": "myweb-ar-content" }
      });

      if (!rawResponse.ok) {
        throw new Error(`Unable to download AR content file from GitHub: ${rawResponse.status}`);
      }

      text = await rawResponse.text();
    }

    if (!text) {
      throw new Error("AR content file is empty or unavailable from GitHub.");
    }

    const json = JSON.parse(text);
    const collection = normalizeCollection(json);
    const query = req.query || {};
    let body = json;

    if (query.list === "1") {
      body = {
        version: collection.version,
        activeProjectId: collection.activeProjectId,
        projects: collection.projects.map(summarizeProject)
      };
    } else if (query.projectId) {
      body = collection.projects.find(item => item?.project?.id === query.projectId);
      if (!body) {
        context.res = {
          status: 404,
          headers: {
            "Cache-Control": "no-store, max-age=0"
          },
          body: { error: "AR project not found." }
        };
        return;
      }
    } else if (Array.isArray(json?.projects)) {
      body = collection.projects.find(item => item?.project?.id === collection.activeProjectId)
        || collection.projects[0]
        || json;
    }

    context.res = {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0"
      },
      body
    };
  } catch (error) {
    context.log.error(error);
    context.res = {
      status: 500,
      headers: {
        "Cache-Control": "no-store, max-age=0"
      },
      body: { error: error.message }
    };
  }
};
