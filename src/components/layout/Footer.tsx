"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 py-10">
      <Container className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-bold text-slate-950">NT Web Çözümleri</p>
          <p className="mt-1 text-sm text-slate-500">
            {t("footer.description")}
          </p>
        </div>

        <div className="flex gap-5 text-sm text-slate-500">
          <Link href="/projects" className="hover:text-slate-950">
            {t("nav.projects")}
          </Link>
          <Link href="/services" className="hover:text-slate-950">
            {t("nav.services")}
          </Link>
          <Link href="/contact" className="hover:text-slate-950">
            {t("nav.contact")}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
