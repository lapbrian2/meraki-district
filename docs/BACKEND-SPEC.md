# Meraki District — Backend Architecture Specification

**Version:** 1.0
**Date:** 2026-03-22
**Status:** Draft
**Author:** Claude + Brian Lapinski

---

## 1. Product Overview

**One-Liner:** Meraki District is a creative network of twelve districts that gives practitioners visibility, development, and professional opportunity — powered by Supabase for data/auth/storage and Nuxt Content for editorial.

**Current State:** 37+ pages with all content hardcoded in Vue composables and page templates. No database, no auth, no CMS, no API. Images are static files in `public/`.

**Target State:** A real backend that supports creator profiles, the Seal credentialing system, work submissions, exhibitions, commerce, partnerships, and community login — while keeping editorial content git-tracked and fast.

**Frontend:** Nuxt 3, deployed on Vercel
**Backend:** Supabase (Postgres + Auth + Storage + Realtime)
**Editorial CMS:** Nuxt Content v2 (Markdown/YAML in `content/` directory)

---

## 2. Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    NUXT 3 (Vercel)                   │
│                                                       │
│  ┌──────────┐  ┌──────────┐  ┌───────────────────┐  │
│  │  Pages    │  │  Server  │  │   Nuxt Content    │  │
│  │  (Vue)    │  │  Routes  │  │   (Markdown)      │  │
│  │          │  │  /api/*   │  │   /content/*      │  │
│  └────┬─────┘  └────┬─────┘  └───────┬───────────┘  │
│       │              │                │               │
│       ▼              ▼                ▼               │
│  ┌──────────────────────────────────────────────┐    │
│  │         Supabase Client (composables)         │    │
│  └──────────────────┬───────────────────────────┘    │
└─────────────────────┼────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│                   SUPABASE                            │
│                                                       │
│  ┌──────────┐  ┌──────────┐  ┌───────────────────┐  │
│  │ Postgres │  │   Auth   │  │     Storage       │  │
│  │ (Data)   │  │ (Login)  │  │  (Images/Files)   │  │
│  └──────────┘  └──────────┘  └───────────────────┘  │
│                                                       │
│  ┌──────────┐  ┌──────────┐                          │
│  │ Realtime │  │  Edge    │                          │
│  │ (Live)   │  │ Functions│                          │
│  └──────────┘  └──────────┘                          │
└─────────────────────────────────────────────────────┘
```

### Why This Split

| Layer | Technology | Reason |
|-------|-----------|--------|
| **Structured data** | Supabase Postgres | Creators, works, seals, submissions, orders — relational data with RLS |
| **Auth** | Supabase Auth | Email/password + OAuth (Google, GitHub), session management, RLS integration |
| **File storage** | Supabase Storage | Creator portfolios, exhibition assets, store product images — CDN-backed |
| **Editorial content** | Nuxt Content | Essays, manifesto, quarterly monographs — git-tracked, Markdown, fast SSG |
| **API** | Nuxt server routes | Thin layer for business logic (seal promotions, submission review, checkout) |
| **Hosting** | Vercel | Already deployed, SSR support, edge functions |

---

## 3. Data Model

### 3.1 Core Entities

#### creators
The central entity. Every registered user on Meraki Road.

```sql
CREATE TABLE creators (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id         UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name    TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  email           TEXT UNIQUE NOT NULL,
  discipline      TEXT NOT NULL,
  bio             TEXT,
  avatar_url      TEXT,
  portfolio_url   TEXT,
  seal_tier       TEXT NOT NULL DEFAULT 'associate'
                  CHECK (seal_tier IN ('associate', 'verified', 'fellow', 'legacy')),
  primary_district TEXT REFERENCES districts(slug),
  registry_id     TEXT UNIQUE, -- e.g., "MRD-4821"
  social_links    JSONB DEFAULT '{}',
  is_public       BOOLEAN DEFAULT true,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_creators_seal ON creators(seal_tier);
CREATE INDEX idx_creators_district ON creators(primary_district);
CREATE INDEX idx_creators_slug ON creators(slug);
```

#### districts
The 12 institutions. Mostly static — seeded once, rarely updated.

```sql
CREATE TABLE districts (
  id              SERIAL PRIMARY KEY,
  slug            TEXT UNIQUE NOT NULL,
  name            TEXT NOT NULL,
  subtitle        TEXT,
  type            TEXT NOT NULL,
  number          TEXT NOT NULL, -- "01", "02", etc.
  description     TEXT,
  long_description TEXT,
  accent_color    TEXT,
  status          TEXT NOT NULL DEFAULT 'development'
                  CHECK (status IN ('active', 'coming-soon', 'development')),
  image_url       TEXT,
  offerings       TEXT[], -- array of offering strings
  created_at      TIMESTAMPTZ DEFAULT now()
);
```

#### works
Creative works submitted by creators. The core content that flows through The Provenance.

```sql
CREATE TABLE works (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id      UUID NOT NULL REFERENCES creators(id) ON DELETE CASCADE,
  title           TEXT NOT NULL,
  medium          TEXT NOT NULL CHECK (medium IN ('digital', 'physical', 'hybrid')),
  description     TEXT,
  conceptual_intent TEXT,
  tooling         TEXT,
  target_district TEXT REFERENCES districts(slug),
  provenance_status TEXT NOT NULL DEFAULT 'pending'
                  CHECK (provenance_status IN ('pending', 'reviewing', 'verified', 'rejected')),
  provenance_hash TEXT, -- SHA-256 verification hash
  provenance_date TIMESTAMPTZ,
  edition_type    TEXT CHECK (edition_type IN ('standard', 'archival', 'unique')),
  edition_number  INTEGER,
  edition_total   INTEGER,
  is_featured     BOOLEAN DEFAULT false,
  images          TEXT[], -- array of Storage URLs
  metadata        JSONB DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_works_creator ON works(creator_id);
CREATE INDEX idx_works_status ON works(provenance_status);
CREATE INDEX idx_works_district ON works(target_district);
CREATE INDEX idx_works_featured ON works(is_featured) WHERE is_featured = true;
```

#### exhibitions
Pavilion exhibitions and Circuit touring shows.

```sql
CREATE TABLE exhibitions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  description     TEXT,
  curator_note    TEXT,
  location        TEXT, -- "Wing A", "Main Hall", venue name
  venue_city      TEXT,
  status          TEXT NOT NULL DEFAULT 'upcoming'
                  CHECK (status IN ('upcoming', 'open', 'touring', 'archived')),
  start_date      DATE,
  end_date        DATE,
  is_circuit      BOOLEAN DEFAULT false, -- part of The Circuit
  hero_image_url  TEXT,
  images          TEXT[],
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE exhibition_works (
  exhibition_id   UUID REFERENCES exhibitions(id) ON DELETE CASCADE,
  work_id         UUID REFERENCES works(id) ON DELETE CASCADE,
  display_order   INTEGER DEFAULT 0,
  plate_number    TEXT, -- "Plate No. 001"
  PRIMARY KEY (exhibition_id, work_id)
);

CREATE TABLE exhibition_creators (
  exhibition_id   UUID REFERENCES exhibitions(id) ON DELETE CASCADE,
  creator_id      UUID REFERENCES creators(id) ON DELETE CASCADE,
  role            TEXT DEFAULT 'exhibitor', -- exhibitor, curator, collaborator
  PRIMARY KEY (exhibition_id, creator_id)
);
```

#### submissions
Applications to join Meraki Road (the apply page flow).

```sql
CREATE TABLE submissions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email           TEXT NOT NULL,
  full_name       TEXT,
  portfolio_url   TEXT,
  statement       TEXT, -- creative intent
  phase           TEXT NOT NULL DEFAULT 'signal'
                  CHECK (phase IN ('signal', 'discourse', 'access')),
  status          TEXT NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending', 'reviewing', 'accepted', 'declined')),
  reviewer_id     UUID REFERENCES creators(id),
  reviewer_notes  TEXT,
  assigned_district TEXT REFERENCES districts(slug),
  created_at      TIMESTAMPTZ DEFAULT now(),
  reviewed_at     TIMESTAMPTZ
);

CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_submissions_phase ON submissions(phase);
```

#### store_products
Pavilion Store items and Meraki Mint limited editions.

```sql
CREATE TABLE store_products (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  description     TEXT,
  price_cents     INTEGER NOT NULL,
  currency        TEXT DEFAULT 'USD',
  category        TEXT NOT NULL
                  CHECK (category IN ('merchandise', 'catalogue', 'print', 'mint_edition')),
  creator_id      UUID REFERENCES creators(id),
  work_id         UUID REFERENCES works(id), -- linked verified work
  edition_number  INTEGER,
  edition_total   INTEGER,
  stock_count     INTEGER DEFAULT 0,
  is_available    BOOLEAN DEFAULT true,
  images          TEXT[],
  provenance_verified BOOLEAN DEFAULT false,
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_products_category ON store_products(category);
CREATE INDEX idx_products_available ON store_products(is_available) WHERE is_available = true;
```

#### partnerships
Brand/agency collaboration requests (Bridge + Partnership Portal).

```sql
CREATE TABLE partnerships (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name    TEXT NOT NULL,
  contact_name    TEXT NOT NULL,
  contact_email   TEXT NOT NULL,
  partnership_type TEXT NOT NULL
                  CHECK (partnership_type IN ('commission', 'residency', 'sponsorship', 'consulting', 'fellowship')),
  brief           TEXT,
  budget_range    TEXT,
  sector          TEXT,
  status          TEXT NOT NULL DEFAULT 'inquiry'
                  CHECK (status IN ('inquiry', 'reviewing', 'active', 'completed', 'declined')),
  assigned_creator_id UUID REFERENCES creators(id),
  created_at      TIMESTAMPTZ DEFAULT now()
);
```

#### seal_history
Audit trail for seal tier changes.

```sql
CREATE TABLE seal_history (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id      UUID NOT NULL REFERENCES creators(id) ON DELETE CASCADE,
  from_tier       TEXT NOT NULL,
  to_tier         TEXT NOT NULL,
  reason          TEXT,
  approved_by     UUID REFERENCES creators(id), -- Fellow/Legacy who approved
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_seal_history_creator ON seal_history(creator_id);
```

---

## 4. Authentication

### Provider: Supabase Auth

```
LOGIN METHODS
──────────────────────────────────────────────────
Email + Password    Primary method for creator accounts
Google OAuth        Social login option
GitHub OAuth        Developer-friendly option
Magic Link          Passwordless email login
──────────────────────────────────────────────────
```

### Nuxt Integration

```ts
// composables/useAuth.ts
export const useAuth = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const signUp = async (email: string, password: string, displayName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } }
    })
    if (error) throw error
    // Creator profile created via database trigger
    return data
  }

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  const signInWithOAuth = async (provider: 'google' | 'github') => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    })
    if (error) throw error
    return data
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    navigateTo('/')
  }

  return { user, signUp, signIn, signInWithOAuth, signOut }
}
```

### Row Level Security (RLS)

Every table gets RLS policies:

```sql
-- Creators: public read, owner write
ALTER TABLE creators ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read" ON creators FOR SELECT USING (is_public = true);
CREATE POLICY "Owner update" ON creators FOR UPDATE USING (auth.uid() = auth_id);
CREATE POLICY "Owner insert" ON creators FOR INSERT WITH CHECK (auth.uid() = auth_id);

-- Works: public read verified, creator manages own
ALTER TABLE works ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read verified" ON works FOR SELECT
  USING (provenance_status = 'verified' OR creator_id IN (
    SELECT id FROM creators WHERE auth_id = auth.uid()
  ));
CREATE POLICY "Creator manages own" ON works FOR ALL
  USING (creator_id IN (SELECT id FROM creators WHERE auth_id = auth.uid()));

-- Submissions: only the submitter and reviewers (Fellow+) can see
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Submitter reads own" ON submissions FOR SELECT
  USING (email = auth.jwt() ->> 'email');
CREATE POLICY "Fellows review" ON submissions FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM creators WHERE auth_id = auth.uid()
    AND seal_tier IN ('fellow', 'legacy')
  ));
```

---

## 5. File Storage

### Supabase Storage Buckets

```
STORAGE BUCKETS
──────────────────────────────────────────────────
avatars/          Creator profile photos (public)
portfolios/       Creator portfolio images (public)
works/            Submitted work images (private until verified)
exhibitions/      Exhibition assets (public)
store/            Product images (public)
──────────────────────────────────────────────────
```

### Upload Flow

```ts
// composables/useStorage.ts
export const useStorage = () => {
  const supabase = useSupabaseClient()

  const uploadImage = async (
    bucket: string,
    file: File,
    path: string
  ) => {
    // Convert to WebP on client before upload
    const webpBlob = await convertToWebP(file, 85)
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, webpBlob, {
        contentType: 'image/webp',
        upsert: true
      })
    if (error) throw error
    return supabase.storage.from(bucket).getPublicUrl(data.path).data.publicUrl
  }

  return { uploadImage }
}
```

### Image Optimization

All uploaded images are converted to WebP client-side before upload. Supabase Storage serves them via CDN. For responsive images, store originals and use Nuxt Image's `<NuxtImg>` with Vercel's image optimization provider.

---

## 6. Nuxt Content — Editorial Layer

### What Lives in Nuxt Content

| Content Type | Directory | Format |
|-------------|-----------|--------|
| Essays/Monographs | `content/the-road/` | Markdown with frontmatter |
| Quarterly Reports | `content/quarterly/` | Markdown |
| Manifesto | `content/manifesto.md` | Single Markdown file |
| Standards | `content/standards.md` | Single Markdown file |

### Frontmatter Schema

```yaml
---
title: "The Ethics of AI Craft"
author: "Sable Chen"
date: 2026-03-15
category: "Visual Art"
district: "the-road"
readingTime: 12
featured: true
image: "/images/essays/ethics-hero.webp"
description: "On the responsibility of practitioners working at the intersection of human craft and machine capability."
---
```

### Querying Content

```ts
// In a page component
const { data: essays } = await useAsyncData('essays', () =>
  queryContent('the-road')
    .sort({ date: -1 })
    .limit(10)
    .find()
)

// Featured essay
const { data: featured } = await useAsyncData('featured-essay', () =>
  queryContent('the-road')
    .where({ featured: true })
    .findOne()
)
```

### Why Not Put Editorial in Supabase

Editorial content benefits from:
- **Git tracking** — version history, PR-based review, rollback
- **Markdown** — writers don't need a CMS UI
- **SSG** — pre-rendered at build time, zero database queries
- **Colocation** — lives with the code, deploys with the site

---

## 7. API Routes (Nuxt Server)

Thin server routes for business logic that can't live in the client.

### Seal Promotion

```
POST /api/seal/promote
──────────────────────────────────────────────────
Auth:     Required (Fellow or Legacy)
Body:     { creator_id, to_tier, reason }
Logic:    Validate promoter has authority (Fellow can promote
          to Verified, Legacy can promote to Fellow)
          Insert seal_history record
          Update creators.seal_tier
Response: { success: true, new_tier }
──────────────────────────────────────────────────
```

### Submission Review

```
POST /api/submissions/review
──────────────────────────────────────────────────
Auth:     Required (Fellow or Legacy)
Body:     { submission_id, decision, notes, assigned_district }
Logic:    Update submission status + phase
          If accepted: create creator account, assign district
Response: { success: true, submission }
──────────────────────────────────────────────────
```

### Store Checkout

```
POST /api/store/checkout
──────────────────────────────────────────────────
Auth:     Required
Body:     { product_id, quantity }
Logic:    Verify stock, verify provenance
          Create Stripe checkout session (or Paddle)
          Reserve stock
Response: { checkout_url }
──────────────────────────────────────────────────
```

### Provenance Verification

```
POST /api/provenance/verify
──────────────────────────────────────────────────
Auth:     Required (Fellow or Legacy)
Body:     { work_id, notes }
Logic:    Generate SHA-256 hash of work metadata
          Update provenance_status to 'verified'
          Set provenance_date and provenance_hash
Response: { success: true, hash, date }
──────────────────────────────────────────────────
```

---

## 8. Migration Strategy

### Phase 1: Supabase Setup (Week 1)

1. Create Supabase project
2. Run SQL migrations to create all tables
3. Seed districts table from existing `useDistricts.ts` data
4. Set up RLS policies
5. Create storage buckets
6. Configure auth providers (email + Google + GitHub)

### Phase 2: Composable Migration (Week 2)

Replace hardcoded composables with Supabase queries:

```
BEFORE (hardcoded):
useDistricts() → returns static array from .ts file

AFTER (Supabase):
useDistricts() → queries districts table, caches with useAsyncData
```

| Composable | Current Source | New Source |
|-----------|---------------|-----------|
| `useDistricts()` | Hardcoded array | Supabase `districts` table |
| `useFeaturedArtists()` | Hardcoded in index.vue | Supabase `creators` WHERE is_featured |
| `useEmailCollection()` | Console.log only | Supabase `submissions` INSERT |

### Phase 3: Auth Integration (Week 2-3)

1. Install `@nuxtjs/supabase`
2. Create login/register pages
3. Add auth middleware to protected routes (/atelier, /submit, /community)
4. Create auth callback page for OAuth
5. Wire up creator profile creation on signup (database trigger)

### Phase 4: Content Migration (Week 3)

1. Set up Nuxt Content module
2. Move essay content from hardcoded pages to `content/the-road/*.md`
3. Create `[...slug].vue` catch-all for content pages
4. Keep manifesto and standards as content files

### Phase 5: Dynamic Features (Week 4+)

1. Work submission flow (connect submit.vue to Supabase)
2. Creator profiles (connect creators/[slug].vue to Supabase)
3. Provenance verification pipeline
4. Store/checkout (Stripe integration)
5. Partnership portal (connect to partnerships table)

---

## 9. Environment Configuration

```env
# .env
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIs...  # anon key (public)
SUPABASE_SERVICE_KEY=eyJhbGci...       # service role (server only)
STRIPE_SECRET_KEY=sk_live_...          # for checkout
STRIPE_WEBHOOK_SECRET=whsec_...        # for webhook verification
NUXT_PUBLIC_SITE_URL=https://meraki-district.vercel.app
```

### Nuxt Config Addition

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/content',
    // existing modules...
  ],
  supabase: {
    redirect: false, // handle auth redirects manually
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
  content: {
    highlight: { theme: 'github-dark' },
    markdown: { remarkPlugins: [], rehypePlugins: [] },
  },
})
```

---

## 10. Security Architecture

```
SECURITY MODEL
──────────────────────────────────────────────────
Authentication:   Supabase Auth (JWT-based sessions)
Authorization:    Row Level Security on every table
Data Encryption:  At rest (Supabase managed), in transit (TLS 1.3)
API Security:     Supabase anon key (public, RLS-gated)
                  Service key (server routes only, never exposed)
Secrets:          Vercel environment variables
File Access:      Storage bucket policies (public/private per bucket)
Audit Trail:      seal_history table for all tier changes
CORS:             Supabase project settings (restrict to site domain)
──────────────────────────────────────────────────
```

### Seal Tier Permissions

| Action | Associate | Verified | Fellow | Legacy |
|--------|-----------|----------|--------|--------|
| View public content | ✓ | ✓ | ✓ | ✓ |
| Submit work | ✓ | ✓ | ✓ | ✓ |
| Community access | ✓ | ✓ | ✓ | ✓ |
| Workshop spaces | ✗ | ✓ | ✓ | ✓ |
| Office hours | ✗ | ✓ | ✓ | ✓ |
| Review submissions | ✗ | ✗ | ✓ | ✓ |
| Promote to Verified | ✗ | ✗ | ✓ | ✓ |
| Promote to Fellow | ✗ | ✗ | ✗ | ✓ |
| Governance voting | ✗ | ✗ | ✓ | ✓ |
| Host office hours | ✗ | ✗ | ✓ | ✓ |

---

## 11. Realtime Features (Future)

Supabase Realtime enables:
- **Community feed** — new works, exhibitions, events stream live
- **Submission status** — applicants see their phase update in real-time
- **Store inventory** — stock counts update on purchase
- **Governance votes** — live vote tallies during deliberation

```ts
// Example: listen for new verified works
const supabase = useSupabaseClient()
supabase
  .channel('verified-works')
  .on('postgres_changes', {
    event: 'UPDATE',
    schema: 'public',
    table: 'works',
    filter: 'provenance_status=eq.verified'
  }, (payload) => {
    // Add to featured works feed
  })
  .subscribe()
```

---

## 12. Hosting & Cost

### Current: Vercel (will migrate to custom hosting later)

The frontend is on Vercel now but will move to another platform. The architecture is platform-agnostic — Nuxt 3 runs anywhere that supports Node.js SSR (Railway, Render, Fly.io, AWS, self-hosted VPS, Docker).

### Supabase Free Tier Limits

| Resource | Free Limit | Sufficient For |
|----------|-----------|---------------|
| Database | 500MB | ~50K creator profiles + works |
| Storage | 1GB | ~200 high-quality WebP images |
| Auth | 50K monthly active users | More than enough for launch |
| Bandwidth | 5GB | Moderate traffic |
| Edge Functions | 500K invocations | API routes covered |
| Realtime | 200 concurrent connections | Community features |

**When to upgrade to Pro ($25/mo):** When storage exceeds 1GB (likely when creator portfolios grow) or when the store generates enough revenue to justify it.

### Migration-Ready Architecture

The spec is designed so Supabase can be swapped:
- All database queries go through composables (useCreators, useWorks, etc.)
- Auth is abstracted behind useAuth composable
- Storage URLs are stored as strings — any CDN works
- No Supabase-specific features in the frontend except the client SDK
- Nuxt Content is fully self-contained (just Markdown files)

---

## 13. Implementation Roadmap

```
WEEK 1: Foundation
├── Supabase project setup
├── SQL migrations (all tables)
├── RLS policies
├── Storage buckets
└── @nuxtjs/supabase installed

WEEK 2: Auth + Composables
├── Login/register pages
├── OAuth providers (Google, GitHub)
├── useAuth composable
├── Migrate useDistricts to Supabase
└── Migrate featured artists to Supabase

WEEK 3: Content + Submissions
├── Nuxt Content module
├── Migrate essays to content/the-road/
├── Connect submit.vue to submissions table
├── Connect apply.vue to submissions table
└── Email notifications (Supabase Edge Functions)

WEEK 4: Profiles + Provenance
├── Creator profile pages (dynamic from DB)
├── Creator dashboard (atelier.vue)
├── Work submission with image upload
├── Provenance verification flow
└── Seal tier display from DB

WEEK 5+: Commerce + Partnerships
├── Stripe integration
├── Checkout flow (acquire.vue)
├── Partnership portal (partnerships table)
├── Store product management
└── Order history + certificates
```

---

## 14. Out of Scope (V1)

- Mobile app (native)
- Real-time chat/messaging
- Video streaming/hosting (use external: Vimeo, YouTube)
- AI-generated content moderation
- Multi-currency support
- Internationalization (i18n)
- Admin dashboard (use Supabase dashboard directly)

---

## 15. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Supabase outage | Site can't load dynamic data | Cache critical data at build time (SSG fallback) |
| Image storage costs | High storage bills | Enforce WebP conversion, set upload size limits (5MB) |
| Auth token exposure | Security breach | Use RLS everywhere, service key only in server routes |
| Content migration breakage | Pages 404 | Keep static fallbacks during migration, migrate incrementally |
| Stripe integration complexity | Delayed launch | Start with simple checkout, no subscriptions in V1 |
