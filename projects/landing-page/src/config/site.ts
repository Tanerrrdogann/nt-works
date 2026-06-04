export const siteConfig = {
  brand: {
    name: "Velora Kafe",
    shortName: "VC",
    slogan: "Kahve, mutfak ve sakin molalar.",
    description:
      "Kadıköy’de kahve, tatlı, sıcak mutfak ve sakin çalışma molası için modern buluşma noktası.",
    phone: "+90 555 010 34 34",
    phoneLink: "tel:+905550103434",
    whatsapp: "905550103434",
    email: "merhaba@velorakafe.com",
    emailLink: "mailto:merhaba@velorakafe.com",
    instagram: "@velorakafe",
    instagramLink: "https://www.instagram.com/",
    address: "Caferağa Mahallesi, Kadıköy / İstanbul",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Cafera%C4%9Fa%20Mahallesi%20Kad%C4%B1k%C3%B6y%20%C4%B0stanbul",
    mapEmbed:
      "https://www.google.com/maps?q=Cafera%C4%9Fa%20Mahallesi%20Kad%C4%B1k%C3%B6y%20%C4%B0stanbul&output=embed",
  },

  panels: [
    { label: "Menü", href: "#menu", icon: "cup" },
    { label: "Hakkımızda", href: "#hakkimizda", icon: "leaf" },
    { label: "Galeri", href: "#galeri", icon: "frame" },
    { label: "İletişim", href: "#iletisim", icon: "pin" },
  ],

  hero: {
    title: "Kahve, mutfak ve sakin bir mola için tek sayfa",
    description:
      "Velora Kafe; özel kahveler, gün boyu sıcak mutfak, tatlılar ve çalışmaya uygun atmosferiyle şehir içinde iyi hissettiren bir durak sunar.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85",
    entryImage:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1800&q=88",
    landingImage:
      "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?auto=format&fit=crop&w=1800&q=86",
  },

  about: {
    title: "Velora Kafe hakkında",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    text:
      "Velora Kafe, günün ritmini yavaşlatmak isteyenler için tasarlanmış modern bir kafe ve mutfak alanıdır. Sabah kahvesinden öğle molasına, çalışma saatinden akşam tatlısına kadar sade, kaliteli ve ulaşılabilir bir deneyim sunar.",
    notes: [
      "Günlük taze kahve ve tatlı üretimi",
      "Sıcak mutfak, sandviç ve makarna seçenekleri",
      "Bilgisayarla çalışmaya uygun sakin masa düzeni",
      "Kadıköy merkezde kolay ulaşılabilir konum",
    ],
  },

  menu: [
    {
      category: "Sıcak Kahveler",
      items: [
        ["Espresso", "Kısa, yoğun ve dengeli.", "₺80"],
        ["Americano", "Espresso ve sıcak su dengesi.", "₺95"],
        ["Latte", "Yumuşak içimli espresso ve süt.", "₺115"],
        ["Cappuccino", "Yoğun köpük, güçlü kahve aroması.", "₺115"],
        ["Yoğun Sütlü Kahve", "Daha yoğun espresso, kadifemsi süt.", "₺125"],
        ["Mocha", "Espresso, süt ve çikolata.", "₺135"],
      ],
    },
    {
      category: "Soğuk Kahveler",
      items: [
        ["Soğuk Americano", "Soğuk, ferah ve net kahve tadı.", "₺105"],
        ["Soğuk Latte", "Buzlu süt ve espresso dengesi.", "₺125"],
        ["Soğuk Demleme", "Uzun demleme, düşük asidite.", "₺135"],
        ["Tonikli Espresso", "Tonik ve espresso ile ferah içim.", "₺145"],
        ["Karamelli Frappe", "Karamel, buz ve kahve karışımı.", "₺150"],
      ],
    },
    {
      category: "Kahvaltı & Atıştırmalık",
      items: [
        ["Kruvasan", "Sade veya çikolatalı seçenek.", "₺120"],
        ["Avokado Tost", "Ekşi maya, avokado ve baharat.", "₺210"],
        ["Hindi Füme Sandviç", "Günlük hazırlanmış doyurucu sandviç.", "₺185"],
        ["Mozzarella Tost", "Pesto, mozzarella ve domates.", "₺170"],
        ["Granola Kasesi", "Yoğurt, granola, meyve ve bal.", "₺165"],
      ],
    },
    {
      category: "Sıcak Mutfak",
      items: [
        ["Margarita Pizza", "Domates sos, mozzarella ve fesleğen.", "₺260"],
        ["Füme Etli Pizza", "Füme et, mozzarella ve roka.", "₺320"],
        ["Pesto Makarna", "Pesto sos, parmesan ve ceviz.", "₺245"],
        ["Kremalı Tavuklu Makarna", "Tavuk, krema ve mantar.", "₺285"],
        ["Sezar Salata", "Marul, tavuk, parmesan ve kruton.", "₺240"],
      ],
    },
    {
      category: "Tatlılar",
      items: [
        ["San Sebastian Tatlısı", "Kremamsı dokusu ve özel sos.", "₺185"],
        ["Brownie", "Yoğun çikolatalı, kahveyle uyumlu.", "₺145"],
        ["Limonlu Tatlı", "Hafif ve ferah tatlı seçeneği.", "₺165"],
        ["Tiramisu", "Kahve aromalı klasik tatlı.", "₺175"],
        ["Kurabiye Tabağı", "Günlük kurabiye tabağı.", "₺130"],
      ],
    },
    {
      category: "İçecekler",
      items: [
        ["Ev Yapımı Limonata", "Taze limon ve nane.", "₺110"],
        ["Meyveli Soğuk Çay", "Kırmızı meyveli soğuk çay.", "₺115"],
        ["Portakal Suyu", "Taze sıkım.", "₺130"],
        ["Limonlu Soda", "Ferahlık isteyenlere.", "₺75"],
      ],
    },
  ],

  gallery: [
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
  ],

  hours: [
    ["Pazartesi", "09.00 - 22.00"],
    ["Salı", "09.00 - 22.00"],
    ["Çarşamba", "09.00 - 22.00"],
    ["Perşembe", "09.00 - 22.00"],
    ["Cuma", "09.00 - 23.00"],
    ["Cumartesi", "10.00 - 23.00"],
    ["Pazar", "10.00 - 22.00"],
  ],

  contact: {
    title: "Rezervasyon veya bilgi için yazın",
    description:
      "Yer durumu, grup rezervasyonu, menü veya paket servis hakkında hızlıca bilgi alabilirsiniz.",
    whatsappMessage:
      "Merhaba, Velora Kafe için rezervasyon ve bilgi almak istiyorum.",
  },
};
