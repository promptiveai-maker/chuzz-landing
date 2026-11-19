# Chuzz landing page

A one page landing site for Chuzz, small meetups in Old North Tel Aviv. Its
only job is to send the visitor to the signup form at
`https://meetup-ofir.vercel.app/join`.

Hebrew ships by default. A toggle in the header swaps the whole page to
English and back, and remembers the choice in `localStorage`.

The page collects nothing. There are no inputs, no forms, no cookies, no
analytics and no backend. All personal data is handled by the signup form on
the other site.

---

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build it

```bash
npm run build        # writes a fully static site to out/
```

`out/` is plain HTML, CSS, JS and images. Drop its contents straight into any
host, including shared hosting such as Hostinger `public_html`. There is no
server to run.

Two checks, both of which must pass clean:

```bash
npx tsc --noEmit
npx eslint .
```

## Where it is deployed

Pushing to `main` builds the site and publishes it to GitHub Pages at
<https://promptiveai-maker.github.io/chuzz-landing/>.

To move it to a real domain (for example a subdomain of `chuzz.app`):

1. Drop the `NEXT_PUBLIC_BASE_PATH` line from `.github/workflows/deploy.yml`,
   or set it to an empty string. It only exists because GitHub Pages serves
   this repo from a subfolder.
2. Set `NEXT_PUBLIC_SITE_URL` to the real origin, so the Open Graph image and
   the sitemap resolve to absolute URLs.
3. Update the URL in `public/robots.txt` and `public/sitemap.xml`.

Note that `chuzz.app` already serves a different, larger site from the
`chuzz-website` repo over Hostinger. Nothing here touches it.

---

## What the owner has to paste

| What | Where | Status |
| --- | --- | --- |
| Meta Pixel snippet | `src/app/layout.tsx`, the commented slot at the top of `<head>` | still empty |
| WhatsApp group invite | `src/lib/links.ts`, `WHATSAPP_GROUP_URL` | filled in |
| Signup form URL | `src/lib/links.ts`, `JOIN_URL` | filled in |

Nothing else in the head is tracking of any kind. The pixel slot is the only
place a script belongs.

## Photo asset slots

| Slot | Where | What it shows | Status |
| --- | --- | --- | --- |
| 1 | `public/images/table.webp`, used in "What the evening looks like" | Table of five people talking, warm light | filled from the ad creative |

Asset slot 1 currently holds a crop taken from the Meta ads creative, so the
landing page and the campaign show the same table. Replace the file with a
real photograph when one exists. Keep it 4:5 and about 1000x1250.

## The open question about price

FAQ question six asks what it costs. The owner has confirmed there is no fee
to sign up, so the answer reads: no membership, no subscription, you sign up
per meetup, and everyone pays for what they order. No amount appears anywhere
on the page. If a booking fee is ever introduced, that answer has to carry the
amount, in both languages. It is marked with a comment in `src/lib/copy.ts`.

---

## Where things live

```
src/app/layout.tsx        document head, metadata, Meta Pixel slot
src/app/page.tsx          the page, in section order
src/app/globals.css       design tokens, grain, base type
src/app/fonts.ts          the self hosted @font-face rules
src/lib/copy.ts           every Hebrew and English string, by section
src/lib/links.ts          JOIN_URL, WHATSAPP_GROUP_URL, ?m= slug helper
src/components/           one file per section, plus Header, Footer, Cta,
                          StickyCta, Reveal, LangProvider
public/fonts/             self hosted Heebo and Inter, woff2
public/images/            photo assets
public/og.png             the 1200x630 share image
```

`src/lib/copy.ts` is the file to edit when wording changes. No Hebrew or
English string is hardcoded in a component.

## Meetup specific links

If the page URL carries `?m=<slug>`, every primary button passes it through to
the form as `https://meetup-ofir.vercel.app/join?m=<slug>`. The slug is
sanitised to `[a-z0-9-]` first. Use it to tell one campaign or one meetup
apart from another.

Example: `https://.../?m=old-north-march` sends people to
`https://meetup-ofir.vercel.app/join?m=old-north-march`.

## Fonts

Heebo (Hebrew and all display type) and Inter (Latin) are self hosted as woff2
in `public/fonts`, about 90KB in total. Nothing is fetched from Google at
runtime. The `@font-face` rules are generated in `src/app/fonts.ts` rather
than written in CSS, because their URLs have to carry the base path when the
site is served from a subfolder.
