import CTAButtons from "../../../components/CTAButtons";
import { CONTACTS, type Lang } from "../../../lib/content";

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang ?? "ru";

  return (
    <main>
      <section className="hero">
        <h1>{lang === "ru" ? "О мастере" : "About"}</h1>
        <p className="muted">
          {lang === "ru"
            ? "Меня зовут Алёна. Я делаю маникюр и педикюр в спокойной атмосфере — аккуратно, стерильно и без спешки."
            : "Hi! I'm Alena. I do manicure and pedicure in a calm setting — clean, safe, and unhurried."}
        </p>

        <div className="grid twoCol" style={{ marginTop: 18 }}>
          <div className="card">
            <h2>{lang === "ru" ? "Подход" : "Approach"}</h2>
            <ul className="list">
              <li>{lang === "ru" ? "Стерильность и безопасность" : "Clean & safe process"}</li>
              <li>{lang === "ru" ? "Индивидуальный подбор формы и покрытия" : "Personalized shape & design"}</li>
              <li>{lang === "ru" ? "Комфортная атмосфера без потока" : "Private, calm atmosphere"}</li>
            </ul>
          </div>

          <div className="card">
            <h2>{lang === "ru" ? "Локация" : "Location"}</h2>
            <p>{lang === "ru" ? CONTACTS.locationRu : CONTACTS.locationEn}</p>
            <p className="muted" style={{ marginTop: 8 }}>
              {lang === "ru"
                ? "Точный адрес и схема прохода — после записи."
                : "Exact address and directions are shared after booking."}
            </p>
          </div>

          <div className="card">
            <h2>{lang === "ru" ? "Запись" : "Booking"}</h2>
            <p className="muted">
              {lang === "ru"
                ? "Напишите в мессенджеры — предложу ближайшие свободные окна."
                : "Message me — I’ll suggest the nearest available slots."}
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
