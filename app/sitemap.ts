import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://surabhi-mendiratta.surabhi-mendiratta.chatgpt.site",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }];
}
