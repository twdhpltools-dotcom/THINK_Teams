/* ThinkWide website — shared behaviour: menus, product tour, workflow toggle,
   forms, and content loaded from data.js (clients, testimonials, analyzers). */
(function () {
  'use strict';
  var D = window.TW_DATA || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var ICONS = {
    play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>'
  };
  var ic = function (n, s) { s = s || 20; return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[n] || '') + '</svg>'; };

  /* ---------- header turns solid after scrolling ---------- */
  var hdr = $('header.site');
  function onScroll() { if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 40 || (navlinks && navlinks.classList.contains('show'))); }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- navigation ---------- */
  var navlinks = $('#navlinks'), burger = $('#burger');
  var hoverMode = window.matchMedia('(hover: hover) and (min-width: 1121px)').matches;
  function closeMenus() { $$('.nav-item.open').forEach(function (n) { n.classList.remove('open'); var b = $('[data-menu]', n); if (b) b.setAttribute('aria-expanded', 'false'); }); }
  function setBurger(open) {
    if (!burger) return;
    navlinks.classList.toggle('show', open);
    burger.innerHTML = ic(open ? 'close' : 'menu', 22);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
    onScroll();
  }
  document.addEventListener('click', function (e) {
    var mb = e.target.closest('[data-menu]');
    if (mb) {
      var item = mb.parentElement, was = item.classList.contains('open') && !hoverMode;
      closeMenus();
      if (!was) { item.classList.add('open'); mb.setAttribute('aria-expanded', 'true'); }
      return;
    }
    var a = e.target.closest('a[href]');
    if (a && navlinks && navlinks.contains(a)) { closeMenus(); setBurger(false); }
    if (!e.target.closest('.nav-item')) closeMenus();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMenus(); setBurger(false); } });
  if (burger) burger.addEventListener('click', function () { setBurger(!navlinks.classList.contains('show')); });
  if (hoverMode) {
    $$('.nav-item').forEach(function (n) {
      if (!$('.mega', n)) return;
      var t;
      n.addEventListener('mouseenter', function () { clearTimeout(t); closeMenus(); n.classList.add('open'); });
      n.addEventListener('mouseleave', function () { t = setTimeout(function () { n.classList.remove('open'); }, 160); });
    });
  }

  onScroll();


  /* ---------- motion scenes: timed, looping product animations ---------- */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function typeText(el, done) {
    var full = el.getAttribute('data-type'), i = 0;
    (function step() { el.textContent = full.slice(0, i); if (i++ < full.length) el._t = setTimeout(step, 55); else if (done) done(); })();
  }
  function playScene(sc) {
    var items = $$('[data-at]', sc), loop = +sc.getAttribute('data-loop') || 7600;
    sc._timers = [];
    sc.classList.remove('fade');
    items.forEach(function (el) {
      el.classList.remove('on');
      if (el.hasAttribute('data-type')) el.textContent = '';
      sc._timers.push(setTimeout(function () {
        el.classList.add('on');
        if (el.hasAttribute('data-type')) typeText(el);
      }, +el.getAttribute('data-at')));
    });
    sc._timers.push(setTimeout(function () { sc.classList.add('fade'); }, loop - 700));
    sc._timers.push(setTimeout(function () { if (sc._live) playScene(sc); }, loop));
  }
  function stopScene(sc) { (sc._timers || []).forEach(clearTimeout); $$('[data-type]', sc).forEach(function (e) { clearTimeout(e._t); }); }
  function finalState(sc) { $$('[data-at]', sc).forEach(function (el) { el.classList.add('on'); if (el.hasAttribute('data-type')) el.textContent = el.getAttribute('data-type'); }); }
  var scenes = $$('.scene');
  if (reduce || !('IntersectionObserver' in window)) scenes.forEach(finalState);
  else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var sc = en.target;
        if (en.isIntersecting && !sc._live) { sc._live = true; playScene(sc); }
        else if (!en.isIntersecting && sc._live) { sc._live = false; stopScene(sc); }
      });
    }, { threshold: 0.35 });
    scenes.forEach(function (sc) { io.observe(sc); });
  }


  /* ---------- integration helix: pills flow along a turning double helix ---------- */
  $$('[data-helix]').forEach(function (hx) {
    var pills = $$('.hx-pill', hx), svg = hx.querySelector('.hx-svg'), rungs = hx.querySelector('.hx-rungs');
    var s0 = hx.querySelector('.hx-strand.s0'), s1 = hx.querySelector('.hx-strand.s1');
    var NS = 'http://www.w3.org/2000/svg', W, H, cy, A, k, span, theta = 0, shift = 0, last = 0, live = false, raf = 0, lines = [];
    function layout() {
      W = hx.clientWidth; H = hx.clientHeight; cy = H / 2;
      var mobile = W < 700;
      A = mobile ? H * 0.3 : Math.min(H * 0.32, 150);
      k = (2 * Math.PI) / (mobile ? 360 : Math.max(560, W * 0.42));
      span = Math.max(W + 240, pills.length * (mobile ? 70 : 120));
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      rungs.innerHTML = ''; lines = [];
      for (var x = 0; x <= W; x += mobile ? 22 : 30) { var l = document.createElementNS(NS, 'line'); rungs.appendChild(l); lines.push([l, x]); }
      draw();
    }
    function yAt(x, ph) { return cy + A * Math.sin(k * x + theta + ph); }
    function draw() {
      var d0 = '', d1 = '';
      for (var x = 0; x <= W; x += 8) { d0 += (x ? 'L' : 'M') + x + ' ' + yAt(x, 0).toFixed(1); d1 += (x ? 'L' : 'M') + x + ' ' + yAt(x, Math.PI).toFixed(1); }
      s0.setAttribute('d', d0); s1.setAttribute('d', d1);
      lines.forEach(function (o) { var y1 = yAt(o[1], 0), y2 = yAt(o[1], Math.PI); o[0].setAttribute('x1', o[1]); o[0].setAttribute('x2', o[1]); o[0].setAttribute('y1', y1.toFixed(1)); o[0].setAttribute('y2', y2.toFixed(1)); o[0].style.opacity = (0.25 + 0.75 * Math.abs(Math.sin(k * o[1] + theta))).toFixed(2); });
      var n = pills.length, gap = span / n;
      pills.forEach(function (p, i) {
        var strand = i % 2, ph = strand ? Math.PI : 0;
        var x = ((i * gap + shift) % span + span) % span - 120;
        var z = Math.cos(k * x + theta + ph), y = yAt(x, ph);
        var depth = (z + 1) / 2, edge = Math.min(1, Math.max(0, Math.min(x + 60, W + 60 - x) / 140));
        p.style.opacity = ((0.45 + 0.55 * depth) * edge).toFixed(3);
        p.style.zIndex = Math.round(depth * 50);
        p.className = 'hx-pill ' + (depth > 0.5 ? 'front' : 'back');
        p.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) translate(-50%,-50%) scale(' + (0.82 + 0.22 * depth).toFixed(3) + ')';
      });
    }
    function tick(t) {
      if (!live) return;
      if (last) { var dt = Math.min(64, t - last); shift += dt * 0.045; theta -= dt * 0.0009; }
      last = t; draw(); raf = requestAnimationFrame(tick);
    }
    layout();
    window.addEventListener('resize', layout);
    if (reduce || !('IntersectionObserver' in window)) return;
    new IntersectionObserver(function (en) {
      if (en[0].isIntersecting && !live) { live = true; last = 0; raf = requestAnimationFrame(tick); }
      else if (!en[0].isIntersecting && live) { live = false; cancelAnimationFrame(raf); }
    }, { threshold: 0.1 }).observe(hx);
  });

  /* ---------- workflow steppers: steps light up in sequence, then loop ---------- */
  $$('ol.steps').forEach(function (ol) {
    var lis = $$('li', ol); if (lis.length < 3 || reduce) return;
    ol.classList.add('anim');
    var track = document.createElement('div'); track.className = 'st-track';
    track.innerHTML = '<div class="st-fill"><span class="st-dot"></span></div>';
    ol.insertBefore(track, ol.firstChild);
    var fill = track.firstChild, i = -1, tmr = 0, live = false;
    function geo() {
      var r = ol.getBoundingClientRect(), a = lis[0].getBoundingClientRect(), b = lis[lis.length - 1].getBoundingClientRect();
      var cx = function (x) { return x.left + x.width / 2 - r.left; };
      var centered = getComputedStyle(lis[0]).textAlign === 'center';
      var x0 = centered ? cx(a) : a.left - r.left + 24, x1 = centered ? cx(b) : b.left - r.left + 24;
      track.style.left = x0 + 'px'; track.style.right = (r.width - x1) + 'px';
    }
    function step() {
      i = (i + 1) % (lis.length + 1);
      if (i === lis.length) { tmr = setTimeout(function () { lis.forEach(function (l) { l.classList.remove('done', 'cur'); }); fill.style.width = '0'; tmr = setTimeout(function () { i = -1; step(); }, 700); }, 1400); return; }
      lis.forEach(function (l, k) { l.classList.toggle('done', k < i); l.classList.toggle('cur', k === i); });
      fill.style.width = (lis.length > 1 ? (i / (lis.length - 1)) * 100 : 0) + '%';
      tmr = setTimeout(step, 1500);
    }
    geo(); window.addEventListener('resize', geo);
    new IntersectionObserver(function (en) {
      if (en[0].isIntersecting && !live) { live = true; geo(); step(); }
      else if (!en[0].isIntersecting && live) { live = false; clearTimeout(tmr); }
    }, { threshold: 0.3 }).observe(ol);
    $$('[data-flow]').forEach(function (b) { b.addEventListener('click', function () { setTimeout(geo, 30); }); });
  });

  /* ---------- hero: ThinkLab live-activity ticker + analyzer status ---------- */
  (function () {
    var items = $$('[data-tk]'), dots = $$('.tk-dots i');
    if (items.length) {
      var k = 0;
      var show = function () {
        items.forEach(function (el, j) { el.classList.toggle('on', j === k); el.classList.toggle('out', j === (k - 1 + items.length) % items.length); });
        dots.forEach(function (d, j) { d.classList.toggle('on', j === k); d.classList.toggle('done', j < k); });
      };
      show();
      if (!reduce) setInterval(function () { k = (k + 1) % items.length; if (k === 0) dots.forEach(function (d) { d.classList.remove('done'); }); show(); }, 2600);
    }
    var card = document.querySelector('.hf3'), st = card && card.querySelector('[data-st]'), sts = card && card.querySelector('[data-sts]'), bar = card && card.querySelector('.hf-prog i');
    if (card && st) {
      var S = [['Analyzer results received', 'Ready for verification', .34], ['Results verified', 'Abnormal values flagged for review', .68], ['Report approved', 'Sending to patient on WhatsApp', 1]], s = 0;
      var set = function () { card.classList.add('swap'); setTimeout(function () { st.textContent = S[s][0]; sts.textContent = S[s][1]; card.classList.remove('swap'); bar.style.transform = 'scaleX(' + S[s][2] + ')'; }, 280); };
      setTimeout(set, 600);
      if (!reduce) setInterval(function () { s = (s + 1) % S.length; if (s === 0) { bar.style.transition = 'none'; bar.style.transform = 'scaleX(0)'; void bar.offsetWidth; bar.style.transition = ''; } set(); }, 2600);
      else { bar.style.transform = 'scaleX(1)'; }
    }
  })();

  /* ---------- homepage product tour ---------- */
  $$('[data-tour]').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('[data-tour]').forEach(function (x) { x.setAttribute('aria-selected', String(x === b)); });
      $$('[data-tour-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-tour-panel') !== b.getAttribute('data-tour'); });
    });
  });
  /* ---------- workflow toggle ---------- */
  $$('[data-flow]').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('[data-flow]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      $$('[data-flow-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-flow-panel') !== b.getAttribute('data-flow'); });
    });
  });

  /* ---------- copy buttons ---------- */
  $$('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var v = b.getAttribute('data-copy');
      if (navigator.clipboard) navigator.clipboard.writeText(v).then(function () { b.textContent = 'Copied'; }, function () { b.textContent = 'Select text'; });
    });
  });

  /* ---------- forms ---------- */
  $$('main form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var req = $$('[required]', f), miss = req.filter(function (i) { return !i.value.trim(); });
      req.forEach(function (i) { i.style.borderColor = i.value.trim() ? '' : 'var(--crit)'; });
      var msg = $('.ok', f);
      if (!msg) { msg = document.createElement('div'); msg.className = 'ok'; msg.setAttribute('role', 'status'); f.appendChild(msg); }
      var show = function (text, bad) { msg.style.background = bad ? 'var(--crit-soft)' : ''; msg.style.color = bad ? 'var(--crit)' : ''; msg.textContent = text; };
      if (miss.length) { show('Please fill in the highlighted fields.', true); miss[0].focus(); return; }
      var thanks = f.id === 'mcheck'
        ? 'Thanks. Our interfacing team will confirm compatibility for this analyzer within one business day.'
        : 'Thank you. Our team will contact you within one business day.';
      if (!D.formEndpoint) { show(thanks + ' (Form not connected yet: add formEndpoint in assets/js/data.js.)'); return; }
      var btn = $('button[type="submit"]', f); if (btn) btn.disabled = true;
      var fd = new FormData(f);
      fd.append('form', f.id); fd.append('page', document.body.getAttribute('data-page') || location.pathname);
      fetch(D.formEndpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); show(thanks); f.reset(); })
        .catch(function () { show('Sorry, that didn’t go through. Please call +91 93306 87508 or email accounts@thinkwide.in.', true); })
        .then(function () { if (btn) btn.disabled = false; });
    });
  });

  /* ---------- client logos ---------- */
  $$('[data-clients]').forEach(function (box) {
    var html = (D.clients || []).map(function (c) {
      return '<span class="logo-chip">' + (c.logo ? '<img src="' + esc(c.logo) + '" alt="' + esc(c.name) + '" loading="lazy">' : esc(c.name)) + '</span>';
    }).join('');
    // marquee strips repeat the list once so the scroll loops seamlessly
    box.innerHTML = box.hasAttribute('data-loop') ? html + html.replace(/<img /g, '<img aria-hidden="true" ') : html;
  });

  /* ---------- testimonials ---------- */
  function ytId(u) { var m = String(u || '').match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : ''; }
  $$('[data-testimonials]').forEach(function (box) {
    var lim = parseInt(box.getAttribute('data-limit'), 10), list = D.testimonials || [];
    var prod = box.getAttribute('data-product');
    if (prod) {
      var mine = list.filter(function (t) { return String(t.product || '').toLowerCase().indexOf(prod.toLowerCase()) > -1; });
      // product pages show that product's stories first, then fill with approved stories from other products
      list = mine.concat(list.filter(function (t) { return mine.indexOf(t) < 0 && t.approved; }));
    }
    if (lim) list = list.slice(0, lim);
    box.innerHTML = list.map(function (t) {
      var draft = !t.approved, id = ytId(t.video), media = '';
      if (t.type === 'video') media = id && !draft
        ? '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '" title="' + esc(t.client) + ' testimonial" loading="lazy" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>'
        : '<div class="vid"><span class="pb">' + ic('play', 24) + '</span></div>';
      return '<article class="tcard' + (draft ? ' draft' : '') + '">' + (draft ? '<span class="draft-tag">Slot · awaiting client approval</span>' : '') + media +
        '<p class="q">“' + esc(t.quote) + '”</p><div class="who"><span class="av">' + (draft ? '?' : esc(String(t.client).charAt(0))) + '</span><div><b>' + esc(t.person) +
        '</b><div class="muted" style="font-size:.84rem">' + esc(t.client) + ' · ' + esc(t.city) + ' · ' + esc(t.product) + '</div></div></div></article>';
    }).join('');
  });

  /* ---------- analyzer list ---------- */
  $$('[data-machines]').forEach(function (box) {
    var rows = D.machines || [];
    if (!rows.length) return;
    box.innerHTML = '<div class="field" style="max-width:360px;margin-bottom:12px"><label for="m-search">Search by make, model or department</label><input id="m-search" type="search" placeholder="e.g. haematology"></div>' +
      '<div class="tbox"><table class="ftable"><thead><tr><th>Make</th><th>Model</th><th>Department</th><th>Interface</th></tr></thead><tbody>' +
      rows.map(function (m) { return '<tr><td>' + esc(m.make) + '</td><td>' + esc(m.model) + '</td><td>' + esc(m.dept) + '</td><td>' + esc(m.link) + '</td></tr>'; }).join('') +
      '</tbody></table></div><p class="muted" id="m-none" hidden style="margin-top:10px">No match. Use the form below and we’ll check it for you.</p>';
    var input = $('#m-search', box), trs = $$('tbody tr', box), none = $('#m-none', box);
    input.addEventListener('input', function () {
      var q = input.value.toLowerCase().trim(), shown = 0;
      trs.forEach(function (tr) { var ok = !q || tr.textContent.toLowerCase().indexOf(q) > -1; tr.hidden = !ok; if (ok) shown++; });
      none.hidden = shown > 0;
    });
  });
})();
