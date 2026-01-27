import Link from "next/link";
import { CONTACTS, NAV, type Lang } from "../lib/content";

function langLabel(lang: Lang) {
  return lang === "ru" ? "RU" : "EN";
}

export default function SiteNav({ lang }: { lang: Lang }) {
  const nav = NAV[lang];
  return (
    <header className="nav">
      <div className="brand">
        <strong>{CONTACTS.brand}</strong>
        <span>
          {lang === "ru" ? CONTACTS.locationRu : CONTACTS.locationEn} ·{" "}
          <span className="kbd">{lang === "ru" ? CONTACTS.bookingNoteRu : CONTACTS.bookingNoteEn}</span>
        </span>
      </div>

      <nav className="navLinks" aria-label="Primary">
        {nav.map((item) => (
          <Link key={item.href} className="pill" href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link className="pill" href={lang === "ru" ? "/en" : "/ru"} aria-label={lang === "ru" ? "Switch to English" : "Switch to Russian"}>
          {lang === "ru" ? "EN" : "RU"}
        </Link>
      </nav>
    </header>
  );
}
