const fs = require('node:fs');
const path = require('node:path');
const { json, cors, readBody } = require('../lib');

const ROOT = path.join(__dirname, '..', '..', 'src', 'content');
const FILES = {
  site: 'site.json',
  products: 'products.json',
  slides: 'slides.json',
};

function loadAll() {
  return {
    site: JSON.parse(fs.readFileSync(path.join(ROOT, FILES.site), 'utf8')),
    products: JSON.parse(fs.readFileSync(path.join(ROOT, FILES.products), 'utf8')),
    slides: JSON.parse(fs.readFileSync(path.join(ROOT, FILES.slides), 'utf8')),
  };
}

function authorized(req) {
  const expected = process.env.CMS_PASSWORD || 'dinymeo-dev';
  const got = req.headers['x-cms-password'] || req.headers['X-CMS-Password'];
  return Boolean(got) && got === expected;
}

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = cors(204);
    return;
  }
  if (!authorized(req)) {
    context.res = json(401, { ok: false });
    return;
  }
  if (req.method === 'GET') {
    context.res = json(200, loadAll());
    return;
  }

  const body = readBody(req);
  if (!body.site || !body.products || !body.slides) {
    context.res = json(400, { ok: false, reason: 'shape' });
    return;
  }

  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  if (token && repo) {
    context.res = json(501, {
      ok: false,
      reason: 'commit-via-github-not-wired-in-v1',
      hint: 'Download JSON and open a PR, or save locally in dev.',
    });
    return;
  }

  fs.writeFileSync(path.join(ROOT, FILES.site), JSON.stringify(body.site, null, 2) + '\n');
  fs.writeFileSync(path.join(ROOT, FILES.products), JSON.stringify(body.products, null, 2) + '\n');
  fs.writeFileSync(path.join(ROOT, FILES.slides), JSON.stringify(body.slides, null, 2) + '\n');
  context.res = json(200, { ok: true, stored: 'local' });
};
