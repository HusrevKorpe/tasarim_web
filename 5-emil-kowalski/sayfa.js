// Kobalt Çini, 5. deneme: sekmeler, desen penceresi, notlar, bildirimler, ders listesi.
(() => {
  const { desenler, dersler } = window.VERI;
  const $ = (s, k = document) => k.querySelector(s);
  const para = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 });
  const tarihBicimi = new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', timeZone: 'Europe/Istanbul' });
  const kacis = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  // Açık mı: İstanbul saatine göre, salıdan pazara 10.00–18.00
  function acikDurum() {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Istanbul', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' })
      .formatToParts(new Date()).map((x) => [x.type, x.value]));
    const dakika = +p.hour * 60 + +p.minute;
    const el = $('#acik-durum');
    if (p.weekday === 'Mon') el.textContent = 'Bugün kapalı · Yarın 10.00’da açılır';
    else if (dakika < 600) el.textContent = 'Bugün 10.00’da açılır';
    else if (dakika < 1080) { el.textContent = 'Şu an açık · 18.00’e kadar'; el.dataset.acik = ''; }
    else el.textContent = p.weekday === 'Sun' ? 'Bugün kapandı · Salı 10.00’da açılır' : 'Bugün kapandı · Yarın 10.00’da açılır';
  }

  // Yapım sekmeleri
  const ASAMALAR = {
    govde: ['1–3. gün', 'Gövde', 'Kuvars, kil ve camdan hazırlanan çamur kalıba basılır ve günlerce kurur. Karo bu hâliyle bisküvi renginde ve mattır.'],
    tahrir: ['4–6. gün', 'Astar ve tahrir', 'Beyaz astar sürülür. Desen delikli kâğıtla kömür tozuyla aktarılır, sonra ince fırçayla koyu boyayla çizilir. Buna tahrir denir.'],
    boya: ['7–12. gün', 'Boya', 'Renkler çizginin içine sırayla sürülür: önce kobalt, sonra firuze ve yeşil, en son mercan. Mercan kalın sürülür, fırında kabarık durur.'],
    sir: ['13. gün', 'Sır', 'Karo şeffaf sıra daldırılır. Sır pişmeden önce süt beyazıdır, renkler altında soluk görünür. Böyle olmalı.'],
    firin: ['14–21. gün', 'Fırın', 'Yaklaşık 900 derecede pişer, fırın bir gün soğur. Sır camlaşır, renkler ancak şimdi parlar. Paketleyip teslim ederiz.'],
  };

  function sekmeler() {
    const kok = $('[data-sekmeler]');
    const sekmeler = [...kok.querySelectorAll('[role="tab"]')];
    const kopya = $('.sekme-kopya', kok);
    const panel = $('#yapim-panel');
    const karo = $('.yapim-karo', panel);

    // Etkin sekmenin kopyası kırpılarak gösterilir: renk ve zemin birlikte değişir
    function kirp(s) {
      const g = kok.getBoundingClientRect().width;
      const kay = s.parentElement.scrollLeft;
      const sol = s.offsetLeft - kay; const sag = g - (s.offsetLeft - kay + s.offsetWidth);
      kopya.style.clipPath = `inset(0 ${sag}px 0 ${sol}px round 8px)`;
    }

    // Klavyeyle geçiş animasyonsuz; tıklama geçişi canlandırır
    function sec(s, odakla, klavye) {
      kok.toggleAttribute('data-aninda', !!klavye);
      karo.toggleAttribute('data-aninda', !!klavye);
      sekmeler.forEach((x) => { const bu = x === s; x.setAttribute('aria-selected', String(bu)); x.tabIndex = bu ? 0 : -1; });
      const [gun, ad, metin] = ASAMALAR[s.dataset.asama];
      $('#asama-gun').textContent = gun; $('#asama-ad').textContent = ad; $('#asama-metin').textContent = metin;
      karo.dataset.asama = s.dataset.asama;
      panel.setAttribute('aria-labelledby', s.id);
      kirp(s);
      if (odakla) s.focus();
    }

    sekmeler.forEach((s, i) => {
      s.addEventListener('click', () => sec(s));
      s.addEventListener('keydown', (e) => {
        const n = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: sekmeler.length - 1 }[e.key];
        if (n === undefined) return;
        e.preventDefault();
        sec(sekmeler[(n + sekmeler.length) % sekmeler.length], true, true);
      });
    });
    const etkin = () => sekmeler.find((s) => s.getAttribute('aria-selected') === 'true');
    // Yerleşim düzeltmeleri (boyut, yazı tipi) gösterge kaymadan anında oturur
    new ResizeObserver(() => { kok.setAttribute('data-aninda', ''); kirp(etkin()); }).observe(kok);
    // Dar ekranda liste kayarsa kopya da birlikte kayar
    const liste = $('[role="tablist"]', kok);
    liste.addEventListener('scroll', () => { kopya.scrollLeft = liste.scrollLeft; kok.setAttribute("data-aninda", ""); kirp(etkin()); }, { passive: true });
    sec(etkin(), false, true);
  }

  // Notlar: ziyaretçinin seçtiği desen kodları, yalnız bu tarayıcıda
  const NOT_ANAHTARI = window.VERI.notAnahtari || 'kobalt-notlar';
  let notlar = [];
  try { notlar = JSON.parse(localStorage.getItem(NOT_ANAHTARI)) || []; } catch { notlar = []; }
  if (window.VERI.notlar) notlar = window.VERI.notlar;
  notlar = notlar.filter((k) => desenler.some((d) => d.kod === k));
  const kaydet = () => { try { localStorage.setItem(NOT_ANAHTARI, JSON.stringify(notlar)); } catch {} };

  function notlariGoster() {
    const cip = $('.notlar-cip');
    cip.hidden = notlar.length === 0;
    $('#not-sayisi').textContent = notlar.length;
    $('#notlarim').hidden = notlar.length === 0;
    $('#not-listesi').innerHTML = notlar.map((k) => {
      const d = desenler.find((x) => x.kod === k);
      return `<li><span class="not-metin"><span class="kod tab">${kacis(d.kod)}</span> ${kacis(d.ad)}</span>
        <button class="sil" type="button" data-sil="${kacis(d.kod)}" aria-label="${kacis(d.ad)} notunu sil"><svg class="ikon" aria-hidden="true"><use href="#i-kapat"/></svg></button></li>`;
    }).join('');
  }

  function notDegistir(kod, ekle) {
    notlar = ekle ? [...new Set([...notlar, kod])] : notlar.filter((k) => k !== kod);
    kaydet(); notlariGoster();
  }

  // Bildirimler: alttan gelir, alta gider; üzerine gelince ve sekme gizliyken süre durur.
  // Aşağı çekerek atılır: hızlı bir fiske de yeter.
  const bildirimKutusu = $('#bildirimler');
  const azHareket = matchMedia('(prefers-reduced-motion: reduce)');

  // Yığın değişince kalanlar yeni yerlerine kayar (FLIP), sıçramaz
  function akis(degistir) {
    const once = new Map([...bildirimKutusu.children].map((el) => [el, el.getBoundingClientRect().top]));
    degistir();
    if (azHareket.matches || bildirimKutusu.hasAttribute('data-tasi')) return;
    once.forEach((y, el) => {
      if (!el.isConnected || el.hasAttribute('data-surukle')) return;
      const dy = y - el.getBoundingClientRect().top;
      if (Math.abs(dy) > 0.5) el.animate([{ transform: `translateY(${dy}px)` }, { transform: 'translateY(0)' }], { duration: 200, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', composite: 'add' });
    });
  }

  function bildir(metin, eylem) {
    const li = document.createElement('li');
    li.className = 'bildirim';
    li.innerHTML = `<p>${kacis(metin)}</p>${eylem ? `<button class="bildirim-eylem" type="button">${kacis(eylem.ad)}</button>` : ''}`;
    let kalan = 4000; let basla = 0; let zaman; let bitti = false;
    // birakilan: sürükleyip bırakılan mesafe; çıkış oradan aşağı doğru sürer
    // tasan: sınır yüzünden çıkan en eski bildirim; yığının üstünde olduğu için yalnız solar
    const kapat = (birakilan = 0, tasan = false) => {
      if (bitti) return; bitti = true;
      clearTimeout(zaman);
      document.removeEventListener('visibilitychange', gorunurluk);
      li.removeAttribute('data-surukle');
      li.removeAttribute('data-geri');
      li.style.transform = birakilan > 0 && !azHareket.matches ? `translateY(calc(${birakilan}px + 100%))` : '';
      if (tasan) li.setAttribute('data-tasan', '');
      li.setAttribute('data-cikis', '');
      let silindi = false;
      const sil = () => {
        if (silindi) return; silindi = true;
        akis(() => li.remove());
        if (!bildirimKutusu.children.length && bildirimKutusu.matches(':popover-open')) bildirimKutusu.hidePopover();
      };
      li.addEventListener('transitionend', (e) => { if (e.target === li) sil(); });
      setTimeout(sil, 300);
    };
    li.kapat = kapat;
    const surdur = () => { if (bitti) return; clearTimeout(zaman); basla = Date.now(); zaman = setTimeout(kapat, kalan); };
    const durdur = () => { clearTimeout(zaman); kalan = Math.max(1000, kalan - (Date.now() - basla)); };
    const gorunurluk = () => (document.hidden ? durdur() : surdur());
    li.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') durdur(); });
    li.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') surdur(); });
    document.addEventListener('visibilitychange', gorunurluk);
    if (eylem) $('.bildirim-eylem', li).addEventListener('click', () => { eylem.yap(); kapat(); });

    let surukleme = null;
    li.addEventListener('pointerdown', (e) => {
      if (bitti || surukleme || e.target.closest('button')) return; // ikinci parmak yok sayılır
      surukleme = { id: e.pointerId, y: e.clientY, t: Date.now(), dy: 0 };
      li.setPointerCapture(e.pointerId);
      li.removeAttribute('data-geri');
      li.setAttribute('data-surukle', '');
      durdur();
    });
    li.addEventListener('pointermove', (e) => {
      if (!surukleme || e.pointerId !== surukleme.id) return;
      const dy = e.clientY - surukleme.y;
      // Aşağı serbest, yukarı giderek artan dirençle
      surukleme.dy = dy > 0 ? dy : -Math.sqrt(-dy) * 2;
      li.style.transform = `translateY(${surukleme.dy}px)`;
    });
    const birak = (e) => {
      if (!surukleme || e.pointerId !== surukleme.id) return;
      const { dy, t } = surukleme; surukleme = null;
      const hiz = Math.abs(dy) / Math.max(1, Date.now() - t);
      if (dy > 45 || (dy > 0 && hiz > 0.11)) return kapat(dy);
      li.removeAttribute('data-surukle');
      li.setAttribute('data-geri', '');
      li.style.transform = '';
      setTimeout(() => li.removeAttribute('data-geri'), 200);
      surdur();
    };
    li.addEventListener('pointerup', birak);
    li.addEventListener('pointercancel', birak);

    akis(() => bildirimKutusu.append(li));
    // Üst katmana yeniden girer: o an açık bir pencere varsa onun üstüne çıkar
    if (bildirimKutusu.matches(':popover-open')) bildirimKutusu.hidePopover();
    bildirimKutusu.showPopover();
    const duran = [...bildirimKutusu.children].filter((x) => !x.hasAttribute('data-cikis'));
    duran.slice(0, Math.max(0, duran.length - 3)).forEach((x) => x.kapat(0, true));
    surdur();
  }

  // Modal pencere açıkken dışarısı inert olur; bildirimler tıklanabilsin diye pencereyle birlikte taşınır.
  // Taşıma bir kaldırıp yeniden eklemedir; giriş geçişi yeniden oynamasın diye o an geçişler kapalı.
  function bildirimTasi(kap) {
    if (bildirimKutusu.parentElement === kap) return;
    bildirimKutusu.setAttribute('data-tasi', '');
    kap.append(bildirimKutusu);
    if (bildirimKutusu.children.length) bildirimKutusu.showPopover();
    requestAnimationFrame(() => requestAnimationFrame(() => bildirimKutusu.removeAttribute('data-tasi')));
  }

  // Desenler ve pencere
  const pencere = $('#desen-penceresi');
  let acikDesen = null;

  const karoVar = (d) => !!document.getElementById(`karo-${d.karo}`);
  const fiyatMetni = (d) => (d.fiyat ? `${para.format(d.fiyat)} / ${d.adet} karo` : 'Fiyatı atölyede konuşalım');

  function desenleriCiz() {
    if (desenler.length === 0) {
      $('#desen-listesi').outerHTML = '<p class="bos">Desen listesi şu an güncelleniyor. Numuneleri atölyede görebilirsiniz.</p>';
      return;
    }
    $('#desen-listesi').innerHTML = desenler.map((d, i) => `
      <li><button class="desen" type="button" data-i="${i}" aria-haspopup="dialog">
        <svg class="karo" viewBox="0 0 200 200" aria-hidden="true"><use href="#karo-${karoVar(d) ? kacis(d.karo) : 'yok'}"/></svg>
        <span class="desen-ad">${kacis(d.ad)}</span>
        <span class="desen-alt"><span class="kod tab">${kacis(d.kod)}</span>${d.renk ? ' ' + kacis(d.renk) : ''}</span>
      </button></li>`).join('');
  }

  function pencereAc(d) {
    acikDesen = d;
    $('#pencere-karo use').setAttribute('href', `#karo-${karoVar(d) ? d.karo : 'yok'}`);
    $('#pencere-karo').setAttribute('aria-label', karoVar(d) ? `Çizim: ${d.aciklama}` : 'Bu desenin çizimi henüz yok');
    $('#pencere-kod').textContent = d.kod;
    $('#pencere-baslik').textContent = d.ad;
    $('#pencere-renk').textContent = d.renk;
    $('#pencere-renk').hidden = !d.renk;
    $('#pencere-fiyat').textContent = fiyatMetni(d);
    notDugmesi();
    pencere.removeAttribute('data-aninda');
    pencere.showModal();
    bildirimTasi(pencere);
  }
  function notDugmesi() {
    const var_ = notlar.includes(acikDesen.kod);
    $('#not-al').textContent = var_ ? 'Notlarda' : 'Not al';
    $('#not-al').setAttribute('aria-pressed', String(var_));
  }

  function desenler_() {
    desenleriCiz();
    if (desenler.length === 0) return;
    $('#desen-listesi').addEventListener('click', (e) => {
      const b = e.target.closest('.desen');
      if (b) pencereAc(desenler[+b.dataset.i]);
    });
    pencere.addEventListener('close', () => bildirimTasi(document.body));
    // Esc klavyeden gelir: pencere animasyonsuz kapanır
    pencere.addEventListener('cancel', () => pencere.setAttribute('data-aninda', ''));
    pencere.addEventListener('click', (e) => {
      if (e.target === pencere || e.target.closest('[data-kapat]')) pencere.close();
    });
    $('#not-al').addEventListener('click', () => {
      const d = acikDesen;
      if (notlar.includes(d.kod)) { notDegistir(d.kod, false); notDugmesi(); return; }
      notDegistir(d.kod, true); notDugmesi();
      bildir(`${d.kod} ${d.ad} notlarınıza eklendi`, { ad: 'Geri al', yap: () => { notDegistir(d.kod, false); if (pencere.open) notDugmesi(); } });
    });
    $('#not-listesi').addEventListener('click', (e) => {
      const b = e.target.closest('[data-sil]');
      if (!b) return;
      const d = desenler.find((x) => x.kod === b.dataset.sil);
      notDegistir(d.kod, false);
      bildir(`${d.kod} notlardan çıkarıldı`, { ad: 'Geri al', yap: () => notDegistir(d.kod, true) });
    });
  }

  // Ders listesi: satır açılır, kişi sayısı seçilir, e-posta hazır gelir
  function dersMetni(d) { return tarihBicimi.format(new Date(d.tarih + 'T12:00:00+03:00')); }
  function yerMetni(d) { return d.kalan === 0 ? 'Doldu' : d.kalan === 1 ? 'Son 1 yer' : `${d.kalan} yer kaldı`; }

  function dersler_() {
    const kutu = $('#ders-listesi');
    if (dersler.length === 0) {
      kutu.innerHTML = '<p class="bos">Şu an planlı ders yok. Yeni tarihler için arayın: <a href="tel:+902240000000">0224 000 00 00</a></p>';
      return;
    }
    kutu.innerHTML = `<ul class="ders-listesi" role="list">${dersler.map((d, i) => `
      <li class="ders${d.kalan === 0 ? ' dolu' : ''}">
        <button class="ders-satir" type="button" aria-expanded="false" aria-controls="ders-${i}" ${d.kalan === 0 ? 'disabled' : ''}>
          <span class="ders-tarih tab">${dersMetni(d)}</span>
          <span class="ders-ad">${kacis(d.ad)}</span>
          <span class="ders-yer">${yerMetni(d)}</span>
          <span class="ders-ucret tab">${para.format(d.ucret)}</span>
          <svg class="ikon ders-ok" aria-hidden="true"><use href="#i-asagi"/></svg>
        </button>
        <div class="ders-panel" id="ders-${i}" inert><div><div class="ders-panel-ic">
          <div class="sayac" role="group" aria-label="Kişi sayısı">
            <button type="button" data-adim="-1" aria-label="Bir kişi az">−</button>
            <output class="tab" aria-live="polite">1 kişi</output>
            <button type="button" data-adim="1" aria-label="Bir kişi fazla">+</button>
          </div>
          <a class="btn btn-ana ders-ayir" href="#">E-postayla yer ayırt</a>
          <span class="not">ya da arayın: <a href="tel:+902240000000">0224 000 00 00</a></span>
        </div></div></div>
      </li>`).join('')}</ul>`;

    kutu.querySelectorAll('.ders').forEach((li, i) => {
      const d = dersler[i]; if (d.kalan === 0) return;
      let kisi = 1;
      const satir = $('.ders-satir', li); const panel = $('.ders-panel', li);
      const out = $('output', li); const [az, fazla] = li.querySelectorAll('[data-adim]'); const ayir = $('.ders-ayir', li);
      const guncelle = () => {
        out.textContent = `${kisi} kişi`;
        az.disabled = kisi <= 1; fazla.disabled = kisi >= d.kalan;
        const konu = `Ders: ${dersMetni(d)}, ${d.ad}`;
        const govde = `Merhaba, ${dersMetni(d)} cumartesi "${d.ad}" dersi için ${kisi} kişilik yer ayırtmak istiyorum.\n\nAd soyad:\nTelefon:`;
        ayir.href = `mailto:merhaba@kobaltcini.example?subject=${encodeURIComponent(konu)}&body=${encodeURIComponent(govde)}`;
      };
      az.addEventListener('click', () => { kisi = Math.max(1, kisi - 1); guncelle(); });
      fazla.addEventListener('click', () => { kisi = Math.min(d.kalan, kisi + 1); guncelle(); });
      satir.addEventListener('click', () => {
        const ac = satir.getAttribute('aria-expanded') !== 'true';
        satir.setAttribute('aria-expanded', String(ac));
        panel.toggleAttribute('data-acik', ac);
        panel.inert = !ac;
      });
      guncelle();
    });
  }

  // Adresi kopyala: etiket bulanık bir köprüyle "Kopyalandı"ya döner, iki saniye sonra geri
  function adresKopyala() {
    const b = $('#adres-kopyala'); const ic = $('.kopya-ic', b);
    let zaman;
    const degistir = (html) => {
      ic.classList.add('geciste');
      setTimeout(() => { ic.innerHTML = html; ic.classList.remove('geciste'); }, 100);
    };
    b.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText($('#adres').textContent); } catch { bildir('Kopyalanamadı. Adres: ' + $('#adres').textContent); return; }
      clearTimeout(zaman);
      degistir('<svg class="ikon" aria-hidden="true"><use href="#i-tamam"/></svg> Kopyalandı');
      zaman = setTimeout(() => degistir('Adresi kopyala'), 2000);
    });
  }

  // iOS Safari dokunmatik dinleyici olmadan :active uygulamaz; basma geri bildirimi için boş dinleyici
  document.addEventListener('touchstart', () => {}, { passive: true });

  acikDurum();
  sekmeler();
  desenler_();
  dersler_();
  notlariGoster();
  adresKopyala();
})();
