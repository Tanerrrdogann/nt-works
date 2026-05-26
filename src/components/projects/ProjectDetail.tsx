"use client";

import Image from "next/image";
import type { Project } from "@/types/project";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import DemoAccessBox from "@/components/projects/DemoAccessBox";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getProjectTheme } from "@/lib/project-theme";
import { getProjectPricing } from "@/data/project-pricing";
import { getProjectBionlukUrl } from "@/data/bionluk-links";

const detailCopy: Record<
  string,
  {
    overviewTr: string[];
    outcomesTr: string[];
    modulesTr: string[];
    proofTr: string;
  }
> = {
  "kurumsal-web-sitesi": {
    overviewTr: [
      "Bu proje yalnızca birkaç statik bölümden oluşan basit bir firma sitesi gibi düşünülmedi. Hizmet anlatımı, güven veren kanıt alanları, proje vitrinleri, iletişim çağrıları, mobil uyum ve SEO temeli aynı akış içinde kuruldu.",
      "Bir işletme bu yapıyı kullandığında ziyaretçi ilk ekranda ne sunduğunu, hangi alanlarda çalıştığını ve nasıl iletişime geçeceğini hızlıca anlar. Bu yüzden kurumsal site aynı zamanda satışa hazırlayan bir dijital vitrin gibi çalışır."
    ],
    outcomesTr: ["Daha profesyonel ilk izlenim", "Hizmetleri daha net anlatan sayfa yapısı", "Mobilde düzgün çalışan kurumsal görünüm", "Teklif talebine yönlendiren aksiyonlar", "İleride blog, proje ve hizmet sayfası eklemeye uygun altyapı"],
    modulesTr: ["Ana sayfa ve değer önerisi", "Hizmet detay sayfaları", "Çözümler ve sektör anlatımı", "Projeler / referans mantığı", "İletişim ve teklif talep akışı", "SEO uyumlu sayfa başlıkları"],
    proofTr: "Canlı incelemede ziyaretçi gerçek sayfa akışını, hizmet anlatımlarını, görsel yerleşimi ve iletişim mantığını görebilir."
  },
  "ecommerce-platform": {
    overviewTr: [
      "E-ticaret sistemi; sadece ürün kartı göstermekten ibaret olmayan, müşterinin ürünü incelemesinden siparişe, işletme tarafında ürün ve sipariş yönetimine kadar uzanan bir satış altyapısıdır.",
      "Bu yapı butik, takı mağazası, kozmetik satıcısı, tekstil işletmesi veya kendi domaininde satış yapmak isteyen küçük işletmeler için uyarlanabilir. Projenin değeri, müşteri deneyimi ile yönetim panelini aynı sistem içinde birleştirmesidir."
    ],
    outcomesTr: ["Ürünleri düzenli kategorilerle sunma", "Sepet ve checkout hissiyle gerçek mağaza deneyimi", "Siparişleri panelden takip etme", "Ödeme entegrasyonuna hazır kurgu", "Pazaryerine bağımlılığı azaltan marka vitrini"],
    modulesTr: ["Ürün listeleme", "Ürün detay sayfası", "Sepet ve checkout", "Müşteri bilgi formu", "Admin ürün yönetimi", "Sipariş yönetimi", "Test / canlı ödeme geçişine hazır yapı"],
    proofTr: "Canlı inceleme, müşteri tarafındaki alışveriş akışını ve yönetici tarafındaki sipariş/ürün kontrol mantığını göstermek için konumlandırıldı."
  },
  "whatsapp-siparis-katalog": {
    overviewTr: [
      "Katalog sitesi, tam ödeme altyapısına ihtiyaç duymadan ürünlerini düzenli göstermek isteyen işletmeler için hızlı satış başlangıcı sağlar.",
      "Instagram veya mesaj üzerinden satış yapan işletmelerde ürün fotoğrafları dağılır, fiyat soruları tekrar eder ve müşteri neyin stokta olduğunu net göremez. Bu proje ürünleri daha düzenli gösterir ve sipariş talebini tek aksiyona indirir."
    ],
    outcomesTr: ["Ürünleri link üzerinden düzenli sunma", "Kategori ve filtre ile hızlı gezme", "Müşteri sorularını azaltma", "Mobilde hızlı katalog deneyimi", "Küçük işletme için düşük maliyetli satış altyapısı"],
    modulesTr: ["Kategori listesi", "Ürün kartları", "Ürün detay alanı", "Arama ve filtreleme", "Sipariş çağrısı", "Mobil öncelikli tasarım"],
    proofTr: "Canlı incelemede müşteri gibi ürün gezilebilir, kategori akışı kontrol edilebilir ve siparişe yönlendiren satış mantığı görülebilir."
  },
  "randevu-rezervasyon-sistemi": {
    overviewTr: [
      "Randevu sistemi; kuaför, güzellik merkezi, klinik, danışmanlık, kurs veya servis işletmeleri için müşteri talebini daha düzenli almaya yarar.",
      "Manuel mesaj trafiğinde saat karışıklığı, unutulan talepler ve tekrar tekrar bilgi isteme problemi oluşur. Bu yapı müşteriye net form verir, işletmeye ise takip edilebilir bir rezervasyon akışı sağlar."
    ],
    outcomesTr: ["Randevu taleplerini tek yerde toplama", "Saat ve hizmet seçimini netleştirme", "Müşteri bilgilerini düzenli alma", "Admin tarafında durum takibi", "İşletmenin daha profesyonel görünmesi"],
    modulesTr: ["Hizmet seçimi", "Tarih ve saat talebi", "Müşteri bilgi formu", "Admin inceleme", "Durum takibi", "Bildirim / mail altyapısı"],
    proofTr: "Canlı inceleme, müşterinin randevu talep etme sürecini ve işletmenin bu talebi nasıl yöneteceğini gösterir."
  },
  "admin-panelli-isletme-sistemi": {
    overviewTr: [
      "Admin panelli işletme sistemi, küçük işletmelerin Excel, mesaj ve not defteri arasında dağılan operasyonlarını tek panele toplamak için hazırlanır.",
      "Bu projenin en güçlü tarafı farklı sektörlere uyarlanabilir olmasıdır. Market için stok ve tedarik; teknik servis için iş emri; güzellik merkezi için randevu; ajans için müşteri ve görev takibi aynı mantıkla kurulabilir."
    ],
    outcomesTr: ["İşletme verisini tek merkezde toplama", "Stok, müşteri, görev ve raporları görünür kılma", "Personel görevlerini takip etme", "Günlük operasyonu daha kolay yönetme", "Müşteriye özel modül eklemeye uygun altyapı"],
    modulesTr: ["Dashboard", "Ürün / kayıt yönetimi", "Müşteri / cari takibi", "Görev yönetimi", "Sipariş veya iş akışı", "Raporlar", "Yetki ve admin kontrolü"],
    proofTr: "Canlı inceleme, panelin gerçek işletme ekranı gibi kullanılabildiğini ve yeni kayıt ekleme gibi demo aksiyonlarının çalıştığını gösterir."
  },
  "landing-page": {
    overviewTr: [
      "Landing page, kampanya, ürün, kafe, restoran, hizmet ya da tek teklif için ziyaretçiyi dağılmadan aksiyona götüren satış sayfasıdır.",
      "Genel bir web sitesi her şeyi anlatmaya çalışırken landing page tek bir hedefe odaklanır. Bu yüzden reklam trafiği, sosyal medya linkleri ve kampanya tanıtımları için daha güçlü dönüşüm alanı oluşturur."
    ],
    outcomesTr: ["Tek teklif etrafında net anlatım", "Mobilde hızlı karar verme akışı", "Menü, hakkımızda, iletişim gibi bölümlere kaydırma", "Görselle desteklenen güçlü ilk izlenim", "Talep / rezervasyon / iletişim aksiyonuna yönlendirme"],
    modulesTr: ["Açılış ekranı", "Bölüm navigasyonu", "Hizmet veya menü alanları", "Görsel hikaye", "Sık sorular", "İletişim veya teklif çağrısı"],
    proofTr: "Canlı inceleme, ziyaretçinin sayfayı nasıl deneyimlediğini, bölümler arasında nasıl gezdiğini ve satış çağrısının nasıl öne çıktığını gösterir."
  },
  "cloud-storage-platform": {
    overviewTr: [
      "Cloud storage projesi, dosya yükleme ekranından daha fazlasını göstermek için tasarlandı. Auth, rol yönetimi, dosya referansları, klasörleme, işlem kayıtları, MinIO tabanlı object storage ve gateway katmanı aynı yapıda çalışır.",
      "Bu sistem teknik tarafta güvenli giriş, servis ayrımı, dosya operasyonları ve admin kontrol merkezi gibi konuları gösterirken; müşteri tarafında şirket içi dosya paylaşımı için düzenli ve yetkili bir panel fikrini anlatır."
    ],
    outcomesTr: ["Dosya erişimini rol bazlı kontrol etme", "Klasör ve dosya düzenini tek panelde toplama", "Admin kontrol ekranıyla sistemi izleme", "Örnek kullanıcı tipleriyle yetki farkını gösterme", "VPS üzerinde Docker Compose ile çalışabilen demo altyapısı"],
    modulesTr: ["Auth service", "API gateway", "Storage service", "PostgreSQL", "Redis", "MinIO", "Demo kullanıcı rolleri", "Dosya ve klasör ekranları"],
    proofTr: "Canlı inceleme üç farklı demo kullanıcı tipiyle giriş yapılabildiğini, dosya ekranlarının ve admin kontrol mantığının gerçek servislerle çalıştığını gösterir."
  },
  "task-management-system": {
    overviewTr: [
      "Görev yönetimi sistemi, basit bir yapılacaklar listesinden daha ciddi bir iş takip akışına yaklaşır. Görev oluşturma, durum değiştirme, öncelik, rapor ve PDF çıktısı gibi işletme tarafında anlaşılır özellikleri bir araya getirir.",
      "Bu yapı küçük ekipler, servis işletmeleri, öğrenci kulüpleri veya kendi iç işlerini düzenlemek isteyen ekipler için sade ama işlevsel bir başlangıç sağlar."
    ],
    outcomesTr: ["Görevleri tek listede toplama", "Öncelik ve durum takibi", "PDF rapor çıkarma", "Hatırlatma ve mail altyapısına uygunluk", "Docker gerektirmeyen hızlı demo çalıştırma"],
    modulesTr: ["Görev listesi", "Yeni görev formu", "Durum yönetimi", "Rapor ekranı", "PDF çıktısı", "Demo oturum mantığı"],
    proofTr: "Canlı inceleme, kullanıcıya girişten görev eklemeye ve rapor almaya kadar akışın gerçekten işlediğini gösterir."
  },
  "ai-log-analysis-panel": {
    overviewTr: [
      "AI / Log analiz paneli, teknik ekiplerin ham log satırları içinde kaybolmasını azaltmak için olayları dashboard, incident, analiz notu ve rapor alanlarına böler.",
      "Proje; platform API, AI servis katmanı, web panel, PostgreSQL ve Redis gibi parçalarla daha teknik bir demo sunar. Bu yüzden sadece görsel panel değil, servisler arası çalışan bir analiz altyapısı olarak düşünülmelidir."
    ],
    outcomesTr: ["Log ve olayları daha okunabilir hale getirme", "Incident takibini dashboard üzerinden izleme", "Analist ve yönetici rolleriyle inceleme", "Seed edilmiş güvenlik senaryoları", "AI destekli not / analiz hissi"],
    modulesTr: ["Analiz dashboard", "Incident tablosu", "Event ingestion", "Platform API", "AI service", "PostgreSQL", "Redis", "Demo senaryo seed akışı"],
    proofTr: "Canlı inceleme, seed edilen güvenlik olaylarının panele düşmesini ve analist ekranında incelenebilir hale gelmesini gösterir."
  },
  "video-analysis-platform": {
    overviewTr: [
      "Video analiz platformu, yüklenen medya dosyasını sadece saklamak yerine işlenebilir bir operasyon kaydına dönüştürür. Dashboard, video detay ekranı, zaman çizelgesi, analiz sonucu ve worker/scheduler mantığı bu yüzden önemlidir.",
      "Bu tarz sistemler eğitim, medya kontrol, güvenlik görüntüsü inceleme veya operasyon takibi gibi video yoğun işlerde demo ürüne dönüştürülebilir."
    ],
    outcomesTr: ["Video yükleme ve işleme akışını göstermek", "Analiz sonuçlarını tek panelde toplamak", "Worker ve scheduler mimarisini sergilemek", "Zaman çizelgesi ve detay ekranı sunmak", "CPU dostu demo ayarlarıyla VPS üzerinde çalışmak"],
    modulesTr: ["Video upload", "API service", "Worker", "Scheduler", "PostgreSQL", "Redis", "Dashboard", "Video detay ve rapor ekranları"],
    proofTr: "Canlı inceleme, video yükleme/analiz hissini, dashboard metriklerini ve sonuç detayını kullanıcıya göstermek için hazırlandı."
  }
};

