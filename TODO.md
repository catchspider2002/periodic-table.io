# TODO — periodic-table.io

Action list as of **2026-07-17**. Grouped by what *you* need to do. Details/rationale for each
feedback item live in [FEEDBACK_TRIAGE.md](FEEDBACK_TRIAGE.md).

---

## 1. Build & deploy the next batch  🔨

All the changes below are **staged in source** (not built). One build ships them together.

```
npm run build      # = minify-css + minify-js + node htmlGenerator.js
```
Then deploy the per-language dirs (Cloudflare Pages). Changelog entry **"Aug 2, 2026"** is ready.

**In this batch (source edits this session):**
- [ ] **Element Quiz (Pro feature)** (#102924) — new page `quiz.html`. `htmlQuiz.js` + `quiz-client.js` (new), wired into `htmlGenerator.js` (pages + switch + nav link) + CSS. Gated on the `ptio_pro` cookie.
- [ ] **Chemistry Tools** — new **Tools** nav dropdown. Pages so far: **Molar Mass** (#139736), **Percent Composition**, **Empirical Formula** (Pro), **Dilution** (#—), **Equation Balancer** (#192759, Pro). Parameterized generator `htmlTool.js` + engines `molar-client.js` / `balancer-client.js` / `empirical-client.js` / `dilution-client.js` (new) + CSS. Add more via `TOOLS` in `htmlTool.js` + `pages` entry + dropdown link. **Gating still TBD** — currently Molar/Percent/Dilution free, Empirical/Balancer Pro; flip by swapping a tool's `init` controller (gated vs free).
- [ ] **Emission spectra on element pages** (#103544, 26 votes) — `htmlSpectra.js` + `spectra-data.js` (new), wired in `htmlElement.js` + CSS. 93/99 elements.
- [ ] **Prev/next element navigation** — arrow keys / swipe / sideways scroll (#107278, 26 votes) — `htmlJS_actual.js`.
- [ ] **Solubility chart ion charges** now superscripts, e.g. Mg²⁺ (#286412) — `htmlSolubility.js`.
- [ ] **Thorium-232 no longer "stable"** (#230631) — `htmlElement.js`.
- [ ] **Settings panel** Safari selection + mobile clipping fixes — `global_actual.css`.
- [ ] **Deleted the dead 2020 root SPA** (57 files: `locales/`, `constants.js`, `constants.min.js`, root `*.html`, `sw.js`) — staged as deletions; commit to remove.
- [ ] **Fixed HTML entities from the Excel** — the `read-excel-file` `9.2.0 → 9.3.1` bump (in the already-staged `package.json`) stopped decoding XLSX entities, so `<br>`/`<sup>`/`<a>` were showing as literal `&lt;br&gt;` in history/uses/facts on every rebuilt page. New `decodeEntities.js`, applied in `htmlGenerator.js` / `htmlElement.js` / `htmlCredits.js` / `og-images/createSVG.js`. **Do not remove while on read-excel-file ≥ 9.3.**

**Verify after deploy:** open an element page (spectrum shows; ←/→ + swipe navigates), Settings on
Safari + a phone, and the solubility chart charges.

---

## 2. Decisions only you can make  🤔

- [ ] **Caesium / Bismuth radioactivity** (#226018, #327513, #120396 — keeps recurring). Pick one
      convention and apply to **both** in `htmlConstants.js` (`rdo`): primordial-stability
      (Cs = not radioactive) **or** has-any-radioactive-isotope (then Bi should also be flagged).
      Currently Cs = radioactive, Bi = not — the inconsistent combo.
- [ ] **Nihonium (113) Chinese name** (#184264, 5 votes): keep `鉨` (current) or switch to mainland
      `鿭`? One Excel string.
- [ ] **Argon in pt-br** (#715361): post asked for "Argônio"; both pt and pt-br currently show
      "Árgon". Adopt "Argônio" for pt-br, or keep "Árgon"? One Excel string (col 48).
- [ ] **Old `src/html/` templates + `src/js/btstrp.list.iso.js`** — I left these; if the generators
      build pages from string arrays (not these templates), they're likely also dead. Say the word
      and I'll verify + remove.

---

## 3. Feedback board housekeeping  🗂️

- [ ] **Close (already live via Excel):** 463180, 274025, 221548, 714359 (Chinese 117/118); 323642
      (sort by number — already on the list page).
- [ ] **Close after this deploy:** 103544, 107278, 286412, 230631.
- [ ] **Reclassify** 230150 (Tc half-life) & 482441 (I-123 decay) → the site shows no half-life /
      decay-mode data, so these need a new data field, not a fix. Mark not-planned or feature-request.
- [ ] **Merge duplicate clusters:** La/Ac→d-block (202104 + 639397 + merged), Chinese-name fixes,
      "fit table to window" (104759/119407/122417/127567).
- [ ] **App-only batch** (if the Windows Store app is retired): 520092, 187654, 234737, 323650,
      233338, 141889, 303299, 301592.
- [ ] **Reply "not a bug"** to 702721 / 127263 — Cr *is* [Ar]3d⁵4s¹ (the requesters are mistaken).

---

## 4. Backlog — next features (by votes)

Web-relevant, still open:
- **202104 — La/Ac in group-3 d-block (15 votes)** — needs your scientific stance (IUPAC group-3
  debate); it's a real table-layout change.
- **126641 — Chinese pinyin pronunciation (11)** — data task (pinyin for element names).
- **122803 — covalency (10)** / **104843 — s/p/d/f orbital animation (10)**.
- **104759 + cluster — fit table to window / responsive scaling (~15 combined)** — high impact,
  higher risk (reworks the table layout).
- **Group A/B labels toggle (~5 posts: 350230, 216077, 143762, 282968)** — clean, low-risk, data
  already present.

Small self-contained: **129023** (Tennessine image error), **171774** (font-size toggle, 1 vote).

Bigger/data-heavy (defer): X-ray emission lines (comment on 103544), calculators/compound builder,
quiz/flashcards.
