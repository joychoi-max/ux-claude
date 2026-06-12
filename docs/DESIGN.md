---
id: goodlucky
name: "Good Lucky (굿럭키)"
country: KR
category: productivity
homepage: ""
primary_color: "#FF8D00"
logo:
  type: none
  slug: ""
verified: "2026-06-12"
omd: "0.1"
runtime_deps:
  icons: "@phosphor-icons/react"
  fonts: ["Pretendard Variable", "Pretendard"]
tokens:
  source: reference-derived
  extracted: "2026-06-09"
  colors:
    primary: "#FF8D00"
    primary-600: "#FD7E14"
    primary-700: "#F76707"
    primary-800: "#E8590C"
    primary-900: "#D9480F"
    primary-100: "#FFF4E6"
    primary-300: "#FFD8A8"
    surface-10: "#FBFCFD"
    surface-20: "#F7F9FA"
    surface-40: "#F1F3F6"
    border: "#DFE1E2"
    placeholder: "#A9AEB1"
    meta: "#8D9297"
    body: "#71767A"
    body-root: "#565C65"
    strong: "#3D4551"
    heading: "#1C1D1F"
    canvas: "#FFFFFF"
    info: "#228BE6"
    yellow: "#FCC419"
    error: "#FA5252"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    h-32:    { size: 32, weight: 700, lineHeight: 1.31, use: "Large display heading" }
    h-28:    { size: 28, weight: 700, lineHeight: 1.36, use: "Heading" }
    h-24:    { size: 24, weight: 700, lineHeight: 1.33, use: "Section heading" }
    h-22:    { size: 22, weight: 700, lineHeight: 1.36, use: "Section heading" }
    h-20:    { size: 20, weight: 600, lineHeight: 1.4, use: "Subheading" }
    body-17: { size: 17, weight: 400, lineHeight: 1.41, use: "Body / button label at 600" }
    body-16: { size: 16, weight: 400, lineHeight: 1.5, use: "Body default" }
    body-15: { size: 15, weight: 400, lineHeight: 1.47, use: "Body small" }
    caption: { size: 12, weight: 600, lineHeight: 1.5, use: "Meta / timestamps" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 96 }
  rounded: { sm: 8, md: 12, lg: 32, full: 9999 }
  shadow:
    floating: "0px 2px 8px rgba(0,0,0,0.08)"
    modal: "0px 4px 8px rgba(0,0,0,0.08)"
    dropdown: "0px 8px 16px rgba(0,0,0,0.16)"
  components:
    button-primary: { type: button, bg: "#FD7E14", fg: "#FFFFFF", radius: 12, font: "17px/600", use: "Primary solid CTA" }
    button-outline: { type: button, bg: "#FFFFFF", fg: "#FD7E14", radius: 12, padding: "16px 24px", font: "16px/600", use: "Primary outline (1px #FD7E14 border)" }
    button-disabled: { type: button, bg: "#DFE1E2", fg: "#A9AEB1", radius: 12, padding: "16px 24px", font: "16px/500", use: "Ghost / disabled" }
    tag-primary: { type: badge, bg: "#FFF4E6", fg: "#F76707", radius: 9999, padding: "4px 10px", font: "12px/600", use: "Primary tag chip" }
    tag-gray: { type: badge, bg: "#F1F3F6", fg: "#71767A", radius: 9999, padding: "4px 10px", font: "12px/500", use: "Gray tag chip" }
    card: { type: card, bg: "#FFFFFF", radius: 32, padding: "24px", use: "Content card, 1px #DFE1E2 border" }
    section-card: { type: card, bg: "#F1F3F6", radius: 32, use: "Section background card" }
    nav-item: { type: tab, bg: "transparent", fg: "#DFE1E2", radius: 8, padding: "0px 12px", font: "16px/400", active: "text #FD7E14, weight 700", use: "Navigation item" }
  components_harvested: true
---

Good Lucky (굿럭키) — a warm, capable AI companion that helps you run your day, morning to night, and quietly carries your goals to the finish line.

## 1. Visual Theme & Atmosphere

Good Lucky (굿럭키) is built around a single relationship: 럭키 (Lucky), the AI secretary who stays by your side through morning, noon, and night — warm enough to catch the days you fall short, persistent enough to make sure your goals still get done. The interface translates this into a warm, energetic orange language set against a clean off-white and neutral gray canvas. Where most productivity apps reach for cold blues, dense data tables, or the guilt-tinted reds of streak counters, Good Lucky deliberately chose a warm orange — a color that reads as encouragement and steady presence, the warmth of someone in your corner rather than a tool grading your performance. The result feels closer to a trusted companion than a habit tracker.

