import Link from "next/link";
import Image from "next/image";
import { bionlukLinks } from "@/data/bionluk-links";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/14 bg-[#050505]/95 pt-10 md:pt-16 pb-8 px-4 md:px-6 text-white backdrop-blur-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-12 mb-10 md:mb-12">
        <div className="min-w-0">
          <div className="flex items-center gap-1 mb-3 md:mb-4">
            <Image src="/logo.png" alt="NT Logo" width={30} height={30} className="invert opacity-90" />
          </div>
          <p className="text-slate-400 text-xs md:text-sm max-w-sm leading-6">
            İşletmeler için web sitesi, e-ticaret, yönetim panelleri ve özel yazılım sistemleri planlayıp geliştiriyoruz.
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-1.5 md:gap-3">
          <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Hızlı Linkler</h4>
          <Link href="/" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Ana Sayfa</Link>
          <Link href="/services" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Hizmetler</Link>
          <Link href="/projects" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Canlı Örnekler</Link>
          <Link href="/portfolio" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Portföy</Link>
          <Link href="/blog" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Blog</Link>
          <Link href="/testimonials" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Müşteri Yorumları</Link>
          <Link href="/about" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Hakkımızda</Link>
        </div>
        <div className="flex min-w-0 flex-col gap-1.5 md:gap-3">
          <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Hizmetlerimiz</h4>
          <Link href="/services/tanitim-kurumsal-web-siteleri" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Kurumsal Web Sitesi</Link>
          <Link href="/services/urun-katalog-whatsapp-siparis" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Ürün Katalog</Link>
          <Link href="/services/e-ticaret-satis-sistemleri" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">E-Ticaret</Link>
          <Link href="/services/randevu-rezervasyon-sistemleri" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Randevu Sistemi</Link>
          <Link href="/services/admin-panel-isletme-yonetimi" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Admin Panel</Link>
          <Link href="/pazaryeri-entegrasyonu" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Pazaryeri Entegrasyonu</Link>
          <Link href="/maintenance-packages" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Bakım Paketleri</Link>
        </div>
        <div className="flex min-w-0 flex-col gap-1.5 md:gap-3">
          <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">İletişim</h4>
          <Link href="/contact" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Teklif Al</Link>
          <a href="mailto:ismailtanererdogan54@gmail.com" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">E-posta Gönder</a>
          <a href="https://wa.me/905511955566" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">WhatsApp Hattı</a>
          <a href={bionlukLinks.profile} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Bionluk Profili</a>
          <Link href="/safe-bionluk" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Bionluk ile Güvenli Çalışma</Link>
          <Link href="/faq" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">Sık Sorulan Sorular</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-slate-500">
        <Link href="/privacy" className="hover:text-white transition-colors">Gizlilik</Link>
        <Link href="/kvkk" className="hover:text-white transition-colors">KVKK</Link>
        <Link href="/cookies" className="hover:text-white transition-colors">Çerezler</Link>
        <Link href="/terms" className="hover:text-white transition-colors">Çalışma Koşulları</Link>
        <Link href="/support" className="hover:text-white transition-colors">Teslim Sonrası Destek</Link>
        <Link href="/scope-pricing" className="hover:text-white transition-colors">Kapsam ve Fiyatlandırma</Link>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/14 pt-6 md:pt-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} NT Web Çözümleri. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
