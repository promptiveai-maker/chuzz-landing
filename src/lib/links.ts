/**
 * Every outbound link on the page. This and copy.ts are the two files the
 * owner edits.
 */

/** The signup form. It lives on another site and is not part of this project. */
export const JOIN_URL = "https://meetup-ofir.vercel.app/join";

/** The neighbourhood WhatsApp community group invite. */
export const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/KBrHXVCX6N1Kv2qsrBXFyW";

/**
 * A meetup specific link. If the page URL carries ?m=<slug>, every primary
 * button passes it through to the signup form. The slug is sanitised to
 * [a-z0-9-] so nothing from the query string reaches the form unchecked.
 */
export function sanitiseSlug(raw: string | null | undefined): string {
  if (!raw) return "";
  return raw.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 64);
}

export function joinUrl(slug?: string): string {
  const clean = sanitiseSlug(slug);
  return clean ? `${JOIN_URL}?m=${clean}` : JOIN_URL;
}
