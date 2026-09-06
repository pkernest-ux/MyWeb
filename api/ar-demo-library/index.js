const dataset = require('../shared/ar-demo-library.json');

// Public by design: exclusively synthetic, versioned demo content. Never
// reads ar-data.json, credentials, real field observations or user uploads.
module.exports = async function (context, req) {
  context.res = {
    status: req.method === 'GET' ? 200 : 405,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'Allow': 'GET' },
    body: req.method === 'GET' ? { ...dataset, storage: 'versioned-demo-backend' } : { error: 'Read-only simulation dataset' },
  };
};
