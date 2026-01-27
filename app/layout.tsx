import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Alena Konina — Nails | Moscow",
  description:
    "Маникюр в Москве у метро Улица 1905 года. Запись через Telegram и WhatsApp. Каркас под обучение и курсы.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
