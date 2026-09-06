const { json, cors, readBody } = require('../lib');

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = cors(204);
    return;
  }

  const body = readBody(req);
  if (body.company_website) {
    context.res = json(200, { ok: true, skipped: true });
    return;
  }

  const required = ['name', 'email', 'phone', 'company', 'message', 'consent'];
  const missing = required.filter((key) => !String(body[key] || '').trim());
  if (missing.length) {
    context.res = json(400, { ok: false, missing });
    return;
  }

  const record = {
    at: new Date().toISOString(),
    name: String(body.name).slice(0, 80),
    email: String(body.email).slice(0, 120),
    phone: String(body.phone).slice(0, 20),
    company: String(body.company).slice(0, 120),
    message: String(body.message).slice(0, 2000),
    lang: String(body.lang || 'en').slice(0, 8),
  };

  const fs = require('node:fs');
  const path = require('node:path');
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;

  if (token && repo) {
    const issue = await fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'dinymeo-enquiry',
      },
      body: JSON.stringify({
        title: `Enquiry: ${record.company} — ${record.name}`,
        labels: ['enquiry'],
        body: Object.entries(record)
          .map(([k, v]) => `**${k}:** ${v}`)
          .join('\n'),
      }),
    });
    if (!issue.ok) {
      context.res = json(502, { ok: false, reason: 'github' });
      return;
    }
    context.res = json(202, { ok: true, stored: 'github' });
    return;
  }

  const dir = path.join(__dirname, '..', '..', '.data');
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'enquiries.json');
  const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : [];
  existing.push(record);
  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  context.res = json(202, { ok: true, stored: 'local' });
};
