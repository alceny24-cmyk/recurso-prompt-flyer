# Design

## Theme

Light only. Pure white surface, near-black ink, one deep teal-blue accent (seed hue 200°) used sparingly — the "Copiar Prompt" button, links, and focus rings. Strategy: **restrained** (tinted neutrals + accent ≤10% of surface). The page reads like documentation, not marketing: the accent exists to mark the one action that matters.

## Color (OKLCH)

```css
--bg:      oklch(1.000 0.000 0);      /* pure white */
--surface: oklch(0.970 0.004 200);    /* prompt box / tip box background, barely tinted */
--border:  oklch(0.890 0.006 200);    /* hairline borders */
--ink:     oklch(0.150 0.010 200);    /* body text, ~18:1 vs bg */
--muted:   oklch(0.480 0.012 200);    /* secondary text, ~7:1 vs bg */
--primary: oklch(0.450 0.090 200);    /* accent: button fill, links, focus ring */
--primary-ink: oklch(1.000 0.000 0);  /* white text on primary fill */
--success: oklch(0.550 0.120 155);    /* copied-state check, distinct hue from primary */
```

Contrast checked: ink/bg ≈ 18:1, muted/bg ≈ 7:1, primary-ink/primary ≈ 6.8:1. All pass WCAG AA at body size.

## Typography

- **Sans (UI + body)**: Geist Sans (next/font/google fallback: system-ui) — matches the Vercel/Notion register, excellent at small sizes on mobile.
- **Mono (the prompt itself)**: Geist Mono. The prompt box is set in monospace deliberately: it signals "this is literal text," distinct from the surrounding prose.
- Scale (mobile-first, clamp for hero title only):
  - Eyebrow / label: 13px, uppercase, letter-spacing 0.02em, muted — used exactly once (Recurso #001), not as a repeating section kicker.
  - H1: clamp(1.75rem, 5vw + 1rem, 2.75rem), weight 600, letter-spacing -0.02em, `text-wrap: balance`.
  - Subtitle: 17px/1.6, muted.
  - Section H2: 20px, weight 600.
  - Body: 16px/1.7, ink.
  - Prompt mono text: 14px/1.65.
- Line length capped at ~65ch on the prose sections.

## Layout

- Single column, max-width 640px, centered, generous vertical rhythm (section gaps 56–72px, mobile 40–48px).
- No cards-as-decoration. The prompt box and tip box are the only two bounded containers on the page, each justified by function (one holds copyable code, one is a discreet callout).
- Steps list: numbered list styled as a real ordered sequence (it IS one — 5 literal steps in order), not a decorative eyebrow pattern.

## Components

- **Copy button**: solid `--primary` fill, white text, 10px radius, min 44px tap height. On click: label swaps to "✓ Prompt copiado" using `--success` text on transparent/outline state, reverts after 2s. No layout shift on swap (reserve width).
- **Prompt box**: `--surface` background, 1px `--border`, 12px radius, monospace text, horizontal scroll disabled (wraps), button anchored top-right or full-width below on mobile.
- **Tip box**: no border-left accent stripe (banned pattern) — instead a full 1px border all around at `--border`, `--surface` fill, small label "Consejo" in muted weight-600, same radius as prompt box for visual consistency.

## Motion

- Copy button state change: 150ms ease-out-quart crossfade between label states, plus a subtle scale (1 → 0.98 → 1) on click confirmation. No bounce.
- Respect `prefers-reduced-motion`: disable the scale, keep only the instant/crossfade label swap.
- No scroll-triggered reveals — the page is short enough that everything should be usable immediately without motion gating visibility.

## Accessibility

- Copy button: `aria-live="polite"` region announces "Prompt copiado" for screen readers.
- Focus ring: 2px solid `--primary` with 2px offset, visible on all interactive elements.
- Tap targets ≥44px on mobile.
