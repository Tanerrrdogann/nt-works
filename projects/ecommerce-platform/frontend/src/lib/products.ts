import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Luna İnci Kolye",
    slug: "luna-inci-kolye",
    description:
      "Zarif inci dokusu ve ince altın tonlu zinciriyle günlük şıklığı akşam davetlerine taşıyan özel bir Teddy Jewellry parçası.",
    price: 849.9,
    oldPrice: 999.9,
    category: "Kolye",
    imageUrl:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    stock: 18,
    active: true,
    featured: true,
    badge: "Çok Satan",
    material: "Altın kaplama, doğal inci görünümü",
    delivery: "1-3 iş günü içinde kargoya teslim edilir.",
  },
  {
    id: 2,
    name: "Rose Kalp Bileklik",
    slug: "rose-kalp-bileklik",
    description:
      "Rose tonlarında romantik, ince ve ayarlanabilir bileklik. Tek başına minimal; saat ve bilekliklerle birlikte güçlü görünür.",
    price: 549.9,
    category: "Bileklik",
    imageUrl:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=85",
    stock: 24,
    active: true,
    featured: true,
    badge: "Yeni",
    material: "Rose kaplama, ayarlanabilir kilit",
    delivery: "Aynı gün hazırlık, 1-3 iş günü teslimat.",
  },
  {
    id: 3,
    name: "Mira Işıltı Küpe",
    slug: "mira-isilti-kupe",
    description:
      "Yüz hattını aydınlatan taş detaylı küpe. Hafif yapısıyla gün boyu konforlu kullanım sunar.",
    price: 429.9,
    oldPrice: 529.9,
    category: "Küpe",
    imageUrl:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1000&q=85",
    stock: 32,
    active: true,
    featured: true,
    material: "Zirkon taş, antialerjik kaplama",
    delivery: "1-3 iş günü içinde kargoya teslim edilir.",
  },
  {
    id: 4,
    name: "Noir Minimal Yüzük",
    slug: "noir-minimal-yuzuk",
    description:
      "Siyah taş vurgulu modern yüzük. Sade kombinlere güçlü ve rafine bir dokunuş ekler.",
    price: 399.9,
    category: "Yüzük",
    imageUrl:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
    stock: 9,
    active: true,
    featured: true,
    badge: "Sınırlı Stok",
    material: "Çelik gövde, siyah taş detay",
    delivery: "2-4 iş günü içinde kargoya teslim edilir.",
  },
  {
    id: 5,
    name: "Aurora Katmanlı Kolye",
    slug: "aurora-katmanli-kolye",
    description:
      "İki katmanlı zincir formu ve parlak yüzeyiyle sade elbiseleri bile tamamlanmış gösteren güçlü bir parça.",
    price: 749.9,
    category: "Kolye",
    imageUrl:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=85",
    stock: 0,
    active: true,
    material: "Altın tonlu kaplama",
    delivery: "Stok yenilenince satışa açılır.",
  },
  {
    id: 6,
    name: "Selene Zarif Set",
    slug: "selene-zarif-set",
    description:
      "Kolye ve küpe uyumunu tek kutuda sunan zarif set. Hediye için premium Teddy Jewellry kutusuyla hazırlanır.",
    price: 1199.9,
    oldPrice: 1399.9,
    category: "Set",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
    stock: 13,
    active: true,
    featured: true,
    badge: "Hediye Favorisi",
    material: "Altın kaplama, taş detay",
    delivery: "1-3 iş günü içinde kargoya teslim edilir.",
  },
];

export const categories = ["Tümü", "Kolye", "Bileklik", "Küpe", "Yüzük", "Set"];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug && product.active);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(price);
}

export function getProductDisplayPrice(product: Product) {
  const discountType = product.discountType ?? "NONE";
  const discountValue = product.discountValue ?? 0;
  const minQuantity = product.discountMinQuantity ?? 1;

  if (discountType === "NONE" || minQuantity > 1) {
    return product.price;
  }

  if (discountType === "PERCENT") {
    return Math.max(0, product.price - product.price * (discountValue / 100));
  }

  return Math.max(0, product.price - discountValue);
}
