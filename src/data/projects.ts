import { ProjectType } from "@/types";

type RawProject = {
  slug: string;
  titleTr: string;
  categoryTr: string;
  shortDescriptionTr: string;
  descriptionTr?: string;
  problemTr: string;
  solutionTr: string;
  featuresTr?: string[];
  techStack?: string[];
  demoIncludesTr?: string[];
  demoLimitationsTr?: string[];
  database: string;
  deployment: string;
  metrics?: ProjectType["metrics"];
  screenshots?: ProjectType["screenshots"];
  caseStudies?: ProjectType["caseStudies"];
  [key: string]: unknown;
};

type ProjectScreenshot = NonNullable<ProjectType["screenshots"]>[number];

const makeMizanScreenshots = (group: "public" | "customer" | "admin", count: number, label: string): ProjectScreenshot[] =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      src: `/projects/mizan-mulk/screenshots/${group}-${number}.png`,
      alt: `Mizan Mülk ${label} ekranı ${index + 1}`,
    };
  });

const baseMizanScreenshots: ProjectScreenshot[] = [
  ...makeMizanScreenshots("public", 16, "giriş öncesi"),
  ...makeMizanScreenshots("customer", 10, "müşteri paneli"),
  ...makeMizanScreenshots("admin", 12, "admin paneli"),
].filter((_, index) => ![5, 6, 9, 11, 15].includes(index));

const mizanBlogScreenshots: ProjectScreenshot[] = [
  {
    src: "/projects/mizan-mulk/screenshots/public-blog-list.png",
    alt: "Mizan Mülk hukuk blog liste ekranı",
  },
  {
    src: "/projects/mizan-mulk/screenshots/public-blog-detail.png",
    alt: "Mizan Mülk hukuk blog detay ekranı",
  },
];

const mizanExtraScreenshots: ProjectScreenshot[] = [
  {
    src: "/projects/mizan-mulk/screenshots/public-extra-08-09.png",
    alt: "Mizan Mülk giriş öncesi ek ekran",
  },
];

const mizanLoginScreenshots: ProjectScreenshot[] = [
  {
    src: "/projects/mizan-mulk/screenshots/public-extra-14-15.png",
    alt: "Mizan Mülk giriş ekranı",
  },
];

const mizanScreenshots: ProjectScreenshot[] = [
  ...baseMizanScreenshots.slice(0, 8),
  ...mizanExtraScreenshots,
  ...baseMizanScreenshots.slice(8, 11),
  ...mizanBlogScreenshots,
  ...mizanLoginScreenshots,
  ...baseMizanScreenshots.slice(11),
];

const plannedDemoProject = ({
  slug,
  titleTr,
  categoryTr,
  shortDescriptionTr,
  problemTr,
  solutionTr,
  featuresTr,
  techStack,
}: {
  slug: string;
  titleTr: string;
  categoryTr: string;
  shortDescriptionTr: string;
  problemTr: string;
  solutionTr: string;
  featuresTr: string[];
  techStack: string[];
}): RawProject => ({
  slug,
  title: titleTr,
  titleTr,
  category: categoryTr,
  categoryTr,
  status: "planned",
  projectKind: "demo",
  isDemoEnabled: false,
  shortDescription: shortDescriptionTr,
  shortDescriptionTr,
  description: shortDescriptionTr,
  descriptionTr: `${shortDescriptionTr} Bu kart, ileride canlı demo üretilecek kapsamı şimdiden kayıt altında tutar.`,
  problem: problemTr,
  problemTr,
  solution: solutionTr,
  solutionTr,
  techStack,
  features: featuresTr,
  featuresTr,
  demoIncludesTr: [
    "Canlı demo sonra üretilecek",
    "Kapsam kart olarak kaydedildi",
    "Benzerini yaptırmak isteyen ziyaretçi teklif formuna yönlendirilir",
  ],
  demoLimitationsTr: [
    "Şu anda canlı inceleme bağlantısı yok",
    "Ekran akışları ve demo verisi daha sonra hazırlanacak",
  ],
  demoUrl: "",
  githubUrl: "#",
  database: "Planlanan demo veri seti",
  deployment: "Canlı demo kapalı; kapsam kartı olarak yayında",
});

