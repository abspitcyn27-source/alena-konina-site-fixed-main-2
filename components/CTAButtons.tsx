"use client";

import { useState, useRef, useEffect } from "react";
import { CONTACTS, COPY, type Lang } from "../lib/content";

const MESSENGERS = [
  { key: "whatsapp", label: "WhatsApp",  icon: "💬", getUrl: () => CONTACTS.whatsappUrl },
  { key: "telegram", label: "Telegram",  icon: "✈️", getUrl: () => CONTACTS.telegramUrl },
  { key: "vk",       label: "ВКонтакте", icon: "🔵", getUrl: () => CONTACTS.vkUrl },
  { key: "max",      label: "MAX",        icon: "💙", getUrl: () => CONTACTS.maxUrl },
];

export default function CTAButtons({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  return (
    <div ref={ref} className="ctaDropWrap">
      <button
        className="btn btnPrimary ctaDropBtn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {t.ctaBook}
        <span className={`ctaDropArrow${open ? " ctaDropArrowUp" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="ctaDropList" role="listbox">
          {MESSENGERS.map(({ key, label, icon, getUrl }) => {
            const url = getUrl();
            if (!url) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="ctaDropItem"
                onClick={() => setOpen(false)}
              >
                <span className="ctaDropIcon">{icon}</span>
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
