import ServiceTiles from "@/components/ServiceTiles";
import CTAButtons from "@/components/CTAButtons";
import type { Lang } from "@/lib/content";

export default function ServicesIndex({ params }: { params: { lang: Lang } }) {
  const lang = params.lang === "en" ? "en" : "ru";

  return (
    <main>
      <section className="section">
        <div className="sectionHead">
          <h1 className="h1">{lang === "ru" ? "Услуги" : "Services"}</h1>
          <p className="lead">
            {lang === "ru"
              ? "Выберите услугу — откроется галерея с примерами работ."
              : "Choose a service to open its gallery."}
          </p>
        </div>

        <ServiceTiles lang={lang} />
      </section>

      <section className="section sectionTight" id="booking">
        <div className="sectionHead">
          <h2 className="h1" style={{ marginTop: 0 }}>{lang === "ru" ? "Запись" : "Booking"}</h2>
          <p className="lead">
            {lang === "ru"
              ? "Выберите удобный способ — WhatsApp или Telegram."
              : "Choose your preferred messenger: WhatsApp or Telegram."}
          </p>
        </div>

        <div className="grid twoCol">
          <div className="card">
            <div className="cardTitle">{lang === "ru" ? "Быстрая запись" : "Quick booking"}</div>
            <p className="muted">
              {lang === "ru"
                ? "Нажмите кнопку — откроется чат. Можно сразу отправить фото и пожелания."
                : "Tap a button to open the chat. You can send photos and your preferences."}
            </p>
            <CTAButtons lang={lang} />
          </div>

          <div className="card">
            <div className="cardTitle">{lang === "ru" ? "Что написать" : "What to include"}</div>
            <ul className="list">
              <li>{lang === "ru" ? "Желаемая услуга" : "Service"}</li>
              <li>{lang === "ru" ? "Дата и время" : "Date & time"}</li>
              <li>{lang === "ru" ? "Референс/фото (если есть)" : "Reference/photo (optional)"}</li>
              <li>{lang === "ru" ? "Снятие/ремонт (если нужно)" : "Removal/repair (if needed)"}</li>
            </ul>
            <div className="smallNote">
              {lang === "ru"
                ? "Если не уверены — просто напишите «хочу записаться», я помогу выбрать услугу."
                : "If you’re not sure, just write “I want to book” — I’ll help you choose."}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
