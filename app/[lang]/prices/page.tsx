import PriceGrid from "@/components/PriceGrid";
import { PRICE_ITEMS } from "@/lib/prices";
import type { Lang } from "@/lib/content";

export const metadata = {
  title: "Price | Alena Konina",
};

export default function Page({
  params,
  searchParams,
}: {
  params: { lang: Lang };
  searchParams?: { open?: string };
}) {
  const lang = (params.lang === "en" ? "en" : "ru") as "ru" | "en";
  const initialOpenId = searchParams?.open;

  return (
    <main className="page">
      <section className="hero">
        <h1 className="h1">{lang === "ru" ? "Прайс" : "Prices"}</h1>
        
        <p className="lead">
          {lang === "ru"
            ? "Актуальные цены и примеры работ."
            : "Current prices and examples."}
        </p>
      </section>

      <section className="section">
        <PriceGrid lang={lang} items={PRICE_ITEMS} initialOpenId={initialOpenId} />
      </section>
    </main>
  );
}
