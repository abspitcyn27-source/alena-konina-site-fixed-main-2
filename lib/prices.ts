export type LocalizedText = { ru: string; en: string };

export type PriceImage = {
  src: string;
  alt: LocalizedText;
};

export type PriceItem = {
  id: string;
  title: LocalizedText;
  price: string;
  description: LocalizedText;
  coverSrc: string;
  gallery?: PriceImage[];
  note?: LocalizedText;
};

export const PRICE_ITEMS: PriceItem[] = [
  {
    id: "manicure-no-cover",
    title: { ru: "Маникюр без покрытия", en: "Manicure (no polish)" },
    price: "2000₽",
    description: {
      ru: "Снятие, маникюр, опил, шлифовка, рекомендации, масло+крем.",
      en: "Removal, manicure, shaping, buffing, aftercare advice, oil+cream.",
    },
    coverSrc: "/gallery/manicure-light/05.png",
  },
  {
    id: "manicure-light",
    title: {
      ru: "Маникюр + покрытие + лёгкий дизайн",
      en: "Manicure + gel polish + light design",
    },
    price: "3500₽",
    note: {
      ru: "Если длиннее 3-ки, то +200₽ за каждую доп. длину.",
      en: "If longer than level 3: +200₽ per extra length.",
    },
    description: {
      ru: "Снятие, маникюр, опил, укрепление гелем, достраивание углов и параллелей, наращивание/ремонт 1-го ногтя, восстановление архитектуры, поднятие клюющих, изменение формы, выпиливание ногтя изнутри, покрытие гель-лак или лёгкий дизайн/френч, масло/крем + пилка, апельсиновая палочка 🎁",
      en: "Removal, manicure, shaping, gel strengthening, building corners/sidewalls, 1 nail extension/repair, architecture restoration, lifting downturned nails, shape correction, inner filing, gel polish or light design/French, oil/cream + file, orange stick 🎁",
    },
    coverSrc: "/gallery/manicure-light/02.png",
    gallery: [
      {
        src: "/gallery/manicure-light/01.png",
        alt: { ru: "Лёгкий дизайн — пример 1", en: "Light design — example 1" },
      },
      {
        src: "/gallery/manicure-light/02.png",
        alt: { ru: "Лёгкий дизайн — пример 2", en: "Light design — example 2" },
      },
      {
        src: "/gallery/manicure-light/03.png",
        alt: { ru: "Лёгкий дизайн — пример 3", en: "Light design — example 3" },
      },
      {
        src: "/gallery/manicure-light/04.png",
        alt: { ru: "Лёгкий дизайн — пример 4", en: "Light design — example 4" },
      },
      {
        src: "/gallery/manicure-light/05.png",
        alt: { ru: "Лёгкий дизайн — пример 5", en: "Light design — example 5" },
      },
    ],
  },
  {
    id: "manicure-hard",
    title: {
      ru: "Маникюр + покрытие + сложный дизайн",
      en: "Manicure + gel polish + complex design",
    },
    price: "3700₽",
    note: {
      ru: "Если длиннее 3-ки, то +200₽ за каждую доп. длину.",
      en: "If longer than level 3: +200₽ per extra length.",
    },
    description: {
      ru: "Снятие, маникюр, опил, укрепление гелем, достраивание углов и параллелей, наращивание/ремонт 1-го ногтя, восстановление архитектуры, поднятие клюющих, изменение формы, выпиливание ногтя изнутри, покрытие гель-лак, сложный дизайн/френч, масло/крем + пилка, апельсиновая палочка 🎁",
      en: "Removal, manicure, shaping, gel strengthening, building corners/sidewalls, 1 nail extension/repair, architecture restoration, lifting downturned nails, shape correction, inner filing, gel polish, complex design/French, oil/cream + file, orange stick 🎁",
    },
    coverSrc: "/gallery/manicure-hard/03.png",
    gallery: [
      {
        src: "/gallery/manicure-hard/01.png",
        alt: { ru: "Сложный дизайн — пример 1", en: "Complex design — example 1" },
      },
      {
        src: "/gallery/manicure-hard/02.png",
        alt: { ru: "Сложный дизайн — пример 2", en: "Complex design — example 2" },
      },
      {
        src: "/gallery/manicure-hard/03.png",
        alt: { ru: "Сложный дизайн — пример 3", en: "Complex design — example 3" },
      },
      {
        src: "/gallery/manicure-hard/04.png",
        alt: { ru: "Сложный дизайн — пример 4", en: "Complex design — example 4" },
      },
      {
        src: "/gallery/manicure-hard/05.png",
        alt: { ru: "Сложный дизайн — пример 5", en: "Complex design — example 5" },
      },
    ],
  },
  {
    id: "extensions-light",
    title: {
      ru: "Наращивание + лёгкий дизайн",
      en: "Extensions + light design",
    },
    price: "4000₽",
    note: {
      ru: "Если длиннее 3-ки, то +200₽ за каждую доп. длину.",
      en: "If longer than level 3: +200₽ per extra length.",
    },
    description: {
      ru: "Снятие, маникюр, опил, наращивание от 2-х до 10-ти ногтей (гелем на нижние формы), укрепление и выравнивание гелем, покрытие гель-лак или лёгкий дизайн/френч, масло/крем + пилка, апельсиновая палочка 🎁",
      en: "Removal, manicure, shaping, extensions (2–10 nails, gel on lower forms), gel strengthening & leveling, gel polish or light design/French, oil/cream + file, orange stick 🎁",
    },
    coverSrc: "/gallery/extensions-light/02.png",
    gallery: [
      {
        src: "/gallery/extensions-light/01.png",
        alt: { ru: "Наращивание — пример 1", en: "Extensions — example 1" },
      },
      {
        src: "/gallery/extensions-light/02.png",
        alt: { ru: "Наращивание — пример 2", en: "Extensions — example 2" },
      },
      {
        src: "/gallery/extensions-light/03.png",
        alt: { ru: "Наращивание — пример 3", en: "Extensions — example 3" },
      },
    ],
  },
  {
    id: "extensions-hard",
    title: {
      ru: "Наращивание + сложный дизайн",
      en: "Extensions + complex design",
    },
    price: "4500₽",
    note: {
      ru: "Длина до 7. Если нужно длиннее — обсуждается заранее.",
      en: "Length up to 7. Longer length is discussed in advance.",
    },
    description: {
      ru: "Снятие, маникюр, опил, наращивание от 2-х до 10-ти ногтей (гелем на нижние формы), укрепление и выравнивание гелем, покрытие гель-лак, сложный дизайн/френч, масло/крем + пилка, апельсиновая палочка 🎁",
      en: "Removal, manicure, shaping, extensions (2–10 nails, gel on lower forms), gel strengthening & leveling, gel polish, complex design/French, oil/cream + file, orange stick 🎁",
    },
    coverSrc: "/gallery/extensions-hard/01.png",
    gallery: [
      {
        src: "/gallery/extensions-hard/01.png",
        alt: { ru: "Сложное наращивание — пример 1", en: "Complex extensions — example 1" },
      },
      {
        src: "/gallery/extensions-hard/02.png",
        alt: { ru: "Сложное наращивание — пример 2", en: "Complex extensions — example 2" },
      },
    ],
  },
  {
    id: "pedicure",
    title: { ru: "Педикюр", en: "Pedicure" },
    price: "3000₽",
    description: {
      ru: "Снятие, обработка пальчиков, покрытие гель-лак, обработка стоп, зачистка онихолизиса (если имеется), рекомендации по уходу, крем+масло.",
      en: "Removal, toe treatment, gel polish, feet treatment, onycholysis cleaning (if present), aftercare advice, cream+oil.",
    },
    coverSrc: "/gallery/pedicure/cover.jpg",
  },
  {
    id: "hyperkeratosis",
    title: { ru: "Зачистка гиперкератоза", en: "Hyperkeratosis treatment" },
    price: "500₽",
    description: {
      ru: "Избыточное утолщение и ороговение верхнего слоя кожи. При котором кожа грубая, сухая, с наличием мозолей и трещинами.",
      en: "Excess thickening and keratinization of the upper skin layer; rough, dry skin with calluses and cracks.",
    },
    coverSrc: "/gallery/hyperkeratosis/cover.jpg",
  },
];

export function getPriceItem(id: string): PriceItem | undefined {
  return PRICE_ITEMS.find((x) => x.id === id);
}
