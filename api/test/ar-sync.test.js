const assert = require("node:assert/strict");
const { afterEach, beforeEach, test } = require("node:test");

const saveArContent = require("../save-ar-content/index.js");
const saveContent = require("../save-content/index.js");
const readArContent = require("../ar-content/index.js");

const SOURCE_SHA = "a".repeat(40);
const OTHER_SHA = "b".repeat(40);
const COMMIT_SHA = "c".repeat(40);
const UPDATED_SHA = "d".repeat(40);
const trackedSettings = [
  "AR_SYNC_WRITE_ENABLED",
  "GITHUB_REPO",
  "GITHUB_BRANCH",
  "GITHUB_CONTENT_TOKEN"
];
const originalSettings = new Map(trackedSettings.map(name => [name, process.env[name]]));
const originalFetch = global.fetch;

const principalHeader = (roles) => Buffer.from(JSON.stringify({
  identityProvider: "github",
  userId: "test-user-id",
  userDetails: "test-user",
  userRoles: roles
}), "utf8").toString("base64");

const createContext = () => ({
  log: { error() {} },
  res: null
});

const response = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  async json() { return body; },
  async text() { return typeof body === "string" ? body : JSON.stringify(body); }
});

const encodedCollection = (projects = [{
  project: { id: "project-1", name: "Project 1", updatedAt: "2026-09-04T00:00:00.000Z" },
  systemConfig: {},
  buildings: []
}]) => Buffer.from(JSON.stringify({
  version: "7.1",
  activeProjectId: projects[0]?.project?.id || null,
  projects
}), "utf8").toString("base64");

const installFetchQueue = (responses) => {
  const calls = [];
  const queue = [...responses];
  global.fetch = async (...args) => {
    calls.push(args);
    assert.ok(queue.length > 0, `Unexpected fetch call: ${args[0]}`);
    return queue.shift();
  };
  return calls;
};

const enableWrites = () => {
  process.env.AR_SYNC_WRITE_ENABLED = "true";
  process.env.GITHUB_REPO = "owner/repo";
  process.env.GITHUB_BRANCH = "main";
  process.env.GITHUB_CONTENT_TOKEN = "test-token";
};

const fullSaveRequest = (expectedSourceBlobSha = SOURCE_SHA) => ({
  headers: {
    "x-ms-client-principal": principalHeader(["anonymous", "authenticated", "ar_admin"]),
    "x-ar-save-contract": "ar-project-collection-v4"
  },
  body: {
    expectedSourceBlobSha,
    payload: {
      version: "7.0",
      project: {
        id: "project-1",
        name: "Updated project",
        updatedAt: "2026-09-04T01:00:00.000Z"
      },
      systemConfig: {},
      buildings: []
    }
  }
});

const calibrationRequest = (expectedSourceBlobSha = SOURCE_SHA) => ({
  headers: {
    "x-ms-client-principal": principalHeader(["anonymous", "authenticated", "ar_admin"]),
    "x-ar-save-contract": "ar-angle-calibration-v1"
  },
  body: {
    expectedSourceBlobSha,
    calibration: {
      projectId: "project-1",
      buildingId: "building-1",
      floorId: "floor-1",
      nodeId: "node-1",
      nodeType: "marker",
      guideReferenceBearing: 90
    }
  }
});

beforeEach(() => {
  for (const name of trackedSettings) delete process.env[name];
  global.fetch = originalFetch;
});

