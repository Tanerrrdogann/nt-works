"use client";

import { FormEvent, useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { projects } from "@/data/projects";
import { BIONLUK_PROFILE_URL } from "@/data/bionluk-links";

const CONTACT_EMAIL = "ismailtanererdogan54@gmail.com";
const WHATSAPP_URL = "https://wa.me/905511955566";
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const projectTypeOptions = [
  { value: "kurumsal-web-sitesi", labelTr: "Kurumsal web sitesi", labelEn: "Business website" },
  { value: "ecommerce-platform", labelTr: "E-ticaret sistemi", labelEn: "E-commerce system" },
  { value: "whatsapp-siparis-katalog", labelTr: "Ürün katalog / WhatsApp sipariş", labelEn: "Product catalog / WhatsApp order" },
  { value: "randevu-rezervasyon-sistemi", labelTr: "Randevu / rezervasyon sistemi", labelEn: "Appointment / reservation system" },
  { value: "admin-panelli-isletme-sistemi", labelTr: "Admin panelli işletme sistemi", labelEn: "Business system with admin panel" },
  { value: "landing-page", labelTr: "Landing page / satış sayfası", labelEn: "Landing page / sales page" },
  { value: "cloud-storage-platform", labelTr: "Cloud dosya yönetim platformu", labelEn: "Cloud file management platform" },
  { value: "task-management-system", labelTr: "Görev yönetim sistemi", labelEn: "Task management system" },
  { value: "ai-log-analysis-panel", labelTr: "AI / log analiz paneli", labelEn: "AI / log analysis panel" },
  { value: "video-analysis-platform", labelTr: "Video analiz platformu", labelEn: "Video analysis platform" }
];

function getProjectTypeLabel(value: string, language: "en" | "tr") {
  const option = projectTypeOptions.find((item) => item.value === value);
  return option ? (language === "tr" ? option.labelTr : option.labelEn) : value;
}

function buildMailToUrl(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildProjectRequestMessage(projectSlug: string, language: "en" | "tr", packageName = "") {
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    return "";
  }

  const title = language === "tr" ? project.titleTr ?? project.title : project.title;

  if (language === "tr") {
    return packageName
      ? `Merhaba, ${title} için ${packageName} paketini istiyorum.`
      : `Merhaba, ${title} projesinin benzerini istiyorum.`;
  }

  return packageName
    ? `Hello, I would like the ${packageName} package for ${title}.`
    : `Hello, I would like a similar project to ${title}.`;
}

export default function ContactPage() {
  const { t, language } = useLanguage();
  const getInitialProject = () => {
    if (typeof window === "undefined") {
      return "";
    }

    return new URLSearchParams(window.location.search).get("project") ?? "";
  };
  const getInitialPackage = () => {
    if (typeof window === "undefined") {
      return "";
    }

    return new URLSearchParams(window.location.search).get("package") ?? "";
  };
  const initialProject = getInitialProject();
  const initialPackage = getInitialPackage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(initialProject);
  const [message, setMessage] = useState(() =>
    initialProject ? buildProjectRequestMessage(initialProject, language, initialPackage) : ""
  );
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const subject = useMemo(() => {
    const selectedProject = projectType.trim();
    return selectedProject
      ? `NT Web Çözümleri proje talebi - ${getProjectTypeLabel(selectedProject, "tr")}`
      : "NT Web Çözümleri proje talebi";
  }, [projectType]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Ad: ${name || "-"}`,
      `E-posta: ${email || "-"}`,
      `Proje türü: ${projectType ? getProjectTypeLabel(projectType, language) : "-"}`,
      "",
      "Mesaj:",
      message || "-"
    ].join("\n");

    if (!WEB3FORMS_ACCESS_KEY) {
      window.location.href = buildMailToUrl(subject, body);
      return;
    }

    setSubmitState("sending");
    setSubmitMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: name || "NT Web Çözümleri formu",
          email: email || CONTACT_EMAIL,
          to: CONTACT_EMAIL,
          project_type: projectType ? getProjectTypeLabel(projectType, language) : "-",
          message: body
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Form gönderilemedi.");
      }

      setSubmitState("success");
      setSubmitMessage("Mesajın gönderildi. En kısa sürede dönüş yapacağız.");
      setName("");
      setEmail("");
      setProjectType("");
      setMessage("");
    } catch {
      setSubmitState("error");
      setSubmitMessage("Mesaj gönderilemedi. Lütfen WhatsApp veya e-posta üzerinden ulaşın.");
    }
  }

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.description")}
        />

        <div className="mx-auto grid max-w-6xl min-w-0 gap-4 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="min-w-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[2rem] sm:p-8"
          >
            <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-5">
              <label className="grid min-w-0 gap-2 text-sm font-semibold text-slate-700">
                {language === "tr" ? "Adın" : "Your name"}
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:bg-white sm:px-4 sm:py-3 sm:text-base"
                  placeholder={language === "tr" ? "Adını yaz" : "Enter your name"}
                />
              </label>

              <label className="grid min-w-0 gap-2 text-sm font-semibold text-slate-700">
                {language === "tr" ? "E-posta adresin" : "Your email"}
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:bg-white sm:px-4 sm:py-3 sm:text-base"
                  placeholder={language === "tr" ? "ornek@mail.com" : "name@example.com"}
                />
              </label>

              <label className="grid min-w-0 gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
                {language === "tr" ? "İlgilendiğin proje türü" : "Project type"}
                <select
                  value={projectType}
                  onChange={(event) => {
                    const nextProject = event.target.value;
                    setProjectType(nextProject);
                    setMessage(nextProject ? buildProjectRequestMessage(nextProject, language) : "");
                  }}
                  className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:bg-white sm:px-4 sm:py-3 sm:text-base"
                >
                  <option value="">{language === "tr" ? "Seç veya boş bırak" : "Select or leave blank"}</option>
                  {projectTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {language === "tr" ? option.labelTr : option.labelEn}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid min-w-0 gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
                {language === "tr" ? "Mesajın" : "Message"}
                <textarea
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={4}
                  className="min-w-0 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:bg-white sm:px-4 sm:py-3 sm:text-base"
                  placeholder={
                    language === "tr"
                      ? "İhtiyacını, örnek aldığın projeyi veya işletme türünü yazabilirsin."
                      : "Describe the need, reference project or business type."
                  }
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={submitState === "sending"}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:mt-6 sm:px-5 sm:py-3 sm:text-sm"
            >
              {submitState === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
            </button>

            {submitMessage && (
              <p
                className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-medium ${
                  submitState === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-amber-200 bg-amber-50 text-amber-800"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>

          <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[2rem] sm:p-8">
            <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:bg-white sm:p-5"
              >
                <p className="text-sm text-slate-500">E-posta</p>
                <p className="mt-1 break-words font-semibold text-slate-950">
                  {CONTACT_EMAIL}
                </p>
              </a>

              <a
                href={BIONLUK_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:bg-white sm:p-5"
              >
                <p className="text-sm text-slate-500">Bionluk</p>
                <p className="mt-1 font-semibold text-slate-950">
                  {language === "tr" ? "Bionluk üzerinden satın al" : "Buy through Bionluk"}
                </p>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:bg-white sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5 fill-current">
                      <path d="M16.02 4C9.4 4 4.02 9.38 4.02 16c0 2.12.56 4.19 1.62 6.02L4 28l6.13-1.61A11.9 11.9 0 0 0 16.02 28C22.64 28 28 22.62 28 16S22.64 4 16.02 4Zm0 21.9c-1.82 0-3.6-.49-5.16-1.42l-.37-.22-3.64.96.97-3.55-.24-.37A9.83 9.83 0 0 1 6.12 16c0-5.45 4.44-9.9 9.9-9.9 5.45 0 9.88 4.45 9.88 9.9 0 5.46-4.43 9.9-9.88 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">WhatsApp</p>
                    <p className="mt-1 break-words font-semibold text-slate-950">
                      0 551 195 55 66
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-950 sm:mt-8 sm:p-6">
              <h2 className="text-xl font-black sm:text-2xl">{t("contact.noteTitle")}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                {t("contact.noteDescription")}
              </p>
              <div className="mt-4 sm:mt-5">
                <Button href="/projects" className="h-10 min-h-10 px-4 text-xs sm:h-12 sm:min-h-12 sm:px-5 sm:text-sm">
                  {t("contact.viewProjects")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
