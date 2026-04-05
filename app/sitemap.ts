import type { MetadataRoute } from "next";

const BASE_URL = "https://alena-konina-site-fixed-main-2.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/ru`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          ru: `${BASE_URL}/ru`,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/ru/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          ru: `${BASE_URL}/ru/portfolio`,
          en: `${BASE_URL}/en/portfolio`,
        },
      },
    },
    {
      url: `${BASE_URL}/ru/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${BASE_URL}/ru/about`,
          en: `${BASE_URL}/en/about`,
        },
      },
    },
    {
      url: `${BASE_URL}/ru/contacts`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${BASE_URL}/ru/contacts`,
          en: `${BASE_URL}/en/contacts`,
        },
      },
    },
    {
      url: `${BASE_URL}/ru/academy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${BASE_URL}/ru/academy`,
          en: `${BASE_URL}/en/academy`,
        },
      },
    },
    // English versions
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/en/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/en/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/en/contacts`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/en/academy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
