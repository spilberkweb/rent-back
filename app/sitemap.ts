import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rentback.cz";
  const lastModified = new Date();

  const routes = [
    "",
    "/jak-to-funguje",
    "/kalkulacka",
    "/kontakt",
    "/zasady-ochrany-osobnich-udaju",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
