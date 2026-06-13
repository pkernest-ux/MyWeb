const repo = process.env.GITHUB_REPO || "pkernest-ux/MyWeb";
const branch = process.env.GITHUB_BRANCH || "main";
const path = process.env.CONTENT_PATH || "content.json";

module.exports = async function (context, req) {
  const principalHeader = req.headers["x-ms-client-principal"];

  if (!principalHeader) {
    context.res = {
      status: 401,
      body: { error: "Login required." }
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

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    context.res = {
      status: 400,
      body: { error: "Invalid content payload." }
    };
    return;
  }

  const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}`;
  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "User-Agent": "myweb-content-admin",
    "X-GitHub-Api-Version": "2022-11-28"
  };

  try {
    const currentResponse = await fetch(`${apiUrl}?ref=${encodeURIComponent(branch)}`, { headers });

    if (!currentResponse.ok) {
      throw new Error(`Unable to read content file from GitHub: ${currentResponse.status}`);
    }

    const current = await currentResponse.json();
    const content = Buffer.from(JSON.stringify(body, null, 2) + "\n", "utf8").toString("base64");
    const updateResponse = await fetch(apiUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        message: "Update site content from admin",
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
        commit: result.commit?.html_url
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
