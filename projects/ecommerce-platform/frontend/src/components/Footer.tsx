import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Teddy Jewellry</h2>
        <p>
          Günlük şıklığı zarif takılarla tamamlayan, modern ve ulaşılabilir
          takı deneyimi.
        </p>
      </div>
      <div>
        <h3>Sayfalar</h3>
        <Link href="/products">Ürünler</Link>
        <Link href="/about">Hakkımızda</Link>
        <Link href="/contact">İletişim</Link>
      </div>
      <div>
        <h3>Bilgilendirme</h3>
        <Link href="/legal">KVKK ve Gizlilik</Link>
        <Link href="/legal">İade ve Değişim</Link>
        <Link href="/legal">Mesafeli Satış Sözleşmesi</Link>
      </div>
      <div>
        <h3>İletişim</h3>
        <p>teddyjewellry@gmail.com</p>
        <p>Instagram: @teddyjewellry</p>
      </div>
    </footer>
  );
}
