// Kobalt Çini, 4. deneme: ilerleme çubuğu, etkin bölüm, karonun yapım aşaması, kademeli belirme.
(() => {
  const kok = document.documentElement;

  // İlerleme çubuğu
  const cubuk = document.querySelector('.ilerleme');
  const ilerlemeyiYaz = () => {
    const toplam = kok.scrollHeight - innerHeight;
    cubuk.style.setProperty('--ilerleme', toplam > 0 ? Math.min(scrollY / toplam, 1) : 0);
  };

  // Üst çubukta etkin bölüm
  const baglantilar = [...document.querySelectorAll('.bolumler a')];
  const bolumler = baglantilar.map((a) => document.querySelector(a.getAttribute('href')));
  const etkinBolumuBul = () => {
    const cizgi = innerHeight * 0.35;
    let etkin = -1;
    bolumler.forEach((b, i) => { if (b.getBoundingClientRect().top <= cizgi) etkin = i; });
    baglantilar.forEach((a, i) => {
      if (i === etkin) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  };

  // Kaydırmada iki iş tek karede yapılır
  let bekliyor = false;
  const kare = () => { ilerlemeyiYaz(); etkinBolumuBul(); bekliyor = false; };
  addEventListener('scroll', () => {
    if (!bekliyor) { bekliyor = true; requestAnimationFrame(kare); }
  }, { passive: true });
  kare();

  // Yapım: görünen adım karonun hâlini belirler
  const karo = document.getElementById('yapan-karo');
  const ad = document.getElementById('asama-adi');
  const adlar = ['', 'Gövde: kurumuş çamur', 'Astar ve tahrir çizgileri', 'Boyanmış, sırsız', 'Sırlı, fırına girmeden', 'Fırından çıkmış hâli'];
  const adimlar = document.querySelectorAll('.adim');
  const adimIzle = new IntersectionObserver((girdiler) => {
    girdiler.forEach((g) => {
      if (!g.isIntersecting) return;
      const asama = g.target.dataset.asama;
      adimlar.forEach((a) => a.classList.toggle('etkin', a === g.target));
      karo.dataset.asama = asama;
      ad.textContent = adlar[asama];
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  adimlar.forEach((a) => adimIzle.observe(a));

  // Kademeli belirme
  const belirt = new IntersectionObserver((girdiler) => {
    girdiler.forEach((g) => {
      if (!g.isIntersecting) return;
      g.target.classList.add('gorundu');
      belirt.unobserve(g.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('[data-reveal]').forEach((el) => belirt.observe(el));
})();
