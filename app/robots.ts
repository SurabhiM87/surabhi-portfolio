import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://surabhi-mendiratta.surabhi-mendiratta.chatgpt.site/sitemap.xml",
  };
}
