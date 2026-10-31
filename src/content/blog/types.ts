export type BlogPost = {
  /** URL slug: /blog/<slug>. Lowercase, hyphens, no accents. */
  slug: string;
  title: string;
  /** Meta description, ~150 characters. */
  description: string;
  /** ISO date, e.g. "2026-11-05". */
  date: string;
  /** Optional ISO date of the last real edit. */
  updated?: string;
  /** Short intro shown under the title and on the /blog list. */
  lede: string;
  /** Body sections. Body text supports line breaks (\n) and "• " bullets. */
  sections: Array<{ title: string; body: string }>;
  /** Set true to keep it out of /blog, sitemap and the build. */
  draft?: boolean;
};
