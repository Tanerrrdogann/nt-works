export type DemoGuide = {
  title: string;
  titleTr: string;
  database: string;
  databaseTr: string;
  steps: string[];
  stepsTr: string[];
  notes: string[];
  notesTr: string[];
};

export const demoGuides: Record<string, DemoGuide> = {
  "cloud-storage-platform": {
    title: "Cloud drive preview flow",
    titleTr: "Bulut depolama inceleme akışı",
    database: "Uses isolated preview PostgreSQL, Redis, internal RabbitMQ, Vault and MinIO services. Sample data is seeded on startup and the public flow is read-only.",
    databaseTr:
      "İzole inceleme PostgreSQL, Redis, internal RabbitMQ, Vault ve MinIO servislerini kullanır. Örnek veri açılışta seed edilir ve herkese açık akış salt okunurdur.",
    steps: [
      "Sign in with the prepared user account and browse the seeded folders/files.",
      "Download sample files and inspect the encrypted object inventory.",
      "Sign in with the moderator or admin account to inspect users and storage state.",
      "Try mutation controls only to verify that the preview remains read-only."
    ],
    stepsTr: [
      "Hazır kullanıcı hesabıyla giriş yapıp seed edilmiş klasör/dosyaları gez.",
      "Örnek dosyaları indir ve encrypted object inventory ekranını incele.",
      "Moderatör veya yönetici hesabıyla kullanıcıları ve depolama durumunu incele.",
      "Değişiklik kontrollerini sadece incelemenin salt okunur kaldığını doğrulamak için dene."
    ],
    notes: [
      "The public preview excludes Grafana, Prometheus, Loki, Tempo and RabbitMQ management surfaces.",
      "Restarting the preview restores the same sample accounts and files."
    ],
    notesTr: [
      "Herkese açık inceleme Grafana, Prometheus, Loki, Tempo ve RabbitMQ yönetim yüzeylerini içermez.",
      "İnceleme yeniden açılınca aynı örnek hesaplar ve dosyalar geri gelir."
    ]
  },
  "ai-log-analysis-panel": {
    title: "Security analyst preview flow",
    titleTr: "Güvenlik analisti inceleme akışı",
    database: "Uses a seeded preview PostgreSQL database plus preview Redis state. It should contain only synthetic security events.",
    databaseTr:
      "Seed edilmiş inceleme PostgreSQL veritabanı ve inceleme Redis durumu kullanır. Sadece sentetik güvenlik olayları içermelidir.",
    steps: [
      "Sign in as Analyst and review the overview dashboard.",
      "Open alerts, incidents, actors and anomalies to inspect the seeded scenario.",
      "Ask the AI chat why the riskiest IP or alert is suspicious.",
      "Replay a sample scenario if the dataset needs to be refreshed."
    ],
    stepsTr: [
      "Analist hesabıyla giriş yapıp genel dashboard'u incele.",
      "Seed edilmiş senaryoyu görmek için uyarı, olay, aktör ve anomali ekranlarını aç.",
      "AI sohbet alanına en riskli IP veya uyarının neden şüpheli olduğunu sor.",
      "Veri yenilemek gerekirse örnek senaryoyu yeniden çalıştır."
    ],
    notes: [
      "The public preview intentionally disables live LLM calls and uses the built-in grounded response engine.",
      "A buyer can enable OpenAI, Groq or another OpenAI-compatible model later by adding their own API key.",
      "Do not expose real incident logs in this preview database."
    ],
    notesTr: [
      "Herkese açık inceleme bilinçli olarak canlı LLM çağrılarını kapatır ve yazdığımız kaynaklı cevap motorunu kullanır.",
      "Satın alan kişi daha sonra kendi API key'iyle OpenAI, Groq veya OpenAI uyumlu başka bir modeli bağlayabilir.",
      "Bu inceleme veritabanına gerçek incident logları koyma."
    ]
  },
  "video-analysis-platform": {
    title: "Video analysis preview flow",
    titleTr: "Video analiz inceleme akışı",
    database: "Uses preview PostgreSQL, Redis queue state and local preview storage. Uploaded files and generated snapshots should be temporary.",
    databaseTr:
      "İnceleme PostgreSQL, Redis kuyruk durumu ve geçici yerel depolama kullanır. Yüklenen dosyalar ve üretilen snapshotlar geçici olmalıdır.",
    steps: [
      "Upload the bundled sample MP4 or a small MP4 file.",
      "Wait for the background job to complete.",
      "Open the video detail page and review timeline, detections, transcript and storage report.",
      "Run cleanup/reset after the session."
    ],
    stepsTr: [
      "Hazır örnek MP4 dosyasını veya küçük bir MP4 dosyasını yükle.",
      "Arka plan işinin tamamlanmasını bekle.",
      "Video detay sayfasında zaman çizelgesi, tespitler, transkript ve depolama raporu alanlarını incele.",
      "Oturumdan sonra temizleme/sıfırlama çalıştır."
    ],
    notes: [
      "This preview can become CPU-heavy. Keep transcription on tiny/int8 and use short videos for VPS.",
      "Generated uploads and snapshots were cleaned from the copied project."
    ],
    notesTr: [
      "Bu inceleme CPU tüketebilir. VPS için transkripsiyon tiny/int8 ve kısa videolar kullanılmalı.",
      "Kopyalanan projedeki üretilmiş upload ve snapshot çıktıları temizlendi."
    ]
  },
  "task-management-system": {
    title: "Task workflow preview flow",
    titleTr: "Görev yönetimi inceleme akışı",
    database: "Uses in-memory H2 sample data by default. It is safe for preview sessions because data disappears on restart.",
    databaseTr:
      "Varsayılan olarak in-memory H2 örnek verisi kullanır. Restart sonrası veri silindiği için inceleme oturumları için güvenlidir.",
    steps: [
      "Enter any name and email on the login screen.",
      "Create a task with priority and due date.",
      "Search, complete or delete a task.",
      "Export task list, daily report or weekly report as PDF."
    ],
    stepsTr: [
      "Login ekranında herhangi bir ad, soyad ve e-posta gir.",
      "Öncelik ve bitiş tarihi olan bir görev oluştur.",
      "Görev ara, tamamla veya sil.",
      "Görev listesi, günlük rapor veya haftalık rapor PDF çıktısı al."
    ],
    notes: [
      "Mail sending should stay disabled unless preview SMTP variables are explicitly configured.",
      "This is a fast live-preview candidate because it does not need Docker."
    ],
    notesTr: [
      "İnceleme SMTP değişkenleri özellikle verilmediyse mail gönderimi kapalı kalmalı.",
      "Docker gerektirmediği için hızlı canlı inceleme için iyi bir aday."
    ]
  },
  "library-search-engine": {
    title: "Search engine preview flow",
    titleTr: "Arama motoru inceleme akışı",
    database: "Uses the bundled CSV dataset and browser localStorage. It does not access any server database.",
    databaseTr:
      "Hazır CSV veri seti ve tarayıcı localStorage kullanır. Herhangi bir sunucu veritabanına erişmez.",
    steps: [
      "Search by title, author or tag.",
      "Try prefix suggestions and the relevance fallback.",
      "Filter by author, tag, year and score.",
      "Add, update or delete a book to see localStorage behavior."
    ],
    stepsTr: [
      "Başlık, yazar veya etiket ile arama yap.",
      "Ön ek önerilerini ve alaka fallback davranışını dene.",
      "Yazar, etiket, yıl ve puan filtrelerini kullan.",
      "localStorage davranışını görmek için kitap ekle, güncelle veya sil."
    ],
    notes: [
      "This is the fastest live-preview candidate. A static file server is enough.",
      "Reset means clearing localStorage or reopening a fresh browser session."
    ],
    notesTr: [
      "Bu en hızlı canlı inceleme adayı. Statik dosya sunucusu yeterli.",
      "Sıfırlama için localStorage temizlemek veya yeni tarayıcı oturumu açmak yeterli."
    ]
  },
  "ecommerce-platform": {
    title: "Customer and admin preview flow",
    titleTr: "Müşteri ve admin inceleme akışı",
    database: "Uses H2 preview mode by default now. When the real store owner buys domain/VPS, production PostgreSQL must be separate from NT Web Çözümleri preview DB.",
    databaseTr:
      "Şu an varsayılan H2 inceleme modunu kullanır. Gerçek mağaza sahibi domain/VPS aldığında production PostgreSQL, NT Web Çözümleri inceleme veritabanından ayrı olmalıdır.",
    steps: [
      "Browse products as a customer and add items to cart.",
      "Complete checkout with test customer details and test payment flow.",
      "Sign in as Admin to manage products and orders.",
      "Verify that preview orders do not touch the real production database."
    ],
    stepsTr: [
      "Müşteri gibi ürünleri gez ve sepete ürün ekle.",
      "Test müşteri bilgileriyle ödeme ve test ödeme akışını tamamla.",
      "Admin hesabıyla giriş yapıp ürünleri ve siparişleri yönet.",
      "İnceleme siparişlerinin gerçek production veritabanına dokunmadığını doğrula."
    ],
    notes: [
      "This project is also a real customer-facing e-commerce site. Keep preview and production environment variables fully separated.",
      "After the store owner's domain/VPS details are final, production branding and payment settings can be changed without affecting this NT Web Çözümleri preview."
    ],
    notesTr: [
      "Bu proje aynı zamanda gerçek müşteriye dönük e-ticaret sitesi. İnceleme ve production ortam değişkenleri tamamen ayrı tutulmalı.",
      "Mağaza sahibinin domain/VPS bilgileri netleşince production marka ve ödeme ayarları NT Web Çözümleri incelemesini etkilemeden değiştirilebilir."
    ]
  },
  "virtual-computer-simulator": {
    title: "Desktop project",
    titleTr: "Masaüstü proje",
    database: "No web preview database is required.",
    databaseTr: "Web inceleme veritabanı gerekmez.",
    steps: [
      "This project is not web-based, so it is intentionally kept out of the live browser preview runtime.",
      "We can decide later whether to publish a video walkthrough, downloadable package or browser-based simulation."
    ],
    stepsTr: [
      "Bu proje web tabanlı olmadığı için canlı tarayıcı inceleme akışının dışında bırakıldı.",
      "Daha sonra video anlatım, indirilebilir paket veya tarayıcı tabanlı simülasyon seçeneklerinden birini seçebiliriz."
    ],
    notes: [
      "No runtime work was done for this project yet."
    ],
    notesTr: [
      "Bu proje için henüz canlı çalışma altyapısı hazırlanmadı."
    ]
  }
};
