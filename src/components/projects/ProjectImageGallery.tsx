"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ProjectType } from "@/types";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/i18n";

type ProjectImageGalleryProps = {
  screenshots: NonNullable<ProjectType["screenshots"]>;
  projectSlug?: string;
};

export default function ProjectImageGallery({ screenshots, projectSlug }: ProjectImageGalleryProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname ?? "/");
  const galleryText = locale === "en" ? {
    gallery: "Project image gallery",
    open: "Open image in large view",
    previous: "Previous image",
    next: "Next image",
    dialog: "Large project image",
    closeBackground: "Close large image background",
    close: "Close large image",
    previousLarge: "Previous large image",
    nextLarge: "Next large image",
  } : locale === "de" ? {
    gallery: "Projekt-Bildergalerie",
    open: "Bild groß öffnen",
    previous: "Vorheriges Bild",
    next: "Nächstes Bild",
    dialog: "Großes Projektbild",
    closeBackground: "Hintergrund des großen Bildes schließen",
    close: "Großes Bild schließen",
    previousLarge: "Vorheriges großes Bild",
    nextLarge: "Nächstes großes Bild",
  } : locale === "fr" ? {
    gallery: "Galerie d'images du projet",
    open: "Ouvrir l'image en grand",
    previous: "Image précédente",
    next: "Image suivante",
    dialog: "Grande image du projet",
    closeBackground: "Fermer l'arrière-plan de la grande image",
    close: "Fermer la grande image",
    previousLarge: "Grande image précédente",
    nextLarge: "Grande image suivante",
  } : locale === "es" ? {
    gallery: "Galería de imágenes del proyecto",
    open: "Abrir imagen en vista grande",
    previous: "Imagen anterior",
    next: "Imagen siguiente",
    dialog: "Imagen grande del proyecto",
    closeBackground: "Cerrar fondo de la imagen grande",
    close: "Cerrar imagen grande",
    previousLarge: "Imagen grande anterior",
    nextLarge: "Imagen grande siguiente",
  } : locale === "ar" ? {
    gallery: "معرض صور المشروع",
    open: "افتح الصورة بحجم كبير",
    previous: "الصورة السابقة",
    next: "الصورة التالية",
    dialog: "صورة مشروع كبيرة",
    closeBackground: "أغلق خلفية الصورة الكبيرة",
    close: "أغلق الصورة الكبيرة",
    previousLarge: "الصورة الكبيرة السابقة",
    nextLarge: "الصورة الكبيرة التالية",
  } : locale === "ru" ? {
    gallery: "Галерея изображений проекта",
    open: "Открыть изображение крупно",
    previous: "Предыдущее изображение",
    next: "Следующее изображение",
    dialog: "Крупное изображение проекта",
    closeBackground: "Закрыть фон крупного изображения",
    close: "Закрыть крупное изображение",
    previousLarge: "Предыдущее крупное изображение",
    nextLarge: "Следующее крупное изображение",
  } : locale === "pt" ? {
    gallery: "Galeria de imagens do projeto",
    open: "Abrir imagem em visualização grande",
    previous: "Imagem anterior",
    next: "Próxima imagem",
    dialog: "Imagem grande do projeto",
    closeBackground: "Fechar fundo da imagem grande",
    close: "Fechar imagem grande",
    previousLarge: "Imagem grande anterior",
    nextLarge: "Próxima imagem grande",
  } : {
    gallery: "Proje görsel galerisi",
    open: "Görseli büyük aç",
    previous: "Önceki görsel",
    next: "Sonraki görsel",
    dialog: "Büyük proje görseli",
    closeBackground: "Büyük görsel arka planını kapat",
    close: "Büyük görseli kapat",
    previousLarge: "Önceki büyük görsel",
    nextLarge: "Sonraki büyük görsel",
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const active = screenshots[activeIndex];
  const hasMultiple = screenshots.length > 1;
  const isMarketplaceXml = projectSlug === "pazaryeri-xml-entegrasyonu";

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? screenshots.length - 1 : current - 1));
  }, [screenshots.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current === screenshots.length - 1 ? 0 : current + 1));
  }, [screenshots.length]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("project-gallery-open");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft" && hasMultiple) goToPrevious();
      if (event.key === "ArrowRight" && hasMultiple) goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("project-gallery-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious, hasMultiple, isOpen]);

  return (
    <section aria-label={galleryText.gallery} className="w-full">
      <figure className="relative overflow-hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`relative block aspect-[16/10] max-h-[430px] w-full cursor-zoom-in ${isMarketplaceXml ? "lg:translate-x-8 lg:translate-y-6" : ""}`}
          aria-label={galleryText.open}
        >
          <Image
            src={active.src}
            alt={active.altTr ?? active.alt}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 560px, 100vw"
            priority={activeIndex === 0}
          />
        </button>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center bg-black/55 text-white transition-colors hover:bg-black/75"
              aria-label={galleryText.previous}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center bg-black/55 text-white transition-colors hover:bg-black/75"
              aria-label={galleryText.next}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </figure>
      {hasMultiple && (
        <p className="mt-2 text-right text-xs font-bold text-gray-500">
          {activeIndex + 1} / {screenshots.length}
        </p>
      )}

      <style jsx global>{`
        body.project-gallery-open > *:not(.project-gallery-portal):not(script):not(style) {
          filter: blur(8px);
        }
      `}</style>

      {isOpen && typeof document !== "undefined" && createPortal(
        <div
          className="project-gallery-portal fixed inset-0 z-[100] p-2 md:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={galleryText.dialog}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsOpen(false)}
            aria-label={galleryText.closeBackground}
          />

          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <div className="relative aspect-video w-[calc(100vw-16px)] max-w-[1800px] max-h-[calc(100vh-16px)] md:w-[calc(100vw-32px)] md:max-h-[calc(100vh-32px)]">
              <Image
                src={active.src}
                alt={active.altTr ?? active.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 z-10 grid size-11 place-items-center bg-black/70 text-white transition-colors hover:bg-black/90 md:size-12"
                aria-label={galleryText.close}
              >
                <X size={26} />
              </button>

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center bg-black/70 text-white transition-colors hover:bg-black/90 md:size-12"
                    aria-label={galleryText.previousLarge}
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center bg-black/70 text-white transition-colors hover:bg-black/90 md:size-12"
                    aria-label={galleryText.nextLarge}
                  >
                    <ChevronRight size={28} />
                  </button>

                  <p className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 bg-black/70 px-3 py-1.5 text-sm font-bold text-white">
                    {activeIndex + 1} / {screenshots.length}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
