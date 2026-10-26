# 3. deneme: Taste Skill notları

Okuma: brief PRODUCT.md (önceki denemelerle aynı). Sayfa, uygulama ekranı değil. Teknoloji: sade HTML/CSS/JS.
Gerçekte var olan görsel: yok (fotoğraf, referans, basın yok). Açık arşivler: Met/AIC'de 16. yy İznik karoları (CC0), İznik gölü, surlar.

## Envanter (yalnız bu atölyenin)
1. Adı "Kobalt": İznik mavisini veren kobalt oksit. Ad = boya.
2. Çarşı Sokak No 14, İznik. Eski Nikaia; Roma surları, İstanbul Kapı, Lefke Kapı, ızgara sokaklar, İznik Gölü.
3. Yapım sırası: kuvars gövde → tahrir (kontur) → renkler → sır → fırın.
4. Üretim yaklaşık üç hafta, sipariş üzerine; raftan satış yok.
5. Cumartesi dersleri 10.00–16.00, altı kişi.
6. Renkler: kobalt, firuze, mercan kırmızısı (Ermeni bolüsü), yeşil, beyaz kuvars gövde.
7. Desenler: lale, karanfil, saz yaprağı, çintemani, madalyon. Kodlar KC-01, KC-04…
8. Numunelere gün ışığında bakmak; numune duvarı.
9. Basılı şeyler: desen kodu etiketi, fırın defteri, Yenikapı–Yalova feribot tarifesi.
10. Yol: Yenikapı feribot → Yalova → 60 km → İznik otogarı → 10 dk yürüme.
11. Müzelerdeki 16. yy İznik karoları: geleneğin kendisi (müşterinin ürünü DEĞİL).
12. Açık: salı–pazar 10.00–18.00, pazartesi kapalı.

## Argüman
1. Karo sizin ölçünüze İznik'te elde boyanır. → büyük karo/desen, adres, ziyaret düğmesi
2. Desenler 450 yıllık İznik işinden gelir, atölyede seçilir. → müze karoları + atölye desen kodları
3. Beş aşama, üç hafta. → yapım sırası
4. Ziyaret bir saat sürer, şunlar olur. → ziyaret adımları
5. İstanbul'dan 2,5 saat. → güzergâh
6. Cumartesi dersleri. → tarih/ücret tablosu
7. Gelin. → adres, saat, şu an açık mı

## Yön
colour-chapters (seed 1283138793). Neden: İznik karosu renk renk, sırayla boyanır; bölüm renkleri bu sırayı taşıyabilir. dark-room müze vitrini olurdu (kategori), loud-flat-poster konunun sakinliğine ters.
Palet: dağıtılan "Report blocks" (turuncu/adaçayı/asit sarı/siyah) konuyla çelişiyor. Oranlar korundu (beyaz zemin, siyah mürekkep, bir vurgu, 4 alan), renkler konudan alındı: kobalt, firuze, mercan, yeşil, beyaz kuvars gövde, gece mavisi.

## Fikir
Bu sayfada İznik karosunun boyanma sırası (beyaz gövde → kobalt tahrir → firuze → mercan → sır → fırın) renk bölümlerinin sırasına dönüşür; atölyenin adı olan kobalt ilk bölümdür.
Rakip testi: başka bir çini atölyesi aynı sırayı kullanabilir ama ad = boya bağı yalnız bu atölyenin.
Canlı şey: "Yapım" bölümündeki akordeonda her aşama açıldıkça aynı karo o aşamadaki hâline gelir (çıplak gövde → tahrir çizgileri → boya → sırın süt beyazı → fırından çıkmış hâli). Script yoksa beş aşama metin olarak durur, karo bitmiş hâliyle görünür.

