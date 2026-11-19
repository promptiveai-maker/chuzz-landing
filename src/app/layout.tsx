import type { Metadata, Viewport } from "next";
import { COPY } from "@/lib/copy";
import { asset, fontFaceCss } from "./fonts";
import "./globals.css";

const he = COPY.he;

// Where the site is actually served from. Change this (or set
// NEXT_PUBLIC_SITE_URL) when the landing page moves to its own domain, so the
// Open Graph image resolves to an absolute URL.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://promptiveai-maker.github.io/chuzz-landing";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: he.meta.title,
  description: he.meta.description,
  icons: { icon: [{ url: asset("/favicon.svg"), type: "image/svg+xml" }] },
  openGraph: {
    title: he.meta.title,
    description: he.meta.description,
    type: "website",
    locale: "he_IL",
    siteName: "Chuzz",
    images: [{ url: asset("/og.png"), width: 1200, height: 630, alt: he.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: he.meta.title,
    description: he.meta.description,
    images: [asset("/og.png")],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1310",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Hebrew is the default. The toggle in the header swaps these two
    // attributes along with the copy.
    <html lang="he" dir="rtl">
      <head>
        {/* Meta Pixel goes here. Owner will paste the snippet between these
            two comment lines, and nothing else belongs in this slot. */}
        {/* End Meta Pixel slot. */}

        <style dangerouslySetInnerHTML={{ __html: fontFaceCss }} />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href={asset("/fonts/heebo-hebrew.woff2")}
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href={asset("/fonts/heebo-latin.woff2")}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
