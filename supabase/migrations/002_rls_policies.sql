-- Row Level Security Policies
-- Run after 001_initial_schema.sql

-- Districts: public read, admin write
ALTER TABLE districts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read districts" ON districts FOR SELECT USING (true);

-- Creators: public read (if public), owner write
ALTER TABLE creators ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read creators" ON creators FOR SELECT USING (is_public = true);
CREATE POLICY "Owner reads own" ON creators FOR SELECT USING (auth.uid() = auth_id);
CREATE POLICY "Owner updates own" ON creators FOR UPDATE USING (auth.uid() = auth_id);
CREATE POLICY "Auth insert own" ON creators FOR INSERT WITH CHECK (auth.uid() = auth_id);

-- Works: public read verified, creator manages own
ALTER TABLE works ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read verified works" ON works FOR SELECT
  USING (provenance_status = 'verified');
CREATE POLICY "Creator reads own works" ON works FOR SELECT
  USING (creator_id IN (SELECT id FROM creators WHERE auth_id = auth.uid()));
CREATE POLICY "Creator manages own works" ON works FOR ALL
  USING (creator_id IN (SELECT id FROM creators WHERE auth_id = auth.uid()));

-- Exhibitions: public read
ALTER TABLE exhibitions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read exhibitions" ON exhibitions FOR SELECT USING (true);

ALTER TABLE exhibition_works ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read exhibition_works" ON exhibition_works FOR SELECT USING (true);

ALTER TABLE exhibition_creators ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read exhibition_creators" ON exhibition_creators FOR SELECT USING (true);

-- Submissions: submitter reads own, fellows review
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit" ON submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Submitter reads own" ON submissions FOR SELECT
  USING (email = (SELECT email FROM creators WHERE auth_id = auth.uid()));
CREATE POLICY "Fellows review submissions" ON submissions FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM creators WHERE auth_id = auth.uid()
    AND seal_tier IN ('fellow', 'legacy')
  ));
CREATE POLICY "Fellows update submissions" ON submissions FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM creators WHERE auth_id = auth.uid()
    AND seal_tier IN ('fellow', 'legacy')
  ));

-- Store: public read available products
ALTER TABLE store_products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read available products" ON store_products FOR SELECT
  USING (is_available = true);

-- Partnerships: anyone can submit, fellows review
ALTER TABLE partnerships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit partnership" ON partnerships FOR INSERT WITH CHECK (true);
CREATE POLICY "Fellows review partnerships" ON partnerships FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM creators WHERE auth_id = auth.uid()
    AND seal_tier IN ('fellow', 'legacy')
  ));

-- Seal history: public read (transparency)
ALTER TABLE seal_history ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read seal history" ON seal_history FOR SELECT USING (true);

-- Newsletter: anyone can sign up
ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can sign up" ON newsletter_signups FOR INSERT WITH CHECK (true);
