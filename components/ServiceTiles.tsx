import Link from "next/link";
import Image from "next/image";
import { PRICE_ITEMS, type PriceItem } from "@/lib/prices";
import type { Lang } from "@/lib/content";
import { HOME_FEATURED_PRICE_IDS } from "@/lib/siteConfig";

export default function ServiceTiles({ lang }: { lang: Lang }) {
  const items = HOME_FEATURED_PRICE_IDS
    .map((id) => PRICE_ITEMS.find((x) => x.id === id))
    .filter(Boolean) as PriceItem[];

  const priceLang = lang === "es" ? "en" : lang;

  return (
    <div className="tileGrid">
      {items.map((item) => {
        const title = item.title[priceLang];
        const desc = item.description[priceLang];
        return (
          <Link
            key={item.id}
            href={`/${lang}/portfolio/${encodeURIComponent(item.id)}`}
            className="tile"
            aria-label={`${title} — ${item.price}`}
          >
            <div className="tileBg" aria-hidden>
              {item.coverVideo ? (
                <video
                  src={item.coverVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              ) : (
                <Image
                  src={item.coverSrc}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              )}
              <div className="tileOverlay" />
            </div>
            <div className="tileBody">
              <div className="tileTop">
                <div className="tileTitle">{title}</div>
                <div className="tilePrice">{item.price}</div>
              </div>
              <div className="tileDesc">{desc}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
