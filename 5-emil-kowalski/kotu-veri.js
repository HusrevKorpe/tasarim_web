// break-ui: yalnız ?veri= ile yüklenir, yayındaki sayfada çalışmaz.
// Veri, gerçek verinin girdiği sınırdan (window.VERI) değişir; bileşene dokunulmaz.
(() => {
  const demo = window.VERI;
  const durum = new URLSearchParams(location.search).get('veri') || 'demo';
  const kotu = {
    desenler: [
      { kod: 'KC-101-B', ad: 'Çift lale ve hatayili, köşebentli büyük pano bordürü', karo: 'lale', renk: 'Kobalt, firuze, mercan, yeşil ve mor; süt beyazı zemin üstüne siyah tahrir', fiyat: 148500, adet: 48, aciklama: 'büyük pano bordürü' },
      { kod: 'KC-7', ad: 'Ay', karo: 'yok', renk: 'Kobalt', fiyat: null, adet: 1, aciklama: 'çizimi henüz yok' },
      { kod: 'KC-RÜSTEMPAŞA-1561', ad: 'Rüstempaşa-Sokollu-Kubbealtı karması', karo: 'hatayi', renk: 'Mercan', fiyat: 6200, adet: 4, aciklama: 'karma desen' },
      ...demo.desenler,
      { kod: 'KC-20', ad: 'Ağaç', karo: 'saz', renk: '', fiyat: 5800, adet: 4, aciklama: 'ağaç' },
      { kod: 'KC-21', ad: 'Servi', karo: 'saz', renk: 'Yeşil', fiyat: 5800, adet: 4, aciklama: 'servi' },
      { kod: 'KC-22', ad: 'Nar', karo: 'hatayi', renk: 'Mercan', fiyat: 5800, adet: 4, aciklama: 'nar' },
      { kod: 'KC-23', ad: 'Rumi geçme', karo: 'rumi', renk: 'Mercan', fiyat: 5800, adet: 4, aciklama: 'rumi' },
    ],
    dersler: [
      { tarih: '2026-11-07', ad: 'Kendi karonu boya: başlangıç seviyesi, çocuklu aileler için (8 yaş ve üstü)', kalan: 1, kapasite: 6, ucret: 12500 },
      { tarih: '2026-11-14', ad: 'Tahrir', kalan: 6, kapasite: 6, ucret: 2400 },
      { tarih: '2026-11-28', ad: 'Tabak boyama', kalan: 0, kapasite: 6, ucret: 3200 },
      { tarih: '2026-12-26', ad: 'Yılbaşı özel: dört karoluk küçük pano', kalan: 3, kapasite: 6, ucret: 4750 },
    ],
    notlar: ['KC-101-B', 'KC-RÜSTEMPAŞA-1561', 'KC-01', 'KC-12', 'KC-04', 'KC-05', 'KC-02', 'KC-09', 'KC-20', 'KC-21', 'KC-22', 'KC-23'],
  };
  const DURUMLAR = {
    demo: demo,
    'en-kotu': kotu,
    bos: { desenler: [], dersler: [], notlar: [] },
    tek: { desenler: demo.desenler.slice(0, 1), dersler: [{ ...demo.dersler[0], kalan: 1 }], notlar: ['KC-01'] },
  };
  window.VERI = { ...(DURUMLAR[durum] || demo), notAnahtari: 'kobalt-notlar-deneme' };

  // Seçici: sayfanın parçası değil, sade gri; geçiş animasyonsuz
  const ADLAR = { demo: 'Demo', 'en-kotu': 'En kötü', bos: 'Boş', tek: 'Tek' };
  addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Deneme verisi');
    nav.style.cssText = 'position:fixed;left:50%;bottom:88px;transform:translateX(-50%);z-index:50;display:flex;gap:2px;padding:3px;border-radius:10px;background:#e5e5e5;font:13px system-ui,sans-serif;box-shadow:0 1px 3px rgba(0,0,0,.2)';
    nav.innerHTML = Object.entries(ADLAR).map(([k, ad]) =>
      `<a href="?veri=${k}" style="padding:6px 10px;border-radius:7px;color:#222;text-decoration:none;${k === durum ? 'background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.15)' : ''}">${ad}</a>`).join('');
    document.body.append(nav);
  });
})();
