# Anasayfa Page Overrides

> **PROJECT:** Kobalt Cini
> **Generated:** 2026-10-26 17:43:52 (script), overrides filled in by hand from the searches below
> **Page Type:** Landing / Marketing
> **Built in:** `4-ui-ux-pro-max/`

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/kobalt-cini/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## How this file was reached

| Step | Query | Result | Verdict |
|---|---|---|---|
| 1 | `"handmade ceramic tile atelier artisan" --design-system` | Generic match: trust blue #2563EB + orange, Swiss style | Off-topic, retried once |
| 1b | `"handmade craft artisan workshop" --domain product` | 0 results, no craft/atelier category in the database | Closest categories listed by hand |
| 2 | `"home decoration interior handmade tiles" --domain product` | Home Decoration & Interior Design | Verified: visitors are homeowners and architects planning a wall |
| 2b | same query `--design-system --variance 6 --motion 4 --density 3` | This Master | Accepted, with the overrides below |
| 3 | `"cobalt blue ceramic heritage" --domain color` | Portfolio / B2B / Coworking palettes | No verified match for a cobalt brand colour |
| 3 | `"artisan handmade heritage" --domain typography` | Amatic SC / Cabin | Not used, Master's pairing kept (see Typography) |
| 3 | `"handcrafted organic texture" --domain style` | Nature Distilled (Best For: artisan goods, home decor) | Used as the surface treatment |
| 3 | `"storytelling craft process" --domain landing` | 0 results | Master's pattern (Scroll-Triggered Storytelling) kept |
| 3 | `"scroll progress indicator"`, `"sticky header focus obscured"`, `"reduced motion scroll animation"` `--domain ux` | Progress indicators, Focus Not Obscured, Motion Sensitivity | Applied |
| 4 | `--stack` | No plain HTML/CSS stack in the database (html-tailwind is the nearest, Tailwind is not used) | Skipped, said so instead of assuming |

## Page-Specific Rules

### Layout Overrides

- **Max Width:** 1200px (standard)
- **Layout:** Full-width sections, centered content, 12-column Swiss grid
- **Chapters:** Hook > 1 Ölçü (problem) > 2 Yapım (journey) > 3 Desenler + Dersler (solution) > Ziyaret (climax CTA), each chapter ends with a mini CTA
- **Progress:** chapter steps in the sticky header with `aria-current`, plus a scroll progress bar
- **Sticky header:** `scroll-padding-top` equals header height (Focus Not Obscured, Minimum)

### Spacing Overrides

- No overrides — use Master spacing

### Typography Overrides

- Kept Master: **Cinzel** headings / **Josefin Sans** body. Both have latin-ext (ç, ğ, ı, İ, ş).
- Amatic SC (typography search) rejected: handwritten display reads as a children's craft shop, and the visitors commission walls for hotels and kitchens.
- Josefin Sans body at 18px: its x-height is small, 16px reads too small.

### Color Overrides

The database has no palette for a brand named after a pigment. The Master's warm interior neutrals and gold CTA are kept; only **Primary** changes from warm grey to cobalt, because the atelier is named after it.

| Role | Master | Override | Why |
|------|--------|----------|-----|
| Primary | `#78716C` | `#1D3A8F` | Brand name is the pigment; 10.0:1 on Background |
| Ring | `#78716C` | `#1D3A8F` | Follows Primary |
| Secondary | `#A8A29E` | `#A8A29E` | Kept, decorative lines only (not text) |

Illustration-only colours (tile artwork, never UI text): firuze `#2A9D9A`, mercan `#C8322B`, yeşil `#3F7D4E`, tahrir `#1B1F2E`, body `#E7DCCB`.

### Component Overrides

- **Cards:** not clickable on this page, so no `cursor: pointer` and no hover lift (Master card spec assumes clickable cards).
- **Buttons:** Master spec, `transition` on `background-color, box-shadow` instead of `all`.

---

## Page-Specific Components

- **Building tile (Chapter 2):** one sticky SVG tile that changes state as each of the five making steps enters view (gövde, tahrir, boya, sır, fırın). Discrete state change, no scroll-scrub. Under reduced motion the state still changes, without transitions. Without JS it shows the finished tile and every step stays readable.
- **Pattern grid (Chapter 3):** six authored SVG tiles, Master's Stagger List motion (300–450ms, back-out easing) written in CSS + IntersectionObserver instead of GSAP so the stack stays the same as the other trials.

---

## Recommendations

- Effects: Subtle parallax, natural easing (ease-out), texture overlays, grain effects, soft shadows
- Parallax not used (Motion Sensitivity, High). Grain overlay at low opacity on Background only.