The typography is Pretendard Variable, the gold-standard Korean system font — its clean geometric letterforms balance composure with everyday-app readability, matching a voice that keeps its manners but never goes cold. The neutral gray scale runs from the near-white surface `#FBFCFD` (G10) through rich charcoal `#1C1D1F` (G900), creating quiet, clean backdrops that let the orange CTAs and primary actions stand out without visual noise. Card surfaces use `#FFFFFF` with `1px solid #DFE1E2` borders and 32px radii for a friendly, rounded feel.

Motion is purposefully gentle — slide-up sheets and fade-in transitions at 300ms reinforce that Good Lucky is calm and reassuring, never nagging or frantic. The interface hierarchy is clear: orange invites, gray informs, white breathes.

## 2. Color Palette & Roles

### Primary (Warm Orange Scale — token vars --P100 to --P900)
- **Primary 500:** `#FF8D00` — Good Lucky's anchor orange, the warmth of a companion in your corner; used in timeline markers, accent text, key moments
- **Primary 600:** `#FD7E14` — CTA button fills, active nav link text, featured badge backgrounds
- **Primary 700:** `#F76707` — hover on orange elements, pressed states, high-emphasis text
- **Primary 800:** `#E8590C` — deep hover, secondary destructive-adjacent accents
- **Primary 900:** `#D9480F` — CTA gradient start, deepest brand orange
- **Primary 100:** `#FFF4E6` — tinted surfaces, pill tag backgrounds, info banners
- **Primary 300:** `#FFD8A8` — divider gradient, warm illustration fill

### Neutral (Gray Scale — token vars --G10 to --G900)
- **Surface 10:** `#FBFCFD` — page background variant (G10)
- **Surface 20:** `#F7F9FA` — secondary page background, tag fills (G20)
- **Surface 40:** `#F1F3F6` — review section background, card dividers (G40)
- **Gray 100:** `#DFE1E2` — default border, card outline, separator lines (G100)
- **Gray 300:** `#A9AEB1` — placeholder text, disabled borders (G300)
- **Gray 400:** `#8D9297` — secondary labels, metadata text (G400)
- **Gray 500:** `#71767A` — body text default (G500)
- **Gray 600:** `#565C65` — body color root default (G600)
- **Gray 700:** `#3D4551` — secondary headings, strong body (G700)
- **Gray 900:** `#1C1D1F` — primary headings, dark emphasis (G900)

### Accent & System
- **White:** `#FFFFFF` — card surface, modal background, CTA text
- **Blue 600:** `#228BE6` — information chips, system links, secondary action text
- **Yellow 500:** `#FCC419` — star rating, highlight badge
- **Error Red:** `#FA5252` — destructive action, form error state

## 3. Typography Rules

Good Lucky uses **Pretendard Variable** exclusively, specified as `Pretendard Variable, Pretendard` with a full Korean system font fallback chain (Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic). Pretendard ships under the OFL and covers the full Korean glyph set, so all in-app Korean copy renders cleanly without substitution. (Typography family token retained from the reference — see `runtime_deps`.)

**Type Scale (from CSS typography utility classes):**

| Class suffix | Size | Line-height | Weights available |
|---|---|---|---|
| `-32b/sb` | 32px | 42px | 700 / 600 |
| `-28b` | 28px | 38px | 700 |
| `-24b/sb` | 24px | 32px | 700 / 600 |
| `-22b/sb` | 22px | 30px | 700 / 600 |
| `-20b/sb` | 20px | 28px | 700 / 600 |
| `-18b/sb/m` | 18px | 26px | 700 / 600 / 500 |
| `-17b/sb/m/r` | 17px | 24px | 700 / 600 / 500 / 400 |
| `-16b/sb/m/r` | 16px | 24px | 700 / 600 / 500 / 400 |
| `-15b/sb/m/r` | 15px | 22px | 700 / 600 / 500 / 400 |
| `-14b/sb/m/r` | 14px | 20px | 700 / 600 / 500 / 400 |
| `-12sb` | 12px | 18px | 600 |

