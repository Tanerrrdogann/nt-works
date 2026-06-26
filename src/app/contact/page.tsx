"use client";
import { useState, Suspense } from "react";
import { Send, Loader2, ExternalLink, Info, CheckCircle2, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { bionlukLinks } from "@/data/bionluk-links";
import { PageReveal } from "@/components/animations/PageReveal";

const CONTACT_EMAIL = "ismailtanererdogan54@gmail.com";
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

function buildMailToUrl(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") || searchParams.get("project") || "none";

  let initialMessage = "";
  if (defaultService !== "none") {
    const selectedLabel = servicesData.find(s => s.slug === defaultService)?.title || projectsData.find(p => p.slug === defaultService)?.title || defaultService;
    initialMessage = `Merhaba, ${selectedLabel} sistemi için fiyat ve kapsam bilgisi almak istiyorum.`;
  }

  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error" | "fallback">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: defaultService,
    currentSystem: "",
    modules: "",
    budget: "",
    deadline: "",
    bionlukPreference: "",
    referenceLink: "",
    message: initialMessage,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedLabel = servicesData.find(s => s.slug === formData.service)?.title || projectsData.find(p => p.slug === formData.service)?.title || formData.service;
    const subject = `NT Web Çözümleri - Yeni Proje Talebi${selectedLabel && selectedLabel !== "none" ? ` - ${selectedLabel}` : ""}`;
    const body = [
      `Ad: ${formData.name || "-"}`,
      `Firma: ${formData.company || "-"}`,
      `E-posta: ${formData.email || "-"}`,
      `Telefon / WhatsApp: ${formData.phone || "-"}`,
      `İlgilenilen Sistem: ${selectedLabel || "-"}`,
      `Mevcut Sistem: ${formData.currentSystem || "-"}`,
      `İstenen Modüller: ${formData.modules || "-"}`,
      `Tahmini Bütçe: ${formData.budget || "-"}`,
      `Teslim Beklentisi: ${formData.deadline || "-"}`,
      `Bionluk Tercihi: ${formData.bionlukPreference || "-"}`,
      `Dosya / Link / Beğenilen Örnek: ${formData.referenceLink || "-"}`,
      "",
      "Mesaj:",
      formData.message || "-",
    ].join("\n");

    if (!WEB3FORMS_ACCESS_KEY) {
      window.location.href = buildMailToUrl(subject, body);
      setSubmitState("fallback");
      setSubmitMessage("Mail uygulamanız açıldıysa talebi oradan gönderebilirsiniz. Açılmadıysa doğrudan e-posta veya WhatsApp üzerinden ulaşabilirsiniz.");
      return;
    }

    setSubmitState("sending");
    setSubmitMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: formData.name || "NT Web Çözümleri formu",
          email: formData.email || CONTACT_EMAIL,
          phone: formData.phone || "-",
          to: CONTACT_EMAIL,
          project_type: selectedLabel || "-",
          company: formData.company || "-",
          current_system: formData.currentSystem || "-",
          requested_modules: formData.modules || "-",
          budget: formData.budget || "-",
          deadline: formData.deadline || "-",
          bionluk_preference: formData.bionlukPreference || "-",
          reference_link: formData.referenceLink || "-",
          message: body,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Form gönderilemedi.");
      }

      setSubmitState("success");
      setSubmitMessage("Mesajınız gönderildi. En kısa sürede dönüş yapacağız.");
      setFormData({ name: "", company: "", email: "", phone: "", service: "none", currentSystem: "", modules: "", budget: "", deadline: "", bionlukPreference: "", referenceLink: "", message: "" });
    } catch {
      setSubmitState("error");
      setSubmitMessage("Mesaj gönderilemedi. Lütfen WhatsApp veya e-posta üzerinden ulaşın.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="premium-panel relative overflow-hidden bg-[#0b1830]/88 p-8 md:p-10 border border-white/10 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-bold text-gray-400">Adın</label>
        <input required type="text" id="name" value={formData.name} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-sm font-bold text-gray-400">Firma adı (Opsiyonel)</label>
        <input type="text" id="company" value={formData.company} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-bold text-gray-400">E-posta adresin</label>
        <input required type="email" id="email" value={formData.email} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-bold text-gray-400">Telefon / WhatsApp (Opsiyonel)</label>
        <input type="text" id="phone" value={formData.phone} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-bold text-gray-400">İlgilendiğin proje türü</label>
        <select id="service" value={formData.service} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none">
          <option value="none">Emin değilim, uygun çözümü önerin</option>
          <optgroup label="Hizmet Kategorileri">
            {servicesData.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
          </optgroup>
          <optgroup label="Canlı Örnekler">
            {projectsData.map(p => <option key={p.slug} value={p.slug}>{p.title}</option>)}
          </optgroup>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="currentSystem" className="text-sm font-bold text-gray-400">Mevcut sistem var mı?</label>
          <select id="currentSystem" value={formData.currentSystem} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none">
            <option value="">Seçiniz</option>
            <option value="Yok, sıfırdan yapılacak">Yok, sıfırdan yapılacak</option>
            <option value="Var, yenilenecek">Var, yenilenecek</option>
            <option value="Var, ek geliştirme yapılacak">Var, ek geliştirme yapılacak</option>
            <option value="Emin değilim">Emin değilim</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-sm font-bold text-gray-400">Tahmini bütçe aralığı</label>
          <select id="budget" value={formData.budget} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none">
            <option value="">Belirtmek istemiyorum</option>
            <option value="10.000 TL altı">10.000 TL altı</option>
            <option value="10.000 - 25.000 TL">10.000 - 25.000 TL</option>
            <option value="25.000 - 50.000 TL">25.000 - 50.000 TL</option>
            <option value="50.000 TL üzeri">50.000 TL üzeri</option>
            <option value="Kapsama göre netleşsin">Kapsama göre netleşsin</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="deadline" className="text-sm font-bold text-gray-400">Teslim beklentisi</label>
          <select id="deadline" value={formData.deadline} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none">
            <option value="">Net değil</option>
            <option value="Acil">Acil</option>
            <option value="1-2 hafta">1-2 hafta</option>
            <option value="2-4 hafta">2-4 hafta</option>
            <option value="1 ay üzeri">1 ay üzeri</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="bionlukPreference" className="text-sm font-bold text-gray-400">Bionluk üzerinden ilerleme</label>
          <select id="bionlukPreference" value={formData.bionlukPreference} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none">
            <option value="">Fark etmez</option>
            <option value="Bionluk üzerinden ilerlemek istiyorum">Bionluk üzerinden ilerlemek istiyorum</option>
            <option value="Doğrudan iletişim tercih ederim">Doğrudan iletişim tercih ederim</option>
            <option value="Önce kapsamı konuşalım">Önce kapsamı konuşalım</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="modules" className="text-sm font-bold text-gray-400">İstenen modüller / özellikler</label>
        <input type="text" id="modules" value={formData.modules} onChange={handleChange} placeholder="Örn: ürün yönetimi, randevu, stok, rapor, ödeme..." className="bg-[#071225]/88 border border-white/10 p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="referenceLink" className="text-sm font-bold text-gray-400">Dosya / link / beğenilen canlı örnek</label>
        <input type="text" id="referenceLink" value={formData.referenceLink} onChange={handleChange} placeholder="Varsa link veya örnek proje adı yazabilirsiniz" className="bg-[#071225]/88 border border-white/10 p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-bold text-gray-400">Mesajın</label>
        <textarea required id="message" rows={5} value={formData.message} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
      </div>

      {submitMessage && (
        <div className={`flex items-start gap-2 border p-3 text-sm ${submitState === "success" ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200" : submitState === "error" ? "border-red-400/25 bg-red-400/10 text-red-200" : "border-blue-400/25 bg-blue-400/10 text-blue-200"}`}>
          {submitState === "success" ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : submitState === "error" ? <AlertCircle size={18} className="shrink-0 mt-0.5" /> : <Info size={18} className="shrink-0 mt-0.5" />}
          <p>{submitMessage}</p>
        </div>
      )}

      <button type="submit" disabled={submitState === "sending"} className="mt-2 flex justify-center py-4 px-4 text-sm font-bold bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
        {submitState === "sending" ? <Loader2 className="animate-spin" size={20} /> : <span className="flex items-center gap-2">Talebi İlet <Send size={16} /></span>}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto flex flex-col lg:flex-row gap-16" itemClassName="flex-1 min-w-0">
      <div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">İşletmen için uygun sistemi <span className="text-gray-500">birlikte netleştirelim</span></h1>
        <p className="text-xl text-gray-400 mb-12">
          Ne istediğinizden emin değilseniz bile işletme türünüzü, mevcut durumunuzu, aklınızdaki özellikleri ve varsa bütçe/süre beklentinizi yazmanız yeterli.
        </p>
        
        <div className="premium-panel relative overflow-hidden bg-[#0b1830]/88 p-8 border-l-4 border-white mb-10">
          <h3 className="text-xl font-bold mb-3">Ne yazacağınızı bilmiyorsanız</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Form bir ön analiz gibi çalışır. Bütçe aralığı ve teslim beklentisi belirtmek, kapsamı doğru daraltmamıza yardımcı olur; emin olmadığınız alanları boş bırakabilirsiniz.
          </p>
        </div>

        <div className="space-y-8 text-gray-400 border-t border-white/10 pt-10">
          <div>
            <strong className="block text-white mb-2 text-sm uppercase tracking-wider">Doğrudan İletişim</strong>
            <a href="mailto:ismailtanererdogan54@gmail.com" className="hover:text-white transition-colors block mb-1">ismailtanererdogan54@gmail.com</a>
            <a href="https://wa.me/905511955566" target="_blank" className="hover:text-white transition-colors block">WhatsApp: +90 551 195 55 66</a>
          </div>
          <div>
            <strong className="block text-white mb-2 text-sm uppercase tracking-wider">Bionluk Üzerinden İlerle</strong>
            <a href={bionlukLinks.profile} target="_blank" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              Profilimi İncele <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      <div>
        <Suspense fallback={<div className="p-10 border border-white/10 text-center">Yükleniyor...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </PageReveal>
  );
}
