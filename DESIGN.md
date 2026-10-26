---
name: Kobalt Çini
description: The pricked pounce-paper a çini pattern is transferred with, laid out as a web page.
colors:
  kagit: "#e9ece8"
  kagit-koyu: "#dde1dc"
  komur: "#2f2e31"
  kursun: "#55585b"
  cizgi: "#b9bdb7"
  kobalt: "#1f3c9c"
  kobalt-koyu: "#172d77"
  firuze: "#2a8f8c"
  mercan: "#b4372b"
  sir: "#fbfcfa"
  tahrir: "#1b2240"
typography:
  display:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 6.2vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "1.45rem"
    fontWeight: 400
    lineHeight: 1.15
  place:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.2
  lead:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 350
    lineHeight: 1.65
  body:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 350
    lineHeight: 1.65
  label:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 350
    lineHeight: 1.65
  code:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    fontFeature: "tnum"
  pencil-note:
    fontFamily: "Caveat, Segoe Print, cursive"
    fontSize: "1.45rem"
    fontWeight: 500
    lineHeight: 1.1
rounded:
  none: "0px"
  hole: "50%"
spacing:
  kenar: "clamp(16px, 4.5vw, 72px)"
  aralik: "clamp(72px, 10vw, 144px)"
  cell: "10px 12px"
  sm: "14px"
  md: "32px"
  lg: "48px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.kobalt}"
    textColor: "{colors.sir}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "14px 12px"
  button-primary-hover:
    backgroundColor: "{colors.kobalt-koyu}"
    textColor: "{colors.sir}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.komur}"
    rounded: "{rounded.none}"
    padding: "14px 12px"
  button-secondary-hover:
    backgroundColor: "{colors.kagit-koyu}"
    textColor: "{colors.komur}"
  title-block:
    backgroundColor: "{colors.kagit}"
    textColor: "{colors.komur}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    width: "min(420px, 100%)"
  title-block-term:
    textColor: "{colors.kursun}"
    padding: "{spacing.cell}"
    width: "6.5rem"
  nav-link:
    textColor: "{colors.kursun}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.komur}"
  painted-tile:
    backgroundColor: "{colors.sir}"
    rounded: "{rounded.none}"
  pencil-note:
    textColor: "{colors.kursun}"
    typography: "{typography.pencil-note}"
  step-number:
    backgroundColor: "{colors.kagit}"
    textColor: "{colors.komur}"
    rounded: "{rounded.hole}"
    size: "40px"
  footer-glazed:
    backgroundColor: "{colors.kobalt}"
    textColor: "{colors.sir}"
    padding: "{spacing.aralik} {spacing.kenar} 64px"
---

# Design System: Kobalt Çini

## Overview

**Creative North Star: "The Pounce Sheet"**

The whole page is the silkme kâğıdı on the master's table: a cool sheet of tracing paper, pricked along a pattern with a needle and dusted with charcoal so the drawing comes through. Everything unpainted belongs to that sheet: charcoal dust, graphite notes, hairline drafting rules, corner registration marks, and a title block (antet) in the bottom-right corner that carries the address, today's open/closed status and the actions. Cobalt is the exception. It appears only where something has actually been painted: the primary action, links, the painted face of a tile and the glazed cobalt footer the page ends on.

The density is that of a working drawing, not a brochure. Sheets are generous (72–144px between them), text is set in narrow measures, and structure comes from 1px rules and the title block's ruled cells rather than cards, fills or shadows. The page rejects the category's default split hero, a cobalt tile photo beside a headline. The first viewport is paper, holes and a headline, with the title block holding the facts a visitor needs to come.

The motion is the craft. On load, a single pounce sweep dusts charcoal through the holes left to right (1700ms). After that, a fine pointer keeps pouncing wherever it passes. Pattern tiles sit under a half-lifted pricked sheet that peels back to reveal the paint. Reduced motion gets the finished dusted state and no peel transition.

