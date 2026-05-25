export default function AboutPage() {
  return (
    <section className="page-shell narrow">
      <div className="page-heading">
        <p className="eyebrow">Marka hikayesi</p>
        <h1>Teddy Jewellry</h1>
        <p>
          Teddy Jewellry, günlük kombinleri zarif ve ulaşılabilir takılarla
          tamamlamak için kurgulanan modern bir takı markasıdır. Her ürün,
          hediye edilebilir bir sunum ve şık bir kullanım hissi hedefiyle seçilir.
        </p>
      </div>
      <div className="story-image">
        <img
          src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&w=1200&q=85"
          alt="Zarif Teddy Jewellry takı sunumu"
        />
      </div>
    </section>
  );
}
