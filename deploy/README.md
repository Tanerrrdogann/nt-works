# NT Web Cozumleri Production Notes

Bu klasor VPS yayininda kaynak kullanimini azaltmak icin eklenen dosyalari tutar. Gorsel ve kullanici akisi degismez; fark sadece uretimde bazi demo on yuzlerinin statik dosya olarak servis edilmesi ve agir Docker servislerinin bellek sinirlariyla calismasidir.

## Mantik

- Ana NT Web Cozumleri sitesi tek Next.js uygulamasi olarak calisir.
- Satis odakli on yuz demolarin backend gerektirmeyenleri statik export edilir ve Nginx tarafindan servis edilir.
- E-ticaret demosu urun, sepet, admin ve siparis akislari backend'e bagli oldugu icin Next.js frontend olarak calismaya devam eder.
- Root Next.js uygulamasi uretimde demo serverlarini otomatik baslatmaz.
- Teknik demo backendleri ayrica Docker Compose ile calisir.
- Docker servisleri prod override dosyalariyla 6 GB VPS'e daha uygun bellek limitleriyle baslar.

## Build

```bash
npm ci
npm run build:prod
```

`build:prod` su islemleri yapar:

- Ana siteyi `NTWORKS_DEMO_AUTOSTART=0` ve `NTWORKS_STATIC_DEMOS=1` ile build eder.
- E-ticaret frontend demosunu production mod icin build eder.
- Statik alinabilen demo on yuzlerini `deploy/static-demos` altina export eder.

## Ana Siteyi Calistirma

PM2 kullanilacaksa:

```bash
pm2 start deploy/ecosystem.config.cjs
pm2 save
```

PM2 kullanilmayacaksa:

```bash
npm run start:prod
```

## Nginx

`deploy/nginx.ntworks.conf` icindeki `server_name` alanini kendi domaininle degistir. Projeyi `/var/www/nt-works` altina koyduysan config dogrudan uyumludur.

Statik servis edilen demo on yuzleri:

- `/kurumsal-web-sitesi/`
- `/landing-page/`
- `/randevu-rezervasyon-sistemi/`
- `/whatsapp-siparis-katalog/`
- `/admin-panelli-isletme-sistemi/`

E-ticaret demosu canli frontend olarak proxylenir:

- `/ecommerce-platform/` -> `127.0.0.1:4107/ecommerce-platform/`

E-ticaret backend'i yine frontend'in kendi rewrites ayariyla calisir:

- `/ecommerce-platform/api/` -> frontend -> `127.0.0.1:8081`

E-ticaret backend'i ayrica 8081 portunda calismali:

```bash
cd projects/ecommerce-platform
mvn -f backend/pom.xml -DskipTests package
JAVA_TOOL_OPTIONS="-Xms128m -Xmx512m" java -jar backend/target/*.jar
```

## Teknik Demolari Prod Override ile Baslatma

AI / Log Analiz Paneli:

```bash
cd projects/ai-log-analysis-panel
AI_WEB_PORT=4102 AI_PLATFORM_API_PORT=5102 AI_SERVICE_PORT=5202 docker compose -f docker-compose.yml -f ../../deploy/compose-overrides/ai-log-analysis-panel.prod.yml up -d --build
```

Video Analiz Platformu:

```bash
cd projects/video-analytics-platform
VIDEO_WEB_PORT=4103 VIDEO_API_PORT=5103 VITE_API_PROXY_TARGET=http://api:8000 docker compose -f docker-compose.yml -f ../../deploy/compose-overrides/video-analytics-platform.prod.yml up -d --build
```

Cloud Dosya Yonetim Platformu:

```bash
cd projects/cloud-storage-platform/auth-system
CLOUD_FRONTEND_PORT=4101 CLOUD_MINIO_PORT=5701 CLOUD_MINIO_CONSOLE_PORT=5702 docker compose -f docker-compose.demo.yml -f ../../../deploy/compose-overrides/cloud-storage-platform.prod.yml up -d --build --remove-orphans
```

## Beklenen Kaynak Etkisi

Bu yapiyla 6 GB RAM'li VPS hedeflenir. En buyuk kazanc, 5 adet Next.js demo frontend serverinin uretimde surekli calismamasi ve Java/Python/Docker servislerinin bellek siniriyla tutulmasidir.

Lokal gelistirme komutlari ayni kalir:

```bash
npm run dev
npm run build
```
