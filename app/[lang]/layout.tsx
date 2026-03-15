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
  const lang = params.lang === "en" ? "en" : "ru";
  const isRu = lang === "ru";

  return {
    title: isRu
      ? "Алёна Конина — Маникюр в Москве | м. Улица 1905 года"
      : "Alena Konina — Nails in Moscow | Ulitsa 1905 Goda",
    description: isRu
      ? "Профессиональный маникюр, педикюр и наращивание ногтей в Москве. Стерильно, аккуратно, индивидуальный подход. Запись через Telegram и WhatsApp."
      : "Professional manicure, pedicure and nail extensions in Moscow. Clean, safe, personal approach. Book via Telegram or WhatsApp.",
    keywords: isRu
      ? ["маникюр Москва", "педикюр Москва", "наращивание ногтей", "маникюр метро 1905 года", "мастер маникюра Москва"]
      : ["manicure Moscow", "pedicure Moscow", "nail extensions Moscow", "nails Moscow"],
    authors: [{ name: "Alena Konina" }],
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        ru: `${BASE_URL}/ru`,
        en: `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: isRu ? "ru_RU" : "en_US",
      alternateLocale: isRu ? "en_US" : "ru_RU",
      url: `${BASE_URL}/${lang}`,
      siteName: "Alena Konina Nails",
      title: isRu
        ? "Алёна Конина — Маникюр в Москве"
        : "Alena Konina — Nails in Moscow",
      description: isRu
        ? "Профессиональный маникюр и педикюр. м. Улица 1905 года."
        : "Professional manicure and pedicure. Ulitsa 1905 Goda metro.",
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`, // добавь это изображение в /public/
          width: 1200,
          height: 630,
          alt: isRu ? "Алёна Конина — Маникюр" : "Alena Konina — Nails",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isRu ? "Алёна Конина — Маникюр в Москве" : "Alena Konina — Nails",
      description: isRu
        ? "Маникюр, педикюр, наращивание. м. Улица 1905 года."
        : "Manicure, pedicure, extensions. Moscow.",
      images: [`${BASE_URL}/og-image.jpg`],
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "en" }];
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const lang = params.lang ?? "ru";

  return (
    <div className="container">
      <SiteNav lang={lang} />
      {children}

      <footer className="footer" aria-label="Footer">
        <span>© {new Date().getFullYear()} {CONTACTS.brand}</span>
        <span>{lang === "ru" ? CONTACTS.locationRu : CONTACTS.locationEn}</span>
      </footer>

      <MobileBookingBar lang={lang} />
    </div>
  );
}
