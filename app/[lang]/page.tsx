"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { COPY, type Lang } from "@/lib/content";
import { PRICE_ITEMS } from "@/lib/prices";
import { HERO_MEDIA } from "@/lib/siteConfig";
import CTAButtons from "@/components/CTAButtons";

const HOME_SERVICE_IDS = [
  "manicure-light",
  "manicure-hard",
  "extensions-light",
  "extensions-hard",
  "pedicure",
  "hyperkeratosis",
];

const BIO = {
  ru: "Занимаюсь ногтями с детства. В 14 уже делала наращивание. В 20 переехала в Москву и превратила хобби в профессию. Многократный призёр чемпионатов мира. Сертифицированный судья «Золотые руки мира».",
  en: "I've been doing nails since childhood. At 14 I was doing gel extensions. At 20 I moved to Moscow and turned a hobby into a profession. Multiple world championship prizewinner. Certified judge of the Golden Hands of the World.",
};

export default function HomePage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang === "en" ? "en" : "ru";
  const t = COPY[lang];
  const videoRef = useRef<HTMLVideoElement>(null);

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
          <div className="newHeroBigWrap">
            <div className="newHeroBigText" aria-hidden>AK</div>
            <p className="newHeroBio">{BIO[lang]}</p>
          </div>
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
              <div className="newStatNum">🏆</div>
              <div className="newStatLabel">{lang === "ru" ? "Призёр ЧМ" : "World prize"}</div>
            </div>
            <div className="newStat">
              <div className="newStatNum">ЦАО</div>
              <div className="newStatLabel">{lang === "ru" ? "Пресня" : "Presnya"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      {HERO_MEDIA.type === "video" && (
        <section className="newVideoSection" aria-label={lang === "ru" ? "Видео" : "Video"}>
          <div className="newSecHead">
            <div className="newSecTitle">
              {lang === "ru" ? "— Посмотри как это выглядит" : "— See it in action"}
            </div>
          </div>
          <div className="newVideoWrap">
            <video
              ref={videoRef}
              className="newVideo"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={HERO_MEDIA.poster}
              src={HERO_MEDIA.src}
            />
          </div>
        </section>
      )}

      {/* SERVICES */}
      <section className="newSvcSection" aria-label={lang === "ru" ? "Услуги" : "Services"}>
        <div className="newSecHead">
          <div className="newSecTitle">
            {lang === "ru" ? "— Услуги и цены" : "— Services & pricing"}
          </div>
          <Link href={`/${lang}/portfolio`} className="newSecLink">
            {lang === "ru" ? "Все услуги →" : "All services →"}
          </Link>
        </div>
        <div className="newSvcScroll">
          <div className="newSvcTrack">
            {services.map((item, i) => item && (
              <Link
                key={item.id}
                href={`/${lang}/portfolio/${encodeURIComponent(item.id)}`}
                className={`newSvcCard${i === 0 ? " newSvcCardFeat" : ""}`}
                aria-label={`${item.title[lang]} — ${item.price}`}
              >
                <div className="newSvcBgNum">0{i + 1}</div>

                {/* Обложка */}
                <div className="newSvcCover">
                  <Image
                    src={item.coverSrc}
                    alt={item.title[lang]}
                    fill
                    sizes="260px"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="newSvcCoverOverlay" />
                </div>

                <div className="newSvcContent">
                  <div>
                    <div className="newSvcTag">
                      {i === 0 ? (lang === "ru" ? "★ Хит" : "★ Top") : `0${i + 1}`}
                    </div>
                    <div className="newSvcName">{item.title[lang]}</div>
                  </div>
                  <div className="newSvcBottom">
                    <div className="newSvcPrice">{item.price}</div>
                    <div className="newSvcArr">→</div>
                  </div>
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
