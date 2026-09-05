const path = process.env.CONTENT_PATH || "content.json";
const adminRole = "ar_admin";

const respond = (context, status, body) => {
  context.res = { status, body };
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

const requiredSetting = (name) => {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
};

module.exports = async function (context, req) {
  const principal = parseClientPrincipal(req.headers["x-ms-client-principal"]);

  if (!principal || !hasRole(principal, "authenticated")) {
    respond(context, 401, { error: "Login required.", code: "AUTH_REQUIRED" });
    return;
  }

  if (!hasRole(principal, adminRole)) {
    respond(context, 403, {
      error: "Administrator role required.",
      code: "ADMIN_ROLE_REQUIRED"
    });
    return;
  }

  if (process.env.AR_SYNC_WRITE_ENABLED !== "true") {
    respond(context, 503, {
      error: "GitHub content writes are disabled.",
      code: "SYNC_WRITE_DISABLED"
    });
    return;
  }

  const repo = requiredSetting("GITHUB_REPO");
  const branch = requiredSetting("GITHUB_BRANCH");
  const token = requiredSetting("GITHUB_CONTENT_TOKEN");
  const missingSettings = [
    ["GITHUB_REPO", repo],
    ["GITHUB_BRANCH", branch],
    ["GITHUB_CONTENT_TOKEN", token]
  ].filter(([, value]) => !value).map(([name]) => name);
  if (missingSettings.length > 0) {
    respond(context, 503, {
      error: "GitHub content writes are not configured.",
      code: "SYNC_CONFIGURATION_ERROR",
      missingSettings
    });
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
