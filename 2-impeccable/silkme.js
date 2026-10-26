// Silkme: motif yolları iğne deliklerine çevrilir, kömür tozu deliklerden geçer.
// Açılışta tek bir silkme geçişi olur; sonra imleç geçtiği yere toz bırakır.
(() => {
  const tuval = document.querySelector(".silkme");
  const kaynak = document.querySelector(".kaynak");
  const ctx = tuval.getContext("2d");
  const azHareket = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ARALIK = 9;          // delikler arası, css piksel
  const GECIS_MS = 1700;     // açılış silkmesi
  let delikler = [];         // {x, y, esik, toz, jx, jy}
  let baslangic = 0;
  let gecisBitti = azHareket;
  let cizimBekliyor = false;

  function yerlesim(w, h) {
    if (w <= 680) {
      const S = w * 1.0;
      return { S, ox: w * 0.52 - S / 2, oy: 72 - S * 0.1 };
    }
    const S = Math.max(h * 1.08, w * 0.6);
    return { S, ox: w - S * 0.9, oy: h * 0.52 - S / 2 };
  }

  function kur() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = tuval.clientWidth, h = tuval.clientHeight;
    tuval.width = Math.round(w * dpr);
    tuval.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const { S, ox, oy } = yerlesim(w, h);
    const olcek = S / 1000;
    const eski = delikler;
    delikler = [];
    for (const yol of kaynak.querySelectorAll(".m")) {
      const uzunluk = yol.getTotalLength();
      const adim = ARALIK / olcek;
      for (let s = 0; s < uzunluk; s += adim) {
        const p = yol.getPointAtLength(s);
        const x = ox + p.x * olcek, y = oy + p.y * olcek;
        if (x < -10 || y < -10 || x > w + 10 || y > h + 10) continue;
        delikler.push({
          x, y,
          esik: (x / w) * 0.75 + (y / h) * 0.25 + Math.random() * 0.08,
          toz: 0,
          jx: (Math.random() - 0.5) * 2.4,
          jy: (Math.random() - 0.5) * 2.4,
        });
      }
    }
    // Yeniden boyutlanınca biriken toz kaybolmasın.
    if (gecisBitti || eski.length) delikler.forEach(d => { d.toz = Math.max(d.toz, gecisBitti ? 1 : 0); });
    ciz();
  }

  function ciz() {
    cizimBekliyor = false;
    const w = tuval.clientWidth, h = tuval.clientHeight;
    ctx.clearRect(0, 0, w, h);
    for (const d of delikler) {
      if (d.toz > 0) {
        const a = Math.min(d.toz, 1);
        ctx.fillStyle = `rgba(47,46,49,${0.10 * a + 0.12 * Math.max(d.toz - 1, 0)})`;
        ctx.beginPath(); ctx.arc(d.x + d.jx, d.y + d.jy, 4.6, 0, 7); ctx.fill();
        ctx.fillStyle = `rgba(47,46,49,${0.85 * a})`;
        ctx.beginPath(); ctx.arc(d.x, d.y, 2.1, 0, 7); ctx.fill();
      }
      // iğne deliği: kâğıtta açık renkli kenarlı küçük boşluk
      ctx.fillStyle = "rgba(85,88,91,.55)";
      ctx.beginPath(); ctx.arc(d.x, d.y, 1.1, 0, 7); ctx.fill();
    }
  }

  function istek() {
    if (!cizimBekliyor) { cizimBekliyor = true; requestAnimationFrame(ciz); }
  }

  function gecis(t) {
    if (!baslangic) baslangic = t;
    const p = ((t - baslangic) / GECIS_MS) * 1.12;
    for (const d of delikler) d.toz = Math.max(d.toz, Math.min(Math.max((p - d.esik) / 0.08, 0), 1));
    ciz();
    if (p < 1.12) requestAnimationFrame(gecis);
    else gecisBitti = true;
  }

  tuval.parentElement.addEventListener("pointermove", e => {
    if (e.pointerType === "touch") return;
    const r = tuval.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    for (const d of delikler) {
      const m = Math.hypot(d.x - x, d.y - y);
      if (m < 56) d.toz = Math.min(1.8, d.toz + 0.18 * (1 - m / 56));
    }
    istek();
  });

  let zamanlayici;
  window.addEventListener("resize", () => {
    clearTimeout(zamanlayici);
    zamanlayici = setTimeout(kur, 120);
  });

  kur();
  if (azHareket) { delikler.forEach(d => { d.toz = 1; }); ciz(); }
  else requestAnimationFrame(gecis);

  // Desen kartları: dokunarak ya da klavyeyle kâğıdı kaldır.
  for (const karo of document.querySelectorAll(".desen .karo")) {
    karo.addEventListener("click", () => {
      const acik = karo.getAttribute("aria-pressed") === "true";
      karo.setAttribute("aria-pressed", String(!acik));
    });
  }

  // Bugün açık mı: İstanbul saatine göre, salıdan pazara 10.00–18.00.
  const durum = document.querySelector("[data-durum]");
  const simdi = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Istanbul", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23",
  }).formatToParts(new Date());
  const parca = k => simdi.find(p => p.type === k).value;
  const gun = parca("weekday");
  const dakika = Number(parca("hour")) * 60 + Number(parca("minute"));
  const acik = gun !== "Mon" && dakika >= 600 && dakika < 1080;
  if (acik) {
    durum.textContent = "Açık, 18.00'e kadar";
  } else if (gun === "Mon") {
    durum.textContent = "Bugün kapalı, salı 10.00'da açılıyor";
  } else if (dakika < 600) {
    durum.textContent = "Bugün 10.00'da açılıyor";
  } else {
    durum.textContent = gun === "Sun" ? "Kapandı, salı 10.00'da açılıyor" : "Kapandı, yarın 10.00'da açılıyor";
  }
  durum.dataset.acik = String(acik);
})();
