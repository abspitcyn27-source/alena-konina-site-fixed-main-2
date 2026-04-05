"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACTS, NAV, type Lang } from "../lib/content";

export default function SiteNav({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const nav = NAV[lang];

  return (
    <header className="nav">
      <div className="brand">
        <strong>{CONTACTS.brand}</strong>
        <span>
          {lang === "ru" ? CONTACTS.locationRu : CONTACTS.locationEn}
        </span>
      </div>

      <nav className="navLinks" aria-label="Primary">
        {nav.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              className={`pill${isActive ? " pillActive" : ""}`}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          className="pill"
          href={lang === "ru" ? "/en" : "/ru"}
          aria-label={lang === "ru" ? "Switch to English" : "Switch to Russian"}
        >
          {lang === "ru" ? "EN" : "RU"}
        </Link>
      </nav>
    </header>
  );
}
