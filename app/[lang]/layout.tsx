import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import MobileBookingBar from "../../components/MobileBookingBar";
import { CONTACTS, type Lang } from "../../lib/content";

export const metadata: Metadata = {
  title: "Alena Konina — Nails | Moscow",
};

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
        <span>
          © 2024 {CONTACTS.brand}
        </span>
        <span>{lang === "ru" ? CONTACTS.locationRu : CONTACTS.locationEn}</span>
      </footer>

      <MobileBookingBar lang={lang} />
    </div>
  );
}
