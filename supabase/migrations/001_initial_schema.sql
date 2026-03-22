-- Meraki District Initial Schema
-- Run this in Supabase SQL Editor

-- 1. Districts (the 12 institutions)
CREATE TABLE IF NOT EXISTS districts (
  id              SERIAL PRIMARY KEY,
  slug            TEXT UNIQUE NOT NULL,
  name            TEXT NOT NULL,
  subtitle        TEXT,
  type            TEXT NOT NULL,
  number          TEXT NOT NULL,
  description     TEXT,
  long_description TEXT,
  accent_color    TEXT,
  status          TEXT NOT NULL DEFAULT 'development'
                  CHECK (status IN ('active', 'coming-soon', 'development')),
  image_url       TEXT,
  offerings       TEXT[],
  pull_quote      TEXT,
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- 2. Creators (registered users)
CREATE TABLE IF NOT EXISTS creators (
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
  registry_id     TEXT UNIQUE,
  social_links    JSONB DEFAULT '{}',
  is_public       BOOLEAN DEFAULT true,
  is_featured     BOOLEAN DEFAULT false,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_creators_seal ON creators(seal_tier);
CREATE INDEX IF NOT EXISTS idx_creators_district ON creators(primary_district);
CREATE INDEX IF NOT EXISTS idx_creators_slug ON creators(slug);
CREATE INDEX IF NOT EXISTS idx_creators_featured ON creators(is_featured) WHERE is_featured = true;

-- 3. Works (creative pieces submitted through The Provenance)
CREATE TABLE IF NOT EXISTS works (
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
  provenance_hash TEXT,
  provenance_date TIMESTAMPTZ,
  edition_type    TEXT CHECK (edition_type IN ('standard', 'archival', 'unique')),
  edition_number  INTEGER,
  edition_total   INTEGER,
  is_featured     BOOLEAN DEFAULT false,
  images          TEXT[],
  metadata        JSONB DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_works_creator ON works(creator_id);
CREATE INDEX IF NOT EXISTS idx_works_status ON works(provenance_status);
CREATE INDEX IF NOT EXISTS idx_works_district ON works(target_district);

-- 4. Exhibitions
CREATE TABLE IF NOT EXISTS exhibitions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  description     TEXT,
  curator_note    TEXT,
  location        TEXT,
  venue_city      TEXT,
  status          TEXT NOT NULL DEFAULT 'upcoming'
                  CHECK (status IN ('upcoming', 'open', 'touring', 'archived')),
  start_date      DATE,
  end_date        DATE,
  is_circuit      BOOLEAN DEFAULT false,
  hero_image_url  TEXT,
  images          TEXT[],
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS exhibition_works (
  exhibition_id   UUID REFERENCES exhibitions(id) ON DELETE CASCADE,
  work_id         UUID REFERENCES works(id) ON DELETE CASCADE,
  display_order   INTEGER DEFAULT 0,
  plate_number    TEXT,
  PRIMARY KEY (exhibition_id, work_id)
);

CREATE TABLE IF NOT EXISTS exhibition_creators (
  exhibition_id   UUID REFERENCES exhibitions(id) ON DELETE CASCADE,
  creator_id      UUID REFERENCES creators(id) ON DELETE CASCADE,
  role            TEXT DEFAULT 'exhibitor',
  PRIMARY KEY (exhibition_id, creator_id)
);

-- 5. Submissions (apply flow)
CREATE TABLE IF NOT EXISTS submissions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email           TEXT NOT NULL,
  full_name       TEXT,
  portfolio_url   TEXT,
  statement       TEXT,
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

CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status);

-- 6. Store Products
CREATE TABLE IF NOT EXISTS store_products (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  description     TEXT,
  price_cents     INTEGER NOT NULL,
  currency        TEXT DEFAULT 'USD',
  category        TEXT NOT NULL
                  CHECK (category IN ('merchandise', 'catalogue', 'print', 'mint_edition')),
  creator_id      UUID REFERENCES creators(id),
  work_id         UUID REFERENCES works(id),
  edition_number  INTEGER,
  edition_total   INTEGER,
  stock_count     INTEGER DEFAULT 0,
  is_available    BOOLEAN DEFAULT true,
  images          TEXT[],
  provenance_verified BOOLEAN DEFAULT false,
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_products_category ON store_products(category);

-- 7. Partnerships
CREATE TABLE IF NOT EXISTS partnerships (
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

-- 8. Seal History (audit trail)
CREATE TABLE IF NOT EXISTS seal_history (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id      UUID NOT NULL REFERENCES creators(id) ON DELETE CASCADE,
  from_tier       TEXT NOT NULL,
  to_tier         TEXT NOT NULL,
  reason          TEXT,
  approved_by     UUID REFERENCES creators(id),
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_seal_history_creator ON seal_history(creator_id);

-- 9. Newsletter signups (from email collection forms)
CREATE TABLE IF NOT EXISTS newsletter_signups (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email           TEXT UNIQUE NOT NULL,
  source          TEXT DEFAULT 'homepage',
  created_at      TIMESTAMPTZ DEFAULT now()
);
