# KRAZYKITTY // ECOSYSTEM

KrazyKitty.dev is the public home of the **KRAZYKITTY // ECOSYSTEM** and its supporting
**DEVELOPMENT UNIVERSE**.

The site is a dependency-free static build: semantic HTML, CSS and a small amount of
vanilla JavaScript. It has no framework, build step, analytics, cookies or third-party
runtime requests.

Public content snapshot: **10 October 2026**.

## Public identity

- Primary identity: **KRAZYKITTY // ECOSYSTEM**
- Supporting descriptor: **DEVELOPMENT UNIVERSE**
- Hero line: **SYSTEMS • SECURITY • INFRASTRUCTURE • AI**
- Public author identity: **Kitty / KrazyKitty**
- Education wording: **Computer Science student**

The previous public names for the Linux and control-plane projects are intentionally not
used. Their public names are now **KITTY//LINUX** and **KITTY//NEXUS**.

## Site structure

    index.html
    assets/
      css/
        fonts.css
        kk-tokens.css
        site.css
      js/
        main.js
      img/
        avatar.webp
        favicon.svg
        hero-ecosystem-1280.webp
        hero-ecosystem-2172.webp
        og-ecosystem.jpg
      fonts/
        self-hosted Orbitron, Inter and Share Tech Mono files

Older artwork remains in the asset folder for provenance, but the page does not reference
the retired hero or social card.

## Information architecture

1. Hero and public identity
2. Current public priority stack
3. Conceptual ecosystem map
4. Featured project registry
5. Seven-family Development Universe
6. Public technical roadmap
7. About, engineering principles and contact

The full Development Universe is a catalogue of named systems, modules and concepts. It is
not a claim that every entry is a completed application.

## Status model

The site deliberately separates two dimensions:

| Dimension | Values | Meaning |
|---|---|---|
| Lifecycle | Operating, Active, Maintaining, Planned | How mature or active the project is |
| Priority | P0, P1, P2, P3 | Where attention currently sits |

**Operating** means observed running or in use at the dated review point. It is not a
blanket security, backup or availability claim. **Active** means current development, not
production readiness. **Planned** content remains clearly labelled.

The public work-in-progress rule is a maximum of three heavy coding tracks at once. The
portfolio can contain more active projects because some work is staged, maintained or
waiting at a gate.

## Public-content boundary

Do not add:

- credentials, tokens, private keys or secrets;
- private IP addresses, host identifiers or detailed network topology;
- Discord or Telegram identifiers that have not been approved for publication;
- private personal planning, logistics or non-technical master-plan material;
- claims that proposed concepts are complete or deployed.

Private repositories can be described at a high level but are not linked. Public links
must be checked before publication.

## Design system

**assets/css/kk-tokens.css** is the unchanged token layer from KrazyKitty Design System
v0.1.0. Site-specific composition lives in **assets/css/site.css**.

The site layer adds the approved Naming Archive palette:

| Role | Value |
|---|---|
| Obsidian background | #090611 |
| Electric violet | #8B5CF6 |
| Neon amethyst | #A855F7 |
| Soft lavender | #D8B4FE |

Cyan is used sparingly for technical metadata. Green is reserved for positively verified
operating state and is always paired with a word or symbol.

The Naming Archive and Development Universe artwork are visual inspiration only. They are
not embedded as evidence or treated as implementation specifications.

## Artwork

The current hero and social card form one coordinated visual system:

- **hero-ecosystem-1280.webp** — responsive hero source for smaller viewports;
- **hero-ecosystem-2172.webp** — large-screen hero source;
- **og-ecosystem.jpg** — 1200 × 630 Open Graph card.

The hero contains no required text; identity copy remains real HTML for accessibility,
responsive layout and accurate rendering. The Open Graph card includes only the approved
public identity.

## Preview locally

Windows PowerShell:

    py -m http.server 8080

Linux or macOS:

    python3 -m http.server 8080

Then open:

    http://127.0.0.1:8080/

Serving over HTTP is preferable to opening the file directly because it matches browser
loading and Content Security Policy behaviour more closely.

## Updating project cards

Each featured project is an article with:

- a lifecycle value in the data-status attribute;
- a separate priority badge;
- a public-safe summary;
- technology tags;
- a native details disclosure for current state and next gate.

When adding or changing a card:

1. Confirm the public project name.
2. Verify the lifecycle and priority independently.
3. Use the dated source evidence available at the time.
4. Avoid exposing private paths, identifiers or operational details.
5. Add a new filter only when it represents a genuinely distinct lifecycle.
6. Re-run keyboard, mobile-width and no-JavaScript checks.

## Accessibility and performance

- Semantic landmarks and a single page-level heading.
- Sequential heading structure.
- Keyboard-visible focus rings and a skip link.
- Mobile navigation with Escape dismissal and accurate expanded state.
- Native details and summary disclosures.
- Project-filter announcements through one polite status region.
- A no-JavaScript fallback that keeps all content visible.
- Motion disabled by default when reduced motion is requested.
- No global near-zero animation-duration override.
- Explicit image dimensions to reduce layout shift.
- Responsive WebP hero sources discovered directly from HTML.
- One high-priority hero image; below-the-fold avatar is lazy-loaded.
- Self-hosted fonts and deferred, dependency-free JavaScript.
- Forced-colours and increased-contrast adaptations.

Automated testing cannot establish full WCAG conformance. Keyboard, screen-reader and
real-device review remain human checks.

## Deployment example

Send the Content Security Policy as an HTTP header. This static site needs no external
runtime origin.

    krazykitty.dev {
        root * /srv/krazykitty-ecosystem
        file_server
        encode zstd gzip

        header {
            Content-Security-Policy "default-src 'none'; img-src 'self'; style-src 'self'; script-src 'self'; font-src 'self'; connect-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'"
            X-Content-Type-Options nosniff
            Referrer-Policy strict-origin-when-cross-origin
            Strict-Transport-Security "max-age=31536000"
            Permissions-Policy "camera=(), microphone=(), geolocation=()"
        }

        @static path /assets/*
        header @static Cache-Control "public, max-age=86400"
    }

    www.krazykitty.dev {
        redir https://krazykitty.dev{uri} permanent
    }

Use versioned filenames or content hashes before switching static assets to immutable,
year-long caching.

## Verification checklist

- HTML structure and local asset references
- JavaScript syntax
- Retired-name and private-content scan
- Desktop and mobile screenshots
- Horizontal-overflow check
- Navigation, project filters, effects control and details disclosures
- Keyboard-only walkthrough
- Reduced-motion and no-JavaScript behaviour
- Screen-reader and real-device review

### Validation performed for this update

- HTML validation: passed with `html-validate`.
- JavaScript syntax: passed with `node --check`.
- Local asset reference audit: passed with no missing files.
- Retired-name and private-content scan: passed with no matches.
- Generated hero and social-card artwork: visually inspected before optimisation.
- Live desktop/mobile browser walkthrough: not completed because the isolated app browser
  could not reach the temporary host preview server. Treat this, keyboard-only review,
  screen-reader review and real-device review as release checks rather than completed tests.
