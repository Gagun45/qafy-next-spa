// lib/metadata.ts
export const localeMetadata = {
  en: {
    description:
      "Get your PC or smartphone repaired quickly and securely. Book repairs, track progress, and connect with certified technicians.",
  },
  uk: {
    description:
      "Швидкий та надійний ремонт ПК або смартфонів. Замовляйте ремонт, відстежуйте прогрес та зв'язуйтесь з сертифікованими техніками.",
  },
  de: {
    description:
      "Lassen Sie Ihren PC oder Ihr Smartphone schnell und sicher reparieren. Reparaturen buchen, Fortschritt verfolgen und mit zertifizierten Technikern verbinden.",
  },
} as const;

export type Locale = keyof typeof localeMetadata;

// Global website config
export const siteConfig = {
  name: "Qafy Mobile",
  url: "https://qafy.info",
  creator: "Denys Burlaka",
  defaultLocale: "de" as Locale,
  locales: ["en", "uk", "de"] as Locale[],

  icons: {
    icon: "/pngegg.png",
  },
};
