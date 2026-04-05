import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import MobileBookingBar from "../../components/MobileBookingBar";
import { CONTACTS, type Lang } from "../../lib/content";

const BASE_URL = "https://alena-konina-site-fixed-main-2.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "en" ? "en" : params.lang === "es" ? "es" : "ru";
  const isRu = lang === "ru";
  const isEs = lang === "es";

  return {
    title: isRu
      ? "Алёна Конина — Маникюр в Москве | м. Улица 1905 года"
      : isEs
      ? "Alena Konina — Uñas en Moscú | metro Ulitsa 1905 Goda"
      : "Alena Konina — Nails in Moscow | Ulitsa 1905 Goda",
    description: isRu
      ? "Профессиональный маникюр, педикюр и наращивание ногтей в Москве. Стерильно, аккуратно, индивидуальный подход. Запись через Telegram и WhatsApp."
      : isEs
      ? "Manicura y pedicura profesional en Moscú. Limpio, seguro, trato personalizado. Reserva por Telegram o WhatsApp."
      : "Professional manicure, pedicure and nail extensions in Moscow. Clean, safe, personal approach. Book via Telegram or WhatsApp.",
    keywords: isRu
      ? ["маникюр Москва", "педикюр Москва", "наращивание ногтей", "маникюр метро 1905 года", "мастер маникюра Москва"]
      : isEs
      ? ["manicura Moscú", "pedicura Moscú", "extensiones uñas Moscú", "uñas Moscú"]
      : ["manicure Moscow", "pedicure Moscow", "nail extensions Moscow", "nails Moscow"],
    authors: [{ name: "Alena Konina" }],
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        ru: `${BASE_URL}/ru`,
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
      },
    },
    openGraph: {
      type: "website",
      locale: isRu ? "ru_RU" : isEs ? "es_ES" : "en_US",
      url: `${BASE_URL}/${lang}`,
      siteName: "Alena Konina Nails",
      title: isRu
        ? "Алёна Конина — Маникюр в Москве"
        : isEs
        ? "Alena Konina — Uñas en Moscú"
        : "Alena Konina — Nails in Moscow",
      description: isRu
        ? "Профессиональный маникюр и педикюр. м. Улица 1905 года."
        : isEs
        ? "Manicura y pedicura profesional. Metro Ulitsa 1905 Goda."
        : "Professional manicure and pedicure. Ulitsa 1905 Goda metro.",
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isRu ? "Алёна Конина — Маникюр" : "Alena Konina — Nails",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isRu ? "Алёна Конина — Маникюр в Москве" : isEs ? "Alena Konina — Uñas en Moscú" : "Alena Konina — Nails",
      description: isRu
        ? "Маникюр, педикюр, наращивание. м. Улица 1905 года."
        : isEs
        ? "Manicura, pedicura, extensiones. Moscú."
        : "Manicure, pedicure, extensions. Moscow.",
      images: [`${BASE_URL}/og-image.jpg`],
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "en" }, { lang: "es" }];
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const lang: Lang = params.lang === "en" ? "en" : params.lang === "es" ? "es" : "ru";

  const location =
    lang === "ru" ? CONTACTS.locationRu :
    lang === "es" ? CONTACTS.locationEs :
    CONTACTS.locationEn;

  return (
    <div className="container">
      <SiteNav lang={lang} />
      {children}

      <footer className="footer" aria-label="Footer">
        <span>© 2024 {CONTACTS.brand}</span>
        <span>{location}</span>
      </footer>

      <MobileBookingBar lang={lang} />
    </div>
  );
}
