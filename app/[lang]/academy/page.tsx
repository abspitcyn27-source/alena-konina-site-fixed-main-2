import CTAButtons from "../../../components/CTAButtons";
import { type Lang } from "../../../lib/content";

export default function AcademyPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang ?? "ru";

  return (
    <main>
      <section className="hero">
        <h1>{lang === "ru" ? "Обучение" : "Academy"}</h1>
        <p className="muted">
          {lang === "ru"
            ? "Раздел в разработке: онлайн-обучение и офлайн-курсы. Можно оставить заявку через мессенджер."
            : "Work in progress: online education and in-person training. You can request details via messenger."}
        </p>

        <div className="card" style={{ marginTop: 18 }}>
          <h2>{lang === "ru" ? "Что будет" : "What’s coming"}</h2>
          <ul className="list">
            <li>{lang === "ru" ? "Техники маникюра и покрытий" : "Manicure and gel techniques"}</li>
            <li>{lang === "ru" ? "Стерильность и безопасность" : "Safety and sterilization"}</li>
            <li>{lang === "ru" ? "Скорость без потери качества" : "Speed without losing quality"}</li>
            <li>{lang === "ru" ? "Продвижение и работа с клиентами" : "Client work and promotion"}</li>
          </ul>
        </div>

        <div style={{ marginTop: 16 }}>
          <CTAButtons lang={lang} />
        </div>
      </section>
    </main>
  );
}
