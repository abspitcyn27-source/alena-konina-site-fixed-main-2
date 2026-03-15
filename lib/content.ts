export const CONTACTS = {
  telegramUrl: "https://t.me/alenapronail",
  whatsappUrl: "https://wa.me/79035151434",
  instagramUrl: "https://instagram.com/alena.pro.nail",
  locationRu: "Москва, м. Улица 1905 года",
  locationEn: "Moscow, Ulitsa 1905 Goda metro",
  brand: "Alena Konina",
  bookingNoteRu: "по предварительной записи",
  bookingNoteEn: "by appointment only",
};

export type Lang = "ru" | "en";

export const NAV = {
  ru: [
    { href: "/ru", label: "Главная" },
    { href: "/ru/portfolio", label: "Услуги" },
    { href: "/ru/about", label: "О мастере" },
    { href: "/ru/contacts", label: "Контакты" },
    { href: "/ru/academy", label: "Обучение" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/portfolio", label: "Services" },
    { href: "/en/about", label: "About" },
    { href: "/en/contacts", label: "Contacts" },
    { href: "/en/academy", label: "Academy" },
  ],
};

export const COPY = {
  ru: {
    heroTitle: "Маникюр в Москве. Метро ул. 1905 года",
    heroSubtitle: "Аккуратно · Стерильно · Индивидуальный подход",
    heroText:
      "Профессиональный маникюр и педикюр в комфортной атмосфере. Удобная запись через Telegram или WhatsApp.",
    ctaBook: "Записаться",
    ctaTelegram: "Записаться в Telegram",
    ctaWhatsApp: "Записаться в WhatsApp",
    whyTitle: "Почему выбирают меня",
    whyItems: [
      "Опыт работы с разными типами ногтей",
      "Современные техники и материалы",
      "Стерильность и безопасность",
      "Спокойная атмосфера без потока",
      "Удобное расположение в центре Москвы",
    ],
    servicesTitle: "Услуги",
    servicesItems: [
      "Маникюр + покрытие",
      "Укрепление ногтей гелем",
      "Наращивание ногтей",
      "Педикюр",
      "Снятие / коррекция / ремонт",
    ],
    locationTitle: "Локация",
    locationText:
      "Москва, м. Улица 1905 года (Пресненский район, ЦАО). Точный адрес и схема прохода — после записи.",
    academyTitle: "Обучение — скоро",
    academyText:
      "Готовится онлайн-обучение и офлайн-курсы в Москве для мастеров, которые хотят повысить уровень и доход. Можно оставить заявку и узнать первым.",
    footerLeft: "© 2024 Alena Konina",
    footerRight: "Москва · м. Улица 1905 года · Запись: Telegram / WhatsApp",
  },
  en: {
    heroTitle: "Nails in Moscow — Ulitsa 1905 Goda metro",
    heroSubtitle: "Clean · Safe · Personal approach",
    heroText:
      "Professional manicure and pedicure in a calm, comfortable setting. Easy booking via Telegram or WhatsApp.",
    ctaBook: "Book now",
    ctaTelegram: "Book via Telegram",
    ctaWhatsApp: "Book via WhatsApp",
    whyTitle: "Why clients choose me",
    whyItems: [
      "Experience with different nail types",
      "Modern techniques and materials",
      "Clean & safe process",
      "No-rush, private atmosphere",
      "Central Moscow location",
    ],
    servicesTitle: "Services",
    servicesItems: ["Manicure + gel polish", "Gel strengthening", "Extensions", "Pedicure", "Removal / correction"],
    locationTitle: "Location",
    locationText:
      "Moscow, Ulitsa 1905 Goda metro. Exact address and directions are shared after booking.",
    academyTitle: "Academy — coming soon",
    academyText:
      "Online courses and in-person training in Moscow are in production. Leave a request to get early access.",
    footerLeft: "© 2024 Alena Konina",
    footerRight: "Moscow · Booking: Telegram / WhatsApp",
  },
} as const;
