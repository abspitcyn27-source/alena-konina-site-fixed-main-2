import Link from "next/link";
import { CONTACTS, COPY, type Lang } from "../lib/content";

export default function MobileBookingBar({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const bookingHref = `/${lang}/portfolio#booking`;

  return (
    <div className="mobileBar" role="navigation" aria-label="Quick actions">
      <Link className="btn btnPrimary" href={bookingHref}>
        {t.ctaBook}
      </Link>
      <a className="btn" href={CONTACTS.whatsappUrl} target="_blank" rel="noreferrer">
        {t.ctaWhatsApp}
      </a>
    </div>
  );
}