Scope: this system covers `2-impeccable/` only; `1-frontend-design/` is a separate trial outside it. The North Star, colour names and rule lines were chosen by the documenter under the user's explicit delegation, not confirmed in an interview.

**Key Characteristics:**
- Cool tracing-paper ground with charcoal and graphite; cobalt only as paint.
- Gloock drafted titles, Geologica plain text, one Caveat pencil note per sheet.
- Square corners everywhere; circles only for needle holes and the things a needle or compass makes.
- Hairline rules, corner registration marks and a ruled title block carry structure.
- Flat paper; only physical objects (a fired tile, a lifted sheet) cast shadows.

## Colors

A near-monochrome drafting palette of paper, charcoal and graphite, with one painted cobalt and two glaze colours that live on the tiles.

### Primary
- **İznik Cobalt** (kobalt): the paint. Primary action fill, every link, focus ring, text selection, the cobalt paint on tile faces, the destination station on the route, and the full glazed footer.
- **Kiln-Deep Cobalt** (kobalt-koyu): hover state of the primary action only.

### Secondary
- **Turquoise Glaze** (firuze): glaze fill on painted tiles, and the small "open now" dot beside today's status in the title block.

### Tertiary
- **İznik Coral Red** (mercan): the raised bole-red on painted tiles (tulip bodies, wave lines). Not used in page chrome.

### Neutral
- **Tracing Paper** (kagit): the page ground, the title block (at 93% opacity over the pricked field), the lifted sheet over each tile, and the paper halo behind the hero text.
- **Handled Paper** (kagit-koyu): secondary-action hover and the scrollbar track; paper that has been touched.
- **Pounce Charcoal** (komur): body text, headings, the title block's outer frame, table head rule, step-number rings and the dust itself.
- **Graphite Lead** (kursun): secondary text, nav links, descriptions, pencil notes, title-block terms, corner registration marks.
- **Drafting Hairline** (cizgi): the 1px rules between sheets, title-block cells and table rows.
- **Glaze White** (sir): text on cobalt, and the white body of a painted tile.
- **Tahrir Ink** (tahrir): the dark outline (tahrir) stroke on painted tiles and the tint of the tile's shadow.

### Named Rules
**The Painted Mark Rule.** Cobalt appears only where something is painted: action, link, focus, selection, tile paint, destination, footer. Never as a tint, a section wash, a border on unpainted UI or a decorative accent.

**The Glaze Stays on the Tile Rule.** Turquoise and coral are glaze colours. They belong to painted tiles; the single exception is the turquoise open-now dot.

## Typography

**Display Font:** Gloock (with Times New Roman, serif)
**Body Font:** Geologica, variable 300–600 (with system-ui, sans-serif)
**Annotation Font:** Caveat 500 (with Segoe Print, cursive)

**Character:** Gloock is the drafted lettering on the sheet: high-contrast, single weight, tightly set. Geologica is the plain voice behind the counter, set light (350) and loose (1.65). Caveat is the master's graphite note in the margin and is used sparingly.

### Hierarchy
- **Display** (400, clamp(2.6rem → 5.6rem), 1.04, −0.015em): the hero headline only, max 11ch, balanced wrap.
- **Headline** (400, clamp(2rem → 3.25rem), 1.04, −0.01em): one per sheet. The footer line uses the same size at 1.05 leading, max 14ch.
- **Title** (400, 1.45rem, 1.15): visit-step titles.
- **Place** (Gloock 400, 1.35rem, 1.2): station names on the route.
- **Lead** (Geologica 350, 1.15rem): hero paragraph, max 34ch, graphite.
- **Body** (Geologica 350, 1.0625rem, 1.65): running text, measures of 32–52ch.
- **Label** (Geologica, 0.9–0.98rem): nav, title-block cells, table headings, footnotes.
- **Code** (Geologica 600, tabular figures): pattern codes such as KC-01, which the visitor quotes at the atelier.
- **Pencil Note** (Caveat 500, 1.45rem, 1.1, rotated −1.5°, 1px graphite underline): one short note directly under a sheet's headline.

