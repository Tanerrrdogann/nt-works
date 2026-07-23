"use client";
import { useState } from "react";
import { Send, Loader2, Info, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { getUiText, type UiText } from "@/data/i18n/ui-translations";
import type { Locale } from "@/lib/i18n";
import type { ProjectType, ServiceType } from "@/types";

const CONTACT_EMAIL = "ismailtanererdogan54@gmail.com";
const CONTACT_WHATSAPP = "905511955566";
const GITHUB_URL = "https://github.com/Tanerrrdogann";
const LINKEDIN_URL = "https://www.linkedin.com/in/ismail-taner-erdo%C4%9Fan28632232b";
const BIONLUK_URL = "https://bionluk.com/tanererdogann";
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

function buildMailToUrl(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function getInterestLabel(
  value: string,
  text: UiText,
  localizedServices: ServiceType[],
  localizedProjects: ProjectType[],
) {
  if (!value || value === "none") return text.contact.unsure;
  return localizedServices.find((service) => service.slug === value)?.title
    || localizedProjects.find((project) => project.slug === value)?.title
    || text.contact.unsure;
}

const contextCopy = {
  tr: { title: "Talep bağlamı", source: "Geldiğiniz bölüm", topic: "İlgilendiğiniz konu" },
  en: { title: "Request context", source: "Referring section", topic: "Topic of interest" },
  de: { title: "Anfragekontext", source: "Ausgangsbereich", topic: "Interessenthema" },
  fr: { title: "Contexte de la demande", source: "Section d’origine", topic: "Sujet d’intérêt" },
  es: { title: "Contexto de la solicitud", source: "Sección de origen", topic: "Tema de interés" },
  ar: { title: "سياق الطلب", source: "القسم المحيل", topic: "موضوع الاهتمام" },
  ru: { title: "Контекст заявки", source: "Исходный раздел", topic: "Интересующая тема" },
  pt: { title: "Contexto do pedido", source: "Secção de origem", topic: "Tema de interesse" },
  it: { title: "Contesto della richiesta", source: "Sezione di provenienza", topic: "Tema di interesse" },
  nl: { title: "Aanvraagcontext", source: "Herkomstsectie", topic: "Onderwerp" },
  zh: { title: "需求背景", source: "来源页面", topic: "关注主题" },
};

function cleanContextValue(value: string | null) {
  return value?.replace(/[\r\n\t]+/g, " ").trim().slice(0, 120) || "-";
}

function readableContextValue(value: string) {
  return value === "-" ? value : value.replace(/[-_]+/g, " ");
}

function ContactForm({
  locale,
  localizedServices,
  localizedProjects,
  request,
}: {
  locale: Locale;
  localizedServices: ServiceType[];
  localizedProjects: ProjectType[];
  request: { interest: string; source: string; topic: string };
}) {
  const text = getUiText(locale);
  const validInterestSlugs = new Set([
    ...localizedServices.map((service) => service.slug),
    ...localizedProjects.map((project) => project.slug),
  ]);
  const defaultService = validInterestSlugs.has(request.interest) ? request.interest : "none";
  const source = cleanContextValue(request.source);
  const topic = cleanContextValue(request.topic);
  const requestContext = contextCopy[locale];

  let initialMessage = "";
  if (defaultService !== "none") {
    const selectedLabel = getInterestLabel(defaultService, text, localizedServices, localizedProjects);
    initialMessage = text.contact.initialMessage(selectedLabel);
  }

  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error" | "fallback">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: defaultService,
    message: initialMessage,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedLabel = getInterestLabel(formData.service, text, localizedServices, localizedProjects);
    const subject = `${text.contact.mailSubjectPrefix}${selectedLabel ? ` - ${selectedLabel}` : ""}`;
    const body = [
      `${text.contact.mailFieldName}: ${formData.name || "-"}`,
      `${text.contact.mailFieldCompany}: ${formData.company || "-"}`,
      `${text.contact.mailFieldEmail}: ${formData.email || "-"}`,
      `${text.contact.mailFieldPhone}: ${formData.phone || "-"}`,
      `${text.contact.mailFieldSystem}: ${selectedLabel || "-"}`,
      `${text.contact.mailFieldSource}: ${source}`,
      `${text.contact.mailFieldTopic}: ${topic}`,
      "",
      `${text.contact.mailFieldMessage}:`,
      formData.message || "-",
    ].join("\n");

    if (!WEB3FORMS_ACCESS_KEY) {
      window.location.assign(buildMailToUrl(subject, body));
      setSubmitState("fallback");
      setSubmitMessage(text.contact.sendingFallback);
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
          from_name: formData.name || `${text.contact.mailSubjectPrefix} form`,
          email: formData.email || CONTACT_EMAIL,
          phone: formData.phone || "-",
          to: CONTACT_EMAIL,
          project_type: selectedLabel || "-",
          company: formData.company || "-",
          request_source: source,
          request_topic: topic,
          message: body,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || text.contact.errorMessage);
      }

      setSubmitState("success");
      setSubmitMessage(text.contact.successMessage);
      setFormData({ name: "", company: "", email: "", phone: "", service: "none", message: "" });
    } catch {
      setSubmitState("error");
      setSubmitMessage(text.contact.errorMessage);
    }
  };

  const selectedLabel = getInterestLabel(formData.service, text, localizedServices, localizedProjects);
  const quickWhatsAppMessage = [
    text.contact.quickWhatsAppLines.hello,
    selectedLabel ? `${text.contact.quickWhatsAppLines.interest}: ${selectedLabel}` : "",
    source !== "-" ? `${text.contact.mailFieldSource}: ${source}` : "",
    topic !== "-" ? `${text.contact.mailFieldTopic}: ${topic}` : "",
    formData.name ? `${text.contact.quickWhatsAppLines.name}: ${formData.name}` : "",
    formData.company ? `${text.contact.quickWhatsAppLines.company}: ${formData.company}` : "",
    formData.message ? `${text.contact.quickWhatsAppLines.note}: ${formData.message}` : text.contact.quickWhatsAppLines.fallback,
  ].filter(Boolean).join("\n");

  return (
    <form onSubmit={handleSubmit} className="premium-panel relative overflow-hidden bg-[#0b1830]/88 p-8 md:p-10 border border-white/10 flex flex-col gap-6">
      {(source !== "-" || topic !== "-") && (
        <div className="border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{requestContext.title}</p>
          <div className="mt-3 grid gap-2 text-sm text-gray-400">
            {source !== "-" && <p><span className="font-semibold text-gray-300">{requestContext.source}:</span> {readableContextValue(source)}</p>}
            {topic !== "-" && <p><span className="font-semibold text-gray-300">{requestContext.topic}:</span> {readableContextValue(topic)}</p>}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-bold text-gray-400">{text.contact.formName}</label>
        <input required type="text" id="name" value={formData.name} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-sm font-bold text-gray-400">{text.contact.formCompany}</label>
        <input type="text" id="company" value={formData.company} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-bold text-gray-400">{text.contact.formEmail}</label>
        <input required type="email" id="email" value={formData.email} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-bold text-gray-400">{text.contact.formPhone}</label>
        <input type="text" id="phone" value={formData.phone} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-bold text-gray-400">{text.contact.formService}</label>
        <select id="service" value={formData.service} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none">
          <option value="none">{text.contact.unsure}</option>
          <optgroup label={text.contact.serviceGroup}>
            {localizedServices.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
          </optgroup>
          <optgroup label={text.contact.examplesGroup}>
            {localizedProjects.map(p => <option key={p.slug} value={p.slug}>{p.title}</option>)}
          </optgroup>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-bold text-gray-400">{text.contact.formMessage}</label>
        <textarea required id="message" rows={5} value={formData.message} onChange={handleChange} className="bg-[#071225]/88 border border-white/10 p-3 text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
      </div>

      {submitMessage && (
        <div className={`flex items-start gap-2 border p-3 text-sm ${submitState === "success" ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200" : submitState === "error" ? "border-red-400/25 bg-red-400/10 text-red-200" : "border-blue-400/25 bg-blue-400/10 text-blue-200"}`}>
          {submitState === "success" ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : submitState === "error" ? <AlertCircle size={18} className="shrink-0 mt-0.5" /> : <Info size={18} className="shrink-0 mt-0.5" />}
          <p>{submitMessage}</p>
        </div>
      )}

      {submitState === "success" && (
        <div className="border border-white/10 bg-white/5 p-4 text-sm leading-6 text-gray-400">
          <p className="font-bold text-white">{text.contact.nextStepTitle}</p>
          <p className="mt-2">{text.contact.nextStepBody}</p>
        </div>
      )}

      <button type="submit" disabled={submitState === "sending"} className="mt-2 flex justify-center py-4 px-4 text-sm font-bold bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
        {submitState === "sending" ? <Loader2 className="animate-spin" size={20} /> : <span className="flex items-center gap-2">{text.contact.submit} <Send size={16} /></span>}
      </button>

      <div className="border-t border-white/10 pt-5">
        <a href={buildWhatsAppUrl(quickWhatsAppMessage)} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 border border-white/20 px-4 py-3 text-sm font-bold text-white hover:bg-white/10">
          {text.contact.whatsappQuick} <MessageCircle size={16} />
        </a>
        <p className="mt-3 text-xs leading-5 text-gray-500">
          {text.contact.privacyNote}
        </p>
      </div>
    </form>
  );
}

export default function ContactPageView({
  locale,
  localizedServices,
  localizedProjects,
  request,
}: {
  locale: Locale;
  localizedServices: ServiceType[];
  localizedProjects: ProjectType[];
  request: { interest: string; source: string; topic: string };
}) {
  const text = getUiText(locale);

  return (
    <main className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="flex-1 min-w-0">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">{text.contact.heroTitle} <span className="text-gray-500">{text.contact.heroMuted}</span></h1>
        <p className="text-xl text-gray-400 mb-12">
          {text.contact.heroDescription}
        </p>

        <div className="premium-panel relative overflow-hidden bg-[#0b1830]/88 p-8 border-l-4 border-white mb-10">
          <h3 className="text-xl font-bold mb-3">{text.contact.helpTitle}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {text.contact.helpDescription}
          </p>
          <div className="mt-5 grid gap-2 text-sm text-gray-400">
            {text.contact.helpSteps.map((item, index) => (
              <div key={item} className="flex items-center gap-3 border border-white/10 bg-white/5 px-3 py-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-white text-xs font-bold text-black">{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 text-gray-400 border-t border-white/10 pt-10">
          <div>
            <strong className="block text-white mb-2 text-sm uppercase tracking-wider">{text.contact.directContact}</strong>
            <a href="mailto:ismailtanererdogan54@gmail.com" className="hover:text-white transition-colors block mb-1">ismailtanererdogan54@gmail.com</a>
            <a href={buildWhatsAppUrl(`${text.contact.quickWhatsAppLines.hello} ${text.contact.quickWhatsAppLines.fallback}`)} target="_blank" rel="noreferrer" className="hover:text-white transition-colors block">WhatsApp: +90 551 195 55 66</a>
          </div>
          <div>
            <strong className="block text-white mb-2 text-sm uppercase tracking-wider">{text.contact.trustProfiles}</strong>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors block">GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors block mt-1">LinkedIn</a>
            <a href={BIONLUK_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors block mt-1">{text.footer.bionlukProfile}</a>
            <LocalizedLink href="/safe-bionluk" className="hover:text-white transition-colors block mt-1">{text.contact.safeBionlukNote}</LocalizedLink>
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <ContactForm
          locale={locale}
          localizedServices={localizedServices}
          localizedProjects={localizedProjects}
          request={request}
        />
      </div>
    </main>
  );
}
