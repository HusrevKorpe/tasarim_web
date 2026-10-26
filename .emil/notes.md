# 5. deneme: Emil Kowalski Skills, süreç notları

Skill deposu: github.com/emilkowalski/skills, commit 2d22863 (11.10.2026). Script yok, hepsi markdown.
Kurulan skill'ler (`.claude/skills/`, gitignore'da): emil-design-eng, prototype, find-animation-opportunities,
animate, review-animations, break-ui, mobile-native, animation-performance, apple-design, improve-animations,
pick-ui-library, animation-vocabulary. Kurulmayanlar: write-swift, animate-expo (React Native), ask-sonner (React).

Sıra (skill'lerin kendi tanımlarından çıkan iş bölümü):

1. emil-design-eng + apple-design: duruş ve temel değerler (sistem yazı tipi, boya göre harf aralığı, düz çizgi yerine yarı saydam halka gölge, açık/koyu tema, saydam üst çubuk).
2. prototype: en önemli tek parça için üç farklı sürüm, seçici şeritle.
3. Hareketsiz sayfa.
4. find-animation-opportunities: nerede hareket olmalı, nerede olmamalı.
5. animate: elemeden geçenleri yapmak.
6. break-ui: en kötü veriyle kırmak.
7. mobile-native: telefon katmanı.
8. review-animations: bağımsız ajanla sert inceleme, onay çıkana kadar.
9. animation-performance: ne hareket ediyor, neyle, hangi özellik.

## 2. prototype: Cumartesi dersi yer ayırma

Kapsam: "Ders listesinde tarih seçip yer ayırtma, sayfanın Dersler bölümünde."
Yeniden düşünülen ortam: proje yok sayılır, nötr gri + tek vurgu (kobalt) + sistem yazı tipi.

| # | Sürüm | Eksen | Ne zaman doğru | Bedeli |
|---|---|---|---|---|
| 1 | Sade liste | Yoğunluk: satırlar, satır içinde açılan panel | Ziyaretçi tarih, yer ve ücreti karşılaştırıyor | En az akılda kalan |
| 2 | Takvim | Yerleşim: ay ızgarası, günden açılan küçük pencere | Ders sayısı çok olsaydı | 30 günün 4'ü dolu, ızgara çoğunlukla boş |
| 3 | Bilet | Kişilik: kaydırılan bilet kartları, koçan kopma | Tek seferlik "an" hissi | 1440'ta 4. kart taşıyor, fiyat ve tarih yan yana okunmuyor |

Ekranlar: `prototip/1-sade-liste.png`, `2-takvim.png`, `3-bilet.png`.

Seçim: **Sade liste.** Skill seçimi kullanıcıya bırakıyor. Kullanıcı "bana iş bırakma" dediği için seçimi ben yaptım.
Gerekçeyi skill'in istediği gibi kullanım sıklığı ve işlevle kurdum: ziyaretçi burada veri okuyup karşılaştırıyor. Kural "okunan veri süs için hareket etmez" diyor.
Terfi ederken bir değişiklik yapıldı: prototipteki "İstek alındı" düğmesi sahte bir başarı gösteriyordu. Gerçek sayfada düğme hazır yazılmış bir e-posta açıyor (tarih, ders, kişi sayısı).
Prototip klasörü Hard Rule 5 gereği silindi, yalnız ekranları kaldı.

## 4. find-animation-opportunities (hareketsiz sayfa üstünde)

Duruş: kişilik sakin bir atölye. Ziyaretçi sayfayı bir iki kez açar. Sayfa çoğunlukla okunur.

### Fırsatlar

| # | Yer | Bugün | Amaç | Sıklık | Önerilen hareket |
|---|---|---|---|---|---|
| 1 | `index.html` desen penceresi | Pencere bir anda açılıp kapanıyor | Sarsıcı değişimi önlemek | Ara sıra | `scale(0.96)` + `opacity: 0` → yerinde, 250ms `--ease-out`, merkezde kalır (pencere istisnası). Kapanış 150ms. Arka perde aynı sürede. Esc ile kapanış animasyonsuz. |
| 2 | `sayfa.js` bildirimler | Bildirim bir anda belirip kayboluyor | Mekânsal tutarlılık | Ara sıra | `@starting-style` ile `translateY(100%)` → yerinde, 400ms `ease` (Sonner ayarı), aynı kenardan çıkış. Keyframe değil geçiş. Aşağı çekip atma: hız > 0.11 ya da 45px. |
| 3 | `.ders-panel` | Satır paneli bir anda açılıyor | Durum gösterimi | Ara sıra | `grid-template-rows` 200ms `--ease-out` (akordeon istisnası), ok 200ms döner |
| 4 | Yapım sekmeleri | Etkin sekme bir anda boyanıyor | Durum gösterimi | Ara sıra | Kopya listenin `clip-path`'i 250ms `--ease-in-out`. Yazı rengi ve zemin tek eleman olarak birlikte değişir. Klavyeyle geçişte animasyon yok. |
| 5 | Yapım karosu katmanları | Katmanlar bir anda değişiyor | Açıklama: adımın karoya ne eklediğini göstermek | Ara sıra | Katman `opacity` 250ms `ease`. Klavyeyle geçişte animasyon yok. |
| 6 | Bütün düğmeler, desen kartları | Basınca karşılık yok | Geri bildirim | Günde onlarca | `:active { scale(0.97) }`, kartlarda 0.98. 160ms `--ease-out`. |
| 7 | Adresi kopyala | Etiket bir anda değişiyor | Durum gösterimi | Nadir | Etikette 200ms `blur(2px)` + `opacity: 0.7` köprüsü, düğme genişliği sabit |

### Reddedilenler

- Giriş bölümünün açılışta kademeli belirmesi ve bölümlerin kaydırınca belirmesi. **Amaç adı yok.** "Güzel görünür" gerekçe sayılmıyor. Ayrıca okuyanın içeriği beklemesine yol açıyor.
- Giriş karosunda fareyi izleyen yaylı eğim. **Amaç: süs.** Bir karo için gerekçe yok.
- Menü bağlantılarına yumuşak kaydırma ve üzerine gelince hareket. **Sıklık ve klavye:** gezinme sık yapılır, çoğu zaman klavyeyle. Üzerine gelince yalnız renk değişir, hareket yok.
- Ders satırlarında `scale` basma etkisi. **İşlev:** tam genişlikteki bir satırın küçülmesi tabloyu sallar. Geri bildirimi okun dönüşü veriyor.
- Üst çubuktaki not çipinin belirmesi. **Amaç:** çip belirdiğinde ziyaretçi pencereye bakıyor. Haberi bildirim zaten veriyor.
- Yapım metninin geçişi. **İşlev:** okunan metin süs için hareket etmez, anında değişir.

### Hüküm

Sayfa az hareket istiyor. En yüksek kaldıraç desen penceresi ve bildirim. Kalanlar küçük durum köprüleri.

## 6. break-ui

Seçici: `5-emil-kowalski/index.html?veri=en-kotu` (Demo / En kötü / Boş / Tek). Yalnız `?veri=` varken `kotu-veri.js` yüklenir. Yayındaki sayfa bu dosyayı hiç yüklemez.
Veri, gerçek verinin girdiği yerden (`window.VERI`) değişir. Bileşene dokunulmadı. Notlar ayrı bir anahtarda tutulur, ziyaretçinin gerçek notları silinmez.

Alanlar: desen (kod, ad, renk, fiyat, adet, çizim), ders (tarih, ad, kalan yer, ücret), liste uzunlukları, not sayısı, bildirim metni. Hiçbirinde sınır yok, çünkü veri elle yazılıyor. Bu da bir bulgu (Fragile).

| # | Önem | Alan | En kötü değer | Ne oldu | Düzeltme |
|---|---|---|---|---|---|
| 1 | Broken | bildirim | pencere açıkken "Not al" | Bildirim modal pencerenin arkasında, inert. "Geri al" tıklanamıyor | Bildirim kutusu `popover` (üst katman) ve pencere açıkken pencerenin içine taşınıyor. Pencerenin dinlenme hâlinde `transform: none` |
| 2 | Broken | `fiyat` | `null` | "₺0 / 1 karo" yazıyor, yanlış veri | "Fiyatı atölyede konuşalım" |
| 3 | Broken | `desenler` | boş liste | Başlığın altı bomboş | Boş durum metni |
| 4 | Broken | sekmeler | 320 px | 5. sekme taşıyor. Liste kayınca kırpılmış kopya yerinde kalıyor | Dar ekranda sekme dolgusu 11 px. Kopya listeyle birlikte kayıyor, kırpma kaymaya göre hesaplanıyor |
| 5 | Ugly | `karo` | çizimi olmayan desen | Boş gri kutu | "Çizimi henüz yok" taralı yer tutucu, `aria-label` de buna göre |
| 6 | Ugly | `kod` | `KC-101-B`, `KC-RÜSTEMPAŞA-1561` | Not çipinde kod kısa çizgiden üç satıra bölünüyor. 320 px'te çip kutudan taşıyor | Kod `nowrap`. Çip metni tek akış, gerekirse `overflow-wrap: anywhere`. Köşe 12 px |
| 7 | Ugly | ders `ad` | 70 karakterlik ders adı (telefon) | "Son 1 yer" üç satırlık adın ortasında yüzüyor | Telefonda satır üstten hizalı, ok ortada |
| 8 | Fragile | bütün alanlar | — | Sınır yok | Veri elle yazıldığı için kabul edildi |

Sağlam çıkanlar: "Son 1 yer" ve "1 not" tekilleri. `tabular-nums` ile ücret hizası. 12.500 ve 148.500 ₺ (`Intl.NumberFormat`). Rengi boş desen (ayraç kalmıyor). 12 not. Yazı %200'de yatay taşma yok. Koyu tema. Boş ders listesi (telefon bağlantılı mesaj). Uzun bildirim metni sarılıyor, eylem düğmesi küçülmüyor.

Kullanıcı "bana iş bırakma" dediği için skill'in "Report and stop" adımında durulmadı, hepsi düzeltildi ("fix all"). Sonra dört durum yeniden gezildi.

## 7. mobile-native

Değişenler: `-webkit-tap-highlight-color: transparent`, `-webkit-text-size-adjust: 100%`, düğme, bağlantı ve sekmelerde `touch-action: manipulation`, kontrollerde `user-select: none` (gövde metninde değil). `viewport-fit=cover` ile güvenli alan dolguları: üst çubuk, kenar boşlukları, bildirimler. Her şema için ayrı `theme-color` (üst çubuk rengi).
Bilinçli olarak yapılmayanlar: `overscroll-behavior: none` yok, çünkü sayfa bir belge ve çekip yenileme yerinde. Girdi alanı olmadığı için 16 px kuralı ve `interactive-widget` gerekmedi. Bütün `:hover` kuralları `(hover: hover) and (pointer: fine)` içinde.
Telefonda doğrulanamayanlar: yapışkan hover, dokunma gecikmesi, güvenli alanlar ve bildirimi çekip atmanın hissi. Gerçek cihazda denenmedi, yalnız headless Chrome'un mobil öykünmesiyle bakıldı. Skill bunun yeterli olmadığını açıkça söylüyor.

## 9. animation-performance

| Öğe | Sürücü | Özellik | Ne zaman |
|---|---|---|---|
| Basma geri bildirimi | CSS geçişi | `transform` | basınca |
| Sekme göstergesi | CSS geçişi, değer JS'ten `style.clipPath` | `clip-path` | sekme tıklanınca |
| Karo katmanları | CSS geçişi, `<use>` gölge ağacına miras değişkenle | `opacity` | sekme tıklanınca |
| Ders paneli | CSS geçişi | `grid-template-rows` + `opacity` | satır açılınca |
| Ders oku | CSS geçişi | `transform` | satır açılınca |
| Desen penceresi + perde | CSS geçişi, `@starting-style`, `allow-discrete` | `opacity`, `transform` | açılış ve kapanış |
| Bildirim | CSS geçişi, sürüklerken doğrudan `style.transform` | `opacity`, `transform` | gelince, gidince, sürüklerken |
| Kopyala etiketi | CSS geçişi | `filter: blur(2px)`, `opacity` | tıklayınca |
| Üst çubuk | hareket yok | `backdrop-filter: blur(16px)` (durağan) | her kaydırmada yeniden boyanır |

Teşhis: Düzen maliyeti olan tek hareket akordeon (`grid-template-rows`). Skill buna akordeon için izin veriyor, 200 ms ve içerik küçük. Sürükleme ebeveyndeki bir değişkenle değil, doğrudan öğenin `transform`'uyla yapılıyor. Kare başına düzen okuması yok. Bulanıklık 20 px'in altında. Katman değişkenleri yalnız dört öğeyi etkiliyor ve her karede değil, tıklamada değişiyor. `will-change` kullanılmadı, çünkü bir kayma görülmedi.
Doğrulama: koddan. Cihazda performans kaydı alınmadı.

## 8. review-animations (bağımsız ajan, konuşmayı görmedi)

**1. tur: Block.** 11 bulgu:

- Hissi bozan iki hata:
  - Bildirim, pencereye taşınırken giriş animasyonunu yeniden oynatıyordu. Taşıma, öğeyi kaldırıp yeniden eklemek demek, bu yüzden `@starting-style` tekrar tetikleniyordu.
  - Aşağı çekilip atılan bildirim çıkarken yukarı dönüyordu. `translateY(100%)` yalnız kendi boyu kadar, 52 px. 120 px çekilen bildirim bu yüzden geri çıkıyordu.
- Sınırı aşan bildirim bir anda siliniyor, yığın sıçrıyordu.
- Geri yaylanmanın ilk 200 ms'sinde yeniden tutunca sürükleme gecikiyordu.
- `.sayac` düğmeleri az hareket kuralından kaçıyordu (seçici özgüllüğü).
- Karo katmanlarında hazır `ease` vardı, `--ease-out` olmalı.
- Ok dönüşünde `ease-out` vardı. Ekranda dönen bir şey olduğu için `--ease-in-out` olmalı.
- Pencere boyutu değişince gösterge 250 ms gecikerek geliyordu.
- JS yüklenmeden sekme çubuğu tamamen kobalt görünüyordu.
- iOS'ta dokunma dinleyicisi olmadan `:active` çalışmıyordu.
- Akordeon düzen özelliği canlandırıyor. Bu, belgelenmiş bir ödünleşim olarak kaldı.

Hepsi düzeltildi. Bildirim taşınırken geçişler kapatılıyor. Bırakılan bildirim bırakıldığı yerden aşağı devam ediyor. Yığın FLIP ile (WAAPI, `composite: 'add'`) kayıyor.

**2. tur: Approve.** Düzeltmelerin getirdiği üç küçük yan etki bulundu:

- Çıkmakta olan bildirim FLIP'in dışında kalıyordu.
- Az hareket açıkken sürüklenip bırakılan bildirim yine kayıyordu.
- Sınırı aşan en eski bildirim yığının üstünden aşağı kayıyordu, artık yalnız soluyor.

Üçü de düzeltildi.

Açık kalanlar:

- Firefox `overlay` geçişini desteklemiyor. Pencerenin 150 ms'lik kapanışı orada denenmedi.
- Bildirimi parmakla çekip atma gerçek telefonda denenmedi.
