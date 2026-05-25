"use client";

import { FormEvent, useMemo, useState } from "react";
import { formatRating, getAverageRating, initialProductReviews, type ProductReview } from "@/lib/reviews";
import { StarRating } from "@/components/StarRating";

export function ProductReviews({ productSlug }: { productSlug: string }) {
  const [reviews, setReviews] = useState<ProductReview[]>(initialProductReviews[productSlug] ?? []);
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const averageRating = useMemo(() => getAverageRating(reviews), [reviews]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextReview: ProductReview = {
      id: `demo-${Date.now()}`,
      author: author.trim() || "Demo müşteri",
      rating,
      comment: comment.trim(),
      createdAt: new Date().toISOString(),
    };

    if (!nextReview.comment) return;

    setReviews((current) => [nextReview, ...current]);
    setAuthor("");
    setRating(5);
    setComment("");
  }

  return (
    <section className="reviews-section">
      <div className="reviews-head">
        <div>
          <p className="eyebrow">Müşteri yorumları</p>
          <h2>Ürün Değerlendirmeleri</h2>
        </div>
        {reviews.length ? (
          <div className="review-score">
            <strong>{formatRating(averageRating)}</strong>
            <StarRating rating={averageRating} count={reviews.length} />
          </div>
        ) : (
          <p className="muted-copy">Bu ürün için ilk yorumu sen ekleyebilirsin.</p>
        )}
      </div>

      <form className="review-form" onSubmit={handleSubmit}>
        <label>
          Adınız
          <input value={author} onChange={(event) => setAuthor(event.target.value)} placeholder="Adınız" />
        </label>
        <label>
          Puan
          <select value={rating} onChange={(event) => setRating(Number(event.target.value))}>
            <option value={5}>5 yıldız</option>
            <option value={4}>4 yıldız</option>
            <option value={3}>3 yıldız</option>
            <option value={2}>2 yıldız</option>
            <option value={1}>1 yıldız</option>
          </select>
        </label>
        <label className="full-field">
          Yorumunuz
          <textarea value={comment} onChange={(event) => setComment(event.target.value)} rows={4} placeholder="Ürünle ilgili deneyiminizi yazın" required />
        </label>
        <button className="btn full" type="submit">Yorumu Ekle</button>
      </form>

      {reviews.length ? (
        <div className="review-list">
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div>
                <strong>{review.author}</strong>
                <StarRating rating={review.rating} compact />
              </div>
              <p>{review.comment}</p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
