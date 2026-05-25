# Teddy Jewellry MVP

Online ödemeli e-ticaret MVP çalışması. Müşteri ekranları, localStorage sepeti, Spring Boot ürün/sipariş API'leri, admin panel ve iyzico test ödeme akışı hazırdır.

## Çalıştırma

Backend:

```bash
npm run backend:dev
```

Frontend:

```bash
npm run dev
```

Varsayılan API adresi frontend tarafında `http://localhost:8081` olarak ayarlıdır. Backend farklı portta çalışırsa:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8082 npm run dev
```

## Hazır Endpointler

```text
GET  /api/categories
GET  /api/products
GET  /api/products?category=kolye
GET  /api/products/{slug}
POST /api/orders
GET  /api/orders/{orderNumber}
POST /api/payments/initialize
POST /api/payments/callback
```

`POST /api/orders` frontend fiyatına güvenmez; ürün fiyatını, aktifliği ve stoğu backend veritabanından kontrol ederek siparişi `PENDING_PAYMENT` durumunda oluşturur.

## Kargo ve Ödeme

Kargo firması: Sürat Kargo.

Kural: 2 ve üzeri ürün siparişlerinde kargo ücretsiz, tek ürün siparişlerinde varsayılan kargo ücreti `99.90 TL`.

Ödeme şu an `iyzico-test` akışıyla çalışır:

```text
Checkout -> PENDING_PAYMENT sipariş -> ödeme initialize -> success/failure callback -> PAID veya PAYMENT_FAILED
```

Gerçek iyzico mağaza/üye işyeri hesabı açıldığında API key, secret key ve gerçek checkout endpointleri backend tarafına bağlanacak. Key bilgileri frontend'e yazılmayacak.

## Admin Panel

Admin giriş sayfası:

```text
/admin/login
```

Dev ortamı varsayılan admin bilgileri:

```text
E-posta: admin@teddyjewellry.com
Şifre: Admin12345!
```

Canlıya çıkmadan önce `ADMIN_EMAIL`, `ADMIN_PASSWORD` ve `JWT_SECRET` ortam değişkenleri mutlaka değiştirilmelidir.

Önemli ortam değişkenleri:

```text
ADMIN_EMAIL
ADMIN_PASSWORD
JWT_SECRET
FRONTEND_BASE_URL
SHIPPING_CARRIER
SHIPPING_FEE
SHIPPING_FREE_ITEM_THRESHOLD
```

Admin endpointleri JWT ile korunur:

```text
POST   /api/admin/auth/login
GET    /api/admin/products
POST   /api/admin/products
PUT    /api/admin/products/{id}
DELETE /api/admin/products/{id}
GET    /api/admin/orders
GET    /api/admin/orders/{id}
PUT    /api/admin/orders/{id}/status
```
