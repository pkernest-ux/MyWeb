const repo = process.env.GITHUB_REPO || "pkernest-ux/MyWeb";
const branch = process.env.GITHUB_BRANCH || "main";
const path = "ar-data.json";

module.exports = async function (context) {
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
    const json = JSON.parse(Buffer.from(file.content || "", "base64").toString("utf8"));

    context.res = {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0"
      },
      body: json
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
