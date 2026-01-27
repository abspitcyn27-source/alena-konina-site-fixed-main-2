import HomeHero from "@/components/HomeHero";
import ServiceTiles from "@/components/ServiceTiles";
import WorksStrip from "@/components/WorksStrip";
import CTAButtons from "@/components/CTAButtons";
import { CONTACTS, COPY, type Lang } from "@/lib/content";

export default function LangHome({ params }: { params: { lang: Lang } }) {
  const lang = params.lang === "en" ? "en" : "ru";
  const t = COPY[lang];

  return (
    <main>
      <HomeHero lang={lang} />

      <section className="section sectionTight">
        <div className="sectionHead">
          <h2 className="h1">{lang === "ru" ? "Услуги и цены" : "Services & prices"}</h2>
          <p className="lead">
            {lang === "ru"
              ? "Выберите услугу — откроется галерея с примерами работ."
              : "Pick a service — it opens a gallery with examples."}
          </p>
        </div>
        <ServiceTiles lang={lang} />
      </section>

      <section className="section">
        <div className="sectionHead">
          <h2 className="h1">{lang === "ru" ? "Работы" : "Works"}</h2>
          <p className="lead">
            {lang === "ru"
              ? "Небольшое превью — больше примеров в услугах."
              : "Quick preview — more examples in Services."}
          </p>
        </div>
        <WorksStrip />
        <div style={{ marginTop: 14 }}>
          <CTAButtons lang={lang} />
        </div>
      </section>

      <section className="section sectionTight">
        <div className="sectionHead">
          <h2 className="h1">Instagram</h2>
          <p className="lead">
            {lang === "ru"
              ? "Больше работ и видео — в Instagram профиле."
              : "More works and videos — on Instagram."}
          </p>
        </div>
        <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <div className="muted">@alena.pro.nail</div>
          <a className="btn btnPrimary" href={CONTACTS.instagramUrl} target="_blank" rel="noreferrer">
            {lang === "ru" ? "Открыть Instagram" : "Open Instagram"}
          </a>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card" style={{ gridColumn: "span 12" }}>
            <h2 className="h1">{t.whyTitle}</h2>
            <ul className="list">
              {t.whyItems.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ gridColumn: "span 12" }}>
            <h2 className="h1">{t.locationTitle}</h2>
            <p className="muted">{t.locationText}</p>
            <div style={{ marginTop: 12 }}>
              <CTAButtons lang={lang} />
            </div>
          </div>

          <div className="card" style={{ gridColumn: "span 12" }}>
            <h2 className="h1">{t.academyTitle}</h2>
            <p className="muted">{t.academyText}</p>
            <div style={{ marginTop: 12 }}>
              <CTAButtons lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
