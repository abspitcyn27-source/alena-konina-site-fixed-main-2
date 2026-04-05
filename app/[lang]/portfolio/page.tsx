import ServiceTiles from "@/components/ServiceTiles";
import CTAButtons from "@/components/CTAButtons";
import type { Lang } from "@/lib/content";

export default function ServicesIndex({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : params.lang === "es" ? "es" : "ru";

  return (
    <main>
      <section className="section">
        <div className="sectionHead">
          <h1 className="h1">{lang === "ru" ? "Услуги" : lang === "es" ? "Servicios" : "Services"}</h1>
          <p className="lead">
            {lang === "ru"
              ? "Выберите услугу — откроется галерея с примерами работ."
              : lang === "es"
              ? "Elige un servicio para ver la galería de ejemplos."
              : "Choose a service to open its gallery."}
          </p>
        </div>

        <ServiceTiles lang={lang} />
      </section>

      <section className="section sectionTight" id="booking">
        <div className="sectionHead">
          <h2 className="h1" style={{ marginTop: 0 }}>{lang === "ru" ? "Запись" : lang === "es" ? "Reservas" : "Booking"}</h2>
          <p className="lead">
            {lang === "ru"
              ? "Выберите удобный способ — WhatsApp или Telegram."
              : lang === "es"
              ? "Elige tu mensajería preferida: WhatsApp o Telegram."
              : "Choose your preferred messenger: WhatsApp or Telegram."}
          </p>
        </div>

        <div className="grid twoCol">
          <div className="card">
            <div className="cardTitle">{lang === "ru" ? "Быстрая запись" : lang === "es" ? "Reserva rápida" : "Quick booking"}</div>
            <p className="muted">
              {lang === "ru"
                ? "Нажмите кнопку — откроется чат. Можно сразу отправить фото и пожелания."
                : lang === "es"
                ? "Pulsa el botón para abrir el chat. Puedes enviar fotos y tus preferencias."
                : "Tap a button to open the chat. You can send photos and your preferences."}
            </p>
            <CTAButtons lang={lang} />
          </div>

          <div className="card">
            <div className="cardTitle">{lang === "ru" ? "Что написать" : lang === "es" ? "Qué incluir" : "What to include"}</div>
            <ul className="list">
              <li>{lang === "ru" ? "Желаемая услуга" : lang === "es" ? "Servicio deseado" : "Service"}</li>
              <li>{lang === "ru" ? "Дата и время" : lang === "es" ? "Fecha y hora" : "Date & time"}</li>
              <li>{lang === "ru" ? "Референс/фото (если есть)" : lang === "es" ? "Referencia/foto (opcional)" : "Reference/photo (optional)"}</li>
              <li>{lang === "ru" ? "Снятие/ремонт (если нужно)" : lang === "es" ? "Retirada/reparación (si hace falta)" : "Removal/repair (if needed)"}</li>
            </ul>
            <div className="smallNote">
              {lang === "ru"
                ? "Если не уверены — просто напишите «хочу записаться», я помогу выбрать услугу."
                : lang === "es"
                ? "Si no estás segura, escribe «quiero reservar» — te ayudo a elegir."
                : "If you're not sure, just write "I want to book" — I'll help you choose."}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
