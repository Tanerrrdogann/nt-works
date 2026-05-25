# Teddy Jewellry Test Senaryolari

Bu dokuman lokal deneme icin hazirlandi.

## Calisan Lokal Ortam

- Frontend: http://localhost:3001
- Backend API: http://localhost:8081
- Admin giris: http://localhost:3001/admin/login
- Admin e-posta: admin@teddyjewellry.com
- Admin sifre: Admin12345!

Frontend production modda su API adresiyle calistirilmalidir:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8081 npm run build
cd frontend
NEXT_PUBLIC_API_URL=http://localhost:8081 npm run start -- -p 3001
```

Backend:

```bash
npm run backend:dev
```

## Smoke Test

| ID | Senaryo | Adimlar | Beklenen Sonuc |
| --- | --- | --- | --- |
| ST-01 | Site aciliyor | `http://localhost:3001` adresini ac | Ana sayfa yuklenir, header ve sepet ikonu gorunur |
| ST-02 | Urun listesi | `/products` sayfasini ac | Kategori filtreleri ve seed urunler listelenir |
| ST-03 | API urunleri | `GET http://localhost:8081/api/products` istegi at | 200 doner, urun listesi gelir |
| ST-04 | API kategorileri | `GET http://localhost:8081/api/categories` istegi at | 200 doner, kategori listesi gelir |

## Musteri Akisi

| ID | Senaryo | Adimlar | Beklenen Sonuc |
| --- | --- | --- | --- |
| M-01 | Urun detayi | `/products/luna-inci-kolye` sayfasini ac | Urun adi, fiyat, stok ve teslimat bilgisi gorunur |
| M-02 | Sepete ekleme | Stokta olan bir urunde `Sepete Ekle` tikla | Sepet sayaci artar |
| M-03 | Stokta yok kontrolu | Aurora Katmanli Kolye urununu kontrol et | Buton `Stokta Yok` olur ve tiklanamaz |
| M-04 | Sepet tutari | Sepete 1 adet Luna Inci Kolye ekle, `/cart` ac | Ara toplam 849,90 TL, kargo 99,90 TL, toplam 949,80 TL gorunur |
| M-05 | Ucretsiz kargo | Sepette toplam urun adedini 2 yap | Kargo `Ucretsiz` olur |
| M-06 | Adet azaltma | Sepette adet azalt | Tutarlar dogru guncellenir, adet 0'a inerse urun sepetten kalkar |
| M-07 | Bos sepet | Tum urunleri kaldir | Bos sepet mesaji ve `Urunleri Gor` linki gorunur |

## Checkout ve Odeme

| ID | Senaryo | Adimlar | Beklenen Sonuc |
| --- | --- | --- | --- |
| C-01 | Bos sepet checkout | Sepet bosken `/checkout` ac | Siparis icin sepet gerekli mesaji gorunur |
| C-02 | Eksik form | Sepette urun varken zorunlu alanlari bos birakip onayla | Tarayici zorunlu alanlari engeller |
| C-03 | Siparis olusturma | Ad, e-posta, adres, il, ilce doldur ve onayla | Siparis olusur, odeme baslatilir, success sayfasina yonlenir |
| C-04 | Basarili odeme callback | Success sayfasinda test odeme tamamlanir | Siparis durumu `PAID`, odeme durumu `PAID` olur |
| C-05 | Basarisiz odeme callback | API ile callback status `FAILED` gonder | Siparis durumu `PAYMENT_FAILED` veya odeme durumu `FAILED` olur |

## Admin Akisi

| ID | Senaryo | Adimlar | Beklenen Sonuc |
| --- | --- | --- | --- |
| A-01 | Admin giris | `/admin/login` sayfasinda dev admin bilgileriyle gir | Admin paneline gecilir |
| A-02 | Hatali admin giris | Yanlis sifreyle giris dene | Hata mesaji gorunur, token olusmaz |
| A-03 | Urun listesi | Admin urunler sayfasini ac | Urun listesi gorunur |
| A-04 | Yeni urun | Admin panelinden yeni urun olustur | Urun API'de ve urun listesinde gorunur |
| A-05 | Urun guncelleme | Bir urunun fiyat veya stok bilgisini degistir | Degisiklik musteri urun detayina yansir |
| A-06 | Urun pasiflestirme | Bir urunu sil/pasiflestir | Urun musteri tarafinda satin alinabilir olmaktan cikar |
| A-07 | Siparis listesi | Admin siparisler sayfasini ac | Olusturulan test siparisi listelenir |
| A-08 | Siparis durum guncelleme | Siparis durumunu admin panelinden degistir | Yeni durum siparis detayinda gorunur |

## API Komutlari

Urun listesi:

```bash
curl http://localhost:8081/api/products
```

Admin login:

```bash
curl -X POST http://localhost:8081/api/admin/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"admin@teddyjewellry.com","password":"Admin12345!"}'
```

Siparis olusturma:

```bash
curl -X POST http://localhost:8081/api/orders \
  -H 'Content-Type: application/json' \
  -d '{"items":[{"productId":1,"quantity":1}],"customer":{"name":"Test Musteri","email":"test@example.com","address":"Test Mahallesi Test Sokak No 1","city":"Istanbul","district":"Kadikoy","note":"Smoke test"}}'
```

Odeme baslatma:

```bash
curl -X POST http://localhost:8081/api/payments/initialize \
  -H 'Content-Type: application/json' \
  -d '{"orderNumber":"ORD-..."}'
```

Basarili odeme callback:

```bash
curl -X POST http://localhost:8081/api/payments/callback \
  -H 'Content-Type: application/json' \
  -d '{"token":"PAYMENT_TOKEN","status":"SUCCESS"}'
```

## Bu Turda Dogrulananlar

- Backend Maven test/build fazi basarili.
- Frontend production build basarili.
- `GET /api/products` ve `GET /api/categories` 200 dondu.
- Admin login basarili token dondu.
- Test siparisi olusturuldu: `ORD-2026-2047628261241`.
- Odeme initialize basarili token dondu.
- Odeme callback `SUCCESS` sonrasi siparis `PAID` oldu.
- `http://localhost:3001/products` production modda 200 dondu ve urun kartlari DOM'da gorundu.

