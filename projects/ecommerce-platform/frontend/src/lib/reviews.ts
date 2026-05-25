export type ProductReview = {
  id: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export const initialProductReviews: Record<string, ProductReview[]> = {
  "luna-inci-kolye": [
    {
      id: "luna-1",
      author: "Elif K.",
      rating: 5,
      comment: "Kutusu ve ürün duruşu çok zarif. Günlük kullanımda da abartılı durmuyor.",
      createdAt: "2026-04-18",
    },
    {
      id: "luna-2",
      author: "Merve A.",
      rating: 4,
      comment: "Hediye olarak aldım, paketleme gerçekten özenliydi.",
      createdAt: "2026-04-26",
    },
  ],
  "rose-kalp-bileklik": [
    {
      id: "rose-1",
      author: "Derya S.",
      rating: 5,
      comment: "İnce ve kibar bir bileklik. Fotoğraftaki gibi duruyor.",
      createdAt: "2026-05-02",
    },
  ],
  "mira-isilti-kupe": [
    {
      id: "mira-1",
      author: "Nisa G.",
      rating: 5,
      comment: "Hafif olması çok iyi, gün boyu rahatsız etmedi.",
      createdAt: "2026-05-08",
    },
  ],
  "selene-zarif-set": [
    {
      id: "selene-1",
      author: "Büşra T.",
      rating: 5,
      comment: "Set olarak çok şık görünüyor, özel gün hediyesi için güzel.",
      createdAt: "2026-04-30",
    },
    {
      id: "selene-2",
      author: "Ayşe D.",
      rating: 4,
      comment: "Kutu sunumu ve parlaklığı hoşuma gitti.",
      createdAt: "2026-05-10",
    },
  ],
  "liva-boncuk-bileklik": [
    {
      id: "liva-1",
      author: "Sena Y.",
      rating: 4,
      comment: "Renkleri canlı, yaz kombinlerine yakışıyor.",
      createdAt: "2026-05-14",
    },
  ],
  "lora-ayarlanabilir-yuzuk": [
    {
      id: "lora-1",
      author: "İrem C.",
      rating: 5,
      comment: "Ayarlanabilir olması hediye alırken çok rahat ettirdi.",
      createdAt: "2026-05-15",
    },
  ],
};

export function getAverageRating(reviews: ProductReview[]) {
  if (!reviews.length) return 0;
  return reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
}

export function formatRating(rating: number) {
  return rating.toLocaleString("tr-TR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}
