import CTAButtons from "../../../components/CTAButtons";
import { type Lang } from "../../../lib/content";

export default function AcademyPage({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : params.lang === "es" ? "es" : "ru";

  return (
    <main>
      <section className="hero">
        <h1>{lang === "ru" ? "Обучение" : lang === "es" ? "Academia" : "Academy"}</h1>
        <p className="muted">
          {lang === "ru"
            ? "Раздел в разработке: онлайн-обучение и офлайн-курсы. Можно оставить заявку через мессенджер."
            : lang === "es"
            ? "En desarrollo: cursos online y presenciales. Puedes dejar tu solicitud por mensajería."
            : "Work in progress: online education and in-person training. You can request details via messenger."}
        </p>

        <div className="card" style={{ marginTop: 18 }}>
          <h2>{lang === "ru" ? "Что будет" : lang === "es" ? "Lo que viene" : "What's coming"}</h2>
          <ul className="list">
            <li>{lang === "ru" ? "Техники маникюра и покрытий" : lang === "es" ? "Técnicas de manicura y esmalte" : "Manicure and gel techniques"}</li>
            <li>{lang === "ru" ? "Стерильность и безопасность" : lang === "es" ? "Seguridad y esterilización" : "Safety and sterilization"}</li>
            <li>{lang === "ru" ? "Скорость без потери качества" : lang === "es" ? "Rapidez sin perder calidad" : "Speed without losing quality"}</li>
            <li>{lang === "ru" ? "Продвижение и работа с клиентами" : lang === "es" ? "Captación y fidelización de clientes" : "Client work and promotion"}</li>
          </ul>
        </div>

        <div style={{ marginTop: 16 }}>
          <CTAButtons lang={lang} />
        </div>
      </section>
    </main>
  );
}
