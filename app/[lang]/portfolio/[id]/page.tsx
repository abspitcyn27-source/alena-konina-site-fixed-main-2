import Link from "next/link";
import { notFound } from "next/navigation";

import PortfolioGallery from "@/components/PortfolioGallery";
import type { Lang } from "@/lib/content";
import { getPriceItem, PRICE_ITEMS } from "@/lib/prices";

export function generateStaticParams() {
  return PRICE_ITEMS.map((x) => ({ id: x.id }));
}

export default function PortfolioItemPage({
  params,
}: {
  params: { lang: Lang; id: string };
}) {
  const lang: Lang = params.lang === "en" ? "en" : params.lang === "es" ? "es" : "ru";
  const priceLang = lang === "es" ? "en" : lang;
  const item = getPriceItem(params.id);
  if (!item) notFound();

  return (
    <main>
      <section className="section">
        <div className="sectionHead">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <Link className="pill" href={`/${lang}/portfolio`}>
              ← {lang === "ru" ? "Назад" : lang === "es" ? "Volver" : "Back"}
            </Link>
            <Link className="pill" href={`/${lang}`}>
              {lang === "ru" ? "Главная" : lang === "es" ? "Inicio" : "Home"}
            </Link>
          </div>

          <h1 className="h1" style={{ marginTop: 14 }}>{item.title[priceLang]}</h1>
          <p className="lead">
            <span className="accentText" style={{ fontWeight: 800 }}>{item.price}</span>
            {item.note?.[priceLang] ? <span className="muted"> · {item.note[priceLang]}</span> : null}
          </p>
          <p className="muted" style={{ maxWidth: "80ch" }}>{item.description[priceLang]}</p>
        </div>

        <PortfolioGallery lang={priceLang} item={item} />
      </section>
    </main>
  );
}
