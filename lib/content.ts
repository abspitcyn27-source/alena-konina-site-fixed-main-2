export const CONTACTS = {
  telegramUrl: "https://t.me/alenapronail",
  whatsappUrl: "https://wa.me/79035151434",
  vkUrl: "",
  maxUrl: "",
  instagramUrl: "https://instagram.com/alena.pro.nail",
  locationRu: "Москва, м. Улица 1905 года",
  locationEn: "Moscow, Ulitsa 1905 Goda metro",
  locationEs: "Moscú, metro Ulitsa 1905 Goda",
  brand: "Alena Konina",
  bookingNoteRu: "по предварительной записи",
  bookingNoteEn: "by appointment only",
  bookingNoteEs: "solo con cita previa",
};

export type Lang = "ru" | "en" | "es";

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
  es: [
    { href: "/es", label: "Inicio" },
    { href: "/es/portfolio", label: "Servicios" },
    { href: "/es/about", label: "Sobre mí" },
    { href: "/es/contacts", label: "Contacto" },
    { href: "/es/academy", label: "Academia" },
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
    masterLabel: "О мастере",
    masterName: "Алёна Конина",
    masterBio:
      "Мастер маникюра и педикюра с опытом работы более 5 лет. Специализируюсь на аппаратном маникюре, наращивании и укреплении ногтей. Постоянно повышаю квалификацию, работаю только с проверенными профессиональными материалами. Принимаю в спокойной атмосфере — без очередей и спешки.",
    masterFacts: [
      "5+ лет опыта",
      "Аппаратный маникюр и педикюр",
      "Наращивание и укрепление",
      "Только профессиональные материалы",
    ],
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
    masterLabel: "About",
    masterName: "Alena Konina",
    masterBio:
      "Nail master with 5+ years of experience. Specializing in hardware manicure, nail extensions and strengthening. I work exclusively with professional-grade materials in a calm, private setting — no rush, no crowds.",
    masterFacts: [
      "5+ years of experience",
      "Hardware manicure & pedicure",
      "Extensions & strengthening",
      "Professional materials only",
    ],
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
  es: {
    heroTitle: "Uñas en Moscú — metro Ulitsa 1905 Goda",
    heroSubtitle: "Limpio · Seguro · Trato personalizado",
    heroText:
      "Manicura y pedicura profesional en un ambiente tranquilo. Reserva fácil por Telegram o WhatsApp.",
    ctaBook: "Reservar",
    ctaTelegram: "Reservar por Telegram",
    ctaWhatsApp: "Reservar por WhatsApp",
    masterLabel: "Sobre la artista",
    masterName: "Alena Konina",
    masterBio:
      "Artista de uñas con más de 5 años de experiencia. Especializada en manicura con torno eléctrico, extensiones y fortalecimiento. Trabajo exclusivamente con materiales profesionales en un ambiente tranquilo, sin prisas.",
    masterFacts: [
      "5+ años de experiencia",
      "Manicura y pedicura con torno",
      "Extensiones y fortalecimiento",
      "Solo materiales profesionales",
    ],
    whyTitle: "Por qué me eligen",
    whyItems: [
      "Experiencia con distintos tipos de uñas",
      "Técnicas y materiales modernos",
      "Proceso limpio y seguro",
      "Ambiente tranquilo y privado",
      "Ubicación central en Moscú",
    ],
    servicesTitle: "Servicios",
    servicesItems: [
      "Manicura + esmalte gel",
      "Fortalecimiento con gel",
      "Extensiones",
      "Pedicura",
      "Retirada / corrección / reparación",
    ],
    locationTitle: "Ubicación",
    locationText:
      "Moscú, metro Ulitsa 1905 Goda. La dirección exacta se comparte tras confirmar la cita.",
    academyTitle: "Academia — próximamente",
    academyText:
      "Cursos online y presenciales en Moscú para profesionales que quieren mejorar su nivel. Deja tu solicitud para acceso anticipado.",
    footerLeft: "© 2024 Alena Konina",
    footerRight: "Moscú · Reservas: Telegram / WhatsApp",
  },
} as const;