### Named Rules
**The Three Hands Rule.** Gloock drafts, Geologica speaks, Caveat annotates. Caveat appears at most once per sheet, always after the headline it comments on, never above a heading and never as a label or button.

**The Tabular Facts Rule.** Pattern codes, dates, places-left and prices use tabular figures.

## Layout

The page is a stack of full-bleed sheets (yaprak). Each sheet has side gutters of `kenar` (16–72px), vertical padding of `aralik` (72–144px) on top and 0.8× that below, a 1px hairline at its bottom edge and two 22px L-shaped registration marks in its top corners (graphite, inset half a gutter, 28px down).

The hero is a full-height sheet (clamp(640px, 100svh, 980px)) on a two-column grid. The pricked motif is drawn on a canvas behind everything and bleeds off the right edge. The headline sits top-left; the title block sits bottom-right. Below 680px the motif moves above the text (top padding 72px + 88vw), the title block goes full width under the copy, and the phone number collapses to "Ara".

Content sheets with a heading block and a body use a 1 : 1.5 two-column grid with 64px gap from 1000px. Visit steps are a 4-up sequence, 2-up below 900px and 1-up below 680px. Pattern tiles auto-fit at 150px minimum with 48px row and 32px column gaps. The internal rhythm runs 10 / 14 / 28 / 32 / 48 / 56 / 64px.

### Named Rules
**The Sheet Rule.** A new section is a new sheet: hairline at the bottom, registration marks at the top corners, nothing else to separate it. No backgrounds or cards to mark sections.

**The Title Block Rule.** Address, today's status and the primary actions live together in the ruled title block. A visitor never needs more than one step to reach directions or a phone call.

**The Sequence Is Pricked Rule.** Where order is real (visit steps, route legs), the items are joined by a line of pounce dots (1.1px charcoal dots every 9px). Unordered lists do not get the dotted line.

## Elevation & Depth

Paper is flat. Depth appears only where the world has a real object with thickness: a fired tile on the table and the pricked sheet lifted above it. The title block is not elevated; it is paper laid over paper (93% opaque ground plus a charcoal frame). Text that sits over the pricked field is lifted off the holes with a soft paper-coloured halo, not a shadow.

### Shadow Vocabulary
- **Fired tile** (`box-shadow: 0 1px 2px rgb(27 34 64 / .12), 0 10px 24px -12px rgb(27 34 64 / .3)`): under the painted tile only, tinted with Tahrir Ink.
- **Lifted sheet** (`filter: drop-shadow(-6px 3px 6px rgb(47 46 49 / .22))`): under the pricked sheet that half-covers each tile.
- **Paper halo** (`text-shadow: 0 0 18px var(--kagit), 0 0 6px var(--kagit)`): hero headline and lead over the pricked motif, for legibility.

### Named Rules
**The Only Objects Cast Shadows Rule.** UI chrome (buttons, title block, nav, tables, footer) is shadowless. A shadow means a physical tile or sheet.

## Shapes

Square corners throughout: buttons, the title block, tiles, tables and the footer all have 0 radius. Circles are reserved for what a needle or compass makes: needle holes and dust, numbered step rings (40px, 1px charcoal), route stations (13px), and the 8px open-now dot. Lines are 1px hairlines; the only heavier strokes are the drafting frame of the title block (1px charcoal against hairline cells) and the 2px link underline on hover. The pricked sheet over a tile is cut with a straight vertical edge (clip-path inset from 46% to 88%), like paper folded back.

## Components

### Buttons
Paint on paper: the primary action is the brushstroke, the secondary is drafted.
- **Shape:** square (0), full cell of the title block, two side by side.
- **Primary:** İznik Cobalt fill, Glaze White text, Geologica 500, 14px 12px, centred. Hover deepens to Kiln-Deep Cobalt over 0.2s `cubic-bezier(.2,.8,.2,1)`.
- **Secondary:** transparent on paper, charcoal text, 1px charcoal left rule separating it from the primary. Hover fills with Handled Paper.
- **Focus:** 2px cobalt outline, 3px offset, everywhere; on the cobalt footer the ring turns Glaze White.

