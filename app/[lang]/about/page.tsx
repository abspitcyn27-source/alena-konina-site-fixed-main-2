import CTAButtons from "../../../components/CTAButtons";
import { CONTACTS, type Lang } from "../../../lib/content";

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : params.lang === "es" ? "es" : "ru";

  const title = lang === "ru" ? "О мастере" : lang === "es" ? "Sobre mí" : "About";
  const intro =
    lang === "ru"
      ? "Меня зовут Алёна. Я делаю маникюр и педикюр в спокойной атмосфере — аккуратно, стерильно и без спешки."
      : lang === "es"
      ? "Me llamo Alena. Hago manicura y pedicura en un ambiente tranquilo — con cuidado, higiene y sin prisas."
      : "Hi! I'm Alena. I do manicure and pedicure in a calm setting — clean, safe, and unhurried.";

  return (
    <main>
      <section className="hero">
        <h1>{title}</h1>
        <p className="muted">{intro}</p>

        <div className="grid twoCol" style={{ marginTop: 18 }}>
          <div className="card">
            <h2>{lang === "ru" ? "Подход" : lang === "es" ? "Mi enfoque" : "Approach"}</h2>
            <ul className="list">
              <li>{lang === "ru" ? "Стерильность и безопасность" : lang === "es" ? "Limpieza y seguridad" : "Clean & safe process"}</li>
              <li>{lang === "ru" ? "Индивидуальный подбор формы и покрытия" : lang === "es" ? "Forma y diseño personalizados" : "Personalized shape & design"}</li>
              <li>{lang === "ru" ? "Комфортная атмосфера без потока" : lang === "es" ? "Ambiente privado y tranquilo" : "Private, calm atmosphere"}</li>
            </ul>
          </div>

          <div className="card">
            <h2>{lang === "ru" ? "Локация" : lang === "es" ? "Ubicación" : "Location"}</h2>
            <p>{lang === "ru" ? CONTACTS.locationRu : lang === "es" ? CONTACTS.locationEs : CONTACTS.locationEn}</p>
            <p className="muted" style={{ marginTop: 8 }}>
              {lang === "ru"
                ? "Точный адрес и схема прохода — после записи."
                : lang === "es"
                ? "La dirección exacta se comparte tras confirmar la cita."
                : "Exact address and directions are shared after booking."}
            </p>
          </div>

          <div className="card">
            <h2>{lang === "ru" ? "Запись" : lang === "es" ? "Reservas" : "Booking"}</h2>
            <p className="muted">
              {lang === "ru"
                ? "Напишите в мессенджеры — предложу ближайшие свободные окна."
                : lang === "es"
                ? "Escríbeme por mensajería — te propondré los huecos más próximos."
                : "Message me — I'll suggest the nearest available slots."}
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
