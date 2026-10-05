import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rock-experience-kappa.vercel.app/",
      lastModified: new Date(),
    },
  ];
}