### Title Block (antet)
The signature container: the information box in the corner of a technical drawing.
- **Frame:** 1px charcoal outline, Tracing Paper at 93%, width min(420px, 100%).
- **Rows:** two-column grid (6.5rem term, then value), 10px 12px cells, hairline between rows and between term and value. Terms in graphite, values in charcoal.
- **Content:** address, a live "today" status computed in Europe/Istanbul time (weight 500, turquoise dot when open), and the sheet's own identity ("KC-01 Saz ve lale, ölçek 1:1").
- **Actions:** the button pair forms the bottom row of the block.

### Navigation
- **Style:** the wordmark "Kobalt Çini" in Gloock 1.5rem, charcoal, no underline; links in Geologica ~0.98rem graphite, 26px apart, laid over the hero.
- **Hover:** charcoal with underline. No active or filled state.
- **Mobile:** wraps under the wordmark; no hamburger.

### Links
Cobalt with a 1px underline at 0.22em offset; hover thickens the underline to 2px. On the footer, links are Glaze White.

### Pattern Tile (desen)
A painted tile with its own pricked sheet half lifted over it.
- **Tile:** square, Glaze White body, Tahrir Ink outlines, paint fills in cobalt, turquoise and coral; Fired tile shadow. It is a toggle button (`aria-pressed`).
- **Sheet:** the same drawing rendered as dashed charcoal lines (dash 0 3.4, stroke 1.9) on Tracing Paper with no paint, covering the right 54%. Hover or press peels it back to 12% over 0.6s `cubic-bezier(.16,1,.3,1)`.
- **Caption:** tabular semibold code (KC-01) followed by the plain name.

### Sequence Lists
- **Visit steps:** Gloock numerals in 40px charcoal rings on paper, joined by a pounce-dot line; title then graphite body.
- **Route:** 13px hollow station rings joined vertically by pounce dots; the last station (the atelier) is filled cobalt. Place names in Gloock, legs in graphite.

### Workshop Table
Ruled like a ledger: graphite 0.92rem headings over a 1px charcoal rule, rows divided by hairlines, 14px vertical cell padding, tabular figures, no fills or zebra striping.

### Glazed Footer
The page ends on a painted tile: full-bleed İznik Cobalt, Glaze White text, a Gloock closing line at headline size, then address/hours and contact in a 1.4 : 1 : 1 grid, with the demo disclaimer at 78% white beneath.

## Do's and Don'ts

### Do:
- **Do** keep the ground Tracing Paper and let charcoal, graphite and hairlines carry all unpainted structure.
- **Do** reserve İznik Cobalt for painted things: the primary action, links, focus, selection, tile paint, the destination marker and the footer.
- **Do** put address, today's status and the directions/call actions together in the title block.
- **Do** start every new section as a sheet: 1px hairline at the bottom, 22px graphite registration marks at the top corners.
- **Do** join genuinely ordered steps with a pounce-dot line (1.1px charcoal dots every 9px).
- **Do** keep corners square; use circles only for holes, step rings, route stations and the status dot.
- **Do** give text over the pricked motif a paper-coloured halo rather than a box or a shadow.
- **Do** honour reduced motion: show the finished dusted state and drop the peel transition.

### Don't:
- **Don't** build the category's split hero of a cobalt tile photo beside a headline.
- **Don't** use cobalt as a background wash, tint, card fill or decorative accent on unpainted UI.
- **Don't** use turquoise or coral outside painted tiles, except the open-now dot.
- **Don't** put shadows on buttons, the title block, nav, tables or the footer; shadows belong to tiles and lifted sheets.
- **Don't** round corners on buttons, blocks, tiles or tables.
- **Don't** set Caveat above a heading, as a label, in a button, or more than once per sheet.
- **Don't** separate sections with background colour bands or cards.
