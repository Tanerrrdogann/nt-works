export const crmConfig = {
  company: {
    appName: "Minta Market",
    businessName: "Market Yönetim Paneli",
    description:
      "Ürün, stok, tedarikçi, sipariş, cari müşteri ve günlük kasa takibini tek panelden yöneten mini market sistemi.",
    phone: "+90 551 195 55 66",
    email: "info@mintamarket.com",
    location: "Kadıköy / İstanbul",
    branch: "Merkez Şube",
    taxLabel: "Fiş / vergi bilgisi",
    userName: "Taner Erdoğan",
    userRole: "Yönetici",
  },

  sidebarNav: [
    { label: "Dashboard", href: "/", key: "dashboard" },
    { label: "Ürünler", href: "/urunler", key: "products" },
    { label: "Stok Takibi", href: "/stok", key: "stock" },
    { label: "Tedarikçiler", href: "/tedarikciler", key: "suppliers" },
    { label: "Satışlar", href: "/satislar", key: "sales" },
    { label: "Siparişler", href: "/siparisler", key: "orders" },
    { label: "Müşteriler", href: "/musteriler", key: "customers" },
    { label: "Görevler", href: "/gorevler", key: "tasks" },
    { label: "Tedarikçi Teklifleri", href: "/teklifler", key: "quotes" },
    { label: "Raporlar", href: "/raporlar", key: "reports" },
    { label: "Ayarlar", href: "/ayarlar", key: "settings" },
  ],

  statusColors: {
    "Stokta": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Azaldı": "bg-amber-50 text-amber-700 border-amber-200",
    "Kritik": "bg-orange-50 text-orange-700 border-orange-200",
    "Tükendi": "bg-red-50 text-red-700 border-red-200",
    "SKT Yaklaşıyor": "bg-rose-50 text-rose-700 border-rose-200",
    "Aktif": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Düzenli müşteri": "bg-blue-50 text-blue-700 border-blue-200",
    "Veresiye açık": "bg-amber-50 text-amber-700 border-amber-200",
    "Tahsilat bekleniyor": "bg-red-50 text-red-700 border-red-200",
    "Hazırlanıyor": "bg-blue-50 text-blue-700 border-blue-200",
    "Tedarik Bekleniyor": "bg-amber-50 text-amber-700 border-amber-200",
    "Teslim Edildi": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Tamamlandı": "bg-slate-100 text-slate-700 border-slate-200",
    "İptal": "bg-red-50 text-red-700 border-red-200",
    "Yapılacak": "bg-slate-100 text-slate-700 border-slate-200",
    "Devam ediyor": "bg-cyan-50 text-cyan-700 border-cyan-200",
    "Gecikti": "bg-red-50 text-red-700 border-red-200",
    "Onay Bekliyor": "bg-amber-50 text-amber-700 border-amber-200",
    "Gönderildi": "bg-blue-50 text-blue-700 border-blue-200",
    "Hazırlanıyor Teklif": "bg-violet-50 text-violet-700 border-violet-200",
    "Onaylandı": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Revize Bekliyor": "bg-orange-50 text-orange-700 border-orange-200",
    "Kapalı": "bg-slate-100 text-slate-600 border-slate-200",
    "Hazır": "bg-emerald-50 text-emerald-700 border-emerald-200",
  },

  priorityColors: {
    "Düşük": "bg-slate-100 text-slate-600 border-slate-200",
    "Orta": "bg-blue-50 text-blue-700 border-blue-200",
    "Yüksek": "bg-amber-50 text-amber-700 border-amber-200",
    "Acil": "bg-red-50 text-red-700 border-red-200",
  },

  stats: [
    { title: "Bugünkü Satış", value: "₺18.750", change: "+12%", description: "Bugün kasadan geçen toplam satış" },
    { title: "Azalan Ürünler", value: "12", change: "3 kritik", description: "Minimum stok seviyesine yaklaşan ürünler" },
    { title: "Bekleyen Tedarik Siparişi", value: "4", change: "2 bugün", description: "Teslimat veya onay bekleyen siparişler" },
    { title: "SKT Yaklaşan", value: "9", change: "7 gün", description: "Son kullanma tarihi yaklaşan ürünler" },
    { title: "Günlük İşlem Sayısı", value: "146", change: "+24", description: "Satış, stok ve cari hareket toplamı" },
    { title: "Bu Ay Tahmini Ciro", value: "₺482.000", change: "+18%", description: "Ay sonu beklenen toplam market cirosu" },
  ],

  dashboardHighlights: [
    ["En çok satan ürün", "Su 1.5L"],
    ["En kritik stok", "Yumurta 30’lu"],
    ["Bugün teslim beklenen", "2 sipariş"],
    ["Açık görev", "6 görev"],
  ],

  products: [
    { id: "urun-001", name: "Ekmek 400g", category: "Fırın", barcode: "8691001000011", buyPrice: "₺7,50", salePrice: "₺10,00", stock: 42, minStock: 20, status: "Stokta", expiryDate: "Bugün" },
    { id: "urun-002", name: "Süt 1L", category: "Süt Ürünleri", barcode: "8691001000028", buyPrice: "₺24,00", salePrice: "₺32,50", stock: 8, minStock: 15, status: "Azaldı", expiryDate: "4 gün" },
    { id: "urun-003", name: "Yumurta 30’lu", category: "Temel Gıda", barcode: "8691001000035", buyPrice: "₺108,00", salePrice: "₺139,90", stock: 4, minStock: 10, status: "Kritik", expiryDate: "8 gün" },
    { id: "urun-004", name: "Ayçiçek Yağı 1L", category: "Temel Gıda", barcode: "8691001000042", buyPrice: "₺61,00", salePrice: "₺79,90", stock: 18, minStock: 12, status: "Stokta", expiryDate: "11 ay" },
    { id: "urun-005", name: "Makarna 500g", category: "Temel Gıda", barcode: "8691001000059", buyPrice: "₺14,00", salePrice: "₺21,50", stock: 36, minStock: 18, status: "Stokta", expiryDate: "14 ay" },
    { id: "urun-006", name: "Pirinç 1kg", category: "Bakliyat", barcode: "8691001000066", buyPrice: "₺39,00", salePrice: "₺54,90", stock: 14, minStock: 12, status: "Stokta", expiryDate: "10 ay" },
    { id: "urun-007", name: "Toz Şeker 1kg", category: "Temel Gıda", barcode: "8691001000073", buyPrice: "₺31,00", salePrice: "₺43,90", stock: 11, minStock: 15, status: "Azaldı", expiryDate: "18 ay" },
    { id: "urun-008", name: "Kola 1L", category: "İçecek", barcode: "8691001000080", buyPrice: "₺24,50", salePrice: "₺34,90", stock: 0, minStock: 12, status: "Tükendi", expiryDate: "6 ay" },
    { id: "urun-009", name: "Cips 150g", category: "Atıştırmalık", barcode: "8691001000097", buyPrice: "₺24,00", salePrice: "₺39,90", stock: 27, minStock: 14, status: "Stokta", expiryDate: "5 ay" },
    { id: "urun-010", name: "Su 1.5L", category: "İçecek", barcode: "8691001000103", buyPrice: "₺5,50", salePrice: "₺10,00", stock: 96, minStock: 36, status: "Stokta", expiryDate: "13 ay" },
    { id: "urun-011", name: "Kaşar Peyniri 600g", category: "Süt Ürünleri", barcode: "8691001000110", buyPrice: "₺118,00", salePrice: "₺159,90", stock: 6, minStock: 8, status: "SKT Yaklaşıyor", expiryDate: "2 gün" },
    { id: "urun-012", name: "Yoğurt 1kg", category: "Süt Ürünleri", barcode: "8691001000127", buyPrice: "₺42,00", salePrice: "₺59,90", stock: 9, minStock: 10, status: "SKT Yaklaşıyor", expiryDate: "3 gün" },
  ],

  stockMovements: [
    { id: "hareket-001", product: "Süt 1L", type: "Stok Çıkış", amount: "-18", reason: "Günlük satış", time: "Bugün 15:40" },
    { id: "hareket-002", product: "Ekmek 400g", type: "Stok Giriş", amount: "+60", reason: "Sabah teslimatı", time: "Bugün 07:25" },
    { id: "hareket-003", product: "Kola 1L", type: "Stok Çıkış", amount: "-12", reason: "Tükendi", time: "Bugün 13:10" },
    { id: "hareket-004", product: "Yoğurt 1kg", type: "Sayım", amount: "-2", reason: "SKT kontrolü", time: "Dün 18:20" },
  ],

  suppliers: [
    { id: "tedarikci-001", name: "Bereket Gıda Dağıtım", contact: "Ahmet Kaya", phone: "0532 412 77 31", category: "Temel gıda", lastOrder: "Bugün", balance: "₺18.450 borç", status: "Aktif" },
    { id: "tedarikci-002", name: "Marmara Süt Ürünleri", contact: "Serkan Demir", phone: "0542 201 11 90", category: "Süt ürünleri", lastOrder: "Dün", balance: "₺9.740 borç", status: "Aktif" },
    { id: "tedarikci-003", name: "TazeSebze Toptan", contact: "Emre Yıldız", phone: "0554 302 44 18", category: "Sebze meyve", lastOrder: "3 gün önce", balance: "₺0", status: "Aktif" },
    { id: "tedarikci-004", name: "Hızlı Tüketim A.Ş.", contact: "Burcu Çetin", phone: "0536 118 29 45", category: "İçecek / atıştırmalık", lastOrder: "Bu hafta", balance: "₺12.300 açık", status: "Aktif" },
    { id: "tedarikci-005", name: "PakTem Temizlik", contact: "Onur Şahin", phone: "0545 822 15 09", category: "Temizlik ürünleri", lastOrder: "Geçen hafta", balance: "₺2.150 borç", status: "Aktif" },
  ],

  customers: [
    { id: "musteri-001", name: "Ayşe Yılmaz", phone: "0533 120 45 11", address: "Caferağa Mah. Moda Cad.", balance: "₺420", lastShopping: "Bugün", status: "Veresiye açık", note: "Aylık ödeme yapıyor", tags: ["Düzenli", "Veresiye"], notes: ["Haftalık temel gıda alışverişi yapıyor.", "Cuma günü tahsilat hatırlatması yapılacak."] },
    { id: "musteri-002", name: "Mehmet Koç", phone: "0541 332 77 20", address: "Osmanağa Mah. Rıhtım Sok.", balance: "₺0", lastShopping: "Dün", status: "Düzenli müşteri", note: "Nakit alışveriş", tags: ["Düzenli"], notes: ["Genelde içecek ve atıştırmalık alıyor."] },
    { id: "musteri-003", name: "Elif Demir", phone: "0552 901 18 44", address: "Rasimpaşa Mah.", balance: "₺185", lastShopping: "2 gün önce", status: "Tahsilat bekleniyor", note: "Ödeme pazar günü", tags: ["Tahsilat"], notes: ["Pazar günü uğrayacağını söyledi."] },
    { id: "musteri-004", name: "Hasan Arslan", phone: "0537 444 69 12", address: "Yeldeğirmeni", balance: "₺95", lastShopping: "Bu hafta", status: "Veresiye açık", note: "Apartman siparişleri", tags: ["Apartman"], notes: ["Apartman için su ve temizlik ürünü alıyor."] },
    { id: "musteri-005", name: "Zeynep Kaya", phone: "0544 218 55 62", address: "Bahariye Cad.", balance: "₺0", lastShopping: "Bugün", status: "Aktif", note: "Eve teslim istiyor", tags: ["Eve teslim"], notes: ["Telefonla sipariş veriyor."] },
  ],

  orders: [
    { id: "siparis-001", orderNo: "SPR-1048", type: "Tedarik siparişi", related: "Bereket Gıda Dağıtım", amount: "₺14.850", status: "Tedarik Bekleniyor", date: "Bugün", delivery: "Yarın sabah" },
    { id: "siparis-002", orderNo: "SPR-1049", type: "Eve teslim", related: "Zeynep Kaya", amount: "₺640", status: "Hazırlanıyor", date: "Bugün", delivery: "17:30" },
    { id: "siparis-003", orderNo: "SPR-1050", type: "WhatsApp siparişi", related: "Hasan Arslan", amount: "₺320", status: "Teslim Edildi", date: "Bugün", delivery: "Teslim edildi" },
    { id: "siparis-004", orderNo: "SPR-1051", type: "Tedarik siparişi", related: "Marmara Süt Ürünleri", amount: "₺9.740", status: "Hazırlanıyor", date: "Dün", delivery: "Bugün 18:00" },
  ],

  sales: [
    { id: "satis-001", time: "09:20", channel: "Kasa", amount: "₺420", amountValue: 420, payment: "Nakit", items: "Ekmek, süt, yumurta" },
    { id: "satis-002", time: "10:45", channel: "Kasa", amount: "₺235", amountValue: 235, payment: "Kart", items: "Su, cips, kola" },
    { id: "satis-003", time: "12:10", channel: "Veresiye", amount: "₺185", amountValue: 185, payment: "Cari", items: "Yoğurt, peynir" },
    { id: "satis-004", time: "14:30", channel: "Eve teslim", amount: "₺640", amountValue: 640, payment: "Kart", items: "Temel gıda paketi" },
    { id: "satis-005", time: "15:05", channel: "Kasa", amount: "₺1.240", amountValue: 1240, payment: "Kart", items: "Ayçiçek yağı, pirinç, şeker" },
    { id: "satis-006", time: "16:18", channel: "Kasa", amount: "₺315", amountValue: 315, payment: "Nakit", items: "Makarna, cips, su" },
    { id: "satis-007", time: "17:10", channel: "Eve teslim", amount: "₺860", amountValue: 860, payment: "Kart", items: "Haftalık temel gıda paketi" },
    { id: "satis-008", time: "18:35", channel: "Veresiye", amount: "₺275", amountValue: 275, payment: "Cari", items: "Süt ürünleri" },
  ],

  cashSummary: [
    ["Nakit satış", "₺6.420"],
    ["Kart satış", "₺10.145"],
    ["Veresiye satış", "₺2.185"],
    ["İade / iptal", "₺0"],
    ["Gün sonu toplam", "₺18.750"],
  ],

  weeklySalesSeries: [
    { day: "Pzt", sales: 15600, transactions: 118 },
    { day: "Sal", sales: 18450, transactions: 132 },
    { day: "Çar", sales: 16980, transactions: 126 },
    { day: "Per", sales: 22140, transactions: 158 },
    { day: "Cum", sales: 18750, transactions: 146 },
    { day: "Cmt", sales: 24500, transactions: 174 },
    { day: "Paz", sales: 20920, transactions: 151 },
  ],

  categorySummary: [
    { name: "Temel gıda", value: 38400, percent: 38 },
    { name: "Süt ürünleri", value: 21200, percent: 21 },
    { name: "İçecek", value: 19850, percent: 20 },
    { name: "Atıştırmalık", value: 10420, percent: 10 },
    { name: "Temizlik", value: 6550, percent: 7 },
    { name: "Fırın", value: 4000, percent: 4 },
  ],

  paymentSummary: [
    { method: "Nakit", amount: "₺6.420", value: 6420, percent: 34 },
    { method: "Kart", amount: "₺10.145", value: 10145, percent: 54 },
    { method: "Veresiye", amount: "₺2.185", value: 2185, percent: 12 },
  ],

  staffWorkload: [
    { name: "Taner", role: "Yönetici", openTasks: 5, completedTasks: 11, shift: "09:00 - 22:00" },
    { name: "Nisa", role: "Kasa / Reyon", openTasks: 3, completedTasks: 9, shift: "10:00 - 20:00" },
    { name: "Mert", role: "Depo", openTasks: 2, completedTasks: 7, shift: "08:00 - 16:00" },
  ],

  tasks: [
    { id: "gorev-001", title: "Eksilen süt ürünleri için sipariş oluştur", customerName: "Marmara Süt Ürünleri", jobTitle: "Stok yenileme", status: "Yapılacak", priority: "Yüksek", dueDate: "Bugün 16:00", assignedTo: "Taner" },
    { id: "gorev-002", title: "İçecek reyonunu düzenle", customerName: "Hızlı Tüketim A.Ş.", jobTitle: "Reyon kontrolü", status: "Devam ediyor", priority: "Orta", dueDate: "Bugün 18:00", assignedTo: "Nisa" },
    { id: "gorev-003", title: "Son kullanma tarihi yaklaşan ürünleri kontrol et", customerName: "Minta Market", jobTitle: "SKT kontrolü", status: "Gecikti", priority: "Acil", dueDate: "Dün", assignedTo: "Taner" },
    { id: "gorev-004", title: "Tedarikçi teklifini karşılaştır", customerName: "Bereket Gıda Dağıtım", jobTitle: "Alım teklifi", status: "Yapılacak", priority: "Orta", dueDate: "Yarın", assignedTo: "Taner" },
    { id: "gorev-005", title: "Yeni fiyat etiketlerini güncelle", customerName: "Minta Market", jobTitle: "Fiyat güncelleme", status: "Yapılacak", priority: "Yüksek", dueDate: "Bugün 20:00", assignedTo: "Nisa" },
    { id: "gorev-006", title: "Gün sonu kasa raporunu kontrol et", customerName: "Minta Market", jobTitle: "Kasa kapanışı", status: "Yapılacak", priority: "Yüksek", dueDate: "Bugün 22:00", assignedTo: "Taner" },
    { id: "gorev-007", title: "Veresiye müşteriler için tahsilat notu gir", customerName: "Ayşe Yılmaz", jobTitle: "Cari takip", status: "Devam ediyor", priority: "Orta", dueDate: "Yarın", assignedTo: "Taner" },
    { id: "gorev-008", title: "Sabah teslim gelen ürünleri stoğa işle", customerName: "Bereket Gıda Dağıtım", jobTitle: "Stok giriş", status: "Tamamlandı", priority: "Düşük", dueDate: "Bugün 08:30", assignedTo: "Nisa" },
  ],

  pipelineStages: ["Hazırlanıyor", "Tedarik Bekleniyor", "Teslim Edildi", "Tamamlandı", "İptal"],

  quotes: [
    { id: "teklif-001", quoteNumber: "ALM-2026-001", supplierName: "Bereket Gıda Dağıtım", customerName: "Bereket Gıda Dağıtım", title: "Ayçiçek Yağı Toplu Alım Teklifi", amount: "₺14.850", status: "Onay Bekliyor", createdAt: "10 Mayıs", validUntil: "20 Mayıs", notes: "Koli bazlı alımda birim fiyat avantajlı.", items: [["Ayçiçek Yağı 1L", "60 koli", "₺9.600"], ["Makarna 500g", "20 koli", "₺2.750"], ["Pirinç 1kg", "15 koli", "₺2.500"]] },
    { id: "teklif-002", quoteNumber: "ALM-2026-002", supplierName: "Marmara Süt Ürünleri", customerName: "Marmara Süt Ürünleri", title: "Süt Ürünleri Haftalık Alım Teklifi", amount: "₺9.740", status: "Gönderildi", createdAt: "9 Mayıs", validUntil: "18 Mayıs", notes: "Yoğurt ve kaşar için SKT kontrolü teslimde yapılacak.", items: [["Süt 1L", "18 koli", "₺4.320"], ["Yoğurt 1kg", "40 adet", "₺1.680"], ["Kaşar Peyniri 600g", "25 adet", "₺3.740"]] },
    { id: "teklif-003", quoteNumber: "ALM-2026-003", supplierName: "Hızlı Tüketim A.Ş.", customerName: "Hızlı Tüketim A.Ş.", title: "İçecek Siparişi Teklifi", amount: "₺12.300", status: "Hazırlanıyor Teklif", createdAt: "8 Mayıs", validUntil: "17 Mayıs", notes: "Kola ve su stokları kritik seviyede.", items: [["Kola 1L", "35 koli", "₺6.800"], ["Su 1.5L", "60 koli", "₺4.200"], ["Cips 150g", "10 koli", "₺1.300"]] },
    { id: "teklif-004", quoteNumber: "ALM-2026-004", supplierName: "PakTem Temizlik", customerName: "PakTem Temizlik", title: "Temizlik Ürünleri Aylık Alım", amount: "₺2.150", status: "Onaylandı", createdAt: "6 Mayıs", validUntil: "16 Mayıs", notes: "Depo temizlik ürünleri aylık alımı.", items: [["Çöp Poşeti", "12 paket", "₺720"], ["Yüzey Temizleyici", "10 adet", "₺890"], ["Kağıt Havlu", "8 koli", "₺540"]] },
  ],

  jobs: [
    { id: "is-001", title: "Ayçiçek yağı tedarik siparişi", customerId: "musteri-001", customerName: "Bereket Gıda Dağıtım", status: "Tedarik Bekleniyor", priority: "Yüksek", value: "₺14.850", dueDate: "Yarın", assignedTo: "Taner", description: "Temel gıda stok yenilemesi için tedarik sipariş süreci.", tasks: ["Teklifi onayla", "Teslimat saatini netleştir"], notes: ["Minimum stok seviyesine yaklaşan ürünler var."] },
    { id: "is-002", title: "Eve teslim siparişi hazırlığı", customerId: "musteri-005", customerName: "Zeynep Kaya", status: "Hazırlanıyor", priority: "Orta", value: "₺640", dueDate: "Bugün 17:30", assignedTo: "Nisa", description: "Telefonla gelen temel gıda siparişinin hazırlanması.", tasks: ["Ürünleri topla", "Teslimat notunu kontrol et"], notes: ["Kapıda kartla ödeme istiyor."] },
  ],

  reports: {
    quoteConversionRate: "64%",
    taskCompletionRate: "82%",
    todaySales: "₺18.750",
    weeklySales: "₺96.420",
    monthlyRevenue: "₺482.000",
    bestSeller: "Su 1.5L",
    leastSeller: "Pirinç 1kg",
    mostProfitable: "Cips 150g",
    criticalStockCount: "12",
    expiryRiskCount: "9",
    mostActiveSupplier: "Bereket Gıda Dağıtım",
  },

  generatedReports: [
    { id: "rapor-001", title: "Gün Sonu Kasa Raporu", period: "Bugün", owner: "Taner", status: "Hazır" },
    { id: "rapor-002", title: "Haftalık Satış Özeti", period: "Bu hafta", owner: "Nisa", status: "Hazır" },
    { id: "rapor-003", title: "Kritik Stok Raporu", period: "Anlık", owner: "Depo", status: "Hazır" },
  ],

  notifications: [
    { id: "bildirim-001", title: "Kritik stok", text: "Yumurta 30’lu minimum seviyenin altına düştü.", time: "10 dk önce", tone: "danger" },
    { id: "bildirim-002", title: "SKT uyarısı", text: "Kaşar Peyniri 600g için 2 gün kaldı.", time: "32 dk önce", tone: "warning" },
    { id: "bildirim-003", title: "Tedarik teslimatı", text: "Bereket Gıda siparişi yarın sabah teslim edilecek.", time: "1 saat önce", tone: "info" },
    { id: "bildirim-004", title: "Kasa kapanışı", text: "Gün sonu kasa kontrolü 22:00 için planlandı.", time: "Bugün", tone: "info" },
    { id: "bildirim-005", title: "Tahsilat notu", text: "Ayşe Yılmaz için cuma tahsilat hatırlatması var.", time: "Bugün", tone: "warning" },
    { id: "bildirim-006", title: "Rapor hazır", text: "Haftalık satış özeti oluşturuldu.", time: "Dün", tone: "success" },
  ],

  activities: [
    { id: "aktivite-001", type: "Stok", title: "Stok uyarısı oluştu", description: "Yumurta 30’lu kritik stok seviyesine düştü.", time: "Bugün 10:30", relatedCustomer: "Yumurta 30’lu" },
    { id: "aktivite-002", type: "Satış", title: "Günlük satış güncellendi", description: "Kasa toplamı 18.750 TL seviyesine ulaştı.", time: "Bugün 14:15", relatedCustomer: "Kasa" },
    { id: "aktivite-003", type: "Tedarik", title: "Tedarik siparişi bekliyor", description: "Bereket Gıda Dağıtım siparişi yarın teslim edilecek.", time: "Dün 17:45", relatedCustomer: "Bereket Gıda Dağıtım" },
    { id: "aktivite-004", type: "Cari", title: "Tahsilat notu eklendi", description: "Ayşe Yılmaz için cuma tahsilat notu oluşturuldu.", time: "Dün 14:20", relatedCustomer: "Ayşe Yılmaz" },
  ],
};
