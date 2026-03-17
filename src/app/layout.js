import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "@/context/ContentContext";
import { getContentData } from "@/actions/getData";
import HtmlLang from "@/components/HtmlLang";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://esquinasteakhouse.pt";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cervejaria Esquina Steakhouse | Carne Maturada nos Açores",
    template: "%s | Cervejaria Esquina Steakhouse",
  },
  description:
    "Steakhouse em Ponta Delgada, São Miguel. Carne maturada de excelência, raça Ramo Grande dos Açores. Petiscos tradicionais, cerveja açoriana e garrafeira de vinhos. Reservas: +351 296 628 253.",
  keywords: [
    "steakhouse Ponta Delgada",
    "carne maturada Açores",
    "restaurante São Miguel",
    "Ramo Grande",
    "Cervejaria Esquina",
    "bife Açores",
    "restaurante carne Ponta Delgada",
  ],
  authors: [{ name: "Cervejaria Esquina Steakhouse", url: siteUrl }],
  creator: "Cervejaria Esquina Steakhouse",
  publisher: "Cervejaria Esquina Steakhouse",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: "Cervejaria Esquina Steakhouse",
    title: "Cervejaria Esquina Steakhouse | Carne Maturada nos Açores",
    description:
      "Steakhouse em Ponta Delgada. Carne maturada de raça Ramo Grande, petiscos tradicionais e garrafeira de vinhos portugueses.",
    images: [
      {
        url: "/LOGO_ESQUINA.png",
        width: 512,
        height: 256,
        alt: "Cervejaria Esquina Steakhouse - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervejaria Esquina Steakhouse | Carne Maturada nos Açores",
    description:
      "Steakhouse em Ponta Delgada. Carne maturada de raça Ramo Grande, petiscos tradicionais e garrafeira.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
    languages: { "pt-PT": siteUrl, "en": `${siteUrl}/en` },
  },
  category: "restaurant",
};

export default async function RootLayout({ children }) {
  const initialData = await getContentData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Cervejaria Esquina Steakhouse",
    description:
      "Steakhouse em Ponta Delgada, São Miguel. Carne maturada de excelência, raça Ramo Grande dos Açores. Petiscos tradicionais, cerveja açoriana e garrafeira de vinhos portugueses.",
    url: siteUrl,
    telephone: "+351 296 628 253",
    email: "reservas@esquinasteakhouse.pt",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Roberto Ivens, 12",
      addressLocality: "Ponta Delgada",
      postalCode: "9500-238",
      addressRegion: "Açores",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.739145571994314,
      longitude: -25.67678192349405,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "12:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "12:00",
        closes: "00:00",
      },
    ],
    servesCuisine: "Portuguese",
    priceRange: "€€",
    image: `${siteUrl}/LOGO_ESQUINA.png`,
    sameAs: [
      "https://www.facebook.com/esquina.steakhouse",
      "https://www.instagram.com/esquina.steakhouse",
    ],
  };

  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <HtmlLang />
        <LanguageProvider initialData={initialData}>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