afterEach(() => {
  global.fetch = originalFetch;
  for (const [name, value] of originalSettings) {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
});

test("save rejects an authenticated user without ar_admin before any GitHub call", async () => {
  let fetchCalled = false;
  global.fetch = async () => {
    fetchCalled = true;
    throw new Error("fetch must not run");
  };
  const context = createContext();

  await saveArContent(context, {
    headers: {
      "x-ms-client-principal": principalHeader(["anonymous", "authenticated"]),
      "x-ar-save-contract": "ar-project-collection-v4"
    },
    body: {}
  });

  assert.equal(context.res.status, 403);
  assert.equal(context.res.body.code, "ADMIN_ROLE_REQUIRED");
  assert.equal(fetchCalled, false);
});

test("general content save rejects a user without ar_admin before any GitHub call", async () => {
  let fetchCalled = false;
  global.fetch = async () => {
    fetchCalled = true;
    throw new Error("fetch must not run");
  };
  const context = createContext();

  await saveContent(context, {
    headers: {
      "x-ms-client-principal": principalHeader(["anonymous", "authenticated"])
    },
    body: { sections: [] }
  });

  assert.equal(context.res.status, 403);
  assert.equal(context.res.body.code, "ADMIN_ROLE_REQUIRED");
  assert.equal(fetchCalled, false);
});

test("general content save fails closed when write configuration is missing", async () => {
  process.env.AR_SYNC_WRITE_ENABLED = "true";
  let fetchCalled = false;
  global.fetch = async () => {
    fetchCalled = true;
    throw new Error("fetch must not run");
  };
  const context = createContext();

  await saveContent(context, {
    headers: {
      "x-ms-client-principal": principalHeader(["anonymous", "authenticated", "ar_admin"])
    },
    body: { sections: [] }
  });

  assert.equal(context.res.status, 503);
  assert.equal(context.res.body.code, "SYNC_CONFIGURATION_ERROR");
  assert.equal(fetchCalled, false);
});

test("general content save preserves the existing payload format after authorization", async () => {
  enableWrites();
  const calls = installFetchQueue([
    response(200, { sha: SOURCE_SHA }),
    response(200, { commit: { html_url: "https://github.example/commit/content" } })
  ]);
  const context = createContext();
  const body = { sections: [{ id: "hero", title: "室內導引" }] };

  await saveContent(context, {
    headers: {
      "x-ms-client-principal": principalHeader(["anonymous", "authenticated", "ar_admin"])
    },
    body
  });

  assert.equal(context.res.status, 200);
  assert.equal(calls.length, 2);
  const [, putOptions] = calls[1];
  assert.equal(putOptions.method, "PUT");
  const putBody = JSON.parse(putOptions.body);
  assert.equal(putBody.sha, SOURCE_SHA);
  assert.equal(putBody.branch, "main");
  assert.deepEqual(
    JSON.parse(Buffer.from(putBody.content, "base64").toString("utf8")),
    body
  );
});

test("save fails closed unless AR_SYNC_WRITE_ENABLED is exactly true", async () => {
  process.env.AR_SYNC_WRITE_ENABLED = "TRUE";
  process.env.GITHUB_REPO = "owner/repo";
  process.env.GITHUB_BRANCH = "main";
  process.env.GITHUB_CONTENT_TOKEN = "test-token";
  const context = createContext();

  await saveArContent(context, fullSaveRequest());

  assert.equal(context.res.status, 503);
  assert.equal(context.res.body.code, "SYNC_WRITE_DISABLED");
});

test("save requires an explicit repository, branch, and content token", async () => {
  process.env.AR_SYNC_WRITE_ENABLED = "true";
  const context = createContext();

  await saveArContent(context, fullSaveRequest());

  assert.equal(context.res.status, 503);
  assert.equal(context.res.body.code, "SYNC_CONFIGURATION_ERROR");
  assert.deepEqual(context.res.body.missingSettings, [
    "GITHUB_REPO",
    "GITHUB_BRANCH",
    "GITHUB_CONTENT_TOKEN"
  ]);
});

test("full project save requires expectedSourceBlobSha", async () => {
  enableWrites();
  const context = createContext();
  const request = fullSaveRequest();
  delete request.body.expectedSourceBlobSha;

  await saveArContent(context, request);

  assert.equal(context.res.status, 428);
  assert.equal(context.res.body.code, "SYNC_REVISION_REQUIRED");
});

test("angle calibration requires expectedSourceBlobSha", async () => {
  enableWrites();
  const context = createContext();
  const request = calibrationRequest();
  delete request.body.expectedSourceBlobSha;

  await saveArContent(context, request);

  assert.equal(context.res.status, 428);
  assert.equal(context.res.body.code, "SYNC_REVISION_REQUIRED");
});

test("angle calibration rejects a stale source revision without writing", async () => {
  enableWrites();
  const calls = installFetchQueue([
    response(200, { object: { sha: COMMIT_SHA } }),
    response(200, {
      sha: SOURCE_SHA,
      encoding: "base64",
      content: encodedCollection()
    })
  ]);
  const context = createContext();

  await saveArContent(context, calibrationRequest(OTHER_SHA));

  assert.equal(context.res.status, 409);
  assert.equal(context.res.body.code, "SYNC_CONFLICT");
  assert.equal(context.res.body.sourceBlobSha, SOURCE_SHA);
  assert.equal(calls.length, 2);
  assert.equal(calls.some(([, options]) => options?.method === "PUT"), false);
});

test("full project save rejects a stale source revision without writing", async () => {
  enableWrites();
  const calls = installFetchQueue([
    response(200, { object: { sha: COMMIT_SHA } }),
    response(200, {
      sha: SOURCE_SHA,
      encoding: "base64",
      content: encodedCollection()
    })
  ]);
  const context = createContext();

  await saveArContent(context, fullSaveRequest(OTHER_SHA));

  assert.equal(context.res.status, 409);
  assert.equal(context.res.body.code, "SYNC_CONFLICT");
  assert.equal(context.res.body.sourceBlobSha, SOURCE_SHA);
  assert.equal(context.res.headers["X-AR-Source-Blob-Sha"], SOURCE_SHA);
  assert.equal(calls.length, 2);
  assert.equal(calls.some(([, options]) => options?.method === "PUT"), false);
});

test("full project save returns the new GitHub blob SHA", async () => {
  enableWrites();
  const calls = installFetchQueue([
    response(200, { object: { sha: COMMIT_SHA } }),
    response(200, {
      sha: SOURCE_SHA,
      encoding: "base64",
      content: encodedCollection()
    }),
    response(200, {
      content: { sha: UPDATED_SHA },
      commit: { html_url: "https://github.example/commit/1" }
    })
  ]);
  const context = createContext();

  await saveArContent(context, fullSaveRequest());

  assert.equal(context.res.status, 200);
  assert.equal(context.res.body.sourceBlobSha, UPDATED_SHA);
  assert.equal(context.res.headers["X-AR-Source-Blob-Sha"], UPDATED_SHA);
  assert.equal(calls.length, 3);
  const [, putOptions] = calls[2];
  assert.equal(putOptions.method, "PUT");
  const putBody = JSON.parse(putOptions.body);
  assert.equal(putBody.sha, SOURCE_SHA);
  assert.equal(putBody.branch, "main");
});

test("GitHub 409 is exposed as a sync conflict", async () => {
  enableWrites();
  installFetchQueue([
    response(200, { object: { sha: COMMIT_SHA } }),
    response(200, {
      sha: SOURCE_SHA,
      encoding: "base64",
      content: encodedCollection()
    }),
    response(409, { message: "Conflict" })
  ]);
  const context = createContext();

  await saveArContent(context, fullSaveRequest());

  assert.equal(context.res.status, 409);
  assert.equal(context.res.body.code, "SYNC_CONFLICT");
  assert.equal(context.res.body.refreshRequired, true);
});

test("GitHub 422 is exposed as upstream validation failure", async () => {
  enableWrites();
  installFetchQueue([
    response(200, { object: { sha: COMMIT_SHA } }),
    response(200, {
      sha: SOURCE_SHA,
      encoding: "base64",
      content: encodedCollection()
    }),
    response(422, { message: "Validation Failed" })
  ]);
  const context = createContext();

  await saveArContent(context, fullSaveRequest());

  assert.equal(context.res.status, 422);
  assert.equal(context.res.body.code, "GITHUB_VALIDATION_FAILED");
  assert.equal(context.res.headers["X-AR-Source-Blob-Sha"], SOURCE_SHA);
});

test("ar-content list returns revision in the body and source SHA header", async () => {
  installFetchQueue([
    response(200, {
      sha: SOURCE_SHA,
      encoding: "base64",
      content: encodedCollection()
    })
  ]);
  const context = createContext();

  await readArContent(context, { query: { list: "1" } });

  assert.equal(context.res.status, 200);
  assert.equal(context.res.body.revision, SOURCE_SHA);
  assert.equal(context.res.headers["X-AR-Source-Blob-Sha"], SOURCE_SHA);
  assert.equal(context.res.body.projects.length, 1);
});

test("ar-content includes the source SHA header on a project 404", async () => {
  installFetchQueue([
    response(200, {
      sha: SOURCE_SHA,
      encoding: "base64",
      content: encodedCollection()
    })
  ]);
  const context = createContext();

  await readArContent(context, { query: { projectId: "missing" } });

  assert.equal(context.res.status, 404);
  assert.equal(context.res.headers["X-AR-Source-Blob-Sha"], SOURCE_SHA);
});

test("ar-content includes an empty source SHA header before an upstream read succeeds", async () => {
  installFetchQueue([response(503, { message: "unavailable" })]);
  const context = createContext();

  await readArContent(context, { query: {} });

  assert.equal(context.res.status, 500);
  assert.ok(Object.hasOwn(context.res.headers, "X-AR-Source-Blob-Sha"));
  assert.equal(context.res.headers["X-AR-Source-Blob-Sha"], "");
});
