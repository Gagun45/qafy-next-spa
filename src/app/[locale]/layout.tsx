import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { localeMetadata, siteConfig, type Locale } from "@/lib/metadata";
import { setRequestLocale } from "next-intl/server";
import GincoreWidget from "@/components/Widget/Widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const locale = siteConfig.locales.includes(params.locale)
    ? params.locale
    : siteConfig.defaultLocale;

  const t = localeMetadata[locale];

  return {
    metadataBase: new URL(siteConfig.url),
    title: "Qafy Mobile",
    description: t.description,
    icons: siteConfig.icons,
    creator: siteConfig.creator,
    generator: "Next.js",

    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        en: `${siteConfig.url}/en`,
        uk: `${siteConfig.url}/uk`,
        de: `${siteConfig.url}/de`,
        "x-default": siteConfig.url,
      },
    },

    openGraph: {
      type: "website",
      url: `${siteConfig.url}/${locale}`,
      title: "Qafy Mobile",
      description: t.description,
      siteName: siteConfig.name,
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <GincoreWidget />
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
