import Image from "next/image";
import CTAButtons from "./CTAButtons";
import { HERO_MEDIA } from "@/lib/siteConfig";
import { COPY, type Lang } from "@/lib/content";

export default function HomeHero({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  return (
    <section className="heroFull" aria-label="Hero">
      <div className="heroMedia" aria-hidden>
        {HERO_MEDIA.type === "video" ? (
          <video
            className="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_MEDIA.poster}
            src={HERO_MEDIA.src}
          />
        ) : (
          <Image
            src={HERO_MEDIA.src}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="heroOverlay" />
      </div>

      <div className="heroInner">
        <div className="heroContent">
          <div className="heroKicker">
            {lang === "ru" ? "Москва · Пресня" : "Moscow · Presnya"}
          </div>
          <h1 className="heroH1">{t.heroTitle}</h1>
          <div className="heroSubtitle">{t.heroSubtitle}</div>
          <p className="heroText">{t.heroText}</p>
          <CTAButtons lang={lang} />
          <div className="heroNote">
            {lang === "ru" ? "по предварительной записи" : "by appointment only"}
          </div>
        </div>
      </div>
    </section>
  );
}
