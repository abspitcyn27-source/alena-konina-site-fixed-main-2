"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { type PriceItem } from "@/lib/prices";

type Props = {
  lang: "ru" | "en";
  items: PriceItem[];
  initialOpenId?: string;
};

export default function PriceGrid({ lang, items, initialOpenId }: Props) {
  const [openItem, setOpenItem] = useState<PriceItem | null>(null);
  const [index, setIndex] = useState(0);

  const isOpen = Boolean(openItem);

  // Open from URL (server passes initialOpenId): /prices?open=<id>
  useEffect(() => {
    if (!initialOpenId) return;
    const item = items.find((x) => x.id === initialOpenId);
    if (!item) return;
    setOpenItem(item);
    setIndex(0);
  }, [initialOpenId, items]);

  const activeImages = useMemo(() => openItem?.gallery ?? (openItem ? [{ src: openItem.coverSrc, alt: openItem.title }] : []), [openItem]);

  const activeSrc = activeImages[index]?.src;
  const activeAlt = activeImages[index]?.alt?.[lang] ?? "";

  // Keyboard
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenItem(null);
      if (e.key === "ArrowRight") setIndex((v) => Math.min(v + 1, activeImages.length - 1));
      if (e.key === "ArrowLeft") setIndex((v) => Math.max(v - 1, 0));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, activeImages.length]);

  return (
    <>
      <div className="priceGrid">
        {items.map((item) => {
          const title = item.title[lang];
          const desc = item.description[lang];
          const note = item.note?.[lang];

          return (
            <button
              key={item.id}
              type="button"
              className="priceTile"
              onClick={() => {
                setOpenItem(item);
                setIndex(0);
              }}
              aria-label={`${title} ${item.price}`}
            >
              <div className="priceTileBg" aria-hidden>
                <Image
                  src={item.coverSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority={false}
                />
                <div className="priceTileOverlay" />
              </div>

              <div className="priceTileContent">
                <div className="priceTopRow">
                  <div className="priceTitle">{title}</div>
                  <div className="pricePrice">{item.price}</div>
                </div>
              </div>

              <div className="priceTooltip" role="tooltip">
                <div className="priceTooltipTitle">{title}</div>
                <div className="priceTooltipText">{desc}</div>
                {note ? <div className="priceTooltipNote">{note}</div> : null}
              </div>
            </button>
          );
        })}
      </div>

      {openItem ? (
        <div className="priceModal" role="dialog" aria-modal="true" aria-label={openItem.title[lang]}>
          <div className="priceModalBackdrop" onClick={() => setOpenItem(null)} />

          <div className="priceModalCard">
            <div className="priceModalHeader">
              <div>
                <div className="priceModalTitle">{openItem.title[lang]}</div>
                <div className="priceModalSub">
                  <span className="priceModalPrice">{openItem.price}</span>
                  {openItem.note?.[lang] ? <span className="priceModalNote"> · {openItem.note[lang]}</span> : null}
                </div>
              </div>
              <button type="button" className="priceModalClose" onClick={() => setOpenItem(null)} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="priceModalDesc">{openItem.description[lang]}</div>

            <div className="priceModalBody">
              <button
                type="button"
                className="priceNav priceNavLeft"
                onClick={() => setIndex((v) => Math.max(v - 1, 0))}
                disabled={index === 0}
                aria-label="Previous"
              >
                ‹
              </button>

              <div className="priceModalImageWrap">
                {activeSrc ? (
                  <Image
                    key={activeSrc}
                    src={activeSrc}
                    alt={activeAlt}
                    width={1400}
                    height={1000}
                    className="priceModalImage"
                    priority
                  />
                ) : null}
              </div>

              <button
                type="button"
                className="priceNav priceNavRight"
                onClick={() => setIndex((v) => Math.min(v + 1, activeImages.length - 1))}
                disabled={index === activeImages.length - 1}
                aria-label="Next"
              >
                ›
              </button>
            </div>

            {activeImages.length > 1 ? (
              <div className="priceThumbs" aria-label="Gallery thumbnails">
                {activeImages.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    className={`priceThumb ${i === index ? "priceThumbActive" : ""}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Image ${i + 1}`}
                  >
                    <Image src={img.src} alt={img.alt?.[lang] ?? ""} width={120} height={90} className="priceThumbImg" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