**Rules:**
- CTA button labels: 17px / 600 (SemiBold)
- Body default: 15px–16px / 400–500
- Section headings: 22px–32px / 700
- Meta / timestamps: 12px–14px / 400
- All text: `-webkit-font-smoothing: antialiased` applied globally
- No italic in UI text; `font-style: normal` enforced in typography utility classes

## 4. Component Stylings

### Primary CTA Button

**Brand Gradient CTA (`.btn-now`)**
- Background: `linear-gradient(90deg, #D9480F 0%, #F3463B 100%)`
- Text: `#FFFFFF`
- Radius: 12px
- Padding: 16px 54px
- Font: 17px / 600

**Primary Solid (`.bg-primary-600`)**
- Background: `#FD7E14`
- Text: `#FFFFFF`
- Radius: 12px
- Font: 17px / 600

**Primary Outline**
- Background: `#FFFFFF`
- Text: `#FD7E14`
- Border: 1px solid `#FD7E14`
- Radius: 12px
- Padding: 16px 24px
- Font: 16px / 600

**Ghost / Disabled**
- Background: `#DFE1E2`
- Text: `#A9AEB1`
- Radius: 12px
- Padding: 16px 24px
- Font: 16px / 500

### Tag / Badge Chip

**Primary Tag**
- Background: `#FFF4E6`
- Text: `#F76707`
- Radius: 99px
- Padding: 4px 10px
- Font: 12px / 600

**Gray Tag**
- Background: `#F1F3F6`
- Text: `#71767A`
- Radius: 99px
- Padding: 4px 10px
- Font: 12px / 500

### Card / Review Slide

**Content Card**
- Background: `#FFFFFF`
- Border: 1px solid `#DFE1E2`
- Radius: 32px
- Padding: 24px

**Section Background Card**
- Background: `#F1F3F6`
- Radius: 32px

### Navigation Item

**Active Nav Link**
- Background: transparent
- Text: `#FD7E14`
- Radius: 8px
- Height: 40px
- Padding: 0px 12px
- Font: 16px / 700

**Default Nav Link**
- Background: transparent
- Text: `#DFE1E2`
- Radius: 8px
- Height: 40px
- Padding: 0px 12px
- Font: 16px / 400

---
**Conversion note:** Visual tokens (color values, type scale, spacing, radius, shadow, component metrics, motion durations/easing) are retained verbatim from a verified reference design system. Meta, naming, Voice & Tone, Principles reasoning, and all UI copy are rewritten against `docs/brandvoice.md` (굿럭키). The warm orange palette is deliberately kept (per brand decision) and reframed as encouragement/steady presence rather than its original domain meaning. The deep gradient (`#D9480F → #F3463B`) and the solid `#FD7E14` are two intentionally separate CTA surfaces — gradient for landing/marketing, solid for in-app actions.

## 5. Layout Principles

Good Lucky uses a **max-width 1050px centered content container** (`width: 92%; max-width: 1050px`) for all landing and marketing pages, with generous vertical section padding of 96px–128px. The mobile breakpoint is at 768px, where multi-column grids collapse to single-column vertical stacks.

- **Web app:** Tailwind-based, responsive grid, max-width 1064px for some breakpoints
- **Marketing pages:** Fixed-width centered layout, 92% container, generous whitespace
- **Spacing system:** 8px base unit; common values are 4, 8, 12, 16, 24, 32, 40, 48, 64, 96px
- **Card grid:** Items arranged in 2–3 columns on desktop, stacking to 1 on mobile
- **Navigation:** Fixed 64px top bar; content offset by `padding-top: 64px`

## 6. Depth & Elevation

Good Lucky employs a restrained shadow system — surfaces are differentiated primarily through background color rather than heavy drop shadows, keeping the interface calm and low-pressure.

- **Level 0 — Page surface:** `#FBFCFD` or `#F7F9FA` — no shadow
- **Level 1 — Default card:** `#FFFFFF` with `1px solid #DFE1E2` — flat border elevation
- **Level 2 — Floating card:** `box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08)` — light lift
- **Level 3 — Modal / Bottom sheet:** `box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08)` — medium elevation
- **Level 4 — Tooltip / Dropdown:** `box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16)` — prominent float
- **Level 5 — Overlay scrim:** `background-color: rgba(0, 0, 0, 0.06)` to `rgba(0, 0, 0, 0.12)` — modal backdrop
- **Inset surface accent:** `inset 0px 0px 32px rgba(0, 0, 0, 0.04)` — used on section review blocks

## 7. Do's and Don'ts