const salesCopy: Record<
  string,
  {
    benefit: string;
    benefitTr: string;
    audience: string[];
    audienceTr: string[];
  }
> = {
  "cloud-storage-platform": {
    benefit:
      "A private file management system for teams that need roles, folders, controlled access and an admin view instead of sending files through scattered chat links.",
    benefitTr:
      "Dağınık mesaj linkleriyle dosya paylaşmak yerine rol, klasör, kontrollü erişim ve admin görünümü isteyen ekipler için özel dosya yönetim sistemi.",
    audience: ["Small companies", "Accounting offices", "Agencies", "Education teams", "Internal document-sharing teams"],
    audienceTr: ["Küçük şirketler", "Muhasebe ofisleri", "Ajanslar", "Eğitim ekipleri", "Ekip içi dosya paylaşımı yapan işletmeler"]
  },
  "ai-log-analysis-panel": {
    benefit:
      "A security review workspace that turns event streams, alerts and suspicious actors into a clearer investigation flow.",
    benefitTr:
      "Event stream, alert ve şüpheli kullanıcı/host verilerini daha anlaşılır bir güvenlik inceleme akışına dönüştüren analiz workspace'i.",
    audience: ["Security teams", "IT departments", "SOC training projects", "Log-heavy internal tools", "AI-assisted dashboard buyers"],
    audienceTr: ["Güvenlik ekipleri", "IT departmanları", "SOC eğitim projeleri", "Log yoğun iç sistemler", "AI destekli dashboard isteyen işletmeler"]
  },
  "video-analysis-platform": {
    benefit:
      "A video review system that extracts activity, timeline events, detections, audio signals and transcript-like outputs from uploaded footage.",
    benefitTr:
      "Yüklenen videolardan aktivite, timeline event, detection, ses sinyali ve transcript benzeri çıktılar üreten video inceleme sistemi.",
    audience: ["Training teams", "Media reviewers", "Operations teams", "Security footage review", "Video-heavy internal workflows"],
    audienceTr: ["Eğitim ekipleri", "Medya inceleme ekipleri", "Operasyon ekipleri", "Güvenlik kamerası inceleme süreçleri", "Video yoğun iç iş akışları"]
  },
  "virtual-computer-simulator": {
    benefit:
      "A visual education tool for explaining CPU, memory, bytecode, syscalls and OS concepts with a desktop-like simulator.",
    benefitTr:
      "CPU, bellek, bytecode, syscall ve OS kavramlarını masaüstü benzeri simülatörle anlatan görsel eğitim aracı.",
    audience: ["Computer science students", "Instructors", "Bootcamps", "Technical education content", "Low-level programming previews"],
    audienceTr: ["Bilgisayar bilimi öğrencileri", "Eğitmenler", "Bootcamp programları", "Teknik eğitim içerikleri", "Low-level programlama incelemeleri"]
  },
  "task-management-system": {
    benefit:
      "A simple business task system with priorities, reports and reminders for teams that need more than a shared note list.",
    benefitTr:
      "Sadece ortak not listesi yetmeyen ekipler için priority, rapor ve hatırlatma içeren sade iş takip sistemi.",
    audience: ["Small teams", "Freelance operations", "Student clubs", "Service businesses", "Internal follow-up workflows"],
    audienceTr: ["Küçük ekipler", "Freelance operasyonlar", "Öğrenci kulüpleri", "Hizmet işletmeleri", "İç takip süreçleri"]
  },
  "library-search-engine": {
    benefit:
      "A fast browser catalog interface for searching, filtering, sorting and editing structured book records.",
    benefitTr:
      "Yapılandırılmış kitap kayıtlarını aramak, filtrelemek, sıralamak ve düzenlemek için hızlı tarayıcı katalog arayüzü.",
    audience: ["Small libraries", "School archives", "Book clubs", "Catalog previews", "Data structures education"],
    audienceTr: ["Küçük kütüphaneler", "Okul arşivleri", "Kitap kulüpleri", "Katalog incelemeleri", "Veri yapıları eğitimi"]
  },
  "ecommerce-platform": {
    benefit:
      "A store system for businesses that want their own product catalog, cart, checkout and admin panel outside marketplace-only sales.",
    benefitTr:
      "Sadece pazaryerine bağlı kalmadan kendi ürün kataloğu, sepeti, checkout akışı ve admin paneli olsun isteyen işletmeler için mağaza sistemi.",
    audience: ["Instagram sellers", "Boutiques", "Jewelry stores", "Cosmetics sellers", "Textile shops", "Businesses waiting for their own payment domain"],
    audienceTr: ["Instagram satıcıları", "Butikler", "Takı mağazaları", "Kozmetik satıcıları", "Tekstil mağazaları", "Kendi ödeme alanını hazırlayan işletmeler"]
  }
};

