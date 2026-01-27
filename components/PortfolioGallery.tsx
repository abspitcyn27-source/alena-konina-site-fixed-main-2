"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { PriceItem } from "@/lib/prices";

type Props = {
  lang: "ru" | "en";
  item: PriceItem;
};

export default function PortfolioGallery({ lang, item }: Props) {
  const images = useMemo(() => {
    if (item.gallery && item.gallery.length) return item.gallery;
    return [{ src: item.coverSrc, alt: item.title }];
  }, [item]);

  const [open, setOpen] = useState<number | null>(null);

  const active = open !== null ? images[open] : null;
  const activeSrc = active?.src;
  const activeAlt = active?.alt?.[lang] ?? "";

  useEffect(() => {
    if (open === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v === null ? 0 : Math.min(v + 1, images.length - 1)));
      if (e.key === "ArrowLeft") setOpen((v) => (v === null ? 0 : Math.max(v - 1, 0)));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, images.length]);

  return (
    <>
      <div className="portfolioGrid" aria-label={lang === "ru" ? "Галерея" : "Gallery"}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="portfolioThumb"
            onClick={() => setOpen(i)}
            aria-label={(img.alt?.[lang] ?? item.title[lang]) + ` (${i + 1})`}
          >
            <Image
              src={img.src}
              alt={img.alt?.[lang] ?? ""}
              fill
              sizes="(max-width: 600px) 50vw, (max-width: 1100px) 25vw, 18vw"
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>

      {open !== null ? (
        <div className="portModal" role="dialog" aria-modal="true" aria-label={item.title[lang]}>
          <div className="portModalBackdrop" onClick={() => setOpen(null)} />

          <div className="portModalCard">
            <div className="portModalHeader">
              <div className="portModalTitle">{item.title[lang]}</div>
              <button type="button" className="portModalClose" onClick={() => setOpen(null)} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="portModalBody">
              <button
                type="button"
                className="portNav portNavLeft"
                onClick={() => setOpen((v) => (v === null ? 0 : Math.max(v - 1, 0)))}
                disabled={open === 0}
                aria-label="Previous"
              >
                ‹
              </button>

              <div className="portModalImageWrap">
                {activeSrc ? (
                  <Image
                    key={activeSrc}
                    src={activeSrc}
                    alt={activeAlt}
                    width={1200}
                    height={900}
                    className="portModalImage"
                    priority
                  />
                ) : null}
              </div>

              <button
                type="button"
                className="portNav portNavRight"
                onClick={() => setOpen((v) => (v === null ? 0 : Math.min(v + 1, images.length - 1)))}
                disabled={open === images.length - 1}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