## Metin destesi (özet)
Hero: h1 "Kobalt / Çini". Destek: İznik'te sipariş üzerine elde boyanan çini karo ve panolar. Deseni, rengi ve ölçüyü atölyede birlikte seçiyoruz. Düğme: Ziyaret planla.
Intro (merdiven): Deseniniz / sizin ölçünüze çizilir, / kobaltla tahrir edilir, / firuze ve mercanla boyanır, / üç haftada fırından çıkar.
Galeri "Desenler nereden gelir": 8 müze karosu, etiket şeridinde ad, tarih, müze, atölyedeki desen kodu (örnek).
Yapım "Üç haftada beş aşama": Gövde, Tahrir, Boya, Sır, Fırın.
Yol "İstanbul'dan iki buçuk saat": Yenikapı / Yalova / İznik / Çarşı Sk. 14.
Ücret "Dersler ve sipariş": Tahrire giriş 2.400 ₺, Kendi karonu boya 2.900 ₺, Pano siparişi m² 18.000 ₺'den (örnek).
İletişim "Gelin, birlikte seçelim": ad + gün + Ziyaret planla (mailto).
Footer: Kobalt Çini, adres, telefon, e-posta, görsel kaynakları.
Örnek içerik: tüm fiyat/tarih, desen kodları, pano m² fiyatı, telefon/e-posta.

## Eleştiri

ROUND 1
Seen in one second: kobalt zeminde dev "Kobalt Çini" ve yanında boyalı lale karosu.
Idea (one sentence): Bölüm renkleri karonun boyanma sırasını izler; sayfa boyanan bir karo gibi kobalttan başlar.
Live thing: Yapım akordeonu; her aşama açıldıkça aynı karo o aşamadaki hâline gelir.
Layout words by section: hero=split / giriş=statement / desenler=grid / yapım=strip / yol=list / dersler=steps / iletişim=strip+form / son=name
Scores: design 7.5 · usability 8 · creativity 7.5 · content 8 → overall 7.7
Caps applied: yok (0 FAIL; tek WARN ölçüm hatası: kayan şeridin ekran dışı kopyaları "boş orta" sayılıyor, 2156px > 1440px ekran)
Top three problems:
1. desktop-page-02 / tablet-page-01: "çarşı sk. 14" iki satıra kırılıyor, "14" yetim kalıyor. → nowrap; tablette bilgi alta.
2. tablet-page-01: yapım akordeonunda açık panelin karosu görünmüyor (34rem min genişlik dar panele sığmıyor). → 64em altı dikey akordeon.
3. desktop-fold / desktop-page-02: "Gövde" aşaması düz beyaz kare, yer tutucu gibi okunuyor; hero karosunda parlama izi köşe rozetinin üstüne binmiş, hata gibi. → gövdeye kalınlık kenarı, parlamayı rozetlerden uzağa taşı.

ROUND 2
Seen in one second: aynı; kobalt alan, dev ad, boyalı karo.
Idea (one sentence): değişmedi.
Live thing: akordeon beş aşamada doğru çalışıyor (gövde → tahrir → boya → sırın süt beyazı → fırın), ekran görüntüleriyle doğrulandı.
Layout words by section: değişmedi; tablet ve telefonda akordeon dikey.
Scores: design 8 · usability 8 · creativity 7.5 · content 8 → overall 7.9
Caps applied: yok
Top three problems:
1. desktop-page-02: yol bilgileri dar sütunda kötü kırılıyor ("1 sa / 15 dk", "yaklaşık / 1 saat"). → bilgi kalan genişliği alsın, sayı-birim bölünmesin.
2. tablet-page-01: alt alta düzende "ç/ş" kuyrukları bilgi satırına değiyor. → aradaki boşluğu aç.
3. desktop-fold: karonun sağa-aşağı kaydırılmış bej kenarı gölge gibi okunuyor (ev kuralı: duran şeyde gölge yok). → yalnız alt kenarda ince bir kalınlık.

ROUND 3
Seen in one second: aynı.
Scores: design 8 · usability 8 · creativity 7.5 · content 8 → overall 7.9
Caps applied: yok. inspect: 0 FAIL, 1 WARN (empty-middle, ölçüm hatası: kayan şeridin ekran dışı kopyaları).
Düzeltilen: galeri karoları ayrı ayrı yakınlaştırıldı, müze fonunun grisi büyük ölçüde gitti.
Kalan zayıflıklar (dürüst):
1. Hero'daki çizim karo, yanındaki 16. yy müze karolarının yanında basit kalıyor; gerçek ürün fotoğrafı gelince değişmeli.
2. "Gövde" aşamasının karosu düz beyaz; doğru ama en zayıf kare.
3. Kemer köşeliği görselinin ortası doğası gereği gri müze fonu.
