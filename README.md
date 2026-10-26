# Tasarım Web: yapay zekâ tasarım skill'lerini karşılaştırma

Bu repo bir deney. Soru şu: Claude Code'a bir web sitesi yaptırırken kullandığın tasarım skill'i sonucu ne kadar değiştirir?

Bunu ölçmek için **konu hep aynı tutuluyor**, sadece skill değişiyor. Böylece iki site arasındaki fark konudan değil, doğrudan skill'den geliyor.

**Ortak konu:** Kobalt Çini, İznik'te el yapımı çini karo üreten ve cumartesi dersleri veren **hayalî** bir atölye. Adres, telefon, fiyatlar ve tarihler örnektir.

## Denemeler

| # | Skill | Klasör | Durum |
|---|---|---|---|
| 1 | [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) (Anthropic, resmi) | [`1-frontend-design/`](1-frontend-design/) | Bitti |
| 2 | [Impeccable](https://github.com/pbakaus/impeccable) (Paul Bakaus) | [`2-impeccable/`](2-impeccable/) | Bitti |
| 3 | [Taste Skill](https://github.com/Leonxlnx/taste-skill) | | Sırada |
| 4 | [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | | Sırada |
| 5 | [Emil Kowalski Skills](https://github.com/emilkowalski/skills) | | Sırada |

Bu beş skill, 2026'da "en iyi UI skill'leri" listelerinde en sık geçenler arasından seçildi. GitHub yıldızlarına ve güncelliğine de bakıldı.

Bütün siteler sade HTML/CSS ile yazıldı, derleme adımı yok. Teknoloji sabit kalsın diye böyle yapıldı. İki deneme arasındaki tek değişken skill olmalı.

## 1. frontend-design

![frontend-design ile yapılan site](ekranlar/1-frontend-design.png)

**Skill nasıl çalışıyor:** Kısa bir talimat dosyası. Claude'u bir tasarım stüdyosunun sanat yönetmeni gibi davranmaya zorluyor:

- Kodlamadan önce renk, yazı tipi, yerleşim ve ilkeleri içeren bir plan yazılır.
- Plan, "yapay zekâ işi" görünen kalıplarla karşılaştırılır. Bu kalıpların başlıcaları: krem zemin üstüne serif başlık, mor gradyan, her başlığın üstünde büyük harfli küçük etiket, birbirinin aynı yuvarlak köşeli kartlar.
- Cesaret tek bir öğeye harcanır, geri kalan her şey sakin tutulur.
- Bitince ekran görüntüsü alınır ve tasarım eleştirilir.

**Ortaya çıkan:** Klasik bir İznik çini sitesi.

- Kobalt, firuze ve mercan kırmızısı renkler.
- Alegreya yazı tipi.
- Sayfa açılırken deseninin önce çizgileri çizilen, sonra boyanan bir çini pano. Bu, gerçek çini yapımındaki tahrir ve boyama sırasını taklit ediyor.
- Karolar, yapım aşamaları ve ders tablosu.

**Süreç:** Hızlı. Bir plan, bir kodlama, bir ekran görüntüsü turu.

## 2. Impeccable

![Impeccable ile yapılan site](ekranlar/2-impeccable.png)

**Skill nasıl çalışıyor:** frontend-design'ın üzerine kurulmuş, çok daha kapsamlı ve kurallı bir sistem:

1. **Ürün dosyası.** Önce kullanıcıya ürünle ilgili sorular sorulur: kim gelecek, başarı nedir, hangi teknoloji kullanılacak. Cevaplar [`PRODUCT.md`](PRODUCT.md) dosyasına yazılır. Bu projede cevaplar şöyleydi: ziyaretçi karo sipariş edenler, başarı atölyeyi gelip görmeleri.
2. **Yön araştırması.** Kategorinin herkesin yaptığı sayfası yasak. Bu konuda o sayfa, mavi çini fotoğrafının yanında başlık. Bunun yerine ziyaretçinin dünyasından yedi aday "görsel dünya" çıkarılır ve aralarından biri seçilir.
3. **Yön sözleşmesi.** Seçilen yön, kodlamadan önce [`.impeccable/briefs/2-impeccable.md`](.impeccable/briefs/2-impeccable.md) dosyasına sözleşme olarak yazılır.
4. **Kalite tabanı.** Yasak kalıplar listesi var: başlık üstü etiket yasak, gradyan yazı yasak, rastgele yazı tipi yasak. Kontrast, odak halkası ve seçili metin rengi gibi tarayıcı ayrıntıları da kontrol edilir.
5. **Bağımsız inceleme.** Siteyi yapan değil, konuşmayı hiç görmemiş ayrı bir ajan inceler. İnceleyici "düzelt" derse düzeltilir ve aynı inceleyiciye geri gönderilir. Gözetimsiz çalışmada en fazla iki tur yapılır.
6. **Tasarım sistemi kaydı.** Son olarak tasarım sistemi [`DESIGN.md`](DESIGN.md) ve [`.impeccable/design.json`](.impeccable/design.json) dosyalarına yazılır. Bu da ayrı bir ajanın işi.

**Ortaya çıkan:** Sayfanın kendisi bir *silkme kâğıdı*, yani çini deseninin karoya aktarıldığı, iğneyle delinmiş kâğıt.

- Açılışta kömür tozu deliklerden geçer ve lale-saz deseni belirir. Fare gezdikçe toz eklenir.
- Çizim kâğıtlarının köşesindeki bilgi kutusu adres, "bugün açık mı" bilgisi (İstanbul saatine göre canlı) ve yol tarifi düğmesi taşır.
- Desen kartlarında boyalı karonun üstünde yarısı kaldırılmış delikli kâğıt durur. Tıklayınca kâğıt kalkar.
- Her bölümde kâğıt köşe işaretleri ve el yazısı kurşun kalem notları var.
- Kobalt yalnızca "boyanmış" yerlerde kullanılır: ana düğme, bağlantılar ve sırlı karo gibi duran alt bölüm.

**Süreç:** Uzun ve kurallı. İki soru turu, sözleşme, iki düzeltme turu ve tasarım sistemi kaydı.

**Dürüst notlar:**

- Impeccable'ın kendi yardımcı programı internetten bir dosya indirip çalıştırmak istedi, güvenlik ayarı buna izin vermedi. Skill'in tanımladığı yedek yol kullanıldı. Bunun sonuçları:
  - Konsept zarı atılmadı. Yön listesi elle sıralandı ve en üstteki seçildi.
  - Hazır kalıp tarayıcısı çalışmadı. Onun yerine bağımsız inceleyici kullanıldı.
- İnceleyicinin iki turdan sonra "kısmen" bıraktığı iki madde var:
  - Kâğıt lifi dokusu rastgele değil, hafif bir "+" ızgarası gibi görünüyor.
  - Delikli desen giriş bölümünden sonra tekrar etmiyor.

## Karşılaştırma

| | frontend-design | Impeccable |
|---|---|---|
| Kodlamadan önce | Kısa bir plan | Sorular, ürün dosyası, yedi aday yön, sözleşme |
| Fikir | Konuya uygun ama beklenen | Konunun içinden çıkan, alışılmadık |
| Kontrol | Kendi ekran görüntüsüne bakıp düzeltme | Bağımsız inceleyici, iki düzeltme turu |
| Çıktılar | Site | Site, PRODUCT.md, DESIGN.md, design.json |
| Süre ve maliyet | Düşük | Yüksek |

## Çalıştırma

Derleme yok. Dosyayı tarayıcıda açman yeterli:

```sh
open index.html
```

`index.html` iki denemeye bağlantı veren karşılaştırma sayfası.

## Skill'leri kurma

Skill dosyaları bu repoya konmadı, çünkü başkalarına ait ve kendi lisansları var. Denemeleri tekrarlamak için:

```sh
# frontend-design (Claude Code içinde)
/plugin install frontend-design@claude-plugins-official

# Impeccable
npx impeccable install
```

## Klasörler

```
index.html              karşılaştırma sayfası
1-frontend-design/      1. deneme
2-impeccable/           2. deneme (silkme.js: delik ve toz efekti, açık/kapalı durumu)
PRODUCT.md              Impeccable'ın ürün dosyası
DESIGN.md               Impeccable'ın tasarım sistemi kaydı
.impeccable/            yön sözleşmesi, inceleme ekran görüntüleri, design.json
ekranlar/               README görselleri
```
