const siteUrl = "https://esquinasteakhouse.pt";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "pt-PT": siteUrl,
          en: `${siteUrl}/en`,
        },
      },
    },
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "pt-PT": siteUrl,
          en: `${siteUrl}/en`,
        },
      },
    },
  ];
}
