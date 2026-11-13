// Fonction Vercel : reçoit le formulaire de contact et l'envoie par e-mail via Resend.
// Variables d'environnement :
//   RESEND_API_KEY  clé Resend (obligatoire)
//   CONTACT_TO      destinataire (défaut : studio@casa-senso.ch)
//   CONTACT_FROM    expéditeur vérifié dans Resend (ex. « Site Casa Senso <site@casa-senso.ch> »)

const TO = process.env.CONTACT_TO || 'studio@casa-senso.ch';
const FROM = process.env.CONTACT_FROM || 'Site Casa Senso <onboarding@resend.dev>';
const FIELDS = ['prenom', 'nom', 'email', 'sujet', 'message'];
const MAX = { prenom: 100, nom: 100, email: 200, sujet: 200, message: 5000 };

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const raw = typeof req.body === 'string' ? req.body : await new Promise((resolve) => {
    let d = ''; req.on('data', (c) => { d += c; if (d.length > 20000) req.destroy(); }); req.on('end', () => resolve(d));
  });
  const type = req.headers['content-type'] || '';
  if (type.includes('application/json')) { try { return JSON.parse(raw); } catch { return {}; } }
  return Object.fromEntries(new URLSearchParams(raw));
}

export default async function handler(req, res) {
  const wantsJson = (req.headers.accept || '').includes('application/json');
  const done = (ok, status = ok ? 200 : 400) => {
    if (wantsJson) return res.status(status).json({ ok });
    res.setHeader('Location', `/contact?envoye=${ok ? 1 : 0}`);
    return res.status(303).end();
  };

  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).end(); }

  const body = await readBody(req);
  if (body.site_web) return done(true); // champ piège rempli : robot, on ignore sans le signaler

  const data = {};
  for (const f of FIELDS) {
    const v = String(body[f] ?? '').trim();
    if (!v || v.length > MAX[f]) return done(false);
    data[f] = v;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return done(false);

  if (!process.env.RESEND_API_KEY) {
    console.error('contact: RESEND_API_KEY manquante');
    return done(false, 503);
  }

  const html = `<p><strong>${esc(data.prenom)} ${esc(data.nom)}</strong> &lt;${esc(data.email)}&gt;</p>
<p><strong>Sujet :</strong> ${esc(data.sujet)}</p>
<p style="white-space:pre-wrap">${esc(data.message)}</p>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: data.email,
        subject: `Site Casa Senso : ${data.sujet}`.slice(0, 200),
        html,
        text: `${data.prenom} ${data.nom} <${data.email}>\nSujet : ${data.sujet}\n\n${data.message}`,
      }),
    });
    if (!r.ok) { console.error('contact: Resend', r.status, await r.text()); return done(false, 502); }
    return done(true);
  } catch (e) {
    console.error('contact: envoi impossible', e);
    return done(false, 502);
  }
}
