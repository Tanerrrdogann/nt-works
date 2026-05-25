import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

const categoryDescriptions: Record<string, string> = {
  Kolye: "Günlük ve özel davet şıklığı",
  Bileklik: "İnce, zarif ve ayarlanabilir parçalar",
  Küpe: "Işıltılı ve hafif tamamlayıcılar",
  Yüzük: "Minimal ve modern vurgular",
  Set: "Hediye için uyumlu seçimler",
};

function categorySlug(category: string) {
  const slugs: Record<string, string> = {
    Kolye: "kolye",
    Bileklik: "bileklik",
    Küpe: "kupe",
    Yüzük: "yuzuk",
    Set: "set",
  };

  return slugs[category] ?? "";
}

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 5);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Teddy Jewellry koleksiyonu</p>
          <h1>Zarif takılarla her güne küçük bir ışıltı.</h1>
          <p>
            Kadınlara özel kolye, küpe, bileklik ve hediye setleri. Güvenli
            ödeme, özenli paketleme ve hızlı teslimat.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/products">
              Alışverişe Başla
              <ArrowRight size={18} />
            </Link>
            <Link className="btn btn-ghost" href="/about">
              Markayı Tanı
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85"
            alt="Teddy Jewellry takı koleksiyonu"
          />
          <div className="hero-note">
            <strong>Yeni sezon</strong>
            <span>İnci, rose ve altın tonlarında seçili parçalar</span>
          </div>
        </div>
      </section>

      <section className="category-band">
        <div>
          <p className="eyebrow">Kategoriler</p>
          <h2>Kombinine göre seç</h2>
        </div>
        <div className="category-grid">
          {categories
            .filter((category) => category !== "Tümü")
            .map((category) => (
              <Link href={`/products?category=${categorySlug(category)}`} key={category}>
                <strong>{category}</strong>
                <span>{categoryDescriptions[category]}</span>
              </Link>
            ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Öne çıkanlar</p>
          <h2>En sevilen Teddy parçaları</h2>
          <Link className="text-link" href="/products">
            Tüm ürünler
          </Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="trust-grid">
        <div>
          <ShieldCheck />
          <h3>Güvenli ödeme</h3>
          <p>Ödeme adımı güvenli altyapı üzerinden tamamlanır.</p>
        </div>
        <div>
          <Truck />
          <h3>Özenli teslimat</h3>
          <p>Her sipariş hediye hissi veren paketleme ile hazırlanır.</p>
        </div>
        <div>
          <Sparkles />
          <h3>Şık seçimler</h3>
          <p>Günlük kullanım ve özel günler için seçilmiş modern parçalar.</p>
        </div>
      </section>
    </>
  );
}
