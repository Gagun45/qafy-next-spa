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
import {Metadata} from "next";

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

export async function generateMetadata(
    { params }: { params: Promise<{ locale: Locale }> }
): Promise<Metadata> {
  const { locale: paramLocale } = await params;

  const locale = siteConfig.locales.includes(paramLocale)
      ? paramLocale
      : siteConfig.defaultLocale;

  const t = localeMetadata[locale];

  const base = siteConfig.url;
  const currentUrl = `${base}/${locale}`;

  return {
    metadataBase: new URL(base),

    title: {
      absolute: "Qafy Mobile",
    },

    description: t.description,
    icons: siteConfig.icons,
    creator: siteConfig.creator,
    generator: "Next.js",

    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${base}/en`,
        uk: `${base}/uk`,
        de: `${base}/de`,
        "x-default": base,
      },
    },

    openGraph: {
      type: "website",
      url: currentUrl,
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
