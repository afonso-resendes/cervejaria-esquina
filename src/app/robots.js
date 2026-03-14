const siteUrl = "https://esquinasteakhouse.pt";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
