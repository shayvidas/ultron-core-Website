import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Ultron Core",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#14171d",
    theme_color: "#14171d",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
