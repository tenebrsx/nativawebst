import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nativa Studio",
    short_name: "nativa",
    start_url: "/",
    display: "browser",
    background_color: "#f7f8fa",
    theme_color: "#1e4fd7",
    icons: [
      { src: "/brand/nati/favicon-32.png", sizes: "32x32", type: "image/png" },
      { src: "/brand/nati/favicon-180.png", sizes: "180x180", type: "image/png" },
      { src: "/brand/nati/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
