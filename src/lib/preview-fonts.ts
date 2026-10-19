// Template-preview fonts. Loaded on demand (when the section nears the
// viewport) instead of a render-blocking CSS @import on every page load.
const PREVIEW_FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Space+Grotesk:wght@500;600&family=Barlow+Condensed:wght@500;600&family=Barlow:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600;1,6..72,500&family=Outfit:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400&display=swap";

export function loadPreviewFonts() {
  if (typeof document === "undefined") return;
  if (document.getElementById("pb-preview-fonts")) return;
  const link = document.createElement("link");
  link.id = "pb-preview-fonts";
  link.rel = "stylesheet";
  link.href = PREVIEW_FONTS_HREF;
  document.head.appendChild(link);
}
