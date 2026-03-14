const siteUrl = "https://esquinasteakhouse.pt";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cervejaria Esquina Steakhouse | Matured Meat in the Azores",
    template: "%s | Cervejaria Esquina Steakhouse",
  },
  description:
    "Steakhouse in Ponta Delgada, São Miguel. Premium matured meat, Ramo Grande breed from the Azores. Traditional snacks, Azorean beer and Portuguese wine cellar. Reservations: +351 296 628 253.",
  keywords: [
    "steakhouse Ponta Delgada",
    "matured meat Azores",
    "restaurant São Miguel",
    "Ramo Grande",
    "Cervejaria Esquina",
    "steak Azores",
    "meat restaurant Ponta Delgada",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/en`,
    siteName: "Cervejaria Esquina Steakhouse",
    title: "Cervejaria Esquina Steakhouse | Matured Meat in the Azores",
    description:
      "Steakhouse in Ponta Delgada. Ramo Grande breed matured meat, traditional snacks and Portuguese wine cellar.",
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
    title: "Cervejaria Esquina Steakhouse | Matured Meat in the Azores",
    description:
      "Steakhouse in Ponta Delgada. Ramo Grande breed matured meat, traditional snacks and wine cellar.",
  },
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: { "pt-PT": siteUrl, "en": `${siteUrl}/en` },
  },
};

export default function EnLayout({ children }) {
  return children;
}
