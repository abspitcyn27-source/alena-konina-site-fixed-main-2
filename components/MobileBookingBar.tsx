"use client";

import { useState, useRef, useEffect } from "react";
import { CONTACTS, COPY, type Lang } from "../lib/content";

const MESSENGERS = [
  { key: "whatsapp", label: "WhatsApp",  icon: "💬", getUrl: () => CONTACTS.whatsappUrl },
  { key: "telegram", label: "Telegram",  icon: "✈️", getUrl: () => CONTACTS.telegramUrl },
  { key: "vk",       label: "ВКонтакте", icon: "🔵", getUrl: () => CONTACTS.vkUrl },
  { key: "max",      label: "MAX",        icon: "💙", getUrl: () => CONTACTS.maxUrl },
];

export default function MobileBookingBar({ lang }: { lang: Lang }) {
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
    <div ref={ref} className="mobileBar">
      {open && (
        <div className="mobileBarDropList">
          {MESSENGERS.map(({ key, label, icon, getUrl }) => {
            const url = getUrl();
            if (!url) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="mobileBarDropItem"
                onClick={() => setOpen(false)}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      )}
      <button
        className="btn btnPrimary"
        style={{ flex: 1, maxWidth: 520 }}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {t.ctaBook}
        <span className={`ctaDropArrow${open ? " ctaDropArrowUp" : ""}`}>▾</span>
      </button>
    </div>
  );
}
