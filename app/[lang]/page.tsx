import Link from "next/link";
import Image from "next/image";
import { CONTACTS, COPY, type Lang } from "@/lib/content";
import { PRICE_ITEMS } from "@/lib/prices";
import { HOME_WORKS_IMAGES } from "@/lib/siteConfig";
import CTAButtons from "@/components/CTAButtons";

// Услуги для показа на главной (без "без покрытия")
const HOME_SERVICE_IDS = [
  "manicure-light",
  "manicure-hard",
  "extensions-light",
  "extensions-hard",
  "pedicure",
  "hyperkeratosis",
];

export default function HomePage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang === "en" ? "en" : "ru";
  const t = COPY[lang];

  const services = HOME_SERVICE_IDS
    .map((id) => PRICE_ITEMS.find((x) => x.id === id))
    .filter(Boolean);

  const marqueeItems = lang === "ru"
    ? ["Маникюр", "Педикюр", "Наращивание", "Москва · м. 1905 года", "По записи", "Гель-лак", "Укрепление"]
    : ["Manicure", "Pedicure", "Extensions", "Moscow · 1905 Goda", "By appointment", "Gel polish"];

  return (
    <div className="newPage">

      {/* MARQUEE */}
      <div className="marqueeWrap" aria-hidden>
        <div className="marqueeTrack">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marqueeItem">
              {item}
              <span className="marqueeDot" />
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="newHero" aria-label="Hero">
        <div className="newHeroLeft">
          <div className="newHeroTag">
            <div className="newHeroTagLine" />
            <div className="newHeroTagText">
              {lang === "ru" ? "Мастер ногтевого сервиса" : "Nail artist"}
            </div>
          </div>

          <h1 className="newH1">
            {lang === "ru" ? (
              <>
                <span>Маникюр,</span>
                <em>который</em>
                <span>говорит</span>
                <em>за тебя.</em>
              </>
            ) : (
              <>
                <span>Nails that</span>
                <em>speak</em>
                <span>for</span>
                <em>themselves.</em>
              </>
            )}
          </h1>

          <p className="newHeroSub">{t.heroText}</p>
          <CTAButtons lang={lang} />
          <div className="newHeroNote">
            {lang === "ru" ? "По предварительной записи · Telegram · WhatsApp" : "By appointment · Telegram · WhatsApp"}
          </div>
        </div>

        <div className="newHeroRight">
          <div className="newHeroBigText" aria-hidden>AK</div>
          <div className="newHeroStats">
            <div className="newStat">
              <div className="newStatNum">5+</div>
              <div className="newStatLabel">{lang === "ru" ? "Лет опыта" : "Years exp."}</div>
            </div>
            <div className="newStat">
              <div className="newStatNum">500+</div>
              <div className="newStatLabel">{lang === "ru" ? "Клиентов" : "Clients"}</div>
            </div>
            <div className="newStat">
              <div className="newStatNum">6</div>
              <div className="newStatLabel">{lang === "ru" ? "Услуг" : "Services"}</div>
            </div>
            <div className="newStat">
              <div className="newStatNum">ЦАО</div>
              <div className="newStatLabel">{lang === "ru" ? "Пресня" : "Presnya"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO STRIP */}
      <section className="newGallerySection" aria-label={lang === "ru" ? "Портфолио" : "Portfolio"}>
        <div className="newSecHead">
          <div className="newSecTitle">
            {lang === "ru" ? "— Портфолио работ" : "— Portfolio"}
          </div>
          <Link href={`/${lang}/portfolio`} className="newSecLink">
            {lang === "ru" ? "Смотреть все →" : "See all →"}
          </Link>
        </div>
        <div className="newGalleryGrid">
          {HOME_WORKS_IMAGES.slice(0, 5).map((src, i) => (
            <Link
              key={src}
              href={`/${lang}/portfolio`}
              className={`newGalleryItem${i === 0 ? " newGalleryItemWide" : ""}`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <div className="newGalleryOverlay" />
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="newSvcSection" aria-label={lang === "ru" ? "Услуги" : "Services"}>
        <div className="newSecHead">
          <div className="newSecTitle">
            {lang === "ru" ? "— Услуги и цены" : "— Services & pricing"}
          </div>
          <div className="newSecLink">{lang === "ru" ? "← прокрути →" : "← scroll →"}</div>
        </div>
        <div className="newSvcScroll">
          <div className="newSvcTrack">
            {services.map((item, i) => item && (
              <Link
                key={item.id}
                href={`/${lang}/portfolio`}
                className={`newSvcCard${i === 0 ? " newSvcCardFeat" : ""}`}
                aria-label={`${item.title[lang]} — ${item.price}`}
              >
                <div className="newSvcBgNum">0{i + 1}</div>
                <div>
                  <div className="newSvcTag">
                    {i === 0 ? (lang === "ru" ? "★ Хит" : "★ Top") : item.title[lang].split(" ")[0]}
                  </div>
                  <div className="newSvcName">{item.title[lang]}</div>
                  <div className="newSvcDesc">{item.description[lang].slice(0, 80)}...</div>
                </div>
                <div className="newSvcBottom">
                  <div className="newSvcPrice">{item.price}</div>
                  <div className="newSvcArr">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <div className="newQuote">
        <div className="newQuoteText">
          {lang === "ru"
            ? <>"Каждый ноготь — это <span>маленький холст</span>. Я делаю так, чтобы он смотрелся идеально."</>
            : <>"Every nail is a <span>tiny canvas</span>. I make sure it looks perfect."</>
          }
        </div>
        <div className="newQuoteSig">
          <div className="newQuoteName">Alena Konina</div>
          <div className="newQuoteRole">Nail artist · Moscow</div>
        </div>
      </div>

    </div>
  );
}
