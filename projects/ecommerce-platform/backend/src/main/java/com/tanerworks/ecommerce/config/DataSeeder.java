package com.tanerworks.ecommerce.config;

import java.math.BigDecimal;
import java.util.Map;

import com.tanerworks.ecommerce.category.Category;
import com.tanerworks.ecommerce.category.CategoryRepository;
import com.tanerworks.ecommerce.auth.AdminRole;
import com.tanerworks.ecommerce.auth.AdminUser;
import com.tanerworks.ecommerce.auth.AdminUserRepository;
import com.tanerworks.ecommerce.product.Product;
import com.tanerworks.ecommerce.product.ProductRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedData(
            CategoryRepository categoryRepository,
            ProductRepository productRepository,
            AdminUserRepository adminUserRepository,
            PasswordEncoder passwordEncoder,
            @Value("${app.admin.email}") String adminEmail,
            @Value("${app.admin.password}") String adminPassword
    ) {
        return args -> {
            if (!adminUserRepository.existsByEmail(adminEmail)) {
                adminUserRepository.save(new AdminUser(
                        adminEmail,
                        passwordEncoder.encode(adminPassword),
                        AdminRole.ADMIN
                ));
            }

            if (categoryRepository.count() > 0 || productRepository.count() > 0) {
                return;
            }

            Map<String, Category> categories = Map.of(
                    "kolye", categoryRepository.save(new Category("Kolye", "kolye", null, true)),
                    "bileklik", categoryRepository.save(new Category("Bileklik", "bileklik", null, true)),
                    "kupe", categoryRepository.save(new Category("Küpe", "kupe", null, true)),
                    "yuzuk", categoryRepository.save(new Category("Yüzük", "yuzuk", null, true)),
                    "set", categoryRepository.save(new Category("Set", "set", null, true))
            );

            productRepository.save(new Product(
                    "Luna İnci Kolye",
                    "luna-inci-kolye",
                    "Zarif inci dokusu ve ince altın tonlu zinciriyle günlük şıklığı akşam davetlerine taşıyan özel bir Teddy Jewellry parçası.",
                    new BigDecimal("849.90"),
                    new BigDecimal("999.90"),
                    categories.get("kolye"),
                    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
                    18,
                    true,
                    true,
                    "Çok Satan",
                    "Altın kaplama, doğal inci görünümü",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Rose Kalp Bileklik",
                    "rose-kalp-bileklik",
                    "Rose tonlarında romantik, ince ve ayarlanabilir bileklik. Tek başına minimal; saat ve bilekliklerle birlikte güçlü görünür.",
                    new BigDecimal("549.90"),
                    null,
                    categories.get("bileklik"),
                    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=85",
                    24,
                    true,
                    true,
                    "Yeni",
                    "Rose kaplama, ayarlanabilir kilit",
                    "Aynı gün hazırlık, 1-3 iş günü teslimat."
            ));

            productRepository.save(new Product(
                    "Mira Işıltı Küpe",
                    "mira-isilti-kupe",
                    "Yüz hattını aydınlatan taş detaylı küpe. Hafif yapısıyla gün boyu konforlu kullanım sunar.",
                    new BigDecimal("429.90"),
                    new BigDecimal("529.90"),
                    categories.get("kupe"),
                    "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1000&q=85",
                    32,
                    true,
                    true,
                    null,
                    "Zirkon taş, antialerjik kaplama",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Noir Minimal Yüzük",
                    "noir-minimal-yuzuk",
                    "Siyah taş vurgulu modern yüzük. Sade kombinlere güçlü ve rafine bir dokunuş ekler.",
                    new BigDecimal("399.90"),
                    null,
                    categories.get("yuzuk"),
                    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
                    9,
                    true,
                    false,
                    "Sınırlı Stok",
                    "Çelik gövde, siyah taş detay",
                    "2-4 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Aurora Katmanlı Kolye",
                    "aurora-katmanli-kolye",
                    "İki katmanlı zincir formu ve parlak yüzeyiyle sade elbiseleri bile tamamlanmış gösteren güçlü bir parça.",
                    new BigDecimal("749.90"),
                    null,
                    categories.get("kolye"),
                    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=85",
                    0,
                    true,
                    false,
                    null,
                    "Altın tonlu kaplama",
                    "Stok yenilenince satışa açılır."
            ));

            productRepository.save(new Product(
                    "Selene Zarif Set",
                    "selene-zarif-set",
                    "Kolye ve küpe uyumunu tek kutuda sunan zarif set. Hediye için premium Teddy Jewellry kutusuyla hazırlanır.",
                    new BigDecimal("1199.90"),
                    new BigDecimal("1399.90"),
                    categories.get("set"),
                    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
                    13,
                    true,
                    true,
                    "Hediye Favorisi",
                    "Altın kaplama, taş detay",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Nova Figürlü Kolye",
                    "nova-figurlu-kolye",
                    "Günlük kombinlere hareket katan minimal figürlü kolye. İnce zinciriyle tek başına sade, katmanlı kullanımda güçlü görünür.",
                    new BigDecimal("629.90"),
                    null,
                    categories.get("kolye"),
                    "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1000&q=85",
                    21,
                    true,
                    false,
                    "Yeni",
                    "Altın tonlu çelik, figür uç",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Vera Taşlı Kolye",
                    "vera-tasli-kolye",
                    "Tek taş görünümüyle özel günlerde zarif bir vurgu isteyenler için parlak ve sade kolye.",
                    new BigDecimal("699.90"),
                    new BigDecimal("799.90"),
                    categories.get("kolye"),
                    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1000&q=85",
                    16,
                    true,
                    true,
                    "İndirim",
                    "Zirkon taş, altın kaplama zincir",
                    "Aynı gün hazırlık, 1-3 iş günü teslimat."
            ));

            productRepository.save(new Product(
                    "Dora Zincir Kolye",
                    "dora-zincir-kolye",
                    "Modern zincir formu ve tok duruşuyla basic tişörtlerden elbiselere kadar kolay tamamlayıcı.",
                    new BigDecimal("589.90"),
                    null,
                    categories.get("kolye"),
                    "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
                    27,
                    true,
                    false,
                    null,
                    "Çelik zincir, altın tonlu kaplama",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Mila İnce Bileklik",
                    "mila-ince-bileklik",
                    "Tek başına zarif, çoklu kullanımda dikkat çekici duran ince zincir bileklik.",
                    new BigDecimal("349.90"),
                    null,
                    categories.get("bileklik"),
                    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=85",
                    35,
                    true,
                    false,
                    "Günlük",
                    "Ayarlanabilir çelik zincir",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Liva Boncuk Bileklik",
                    "liva-boncuk-bileklik",
                    "Renkli boncuk dokusu ile yaz kombinleri ve hediye seçimleri için enerjik bileklik.",
                    new BigDecimal("299.90"),
                    null,
                    categories.get("bileklik"),
                    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85",
                    42,
                    true,
                    true,
                    "Çok Satan",
                    "Boncuk detay, esnek form",
                    "Aynı gün hazırlık, 1-3 iş günü teslimat."
            ));

            productRepository.save(new Product(
                    "Arya Kelepçe Bileklik",
                    "arya-kelepce-bileklik",
                    "Bilekte tok duran, sade ama güçlü görünüm veren modern kelepçe bileklik.",
                    new BigDecimal("679.90"),
                    new BigDecimal("749.90"),
                    categories.get("bileklik"),
                    "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=85",
                    14,
                    true,
                    false,
                    "Sınırlı Stok",
                    "Altın kaplama, ayarlanabilir form",
                    "2-4 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Elara Halka Küpe",
                    "elara-halka-kupe",
                    "Günlük kullanım için hafif, klasik halka formunda parlak küpe.",
                    new BigDecimal("379.90"),
                    null,
                    categories.get("kupe"),
                    "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85",
                    28,
                    true,
                    false,
                    null,
                    "Çelik gövde, altın tonlu kaplama",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Pera İnci Küpe",
                    "pera-inci-kupe",
                    "İnci görünümüyle sade şıklık arayanlara küçük ve zarif küpe.",
                    new BigDecimal("459.90"),
                    null,
                    categories.get("kupe"),
                    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85",
                    23,
                    true,
                    true,
                    "Hediye",
                    "İnci görünümü, antialerjik kaplama",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Sera Sallantılı Küpe",
                    "sera-sallantili-kupe",
                    "Özel davetlerde yüz hattını uzatan, ışıltılı sallantılı küpe.",
                    new BigDecimal("519.90"),
                    new BigDecimal("599.90"),
                    categories.get("kupe"),
                    "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
                    17,
                    true,
                    false,
                    "Davet",
                    "Zirkon taş detay, hafif yapı",
                    "2-4 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Lora Ayarlanabilir Yüzük",
                    "lora-ayarlanabilir-yuzuk",
                    "Ölçü derdi olmadan hediye edilebilen ayarlanabilir minimal yüzük.",
                    new BigDecimal("329.90"),
                    null,
                    categories.get("yuzuk"),
                    "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1000&q=85",
                    31,
                    true,
                    true,
                    "Hediye Favorisi",
                    "Ayarlanabilir çelik gövde",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Ena Taşlı Yüzük",
                    "ena-tasli-yuzuk",
                    "Tek taş etkisi veren, günlük şıklığı bozmadan parıltı ekleyen yüzük.",
                    new BigDecimal("449.90"),
                    new BigDecimal("529.90"),
                    categories.get("yuzuk"),
                    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
                    18,
                    true,
                    false,
                    "İndirim",
                    "Zirkon taş, rose kaplama",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Rima Çoklu Yüzük Seti",
                    "rima-coklu-yuzuk-seti",
                    "Farklı parmaklarda birlikte kullanılabilen modern çoklu yüzük seti.",
                    new BigDecimal("599.90"),
                    null,
                    categories.get("yuzuk"),
                    "https://images.unsplash.com/photo-1602752250015-52934bc45613?auto=format&fit=crop&w=1000&q=85",
                    12,
                    true,
                    false,
                    "Set",
                    "Çelik gövde, çoklu set",
                    "2-4 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Luna Hediye Seti",
                    "luna-hediye-seti",
                    "Kolye, küpe ve bileklikten oluşan, hediye kutusuyla hazırlanan zarif set.",
                    new BigDecimal("1499.90"),
                    new BigDecimal("1699.90"),
                    categories.get("set"),
                    "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1000&q=85",
                    10,
                    true,
                    true,
                    "Premium",
                    "Altın kaplama, zirkon taş detay",
                    "Hediye paketiyle 1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "Rose Günlük Set",
                    "rose-gunluk-set",
                    "Rose tonlu kolye ve bileklik uyumunu sade günlük kombinlerle buluşturan set.",
                    new BigDecimal("999.90"),
                    null,
                    categories.get("set"),
                    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
                    15,
                    true,
                    false,
                    "Yeni",
                    "Rose kaplama, ikili set",
                    "1-3 iş günü içinde kargoya teslim edilir."
            ));

            productRepository.save(new Product(
                    "İnci Davet Seti",
                    "inci-davet-seti",
                    "İnci dokusuyla davet, nişan ve özel gün kombinlerine uyum sağlayan set.",
                    new BigDecimal("1299.90"),
                    null,
                    categories.get("set"),
                    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=85",
                    8,
                    true,
                    false,
                    "Davet",
                    "İnci görünümü, altın tonlu detay",
                    "2-4 iş günü içinde kargoya teslim edilir."
            ));
        };
    }
}
