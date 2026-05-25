export const siteConfig = {
  company: {
    name: "Glow & Go Güzellik Merkezi",
    slogan: "Kişisel bakımda güvenli ve planlı deneyim.",
    phone: "+90 551 195 55 66",
    phoneLink: "tel:+905511955566",
    whatsapp: "+90 551 195 55 66",
    whatsappLink: "https://wa.me/905511955566",
    email: "ismailtanererdogan54@gmail.com",
    emailLink: "mailto:ismailtanererdogan54@gmail.com",
    address: "Kadıköy, İstanbul",
    workingHours: "Hafta içi 10:00 - 20:00",
    mapLink: "https://maps.google.com",
  },
  nav: [
    { title: "Ana Sayfa", href: "/" },
    { title: "Hizmetler", href: "/hizmetler" },
    { title: "Uzmanlar", href: "/uzmanlar" },
    { title: "Randevu", href: "/randevu" },
    { title: "Hakkımızda", href: "/hakkimizda" },
    { title: "İletişim", href: "/iletisim" },
  ],
  serviceCategories: [
    "Cilt Bakımı",
    "Lazer Epilasyon",
    "Kaş & Kirpik",
    "Bölgesel İncelme",
    "Saç Bakımı",
    "El & Ayak Bakımı",
    "Masaj & Spa",
  ],
  services: [
    {
      slug: "hydrafacial-cilt-bakimi",
      title: "Hydrafacial Cilt Bakımı",
      category: "Cilt Bakımı",
      duration: "60 dk",
      price: "₺1.500",
      description: "Cildi derinlemesine temizlemeye ve nemlendirmeye yönelik profesyonel bakım uygulaması.",
      tags: ["Popüler", "Cilt yenileme", "Nem desteği"],
      suitableFor: [
        "Cildinde kuruluk hissedenler",
        "Düzenli bakım yaptırmak isteyenler",
        "Gözenek temizliği isteyenler"
      ],
      process: [
        "Ön görüşme ve cilt analizi",
        "Temizleme ve hazırlık",
        "Uygulama",
        "Nemlendirme ve bakım önerisi"
      ],
      aftercare: [
        "Uygulama sonrası ilk 24 saat güneşe direkt maruz kalınmamalıdır.",
        "Uzmanımızın önerdiği nemlendiriciler düzenli kullanılmalıdır."
      ],
      specialists: ["Ayşe Yılmaz", "Elif Demir"],
      featured: true
    },
    {
      slug: "buz-lazer-epilasyon",
      title: "Buz Lazer Epilasyon",
      category: "Lazer Epilasyon",
      duration: "45 dk",
      price: "₺2.000",
      description: "Acısız ve konforlu yeni nesil buz lazer ile istenmeyen tüylere kalıcı çözüm.",
      tags: ["Kampanyalı", "Acısız", "Kalıcı Çözüm"],
      suitableFor: [
        "Hassas cilt yapısına sahip olanlar",
        "Kalıcı çözüm arayanlar"
      ],
      process: [
        "Kıl kökü ve cilt analizi",
        "Bölge hazırlığı",
        "Lazer atış uygulaması",
        "Soğutucu ve yatıştırıcı krem uygulaması"
      ],
      aftercare: [
        "İşlem sonrası kese/peeling yapılmamalıdır.",
        "Güneş kremi kullanımı zorunludur."
      ],
      specialists: ["Zeynep Kaya"],
      featured: true
    },
    {
      slug: "kas-laminasyonu",
      title: "Kaş Laminasyonu",
      category: "Kaş & Kirpik",
      duration: "30 dk",
      price: "₺800",
      description: "Düşük ve asimetrik kaşları şekillendirip daha dolgun bir görünüm kazandıran işlem.",
      tags: ["Yeni", "Dolgun Görünüm"],
      suitableFor: [
        "Kaşlarında asimetri olanlar",
        "Daha gür ve kalkık kaş görünümü isteyenler"
      ],
      process: [
        "Kaş analizi ve tasarım",
        "Sabitleyici losyon uygulaması",
        "Şekillendirme ve bakım"
      ],
      aftercare: [
        "İlk 24 saat su değdirilmemelidir."
      ],
      specialists: ["Elif Demir"],
      featured: false
    },
    {
      slug: "kirpik-lifting",
      title: "Kirpik Lifting",
      category: "Kaş & Kirpik",
      duration: "45 dk",
      price: "₺950",
      description: "Doğal kirpikleri daha kıvrık, belirgin ve bakımlı göstermeye yönelik konforlu uygulama.",
      tags: ["Doğal görünüm", "Bakımlı ifade"],
      suitableFor: ["Maskarasız belirgin kirpik isteyenler", "Günlük makyaj süresini azaltmak isteyenler"],
      process: ["Kirpik analizi", "Koruyucu ped uygulaması", "Lifting solüsyonu", "Besleyici bakım"],
      aftercare: ["İlk 24 saat kirpiklere su değdirilmemelidir.", "Yağ bazlı ürünlerden kısa süre kaçınılmalıdır."],
      specialists: ["Elif Demir", "Duru Şahin"],
      featured: true
    },
    {
      slug: "medikal-cilt-bakimi",
      title: "Medikal Cilt Bakımı",
      category: "Cilt Bakımı",
      duration: "75 dk",
      price: "₺1.750",
      description: "Cilt ihtiyacına göre temizleme, peeling, serum ve maske adımlarından oluşan kapsamlı bakım.",
      tags: ["Derin temizlik", "Cilt analizi"],
      suitableFor: ["Gözenek ve siyah nokta problemi yaşayanlar", "Aylık düzenli bakım isteyenler"],
      process: ["Cilt analizi", "Buhar ve temizleme", "Peeling ve serum", "Maske ve bakım önerisi"],
      aftercare: ["İşlem sonrası güneş koruyucu kullanılmalıdır.", "İlk gün ağır makyaj önerilmez."],
      specialists: ["Ayşe Yılmaz", "Nazlı Koç"],
      featured: true
    },
    {
      slug: "bolgesel-incelme",
      title: "Bölgesel İncelme",
      category: "Bölgesel İncelme",
      duration: "50 dk",
      price: "₺1.900",
      description: "Vücut şekillendirme hedeflerine destek olan planlı ve ölçümlü seans programı.",
      tags: ["Programlı seans", "Ölçüm takibi"],
      suitableFor: ["Bölgesel sıkılaşma isteyenler", "Düzenli seans planı arayanlar"],
      process: ["Ölçüm ve hedef belirleme", "Cihaz uygulaması", "Lenf destek masajı", "Seans planı oluşturma"],
      aftercare: ["Bol su tüketimi önerilir.", "Seans programı düzenli takip edilmelidir."],
      specialists: ["Zeynep Kaya", "Melis Arslan"],
      featured: false
    },
    {
      slug: "protez-tirnak",
      title: "Protez Tırnak",
      category: "El & Ayak Bakımı",
      duration: "90 dk",
      price: "₺1.250",
      description: "Günlük kullanıma uygun, dayanıklı ve estetik protez tırnak uygulaması.",
      tags: ["Kalıcı görünüm", "Renk seçenekleri"],
      suitableFor: ["Tırnak kırılması yaşayanlar", "Bakımlı el görünümü isteyenler"],
      process: ["Tırnak analizi", "Şekillendirme", "Jel/protez uygulama", "Renk ve bakım"],
      aftercare: ["Sert darbelerden kaçınılmalıdır.", "Bakım randevusu 3-4 hafta içinde planlanmalıdır."],
      specialists: ["Duru Şahin"],
      featured: false
    },
    {
      slug: "manikur-pedikur",
      title: "Manikür & Pedikür",
      category: "El & Ayak Bakımı",
      duration: "60 dk",
      price: "₺900",
      description: "El ve ayak bakımını hijyenik, hızlı ve estetik şekilde tamamlayan klasik bakım hizmeti.",
      tags: ["Hijyenik bakım", "Hızlı seans"],
      suitableFor: ["Düzenli el-ayak bakımı isteyenler", "Özel gün öncesi hazırlık yapanlar"],
      process: ["Temizleme", "Tırnak şekillendirme", "Et bakımı", "Nemlendirme"],
      aftercare: ["Nemlendirici kullanımı önerilir.", "İlk saat yoğun temas önerilmez."],
      specialists: ["Duru Şahin", "Elif Demir"],
      featured: false
    },
    {
      slug: "aromaterapi-masaj",
      title: "Aromaterapi Masaj",
      category: "Masaj & Spa",
      duration: "60 dk",
      price: "₺1.400",
      description: "Rahatlama, gevşeme ve yenilenme hissi için aromatik yağlarla uygulanan spa masajı.",
      tags: ["Rahatlama", "Spa deneyimi"],
      suitableFor: ["Stres ve yorgunluk hissedenler", "Kısa bir yenilenme molası isteyenler"],
      process: ["Kısa ihtiyaç görüşmesi", "Aroma seçimi", "Masaj uygulaması", "Dinlenme önerileri"],
      aftercare: ["Seans sonrası bol su içilmelidir.", "Ağır egzersiz hemen önerilmez."],
      specialists: ["Melis Arslan"],
      featured: false
    },
    {
      slug: "sac-bakim-terapisi",
      title: "Saç Bakım Terapisi",
      category: "Saç Bakımı",
      duration: "50 dk",
      price: "₺1.100",
      description: "Yıpranmış saçlara nem, parlaklık ve bakım desteği sağlayan profesyonel saç uygulaması.",
      tags: ["Parlaklık", "Nem desteği"],
      suitableFor: ["Yıpranmış saçlara bakım isteyenler", "Parlaklık ve yumuşaklık arayanlar"],
      process: ["Saç analizi", "Temizleme", "Bakım maskesi", "Isı destekli bakım"],
      aftercare: ["Sülfatsız ürün kullanımı önerilir.", "İlk gün yoğun ısı işlemi önerilmez."],
      specialists: ["Nazlı Koç"],
      featured: false
    }
  ],
  specialists: [
    {
      name: "Ayşe Yılmaz",
      title: "Cilt Bakımı Uzmanı",
      experience: "6 yıl deneyim",
      services: ["Hydrafacial Cilt Bakımı", "Medikal Cilt Bakımı"],
      description: "Cilt analizi, bakım planı ve nemlendirme uygulamaları üzerine uzmanlaşmıştır.",
      workingDays: "Pazartesi - Cumartesi"
    },
    {
      name: "Elif Demir",
      title: "Güzellik Uzmanı",
      experience: "4 yıl deneyim",
      services: ["Hydrafacial Cilt Bakımı", "Kaş Laminasyonu", "Kirpik Lifting"],
      description: "Yüz hatlarına uygun kaş/kirpik tasarımı ve temel cilt bakımı konularında hizmet verir.",
      workingDays: "Salı - Pazar"
    },
    {
      name: "Zeynep Kaya",
      title: "Lazer Epilasyon Uzmanı",
      experience: "8 yıl deneyim",
      services: ["Buz Lazer Epilasyon", "Bölgesel İncelme"],
      description: "Gelişmiş cihaz uygulamaları ve vücut şekillendirme protokollerinde uzmandır.",
      workingDays: "Pazartesi - Cuma"
    },
    {
      name: "Duru Şahin",
      title: "Kaş, Kirpik ve Tırnak Uzmanı",
      experience: "5 yıl deneyim",
      services: ["Kirpik Lifting", "Kaş Laminasyonu", "Protez Tırnak", "Manikür & Pedikür"],
      description: "Detaylı el bakımı, tırnak tasarımı ve doğal görünüm odaklı kaş/kirpik uygulamalarında çalışır.",
      workingDays: "Çarşamba - Pazar"
    },
    {
      name: "Melis Arslan",
      title: "Spa ve Vücut Bakımı Uzmanı",
      experience: "7 yıl deneyim",
      services: ["Aromaterapi Masaj", "Bölgesel İncelme"],
      description: "Rahatlama masajları, lenf destek uygulamaları ve vücut bakım programlarında uzmandır.",
      workingDays: "Pazartesi - Cumartesi"
    },
    {
      name: "Nazlı Koç",
      title: "Cilt ve Saç Bakım Uzmanı",
      experience: "6 yıl deneyim",
      services: ["Medikal Cilt Bakımı", "Saç Bakım Terapisi"],
      description: "Cilt bariyeri, nem dengesi ve saç bakım protokolleri üzerine kişiye özel bakım planı oluşturur.",
      workingDays: "Salı - Cumartesi"
    }
  ],
  appointmentSlots: [
    "10:00", "11:30", "13:00", "14:30", "16:00", "18:00"
  ],
  process: [
    { step: "01", title: "Hizmeti Seç", desc: "İhtiyacınıza en uygun bakımı belirleyin." },
    { step: "02", title: "Tarih ve Saat Belirle", desc: "Size en uygun zamanı seçin." },
    { step: "03", title: "Bilgilerini Gönder", desc: "Randevu formunu doldurun." },
    { step: "04", title: "Randevunu Onaylayalım", desc: "WhatsApp üzerinden hızlıca onaylayalım." }
  ],
  testimonials: [
    {
      name: "Selin T.",
      service: "Hydrafacial Cilt Bakımı",
      comment: "Randevu süreci çok kolaydı. Cildimdeki farkı ilk seansta hissettim.",
      rating: 5,
      tag: "Randevu kolaylığı"
    },
    {
      name: "Merve A.",
      service: "Buz Lazer Epilasyon",
      comment: "Zeynep Hanım çok ilgiliydi. İşlem gerçekten acısız geçti.",
      rating: 5,
      tag: "Uzman ekip"
    }
  ],
  faqs: [
    {
      question: "Randevu nasıl oluşturulur?",
      answer: "Sitemiz üzerinden hizmet ve tarih seçerek form doldurabilirsiniz. Ardından WhatsApp üzerinden onay mesajı ile randevunuz kesinleşir."
    },
    {
      question: "Randevumu iptal edebilir miyim?",
      answer: "Evet, randevu saatinizden en az 24 saat önce WhatsApp hattımız üzerinden iptal veya erteleme talebinde bulunabilirsiniz."
    },
    {
      question: "İlk görüşme ücretli mi?",
      answer: "Hizmetlerimiz öncesinde yapılan cilt veya işlem analizi görüşmelerimiz tamamen ücretsizdir."
    }
  ]
};
