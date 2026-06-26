export default function RatingStars({ rating, label = "Ortalama puan", inline = false }: { rating: number; label?: string; inline?: boolean }) {
  const rounded = Number.isInteger(rating) ? rating.toFixed(0) : rating.toFixed(1);

  return (
    <div aria-label={`${label}: ${rounded} / 5`} className={inline ? "inline-flex items-center gap-2" : "inline-flex flex-col gap-1"}>
      <div className="flex items-center gap-1 text-base text-yellow-400" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={index < Math.round(rating) ? "text-yellow-400" : "text-white/20"}>
            ★
          </span>
        ))}
      </div>
      <span className="text-xs font-semibold text-gray-400">{label}: {rounded}/5</span>
    </div>
  );
}
