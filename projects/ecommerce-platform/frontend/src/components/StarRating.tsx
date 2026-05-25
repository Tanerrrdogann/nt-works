export function StarRating({
  rating,
  count,
  compact = false,
}: {
  rating: number;
  count?: number;
  compact?: boolean;
}) {
  const roundedRating = Math.round(rating);

  return (
    <div className={compact ? "rating-row compact" : "rating-row"} aria-label={`${rating} yıldız`}>
      <span className="stars" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) => (
          <span className={star <= roundedRating ? "filled" : ""} key={star}>★</span>
        ))}
      </span>
      <span>{rating.toLocaleString("tr-TR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>
      {typeof count === "number" ? <span>({count} yorum)</span> : null}
    </div>
  );
}
