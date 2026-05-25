import { Instagram, Mail, MapPin, MessageSquareText } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="page-shell narrow">
      <div className="page-heading">
        <p className="eyebrow">İletişim</p>
        <h1>Bize ulaşın</h1>
        <p>Sipariş, ürün ve teslimat soruları için Teddy Jewellry ekibiyle iletişime geçebilirsiniz.</p>
      </div>
      <div className="contact-grid">
        <div>
          <Mail />
          <strong>E-posta</strong>
          <span>teddyjewellry@gmail.com</span>
        </div>
        <div>
          <Instagram />
          <strong>Instagram</strong>
          <span>@teddyjewellry</span>
        </div>
        <div>
          <MapPin />
          <strong>Adres</strong>
          <span>Şişli / İstanbul</span>
        </div>
        <div>
          <MessageSquareText />
          <strong>Dilek, öneri ve şikayet</strong>
          <span>Soru ve talepleriniz için Instagram veya e-posta üzerinden bize ulaşabilirsiniz.</span>
        </div>
      </div>
    </section>
  );
}
