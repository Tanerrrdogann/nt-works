import { ServiceType } from "@/types";

type RawService = {
  slug: string;
  titleTr: string;
  shortTr: string;
  descriptionTr: string;
  infrastructureTr?: string[];
  examplesTr?: string[];
  detailTr?: string[];
  [key: string]: unknown;
};

const ntWorksServices = [
  {
    slug: "tanitim-kurumsal-web-siteleri",
    title: "Promotional & Corporate Websites",
    titleTr: "Tanıtım ve Kurumsal Web Siteleri",
    shortTr: "Hizmetlerinizi, markanızı ve iletişim kanallarınızı profesyonel şekilde sunan web siteleri.",
    short: "Professional websites for presenting your brand, services and contact channels clearly.",
    description:
      "Professional websites for companies, personal brands, service providers and businesses that want to present themselves clearly online.",
    descriptionTr:
      "Firmanızı, hizmetlerinizi, hakkınızda bilgileri, görsellerinizi ve iletişim yönlendirmelerinizi profesyonel bir web sitesinde toplamak için hazırlanır.",
    examplesTr: [
      "Kurumsal tanıtım sitesi",
      "Landing page / tek sayfalık satış sayfası",
      "Kişisel marka / CV sitesi",
      "Hizmet veren işletme sitesi",
      "Avukat / hukuk bürosu sitesi",
      "Muhasebe / mali müşavir sitesi",
      "Spor hocası / personal trainer sitesi",
      "Organizasyon / düğün firması sitesi",
      "İnşaat projesi tanıtım sitesi"
    ],
    examples: [
      "Corporate website",
      "Landing page",
      "Personal brand / CV website",
      "Service business website",
      "Law office website",
      "Accounting / financial advisor website",
      "Personal trainer website",
      "Organization / wedding company website",
      "Construction project presentation website"
    ],
    infrastructureTr: [
      "Marketing site altyapısı",
      "Landing page",
      "İletişim formu",
      "WhatsApp yönlendirme",
      "Hizmet bölümleri",
      "SSS alanı",
      "Teklif alma formu"
    ],
    infrastructure: [
      "Marketing site template",
      "Landing page",
      "Contact form",
      "WhatsApp direction",
      "Service sections",
      "FAQ section",
      "Offer request form"
    ],
    detailTr: [
      "Tanıtım ve kurumsal web siteleri; işletmenizin kim olduğunu, ne sunduğunu ve müşterinin size nasıl ulaşacağını net şekilde anlatmak için hazırlanır.",
      "Bu yapı sadece güzel görünen bir sayfa değildir. Hizmetleriniz, fotoğraflarınız, sık sorulan sorular, referans alanları, iletişim butonları ve teklif alma yönlendirmeleri tek akışta toplanabilir.",
      "Canlı örnek üzerinden ilerlenebildiği için müşteri daha işe başlamadan nasıl bir yapı alacağını görebilir. Renkler, metinler, görseller ve bölümler işletmenize göre düzenlenebilir."
    ],
    detail: [
      "Promotional and corporate websites are built to explain who you are, what you offer and how customers can reach you clearly.",
      "This is not just a visually nice page. Services, images, FAQ, references, contact buttons and offer request flows can be gathered in one structure.",
      "Because the work can start from a live demo, the client can see the structure before the project begins. Colors, texts, visuals and sections can be adapted to the business."
    ]
  },
  {
    slug: "urun-katalog-whatsapp-siparis",
    title: "Product Catalog & WhatsApp Order Systems",
    titleTr: "Ürün Katalog ve WhatsApp Sipariş Sistemleri",
    shortTr: "Ürün, menü, araç veya ilanları düzenli gösterip müşteriyi WhatsApp’a yönlendiren sistemler.",
    short: "Catalog systems that display products, menus, vehicles or listings and direct visitors to WhatsApp.",
    description:
      "Catalog-style websites that organize products, menus, vehicles or listings and direct visitors to WhatsApp or contact channels.",
    descriptionTr:
      "Ürünlerinizi, menünüzü, araçlarınızı veya ilanlarınızı düzenli şekilde sergileyip müşteriyi WhatsApp ya da iletişim kanalına yönlendiren sistemlerdir.",
    examplesTr: [
      "Ürün katalog sitesi",
      "WhatsApp siparişli mağaza",
      "QR menü sitesi",
      "Online siparişsiz restoran sitesi",
      "Oto galeri araç listeleme sitesi",
      "Emlak ilan sitesi",
      "Rent a Car sitesi",
      "Butik / kozmetik / toptancı katalog sitesi"
    ],
    examples: [
      "Product catalog website",
      "WhatsApp order store",
      "QR menu website",
      "Restaurant website without online payment",
      "Car gallery listing website",
      "Real estate listing website",
      "Rent a car website",
      "Boutique / cosmetics / wholesale catalog"
    ],
    infrastructureTr: [
      "Catalog / Product altyapısı",
      "Kategori yapısı",
      "Ürün detay sayfası",
      "Filtreleme",
      "WhatsApp sipariş butonu",
      "Galeri",
      "Admin panel eklenebilir"
    ],
    infrastructure: [
      "Catalog / Product infrastructure",
      "Category structure",
      "Product detail page",
      "Filtering",
      "WhatsApp order button",
      "Gallery",
      "Admin panel can be added"
    ],
    detailTr: [
      "Katalog ve WhatsApp sipariş sistemleri, Instagram’da veya mesajlarda dağınık duran ürünleri tek düzenli sayfada toplamak için kullanılır.",
      "Müşteri ürünleri kategori kategori gezebilir, fiyat ve açıklamaları görebilir, ilgilendiği ürün için WhatsApp üzerinden kolayca iletişime geçebilir.",
      "Bu sistem restoran menüsü, butik ürünleri, araç listesi, emlak ilanları veya toptancı ürünleri gibi farklı alanlara uyarlanabilir. İstenirse admin panel eklenerek ürünler daha sonra yönetilebilir hale getirilebilir."
    ],
    detail: [
      "Catalog and WhatsApp order systems are used to gather scattered products from Instagram or messages into one organized page.",
      "Visitors can browse categories, see prices and details, and contact the business via WhatsApp for the product they are interested in.",
      "This system can be adapted to restaurant menus, boutique products, vehicle listings, real estate listings or wholesale catalogs. An admin panel can be added later if product management is needed."
    ]
  },
  {
    slug: "e-ticaret-satis-sistemleri",
    title: "E-Commerce & Online Sales Systems",
    titleTr: "E-Ticaret ve Satış Sistemleri",
    shortTr: "Ürün yönetimi, sepet, sipariş paneli ve ödeme akışı olan satış sistemleri.",
    short: "Sales systems with product management, cart, order panel and payment flow.",
    description:
      "Sales systems with product management, cart, checkout, order tracking, optional payment integration and admin panel.",
    descriptionTr:
      "Ürün yönetimi, sepet, ödeme akışı, sipariş kaydı ve admin panel üzerinden yönetim ihtiyacı olan işletmeler için hazırlanır.",
    examplesTr: [
      "Sepetli ama ödemesiz e-ticaret sitesi",
      "Online ödemeli e-ticaret MVP",
      "Dijital ürün satış sitesi",
      "Sipariş panelli satış sistemi",
      "Admin panelli mağaza",
      "Butik, takı, kozmetik veya tekstil satış sitesi"
    ],
    examples: [
      "E-commerce website without online payment",
      "Online payment e-commerce MVP",
      "Digital product sales website",
      "Order management system",
      "Admin-managed online store",
      "Boutique, jewelry, cosmetics or textile store"
    ],
    infrastructureTr: [
      "E-Commerce altyapısı",
      "Ürün yönetimi",
      "Sepet",
      "Checkout",
      "Ödeme entegrasyonu",
      "Sipariş paneli",
      "Stok takibi"
    ],
    infrastructure: [
      "E-Commerce infrastructure",
      "Product management",
      "Cart",
      "Checkout",
      "Payment integration",
      "Order panel",
      "Stock tracking"
    ],
    detailTr: [
      "E-ticaret ve satış sistemleri, ürünlerin sadece sergilenmesini değil; sipariş, sepet, ödeme ve yönetim tarafını da kapsayan daha gelişmiş yapılardır.",
      "İhtiyaca göre ödemesiz sipariş sistemi, online ödeme altyapılı MVP veya admin panelli tam mağaza yapısı hazırlanabilir.",
      "Ürün yönetimi, sipariş takibi, müşteri bilgileri, ödeme yönlendirmesi ve stok mantığı projeye göre şekillendirilebilir. Başlangıçta sade kurulan yapı daha sonra geliştirilebilir."
    ],
    detail: [
      "E-commerce and sales systems are more advanced structures that include not only product display, but also cart, order, payment and management flows.",
      "Depending on the need, a no-payment order system, online payment MVP or admin-managed online store can be built.",
      "Product management, order tracking, customer information, payment flow and stock logic can be shaped according to the project. A simple first version can be extended later."
    ]
  },
  {
    slug: "randevu-rezervasyon-sistemleri",
    title: "Appointment & Reservation Systems",
    titleTr: "Randevu ve Rezervasyon Sistemleri",
    shortTr: "Tarih, saat, hizmet ve müşteri taleplerini daha düzenli takip eden sistemler.",
    short: "Systems that organize date, time, service and customer booking requests.",
    description:
      "Systems for businesses that receive appointment, booking, date, time, service or reservation requests.",
    descriptionTr:
      "Telefon, DM ve WhatsApp üzerinden dağınık gelen randevu veya rezervasyon taleplerini daha düzenli takip edebilmek için hazırlanır.",
    examplesTr: [
      "Randevu alma sistemi",
      "Rezervasyon sistemi",
      "Halı saha / spor salonu rezervasyon paneli",
      "Otel / pansiyon rezervasyon sitesi",
      "Güzellik merkezi sitesi + randevu",
      "Diş kliniği / doktor sitesi + randevu",
      "Araç ekspertiz randevu sistemi",
      "Kurs kayıt / ders talep sistemi"
    ],
    examples: [
      "Appointment system",
      "Reservation system",
      "Football field / gym booking panel",
      "Hotel / pension reservation website",
      "Beauty center website with appointment",
      "Doctor / dentist website with appointment",
      "Vehicle inspection appointment system",
      "Course registration / lesson request system"
    ],
    infrastructureTr: [
      "Reservation altyapısı",
      "Tarih / saat seçimi",
      "Hizmet seçimi",
      "Müşteri formu",
      "Admin takip ekranı",
      "E-posta bildirimi",
      "WhatsApp yönlendirme"
    ],
    infrastructure: [
      "Reservation infrastructure",
      "Date / time selection",
      "Service selection",
      "Customer form",
      "Admin tracking",
      "Email notification",
      "WhatsApp direction"
    ],
    detailTr: [
      "Randevu ve rezervasyon sistemleri, WhatsApp, telefon veya DM üzerinden karışan saatleri daha düzenli hale getirmek için hazırlanır.",
      "Müşteri hizmet seçebilir, tarih ve saat talebi bırakabilir, işletme tarafında bu talepler admin panel veya bildirim mantığıyla takip edilebilir.",
      "Güzellik merkezi, doktor, diş kliniği, kurs, halı saha, spor salonu, araç ekspertiz veya otel/pansiyon gibi birçok senaryoya uyarlanabilir."
    ],
    detail: [
      "Appointment and reservation systems help organize date and time requests that usually come through WhatsApp, phone or DMs.",
      "Customers can choose a service and request a date/time, while the business can track these requests through an admin panel or notification flow.",
      "It can be adapted to beauty centers, doctors, dentists, courses, football fields, gyms, vehicle inspection services, hotels or pensions."
    ]
  },
  {
    slug: "admin-panel-isletme-yonetimi",
    title: "Admin Panel & Business Management Systems",
    titleTr: "Admin Panel ve İşletme Yönetim Sistemleri",
    shortTr: "Müşteri, stok, sipariş, görev, teklif ve süreçleri tek panelden yönetmeye yarayan sistemler.",
    short: "Dashboards for managing customers, stock, orders, tasks, offers and business processes.",
    description:
      "Custom dashboards for businesses that want to manage customers, stock, orders, tasks, offers or internal processes from one place.",
    descriptionTr:
      "Excel, WhatsApp, not defteri ve dağınık mesajlar arasında kalan işleri tek panelde toplamak için hazırlanır.",
    examplesTr: [
      "Küçük işletme CRM paneli",
      "Stok takip sistemi",
      "Servis / teknik destek takip sistemi",
      "İş takip / görev yönetim paneli",
      "Teklif / fatura öncesi yönetim sistemi",
      "Lojistik / nakliye teklif alma sitesi",
      "Sipariş takip paneli",
      "Personel / müşteri / görev yönetimi"
    ],
    examples: [
      "Small business CRM panel",
      "Stock tracking system",
      "Service / technical support tracking system",
      "Task management panel",
      "Offer / pre-invoice management system",
      "Logistics / shipping offer request system",
      "Order tracking panel",
      "Personnel / customer / task management"
    ],
    infrastructureTr: [
      "Admin Dashboard altyapısı",
      "Kullanıcı rolleri",
      "Müşteri kayıtları",
      "Stok yönetimi",
      "Görev takibi",
      "Raporlama",
      "Filtreleme",
      "İşlem geçmişi"
    ],
    infrastructure: [
      "Admin Dashboard infrastructure",
      "User roles",
      "Customer records",
      "Stock management",
      "Task tracking",
      "Reporting",
      "Filtering",
      "Activity history"
    ],
    detailTr: [
      "Admin panel ve işletme yönetim sistemleri, işletmenin arka tarafındaki işleri tek yerden takip etmek için hazırlanır.",
      "Müşteri kayıtları, ürün/stok bilgileri, siparişler, görevler, teklifler, servis talepleri veya raporlar tek panelde toplanabilir.",
      "Bu yapı standart web sitesinin ötesine geçer. İhtiyaca göre kullanıcı rolleri, filtreleme, kayıt geçmişi, raporlama ve özel iş akışları eklenebilir."
    ],
    detail: [
      "Admin panel and business management systems are built to manage the operational side of a business from one place.",
      "Customer records, product/stock information, orders, tasks, offers, service requests or reports can be gathered in one dashboard.",
      "This goes beyond a standard website. User roles, filters, activity history, reporting and custom workflows can be added according to the need."
    ]
  },
  {
    slug: "ozel-yazilim-premium-sistemler",
    title: "Custom Software & Premium Systems",
    titleTr: "Özel Yazılım ve Premium Sistemler",
    shortTr: "Standart web sitesinden daha fazlasını isteyen projeler için özel panel ve yazılım sistemleri.",
    short: "Custom panels and software systems for projects that need more than a standard website.",
    description:
      "Advanced full-stack systems for projects that need more than a standard website, including dashboards, file management, reporting or special workflows.",
    descriptionTr:
      "Standart web sitesinden daha fazlasına ihtiyaç duyan, özel panel, kullanıcı yönetimi, raporlama veya teknik iş akışı isteyen projeler için hazırlanır.",
    examplesTr: [
      "Cloud dosya yönetim platformu",
      "AI hata / log analiz paneli",
      "Video analiz platformu",
      "Virtual Computer / eğitim simülatörü",
      "Özel dashboard",
      "Özel raporlama sistemi",
      "Kuruma özel panel",
      "Sektöre özel yazılım"
    ],
    examples: [
      "Cloud file management platform",
      "AI error / log analysis panel",
      "Video analytics platform",
      "Virtual computer / education simulator",
      "Custom dashboard",
      "Custom reporting system",
      "Company-specific panel",
      "Industry-specific software"
    ],
    infrastructureTr: [
      "Spring Boot",
      "React / Next.js",
      "PostgreSQL",
      "Docker",
      "REST API",
      "Kullanıcı rolleri",
      "Dashboard",
      "Raporlama"
    ],
    infrastructure: [
      "Spring Boot",
      "React / Next.js",
      "PostgreSQL",
      "Docker",
      "REST API",
      "User roles",
      "Dashboard",
      "Reporting"
    ],
    detailTr: [
      "Özel yazılım ve premium sistemler, hazır site mantığının yetmediği durumlar için geliştirilir.",
      "Dosya yönetimi, log analizi, video analizi, eğitim simülatörü, özel dashboard veya kurum içi panel gibi ihtiyaçlara göre özel yapı kurulabilir.",
      "Bu projelerde kapsam baştan netleştirilir. Gereken modüller, kullanıcı rolleri, veritabanı, API, raporlama ve canlı önizleme süreci projeye göre planlanır."
    ],
    detail: [
      "Custom software and premium systems are developed when a standard website structure is not enough.",
      "A custom structure can be built for file management, log analysis, video analytics, education simulators, dashboards or internal company panels.",
      "The scope is clarified at the beginning. Required modules, user roles, database, API, reporting and live preview process are planned according to the project."
    ]
  }
] satisfies RawService[];

export const servicesData: ServiceType[] = ntWorksServices.map((service, index) => ({
  id: service.slug ?? `service-${index + 1}`,
  slug: service.slug,
  title: service.titleTr,
  shortDesc: service.shortTr,
  longDesc: service.descriptionTr,
  detail: service.detailTr ?? [],
  features: service.infrastructureTr ?? [],
  examples: service.examplesTr ?? [],
  infrastructure: service.infrastructureTr ?? [],
  combinations: service.examplesTr ?? [],
}));
