// Kobalt Çini, 3. deneme. Script yoksa sayfa eksiksiz okunur: aşamalar alt alta açık durur,
// form e-posta adresine gider.

const azHareket = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Bölüme girince bir kez beliren parçalar; hiçbir şey gizli kalmaz.
(() => {
  const hedefler = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) { hedefler.forEach((el) => el.classList.add('is-in')); return; }
  const io = new IntersectionObserver((girdiler) => {
    for (const g of girdiler) {
      if (!g.isIntersecting) continue;
      g.target.classList.add('is-in');
      io.unobserve(g.target);
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  hedefler.forEach((el) => io.observe(el));
  addEventListener('load', () => setTimeout(() => {
    hedefler.forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in'); });
  }, 2500));
})();

// Üst çubuk, altındaki bölümün zemin ve yazı rengini alır.
(() => {
  const bolumler = document.querySelectorAll('[data-bg]');
  const kok = document.documentElement.style;
  const io = new IntersectionObserver((girdiler) => {
    for (const g of girdiler) {
      if (!g.isIntersecting) continue;
      kok.setProperty('--header-bg', g.target.dataset.bg);
      kok.setProperty('--header-ink', g.target.dataset.ink);
    }
  }, { rootMargin: '-32px 0px -95% 0px' });
  bolumler.forEach((el) => io.observe(el));
})();

// Yapım aşamaları: biri açılınca karo o aşamadaki hâlini gösterir.
(() => {
  const asamalar = [...document.querySelectorAll('.asama')];
  const ac = (hedef) => {
    for (const a of asamalar) {
      const acik = a === hedef;
      a.classList.toggle('acik', acik);
      a.querySelector('button').setAttribute('aria-expanded', String(acik));
    }
  };
  asamalar.forEach((a) => a.querySelector('button').addEventListener('click', () => ac(a)));
  ac(asamalar[0]);
})();

// Şerit kesintisiz kaysın diye görseller bir kez daha eklenir.
(() => {
  const ic = document.querySelector('.serit-ic');
  if (!ic || azHareket || matchMedia('(max-width: 40em)').matches) return;
  ic.append(...[...ic.children].map((img) => img.cloneNode()));
  ic.classList.add('akiyor');
})();

if (azHareket) document.querySelectorAll('video').forEach((v) => { v.removeAttribute('autoplay'); v.pause(); });

// Ziyaret formu: e-posta uygulamasında doldurulmuş bir ileti açar.
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const ad = f.get('ad').trim();
  const gun = f.get('gun');
  const konu = 'Atölye ziyareti' + (gun ? `, ${gun}` : '');
  const govde = `Merhaba,\n\n${gun ? `${gun} günü` : 'Bu hafta'} atölyeye gelip desen ve renk seçmek istiyorum.\n\n${ad}`;
  location.href = `mailto:merhaba@kobaltcini.example?subject=${encodeURIComponent(konu)}&body=${encodeURIComponent(govde)}`;
});