### Do
- Use `#FF8D00` (P500) or `#FD7E14` (P600) as the primary brand orange for all key CTAs and active states
- Apply 12px radius to primary buttons and 32px radius to cards and content panels
- Use Pretendard Variable with the full Korean fallback chain for all UI text
- Keep neutral grays for secondary content — body copy defaults to `#71767A` (G500) against `#FBFCFD` backgrounds
- Apply `ease-out` transitions at 200–300ms for all enter/exit micro-interactions
- Use the full gray scale (G10–G900) for nuanced text and surface hierarchy
- Maintain 64px of top breathing room for the fixed navigation bar

### Don't
- Use blue as a primary brand color — Good Lucky's identity is warm orange; blue is reserved for informational chips only
- Apply the deep gradient (`#D9480F → #F3463B`) outside the landing/brand marketing context — it reads as high-energy; in-app CTAs use flat `#FD7E14` to keep the everyday tone calm and unpressured
- Use font weights below 400 or above 700 — the type scale uses Regular (400), Medium (500), SemiBold (600), Bold (700) only
- Mix heavy drop shadows with the card system — Good Lucky elevation is purposefully flat with border-based differentiation
- Place orange text on orange-tinted backgrounds (P700 on P100 may fail contrast at small sizes)
- Use border-radius values that aren't in the established scale (4 / 6 / 8 / 12 / 16 / 32 / 99px)

## 8. Responsive Behavior

- **Breakpoint:** 768px (mobile) and 1064px (large desktop cap for web app)
- **Navigation:** Desktop horizontal nav collapses to a hamburger button at ≤768px
- **Section padding:** Reduces from 96–128px to 48–64px on mobile
- **Typography:** Large display sizes (32–56px) reduce by 1–2 steps on mobile
- **Grid:** 2–3 column layouts collapse to single column at 768px
- **Cards:** Full-width card pattern on mobile, with reduced padding (8px gap instead of 12px)
- **Max widths:** Content capped at 1050px for company pages; web app has flexible grid to 1064px

## 9. Agent Prompt Guide

To generate UI consistent with Good Lucky's design language:

```
Use Pretendard Variable (Korean system font fallback: Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic).
Primary brand color: #FF8D00 (orange). CTA button background: #FD7E14 with white text, 12px radius.
Surface hierarchy: page background #F7F9FA → card #FFFFFF with 1px solid #DFE1E2 border → elevated card with box-shadow 0 2px 8px rgba(0,0,0,0.08).
Neutral text: headings #1C1D1F (G900), body #71767A (G500), meta #8D9297 (G400).
Transitions: 200–300ms ease-out for all state changes.
Card radius: 32px for large content panels, 12px for interactive components, 99px for badge/chip.
Typography scale: 15–16px body (400–500), 17px button (600), 22–32px headings (700).
Avoid cold blue as primary; blue is used only for informational contexts (#228BE6).
```

## 10. Voice & Tone

**Three-word fingerprint:** Warm, Capable, Persistent (다정·유능·끈기, kept composed throughout)

Good Lucky speaks as 럭키 (Lucky) — a capable secretary and a close companion in one. The core tension is a single line: **warm, but your goals still get done.** Not a pushover friend, but someone who looks after you *because they genuinely want you to win.* Lucky never evaluates — it acknowledges; never pressures — it steps into the next move with you. Voice stays in friendly 존댓말 (the `~해요` register), addresses the user as `윤정님`, and proposes (`~해볼까요?`) rather than commands (`~하세요`).

| Dimension | Do | Don't |
|---|---|---|
| Sentence length | Short, one thing at a time — `하나 해냈어요. 좋은 흐름이에요.` | Long, multi-clause reports |
| Vocabulary | Plain spoken Korean, companion-side (`같이 ~해요`, `곁에 있을게요`) | Productivity jargon (`shutdown`, `ToDo clear`, `데일리 리포트`) |
| Tone | Warm, composed, quietly encouraging | Cold report-speak (`확인되었습니다`), anxiety bait (`지금 안 하면 큰일나요`) |
| Perspective | `같이/곁에` — companion alongside you, 1st person | Institutional, evaluative 3rd person |
| Pressure | Gentle invitation (`제일 가벼운 것 하나만`) | Streaks, completion rates, grades, guilt (`🔥 연속 N일`, `완료율 67%`, `성실도 B+`) |

**Voice samples (illustrative — unverified planning copy, modeled on `docs/brandvoice.md`):**

