# Meraki District — Stitch Design System Reference

Brian designed this in Google Stitch. These are the LAYOUT and INTERACTION patterns to follow.
The site uses a DARK theme (not the light Stitch theme). Adapt colors to existing CSS variables.

## Fonts
- Headlines: `var(--font-display)` (Fraunces, italic, weight 300)
- Body: `var(--font-body)` (Outfit)
- Use existing CSS vars, NOT Newsreader/Manrope from Stitch

## Seal System CSS Classes
```css
.seal-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 9px;
  padding: 4px 12px;
  border-width: 1px;
}
.seal-associate { border-color: rgba(161,161,170,0.3); color: var(--color-text-muted); background: transparent; }
.seal-verified { border-color: rgba(184,150,78,0.3); color: var(--color-gold); background: rgba(184,150,78,0.05); }
.seal-fellow { border-color: var(--color-gold); color: var(--color-gold); background: rgba(184,150,78,0.12); }
.seal-legacy { border: 2px solid var(--color-gold); color: var(--color-gold); background: rgba(184,150,78,0.08); }
```

## Key Interaction Patterns

### Parallax Container (hover scale + translate)
```css
.parallax-container img {
  transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
}
.parallax-container:hover img {
  transform: scale(1.08) translateY(-2%);
}
```

### Reveal Text (clip-path wipe)
```css
.reveal-text {
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  animation: reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
}
@keyframes reveal {
  0% { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); }
  100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
}
```

### Grayscale → Color on Hover
```css
img { filter: grayscale(1); transition: filter 0.6s ease; }
:hover img { filter: grayscale(0); }
```

### Pillar Card Hover (background sweep from bottom)
```css
.card { position: relative; overflow: hidden; }
.card::before {
  content: '';
  position: absolute; inset: 0;
  background: rgba(184,150,78,0.05);
  transform: translateY(100%);
  transition: transform 0.7s ease;
}
.card:hover::before { transform: translateY(0); }
```

### Quote Overlay on Images
```html
<div class="absolute -bottom-10 -left-10 bg-surface p-8 shadow-2xl border">
  <p class="italic text-2xl">"Quote text"</p>
  <p class="overline">Attribution</p>
</div>
```

## Layout Patterns

### Asymmetric Hero: 8/4 grid
- Text on left (col-span-8), image on right (col-span-4)
- Image has 3:4 aspect ratio
- Quote overlay card offset from image

### Staggered Cards (Ikigai Lab pattern)
- 3 columns with mt-0, mt-16, mt-32 offsets
- Grayscale images, color on hover
- Primary color overlay on hover (opacity 5%)

### Bento Talent Grid
- Mixed column spans: 4/8, 4/4/4
- Profile photo + name + discipline + seal badge + tags
- CTA card fills primary color as last item

### Numbered List (Mastery Pathway)
- Large faded number (4xl, opacity 40%)
- Title + description on right
- Module count badge
- Arrow button slides on hover
- Alternating image sides (left/right per row)

### Exhibition Grid (Pavilion)
- 8-col + 4-col asymmetric with offset (4-col gets pt-40)
- 6-col centered for third item
- Seal badge overlay in corner of each image
- Grayscale → opacity change on hover

### Ascension Progression (4-tier)
- 4 equal columns with connecting line
- Each tier: number, title, description, icon
- Last tier (Fellow): primary background tint, larger icon, shadow

### Financial Architecture Table
- Full-width bordered table
- Italic serif for revenue stream names
- Hover row highlight
- Tracked uppercase for descriptions

## Section Numbering
Sections use numbered overlines: "01. PILLARS", "02. EXHIBITION", "03. ARCHITECTURE", "04. VERIFICATION", "05. REVENUE MODEL"

## Footer Pattern (4-column)
- Col 1: Brand name + tagline
- Col 2: Districts links
- Col 3: About links
- Col 4: Newsletter with email input
- Bottom bar: copyright + legal links

## DO NOT
- Copy text/copy from Stitch designs
- Use "ecosystem" or "institutional" — use "districts"
- Change brand name to "Meraki District" — it's "Meraki Road"
- Use Stitch's light theme colors — adapt to dark theme
