import type { BlogPost } from "./types";

/**
 * Blog registry. One file per post in this folder, then import it here.
 * See docs/blog-howto.md.
 */
const ALL_POSTS: BlogPost[] = [
  // example: import post from "./mi-post"; then add `post` here.
];

export const BLOG_POSTS: BlogPost[] = ALL_POSTS.filter((p) => !p.draft).sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export type { BlogPost };