- *`괜찮아요, 이런 날도 있죠. 1개만 같이 가볼까요?`* — receiving a fallen-short day, then offering the next small step.
- *`오후는 아직 충분해요. 제일 가벼운 것 하나만 같이 시작해볼까요?`* — midday check-in, warmth up, pressure down.
- *`오늘 이만큼 했어요. 못 한 건 내일로 옮길까요?`* — evening wrap-up, acknowledgment over evaluation, guilt-free carry-over.
- *`윤정님, 잘 가고 있어요? 아침에 정한 3개, 같이 볼까요.`* — a push notification as a light check-in, no pressure to act.

## 11. Principles

1. **A Companion Through the Whole Day**
   Good Lucky shows up morning, noon, and night — not as a checklist that resets, but as a presence that stays. The product must feel equally warm at the 9am start and the 10pm wrap-up. *UI implication:* Time-of-day framing (🌅 morning / ☀️ noon / 🌙 evening) anchors the home surface; the primary CTA — today's focus — must be immediately findable without scrolling, in `#FD7E14` so it invites without noise.

2. **Acknowledge, Never Evaluate**
   Lucky recognizes effort and flow; it never scores, grades, or guilt-trips. A fallen-short day is met with `이런 날도 있죠`, not a falling completion bar. *UI implication:* No streak counters, completion percentages, or letter grades anywhere in the UI. Progress reads as human-countable language (`3개 중 1개`), and acknowledgment copy uses warm tone, never cold metrics.

3. **Propose First, Don't Wait**
   The capable-secretary half of Lucky steps forward — offering candidates and compressing scatter into a focused few, rather than waiting for the user to figure it out. *UI implication:* Empty states lead with a suggestion (`제가 몇 개 제안해드릴게요`), not a blank canvas; surface the lightest next step first to reduce friction.

4. **Warm Energy Without Pressure**
   Orange signals encouragement and momentum, never "hurry up." The brand's energy must feel like a nudge from someone in your corner, not anxiety bait. *UI implication:* Reserve the deep gradient (`#D9480F → #F3463B`) for landing/marketing contexts only; use flat `#FD7E14` for in-app CTAs. No scarcity, alarm, or `지금 안 하면` framing.

5. **Hold the Days That Fall Short**
   Lucky meets the user on the off days — tired, behind, easy to give up — and turns slack into the next start (`지금부터가 오후예요`). Every touchpoint should feel like a calm, capable presence. *UI implication:* Loading states use gentle skeleton shimmer (1.5s ease-in-out), not anxious spinners; empty and missed states use warm, forward-looking copy, never sterile error codes or red guilt.

## 12. States

- **Empty — Nothing planned yet:** Home with no items set: Lucky steps forward first — friendly icon and `무엇부터 챙길까요? 제가 몇 개 제안해드릴게요.` with proposed candidates — never a blank white screen
- **Loading — Initial fetch:** Full-page skeleton using `.animate-skeleton-shimmer` (1.5s ease-in-out infinite) — gray placeholder rectangles match expected content geometry
- **Loading — Preparing suggestions:** Calm `잠깐만요, 오늘 거 같이 정리할게요` copy with a gentle indicator — conveys activity without urgency, never an anxious spinner framing
- **Error — Network fail:** Toast notification with `#FA5252` border-left accent, warm copy `연결이 잠깐 끊겼어요. 다시 해볼까요?`, retry CTA in `#FD7E14`
- **Missed — Fell short midday:** Inline card state with `#FFF4E6` background and `#F76707` icon — no guilt; acknowledges (`오후는 아직 충분해요`) and surfaces the lightest next step (`제일 가벼운 것 하나만`). Never red, never a falling progress bar
- **Success — Item done:** Bottom sheet slides up (300ms ease-out) with a check icon and `하나 해냈어요. 좋은 흐름이에요 ✨` — the next light step follows immediately
- **Skeleton — Task card:** Rectangular placeholder with shimmer animation matching the task card's height (approximately 96px) and radius (16px)
- **Disabled — Carried to tomorrow:** Chip or button with `#DFE1E2` background, `#A9AEB1` text — still shows the item label (`내일로 옮김`) so users know it's parked, not lost

## 13. Motion & Easing

Good Lucky uses a focused animation vocabulary: enter/exit, slide, and shimmer. Motion reinforces the product's calm, unpressured presence — fast enough to feel responsive, smooth enough to feel reassuring, never frantic or attention-grabbing.

