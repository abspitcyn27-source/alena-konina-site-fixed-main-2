import Image from "next/image";
import CTAButtons from "../../../components/CTAButtons";
import { CONTACTS, type Lang } from "../../../lib/content";

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : params.lang === "es" ? "es" : "ru";

  const title = lang === "ru" ? "О мастере" : lang === "es" ? "Sobre mí" : "About";

  return (
    <main>
      <section className="hero">
        <h1>{title}</h1>

        <div className="aboutLayout">
          {/* Фото */}
          <div className="aboutPhoto">
            <Image
              src="/gallery/misc/alena.jpg"
              alt="Alena Konina"
              fill
              sizes="(max-width: 860px) 100vw, 400px"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />
          </div>

          {/* Текст */}
          <div className="aboutContent">
            {lang === "ru" && (
              <>
                <p className="muted">
                  Привет! Я Алёна Конина — эксперт по современным техникам маникюра.
                </p>
                <p className="muted">
                  Мне 22 года, и моё увлечение ногтями началось ещё в 14 лет. Без обучений,
                  глядя видео на YouTube, я начала делать наращивание на типсы и нижние формы
                  гелем — себе и подругам. На первое живое обучение решилась в 16 лет, после чего
                  продолжила проходить онлайн-мастер-классы и курсы.
                </p>
                <p className="muted">
                  В 20 лет переехала в Москву — и хобби стало основной работой. Прошла живые
                  курсы у лучших преподавателей Москвы по маникюру, покрытию и моделированию.
                  За 2 года непрерывной практики значительно выросла в качестве работ.
                </p>
                <p className="muted">
                  Сейчас специализируюсь на аккуратном гигиеническом маникюре без порезов
                  и пропилов, качественном покрытии без отслоек, ровной архитектуре, чётких
                  носибельных формах, наращивании даже на сложные ногти и различных дизайнах.
                </p>
                <p className="muted">
                  За это время наработала клиентскую базу, увеличила месячный доход в 6 раз,
                  купила квартиру и побывала в 10+ странах.
                </p>
                <p className="muted">
                  Теперь я готова делиться своим опытом и знаниями с другими.
                </p>
              </>
            )}
            {lang === "en" && (
              <>
                <p className="muted">
                  Hi! I&apos;m Alena Konina — a nail expert specializing in modern techniques.
                </p>
                <p className="muted">
                  I&apos;m 22 years old and my passion for nails started when I was 14. Without
                  formal training — just watching YouTube videos — I began doing gel extensions on
                  tips and lower forms for myself and friends. I attended my first in-person
                  training at 16 and kept taking online masterclasses and courses from there.
                </p>
                <p className="muted">
                  At 20 I moved to Moscow and turned my hobby into my career. I completed in-person
                  courses with Moscow&apos;s best instructors in manicure, gel coverage and nail
                  modeling. Two years of non-stop practice made a huge difference in the quality of
                  my work.
                </p>
                <p className="muted">
                  I now specialize in precise cut-free hygienic manicure, quality no-chip gel
                  coverage, clean nail architecture, wearable shapes, extensions on even the most
                  difficult nails, and a wide range of designs.
                </p>
                <p className="muted">
                  Along the way I built a solid client base, grew my monthly income 6×, bought an
                  apartment and visited 10+ countries.
                </p>
                <p className="muted">
                  Now I&apos;m ready to share my experience and knowledge with others.
                </p>
              </>
            )}
            {lang === "es" && (
              <>
                <p className="muted">
                  ¡Hola! Soy Alena Konina, experta en técnicas modernas de uñas.
                </p>
                <p className="muted">
                  Tengo 22 años y mi pasión por las uñas comenzó a los 14. Sin cursos formales —
                  solo viendo vídeos de YouTube — empecé a hacer extensiones de gel sobre tips y
                  formas inferiores para mí y mis amigas. A los 16 me animé a mi primer curso
                  presencial y seguí formándome con clases magistrales online.
                </p>
                <p className="muted">
                  A los 20 me mudé a Moscú y convertí mi afición en profesión. Realicé cursos
                  presenciales con los mejores instructores de Moscú en manicura, esmaltado y
                  modelado. Dos años de práctica continua supusieron un salto enorme en la calidad
                  de mi trabajo.
                </p>
                <p className="muted">
                  Actualmente me especializo en manicura higiénica precisa sin cortes, cobertura
                  de gel de calidad sin descascarillado, arquitectura equilibrada, formas usables y
                  extensiones incluso en las uñas más difíciles.
                </p>
                <p className="muted">
                  En este camino construí una sólida base de clientes, multipliqué mis ingresos
                  mensuales por 6, compré un piso y visité más de 10 países.
                </p>
                <p className="muted">
                  Ahora estoy lista para compartir mi experiencia y conocimientos con los demás.
                </p>
              </>
            )}

            <div style={{ marginTop: 20 }}>
              <CTAButtons lang={lang} />
            </div>
          </div>
        </div>

        {/* Карточки */}
        <div className="grid twoCol" style={{ marginTop: 24 }}>
          <div className="card">
            <h2>{lang === "ru" ? "Локация" : lang === "es" ? "Ubicación" : "Location"}</h2>
            <p>{lang === "ru" ? CONTACTS.locationRu : lang === "es" ? CONTACTS.locationEs : CONTACTS.locationEn}</p>
            <p className="muted" style={{ marginTop: 8 }}>
              {lang === "ru"
                ? "Точный адрес — после записи."
                : lang === "es"
                ? "La dirección exacta se comparte tras la cita."
                : "Exact address shared after booking."}
            </p>
          </div>
          <div className="card">
            <h2>{lang === "ru" ? "Подход" : lang === "es" ? "Mi enfoque" : "Approach"}</h2>
            <ul className="list">
              <li>{lang === "ru" ? "Без порезов и пропилов" : lang === "es" ? "Sin cortes ni perforaciones" : "No cuts or drill-throughs"}</li>
              <li>{lang === "ru" ? "Покрытие без отслоек" : lang === "es" ? "Cobertura sin descascarillado" : "No-chip coverage"}</li>
              <li>{lang === "ru" ? "Спокойная атмосфера" : lang === "es" ? "Ambiente tranquilo" : "Calm atmosphere"}</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
