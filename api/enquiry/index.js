const { json, cors, readBody, clientIp } = require('../lib');

const hits = new Map();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function limited(ip) {
  const now = Date.now();
  const row = hits.get(ip) || [];
  const fresh = row.filter((t) => now - t < WINDOW_MS);
  if (fresh.length >= MAX_PER_WINDOW) {
    hits.set(ip, fresh);
    return true;
  }
  fresh.push(now);
  hits.set(ip, fresh);
  return false;
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validPhone(value) {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

function filledTooFast(started) {
  const t = Number(started);
  if (!Number.isFinite(t) || t <= 0) return false;
  return Date.now() - t < 2500;
}

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = cors(req, 204);
    return;
  }

  const ip = clientIp(req);
  if (limited(ip)) {
    context.res = json(req, 429, { ok: false, reason: 'rate' });
    return;
  }

  const body = readBody(req);
  if (body.company_website) {
    context.res = json(req, 200, { ok: true });
    return;
  }

  const name = String(body.name || '').trim().slice(0, 80);
  const email = String(body.email || '').trim().slice(0, 120);
  const phone = String(body.phone || '').trim().slice(0, 20);
  const company = String(body.company || '').trim().slice(0, 120);
  const message = String(body.message || '').trim().slice(0, 2000);
  const lang = String(body.lang || 'en').trim().slice(0, 8);
  const consent = String(body.consent || '').toLowerCase();

  if (!name || !email || !phone || !company || !message || consent !== 'yes') {
    context.res = json(req, 400, { ok: false, reason: 'fields' });
    return;
  }
  if (!validEmail(email) || !validPhone(phone)) {
    context.res = json(req, 400, { ok: false, reason: 'format' });
    return;
  }
  if (filledTooFast(body.started_at)) {
    context.res = json(req, 400, { ok: false, reason: 'fast' });
    return;
  }

  const record = { at: new Date().toISOString(), name, email, phone, company, message, lang };
  const token = process.env.ENQUIRY_GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || 'sampada-organization/dinymeo-lifesciences';
  const onAzure = Boolean(process.env.WEBSITE_HOSTNAME);

  if (!token && onAzure) {
    context.log.warn('enquiry stored=none (no ENQUIRY_GITHUB_TOKEN)');
    context.res = json(req, 503, { ok: false, reason: 'store' });
    return;
  }

  if (!token) {
    const fs = require('node:fs');
    const path = require('node:path');
    const dir = path.join(__dirname, '..', '..', '.data');
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, 'enquiries.json');
    const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : [];
    existing.push(record);
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    context.res = json(req, 202, { ok: true, stored: 'local' });
    return;
  }

  const issue = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'dinymeo-enquiry',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      title: `Enquiry: ${company} — ${name}`,
      labels: ['enquiry'],
      body: [
        '_Submitted via the Azure Static Web Apps contact form. Do not paste this into public channels._',
        '',
        `**company:** ${company}`,
        `**name:** ${name}`,
        `**email:** ${email}`,
        `**phone:** ${phone}`,
        `**lang:** ${lang}`,
        `**at:** ${record.at}`,
        '',
        message,
      ].join('\n'),
    }),
  });

  if (!issue.ok) {
    context.log.warn(`github issue ${issue.status}`);
    context.res = json(req, 502, { ok: false, reason: 'github' });
    return;
  }

  context.res = json(req, 202, { ok: true, stored: 'github' });
};
