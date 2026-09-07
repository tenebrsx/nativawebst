import type { MetadataRoute } from "next";
import { INDEXABLE_PATHS, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return INDEXABLE_PATHS.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/servicios"
          ? 0.9
          : path === "/santo-domingo" ||
              path === "/por-que-nosotros" ||
              path === "/punta-cana"
            ? 0.85
            : path.startsWith("/industrias/") || path.startsWith("/guias/")
              ? 0.82
              : path === "/casos"
                ? 0.8
                : path.startsWith("/legal")
                  ? 0.4
                  : 0.75,
  }));
}