const ntWorksProjects = [
  {
    slug: "pazaryeri-xml-entegrasyonu",
    title: "Marketplace XML Integration",
    titleTr: "Pazaryeri XML Entegrasyonu",
    category: "Integration",
    categoryTr: "Pazaryeri Entegrasyonu",
    status: "client",
    projectKind: "client",
    clientDisplayName: "Anonim müşteri",
    isDemoEnabled: false,
    shortDescription: "A client integration project for marketplace product data, XML mapping and technical constraint handling.",
    shortDescriptionTr: "XML kaynak ürün verisini n11, Trendyol, Hepsiburada, idefix, Pazarama, PTTAVM ve Çiçeksepeti süreçlerine uyarlamak için tamamlanan gerçek entegrasyon işi.",
    description: "A real client project focused on marketplace XML data preparation, field mapping and integration planning.",
    descriptionTr: "XML kaynak ürün verisinin pazaryerlerine aktarılması, stok/fiyat eşitlenmesi, eksik ürünlerin açılması, kaynakta olmayan ürünlerin pasife alınması ve 30 dakikalık cron otomasyonlarıyla sürecin sürdürülebilir hale getirilmesi için yapılan gerçek müşteri projesi.",
    problem: "Marketplace integration projects often face changing field requirements, data mismatches and technical platform constraints.",
    problemTr: "Aynı XML verisini farklı pazaryerlerine aktarmak; kategori, barkod, marka, zorunlu attribute, batch sonucu, rate limit, panel/API farkı ve stok-fiyat güncelleme kuralları yüzünden tek tip bir işlem değildir.",
    solution: "The work focused on reviewing XML data, mapping required fields, adapting to technical constraints and keeping communication clear during changes.",
    solutionTr: "XML verisi stok kodu/barkod temelinde eşleştirildi; pazaryeri bazlı create, fiyat/stok sync, duplicate kontrol, batch takip ve cron akışları kuruldu. n11 kategori deneme mantığı, Trendyol attribute/marka eşleştirmesi, Pazarama v2 update endpointleri, PTT prefixli barkod akışı ve Çiçeksepeti Excel şablon ayrımları ayrı ayrı çözüldü.",
    result: "5 yıldızlı müşteri değerlendirmesiyle tamamlanan 1 entegrasyon işi. Sistem, 30 dakikada bir çalışan cron yapılarıyla eksik ürün ekleme, fiyat/stok güncelleme ve kaynakta olmayan ürünleri stok 0/pasif yapma mantığına taşındı.",
    techStack: ["XML", "Python", "Marketplace API", "Cron", "Data Mapping", "Batch Tracking", "Price/Stock Sync"],
    features: ["XML field review", "Marketplace data mapping", "Technical constraint handling", "Integration planning", "Client communication"],
    featuresTr: [
      "XML stok kodu / barkod eşleştirme",
      "n11 kategori deneme ve ürün açma akışı",
      "Trendyol marka, beden ve materyal attribute çözümü",
      "Hepsiburada, idefix ve Pazarama fiyat/stok eşitleme",
      "Pazarama duplicate ve v2 endpoint yönetimi",
      "PTTAVM prefixli barkod ve tracking sonucu takibi",
      "Çiçeksepeti kategori Excel şablon hazırlığı",
      "30 dakikalık cron ve flock kilit yapısı",
      "Müşteri formülüne göre otomatik fiyat hesaplama"
    ],
    metrics: [
      { value: "7", label: "pazaryeri kanalı" },
      { value: "30 dk", label: "cron çalışma aralığı" },
      { value: "1", label: "tamamlanan entegrasyon işi" }
    ],
    screenshots: [
      {
        src: "/projects/marketplace-xml/integration-overview.png",
        alt: "Çoklu pazaryeri XML entegrasyon sistemi mimari özeti",
        caption: "XML kaynak veriden pazaryeri ürün, stok ve fiyat otomasyonuna giden genel yapı."
      }
    ],
    caseStudies: [
      {
        title: "Çoklu pazaryeri XML entegrasyon sistemi",
        summary: "Tek bir XML kaynak verisinin n11, Trendyol, Hepsiburada, idefix, Pazarama, PTTAVM ve Çiçeksepeti tarafında kullanılabilir hale getirilmesi için pazaryeri bazlı kurallar, batch takipleri ve cron otomasyonları hazırlandı.",
        sections: [
          {
            title: "Başlangıç problemi",
            body: [
              "Müşterinin elindeki ürün verisi tek XML kaynağından geliyordu; fakat her pazaryeri aynı veriyi aynı şekilde kabul etmiyordu. Kimi tarafta kategori, kimi tarafta marka, kimi tarafta attribute, kimi tarafta barkod ya da API/panel görünürlük farkı süreci kilitleyebiliyordu.",
              "Ayrıca sadece ürün açmak yeterli değildi. XML'de bulunan ürünlerin eksiksiz aktarılması, mevcut ürünlerin fiyat ve stoklarının güncellenmesi, XML'de artık bulunmayan ürünlerin pasife alınması ve her işlemin takip edilebilir olması gerekiyordu."
            ],
            bullets: [
              "Pazaryeri bazlı zorunlu alan ve kategori farkları incelendi.",
              "Barkod, stok kodu, marka ve attribute eşleştirmeleri ayrı ayrı ele alındı.",
              "Batch, task ve tracking sonuçlarının yalnızca HTTP cevabına göre değil, gerçek işlem sonucuna göre kontrol edilmesi sağlandı."
            ]
          },
          {
            title: "Kurulan çözüm",
            body: [
              "Sistem; eksik ürün ekleme, fiyat güncelleme, stok eşitleme, XML'de olmayan ürünü pasife alma ve periyodik çalışma başlıklarına ayrıldı. Her pazaryeri kendi kuralıyla çalıştığı için tek fonksiyonla her yere gönderim yapmak yerine kanal bazlı güvenli akışlar tercih edildi.",
              "Fiyat tarafında müşterinin istediği formül merkeze alındı. Ürün fiyatı manuel değiştirilmek yerine bayi fiyatı üzerinden formülle hesaplanacak hale getirildi. Böylece pazaryeri fiyatlarının tutarlı ilerlemesi sağlandı."
            ],
            bullets: [
              "Fiyat formülü: bayi fiyatı temel alınarak otomatik satış fiyatı üretimi.",
              "30 dakikalık cron çalışması ve çakışmayı önlemek için kilit mantığı.",
              "Eksik ürün, fiyat/stok güncelleme, pasife alma ve raporlama adımlarının ayrılması."
            ]
          },
          {
            title: "Pazaryeri bazlı ilerleyiş",
            body: [
              "n11 tarafında kategori denemeleri, ürün açma cevapları ve uyarı kontrolleri yapıldı. Trendyol tarafında marka ve zorunlu attribute gereksinimleri ele alındı. Hepsiburada ve idefix tarafında eksik ürün açma ve stok/fiyat eşitleme akışları kuruldu.",
              "Pazarama tarafında API cevabı ile panel görünürlüğünün farklı davranabildiği görüldü; duplicate ve v2 update endpointleri üzerinden ayrı bir takip mantığı kuruldu. PTTAVM tarafında prefixli barkod yapısı ve tracking sonucu kontrol edildi. Çiçeksepeti tarafında kategori Excel şablonları üzerinden ilerlenerek yükleme süreci çalışır hale getirildi."
            ],
            bullets: [
              "n11, Trendyol, Hepsiburada, idefix, Pazarama, PTTAVM ve Çiçeksepeti ayrı akışlarla ele alındı.",
              "API başarılı döndü diye işlem tamamlandı kabul edilmedi; panel ve batch sonucu ayrıca takip edildi.",
              "Pazaryeri kısıtları müşteriye sade şekilde anlatılarak süreç parça parça kapatıldı."
            ]
          },
          {
            title: "Sonuç",
            body: [
              "Proje sonunda müşteri, pazaryeri verilerini daha kontrollü şekilde yönetecek bir otomasyon mantığına geçti. Sistem yalnızca ilk veri aktarımına değil, devam eden fiyat/stok yönetimine de hizmet edecek şekilde kurgulandı.",
              "Bu çalışma, pazaryeri entegrasyonlarında asıl işin sadece API'ye veri göndermek olmadığını; alan eşleştirme, platform kuralı, işlem sonucu takibi ve sürdürülebilir cron yapısının birlikte düşünülmesi gerektiğini gösteren güçlü bir referans haline geldi."
            ],
            bullets: [
              "Eksik ürünleri ekleme ve mevcut ürünleri güncelleme akışı oluşturuldu.",
              "XML'de olmayan ürünleri pasif/stok sıfır mantığıyla ele alma yaklaşımı kuruldu.",
              "5 yıldızlı müşteri değerlendirmesiyle tamamlandı."
            ]
          }
        ],
        outcomes: [
          "Pazaryeri entegrasyonu tek seferlik aktarım değil, sürdürülebilir operasyon sistemi olarak ele alındı.",
          "Müşterinin fiyat, stok ve ürün görünürlüğü süreçleri daha ölçülebilir hale geldi.",
          "Platform bazlı kısıtlar ayrıştırıldığı için ileride yeni pazaryeri ekleme mantığı daha yönetilebilir hale geldi."
        ]
      }
    ],
    demoUrl: "",
    githubUrl: "#",
    demoAccounts: [],
    database: "XML veri kaynağı / pazaryeri alanları",
    deployment: "Tamamlanan müşteri işi",
    image: "/projects/marketplace-xml/integration-overview.png",
    featured: true,
    testimonialSlug: "okanersoy-bionluk",
  },
  {
    slug: "mizan-mulk-yonetim-sistemi",
    title: "Real Estate Management System",
    titleTr: "Mizan Mülk Yönetim Sistemi",
    category: "Business Management",
    categoryTr: "Gayrimenkul Yönetim Sistemi",
    status: "client",
    projectKind: "client",
    clientDisplayName: "Mizan Mülk",
    isDemoEnabled: false,
    shortDescription: "A real client business management system for organizing property and operation records.",
    shortDescriptionTr: "Aynı müşteri için 2 ayrı tamamlanan iş: önce Softr/NocoDB/PostgreSQL altyapısı ve tahakkuk otomasyonları, sonra doğrudan sunucuya bağlı özel Mizan Mülk yönetim paneli.",
    description: "A real client project focused on property management, operational records and manageable business workflows.",
    descriptionTr: "Mizan Mülk için iki aşamalı ilerleyen gerçek müşteri çalışmasıdır. İlk aşamada mevcut Softr tabanlı ön yüzün NocoDB ve PostgreSQL altyapısıyla çalışması, ilişki yapıları, tahakkuk otomasyonu ve bildirim sistemi ele alındı. İkinci aşamada Softr kısıtları aşılmak üzere doğrudan sunucuya bağlı, admin ve kullanıcı panelleri olan özel Mizan Mülk yönetim sistemi hazırlandı.",
    problem: "Property and operation data becomes hard to track when records live across different tools and manual notes.",
    problemTr: "Müşteri başlangıçta Softr, Airtable/NocoDB, PostgreSQL ve otomasyon ihtiyaçlarını birlikte kullanmaya çalışıyordu. İlişkili verilerin Softr tarafında sınırlı görünmesi, kira tahakkuklarının manuel ilerlemesi, bildirim ihtiyacı, yedekleme, SSL, reverse proxy ve daha sonra özel panel ihtiyacı süreci iki ayrı geliştirme işine dönüştürdü.",
    solution: "The system brings records, management screens and operational follow-up into a more organized structure.",
    solutionTr: "İlk işte NocoDB üzerinde mülk sahipleri, mülkler, kiralamalar, tahsilatlar ve bildirimler ilişkili hale getirildi; Softr formlarına seçili mülk bilgisinin taşınması, 12 aylık tahakkuk üretimi, günlük kontrol mantığı, bildirim kuyruğu, reverse proxy, SSL ve yedekleme süreçleri kuruldu. İkinci işte ise Softr bağımlılığından çıkılarak public sayfaları, başvuru akışı, kullanıcı girişi, admin paneli, mülk/kiracı/tahsilat/bildirim/blog/destek yönetimi ve demo verileri olan özel bir panel yapısı hazırlandı.",
    result: "5 yıldızlı müşteri değerlendirmesiyle ilerleyen 2 ayrı tamamlanan iş. İlk işte mevcut Softr/NocoDB/PostgreSQL altyapısı ve otomasyonlar çalışır hale getirildi; ikinci işte doğrudan sunucuya bağlı özel Mizan Mülk paneli, admin operasyon ekranları ve dolu demo verisi oluşturuldu.",
    techStack: ["Softr", "NocoDB", "PostgreSQL", "Node.js", "Reverse Proxy", "SSL", "Admin Panel", "Notification Workflow"],
    features: ["Record management", "Operational tracking", "Admin workflow", "Structured data", "Client communication"],
    featuresTr: [
      "2 ayrı tamamlanan müşteri işi",
      "Softr form akışı ve seçili mülk bilgisinin taşınması",
      "NocoDB + PostgreSQL ilişki yapısı",
      "Kira tahakkuklarının otomatik oluşturulması",
      "Bildirim kuyruğu ve duyuru mantığı",
      "Reverse proxy, SSL ve günlük yedekleme yaklaşımı",
      "Özel admin paneli ve kullanıcı paneli",
      "Mülk, kiracı, finans, bildirim, blog ve destek yönetimi",
      "Dolu demo hesabı ve sunum verisi"
    ],
    metrics: [
      { value: "2", label: "ayrı tamamlanan iş" },
      { value: "12 ay", label: "tahakkuk otomasyonu" },
      { value: "9 / 12", label: "mülk ve kiracı demo verisi" }
    ],
    screenshots: mizanScreenshots,
    caseStudies: [
      {
        title: "Softr, NocoDB ve PostgreSQL altyapısının toparlanması",
        summary: "İlk işte amaç, mevcut Softr ön yüzünün arkasındaki veriyi NocoDB ve PostgreSQL ile daha düzenli çalışır hale getirmek, mülk-kiracı-tahsilat ilişkilerini kurmak ve manuel ilerleyen kira tahakkuk sürecini otomasyona bağlamaktı.",
        sections: [
          {
            title: "Başlangıç durumu",
            body: [
              "Mizan Mülk başlangıçta ön yüzünü Softr ile sağlıyor, veri tarafında ise Airtable'dan NocoDB ve PostgreSQL yapısına geçmek istiyordu. Fakat ilişkili alanların Softr tarafında sınırlı okunması, form içinde seçili mülk bilgisinin kiracı kaydına taşınması ve tahakkukların otomatik üretilmesi gibi konular standart kurulumla çözülemiyordu.",
              "Süreç yalnızca tablo oluşturma işi değildi. Mülk sahibi, mülk, kiralama, tahsilat ve bildirim verileri birbirine bağlı çalışmalı; kiracı eklendiğinde ilgili mülkün seçimi kaybolmamalı; kontrat başlangıç ve bitiş tarihlerine göre tahakkuk kayıtları tekrar üretmeden düzenli oluşmalıydı."
            ],
            bullets: [
              "Mevcut yapı yedeklendi ve veri ilişkileri kontrollü şekilde ele alındı.",
              "NocoDB tarafında mülk sahipleri, mülkler, kiralamalar, tahsilatlar ve bildirimler ilişkilendirildi.",
              "Softr form akışında seçilen mülk bilgisinin kiracı kaydına taşınması sağlandı."
            ]
          },
          {
            title: "Tahakkuk ve bildirim otomasyonları",
            body: [
              "Kira tahakkuklarının manuel takip edilmesi, mülk yönetimi için en kritik yüklerden biriydi. Bu nedenle kontrat başlangıç tarihi, bitiş tarihi ve ödeme günü dikkate alınarak ileriye dönük tahakkuk üretimi kurgulandı. Kontrat 12 aydan uzunsa 12 aylık ileri kayıtlar üretildi; daha kısa kontratlarda yalnızca kontrat süresi kadar kayıt oluşturuldu.",
              "Günlük kontrol mantığı ile kontrat bitişine kadar yeni ayların tahakkukları tamamlanacak şekilde akış hazırlandı. Aynı kayıtların tekrar oluşmaması için duplicate kontrolü yapıldı. Bildirim tarafında ise genel ve kişiye özel duyuruların kuyruk üzerinden yönetilebileceği bir yapı kuruldu."
            ],
            bullets: [
              "Bekliyor, Ödendi ve Ödenmedi gibi ödeme durumları desteklendi.",
              "Tahakkuk üretiminde kontrat süresi ve ödeme günü dikkate alındı.",
              "Bildirimler tablo ve servis mantığıyla kuyruğa alınacak şekilde kurgulandı."
            ]
          },
          {
            title: "Sunucu, güvenlik ve sürdürülebilirlik",
            body: [
              "Sistemin yalnızca geliştirme ortamında değil, gerçek kullanımda da sürdürülebilir olması için reverse proxy, SSL, günlük yedekleme ve sınırlı veritabanı kullanıcısı gibi operasyonel başlıklar ele alındı.",
              "Bu aşamanın çıktısı, müşterinin mevcut Softr tabanlı yapısını daha kontrollü ve otomasyon destekli hale getiren bir altyapı oldu. Ancak Softr tarafındaki platform kısıtları ilerleyen süreçte ikinci bir özel panel işinin doğmasına neden oldu."
            ],
            bullets: [
              "Reverse proxy ve SSL yaklaşımı kuruldu.",
              "Günlük yedekleme ve erişim sınırları düşünüldü.",
              "Softr kısıtları görünür hale geldiği için özel panel ihtiyacı netleşti."
            ]
          }
        ],
        outcomes: [
          "Mevcut Softr/NocoDB/PostgreSQL altyapısı daha düzenli ve takip edilebilir hale geldi.",
          "Kira tahakkukları için manuel yükü azaltan otomasyon mantığı kuruldu.",
          "İkinci aşamada özel panel geliştirmeye geçmek için gerçek ihtiyaçlar netleşti."
        ]
      },
      {
        title: "Özel Mizan Mülk yönetim paneli ve demo altyapısı",
        summary: "İkinci işte Softr sınırlarını aşmak için doğrudan sunucuya bağlı, admin ve kullanıcı panelleri olan özel bir Mizan Mülk sistemi hazırlandı. Amaç hem gerçek operasyonu hem de müşterinin sunum/demo ihtiyacını daha profesyonel bir yapıda karşılamaktı.",
        sections: [
          {
            title: "Panel kapsamı",
            body: [
              "Yeni yapıda public tanıtım sayfaları, kayıt/başvuru akışı, giriş ekranı, kullanıcı paneli ve admin paneli birlikte ele alındı. Kullanıcı tarafında mülkler, kiracılar, kira artış oranı, finans raporları, bildirimler ve hesap ayarları gibi temel ekranlar hazırlandı.",
              "Admin tarafında ise başvurular, kullanıcılar, kullanıcı adına işlem, blog yönetimi, duyurular, destek talepleri, sistem hareketleri ve admin ayarları gibi operasyon ekranları oluşturuldu. Böylece sistem yalnızca müşteri paneli değil, yönetim ve takip merkezi olarak da kullanılabilir hale geldi."
            ],
            bullets: [
              "Public sayfalar, kayıt ol ve giriş akışı hazırlandı.",
              "Kullanıcı panelinde mülk, kiracı, tahsilat, bildirim ve hesap alanları oluşturuldu.",
              "Admin panelinde başvuru, kullanıcı, duyuru, destek, blog ve sistem hareketleri yönetimi kuruldu."
            ]
          },
          {
            title: "Dolu demo ve operasyon görünürlüğü",
            body: [
              "Sunum ve inceleme için yalnızca boş ekranlar bırakılmadı; dolu bir kullanıcı hesabı ve örnek veri seti hazırlandı. Mülk, kiracı, tahsilat, bildirim ve rapor ekranlarında sistemin nasıl çalıştığı daha görünür hale getirildi.",
              "Bu yaklaşım müşterinin sistemi anlatmasını kolaylaştırır. Boş panel, yazılımın değerini göstermekte zayıf kalır; dolu demo ise hem iş mantığını hem de operasyon avantajını daha hızlı anlatır."
            ],
            bullets: [
              "Dolu kullanıcı hesabı ve örnek kayıtlar hazırlandı.",
              "Mülk/kiracı/finans/bildirim ekranlarında gerçekçi kullanım akışı gösterildi.",
              "Admin ve kullanıcı deneyimi ayrı ayrı düzenlendi."
            ]
          },
          {
            title: "Sonuç",
            body: [
              "İkinci işin sonunda Mizan Mülk, Softr tabanlı sınırlı yapıdan daha bağımsız, sunucuya bağlı ve yönetilebilir bir panele geçmiş oldu. Sistem; mülk yönetimi, kira takibi, tahsilat görünürlüğü, duyuru ve destek süreçlerini tek çatı altında anlatabilecek hale geldi.",
              "Bu iş, küçük ve orta ölçekli işletmeler için özel panel geliştirmenin yalnızca ekran tasarlamak olmadığını; veri yapısı, rol ayrımı, demo içeriği, admin operasyonu ve müşteri sunumunun birlikte düşünülmesi gerektiğini gösteren güçlü bir portföy kaydıdır."
            ],
            bullets: [
              "Özel admin paneli ve kullanıcı paneli oluşturuldu.",
              "Başvuru, bildirim, destek ve blog yönetimi gibi büyüyebilir modüller eklendi.",
              "Müşteri tarafında ikinci 5 yıldızlı değerlendirmeyle süreç güçlendi."
            ]
          }
        ],
        outcomes: [
          "Mizan Mülk için iki ayrı iş tek portföy kartında ama detayda ayrı ayrı anlatılacak hale getirildi.",
          "İlk altyapı işi ve ikinci özel panel işi birbirine karıştırılmadan sunuldu.",
          "Portföy sayfasında müşteri memnuniyeti ve teknik kapsam birlikte görünür oldu."
        ]
      }
    ],
    demoUrl: "",
    githubUrl: "#",
    demoAccounts: [],
    database: "PostgreSQL / NocoDB / özel panel veri yapısı",
    deployment: "Tamamlanan 2 ayrı müşteri işi",
    image: "/projects/mizan-mulk/screenshots/public-01.png",
    featured: true,
    testimonialSlug: "htopbas-bionluk-mizan-mulk",
  },
  {
    slug: "menar-operasyon-paneli",
    title: "MENAR Operations Panel",
    titleTr: "MENAR Operasyon Paneli",
    category: "Operations Panel",
    categoryTr: "Operasyon Paneli",
    status: "client",
    projectKind: "client",
    clientDisplayName: "MENAR",
    isDemoEnabled: false,
    shortDescription: "A real client operations panel project for organizing internal workflows.",
    shortDescriptionTr: "Aynı müşteri için 2 ayrı tamamlanan iş: MENAR operasyon veri modeli, Bitrix24/SharePoint/Power Platform altyapısı ve ek kapsam yönetim ekranları.",
    description: "A real client project focused on making operational workflows easier to follow and present.",
    descriptionTr: "MENAR için iki aşamalı ilerleyen gerçek müşteri çalışmasıdır. İlk işte Bitrix24, SharePoint, Power Apps, Power Automate ve Power BI üzerine kurulu turizm operasyon altyapısının veri modeli, süreç algoritması ve ekran kurgusu hazırlandı. İkinci işte dosya merkezi yükleme ekranı, tur paketleri yönetimi ve kur tablosu kullanım kuralı gibi ek kapsam ihtiyaçları ayrı ayrı netleştirildi.",
    problem: "Operational work becomes difficult to manage when forms, records and follow-up steps are scattered.",
    problemTr: "MENAR tarafında satış, rezervasyon, yolcu, tedarikçi, tur paketi, dosya, operasyon ve muhasebe kayıtlarının birbirinden kopmadan ilerlemesi gerekiyordu. Bitrix24 satış süreci ile SharePoint veri yapısı, Power Apps ekranları, Power Automate aktarımı ve Power BI raporları aynı mantıkta çalışmadığında operasyon takibi dağınık kalacaktı.",
    solution: "The work focused on organizing process screens, records and follow-up logic into a clearer panel flow.",
    solutionTr: "Sistem 21 SharePoint listesi, 19 veri ilişkisi, Bitrix24 deal akışı, Power Automate veri aktarımı, Power Apps yönetim ekranları ve Power BI rapor mantığı üzerinden kurgulandı. Tur, rezervasyon, yolcu, maliyet, fiyat, tedarik, dosya merkezi ve operasyon kayıtları tek süreç algoritmasına bağlandı. Ek kapsamda dosya yükleme merkezi, tur paketleri yönetimi ve aktif kur kullanım kuralı ayrıca tasarlandı.",
    result: "5 yıldızlı müşteri değerlendirmesiyle ilerleyen 2 ayrı tamamlanan iş. İlk işte MENAR operasyon altyapısının veri modeli, süreç algoritması ve Power Platform mimarisi çıkarıldı; ikinci işte dosya merkezi, tur paketi yönetimi ve kur tablosu gibi ek kapsam ekranları netleştirildi.",
    techStack: ["Bitrix24", "SharePoint", "Power Apps", "Power Automate", "Power BI", "Workflow Design", "Data Model"],
    features: ["Operation flow", "Record screens", "Process follow-up", "Client presentation", "Structured workflow"],
    featuresTr: [
      "2 ayrı tamamlanan müşteri işi",
      "Bitrix24 satıştan operasyona veri akışı",
      "21 SharePoint listesi ve 19 veri ilişkisi",
      "Power Automate ile rezervasyon aktarımı",
      "Power Apps yönetim ekranları",
      "Tur, rezervasyon, yolcu ve paket yönetimi",
      "Dosya merkezi ve çıktı klasör yapısı",
      "Maliyet, fiyat, tedarik hesabı ve tahsilat takibi",
      "Power BI dashboard ve raporlama kurgusu",
      "Ek kapsam: dosya yükleme, tur paketi yönetimi, kur tablosu kuralı"
    ],
    metrics: [
      { value: "2", label: "ayrı tamamlanan iş" },
      { value: "21", label: "SharePoint listesi" },
      { value: "19", label: "veri ilişkisi" },
      { value: "5", label: "Power BI dashboard" }
    ],
    screenshots: [
      {
        src: "/projects/menar/operation-overview.png",
        alt: "MENAR operasyon altyapısı mimari özeti",
      },
      {
        src: "/projects/menar/screenshots/control-panel.png",
        alt: "MENAR kontrol paneli ekranı",
      },
      {
        src: "/projects/menar/screenshots/reservations.png",
        alt: "MENAR rezervasyonlar ekranı",
      },
      {
        src: "/projects/menar/screenshots/reservation-detail.png",
        alt: "MENAR rezervasyon detay ekranı",
      },
      {
        src: "/projects/menar/screenshots/new-reservation.png",
        alt: "MENAR yeni rezervasyon ekranı",
      },
      {
        src: "/projects/menar/screenshots/tour-management.png",
        alt: "MENAR tur yönetimi ekranı",
      },
      {
        src: "/projects/menar/screenshots/tour-detail.png",
        alt: "MENAR tur detay ekranı",
      },
      {
        src: "/projects/menar/screenshots/new-tour.png",
        alt: "MENAR yeni tur ekranı",
      },
      {
        src: "/projects/menar/screenshots/passengers.png",
        alt: "MENAR yolcular ekranı",
      },
      {
        src: "/projects/menar/screenshots/passenger-detail.png",
        alt: "MENAR yolcu detay ekranı",
      },
      {
        src: "/projects/menar/screenshots/packages.png",
        alt: "MENAR tur paketleri yönetimi ekranı",
      },
      {
        src: "/projects/menar/screenshots/suppliers-hotel.png",
        alt: "MENAR tedarikçi otel ekranı",
      },
      {
        src: "/projects/menar/screenshots/suppliers-room.png",
        alt: "MENAR tedarikçi oda ekranı",
      },
      {
        src: "/projects/menar/screenshots/suppliers-flight.png",
        alt: "MENAR tedarikçi uçak ekranı",
      },
      {
        src: "/projects/menar/screenshots/suppliers-transfer.png",
        alt: "MENAR tedarikçi transfer ekranı",
      },
      {
        src: "/projects/menar/screenshots/suppliers-partner.png",
        alt: "MENAR tedarikçi partner ekranı",
      },
      {
        src: "/projects/menar/screenshots/operation-center.png",
        alt: "MENAR operasyon merkezi ekranı",
      },
    ],
    caseStudies: [
      {
        title: "MENAR operasyon altyapısı ve veri modeli",
        summary: "İlk işte MENAR'ın turizm operasyonunu Bitrix24, SharePoint, Power Apps, Power Automate ve Power BI üzerinde yönetebilmesi için ana süreç algoritması, veri modeli ve ekran akışları çıkarıldı.",
        sections: [
          {
            title: "Sistem omurgası",
            body: [
              "MENAR'ın ihtiyacı yalnızca birkaç form ekranı değildi. Satış tarafında Bitrix24, kayıt tarafında SharePoint, kullanım tarafında Power Apps, aktarım tarafında Power Automate ve raporlama tarafında Power BI birlikte düşünülmeliydi.",
              "Bu nedenle süreç Bitrix24 lead/deal aşamasından başlayıp teklif, kapora, satış, rezervasyon, yolcu, dosya, operasyon, muhasebe ve raporlama zincirine kadar uçtan uca ele alındı. Temel prensip, bir yolcunun sistemde tek kayıt olarak izlenmesi ve bütün süreçlerin bu kayıtla ilişkilendirilebilmesiydi."
            ],
            bullets: [
              "Bitrix24 satış süreci operasyon verisine bağlandı.",
              "SharePoint tarafında 21 liste ve 19 ilişki kurgulandı.",
              "Power Apps ekranları veri giriş ve yönetim merkezi olarak düşünüldü."
            ]
          },
          {
            title: "Veri yapısı ve operasyon modülleri",
            body: [
              "Tur master, tur paketleri, rezervasyon, rezervasyon kişileri, yolcular, tedarikçi, otel, uçak, fiyat periyotları, maliyet, satış fiyatı, operasyon, gezi planı, dosya merkezi, tedarik hesabı ve devre kamil rezervasyonları gibi modüller tek veri modelinde toplandı.",
              "Bu yapı sayesinde tur kontenjanı, satılan kişi sayısı, kalan kontenjan, yolcu durumu, vize/uçak/otel bilgileri, tedarikçi borçları ve dosya çıktı ihtiyaçları aynı operasyon akışında takip edilebilecek hale getirildi."
            ],
            bullets: [
              "Tur, paket, rezervasyon, yolcu ve operasyon kayıtları ilişkilendirildi.",
              "Maliyet ve satış fiyatı motoru için kur, tedarik ve fiyat periyodu mantığı kuruldu.",
              "Dosya merkezi; vize, uçak, otel, devre kamil, ravza, muhasebe ve diğer klasörleriyle planlandı."
            ]
          },
          {
            title: "Otomasyon ve raporlama",
            body: [
              "Power Automate akışı Bitrix24 deal verisini SharePoint tarafındaki rezervasyon ve rezervasyon kişileri yapısına aktaracak şekilde tasarlandı. Böylece satış tamamlandıktan sonra operasyon ekibinin yeniden veri girmesine gerek kalmadan süreç başlatılabilecekti.",
              "Power BI tarafında satış hunisi, tur karlılığı, kontenjan takibi, operasyon durumu ve tahsilat takibi gibi yönetim raporları planlandı. Bu raporlar yalnızca görsel dashboard değil, operasyon kararlarını destekleyen ölçüm alanları olarak ele alındı."
            ],
            bullets: [
              "Bitrix24 deal kaydından rezervasyon ve yolcu kayıtlarına otomatik geçiş planlandı.",
              "Kontenjan, tahsilat, operasyon ve karlılık raporları Power BI mantığıyla ele alındı.",
              "Süreç dokümantasyonu müşterinin operasyon ekibine anlatılabilecek şekilde hazırlandı."
            ]
          }
        ],
        outcomes: [
          "MENAR'ın dağınık satış ve operasyon adımları tek veri modeline bağlandı.",
          "Power Platform bileşenlerinin hangi görevde kullanılacağı netleşti.",
          "Müşteriye geliştirilebilir ve raporlanabilir bir operasyon mimarisi sunuldu."
        ]
      },
      {
        title: "Ek kapsam: dosya merkezi, tur paketleri ve kur yönetimi",
        summary: "İkinci işte ana sisteme eklenecek kullanım ekranları ve iş kuralları netleştirildi. Dosya yükleme merkezi, tur paketleri yönetimi ve kur tablosu aktif kayıt mantığı ayrı kapsam olarak ele alındı.",
        sections: [
          {
            title: "Dosya merkezi yükleme ekranı",
            body: [
              "Müşterinin ek ihtiyacı, kullanıcıların doğrudan SharePoint listesine girmeden dosya yükleyebilmesiydi. Bunun için Power Apps üzerinde tur, rezervasyon, yolcu, dosya tipi, dosya, not ve geçerlilik bilgisiyle çalışacak bir dosya yükleme ekranı planlandı.",
              "Dosya tipleri pasaport, vize, uçak bileti, oda planı, transfer, ravza, sözleşme ve diğer başlıklarıyla ayrıldı. Bu sayede operasyon dosyaları yalnızca saklanan dosya olmaktan çıkıp ilgili tur, rezervasyon ve yolcu kaydıyla anlamlı hale gelecekti."
            ],
            bullets: [
              "Dosyalar doğrudan ilgili tur, rezervasyon veya yolcuya bağlanacak şekilde tasarlandı.",
              "Kullanıcıların SharePoint liste mantığıyla uğraşmadan dosya ekleyebilmesi hedeflendi.",
              "Dosya türleri operasyon çıktılarıyla uyumlu başlıklara ayrıldı."
            ]
          },
          {
            title: "Tur paketleri yönetimi",
            body: [
              "Tur paketleri için listeleme, yeni paket oluşturma, düzenleme, detay görüntüleme ve aktif/pasif yönetim ekranları planlandı. Paket kodu, paket adı, bağlı tur, Mekke oteli, Medine oteli, oda tipi, toplam kontenjan, satılan kontenjan ve kalan kontenjan gibi alanlar bir arada düşünüldü.",
              "Bu yapı, satış ve operasyon tarafında paket bilgisinin dağılmasını engeller. Özellikle turizm operasyonunda paket, otel, oda tipi ve kontenjan bilgileri doğru bağlanmadığında hem satış hem operasyon tarafında hata riski artar."
            ],
            bullets: [
              "Tur paketleri ana tur kaydıyla ilişkilendirildi.",
              "Kontenjan ve oda tipi bilgileri paket seviyesinde ele alındı.",
              "Aktif/pasif yönetim ile kullanılmayacak paketlerin süreci karıştırması engellendi."
            ]
          },
          {
            title: "Kur tablosu ve operasyon kuralı",
            body: [
              "Kur tablosu için aynı para biriminde birden fazla aktif kayıt kalmaması gerektiği ayrıca tanımlandı. Yeni aktif kur kaydı eklendiğinde eski aktif kaydın pasife alınması, geçmiş kur kayıtlarının ise silinmeden saklanması planlandı.",
              "Bu kural maliyet ve fiyat hesaplamalarında kritik öneme sahiptir. Sistemde birden fazla aktif USD veya EUR kuru kalırsa fiyat motoru yanlış değer kullanabilir. Bu nedenle kur yönetimi yalnızca veri girişi değil, iş kuralı olarak ele alındı."
            ],
            bullets: [
              "Her para birimi için tek aktif kur kuralı tanımlandı.",
              "Yeni aktif kur geldiğinde eski aktif kaydın pasife alınması planlandı.",
              "Geçmiş kur kayıtlarının raporlama ve izlenebilirlik için korunması hedeflendi."
            ]
          }
        ],
        outcomes: [
          "Ana MENAR mimarisi üzerine ek kapsam ekranları net şekilde ayrıldı.",
          "Dosya, paket ve kur yönetimi müşterinin günlük operasyon kullanımına yaklaştırıldı.",
          "İkinci iş, ilk işin devamı olarak ama ayrı teslim kapsamı şeklinde anlatılabilir hale geldi."
        ]
      }
    ],
    demoUrl: "",
    githubUrl: "#",
    demoAccounts: [],
    database: "SharePoint listeleri / Bitrix24 kayıtları / Power Platform veri modeli",
    deployment: "Tamamlanan 2 ayrı müşteri işi",
    image: "/projects/menar/operation-overview.png",
    featured: true,
    testimonialSlug: "sefayama-bionluk",
  },
  {
    slug: "kurumsal-web-sitesi",
    title: "Marketing Site Template",
    titleTr: "Kurumsal Web Sitesi Örneği",
    category: "Business Website",
    categoryTr: "Kurumsal Web Sitesi",
    status: "live",
    isDemoEnabled: true,
    shortDescription: "A modern company website structure for services, references, contact flow and lead generation.",
    shortDescriptionTr: "Hizmetler, güven alanları, iletişim akışı ve müşteri talebi toplama için uyarlanabilir kurumsal web sitesi örneği.",
    description: "A clean, mobile-friendly website template for businesses that need a trustworthy digital presence.",
    descriptionTr: "İşletmenin güven veren bir dijital vitrine ihtiyaç duyduğu durumlar için sade, mobil uyumlu web sitesi şablonu.",
    problem: "Many businesses need a clear website that explains what they do and turns visitors into leads.",
    problemTr: "Birçok işletme ne yaptığını net anlatan ve ziyaretçiyi talebe dönüştüren bir web sitesine ihtiyaç duyar.",
    solution: "The structure includes homepage, service sections, proof areas, contact CTA and manageable content blocks.",
    solutionTr: "Yapı; ana sayfa, hizmet bölümleri, güven alanları, iletişim çağrısı ve yönetilebilir içerik blokları içerir.",
    techStack: ["Next.js", "Responsive UI", "SEO", "Contact Flow"],
    features: ["Homepage", "Service sections", "Reference area", "Contact CTA", "Mobile layout"],
    featuresTr: ["Ana sayfa", "Hizmet bölümleri", "Referans alanı", "İletişim çağrısı", "Mobil uyumlu yapı"],
    demoUrl: "/kurumsal-web-sitesi",
    githubUrl: "#",
    demoAccounts: [],
    database: "Optional CMS / form storage",
    deployment: "Domain + hosting / VPS",
    image: "/projects/business-website/cover.png",
    featured: true
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce System",
    titleTr: "E-Ticaret Sistemi Canlı Örneği",
    category: "Online Store",
    categoryTr: "E-Ticaret Sistemi",
    status: "maintenance",
    isDemoEnabled: true,
    shortDescription: "E-commerce system with product listing, cart, order management, admin panel and optional online payment.",
    shortDescriptionTr: "Ürün listeleme, sepet, sipariş yönetimi, admin panel ve online ödeme altyapısı içerebilen uyarlanabilir e-ticaret örneği.",
    description: "A real-world e-commerce MVP with product listing, cart flow, customer information, payment integration and admin management.",
    descriptionTr: "Ürün listeleme, sepet akışı, müşteri bilgileri, ödeme entegrasyonu ve admin yönetimi içeren e-ticaret sistemi.",
    problem: "Small businesses need a manageable online sales system beyond only marketplace listings.",
    problemTr: "Küçük işletmeler sadece pazaryeri listelemesi dışında yönetilebilir bir online satış sistemine ihtiyaç duyar.",
    solution: "The platform provides product management, cart, checkout, payment flow, order records and admin controls.",
    solutionTr: "Platform ürün yönetimi, sepet, ödeme akışı, sipariş kayıtları ve admin kontrolleri sağlar.",
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Docker", "Payment Integration"],
    features: ["Product listing", "Product detail page", "Cart", "Checkout form", "Online payment flow", "Order records", "Admin panel"],
    featuresTr: ["Ürün listeleme", "Ürün detay sayfası", "Sepet", "Checkout formu", "Online ödeme akışı", "Sipariş kayıtları", "Admin panel"],
    demoIncludes: ["Customer product browsing, cart and checkout preview", "Admin login for order/product review"],
    demoIncludesTr: ["Müşteri ürün gezme, sepet ve ödeme gösterimi", "Sipariş/ürün inceleme için admin girişi"],
    demoLimitations: ["Payment settings are preview/test values until the real domain and merchant account are finalized"],
    demoLimitationsTr: ["Gerçek domain ve merchant account netleşene kadar ödeme ayarları inceleme/test değerleridir"],
    demoUrl: "/ecommerce-platform",
    githubUrl: "#",
    demoAccounts: [
      { role: "Müşteri", email: "Giriş gerekmez", password: "Sepet akışını kullanın" },
      { role: "Yönetici", email: "admin@teddyjewellry.com", password: "Admin12345!" }
    ],
    database: "PostgreSQL / H2 preview",
    deployment: "Docker Compose + VPS",
    image: "/projects/ecommerce/cover.png",
    featured: true
  },
  {
    slug: "whatsapp-siparis-katalog",
    title: "Product Catalog / WhatsApp Order Site",
    titleTr: "WhatsApp Siparişli Katalog Örneği",
    category: "Catalog Website",
    categoryTr: "Katalog ve Sipariş",
    status: "live",
    isDemoEnabled: true,
    shortDescription: "A product catalog website where customers browse products and start orders through WhatsApp.",
    shortDescriptionTr: "Müşterilerin ürünleri inceleyip WhatsApp üzerinden sipariş başlatabildiği mobil uyumlu katalog örneği.",
    description: "A practical catalog flow for sellers who do not need full online payment on day one.",
    descriptionTr: "İlk aşamada tam online ödeme gerekmeyen satıcılar için pratik katalog ve sipariş akışı.",
    problem: "Instagram and WhatsApp sellers need a cleaner product showcase than sending photos manually.",
    problemTr: "Instagram ve WhatsApp satıcıları, ürün fotoğraflarını tek tek göndermek yerine düzenli bir katalog ister.",
    solution: "Products, categories and order buttons are organized into a fast mobile-first website.",
    solutionTr: "Ürünler, kategoriler ve sipariş butonları hızlı ve mobil öncelikli bir web sitesinde düzenlenir.",
    techStack: ["Next.js", "Product Catalog", "WhatsApp CTA", "Responsive UI"],
    features: ["Category listing", "Product cards", "WhatsApp order button", "Search/filter", "Mobile-first layout"],
    featuresTr: ["Kategori listeleme", "Ürün kartları", "WhatsApp sipariş butonu", "Arama/filtreleme", "Mobil öncelikli tasarım"],
    demoUrl: "/whatsapp-siparis-katalog",
    githubUrl: "#",
    demoAccounts: [],
    database: "Optional product storage",
    deployment: "Static hosting / VPS",
    image: "/projects/catalog/cover.png",
    featured: true
  },
  {
    slug: "randevu-rezervasyon-sistemi",
    title: "Appointment / Reservation System",
    titleTr: "Randevu / Rezervasyon Sistemi Örneği",
    category: "Booking System",
    categoryTr: "Randevu Sistemi",
    status: "live",
    isDemoEnabled: true,
    shortDescription: "A reservation system for service businesses with calendar, customer form and admin follow-up.",
    shortDescriptionTr: "Takvim, müşteri formu ve admin takibi olan hizmet işletmeleri için uyarlanabilir randevu/rezervasyon örneği.",
    description: "A booking flow that helps salons, clinics, consultants and small teams manage customer requests.",
    descriptionTr: "Kuaför, klinik, danışmanlık ve küçük ekiplerin müşteri taleplerini yönetmesine yardımcı olan rezervasyon akışı.",
    problem: "Manual appointment tracking creates missed messages, double bookings and messy follow-up.",
    problemTr: "Manuel randevu takibi kaçan mesajlara, çakışan saatlere ve dağınık takibe yol açar.",
    solution: "Customers request a time online, while the business reviews and manages bookings from an admin panel.",
    solutionTr: "Müşteri online saat talep eder; işletme ise rezervasyonları admin panelinden inceler ve yönetir.",
    techStack: ["Next.js", "Admin Panel", "Calendar Flow", "Email Notification"],
    features: ["Booking form", "Calendar slots", "Admin review", "Status tracking", "Email notification"],
    featuresTr: ["Randevu formu", "Takvim saatleri", "Admin inceleme", "Durum takibi", "E-posta bildirimi"],
    demoUrl: "/randevu-rezervasyon-sistemi",
    githubUrl: "#",
    demoAccounts: [],
    database: "PostgreSQL / Supabase / Airtable",
    deployment: "Domain + hosting / VPS",
    image: "/projects/booking/cover.png",
    featured: true
  },
  {
    slug: "admin-panelli-isletme-sistemi",
    title: "Business System With Admin Panel",
    titleTr: "Admin Panelli İşletme Sistemi Örneği",
    category: "Business Management",
    categoryTr: "İşletme Yönetimi",
    status: "live",
    isDemoEnabled: true,
    shortDescription: "A private business panel for managing customers, records, content and daily operations.",
    shortDescriptionTr: "Müşteri, kayıt, stok, sipariş, görev ve günlük operasyonları yönetmek için admin panelli işletme örneği.",
    description: "A custom internal system for teams that have outgrown spreadsheets and scattered message threads.",
    descriptionTr: "Excel tablolarını ve dağınık mesaj takibini aşan ekipler için özel iç yönetim sistemi.",
    problem: "Business data becomes hard to track when it lives across spreadsheets, chat apps and manual notes.",
    problemTr: "İşletme verisi Excel, mesajlaşma ve manuel notlar arasında dağılınca takip zorlaşır.",
    solution: "A role-based admin panel centralizes records, actions, statuses and reports.",
    solutionTr: "Rol bazlı admin panel; kayıtları, işlemleri, durumları ve raporları tek yerde toplar.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Role Management", "Reporting"],
    features: ["Login", "Role-based admin", "Record management", "Status tracking", "Reports"],
    featuresTr: ["Giriş sistemi", "Rol bazlı admin", "Kayıt yönetimi", "Durum takibi", "Raporlar"],
    demoUrl: "/admin-panelli-isletme-sistemi",
    githubUrl: "#",
    demoAccounts: [],
    database: "PostgreSQL",
    deployment: "Docker Compose + VPS",
    image: "/projects/admin-system/cover.png",
    featured: true
  },
  {
    slug: "landing-page",
    title: "Landing Page / One-Page Sales Page",
    titleTr: "Landing Page / Tek Sayfa Satış Örneği",
    category: "Sales Page",
    categoryTr: "Satış Sayfası",
    status: "live",
    isDemoEnabled: true,
    shortDescription: "A focused one-page sales site for campaigns, services, products and lead collection.",
    shortDescriptionTr: "Kampanya, hizmet, ürün tanıtımı ve talep toplama için odaklı tek sayfalık canlı satış sayfası örneği.",
    description: "A fast landing page for businesses that need one clear offer and one clear customer action.",
    descriptionTr: "Tek net teklif ve tek net müşteri aksiyonu isteyen işletmeler için hızlı satış sayfası.",
    problem: "Campaign traffic needs a focused page instead of sending visitors to a general website.",
    problemTr: "Kampanya trafiği, ziyaretçiyi genel siteye göndermek yerine odaklı bir sayfaya ihtiyaç duyar.",
    solution: "The page highlights the offer, benefits, proof, FAQ and contact/purchase CTA in a single flow.",
    solutionTr: "Sayfa; teklif, faydalar, güven alanları, SSS ve iletişim/satın alma çağrısını tek akışta sunar.",
    techStack: ["Next.js", "Conversion Copy", "Lead Form", "Analytics"],
    features: ["Offer section", "Benefits", "FAQ", "Lead form", "Analytics setup"],
    featuresTr: ["Teklif alanı", "Faydalar", "SSS", "Talep formu", "Analitik kurulumu"],
    demoUrl: "/landing-page",
    githubUrl: "#",
    demoAccounts: [],
    database: "Optional form storage",
    deployment: "Static hosting / VPS",
    image: "/projects/landing-page/cover.png",
    featured: true
  },
  {
    slug: "cloud-storage-platform",
    title: "Cloud File Management Platform",
    titleTr: "Cloud Dosya Yönetim Platformu Örneği",
    category: "File Management",
    categoryTr: "Dosya Yönetim Sistemi",
    status: "live",
    isDemoEnabled: true,
    shortDescription: "Company file management system with upload, folders, user permissions and activity history.",
    shortDescriptionTr: "Şirket içi dosya yükleme, klasörleme, kullanıcı yetkileri ve işlem geçmişi bulunan özel dosya yönetim örneği.",
    description: "A private file management platform for teams that need controlled access and organized document sharing.",
    descriptionTr: "Kontrollü erişim ve düzenli doküman paylaşımı isteyen ekipler için özel dosya yönetim platformu.",
    problem: "Teams lose control when files are scattered across chats, personal drives and email threads.",
    problemTr: "Dosyalar mesajlarda, kişisel drive alanlarında ve e-postalarda dağılınca kontrol kaybolur.",
    solution: "The system brings folders, permissions, preview accounts and activity tracking into one web panel.",
    solutionTr: "Sistem klasörleri, yetkileri, inceleme hesaplarını ve işlem takibini tek web panelinde toplar.",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Redis", "MinIO", "Docker Compose"],
    features: ["Folder management", "User permissions", "File preview", "Activity history", "Admin control"],
    featuresTr: ["Klasör yönetimi", "Kullanıcı yetkileri", "Dosya inceleme", "İşlem geçmişi", "Admin kontrolü"],
    demoIncludes: ["Seeded preview accounts", "Sample folders and files", "Read-only browser flow"],
    demoIncludesTr: ["Hazır inceleme hesapları", "Örnek klasör ve dosyalar", "Salt okunur tarayıcı akışı"],
    screenshots: [
      { src: "/projects/cloud-storage/screenshots/my-drive.png", alt: "User cloud drive with sample files", altTr: "Örnek dosyaların bulunduğu kullanıcı dosya ekranı" },
      { src: "/projects/cloud-storage/screenshots/control-center.png", alt: "Admin control center", altTr: "Admin kontrol ekranı" }
    ],
    demoUrl: "/cloud-storage-platform",
    githubUrl: "https://github.com/Tanerrrdogann/cloud-storage-platform",
    demoAccounts: [
      { role: "Kullanıcı", email: "demo.user", password: "Demo12345!" },
      { role: "Moderatör", email: "demo.moderator", password: "Demo12345!" },
      { role: "Yönetici", email: "demo.admin", password: "Demo12345!" }
    ],
    database: "PostgreSQL, Redis, MinIO",
    deployment: "Docker Compose + VPS",
    image: "/projects/cloud-storage/cover.png",
    featured: true
  },
  {
    slug: "task-management-system",
    title: "Task Management System",
    titleTr: "Görev Yönetimi Sistemi Örneği",
    category: "Work Tracking",
    categoryTr: "İş Takip Sistemi",
    status: "live",
    isDemoEnabled: true,
    shortDescription: "Task tracking system with creation, status follow-up, email reminders, reporting and PDF export.",
    shortDescriptionTr: "Görev oluşturma, durum takibi, e-posta hatırlatma, raporlama ve PDF çıktısı içeren iş takip örneği.",
    description: "A simple business task system for teams that need follow-up, reminders and reports in one place.",
    descriptionTr: "Takip, hatırlatma ve raporlamayı tek yerde isteyen ekipler için sade iş takip sistemi.",
    problem: "Teams need a clearer way to follow responsibilities, deadlines and recurring work.",
    problemTr: "Ekipler sorumlulukları, teslim tarihlerini ve tekrar eden işleri daha net takip etmek ister.",
    solution: "The system supports task creation, tracking, reminders, reports and PDF output.",
    solutionTr: "Sistem görev oluşturma, takip, hatırlatma, rapor ve PDF çıktısı akışlarını destekler.",
    techStack: ["Spring Boot", "Thymeleaf", "H2", "PDF Export", "Email"],
    features: ["Task creation", "Status tracking", "Email reminders", "Reports", "PDF export"],
    featuresTr: ["Görev oluşturma", "Durum takibi", "E-posta hatırlatma", "Raporlama", "PDF çıktısı"],
    screenshots: [
      { src: "/projects/task-management/screenshots/task-list.png", alt: "Task list with seeded data", altTr: "Örnek görev listesi" },
      { src: "/projects/task-management/screenshots/task-form.png", alt: "New task form", altTr: "Yeni görev formu" }
    ],
    demoUrl: "/task-management-system",
    githubUrl: "https://github.com/Tanerrrdogann/task-management-system",
    demoAccounts: [{ role: "Kullanıcı", email: "demo@ntweb.local", password: "Gerekmez" }],
    database: "H2 / PostgreSQL option",
    deployment: "Preview packaging / VPS",
    image: "/projects/task-management/cover.png",
    featured: true
  },
  {
    slug: "ai-log-analysis-panel",
    title: "AI / Log Analysis Panel",
    titleTr: "AI / Log Analiz Paneli Örneği",
    category: "Analysis Dashboard",
    categoryTr: "Analiz ve Raporlama",
    status: "live",
    isDemoEnabled: true,
    shortDescription: "Analysis and reporting panel for tracking error records, logs and system events.",
    shortDescriptionTr: "Hata kayıtları, loglar ve sistem olaylarını takip etmek için hazırlanmış analiz ve raporlama paneli örneği.",
    description: "A dashboard that helps technical teams review events, incidents and log-heavy workflows more clearly.",
    descriptionTr: "Teknik ekiplerin olayları, hataları ve log yoğun süreçleri daha anlaşılır takip etmesini sağlayan panel.",
    problem: "System events and logs are difficult to understand when they only exist as raw records.",
    problemTr: "Sistem olayları ve loglar sadece ham kayıt olarak kaldığında anlaşılması zorlaşır.",
    solution: "The panel organizes events into dashboards, tables, incident views and reporting areas.",
    solutionTr: "Panel olayları dashboard, tablo, incident görünümü ve raporlama alanlarında düzenler.",
    techStack: ["Spring Boot", "FastAPI", "React", "PostgreSQL", "AI Workflow"],
    features: ["Event list", "Incident tracking", "Dashboard metrics", "AI-assisted notes", "Reports"],
    featuresTr: ["Olay listesi", "Incident takibi", "Dashboard metrikleri", "AI destekli notlar", "Raporlar"],
    screenshots: [
      { src: "/projects/ai-log-analysis/screenshots/overview-admin.png", alt: "Analysis overview dashboard", altTr: "Analiz dashboard ekranı" },
      { src: "/projects/ai-log-analysis/screenshots/incidents-admin.png", alt: "Incident table", altTr: "Incident takip tablosu" }
    ],
    demoUrl: "/ai-log-analysis-panel",
    githubUrl: "https://github.com/Tanerrrdogann/conversational-ai-security-investigation-platform",
    demoAccounts: [
      { role: "Analist", email: "analyst", password: "analyst123" },
      { role: "Yönetici", email: "admin", password: "admin123" }
    ],
    database: "PostgreSQL",
    deployment: "Docker Compose + VPS",
    image: "/projects/ai-log-analysis/cover.png",
    featured: true
  },
  {
    slug: "video-analysis-platform",
    title: "Video Analysis Platform",
    titleTr: "Video Analiz Platformu Örneği",
    category: "Media Dashboard",
    categoryTr: "Medya Analiz Sistemi",
    status: "live",
    isDemoEnabled: true,
    shortDescription: "Media analysis system with video upload, analysis results, reporting and dashboard flow.",
    shortDescriptionTr: "Video yükleme, analiz sonucu görüntüleme, raporlama ve dashboard mantığı olan medya analiz örneği.",
    description: "A video review system for teams that need to upload media, see results and inspect dashboard reports.",
    descriptionTr: "Video yükleyip sonuçları ve raporları panel üzerinden incelemek isteyen ekipler için medya analiz sistemi.",
    problem: "Video files require organized processing and a clear place to inspect the results.",
    problemTr: "Video dosyaları düzenli işleme ve sonuçları incelemek için anlaşılır bir panel gerektirir.",
    solution: "The platform processes sample videos and presents timeline, detection and reporting views.",
    solutionTr: "Platform örnek videoları işler; zaman çizelgesi, tespit ve raporlama görünümleri sunar.",
    techStack: ["FastAPI", "React", "PostgreSQL", "Redis", "OpenCV", "Docker Compose"],
    features: ["Video upload", "Analysis results", "Dashboard", "Timeline view", "Reports"],
    featuresTr: ["Video yükleme", "Analiz sonucu", "Dashboard", "Zaman çizelgesi", "Raporlar"],
    screenshots: [
      { src: "/projects/video-analysis/screenshots/hero-overview.png", alt: "Video analysis dashboard", altTr: "Video analiz dashboard ekranı" },
      { src: "/projects/video-analysis/screenshots/video-detail.png", alt: "Video result detail", altTr: "Video sonuç detay ekranı" }
    ],
    demoUrl: "/video-analysis-platform",
    githubUrl: "https://github.com/Tanerrrdogann/video-analytics-platform",
    demoAccounts: [{ role: "Kullanıcı", email: "Giriş gerekmez", password: "Yükleme akışını kullanın" }],
    database: "PostgreSQL, Redis",
    deployment: "Docker Compose + VPS",
    image: "/projects/video-analysis/cover.png",
    featured: true
  },
  plannedDemoProject({
    slug: "teknik-seo-audit-dashboard-demo",
    titleTr: "Teknik SEO Audit Dashboard Demo Planı",
    categoryTr: "Teknik SEO Paneli",
    shortDescriptionTr: "Search Console, indeksleme, 404/5xx, canonical ve noindex kontrollerini tek ekranda gösterecek teknik SEO dashboard planı.",
    problemTr: "Teknik SEO hataları ayrı ayrı araçlarda kaldığında işletme hangi hatanın önce çözülmesi gerektiğini net göremez.",
    solutionTr: "Planlanan demo; kritik hata skoru, görev listesi, URL kırılımı ve rapor çıktısı mantığını tek panelde gösterecek.",
    featuresTr: ["Search Console özetleri", "404 ve 5xx kırılımı", "Canonical/noindex kontrolü", "Öncelik skoru", "Rapor akışı"],
    techStack: ["Next.js", "Search Console API", "PostgreSQL", "Chart UI", "PDF Export"],
  }),
  plannedDemoProject({
    slug: "seo-migration-recovery-dashboard-demo",
    titleTr: "SEO Migration Recovery Paneli Demo Planı",
    categoryTr: "SEO Migration",
    shortDescriptionTr: "Site taşıma sonrası URL eşleme, 301 yönlendirme, trafik kaybı ve backlink risklerini gösterecek recovery paneli planı.",
    problemTr: "Site yenileme veya alan adı geçişinde eski URL değeri korunmazsa organik trafik ve backlink gücü hızla kaybolur.",
    solutionTr: "Planlanan demo; eski-yeni URL mapping, redirect durumu, trafik değeri ve aksiyon önceliğini izlenebilir hale getirecek.",
    featuresTr: ["301 mapping tablosu", "Eski trafik değeri", "Backlink işareti", "Doğruluk skoru", "CSV export"],
    techStack: ["Next.js", "CSV Import", "PostgreSQL", "Redirect Rules", "Analytics Data"],
  }),
  plannedDemoProject({
    slug: "crm-lead-teklif-takip-demo",
    titleTr: "CRM, Lead ve Teklif Takip Sistemi Demo Planı",
    categoryTr: "CRM ve Satış Paneli",
    shortDescriptionTr: "Lead yakalama, müşteri kartı, teklif aşamaları ve satış takibi için hazırlanacak CRM demo kapsamı.",
    problemTr: "Teklifler, görüşmeler ve müşteri notları farklı kanallara dağıldığında satış takibi zayıflar.",
    solutionTr: "Planlanan demo; lead kaydı, teklif durumu, hatırlatma ve dönüşüm raporlarını tek panelde birleştirecek.",
    featuresTr: ["Lead havuzu", "Müşteri kartı", "Teklif aşamaları", "Hatırlatma", "Dönüşüm raporu"],
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Email", "Dashboard"],
  }),
  plannedDemoProject({
    slug: "stok-siparis-sevkiyat-paneli-demo",
    titleTr: "Stok, Sipariş ve Sevkiyat Paneli Demo Planı",
    categoryTr: "Operasyon Paneli",
    shortDescriptionTr: "Stok hareketi, sipariş durumu, sevkiyat hazırlığı ve raporlama akışını gösterecek operasyon paneli planı.",
    problemTr: "Stok, sipariş ve sevkiyat ayrı tablolarda yürüdüğünde hata, gecikme ve eksik takip oluşur.",
    solutionTr: "Planlanan demo; ürün stoğu, sipariş akışı, sevkiyat durumu ve düşük stok uyarılarını tek sistemde gösterecek.",
    featuresTr: ["Stok kartları", "Sipariş durumu", "Sevkiyat listesi", "Düşük stok uyarısı", "Operasyon raporu"],
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Role Based UI", "Excel Export"],
  }),
  plannedDemoProject({
    slug: "b2b-uretici-web-sitesi-demo",
    titleTr: "B2B Üretici Web Sitesi Demo Planı",
    categoryTr: "B2B Web Sitesi",
    shortDescriptionTr: "Üretici firmalar için kurumsal vitrin, ürün grupları, bayi talebi ve teklif akışını gösterecek demo planı.",
    problemTr: "Üretici firmalar ürün gücünü ve bayi/teklif akışını tek kurumsal yapıda anlatamadığında güven kaybeder.",
    solutionTr: "Planlanan demo; ürün kategorileri, sektör kullanımları, teknik doküman ve bayi başvuru akışını bir araya getirecek.",
    featuresTr: ["Kurumsal vitrin", "Ürün grupları", "Teknik doküman", "Bayi başvurusu", "Teklif yönlendirme"],
    techStack: ["Next.js", "CMS Data", "SEO Schema", "Form Workflow", "Analytics"],
  }),
  plannedDemoProject({
    slug: "b2b-bayi-siparis-demo",
    titleTr: "B2B Bayi Sipariş Sistemi Demo Planı",
    categoryTr: "Bayi Sipariş Paneli",
    shortDescriptionTr: "Bayiye özel fiyat, ürün listesi, sipariş oluşturma ve onay akışını gösterecek B2B panel planı.",
    problemTr: "Bayi siparişleri WhatsApp ve Excel üzerinden ilerlediğinde fiyat, stok ve onay süreci karışır.",
    solutionTr: "Planlanan demo; bayi girişi, özel fiyat listesi, sepet, sipariş onayı ve durum takibini gösterecek.",
    featuresTr: ["Bayi girişi", "Özel fiyat listesi", "Sipariş sepeti", "Onay akışı", "Durum takibi"],
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Auth", "Order Workflow"],
  }),
  plannedDemoProject({
    slug: "pazaryeri-entegrasyon-dashboard-demo",
    titleTr: "Pazaryeri Entegrasyon Dashboard Demo Planı",
    categoryTr: "Pazaryeri Entegrasyonu",
    shortDescriptionTr: "XML/API ürün aktarımı, stok-fiyat senkronu, hata kayıtları ve cron durumunu gösterecek entegrasyon paneli planı.",
    problemTr: "Pazaryeri entegrasyonlarında başarısız kayıtlar, stok farkları ve batch sonuçları görünmez kalırsa operasyon aksar.",
    solutionTr: "Planlanan demo; kanal bazlı senkron durumu, hata kuyruğu, retry akışı ve log takibini tek dashboardda gösterecek.",
    featuresTr: ["Kanal bazlı senkron", "Stok/fiyat durumu", "Hata kuyruğu", "Retry mantığı", "Cron logları"],
    techStack: ["Next.js", "Python", "Marketplace API", "Cron", "PostgreSQL"],
  }),
  plannedDemoProject({
    slug: "rent-a-car-rezervasyon-demo",
    titleTr: "Rent a Car Rezervasyon Sistemi Demo Planı",
    categoryTr: "Sektörel Rezervasyon",
    shortDescriptionTr: "Araç uygunluğu, rezervasyon, teslim-alım takibi ve ödeme durumunu gösterecek rent a car demo planı.",
    problemTr: "Araç müsaitliği ve rezervasyonlar manuel takip edildiğinde çakışma, gecikme ve ödeme belirsizliği oluşur.",
    solutionTr: "Planlanan demo; araç takvimi, rezervasyon akışı, müşteri bilgisi ve teslim durumu ekranlarını gösterecek.",
    featuresTr: ["Araç takvimi", "Rezervasyon formu", "Teslim/alım durumu", "Ödeme takibi", "Müşteri kartı"],
    techStack: ["Next.js", "PostgreSQL", "Calendar UI", "Payment Status", "Admin Panel"],
  }),
  plannedDemoProject({
    slug: "emlak-ilan-musteri-takip-demo",
    titleTr: "Emlak İlan ve Müşteri Takip Sistemi Demo Planı",
    categoryTr: "Emlak CRM",
    shortDescriptionTr: "İlan yönetimi, portföy kartı, müşteri talebi ve eşleştirme akışını gösterecek emlak demo planı.",
    problemTr: "Portföyler ve alıcı talepleri ayrı yerde tutulduğunda doğru müşteriye doğru ilan zamanında gösterilemez.",
    solutionTr: "Planlanan demo; ilan kartları, talep formları, müşteri eşleştirme ve görüşme notlarını tek sistemde gösterecek.",
    featuresTr: ["İlan yönetimi", "Portföy kartı", "Müşteri talebi", "Eşleştirme", "Görüşme notu"],
    techStack: ["Next.js", "PostgreSQL", "Map UI", "CRM Workflow", "Media Upload"],
  }),
  plannedDemoProject({
    slug: "kuyumcu-katalog-fiyat-takip-demo",
    titleTr: "Kuyumcu Katalog ve Fiyat Takip Sistemi Demo Planı",
    categoryTr: "Katalog ve Fiyat Paneli",
    shortDescriptionTr: "Ürün katalogu, gram/fiyat güncelleme, vitrin ve müşteri talep akışını gösterecek kuyumcu demo planı.",
    problemTr: "Kuyumcularda fiyat ve ürün bilgisi hızlı değiştiği için katalog güncelliği satış güvenini doğrudan etkiler.",
    solutionTr: "Planlanan demo; ürün koleksiyonu, fiyat güncelleme mantığı, vitrin görünümü ve talep formunu gösterecek.",
    featuresTr: ["Ürün katalogu", "Fiyat güncelleme", "Vitrin görünümü", "Talep formu", "Admin yönetimi"],
    techStack: ["Next.js", "Admin Panel", "Price Rules", "PostgreSQL", "SEO"],
  }),
  plannedDemoProject({
    slug: "turizm-operasyon-paneli-demo",
    titleTr: "Turizm Operasyon Paneli Demo Planı",
    categoryTr: "Turizm Operasyon Paneli",
    shortDescriptionTr: "Tur paketleri, kontenjan, otel/transfer bilgisi ve operasyon takibini gösterecek turizm demo planı.",
    problemTr: "Turizm operasyonlarında paket, kontenjan, yolcu ve tedarikçi bilgileri dağınık kaldığında süreç zor yönetilir.",
    solutionTr: "Planlanan demo; paket yönetimi, kontenjan takibi, otel/transfer alanları ve operasyon durumlarını gösterecek.",
    featuresTr: ["Tur paketi", "Kontenjan takibi", "Otel/transfer bilgisi", "Yolcu listesi", "Operasyon durumu"],
    techStack: ["Power Apps", "SharePoint", "Power Automate", "Dashboard", "Role Based Access"],
  }),
  plannedDemoProject({
    slug: "ai-whatsapp-musteri-asistani-demo",
    titleTr: "AI WhatsApp Müşteri Asistanı Demo Planı",
    categoryTr: "AI Otomasyon",
    shortDescriptionTr: "WhatsApp üzerinden gelen soruları sınıflandıran, yanıt taslağı üreten ve lead oluşturan AI asistan demo planı.",
    problemTr: "WhatsApp talepleri yoğunlaştığında hızlı cevap, doğru sınıflandırma ve lead takibi aksar.",
    solutionTr: "Planlanan demo; gelen mesajı niyete göre ayıran, cevap öneren ve CRM lead kaydı oluşturan akışı gösterecek.",
    featuresTr: ["Mesaj sınıflandırma", "Yanıt taslağı", "Lead oluşturma", "Operatöre devretme", "Konuşma özeti"],
    techStack: ["Next.js", "WhatsApp API", "AI Workflow", "PostgreSQL", "CRM Integration"],
  }),
  plannedDemoProject({
    slug: "search-console-hata-analiz-paneli-demo",
    titleTr: "Search Console Hata Analiz Paneli Demo Planı",
    categoryTr: "Teknik SEO Paneli",
    shortDescriptionTr: "Search Console kapsam, indexing ve doğrulama sorunlarını müşteriye anlaşılır gösterecek hata analiz paneli planı.",
    problemTr: "Search Console uyarıları teknik dilde kaldığında işletme sorunun etkisini ve çözüm sırasını net okuyamaz.",
    solutionTr: "Planlanan demo; sorun tipi, etki, çözüm adımı ve doğrulama durumunu sade bir panelde gösterecek.",
    featuresTr: ["Sorun tipi listesi", "Etki açıklaması", "URL inspection özeti", "Doğrulama durumu", "Aksiyon listesi"],
    techStack: ["Next.js", "Search Console API", "PostgreSQL", "Task Workflow", "SEO Schema"],
  }),
  plannedDemoProject({
    slug: "ihracatci-firma-web-sitesi-demo",
    titleTr: "İhracatçı Firma Web Sitesi Demo Planı",
    categoryTr: "Kurumsal Web Sitesi",
    shortDescriptionTr: "Çok dilli içerik, ürün grupları, ihracat pazarları ve teklif formu odağında hazırlanacak web sitesi demo planı.",
    problemTr: "İhracatçı firmalar yabancı ziyaretçiye ürün, kapasite ve güven sinyalini net veremezse teklif şansı düşer.",
    solutionTr: "Planlanan demo; çok dilli yapı, pazar sayfaları, ürün katalogu ve uluslararası teklif akışını gösterecek.",
    featuresTr: ["Çok dilli sayfalar", "Ürün katalogu", "Pazar odaklı içerik", "Teklif formu", "SEO altyapısı"],
    techStack: ["Next.js", "i18n", "CMS Data", "SEO Schema", "Form Workflow"],
  }),
  plannedDemoProject({
    slug: "teklif-takip-sistemi-demo",
    titleTr: "Teklif Takip Sistemi Demo Planı",
    categoryTr: "Satış Paneli",
    shortDescriptionTr: "Teklif oluşturma, revizyon, onay, takip ve kapanış durumlarını gösterecek satış paneli planı.",
    problemTr: "Teklifler e-posta ve dosyalarda dağıldığında hangi teklifin hangi aşamada olduğu takip edilemez.",
    solutionTr: "Planlanan demo; teklif kartı, durum akışı, revizyon notu ve kapanış raporunu tek yerde gösterecek.",
    featuresTr: ["Teklif kartı", "Durum akışı", "Revizyon takibi", "Hatırlatma", "Satış raporu"],
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "PDF Export", "Email"],
  }),
  plannedDemoProject({
    slug: "teknik-servis-is-takip-paneli-demo",
    titleTr: "Teknik Servis İş Takip Paneli Demo Planı",
    categoryTr: "Sektörel İş Takip",
    shortDescriptionTr: "Servis kaydı, cihaz durumu, teknisyen atama ve teslim sürecini gösterecek teknik servis demo planı.",
    problemTr: "Servis kayıtları manuel tutulduğunda cihaz durumu, sorumlu kişi ve teslim tarihi karışır.",
    solutionTr: "Planlanan demo; servis fişi, durum takibi, teknisyen atama ve müşteri bilgilendirme akışını gösterecek.",
    featuresTr: ["Servis kaydı", "Durum takibi", "Teknisyen atama", "Teslim planı", "Müşteri bildirimi"],
    techStack: ["Next.js", "PostgreSQL", "Role Based UI", "Notification", "Dashboard"],
  }),
  plannedDemoProject({
    slug: "klinik-randevu-sistemi-demo",
    titleTr: "Klinik Randevu Sistemi Demo Planı",
    categoryTr: "Sağlık Randevu",
    shortDescriptionTr: "Doktor, hizmet, randevu takvimi ve hasta talebi akışını gösterecek klinik demo planı.",
    problemTr: "Klinik randevuları telefonda ve mesajda dağıldığında takvim çakışması ve takip eksikliği oluşur.",
    solutionTr: "Planlanan demo; hizmet seçimi, uzman takvimi, randevu durumu ve hatırlatma akışını gösterecek.",
    featuresTr: ["Hizmet seçimi", "Uzman takvimi", "Randevu formu", "Hatırlatma", "Hasta talebi"],
    techStack: ["Next.js", "Calendar UI", "PostgreSQL", "SMS/Email", "Admin Panel"],
  }),
  plannedDemoProject({
    slug: "guzellik-merkezi-randevu-sistemi-demo",
    titleTr: "Güzellik Merkezi Randevu Sistemi Demo Planı",
    categoryTr: "Randevu Sistemi",
    shortDescriptionTr: "Paket, uzman, işlem süresi ve müşteri randevu takibini gösterecek güzellik merkezi demo planı.",
    problemTr: "İşlem süreleri ve uzman takvimi net görünmediğinde randevu çakışması ve boş zaman kaybı oluşur.",
    solutionTr: "Planlanan demo; paket seçimi, uzman uygunluğu, randevu ve müşteri geçmişini gösterecek.",
    featuresTr: ["Paket seçimi", "Uzman takvimi", "Müşteri geçmişi", "Hatırlatma", "Randevu durumu"],
    techStack: ["Next.js", "Calendar UI", "PostgreSQL", "Notification", "Admin Panel"],
  }),
  plannedDemoProject({
    slug: "restoran-qr-menu-whatsapp-demo",
    titleTr: "Restoran QR Menü ve WhatsApp Sipariş Demo Planı",
    categoryTr: "QR Menü ve Sipariş",
    shortDescriptionTr: "QR menü, kategori, ürün detay ve WhatsApp sipariş akışını gösterecek restoran demo planı.",
    problemTr: "Menü güncellemesi ve hızlı sipariş akışı manuel yürüdüğünde hem işletme hem müşteri için sürtünme oluşur.",
    solutionTr: "Planlanan demo; dijital menü, ürün varyantı, sepet ve WhatsApp sipariş mesajını gösterecek.",
    featuresTr: ["QR menü", "Kategori yapısı", "Ürün detay", "WhatsApp sepeti", "Admin güncelleme"],
    techStack: ["Next.js", "Catalog Data", "WhatsApp Link", "Admin Panel", "SEO"],
  }),
  plannedDemoProject({
    slug: "butik-urun-katalog-sistemi-demo",
    titleTr: "Butik Ürün Katalog Sistemi Demo Planı",
    categoryTr: "Katalog Sistemi",
    shortDescriptionTr: "Ürün katalogu, beden/renk varyantı, stok sinyali ve WhatsApp talep akışını gösterecek butik demo planı.",
    problemTr: "Butik ürünleri sosyal medyada dağıldığında müşterinin doğru ürün ve varyanta ulaşması zorlaşır.",
    solutionTr: "Planlanan demo; katalog, filtre, varyant seçimi ve WhatsApp talep mesajını düzenli hale getirecek.",
    featuresTr: ["Ürün katalogu", "Beden/renk varyantı", "Filtre", "WhatsApp talep", "Admin yönetimi"],
    techStack: ["Next.js", "Catalog UI", "PostgreSQL", "WhatsApp Link", "Admin Panel"],
  }),
  plannedDemoProject({
    slug: "toptanci-b2b-siparis-sistemi-demo",
    titleTr: "Toptancı B2B Sipariş Sistemi Demo Planı",
    categoryTr: "B2B Sipariş",
    shortDescriptionTr: "Toptancı ürün listesi, bayi fiyatı, koli/adet siparişi ve onay akışını gösterecek demo planı.",
    problemTr: "Toptancı siparişleri Excel ve mesajla alındığında fiyat, minimum adet ve stok kontrolü zorlaşır.",
    solutionTr: "Planlanan demo; bayi girişi, ürün listesi, sipariş limiti ve onay sürecini gösterecek.",
    featuresTr: ["Bayi fiyatı", "Koli/adet seçimi", "Minimum sipariş", "Onay akışı", "Sipariş raporu"],
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Auth", "Order Workflow"],
  }),
  plannedDemoProject({
    slug: "depo-sevkiyat-takip-paneli-demo",
    titleTr: "Depo ve Sevkiyat Takip Paneli Demo Planı",
    categoryTr: "Depo Operasyonu",
    shortDescriptionTr: "Depo girişi, raf/konum, sevkiyat listesi ve teslim durumunu gösterecek operasyon demo planı.",
    problemTr: "Depo hareketleri görünür olmadığında sevkiyat gecikmesi, eksik ürün ve stok farkı oluşur.",
    solutionTr: "Planlanan demo; raf konumu, toplama listesi, sevkiyat durumu ve teslim kayıtlarını gösterecek.",
    featuresTr: ["Raf/konum", "Toplama listesi", "Sevkiyat durumu", "Teslim kaydı", "Stok raporu"],
    techStack: ["Next.js", "PostgreSQL", "Barcode Flow", "Dashboard", "Excel Export"],
  }),
  plannedDemoProject({
    slug: "saas-mvp-demo-platformu",
    titleTr: "SaaS MVP Demo Platformu Planı",
    categoryTr: "SaaS MVP",
    shortDescriptionTr: "Abonelik, kullanıcı hesabı, rol, dashboard ve temel yönetim akışını gösterecek SaaS MVP demo planı.",
    problemTr: "SaaS fikri olan ekipler ilk ürün kapsamını netleştirmeden geliştirmeye başladığında zaman kaybeder.",
    solutionTr: "Planlanan demo; MVP kapsamı, kullanıcı akışı, rol yapısı ve abonelik mantığını örnekleyecek.",
    featuresTr: ["Kullanıcı hesabı", "Rol yapısı", "Dashboard", "Abonelik mantığı", "Admin yönetimi"],
    techStack: ["Next.js", "Auth", "PostgreSQL", "Stripe Mock", "Dashboard"],
  }),
  plannedDemoProject({
    slug: "musteri-paneli-portal-demo",
    titleTr: "Müşteri Paneli / Portal Sistemi Demo Planı",
    categoryTr: "Portal Geliştirme",
    shortDescriptionTr: "Müşteri girişi, dosya, talep, bildirim ve durum takibini gösterecek portal demo planı.",
    problemTr: "Müşteri talepleri ve dosyalar e-posta zincirlerinde kaldığında süreç takibi zorlaşır.",
    solutionTr: "Planlanan demo; müşteri girişini, talep durumunu, dosya paylaşımını ve bildirimleri tek yerde gösterecek.",
    featuresTr: ["Müşteri girişi", "Talep takibi", "Dosya alanı", "Bildirim", "Durum raporu"],
    techStack: ["Next.js", "Auth", "PostgreSQL", "File Storage", "Notification"],
  }),
  plannedDemoProject({
    slug: "bayi-paneli-demo",
    titleTr: "Bayi Paneli Demo Planı",
    categoryTr: "Bayi Paneli",
    shortDescriptionTr: "Bayiye özel fiyat, sipariş geçmişi, kampanya ve cari durum ekranlarını gösterecek bayi paneli planı.",
    problemTr: "Bayi bilgileri ve sipariş geçmişi dağınık olduğunda satış ekibi sürekli manuel destek vermek zorunda kalır.",
    solutionTr: "Planlanan demo; bayi özel ekranları, fiyat listesi, sipariş geçmişi ve kampanya alanını gösterecek.",
    featuresTr: ["Bayi hesabı", "Özel fiyat", "Sipariş geçmişi", "Kampanya", "Cari özet"],
    techStack: ["Next.js", "Auth", "PostgreSQL", "Order Workflow", "Dashboard"],
  }),
  plannedDemoProject({
    slug: "raporlama-dashboard-sistemi-demo",
    titleTr: "Raporlama Dashboard Sistemi Demo Planı",
    categoryTr: "Raporlama Dashboard",
    shortDescriptionTr: "Satış, stok, lead, teklif ve operasyon metriklerini tek ekranda gösterecek dashboard demo planı.",
    problemTr: "Yönetim metrikleri farklı sistemlerde kalınca karar almak için net ve güncel tablo oluşmaz.",
    solutionTr: "Planlanan demo; KPI kartları, grafikler, filtreler ve dışa aktarma mantığını gösterecek.",
    featuresTr: ["KPI kartları", "Grafikler", "Filtre", "PDF/Excel export", "Rol bazlı görünüm"],
    techStack: ["Next.js", "Chart UI", "PostgreSQL", "Export", "Role Based UI"],
  }),
  plannedDemoProject({
    slug: "lead-siniflandirma-paneli-demo",
    titleTr: "Lead Toplama ve Sınıflandırma Paneli Demo Planı",
    categoryTr: "Lead Otomasyonu",
    shortDescriptionTr: "Form, WhatsApp ve reklam kaynaklı leadleri kalite ve niyete göre sınıflandıracak panel planı.",
    problemTr: "Lead kaynakları birleşmediğinde satış ekibi kaliteli fırsatı düşük niyetli talepten ayırmakta zorlanır.",
    solutionTr: "Planlanan demo; lead kaynağı, skor, etiket, görev ve takip durumunu tek panelde gösterecek.",
    featuresTr: ["Lead kaynağı", "Skor", "Etiketleme", "Görev atama", "Takip durumu"],
    techStack: ["Next.js", "AI Workflow", "PostgreSQL", "CRM Integration", "Dashboard"],
  }),
  plannedDemoProject({
    slug: "power-apps-sharepoint-operasyon-demo",
    titleTr: "Power Apps / SharePoint Operasyon Demo Planı",
    categoryTr: "Power Platform",
    shortDescriptionTr: "SharePoint listeleri, Power Apps formları ve Power Automate akışlarını gösterecek operasyon demo planı.",
    problemTr: "Microsoft 365 kullanan ekipler süreçlerini hâlâ Excel ile yürüttüğünde onay ve takip görünürlüğü düşer.",
    solutionTr: "Planlanan demo; liste, form, onay akışı ve yönetici görünümünü Power Platform mantığıyla gösterecek.",
    featuresTr: ["SharePoint liste", "Power Apps form", "Onay akışı", "Bildirim", "Yönetici görünümü"],
    techStack: ["Power Apps", "SharePoint", "Power Automate", "Power BI", "Microsoft 365"],
  }),
  plannedDemoProject({
    slug: "saglik-turizmi-operasyon-paneli-demo",
    titleTr: "Sağlık Turizmi Operasyon Paneli Demo Planı",
    categoryTr: "Sağlık Turizmi",
    shortDescriptionTr: "Hasta talebi, paket, transfer, konaklama ve operasyon durumunu gösterecek sağlık turizmi paneli planı.",
    problemTr: "Sağlık turizmi operasyonunda hasta, paket, transfer ve konaklama bilgisi dağınık kalırsa takip zorlaşır.",
    solutionTr: "Planlanan demo; hasta kartı, paket süreci, transfer planı ve operasyon durumunu bir araya getirecek.",
    featuresTr: ["Hasta kartı", "Paket süreci", "Transfer planı", "Konaklama", "Operasyon durumu"],
    techStack: ["Next.js", "PostgreSQL", "CRM Workflow", "Calendar UI", "Dashboard"],
  }),
  plannedDemoProject({
    slug: "uretim-siparis-takip-paneli-demo",
    titleTr: "Üretim ve Sipariş Takip Paneli Demo Planı",
    categoryTr: "Üretim Operasyonu",
    shortDescriptionTr: "Siparişten üretime, iş emrine ve teslimata kadar akışı gösterecek üretim takip paneli planı.",
    problemTr: "Üretim siparişleri net takip edilmediğinde termin, stok ve iş emri süreçleri birbirinden kopar.",
    solutionTr: "Planlanan demo; sipariş, iş emri, üretim durumu ve teslimat planını tek panelde gösterecek.",
    featuresTr: ["Sipariş takibi", "İş emri", "Üretim durumu", "Termin", "Teslimat planı"],
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Workflow", "Dashboard"],
  }),
  plannedDemoProject({
    slug: "ajans-musteri-paneli-demo",
    titleTr: "Ajans Müşteri Paneli Demo Planı",
    categoryTr: "Müşteri Paneli",
    shortDescriptionTr: "Ajans müşterileri için proje durumu, dosya, görev, onay ve rapor akışını gösterecek panel planı.",
    problemTr: "Ajans-müşteri iletişimi mesajlarda kaldığında revizyon, dosya ve onay takibi dağılır.",
    solutionTr: "Planlanan demo; proje durumu, görev, dosya paylaşımı, onay ve rapor alanlarını gösterecek.",
    featuresTr: ["Proje durumu", "Görev takibi", "Dosya paylaşımı", "Onay akışı", "Rapor alanı"],
    techStack: ["Next.js", "Auth", "PostgreSQL", "File Storage", "Dashboard"],
  })
] satisfies RawProject[];

export const projectsData: ProjectType[] = ntWorksProjects.map((project) => ({
  ...project,
  title: project.titleTr,
  category: project.categoryTr,
  shortDesc: project.shortDescriptionTr,
  problem: project.problemTr,
  solution: project.solutionTr,
  features: project.featuresTr ?? [],
  techStack: project.techStack ?? [],
  database: project.database,
  deployment: project.deployment,
  projectKind: project.projectKind as ProjectType["projectKind"],
  clientDisplayName: project.clientDisplayName as string | undefined,
  result: project.result as string | undefined,
  testimonialSlug: project.testimonialSlug as string | undefined,
  metrics: project.metrics,
  screenshots: project.screenshots,
  caseStudies: project.caseStudies,
  deliveryScope: [
    project.descriptionTr,
    ...(project.demoIncludesTr ?? []),
    ...(project.demoLimitationsTr ?? []),
  ].filter((item): item is string => Boolean(item)),
}));
