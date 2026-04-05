"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CONTACTS, NAV, type Lang } from "../lib/content";

const LANG_LABELS: Record<Lang, string> = {
  ru: "🇷🇺 Русский",
  en: "🇬🇧 English",
  es: "🇪🇸 Español",
};

export default function SiteNav({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const nav = NAV[lang];
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  // Подменяем язык в текущем пути
  function switchLangHref(target: Lang): string {
    if (!pathname) return `/${target}`;
    const replaced = pathname.replace(/^\/(ru|en|es)/, `/${target}`);
    return replaced || `/${target}`;
  }

  return (
    <header className="nav">
      <div className="brand">
        <strong>{CONTACTS.brand}</strong>
        <span>
          {lang === "ru" ? CONTACTS.locationRu : lang === "es" ? CONTACTS.locationEs : CONTACTS.locationEn}
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

        {/* Language switcher */}
        <div ref={langRef} className="langSwitchWrap">
          <button
            className="pill langSwitchBtn"
            onClick={() => setLangOpen((v) => !v)}
            aria-expanded={langOpen}
            aria-haspopup="listbox"
          >
            {lang.toUpperCase()}
            <span className={`ctaDropArrow${langOpen ? " ctaDropArrowUp" : ""}`}>▾</span>
          </button>

          {langOpen && (
            <div className="langDropList" role="listbox">
              {(["ru", "en", "es"] as Lang[]).filter((l) => l !== lang).map((l) => (
                <Link
                  key={l}
                  href={switchLangHref(l)}
                  className="langDropItem"
                  onClick={() => setLangOpen(false)}
                >
                  {LANG_LABELS[l]}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
