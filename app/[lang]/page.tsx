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
  ru: "Привет! Я Алёна Конина — эксперт по современным техникам маникюра. Мне 22 года, и моё увлечение ногтями началось в 14 лет. Специализируюсь на аккуратном гигиеническом маникюре без порезов, качественном покрытии без отслоек, ровной архитектуре и наращивании даже на сложные ногти.",
  en: "Hi! I'm Alena Konina — a nail expert specializing in modern techniques. I'm 22 and have been passionate about nails since I was 14. I specialize in precise cut-free manicure, quality no-chip gel coverage, clean architecture and extensions on even the most difficult nails.",
  es: "¡Hola! Soy Alena Konina, experta en técnicas modernas de uñas. Tengo 22 años y mi pasión por las uñas comenzó a los 14. Me especializo en manicura precisa sin cortes, cobertura de gel sin descascarillado y extensiones incluso en uñas difíciles.",
};

export default function HomePage({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : params.lang === "es" ? "es" : "ru";
  const t = COPY[lang];
  const videoRef = useRef<HTMLVideoElement>(null);

  const priceLang = lang === "es" ? "en" : lang;
  const services = HOME_SERVICE_IDS
    .map((id) => PRICE_ITEMS.find((x) => x.id === id))
    .filter(Boolean);

  const marqueeItems =
    lang === "ru"
      ? ["Маникюр", "Педикюр", "Наращивание", "Москва · м. 1905 года", "По записи", "Гель-лак", "Укрепление"]
      : lang === "es"
      ? ["Manicura", "Pedicura", "Extensiones", "Moscú · metro 1905", "Solo con cita", "Esmalte gel", "Fortalecimiento"]
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
              {lang === "ru" ? "Мастер ногтевого сервиса" : lang === "es" ? "Artista de uñas" : "Nail artist"}
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
            ) : lang === "es" ? (
              <>
                <span>Uñas que</span>
                <em>hablan</em>
                <span>por</span>
                <em>ti solas.</em>
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
            {lang === "ru" ? "По предварительной записи · Telegram · WhatsApp" : lang === "es" ? "Solo con cita previa · Telegram · WhatsApp" : "By appointment · Telegram · WhatsApp"}
          </div>
        </div>

        <div className="newHeroRight">
          <div className="newHeroBigWrap">
            <div className="newHeroPhotoWrap">
              <Image
                src="/gallery/misc/alena.jpg"
                alt="Alena Konina"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center center" }}
                priority
              />
            </div>
            <p className="newHeroBio">{BIO[lang]}</p>
          </div>
          <div className="newHeroStats">
            <div className="newStat">
              <div className="newStatNum">5+</div>
              <div className="newStatLabel">{lang === "ru" ? "Лет опыта" : lang === "es" ? "Años exp." : "Years exp."}</div>
            </div>
            <div className="newStat">
              <div className="newStatNum">500+</div>
              <div className="newStatLabel">{lang === "ru" ? "Клиентов" : lang === "es" ? "Clientes" : "Clients"}</div>
            </div>
            <div className="newStat">
              <div className="newStatNum">🏆</div>
              <div className="newStatLabel">{lang === "ru" ? "Призёр ЧМ" : lang === "es" ? "Premio mundial" : "World prize"}</div>
            </div>
            <div className="newStat">
              <div className="newStatNum">ЦАО</div>
              <div className="newStatLabel">{lang === "ru" ? "Пресня" : lang === "es" ? "Presnya" : "Presnya"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      {HERO_MEDIA.type === "video" && (
        <section className="newVideoSection" aria-label={lang === "ru" ? "Видео" : "Video"}>
          <div className="newSecHead">
            <div className="newSecTitle">
              {lang === "ru" ? "— Посмотри как это выглядит" : lang === "es" ? "— Mira cómo se ve" : "— See it in action"}
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
      <section className="newSvcSection" aria-label={lang === "ru" ? "Услуги" : lang === "es" ? "Servicios" : "Services"}>
        <div className="newSecHead">
          <div className="newSecTitle">
            {lang === "ru" ? "— Услуги и цены" : lang === "es" ? "— Servicios y precios" : "— Services & pricing"}
          </div>
          <Link href={`/${lang}/portfolio`} className="newSecLink">
            {lang === "ru" ? "Все услуги →" : lang === "es" ? "Todos los servicios →" : "All services →"}
          </Link>
        </div>
        <div className="newSvcScroll">
          <div className="newSvcTrack">
            {services.map((item, i) => item && (
              <Link
                key={item.id}
                href={`/${lang}/portfolio/${encodeURIComponent(item.id)}`}
                className={`newSvcCard${i === 0 ? " newSvcCardFeat" : ""}`}
                aria-label={`${item.title[priceLang]} — ${item.price}`}
              >
                <div className="newSvcBgNum">0{i + 1}</div>

                {/* Обложка */}
                <div className="newSvcCover">
                  {item.coverVideo ? (
                    <video
                      src={item.coverVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  ) : (
                    <Image
                      src={item.coverSrc}
                      alt={item.title[priceLang]}
                      fill
                      sizes="260px"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  <div className="newSvcCoverOverlay" />
                </div>

                <div className="newSvcContent">
                  <div>
                    <div className="newSvcTag">
                      {i === 0 ? (lang === "ru" ? "★ Хит" : "★ Top") : `0${i + 1}`}
                    </div>
                    <div className="newSvcName">{item.title[priceLang]}</div>
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
            : lang === "es"
            ? <>"Cada uña es un <span>pequeño lienzo</span>. Me aseguro de que luzca perfecta."</>
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
