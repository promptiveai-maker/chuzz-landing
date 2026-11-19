/**
 * Self hosted font faces. The woff2 files sit in public/fonts and are served
 * from this site, never from Google.
 *
 * These rules are built in TypeScript rather than written in globals.css for
 * one reason: when the site is served from a subfolder (a GitHub Pages project
 * page), the font URLs have to carry that base path, and plain CSS cannot read
 * it. On a real domain root the base path is empty and the URLs are /fonts/...
 */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset path with the base path. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}

const LATIN_RANGE =
  "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD";

const HEBREW_RANGE =
  "U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F";

export const fontFaceCss = `
@font-face{font-family:"Heebo";font-style:normal;font-weight:400 800;font-display:swap;src:url("${asset(
  "/fonts/heebo-hebrew.woff2",
)}") format("woff2");unicode-range:${HEBREW_RANGE}}
@font-face{font-family:"Heebo";font-style:normal;font-weight:400 800;font-display:swap;src:url("${asset(
  "/fonts/heebo-latin.woff2",
)}") format("woff2");unicode-range:${LATIN_RANGE}}
@font-face{font-family:"Inter";font-style:normal;font-weight:400 800;font-display:swap;src:url("${asset(
  "/fonts/inter-latin.woff2",
)}") format("woff2");unicode-range:${LATIN_RANGE}}
`.trim();
