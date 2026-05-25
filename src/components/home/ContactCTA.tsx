"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ContactCTA() {
  const { language } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <div className="px-4 py-8 text-slate-950 md:px-10 md:py-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                {language === "tr"
                  ? "İşletmen için çalışan bir sistem mi lazım?"
                  : "Need a working system for your business?"}
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-700">
                {language === "tr"
                  ? "Tanıtım sitesi, admin paneli, e-ticaret, dosya yönetimi veya özel dashboard için proje talebi gönderebilirsin."
                  : "Send a project request for a business website, admin panel, e-commerce system, file platform or custom dashboard."}
              </p>
            </div>
            <Button href="/contact">
              {language === "tr" ? "Projem İçin Teklif Al" : "Request a Quote"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