**Duration Scale:**
- `100ms` — micro-interactions (focus ring, checkbox check)
- `200ms` — button hover/press state transitions
- `300ms` — panel enter/exit, toast appear, slide-up sheets (primary UI motion)
- `500ms` — page-level fade transitions
- `1500ms` — skeleton shimmer loop
- `15000ms` — marquee / scroll animations (brand testimonial carousels)

**Easing:**
- `ease-out` (`cubic-bezier(0, 0, 0.2, 1)`) — default for all enter transitions; elements decelerate into rest
- `ease-in` — exit transitions; elements accelerate out cleanly
- `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style standard for screen-level transitions (`screen-slide-in`)
- `linear` — spinner rotation, marquee scrolls
- `ease-in-out` — skeleton shimmer, shake animations (periodic/looping)

**Motion Rules:**
- Bottom sheet: slide up `0.3s ease-out` from `translateY(100%)` to `translateY(0)`
- Page enter: fade+slide — `opacity 500ms ease-out, transform 500ms ease-out` from `translateY(20px)`
- Screen navigation: `screen-slide-in 0.32s cubic-bezier(0.4,0,0.2,1)` from opacity 0
- Skeleton: `skeleton-shimmer 1.5s ease-in-out infinite` — translateX -100% to +100%
- Accordion: `0.2s ease-out` open/close — height from 0 to content height
- Never animate layout-affecting properties; prefer `transform` and `opacity` for 60fps compositing


---

## Included Components

The following components are part of this design system:

- Button
- Input
- Table
- Card
- Badge
- Tabs
- Dialog


---

## Iconography & SVG Guidelines

### Icon Library

Use a single, consistent icon library throughout the project.

- **Phosphor Icons** (`@phosphor-icons/react`) — **confirmed for Good Lucky.** 9,000+ icons across 6 weights (thin → fill, plus duotone) with rounded joins; the warm, friendly, lightly-playful character matches Lucky's voice better than a strictly neutral set. Default to the `regular` weight at 1.5–2px optical stroke; reserve `fill` for active/selected states only. Recorded in frontmatter `runtime_deps.icons`.

Pick ONE library and use it everywhere. Do not mix icon libraries within the same project.

### SVG Usage Rules

- All icons must be inline SVG components (not `<img>` tags) for color and size control.
- Icon size follows the type scale: 16px (inline), 20px (buttons), 24px (standalone).
- Icon color inherits from `currentColor` -- never hard-code fill/stroke colors.
- For custom/brand icons, export as SVG components with `currentColor` fills.
- Stroke width: 1.5px-2px for outline icons. Keep consistent across the project.

### Icon Sizing Scale

| Context | Size | Usage |
|---------|------|-------|
| Inline text | 16px (1rem) | Badges, labels, breadcrumbs |
| Button icon | 18px (1.125rem) | Icon buttons, CTA icons |
| Standalone | 24px (1.5rem) | Navigation, card icons |
| Feature | 32-48px | Hero sections, empty states |

### SVG Optimization

- Run all custom SVGs through SVGO before committing.
- Remove unnecessary attributes: `xmlns`, `xml:space`, editor metadata.
- Use `viewBox` instead of fixed `width`/`height` for scalability.


---

## Document Policies

### Emoji Policy — Restrained, Brand-Specific

Unlike a strict no-emoji system, Good Lucky uses a small, deliberate emoji set as part of its voice — but tightly controlled so it never reads as noise or hype.

- **Allowed set only:** 🍀 (Lucky's signature) and the time-of-day markers 🌅 morning / ☀️ noon / 🌙 evening. An occasional ✨ is permitted on a genuine success moment. Nothing else.
- **One per message.** Never stack (`🎉🎉🎉`) and never use celebration-spam emoji — the voice reacts with composure, not hype.
- **Voice copy only, not structural UI.** Emoji belong in Lucky's conversational copy (greetings, success acknowledgments, time-of-day headers). For functional UI — status indicators, navigation, list markers, buttons — use Phosphor icon components, not emoji.
- **Status indicators:** colored dots or Phosphor icons, not emoji.
- **Navigation:** Phosphor icon components, not emoji.

### Format Compliance

This document follows the Google Stitch DESIGN.md 9-section format:
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Extended with:
- Iconography & SVG Guidelines
- Document Policies

Total target length: 250-400 lines. Keep sections concise and actionable.
