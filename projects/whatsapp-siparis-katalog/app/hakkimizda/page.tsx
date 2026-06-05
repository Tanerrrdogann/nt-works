import { siteConfig } from "../../src/config/site.config";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 w-full text-center">
      <h1 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-10 uppercase tracking-tighter">Hakkımızda</h1>
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl md:rounded-sm p-5 md:p-16 relative overflow-hidden text-left">
        {/* Kırmızı Şerit Detayı */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
        
        <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-red-600/30 bg-red-600/10 blur-xl md:hidden"></div>

        <h2 className="relative text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-wider md:tracking-widest text-white">{siteConfig.company.name}</h2>
        <p className="relative text-zinc-300 md:text-zinc-400 text-base md:text-lg leading-relaxed mb-5 md:mb-8 font-medium uppercase tracking-wide md:tracking-wider">
          {siteConfig.company.slogan}
        </p>
        <p className="relative text-zinc-500 mb-7 md:mb-10 text-sm uppercase tracking-[0.12em] md:tracking-widest leading-7 md:leading-loose">
          Yılların getirdiği tecrübe ile müşteri memnuniyetini en ön planda tutarak, ekspertiz garantili ve güvenilir premium ikinci el araç alım satım hizmeti sunuyoruz. Gücümüzü şeffaflığımızdan alıyoruz. Hayalinizdeki aracı bulmak için profesyonel ekibimizle daima yanınızdayız.
        </p>
        
        <div className="relative grid grid-cols-2 gap-3 sm:inline-flex sm:flex-row sm:gap-6 bg-zinc-950 px-4 py-4 md:px-8 md:py-6 rounded-xl md:rounded-sm border border-zinc-800 w-full">
          <div className="min-w-0">
            <p className="font-black text-zinc-500 uppercase tracking-widest text-xs mb-1">LOKASYON</p>
            <p className="font-bold text-white uppercase tracking-wide md:tracking-wider text-xs md:text-sm leading-5">{siteConfig.company.address}</p>
          </div>
          <div className="hidden sm:block w-px bg-zinc-800"></div>
          <div className="min-w-0">
            <p className="font-black text-zinc-500 uppercase tracking-widest text-xs mb-1">ÇALIŞMA SAATLERİ</p>
            <p className="font-bold text-white uppercase tracking-wide md:tracking-wider text-xs md:text-sm leading-5">{siteConfig.company.workingHours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
