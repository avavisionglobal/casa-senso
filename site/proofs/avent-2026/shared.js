/* Calendrier de l'Avent Casa Senso · socle commun des pistes (maquette v2 du 18.11.2026).
   Thèmes, textes et images = exemples provisoires (photos du site et moodboard « salon vert »).
   Logique : une case s'ouvre chaque jour du 1er au 24 décembre ; avant le 1er décembre, la maquette
   simule un jour (9 par défaut) pour montrer les états. Les cases déjà regardées sont mémorisées
   dans le navigateur du visiteur (nouvelle / déjà vue). Lien direct vers un jour : #jour-9.
   Crochets fournis par la page : render(), ouvrir(n, opts) (animation avant la fenêtre), onLocked(n), onClose(). */
(function () {
  const INSTA = 'https://www.instagram.com/casa_senso.ch/';
  const T = [
    ['Le salon vert', 'Un vert profond, du bois clair et beaucoup de textures pour un salon qui enveloppe.'],
    ['Velours prune', 'Le velours capte la lumière des bougies : une seule pièce suffit à changer la pièce.'],
    ['Laiton et lumière', 'Des touches dorées, jamais plus de trois, pour réchauffer sans faire clinquant.'],
    ['Cuir patiné', 'Le cuir qui a vécu raconte une histoire. On l’associe à la laine et au lin.'],
    ['Un salon pour recevoir', 'Des assises en plus, une lumière basse : le salon se prépare aux longues soirées.'],
    ['La console de l’entrée', 'La première chose que l’on voit : une lampe, un bouquet de branches, un plateau.'],
    ['Le buffet de famille', 'Un meuble ancien, remis au centre de la pièce, devient le décor de la fête.'],
    ['Lumière d’hiver', 'Quand le jour baisse tôt, on multiplie les petites sources de lumière.'],
    ['La table du réveillon', 'Nappe en lin, vaisselle dépareillée, verdure posée à plat sur la table.'],
    ['Jeu de miroirs', 'Un miroir bien placé double la lumière des guirlandes.'],
    ['Le coin calme', 'Un fauteuil, un plaid, une lampe : un refuge pendant l’agitation des fêtes.'],
    ['Une cuisine qui réchauffe', 'Des bocaux, du bois, des agrumes : la cuisine aussi se met en fête.'],
    ['Le canapé des longues soirées', 'Coussins en couches de tons proches, du plus clair au plus sombre.'],
    ['La chambre d’amis', 'Linge propre, une bougie, une carte de bienvenue : recevoir commence ici.'],
    ['Couches de blanc', 'Blanc cassé, écru, ivoire : trois blancs valent mieux qu’un seul.'],
    ['Une chambre douce', 'Des matières qui se touchent : lin lavé, laine bouclée, bois brut.'],
    ['Bougies et matières', 'Grès, cire, céramique : on regroupe par trois, à hauteurs différentes.'],
    ['Papier, ficelle et branches', 'Des paquets qui font partie du décor, sous le sapin comme sur l’étagère.'],
    ['Le sapin sans excès', 'Une seule couleur de boules, des lumières chaudes, et c’est tout.'],
    ['Couronne de porte', 'Eucalyptus, olivier, ruban de lin : la fête commence sur le palier.'],
    ['La table des enfants', 'Papier kraft à dessiner, crayons dans des verres : leur table à eux.'],
    ['Verres et vaisselle de fête', 'Mélanger l’ancien et le neuf, le verre fumé et la porcelaine.'],
    ['Le soir du 24', 'Le salon dans sa lumière du réveillon, prêt à accueillir tout le monde.'],
    ['La planche surprise', 'La dernière case : une pièce entière, pensée pour les fêtes.'],
  ];
  const DAYS = T.map(([titre, texte], i) => ({
    n: i + 1, titre, texte,
    img: 'assets/p' + String((i % 16) + 1).padStart(2, '0') + '.jpg',
    post: INSTA, // à remplacer par l'adresse du post du jour
    date: new Date(2026, 11, i + 1),
  }));

  const fmtLong = d => d.toLocaleDateString('fr-CH', { weekday: 'long', day: 'numeric', month: 'long' });
  const fmtShort = d => d.getDate() + ' déc.';

  /* petit constructeur DOM : h('div', {class:'x'}, 'texte', enfant) */
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === true) el.setAttribute(k, '');
      else if (v !== false && v != null) el.setAttribute(k, v);
    }
    for (const c of kids.flat()) if (c != null) el.append(c);
    return el;
  }

  function realDay() {
    const now = new Date();
    if (now.getFullYear() > 2026 || (now.getFullYear() === 2026 && now.getMonth() === 11 && now.getDate() > 24)) return 24;
    if (now.getFullYear() === 2026 && now.getMonth() === 11) return now.getDate();
    return 0;
  }
  const joursAvantOuverture = () => Math.max(0, Math.ceil((new Date(2026, 11, 1) - new Date()) / 864e5));
  const urlJour = parseInt(new URLSearchParams(location.search).get('jour'), 10);
  let today = Number.isFinite(urlJour) ? Math.max(0, Math.min(24, urlJour)) : (realDay() || 9);

  const KEY = 'casa-avent-vu-' + (document.body.dataset.piste || 'x');
  function readSeen() { try { return new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch (e) { return new Set(); } }
  let seen = readSeen();
  function saveSeen() { try { localStorage.setItem(KEY, JSON.stringify([...seen])); } catch (e) {} }

  const state = n => n > today ? 'ferme' : (seen.has(n) ? 'vu' : 'nouveau');
  const nonVus = () => DAYS.filter(d => state(d.n) === 'nouveau').map(d => d.n);

  /* ---------- fenêtre de lecture ---------- */
  const el = {
    img: h('img', { alt: '' }),
    num: h('span', { class: 'av-modal__num', 'aria-hidden': 'true' }),
    deco: h('span', { class: 'av-modal__deco', 'aria-hidden': 'true' }, h('i', { class: 'g' }), h('i', { class: 'd' })),
    jour: h('p', { class: 'av-modal__jour' }),
    titre: h('h2', { id: 'av-titre', class: 'av-modal__titre' }),
    desc: h('p', { class: 'av-modal__desc' }),
    post: h('a', { class: 'av-btn av-btn--plein', target: '_blank', rel: 'noopener' }, 'Voir le post sur Instagram'),
    prev: h('button', { 'data-prev': true }, '‹ Jour précédent'),
    next: h('button', { 'data-next': true }, 'Jour suivant ›'),
    fermer: h('button', { class: 'av-modal__fermer', 'data-close': true, 'aria-label': 'Fermer' }, '×'),
    frise: h('div', { class: 'av-modal__frise' }),
  };
  const pastilles = DAYS.map(d => {
    const b = h('button', { class: 'av-pastille', 'data-goto': d.n }, String(d.n));
    el.frise.append(b);
    return b;
  });
  const modal = h('div', { class: 'av-modal', hidden: true },
    h('div', { class: 'av-modal__voile', 'data-close': true }),
    h('article', { class: 'av-modal__carte', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'av-titre' },
      el.fermer,
      h('figure', { class: 'av-modal__img' }, el.img, el.deco, el.num),
      h('div', { class: 'av-modal__texte' },
        el.jour, el.titre, el.desc,
        h('p', { class: 'av-modal__note' }, 'Exemple · thème, texte et image provisoires'),
        h('div', { class: 'av-modal__actions' }, el.post,
          h('button', { class: 'av-btn av-btn--ligne', 'data-share': true }, 'Partager ce jour')),
        h('a', { class: 'av-modal__rdv', href: '/contact' }, 'Cette ambiance chez vous ? Parlons de votre projet →'),
        h('nav', { class: 'av-modal__nav', 'aria-label': 'Autres jours' }, el.prev, el.next),
        h('p', { class: 'av-modal__frise-titre' }, 'Toutes les planches'),
        el.frise)));
  document.body.appendChild(modal);
  let current = 0, lastFocus = null, suite = false;

  function cibleSuivante() {
    if (suite) { const k = nonVus(); if (k.length) return k[0]; }
    return current < today ? current + 1 : 0;
  }
  function fill(n) {
    const d = DAYS[n - 1];
    const premiere = !seen.has(n);
    current = n;
    el.img.src = d.img;
    el.img.alt = 'Planche du jour ' + n + ' : ' + d.titre;
    el.num.textContent = String(n).padStart(2, '0');
    el.jour.textContent = 'Jour ' + n + ' · ' + fmtLong(d.date);
    el.titre.textContent = d.titre;
    el.desc.textContent = d.texte;
    el.post.href = d.post;
    if (premiere) { seen.add(n); saveSeen(); }
    // relance les animations « première ouverture » propres à chaque piste
    modal.removeAttribute('data-premiere'); void modal.offsetWidth;
    if (premiere && !api.reduced) modal.setAttribute('data-premiere', '');
    el.prev.disabled = n <= 1;
    const s = cibleSuivante();
    el.next.disabled = !s;
    el.next.textContent = suite && nonVus().length ? 'Planche suivante pas encore vue ›'
      : s ? 'Jour suivant ›' : (n < 24 ? 'La suite demain matin' : 'C’était la dernière');
    pastilles.forEach((b, i) => {
      const k = i + 1, st = state(k);
      b.className = 'av-pastille ' + st + (k === n ? ' courant' : '');
      b.disabled = st === 'ferme';
      b.setAttribute('aria-label', 'Jour ' + k + (st === 'ferme' ? ', pas encore ouvert' : st === 'nouveau' ? ', pas encore vu' : ''));
      if (k === n) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
    });
    history.replaceState(null, '', '#jour-' + n);
    refresh();
  }
  function open(n, opts) {
    if (n > today) return locked(n);
    suite = !!(opts && opts.suite);
    if (modal.hasAttribute('hidden')) lastFocus = document.activeElement;
    fill(n);
    modal.removeAttribute('hidden');
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.documentElement.classList.add('av-lock');
    el.fermer.focus();
  }
  function close() {
    modal.classList.remove('is-open');
    document.documentElement.classList.remove('av-lock');
    setTimeout(() => modal.setAttribute('hidden', ''), 350);
    history.replaceState(null, '', location.pathname + location.search);
    suite = false;
    lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
    api.onClose && api.onClose();
  }
  function step(k) {
    const n = k > 0 ? cibleSuivante() : current - 1;
    if (n >= 1 && n <= today) fill(n);
  }
  modal.addEventListener('click', e => {
    const g = e.target.closest('[data-goto]');
    if (e.target.closest('[data-close]')) close();
    else if (g) { suite = false; fill(+g.dataset.goto); }
    else if (e.target.closest('[data-prev]')) step(-1);
    else if (e.target.closest('[data-next]')) step(1);
    else if (e.target.closest('[data-share]')) share(current);
  });
  document.addEventListener('keydown', e => {
    if (modal.hasAttribute('hidden')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
  let sx = null; // balayage sur mobile
  modal.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  modal.addEventListener('touchend', e => {
    if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (dx > 60) step(-1); if (dx < -60) step(1);
  });

  async function share(n) {
    const url = location.origin + location.pathname + '#jour-' + n;
    try {
      if (navigator.share) await navigator.share({ title: 'Casa Senso · Calendrier de l’Avent, jour ' + n, url });
      else { await navigator.clipboard.writeText(url); toast('Lien du jour ' + n + ' copié'); }
    } catch (e) {}
  }

  /* ---------- message pour une case fermée ---------- */
  const tst = h('div', { class: 'av-toast', role: 'status' });
  document.body.appendChild(tst);
  let tt;
  function toast(msg) {
    tst.textContent = msg; tst.classList.add('is-on');
    clearTimeout(tt); tt = setTimeout(() => tst.classList.remove('is-on'), 2800);
  }
  function locked(n) {
    const diff = n - today;
    toast(today === 0 ? 'Patience : le calendrier s’ouvre le 1er décembre.'
      : diff === 1 ? 'Patience : cette case s’ouvre demain matin.'
      : 'Patience : cette case s’ouvre le ' + n + ' décembre, dans ' + diff + ' jours.');
    api.onLocked && api.onLocked(n);
  }

  /* ---------- barre de démonstration (maquette seulement) ---------- */
  const simB = h('b');
  const plier = h('button', { class: 'av-sim__plier', 'aria-expanded': 'true', title: 'Afficher ou masquer la démo' }, 'Démo');
  const sim = h('div', { class: 'av-sim' }, plier,
    h('div', { class: 'av-sim__corps' },
      h('span', { class: 'av-sim__lib' }, 'Date simulée'),
      h('button', { 'data-d': '-1', 'aria-label': 'Jour précédent' }, '‹'), simB,
      h('button', { 'data-d': '1', 'aria-label': 'Jour suivant' }, '›'),
      h('span', { class: 'av-sim__vite' },
        h('button', { 'data-set': '0' }, '30 nov.'), h('button', { 'data-set': '9' }, '9 déc.'), h('button', { 'data-set': '24' }, '24 déc.')),
      h('button', { 'data-reset': true, title: 'Oublier les planches déjà vues' }, 'Remettre à neuf'),
      h('a', { href: 'index.html' }, 'Les 2 options')));
  document.body.appendChild(sim);
  if (matchMedia('(max-width: 600px)').matches) { sim.classList.add('plie'); plier.setAttribute('aria-expanded', 'false'); }
  sim.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b === plier) { const p = sim.classList.toggle('plie'); plier.setAttribute('aria-expanded', String(!p)); return; }
    if (b.dataset.d) today = Math.max(0, Math.min(24, today + +b.dataset.d));
    if (b.dataset.set) today = +b.dataset.set;
    if (b.hasAttribute('data-reset')) { seen = new Set(); saveSeen(); }
    refresh();
  });

  /* ---------- textes vivants ---------- */
  function rattrapage(box) {
    const k = nonVus();
    box.classList.toggle('a-jour', !k.length);
    if (!k.length) {
      box.replaceChildren(h('span', {}, today === 0 ? 'Rendez-vous le 1er décembre pour la première planche.'
        : today === 24 ? 'Vous avez tout vu. Joyeuses fêtes !' : 'Vous êtes à jour. La prochaine planche arrive demain matin.'));
      return;
    }
    const b = h('button', { class: 'av-rattrapage__btn' }, k.length === 1 ? 'L’ouvrir' : 'Les ouvrir à la suite');
    b.addEventListener('click', () => (api.ouvrir || open)(k[0], { suite: true }));
    box.replaceChildren(
      h('span', { class: 'av-rattrapage__pt', 'aria-hidden': 'true' }),
      h('span', {}, k.length === 1 ? 'Une planche vous attend' : k.length + ' planches vous attendent'), b);
  }
  function refresh() {
    simB.textContent = today === 0 ? '30 nov.' : today + ' déc.';
    plier.textContent = 'Démo · ' + simB.textContent;
    document.querySelectorAll('[data-compte]').forEach(x => {
      const j = joursAvantOuverture();
      x.textContent = today === 0 ? (j > 1 ? 'Première planche le 1er décembre · dans ' + j + ' jours' : 'Première planche le 1er décembre')
        : today === 24 ? 'Les 24 planches sont ouvertes'
        : today + (today > 1 ? ' planches ouvertes' : ' planche ouverte') + ' sur 24 · la suivante demain matin';
    });
    document.querySelectorAll('[data-nouveaux]').forEach(x => {
      const k = nonVus().length;
      x.textContent = k ? (k === 1 ? '1 planche pas encore vue' : k + ' planches pas encore vues') : 'vous êtes à jour';
    });
    document.querySelectorAll('[data-rattrapage]').forEach(rattrapage);
    document.querySelectorAll('[data-progress]').forEach(x => x.style.setProperty('--p', today / 24));
    document.body.dataset.jour = today;
    api.render && api.render();
  }

  const api = {
    DAYS, h, open, toast, state, nonVus, fmtShort, fmtLong, refresh,
    get today() { return today; },
    markSeen(n) { seen.add(n); saveSeen(); },
    reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
    init(o) {
      Object.assign(api, o);
      refresh();
      const m = location.hash.match(/^#jour-(\d+)$/);
      if (m) setTimeout(() => (api.ouvrir || open)(+m[1]), 500);
    },
  };
  window.Avent = api;
})();
