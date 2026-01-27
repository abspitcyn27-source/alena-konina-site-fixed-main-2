import CTAButtons from "../../../components/CTAButtons";
import { CONTACTS, type Lang } from "../../../lib/content";

export default function ContactsPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang ?? "ru";

  return (
    <main>
      <section className="hero">
        <h1>{lang === "ru" ? "Контакты" : "Contacts"}</h1>
        <p className="muted">
          {lang === "ru"
            ? "Пишите в мессенджеры — это быстрее всего."
            : "Message me — it’s the fastest way."}
        </p>

        <div className="grid twoCol" style={{ marginTop: 18 }}>
          <div className="card">
            <h2>Telegram</h2>
            <p>
              <a className="link" href={CONTACTS.telegramUrl} target="_blank" rel="noreferrer">
                {CONTACTS.telegramUrl}
              </a>
            </p>
          </div>
          <div className="card">
            <h2>WhatsApp</h2>
            <p>
              <a className="link" href={CONTACTS.whatsappUrl} target="_blank" rel="noreferrer">
                {CONTACTS.whatsappUrl}
              </a>
            </p>
          </div>
          <div className="card">
            <h2>Instagram</h2>
            <p>
              <a className="link" href={CONTACTS.instagramUrl} target="_blank" rel="noreferrer">
                @alena.pro.nail
              </a>
            </p>
          </div>
          <div className="card">
            <h2>{lang === "ru" ? "Локация" : "Location"}</h2>
            <p>{lang === "ru" ? CONTACTS.locationRu : CONTACTS.locationEn}</p>
          </div>
          <div className="card">
            <h2>{lang === "ru" ? "Запись" : "Booking"}</h2>
            <p className="muted">
              {lang === "ru"
                ? "Напишите — предложу ближайшие свободные окна."
                : "Message me and I’ll suggest the nearest available slots."}
            </p>
            <div style={{ marginTop: 12 }}>
              <CTAButtons lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
