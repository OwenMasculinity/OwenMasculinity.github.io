# Lingxiao Zhang · Academic homepage

Static personal website served by GitHub Pages. This repository contains published HTML rather than a complete Hugo source project. No package installation is needed.

## Update the homepage

1. Edit bilingual profile text and publications in `scripts/build-home.mjs`.
2. Edit `academic.css` for layout and typography.
3. Run `node scripts/build-home.mjs` (Node.js 18 or later).
4. Preview with `node scripts/preview.mjs` and visit `http://127.0.0.1:4174/`, `/en/`, and `/zh/`.

The generator writes `index.html`, `en/index.html`, and `zh/index.html`. These are checked in for direct GitHub Pages hosting without a build step. Root content matches English; both language versions have explicit language links.

## Content sources

Affiliation, interests, and the three listed publications were checked against [Google Scholar](https://scholar.google.com/citations?user=sNbks6EAAAAJ&hl=en) on 2026-10-28. The owner confirmed using the Scholar affiliation. No current job title or employment dates have been inferred. Education, portrait, and email come from the previous homepage.

The two 2026 arXiv papers are labeled **preprints**. Match4rec links to its ICONIP 2020 publication and an arXiv PDF. Citation counts remain on Scholar rather than duplicated as static metrics.

The introduction and current algorithm-engineer role were updated using the owner's October 2026 résumé. It focuses on LLM agents, search and recommendation, and multimodal retrieval, with a brief mention of prior roles at Huawei and Alibaba. Paper-specific implementation details remain outside the biography. The education section uses the degree names from that résumé. Private résumé contact details and internal performance metrics are not copied to the site.

## Layout

The layout follows the owner's reference, [Zheqing (Bill) Zhu's homepage](https://www.zheqingbillzhu.com/): a photo and name beside affiliation and contact information, followed by full-width biography paragraphs and compact publication and education lists. Styling uses a white background, plain text links, and a single-column flow below the profile header. At narrow widths the profile header stacks vertically.

## Earlier material

Existing project, article, and publication detail URLs are retained. The homepage links to project and writing archives, but no longer features old skill percentages, template tutorials, student office hours, an old campus address, or the third-party contact form. Contact uses a direct email link.

The older `config.toml`, `update_academic.sh`, and `netlify.toml` belong to the legacy Academic/Hugo setup. They do not generate the redesigned homepage. Do not run the old updater to maintain these pages.

Original Academic theme material remains under its existing MIT license; see `LICENSE.md`.
