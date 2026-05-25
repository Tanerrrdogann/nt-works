import { siteConfig } from "../../src/config/site.config";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 w-full text-center">
      <h1 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter">Hakkımızda</h1>
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-10 md:p-16 relative overflow-hidden text-left">
        {/* Kırmızı Şerit Detayı */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
        
        <h2 className="text-3xl font-black mb-6 uppercase tracking-widest text-white">{siteConfig.company.name}</h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-medium uppercase tracking-wider">
          {siteConfig.company.slogan}
        </p>
        <p className="text-zinc-500 mb-10 text-sm uppercase tracking-widest leading-loose">
          Yılların getirdiği tecrübe ile müşteri memnuniyetini en ön planda tutarak, ekspertiz garantili ve güvenilir premium ikinci el araç alım satım hizmeti sunuyoruz. Gücümüzü şeffaflığımızdan alıyoruz. Hayalinizdeki aracı bulmak için profesyonel ekibimizle daima yanınızdayız.
        </p>
        
        <div className="inline-flex flex-col sm:flex-row gap-6 bg-zinc-950 px-8 py-6 rounded-sm border border-zinc-800 w-full">
          <div className="flex-1">
            <p className="font-black text-zinc-500 uppercase tracking-widest text-xs mb-1">LOKASYON</p>
            <p className="font-bold text-white uppercase tracking-wider text-sm">{siteConfig.company.address}</p>
          </div>
          <div className="hidden sm:block w-px bg-zinc-800"></div>
          <div className="flex-1">
            <p className="font-black text-zinc-500 uppercase tracking-widest text-xs mb-1">ÇALIŞMA SAATLERİ</p>
            <p className="font-bold text-white uppercase tracking-wider text-sm">{siteConfig.company.workingHours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