export default function ProjectDetail({ project }: { project: Project }) {
  const { t, language } = useLanguage();

  const title = language === "tr" ? project.titleTr ?? project.title : project.title;
  const category = language === "tr" ? project.categoryTr ?? project.category : project.category;
  const description =
    language === "tr" ? project.descriptionTr ?? project.description : project.description;
  const problem = language === "tr" ? project.problemTr ?? project.problem : project.problem;
  const solution =
    language === "tr" ? project.solutionTr ?? project.solution : project.solution;
  const features =
    language === "tr" ? project.featuresTr ?? project.features : project.features;
  const originalScope =
    language === "tr" ? project.originalScopeTr ?? project.originalScope : project.originalScope;
  const screenshots = project.screenshots ?? [];
  const sales = salesCopy[project.slug];
  const detail = detailCopy[project.slug];
  const benefit = language === "tr" ? sales?.benefitTr : sales?.benefit;
  const audience = language === "tr" ? sales?.audienceTr : sales?.audience;
  const theme = getProjectTheme(project.slug);
  const accentName = language === "tr" ? theme.accentNameTr : theme.accentName;
  const pricing = getProjectPricing(project.slug);
  const bionlukUrl = getProjectBionlukUrl(project.slug);

  return (
    <article className="min-w-0 overflow-hidden py-10 sm:py-16">
      <div className={`mb-6 min-w-0 overflow-hidden rounded-3xl border bg-white p-4 shadow-sm sm:mb-10 sm:rounded-[2rem] sm:p-8 ${theme.border}`}>
        <div className={`-mx-4 -mt-4 mb-4 h-1 bg-gradient-to-r sm:-mx-8 sm:-mt-8 sm:mb-6 ${theme.stripe}`} />
        <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5 sm:gap-3">
          <Badge>{category}</Badge>
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-semibold sm:gap-2 sm:px-3 sm:text-xs ${theme.border} ${theme.bg} ${theme.text}`}>
            <span className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${theme.dot}`} />
            {accentName}
          </span>
        </div>

        <h1 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-6xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
          {description}
        </p>

        <div className="mt-6 grid min-w-0 grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
          {project.isDemoEnabled && (
            <Button
              href={project.demoUrl}
              variant="demo"
              target="_blank"
              rel="noreferrer"
              className="h-10 min-h-10 px-3 text-xs sm:h-12 sm:min-h-12 sm:px-5 sm:text-sm"
            >
              {t("projects.openDemo")}
            </Button>
          )}
          <Button href={`/contact?project=${project.slug}`} variant="secondary" className="h-10 min-h-10 px-3 text-xs sm:h-12 sm:min-h-12 sm:px-5 sm:text-sm">
            {language === "tr" ? "Benzerini İstiyorum" : "Request Similar"}
          </Button>
          <Button href={bionlukUrl} target="_blank" rel="noreferrer" className="h-10 min-h-10 px-3 text-xs sm:h-12 sm:min-h-12 sm:px-5 sm:text-sm">
            {language === "tr" ? "Bionluk'tan Satın Al" : "Buy on Bionluk"}
          </Button>
          <Button href="/projects" variant="ghost" className="h-10 min-h-10 px-3 text-xs sm:h-12 sm:min-h-12 sm:px-5 sm:text-sm">
            {t("projects.back")}
          </Button>
        </div>
      </div>

      <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-8">
        <div className="min-w-0 space-y-5 sm:space-y-8">
          <section className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className={`h-1 bg-gradient-to-r ${theme.stripe}`} />
            <div className="p-3 sm:p-6">
              <div className="flex min-w-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
                    {language === "tr" ? "Fiyatlandırma" : "Pricing"}
                  </p>
                  <h2 className="mt-2 text-xl font-black text-slate-950 sm:text-3xl">
                    {language === "tr" ? "Bionluk paketleriyle aynı mantık" : "Same Package Logic as Bionluk"}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
                    {language === "tr"
                      ? "Canlı incelemede gördüğün sistem için düşük başlangıç fiyatlı üç paket. Kapsam netleşince aynı içerik Bionluk satın alma akışına da taşınabilir."
                      : "Three low-entry packages for the system shown in the live preview. Once scoped, the same package structure can be mirrored on Bionluk."}
                  </p>
                </div>
                <Badge>{language === "tr" ? "Başlayan fiyatlar" : "Starting prices"}</Badge>
              </div>

              <div className="-mx-3 mt-4 flex max-w-[calc(100%+1.5rem)] snap-x gap-3 overflow-x-auto overscroll-x-contain px-3 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-6 sm:grid sm:max-w-none sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 sm:[scrollbar-width:auto] xl:grid-cols-3 [&::-webkit-scrollbar]:hidden sm:[&::-webkit-scrollbar]:block">
                {pricing.map((item, index) => {
                  const packageName = language === "tr" ? item.nameTr : item.nameEn;
                  const packagePrice = language === "tr" ? item.priceTr : item.priceEn;
                  const packageSummary = language === "tr" ? item.summaryTr : item.summaryEn;
                  const packageFeatures = language === "tr" ? item.featuresTr : item.featuresEn;
                  const packageDelivery = language === "tr" ? item.deliveryTr : item.deliveryEn;
                  const packageBadge = language === "tr" ? item.badgeTr : item.badgeEn;
                  const contactHref = `/contact?project=${project.slug}&package=${encodeURIComponent(packageName)}`;

                  return (
                    <div
                      key={`${item.nameTr}-${item.priceTr}`}
                      className={`relative flex min-w-[78%] max-w-[78%] shrink-0 snap-start flex-col rounded-2xl border p-3 sm:min-w-0 sm:max-w-none sm:shrink sm:p-4 xl:min-h-[430px] xl:rounded-3xl xl:p-5 ${
                        index === 1
                          ? `${theme.border} ${theme.bg}`
                          : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      {packageBadge && (
                        <span className={`mb-2 inline-flex w-fit rounded-full border px-2 py-0.5 text-[9px] font-black sm:mb-4 sm:px-3 sm:py-1 sm:text-xs ${theme.border} ${theme.text} bg-white/80`}>
                          {packageBadge}
                        </span>
                      )}
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="min-w-0">
                          <h3 className="text-xs font-black leading-4 text-slate-950 sm:text-base sm:leading-6 xl:text-xl">{packageName}</h3>
                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6 xl:line-clamp-none">{packageSummary}</p>
                        </div>
                        <span className="w-fit rounded-xl border border-slate-200 bg-white px-2 py-1 text-[9px] font-bold leading-3 text-slate-600 sm:rounded-2xl sm:px-3 sm:py-2 sm:text-xs">
                          {packageDelivery}
                        </span>
                      </div>
                      <p className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:mt-5 sm:text-2xl xl:mt-6 xl:text-4xl">
                        {packagePrice}
                      </p>
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-500 sm:text-xs sm:tracking-[0.12em]">
                        {language === "tr" ? "başlayan fiyat" : "starting price"}
                      </p>
                      <ul className="mt-3 grid gap-2 sm:mt-5 sm:gap-2 xl:mt-6 xl:gap-3">
                        {packageFeatures.map((feature, featureIndex) => (
                          <li key={feature} className={`${featureIndex > 2 ? "hidden sm:flex" : "flex"} gap-2 text-xs leading-5 text-slate-700 sm:gap-3 sm:text-sm sm:leading-6`}>
                            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full sm:mt-2 sm:h-2 sm:w-2 ${theme.dot}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-3 sm:pt-5 xl:pt-6">
                        <Button href={bionlukUrl} target="_blank" rel="noreferrer" className="h-9 min-h-9 w-full px-2 text-[10px] sm:h-10 sm:min-h-10 sm:text-xs xl:h-12 xl:min-h-12 xl:px-5 xl:text-sm">
                          {language === "tr" ? "Bionluk'tan Satın Al" : "Buy on Bionluk"}
                        </Button>
                        <Button href={contactHref} variant="secondary" className="mt-2 hidden w-full sm:inline-flex xl:mt-3">
                          {language === "tr" ? "Bu Paketi Sor" : "Ask About This Package"}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {detail && language === "tr" && (
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className={`h-1 bg-gradient-to-r ${theme.stripe}`} />
              <div className="p-4 sm:p-6">
                <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">Bu projeden ne çıkar?</h2>
                <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-600 sm:mt-5 sm:gap-4 sm:text-base sm:leading-8">
                  {detail.overviewTr.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className={`mt-4 rounded-2xl border p-4 sm:mt-6 sm:p-5 ${theme.border} ${theme.bg}`}>
                  <p className={`text-xs font-black uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.14em] ${theme.text}`}>
                    Canlı inceleme odağı
                  </p>
                  <p className={`mt-2 text-sm leading-6 sm:mt-3 sm:text-base sm:leading-7 ${theme.softText}`}>{detail.proofTr}</p>
                </div>
              </div>
            </section>
          )}

          <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-xl font-black text-slate-950 sm:text-2xl">
              {language === "tr" ? "Proje müşteriye nasıl anlatılır?" : "How This Project Is Presented"}
            </h2>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-4 md:grid-cols-3">
              {[
                {
                  title: language === "tr" ? "İhtiyaç" : "Need",
                  text: language === "tr"
                    ? `${title}, ${category.toLocaleLowerCase("tr-TR")} ihtiyacını somut ekranlarla anlatmak için hazırlanır. Müşteri yalnızca teknik özellik görmez; hangi işini kolaylaştıracağını da okur.`
                    : `${title} presents the ${category.toLowerCase()} need through concrete screens, so the client understands both the feature set and the business value.`
                },
                {
                  title: language === "tr" ? "Uyarlama" : "Adaptation",
                  text: language === "tr"
                    ? "Metinler, örnek veriler, renk dili, formlar, raporlar ve panel bölümleri işletmenin sektörüne göre yeniden düzenlenebilir."
                    : "Copy, sample data, visual language, forms, reports and panel sections can be adapted for the client's industry."
                },
                {
                  title: language === "tr" ? "Teslim" : "Delivery",
                  text: language === "tr"
                    ? "Canlı demo, teklif öncesi konuşmayı hızlandırır; kapsam netleşince aynı yapı domain, hosting, yönetim paneli ve içerik düzeniyle teslim edilebilir."
                    : "The live demo speeds up the proposal conversation; once scoped, the system can be delivered with domain, hosting, admin and content setup."
                }
              ].map((item) => (
                <div key={item.title} className={`rounded-2xl border p-2 sm:p-5 ${theme.border} ${theme.bg}`}>
                  <p className={`text-xs font-black sm:text-base ${theme.text}`}>{item.title}</p>
                  <p className={`mt-1 line-clamp-4 text-[10px] leading-4 sm:mt-3 sm:line-clamp-none sm:text-sm sm:leading-6 ${theme.softText}`}>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {detail && language === "tr" && (
            <section className="grid gap-3 sm:gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-xl font-black text-slate-950 sm:text-2xl">İşletmeye kazandırdıkları</h2>
                <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
                  {detail.outcomesTr.map((item) => (
                    <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-700 sm:px-4 sm:py-3 sm:text-sm sm:leading-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-xl font-black text-slate-950 sm:text-2xl">Modül olarak düşünülebilecekler</h2>
                <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
                  {detail.modulesTr.map((item) => (
                    <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-700 sm:px-4 sm:py-3 sm:text-sm sm:leading-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {benefit && (
            <section className={`rounded-3xl border p-4 shadow-sm sm:p-6 ${theme.border} ${theme.bg}`}>
              <h2 className={`text-xl font-bold sm:text-2xl ${theme.text}`}>
                {language === "tr" ? "İşletmeye faydası" : "Business Value"}
              </h2>
              <p className={`mt-3 text-sm leading-6 sm:mt-4 sm:text-base sm:leading-7 ${theme.softText}`}>{benefit}</p>
            </section>
          )}

          {audience && (
            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                {language === "tr" ? "Bu sistem kimler için uygun?" : "Who Is This For?"}
              </h2>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
                {audience.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-700 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="grid gap-3 sm:gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">{t("projects.problem")}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">{problem}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">{t("projects.solution")}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">{solution}</p>
            </div>
          </section>

          {originalScope && (
            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                {language === "tr" ? "Orijinal projede bulunan kapsam" : "Original Project Scope"}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {language === "tr"
                  ? "Bu bölüm GitHub/proje dokümanlarındaki gerçek ürün kapsamını özetler; canlı inceleme bunun tamamını açmak zorunda değildir."
                  : "This section summarizes the real product scope from the project documentation; the live preview does not need to expose every production-facing surface."}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
                {originalScope.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-700 sm:px-4 sm:py-3 sm:text-sm sm:leading-6"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">{t("projects.features")}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-700 sm:px-4 sm:py-3 sm:text-sm"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {screenshots.length > 0 && (
            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                {language === "tr" ? "Ekran görüntüleri" : "Screenshots"}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {language === "tr"
                  ? "Projelerin kendi dokümanlarında bulunan uygulama ekranları burada tanıtım için kullanılır."
                  : "Application screenshots from the project documentation are used here for clearer presentation."}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-4 md:grid-cols-2">
                {screenshots.map((screenshot) => (
                  <figure
                    key={screenshot.src}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                  >
                    <Image
                      src={screenshot.src}
                      alt={language === "tr" ? screenshot.altTr ?? screenshot.alt : screenshot.alt}
                      width={900}
                      height={506}
                      className="aspect-video w-full object-cover"
                    />
                    <figcaption className="px-3 py-2 text-xs font-medium leading-5 text-slate-700 sm:px-4 sm:py-3 sm:text-sm">
                      {language === "tr" ? screenshot.altTr ?? screenshot.alt : screenshot.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="min-w-0 space-y-4 sm:space-y-6">
          {project.isDemoEnabled ? (
            <DemoAccessBox project={project} />
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <h3 className="text-base font-bold text-slate-950 sm:text-lg">
                {language === "tr" ? "İnceleme durumu" : "Preview Status"}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {language === "tr"
                  ? "Bu örnek için canlı inceleme yerine kapsam, özellikler ve teklif akışı öne çıkarılır. Benzer bir sistem ihtiyaca göre tasarlanıp geliştirilebilir."
                  : "This example focuses on scope, features and request flow instead of a live preview. A similar system can be designed and built for the client's need."}
              </p>
            </div>
          )}

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h3 className="text-base font-bold text-slate-950 sm:text-lg">
              {t("projects.technicalInfo")}
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="text-slate-500">{t("projects.database")}</p>
                <p className="mt-1 text-slate-800">{project.database}</p>
              </div>
              <div>
                <p className="text-slate-500">{t("projects.deployment")}</p>
                <p className="mt-1 text-slate-800">{project.deployment}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-xs font-medium text-slate-500 transition hover:text-slate-950"
              >
                {language === "tr" ? "Teknik GitHub bağlantısı" : "Technical GitHub link"}
              </a>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}
