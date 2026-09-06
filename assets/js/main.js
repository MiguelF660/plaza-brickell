/* ============================================================================
   Plaza Brickell Collection — Lógica de la web (i18n, render, galería, form)
   ============================================================================ */
(function () {
  "use strict";

  /* ---------------- Idioma ---------------- */
  var LANG = (function () {
    var saved = localStorage.getItem("pbc_lang");
    if (saved === "es" || saved === "en") return saved;
    return (navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  })();

  function t(obj) { return obj ? (obj[LANG] != null ? obj[LANG] : obj.en) : ""; }

  /* Textos de interfaz (lo que no está en data.js) */
  var UI = {
    nav_apts:   { es: "Apartamentos", en: "Apartments" },
    nav_host:   { es: "Anfitriona", en: "Host" },
    nav_area:   { es: "La zona", en: "The area" },
    nav_contact:{ es: "Contacto", en: "Contact" },
    cta_view:   { es: "Ver apartamentos", en: "View apartments" },
    cta_wa:     { es: "WhatsApp", en: "WhatsApp" },
    apts_kick:  { es: "Nuestros apartamentos", en: "Our apartments" },
    apts_title: { es: "Estancias de lujo en The Plaza on Brickell", en: "Luxury stays at The Plaza on Brickell" },
    apts_sub:   { es: "Apartamentos cuidados al detalle, con limpieza impecable y todo lo necesario para vivir Miami como en casa.", en: "Apartments cared for down to the last detail, impeccably clean and fully equipped to live Miami like home." },
    area_kick:  { es: "Dónde te alojas", en: "Where you stay" },
    area_title: { es: "Brickell, el corazón de Miami", en: "Brickell, the heart of Miami" },
    contact_kick:{ es: "Hablemos", en: "Let's talk" },
    contact_title:{ es: "Consulta disponibilidad", en: "Check availability" },
    contact_sub: { es: "Cuéntame tus fechas y te ayudo a elegir el apartamento perfecto. Respuesta rápida por WhatsApp o email.", en: "Tell me your dates and I'll help you pick the perfect apartment. Fast reply by WhatsApp or email." },
    f_name:  { es: "Nombre", en: "Name" },
    f_email: { es: "Email", en: "Email" },
    f_phone: { es: "Teléfono / WhatsApp", en: "Phone / WhatsApp" },
    f_dates: { es: "Fechas (entrada – salida)", en: "Dates (check-in – check-out)" },
    f_guests:{ es: "Nº de huéspedes", en: "Guests" },
    f_apt:   { es: "Apartamento de interés", en: "Apartment of interest" },
    f_any:   { es: "Cualquiera / aún no lo sé", en: "Any / not sure yet" },
    f_msg:   { es: "Mensaje (opcional)", en: "Message (optional)" },
    f_send:  { es: "Enviar consulta", en: "Send inquiry" },
    f_ok:    { es: "¡Gracias! Te responderé enseguida. Si quieres respuesta inmediata, escríbeme por WhatsApp.", en: "Thank you! I'll get back to you shortly. For an instant reply, message me on WhatsApp." },
    f_err:   { es: "No se pudo enviar. Escríbeme directamente por WhatsApp, por favor.", en: "Couldn't send. Please message me directly on WhatsApp." },
    f_req:   { es: "Por favor, indica al menos tu nombre y un teléfono válido.", en: "Please enter at least your name and a valid phone number." },
    m_beds:  { es: "hab", en: "bed" },
    m_baths: { es: "baños", en: "bath" },
    m_park:  { es: "parking", en: "parking" },
    m_view:  { es: "Vistas", en: "Views" },
    b_view:  { es: "Ver apartamento", en: "View apartment" },
    b_check: { es: "Consultar disponibilidad", en: "Check availability" },
    b_airbnb:{ es: "Ver / reservar en Airbnb", en: "View / book on Airbnb" },
    d_back:  { es: "Volver a todos los apartamentos", en: "Back to all apartments" },
    d_about: { es: "Sobre el apartamento", en: "About this apartment" },
    d_amen:  { es: "Servicios y amenidades", en: "Amenities" },
    d_gallery:{ es: "Galería", en: "Gallery" },
    d_location:{ es: "Ubicación", en: "Location" },
    d_book_t:{ es: "¿Te interesan estas fechas?", en: "Interested in these dates?" },
    d_price: { es: "Consulta disponibilidad y tarifas", en: "Check availability & rates" },
    d_or:    { es: "o", en: "or" },
    d_pro:   { es: "Próximamente fotos profesionales de este apartamento.", en: "Professional photos of this apartment coming soon." },
    foot_rights:{ es: "Todos los derechos reservados.", en: "All rights reserved." },
    photos:  { es: "fotos", en: "photos" },
    d_allphotos:{ es: "Mostrar todas las fotos", en: "Show all photos" },
    d_entire:{ es: "Apartamento entero en Miami", en: "Entire rental unit in Miami" },
    d_guests:{ es: "huéspedes", en: "guests" },
    d_bedrooms:{ es: "habitaciones", en: "bedrooms" },
    d_bedsn: { es: "camas", en: "beds" },
    d_bathsn:{ es: "baños", en: "baths" },
    d_hostby:{ es: "Anfitriona:", en: "Hosted by" },
    d_hostsub:{ es: "Vive en Brickell · Respuesta rápida por WhatsApp", en: "Lives in Brickell · Fast replies on WhatsApp" },
    d_more:  { es: "Mostrar más", en: "Show more" },
    d_less:  { es: "Mostrar menos", en: "Show less" },
    d_sleep: { es: "Dónde dormirás", en: "Where you'll sleep" },
    d_offers:{ es: "Qué ofrece este alojamiento", en: "What this place offers" },
    d_where: { es: "Dónde estarás", en: "Where you'll be" },
    d_know:  { es: "Lo que debes saber", en: "Things to know" },
    d_rules: { es: "Normas de la casa", en: "House rules" },
    d_checkin:{ es: "Entrada a partir de las", en: "Check-in after" },
    d_checkout:{ es: "Salida antes de las", en: "Checkout before" },
    d_maxg:  { es: "Máximo", en: "Maximum" },
    d_cancel:{ es: "Cancelación", en: "Cancellation" },
    d_cancel_t:{ es: "Consulta las condiciones de cancelación al reservar. Reservando directo con Marga tienes flexibilidad y sin comisiones de plataforma.", en: "Cancellation terms are confirmed when you book. Booking direct with Marga gives you flexibility with no platform fees." },
    d_book_t2:{ es: "Reserva directa", en: "Book direct" },
    d_book_s:{ es: "Mejor precio garantizado, sin comisiones de plataforma", en: "Best price guaranteed, no platform fees" },
    d_in:    { es: "Llegada", en: "Check-in" },
    d_out:   { es: "Salida", en: "Checkout" },
    d_guests_l:{ es: "Huéspedes", en: "Guests" },
    d_reserve:{ es: "Consultar disponibilidad", en: "Check availability" },
    d_nocharge:{ es: "No se te cobrará nada todavía", en: "You won't be charged yet" },
    d_wa_hint:{ es: "Te contesto por WhatsApp con precio y disponibilidad.", en: "I'll reply on WhatsApp with price and availability." },
    d_rating:{ es: "valoración en Airbnb", en: "Airbnb rating" },
    d_new:   { es: "Nuevo", en: "New" },
  };

  function waLink(msg) {
    return "https://wa.me/" + window.SITE.whatsapp + "?text=" + encodeURIComponent(msg);
  }
  function photoPath(id, n) {
    return "assets/img/apartments/" + id + "/" + String(n).padStart(2, "0") + ".jpg";
  }
  /* Miniatura (480px) generada por _process_assets.py en <id>/t/ */
  function thumbPath(id, n) {
    return "assets/img/apartments/" + id + "/t/" + String(n).padStart(2, "0") + ".jpg";
  }
  function aptUrl(id) { return "apartment-" + id + ".html"; }
  function aptById(id) {
    return window.APARTMENTS.filter(function (a) { return a.id === id; })[0];
  }

  /* ---------------- Aplicar textos data-i18n ---------------- */
  function applyStaticI18n() {
    document.documentElement.lang = LANG;
    document.querySelectorAll("[data-ui]").forEach(function (el) {
      var k = el.getAttribute("data-ui");
      if (UI[k]) el.textContent = t(UI[k]);
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      var active = b.getAttribute("data-lang") === LANG;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  /* ---------------- Render: tarjetas home ---------------- */
  function renderHome() {
    var grid = document.getElementById("apts");
    if (!grid) return;
    grid.innerHTML = window.APARTMENTS.map(function (a) {
      var meta = [];
      if (a.beds) meta.push('<span>🛏️ ' + a.beds + ' ' + t(UI.m_beds) + '</span>');
      if (a.baths) meta.push('<span>🛁 ' + a.baths + ' ' + t(UI.m_baths) + '</span>');
      if (a.parking) meta.push('<span>🚗 ' + t(UI.m_park) + '</span>');
      var flag = a.proPhotosPending ? '<span class="card__flag">' + (LANG === "es" ? "Nuevo" : "New") + '</span>' : '';
      return '' +
        '<article class="card reveal">' +
          '<a class="card__media" href="' + aptUrl(a.id) + '">' +
            '<img loading="lazy" src="' + thumbPath(a.id, 1) + '" ' +
              'srcset="' + thumbPath(a.id, 1) + ' 480w, ' + photoPath(a.id, 1) + ' 1600w" ' +
              'sizes="(max-width:680px) 92vw, (max-width:980px) 46vw, 380px" alt="' + a.nickname + '">' +
            '<span class="card__badge">#' + a.id + ' · The Plaza</span>' + flag +
          '</a>' +
          '<div class="card__body">' +
            '<div class="card__nick">“' + a.nickname + '”</div>' +
            '<h3 class="card__title">' + t(a.headline) + '</h3>' +
            '<div class="card__type">' + t(a.type) + '</div>' +
            '<p class="card__short">' + t(a.short) + '</p>' +
            '<div class="card__meta">' + meta.join("") + '</div>' +
            '<div class="card__foot">' +
              '<a class="btn btn--navy" href="' + aptUrl(a.id) + '">' + t(UI.b_view) + '</a>' +
              (a.airbnb ? '<a class="btn btn--ghost" target="_blank" rel="noopener" href="' + a.airbnb + '">Airbnb ↗</a>' : '') +
            '</div>' +
          '</div>' +
        '</article>';
    }).join("");
    observeReveal();
  }

  /* ---------------- Render: opciones del select de contacto ---------------- */
  function renderAptOptions() {
    var sel = document.getElementById("f_apt_select");
    if (!sel) return;
    var opts = '<option value="">' + t(UI.f_any) + '</option>';
    window.APARTMENTS.forEach(function (a) {
      opts += '<option value="#' + a.id + ' – ' + a.nickname + '">#' + a.id + ' · ' + t(a.headline) + '</option>';
    });
    sel.innerHTML = opts;
  }

  /* ---------------- Render: página de detalle (estilo Airbnb) ---------------- */
  function renderDetail() {
    var root = document.getElementById("detail");
    if (!root) return;
    var id = window.APT_ID || new URLSearchParams(location.search).get("id");
    var a = aptById(id) || window.APARTMENTS[0];
    var S = window.SITE;
    document.title = a.nickname + " · " + S.brand;

    /* Mosaico: 1 grande + 4 pequeñas */
    var mosaic = '';
    for (var m = 1; m <= Math.min(5, a.photos); m++) {
      mosaic += '<div class="mosaic__cell" data-i="' + (m - 1) + '"><img ' + (m === 1 ? '' : 'loading="lazy" ') +
        'src="' + photoPath(a.id, m) + '" alt="' + a.nickname + ' ' + m + '"></div>';
    }

    /* Resumen tipo "4 huéspedes · 2 habitaciones · 4 camas · 2 baños" */
    var facts = [];
    if (a.guests) facts.push(a.guests + ' ' + t(UI.d_guests));
    if (a.beds) facts.push(a.beds + ' ' + t(UI.d_bedrooms));
    if (a.bedsTotal) facts.push(a.bedsTotal + ' ' + t(UI.d_bedsn));
    if (a.baths) facts.push(a.baths + ' ' + t(UI.d_bathsn));
    var rating = a.rating
      ? '<span class="rating">★ ' + a.rating.toFixed(2) + ' <span class="muted">· ' + t(UI.d_rating) + '</span></span>'
      : '<span class="rating"><span class="badge-new">' + t(UI.d_new) + '</span></span>';

    var highlights = (a.highlights || []).map(function (k) {
      var h = window.HIGHLIGHTS[k]; if (!h) return '';
      return '<li><span class="hl__icon">' + h.icon + '</span><div><strong>' + t(h) + '</strong><span>' + t(h.sub) + '</span></div></li>';
    }).join('');

    var sleep = (a.bedrooms || []).map(function (b) {
      return '<div class="sleep__card"><div class="sleep__icon">🛏️</div><strong>' + t(b.name) + '</strong><span>' + t(b.beds) + '</span></div>';
    }).join('');

    var amen = a.amenities.map(function (k) {
      var x = window.AMENITIES[k]; if (!x) return '';
      return '<li><span>' + x.icon + '</span>' + t(x) + '</li>';
    }).join('');

    var rules = (a.rules || []).map(function (k) {
      var r = window.RULES[k]; if (!r) return '';
      return '<li>' + r.icon + ' ' + t(r) + '</li>';
    }).join('');

    var thumbs = '';
    for (var i = 1; i <= a.photos; i++) {
      thumbs += '<img loading="lazy" data-i="' + (i - 1) + '" src="' + thumbPath(a.id, i) + '" alt="' + a.nickname + ' ' + i + '">';
    }

    var guestOpts = '';
    for (var g = 1; g <= (a.guests || 8); g++) guestOpts += '<option value="' + g + '"' + (g === 2 ? ' selected' : '') + '>' + g + '</option>';

    var notice = a.proPhotosPending ? '<div class="notice">📸 ' + t(UI.d_pro) + '</div>' : '';
    var today = new Date().toISOString().slice(0, 10);

    root.innerHTML = '' +
      '<div class="wrap detail">' +
        '<a class="backlink" href="index.html#apartamentos">← ' + t(UI.d_back) + '</a>' +
        '<header class="detail__head">' +
          '<h1>' + t(a.headline) + ' <span class="nick">“' + a.nickname + '”</span></h1>' +
          '<div class="detail__sub">' + rating + '<span class="dot">·</span><span>The Plaza on Brickell · #' + a.id + '</span><span class="dot">·</span><span>Brickell, Miami</span></div>' +
        '</header>' +
        '<div class="mosaic" id="mosaic">' + mosaic +
          '<button class="mosaic__all" data-i="0">▦ ' + t(UI.d_allphotos) + ' (' + a.photos + ')</button>' +
        '</div>' +
        '<div class="detail-layout">' +
          '<div class="detail-body">' +
            '<section class="sec sec--summary">' +
              '<h2>' + t(UI.d_entire) + '</h2>' +
              '<p class="facts">' + facts.join(' <span class="dot">·</span> ') + '</p>' +
            '</section>' +
            '<section class="sec host">' +
              '<img src="assets/img/brand/marga.jpg" alt="' + S.host.name + '">' +
              '<div><strong>' + t(UI.d_hostby) + ' ' + S.host.name + '</strong><span>' + t(UI.d_hostsub) + '</span></div>' +
            '</section>' +
            '<section class="sec"><ul class="hl">' + highlights + '</ul></section>' +
            '<section class="sec">' +
              '<div class="desc collapsed" id="desc"><p>' + t(a.description) + '</p></div>' +
              '<button class="linkbtn" id="descToggle">' + t(UI.d_more) + ' ›</button>' +
              notice +
            '</section>' +
            (sleep ? '<section class="sec"><h2>' + t(UI.d_sleep) + '</h2><div class="sleep">' + sleep + '</div></section>' : '') +
            '<section class="sec"><h2>' + t(UI.d_offers) + '</h2><ul class="amen-grid">' + amen + '</ul></section>' +
            '<section class="sec"><h2>' + t(UI.d_gallery) + '</h2><div class="thumbs" id="thumbs">' + thumbs + '</div></section>' +
          '</div>' +
          '<aside>' +
            '<div class="booking-card">' +
              '<h3>' + t(UI.d_book_t2) + '</h3>' +
              '<p class="price-note">' + t(UI.d_book_s) + '</p>' +
              '<form class="bookform" id="bookform">' +
                '<div class="bookform__row">' +
                  '<label><span>' + t(UI.d_in) + '</span><input type="date" name="in" min="' + today + '" required></label>' +
                  '<label><span>' + t(UI.d_out) + '</span><input type="date" name="out" min="' + today + '" required></label>' +
                '</div>' +
                '<label class="bookform__g"><span>' + t(UI.d_guests_l) + '</span><select name="g">' + guestOpts + '</select></label>' +
                '<button type="submit" class="btn btn--wa">💬 ' + t(UI.d_reserve) + '</button>' +
                '<p class="nocharge">' + t(UI.d_nocharge) + '</p>' +
                '<p class="wa-hint">' + t(UI.d_wa_hint) + '</p>' +
              '</form>' +
              (a.airbnb ? '<div class="or">— ' + t(UI.d_or) + ' —</div>' +
              '<a class="btn btn--ghost" target="_blank" rel="noopener" href="' + a.airbnb + '">' + t(UI.b_airbnb) + ' ↗</a>' : '') +
            '</div>' +
          '</aside>' +
        '</div>' +
        '<section class="sec sec--wide">' +
          '<h2>' + t(UI.d_where) + '</h2>' +
          '<p class="muted">' + a.tower + '</p>' +
          '<iframe class="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ' +
            'src="https://www.google.com/maps?q=' + encodeURIComponent(a.tower) + '&output=embed"></iframe>' +
        '</section>' +
        '<section class="sec sec--wide">' +
          '<h2>' + t(UI.d_know) + '</h2>' +
          '<div class="know">' +
            '<div><h4>' + t(UI.d_rules) + '</h4><ul>' +
              (a.checkin ? '<li>🕓 ' + t(UI.d_checkin) + ' ' + a.checkin + '</li>' : '') +
              (a.checkout ? '<li>🕚 ' + t(UI.d_checkout) + ' ' + a.checkout + '</li>' : '') +
              (a.guests ? '<li>👥 ' + t(UI.d_maxg) + ' ' + a.guests + ' ' + t(UI.d_guests) + '</li>' : '') +
              rules + '</ul></div>' +
            '<div><h4>' + t(UI.d_cancel) + '</h4><p>' + t(UI.d_cancel_t) + '</p></div>' +
          '</div>' +
        '</section>' +
      '</div>';

    /* Descripción plegable */
    var desc = document.getElementById('desc'), tog = document.getElementById('descToggle');
    if (desc.scrollHeight <= 260) { tog.style.display = 'none'; desc.classList.remove('collapsed'); }
    tog.addEventListener('click', function () {
      var c = desc.classList.toggle('collapsed');
      tog.textContent = (c ? t(UI.d_more) : t(UI.d_less)) + ' ›';
    });

    /* Formulario de reserva → WhatsApp con fechas */
    document.getElementById('bookform').addEventListener('submit', function (e) {
      e.preventDefault();
      var f = e.target, din = f.in.value, dout = f.out.value, g = f.g.value;
      var msg = (LANG === 'es'
        ? 'Hola Marga, me interesa el apartamento #' + a.id + ' (' + a.nickname + ') del ' + din + ' al ' + dout + ' para ' + g + ' huéspedes. ¿Disponibilidad y precio?'
        : 'Hi Marga, I am interested in apartment #' + a.id + ' (' + a.nickname + ') from ' + din + ' to ' + dout + ' for ' + g + ' guests. Availability and price?');
      window.open(waLink(msg), '_blank', 'noopener');
    });

    setupLightbox(a);
  }

  /* ---------------- Lightbox ----------------
     renderDetail() se re-ejecuta al cambiar de idioma: #thumbs y #heroImg son
     elementos nuevos (se re-vinculan siempre), pero el lightbox y `document`
     persisten — sus listeners se vinculan UNA sola vez (lbState.bound). */
  var lbState = { apt: null, cur: 0, bound: false };
  function lbShow(i) {
    var lb = document.getElementById("lb");
    var a = lbState.apt;
    if (!lb || !a) return;
    lbState.cur = (i + a.photos) % a.photos;
    lb.querySelector("img").src = photoPath(a.id, lbState.cur + 1);
    lb.querySelector(".lb__counter").textContent = (lbState.cur + 1) + " / " + a.photos;
  }
  function lbOpen(i) {
    var lb = document.getElementById("lb");
    lbShow(i); lb.classList.add("open"); document.body.style.overflow = "hidden";
  }
  function lbClose() {
    var lb = document.getElementById("lb");
    lb.classList.remove("open"); document.body.style.overflow = "";
  }
  function setupLightbox(a) {
    var lb = document.getElementById("lb");
    if (!lb) return;
    lbState.apt = a;

    document.getElementById("thumbs").addEventListener("click", function (e) {
      var th = e.target.closest("img[data-i]"); if (th) lbOpen(parseInt(th.getAttribute("data-i"), 10));
    });
    document.getElementById("mosaic").addEventListener("click", function (e) {
      var c = e.target.closest("[data-i]"); if (c) lbOpen(parseInt(c.getAttribute("data-i"), 10));
    });

    if (lbState.bound) return;
    lbState.bound = true;
    lb.querySelector(".lb__close").addEventListener("click", lbClose);
    lb.querySelector(".lb__prev").addEventListener("click", function () { lbShow(lbState.cur - 1); });
    lb.querySelector(".lb__next").addEventListener("click", function () { lbShow(lbState.cur + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lbClose(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") lbClose();
      if (e.key === "ArrowLeft") lbShow(lbState.cur - 1);
      if (e.key === "ArrowRight") lbShow(lbState.cur + 1);
    });
  }

  /* ---------------- Formulario de contacto ---------------- */
  function setupForm() {
    var form = document.getElementById("inquiry");
    if (!form) return;
    var msg = form.querySelector(".form__msg");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        dates: form.dates.value.trim(),
        guests: form.guests.value.trim(),
        apartment: form.apartment.value,
        message: form.message.value.trim(),
        source: "web_plaza_brickell",
      };
      if (data.name.length < 2 || data.phone.replace(/[^0-9]/g, "").length < 6) {
        msg.className = "form__msg err";
        msg.textContent = t(UI.f_req);
        (data.name.length < 2 ? form.name : form.phone).focus();
        return;
      }
      var waText = (LANG === "es" ? "Hola Marga, consulta desde la web:\n" : "Hi Marga, inquiry from the website:\n") +
        "• " + data.name + "\n• " + data.phone + "\n• " + data.email + "\n" +
        (data.apartment ? "• " + data.apartment + "\n" : "") +
        (data.dates ? "• " + (LANG === "es" ? "Fechas: " : "Dates: ") + data.dates + "\n" : "") +
        (data.guests ? "• " + (LANG === "es" ? "Huéspedes: " : "Guests: ") + data.guests + "\n" : "") +
        (data.message ? "• " + data.message : "");

      var WORKER = window.SITE.workerUrl || "";
      function ok() { msg.className = "form__msg ok"; msg.textContent = t(UI.f_ok); form.reset(); renderAptOptions(); }
      function toWhatsApp() { window.open(waLink(waText), "_blank"); ok(); }

      if (WORKER) {
        fetch(WORKER, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
          .then(function (r) { if (!r.ok) throw 0; return r.json(); })
          .then(ok)
          .catch(function () { toWhatsApp(); });
      } else {
        // Fase 1 sin Worker desplegado: la consulta se entrega por WhatsApp.
        toWhatsApp();
      }
    });
  }

  /* ---------------- Animación al hacer scroll ---------------- */
  var io;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (!io) io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { io.observe(el); });
  }

  /* ---------------- Nav móvil + selector idioma ---------------- */
  function setupChrome() {
    var burger = document.querySelector(".nav__burger");
    var links = document.querySelector(".nav__links");
    if (burger && links) burger.addEventListener("click", function () { links.classList.toggle("open"); });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () {
        LANG = b.getAttribute("data-lang");
        localStorage.setItem("pbc_lang", LANG);
        renderAll();
      });
    });
  }

  /* ---------------- Bindings declarativos (data-bind / -href / -src / -wa) ----
     Permiten que el HTML lea textos de SITE / PLACES sin duplicarlos.        */
  var DEFAULT_WA = {
    es: "Hola Marga, me interesa una estancia en Plaza Brickell Collection. ¿Me ayudas?",
    en: "Hi Marga, I'm interested in a stay at Plaza Brickell Collection. Can you help?",
  };
  function resolve(path) {
    return path.split(".").reduce(function (o, k) { return o && o[k]; }, window);
  }
  function applyBindings() {
    document.querySelectorAll("[data-bind]").forEach(function (el) {
      var v = resolve(el.getAttribute("data-bind"));
      if (v == null) return;
      el.textContent = (typeof v === "object" && (v.es != null || v.en != null)) ? t(v) : v;
    });
    document.querySelectorAll("[data-bind-src]").forEach(function (el) {
      var v = resolve(el.getAttribute("data-bind-src")); if (v) el.src = v;
    });
    document.querySelectorAll("[data-bind-href]").forEach(function (el) {
      var v = resolve(el.getAttribute("data-bind-href")); if (v) el.setAttribute("href", v);
    });
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      el.setAttribute("href", waLink(t(DEFAULT_WA)));
    });
  }

  function renderAll() {
    applyStaticI18n();
    applyBindings();
    renderHome();
    renderAptOptions();
    renderDetail();
  }

  /* ---------------- Datos estructurados (SEO / Google) ---------------- */
  function injectStructuredData() {
    var SITE_URL = window.SITE.baseUrl || "https://" + (window.SITE.domain || "margarivera.com");
    var isDetail = !!document.getElementById("detail");
    var graph;
    if (isDetail) {
      var id = window.APT_ID || new URLSearchParams(location.search).get("id");
      var a = aptById(id) || window.APARTMENTS[0];
      var imgs = [];
      for (var i = 1; i <= Math.min(a.photos, 8); i++) imgs.push(SITE_URL + "/" + photoPath(a.id, i));
      graph = {
        "@context": "https://schema.org", "@type": "Apartment",
        name: window.SITE.brand + " — " + a.nickname,
        description: a.description.en,
        numberOfBedrooms: a.beds || undefined,
        numberOfBathroomsTotal: a.baths || undefined,
        image: imgs,
        url: SITE_URL + "/" + aptUrl(a.id),
        address: { "@type": "PostalAddress", streetAddress: a.tower, addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" },
      };
    } else {
      graph = {
        "@context": "https://schema.org", "@type": "LodgingBusiness",
        name: window.SITE.brand, description: window.PLACES.plaza.body.en,
        image: SITE_URL + "/assets/img/brand/og.jpg", url: SITE_URL + "/",
        telephone: "+" + window.SITE.whatsapp, email: window.SITE.email,
        priceRange: "$$$", areaServed: "Brickell, Miami",
        address: { "@type": "PostalAddress", streetAddress: "950 Brickell Bay Dr", addressLocality: "Miami", addressRegion: "FL", postalCode: "33131", addressCountry: "US" },
      };
    }
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(graph);
    document.head.appendChild(s);
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupChrome();
    renderAll();
    injectStructuredData();
    setupForm();
    observeReveal();
  });
})();
