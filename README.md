# Meraki Road

A cultural ecosystem for AI-native creators. Eleven districts, one road, a new standard for creative practice.

**Live:** https://meraki-district.vercel.app

## Stack

- **Framework:** Nuxt 4.4 (Vue 3.5, Nitro 2.13)
- **Content:** @nuxt/content (Markdown + SQLite)
- **Animation:** GSAP 3.14 + ScrollTrigger, Lenis smooth scroll
- **Deployment:** Vercel (auto-deploy from `main`)
- **Monitoring:** Sentry (optional), Vercel Analytics + Speed Insights
- **Email:** Resend API (optional)

## Setup

```bash
# Clone and install
git clone https://github.com/lapbrian2/meraki-district.git
cd meraki-district
cp .env.example .env
npm install

# Start dev server
npm run dev
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NUXT_PUBLIC_SITE_URL` | No | Production URL for sitemap/OG tags. Defaults to `https://meraki-district.vercel.app` |
| `RESEND_API_KEY` | No | Resend API key for email collection. Without it, emails are stored locally only |
| `RESEND_AUDIENCE_ID` | No | Resend audience list ID for subscriber management |
| `SENTRY_DSN` | No | Sentry DSN for error monitoring. Without it, errors log to console only |

## Project Structure

```
app/
  components/       # Vue components (auto-imported)
    layout/         # AppNav, AppFooter
    sections/       # Page sections (HeroSection, DistrictsGrid, etc.)
    content/        # ArticleCard, ArticleHeader
    ui/             # LightboxOverlay, ScrollProgress, etc.
  composables/      # Reusable logic (useDistricts, useEmailCollection, etc.)
  pages/            # File-based routing
  plugins/          # Client-side plugins (theme, GSAP, Lenis, Sentry)
  assets/css/       # Design tokens (variables.css), base styles, transitions
server/
  api/              # Server API routes
    subscribe.post.ts  # Email collection endpoint
content/
  the-road/         # Markdown articles (auto-routed via @nuxt/content)
public/
  images/           # Static images (districts, featured, founders, OG)
tests/
  smoke.test.ts     # Data integrity, validation, security tests
```

## API

### POST /api/subscribe

Collects email addresses for the notification list.

**Request:**
```json
{
  "email": "user@example.com",
  "source": "apply" | "newsletter"
}
```

**Responses:**

| Status | Body | Condition |
|--------|------|-----------|
| 200 | `{ ok: true, message: "Subscribed successfully." }` | New subscription |
| 200 | `{ ok: true, message: "Already subscribed." }` | Duplicate email |
| 400 | `{ message: "Email is required." }` | Missing/invalid email |
| 403 | `{ message: "Forbidden." }` | Cross-origin request |
| 429 | `{ message: "Too many requests..." }` | Rate limit (5/hour/IP) |

**Security:**
- Origin validation (rejects cross-origin requests in production)
- Server-side email regex validation
- IP-based rate limiting (5 requests per hour per IP)
- IP addresses are SHA-256 hashed before storage (GDPR compliance)
- Serialized writes prevent race conditions on concurrent requests

**Storage:** Nitro filesystem storage in dev (`.data/`). On Vercel, configure persistent storage (Vercel KV or Upstash Redis) for production data retention.

## Architecture

### Districts

District data lives in `app/composables/useDistricts.ts` as a typed array. Adding a district requires only a new data entry and a WebP image in `public/images/districts/`. The grid layout uses a 12-column system with 5 layout variants: `hero` (12), `wide` (7), `narrow` (5), `half` (6), `closer` (12).

### Content

Editorial content lives as Markdown files in `content/the-road/` with frontmatter schema defined in `content.config.ts`. Fields: `tag`, `excerpt`, `author`, `date`, `image`, `featured`, `published`.

### Animation

All animations use GSAP ScrollTrigger with composable wrappers:
- `useGsapScrollReveal` — fade-up reveal on scroll
- `useWordReveal` — word-by-word staggered text reveal
- `useParallax` — scroll-driven background parallax
- `useInteractions` — tilt and magnetic hover effects

Lenis provides smooth scroll, integrated with GSAP via the `02.lenis.client.ts` plugin.

### Security Headers

Configured via `routeRules` in `nuxt.config.ts`:
- CSP (Content Security Policy)
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Permissions-Policy (camera, microphone, geolocation disabled)

### Caching Strategy

- Static pages (`/`, `/about`, `/apply`, `/districts`, `/privacy`, `/terms`) are prerendered at build time
- Content pages (`/districts/**`, `/the-road/**`) use ISR with 1-hour revalidation
- API routes are not cached

## Scripts

```bash
npm run dev        # Development server (port 3000)
npm run build      # Production build
npm run preview    # Preview production build locally
npm run test       # Run Vitest test suite
npm run typecheck  # TypeScript type checking
```

## Testing

19 tests covering:
- District data integrity (count, fields, uniqueness, sequential numbering)
- Grid layout validation (12-column pairs sum correctly)
- Image format enforcement (all .webp)
- URL safety (lowercase slugs only)
- Email validation (server/client parity)
- Content schema expectations
- Security regression (regex consistency)

```bash
npm run test
```

## Deployment

Vercel auto-deploys from the `main` branch. Required setup:
1. Set environment variables in Vercel dashboard (see table above)
2. Ensure `better-sqlite3` builds (Vercel handles this automatically)
3. For production email storage, configure a persistent Nitro storage driver
