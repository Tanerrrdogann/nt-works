type LegalSection = {
  title: string;
  intro: string;
  paragraphs?: string[];
  items?: string[];
};

const legalPages: LegalSection[] = [
  {
    title: "Satıcı Bilgileri",
    intro:
      "Teddy Jewellry markası altında yürütülen satış operasyonları, müşteriye açık ve erişilebilir satıcı bilgisi sunma ilkesiyle gerçekleştirilir.",
    items: [
      "Satıcı / işletme yetkilisi: Nisa Gökşen",
      "Marka / mağaza adı: Teddy Jewellry",
      "Vergi dairesi: Zincirlikuyu",
      "Adres: Gülbahar Mah. Kurtuluş 1 Sk. Gül Apartmanı No: 2 İç Kapı No: 7 Şişli/İstanbul",
      "İletişim e-posta adresi: teddyjewellry@gmail.com",
      "Kargo firması: Sürat Kargo",
    ],
    paragraphs: [
      "Müşteri, sipariş oluşturmadan önce satıcı bilgilerini, ürün açıklamalarını, fiyatı, kargo koşullarını ve ödeme adımlarını inceleyebilir. Satıcı bilgileri, sipariş sonrası iletişim, teslimat, iade/değişim ve yasal başvuru süreçlerinde kullanılmak üzere müşteriye sunulur.",
    ],
  },
  {
    title: "Teslimat ve Kargo Bilgileri",
    intro:
      "Siparişler, ürün stok durumu ve ödeme onayı tamamlandıktan sonra özenli paketleme ile hazırlanır ve Sürat Kargo aracılığıyla teslimata çıkarılır.",
    items: [
      "Tek ürün içeren siparişlerde kargo ücreti sipariş özetinde ayrıca gösterilir.",
      "İki ve üzeri ürün içeren siparişlerde kargo ücretsizdir.",
      "Teslimat adresi, müşteri tarafından checkout sırasında girilen adrese göre düzenlenir.",
      "Müşteri, adres bilgisinin eksiksiz ve doğru olmasından sorumludur.",
      "Kargoya teslim edilen siparişlerde teslimat süresi, kargo firmasının dağıtım operasyonuna ve teslimat bölgesine göre değişebilir.",
    ],
    paragraphs: [
      "Satıcı, sipariş hazırlık sürecinde ürünleri hasar görmeyecek şekilde paketlemeye ve teslimat bilgilerinin doğru aktarılmasına özen gösterir. Kargo tesliminde pakette gözle görülür hasar bulunması halinde müşterinin kargo görevlisiyle tutanak düzenletmesi ve durumu satıcıya bildirmesi önerilir.",
      "Teslimatın gecikmesi, adresin hatalı girilmesi veya alıcının adreste bulunmaması gibi durumlarda kargo firmasının uyguladığı teslimat prosedürleri geçerli olabilir. Müşteri destek talepleri için sipariş numarası ile iletişime geçebilir.",
    ],
  },
  {
    title: "Mesafeli Satış Sözleşmesi",
    intro:
      "Bu sözleşme, Teddy Jewellry internet sitesi üzerinden elektronik ortamda sipariş veren alıcı ile satıcı arasında, ürün satışı ve teslimatına ilişkin hak ve yükümlülükleri düzenlemek amacıyla hazırlanmıştır.",
    items: [
      "Sözleşmenin konusu, alıcının elektronik ortamda sipariş verdiği ürün veya ürünlerin satış ve teslimat koşullarıdır.",
      "Ürün adı, adedi, satış fiyatı, kargo bedeli, ödeme bilgisi ve toplam tutar sipariş onayından önce müşteriye gösterilir.",
      "Alıcı, siparişi onaylamadan önce ürün açıklaması, fiyat, teslimat, kargo ve iade koşullarını inceleyebilir.",
      "Siparişin tamamlanması, ödeme yükümlülüğü doğuran bir işlem niteliğindedir.",
      "Satıcı, stokta bulunan ve ödemesi başarıyla tamamlanan siparişi makul süre içinde hazırlayıp kargoya teslim eder.",
    ],
    paragraphs: [
      "Alıcı, sipariş sırasında paylaştığı iletişim ve teslimat bilgilerinin doğru olduğunu kabul eder. Eksik veya hatalı bilgi nedeniyle teslimatın yapılamaması halinde satıcı, müşteriyle iletişime geçerek sürecin tamamlanması için makul çabayı gösterir.",
      "Cayma hakkı, tüketici mevzuatındaki istisnalar saklı kalmak kaydıyla, ürünün tesliminden itibaren 14 gün içinde kullanılabilir. Cayma bildiriminin yazılı olarak veya kalıcı veri saklayıcısı niteliğindeki bir iletişim kanalı üzerinden satıcıya iletilmesi gerekir.",
      "İade edilecek ürünün kullanılmamış, yeniden satışa uygun, varsa etiketleri ve ambalajı korunmuş şekilde gönderilmesi beklenir. Hijyen niteliği taşıyan, kişisel kullanıma temas eden veya mevzuat gereği iadesi mümkün olmayan ürünlerde cayma hakkı sınırlı olabilir.",
    ],
  },
  {
    title: "Ön Bilgilendirme Formu",
    intro:
      "Bu form, müşterinin sipariş vermeden önce ürün, fiyat, kargo, ödeme, teslimat ve iade koşulları hakkında açık şekilde bilgilendirilmesi amacıyla hazırlanmıştır.",
    items: [
      "Satıcı bilgileri: Nisa Gökşen adına yürütülen Teddy Jewellry satış operasyonu.",
      "Ürün bilgileri: Ürün adı, görseli, açıklaması, kategori bilgisi, stok durumu ve satış fiyatı ürün sayfasında gösterilir.",
      "Toplam bedel: Ürün bedeli, varsa kargo ücreti ve genel toplam sipariş özetinde görüntülenir.",
      "Kargo: Siparişler Sürat Kargo ile gönderilir; iki ve üzeri ürünlerde kargo ücretsizdir.",
      "Ödeme: Sipariş ödeme adımı tamamlandıktan sonra işleme alınır.",
      "Cayma hakkı: Uygun ürünlerde teslimden itibaren 14 gün içinde kullanılabilir.",
      "İletişim: Sipariş, iade ve destek talepleri için teddyjewellry@gmail.com adresi kullanılabilir.",
    ],
    paragraphs: [
      "Müşteri, siparişi onaylamadan önce sepet ve checkout ekranlarında ürün adetlerini, teslimat adresini, kargo bilgisini ve toplam tutarı kontrol edebilir. Siparişin onaylanmasıyla birlikte müşteri, ön bilgilendirme koşullarını okuyup kabul etmiş sayılır.",
    ],
  },
  {
    title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
    intro:
      "Teddy Jewellry, müşterilerin kişisel verilerini yalnızca sipariş, ödeme, teslimat, müşteri iletişimi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işler.",
    items: [
      "İşlenen veriler: Ad soyad, e-posta adresi, teslimat adresi, şehir, ilçe, sipariş notu, sipariş içeriği ve ödeme durumu.",
      "İşleme amaçları: Siparişin oluşturulması, ödemenin doğrulanması, ürünlerin hazırlanması, kargoya teslim edilmesi ve müşteri desteği sağlanması.",
      "Aktarım: Teslimat için kargo firmasına, ödeme süreci için ödeme hizmet sağlayıcısına ve zorunlu hallerde yetkili kamu kurumlarına aktarım yapılabilir.",
      "Saklama: Veriler, sipariş ve muhasebe süreçleri ile yasal yükümlülüklerin gerektirdiği süre boyunca saklanır.",
      "Güvenlik: Kişisel verilere yalnızca yetkili kişiler erişir; verilerin yetkisiz erişime karşı korunması için makul teknik ve idari tedbirler uygulanır.",
    ],
    paragraphs: [
      "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında müşteriler; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme ve mevzuatta öngörülen diğer haklarını kullanma hakkına sahiptir.",
      "Bu haklara ilişkin talepler, kimlik doğrulamasına elverişli bilgiler ve sipariş numarası belirtilerek teddyjewellry@gmail.com adresine iletilebilir. Talepler, ilgili mevzuatta öngörülen süreler içinde değerlendirilir.",
    ],
  },
  {
    title: "İade ve Değişim Politikası",
    intro:
      "Teddy Jewellry, müşteri memnuniyetini önemser; iade ve değişim taleplerini ürün tipi, hijyen koşulları, ürünün yeniden satışa uygunluğu ve mevzuat hükümleri çerçevesinde değerlendirir.",
    items: [
      "İade/değişim talebi için sipariş numarası ile birlikte satıcıya e-posta üzerinden başvuru yapılmalıdır.",
      "Ürün kullanılmamış, zarar görmemiş, varsa etiketi ve ambalajı korunmuş olmalıdır.",
      "Kişisel kullanıma temas eden ve hijyen nedeniyle yeniden satışı uygun olmayan ürünlerde iade/değişim hakkı sınırlı olabilir.",
      "Ayıplı, hasarlı veya yanlış ürün gönderimi halinde müşteri, teslimden sonra makul süre içinde satıcıyla iletişime geçmelidir.",
      "Onaylanan iadelerde geri ödeme, mümkün olduğu ölçüde müşterinin ödeme yaptığı yöntem üzerinden gerçekleştirilir.",
    ],
    paragraphs: [
      "Kargo tesliminde hasar fark edilmesi halinde müşterinin kargo görevlisiyle tutanak düzenletmesi ve ürün görselleriyle birlikte satıcıya bilgi vermesi sürecin hızlı ilerlemesine yardımcı olur.",
      "İade ve değişim koşulları, ürünün niteliği ve yürürlükteki tüketici mevzuatı dikkate alınarak değerlendirilir. Satıcı, müşteriyle iletişime geçerek uygun çözüm yolunu paylaşır.",
    ],
  },
];

export default function LegalPage() {
  return (
    <section className="page-shell narrow legal-page">
      <div className="page-heading">
        <p className="eyebrow">Yasal bilgilendirme</p>
        <h1>Politikalar ve sözleşmeler</h1>
        <p>
          Teddy Jewellry alışverişlerinde satıcı bilgileri, teslimat, ödeme,
          gizlilik ve iade süreçleri müşteriye açık, anlaşılır ve erişilebilir
          şekilde sunulur.
        </p>
      </div>
      <div className="legal-list">
        {legalPages.map((page) => (
          <article key={page.title}>
            <h2>{page.title}</h2>
            <p className="legal-intro">{page.intro}</p>
            {page.items ? (
              <ul>
                {page.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {page.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
