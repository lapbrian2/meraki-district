<template>
  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- BESPOKE: Meraki Studio — Deep-Work Portal              -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div v-if="district && isVoightStudio" ref="root" :style="{ '--color-accent': district.accentColor, '--color-accent-accessible': district.accentColorAccessible }">

    <!-- VS Hero — Full viewport, archival image background -->
    <section ref="heroSection" class="vs-hero">
      <div class="vs-hero-image-wrap">
        <NuxtImg
          :src="district.image"
          :alt="`${district.name} — ${district.type}`"
          class="vs-hero-image archival-image"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div class="vs-hero-overlay" />
      </div>
      <div class="vs-hero-metrics">
        <div class="vs-metric reveal">
          <span class="vs-metric-label">Render Velocity</span>
          <span class="vs-metric-value">99.8%</span>
        </div>
        <div class="vs-metric reveal">
          <span class="vs-metric-dot" aria-hidden="true" />
          <span class="vs-metric-label">Data Integrity</span>
          <span class="vs-metric-value">Active</span>
        </div>
      </div>
      <div class="vs-hero-content">
        <p class="vs-hero-subtitle">The Engine Room</p>
        <h1 ref="heroTitle" class="vs-hero-title">Meraki Studio</h1>
      </div>
    </section>

    <!-- District Navigator (shared) -->
    <nav class="q-nav" aria-label="District navigation">
      <div class="section-default q-nav-inner">
        <NuxtLink
          v-for="d in districts"
          :key="d.slug"
          :to="'/districts/' + d.slug"
          class="q-nav-dot"
          :class="{ 'q-nav-active': d.slug === slug }"
          :style="{ '--dot-color': d.accentColor }"
          :aria-label="d.name"
          :aria-current="d.slug === slug ? 'page' : undefined"
        >
          <span class="q-nav-num">{{ d.number }}</span>
        </NuxtLink>
      </div>
    </nav>

    <!-- VS Production Workflows — 3-phase card grid -->
    <section ref="vsSprintsSection" class="vs-sprints section-dark">
      <div class="section-default">
        <p class="overline reveal">Production Workflows</p>
        <div class="vs-sprints-grid">
          <div class="vs-sprint vellum-card reveal">
            <span class="vs-sprint-number" aria-hidden="true">01</span>
            <h3 class="vs-sprint-title"><em>Cinematic Synthesis</em></h3>
            <p class="vs-sprint-desc">Visual identity forged through multi-layered composition. Brand systems, spatial design, and motion language converge into a single coherent output.</p>
            <div class="vs-sprint-status">
              <span class="vs-sprint-status-dot vs-sprint-status-dot--active" />
              <span class="vs-sprint-status-label">In Production</span>
            </div>
          </div>
          <div class="vs-sprint vellum-card reveal">
            <span class="vs-sprint-number" aria-hidden="true">02</span>
            <h3 class="vs-sprint-title"><em>Archival Export</em></h3>
            <p class="vs-sprint-desc">Every deliverable enters the permanent record. Assets are catalogued, versioned, and stored with full provenance chains intact before handoff.</p>
            <div class="vs-sprint-status">
              <span class="vs-sprint-status-dot vs-sprint-status-dot--staging" />
              <span class="vs-sprint-status-label">Staging</span>
            </div>
          </div>
          <div class="vs-sprint vellum-card reveal">
            <span class="vs-sprint-number" aria-hidden="true">03</span>
            <h3 class="vs-sprint-title"><em>Distribution Protocol</em></h3>
            <p class="vs-sprint-desc">Controlled deployment across channels. Each asset is optimized for its destination&mdash;print, screen, spatial, motion&mdash;without degrading the source.</p>
            <div class="vs-sprint-status">
              <span class="vs-sprint-status-dot vs-sprint-status-dot--queued" />
              <span class="vs-sprint-status-label">Queued</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VS The Workspace — Active production environment -->
    <section ref="vsWorkspaceSection" class="vs-workspace section-dark">
      <div class="section-default">
        <p class="overline reveal">The Workspace</p>
        <p class="vs-workspace-subtitle reveal">Active production environment</p>

        <!-- Tab navigation bar -->
        <nav class="vs-workspace-tabs reveal" aria-label="Workspace tabs">
          <button class="vs-workspace-tab vs-workspace-tab--active" aria-current="page">Workspace</button>
          <button class="vs-workspace-tab">Tech Stack</button>
          <button class="vs-workspace-tab">Render Queue</button>
          <button class="vs-workspace-tab">Team Library</button>
          <button class="vs-workspace-tab">System Logs</button>
        </nav>

        <!-- Active Projects Grid -->
        <div class="vs-workspace-grid">
          <div class="vs-workspace-card vellum-card lift-card reveal">
            <div class="vs-workspace-card-image archival-image" role="img" aria-label="Project Aurelius preview"></div>
            <div class="vs-workspace-card-body">
              <h3 class="vs-workspace-card-title"><em>Project Aurelius</em></h3>
              <div class="vs-workspace-card-meta">
                <span class="vs-workspace-badge vs-workspace-badge--active"><span class="vs-workspace-dot vs-workspace-dot--green"></span>Render 98%</span>
                <span class="vs-workspace-state">Geometry Valid</span>
              </div>
              <div class="vs-workspace-card-footer">
                <span class="vs-workspace-tag">Archival Sync</span>
                <span class="vs-workspace-time">09:12 AM</span>
              </div>
            </div>
          </div>

          <div class="vs-workspace-card vellum-card lift-card reveal">
            <div class="vs-workspace-card-image archival-image" role="img" aria-label="Monolith Update preview"></div>
            <div class="vs-workspace-card-body">
              <h3 class="vs-workspace-card-title"><em>Monolith Update</em></h3>
              <div class="vs-workspace-card-meta">
                <span class="vs-workspace-badge vs-workspace-badge--ready"><span class="vs-workspace-dot vs-workspace-dot--green"></span>Ready</span>
                <span class="vs-workspace-state">Optimized</span>
              </div>
              <div class="vs-workspace-card-footer">
                <span class="vs-workspace-tag">Cold Storage</span>
                <span class="vs-workspace-time">Yesterday</span>
              </div>
            </div>
          </div>

          <div class="vs-workspace-card vellum-card lift-card reveal">
            <div class="vs-workspace-card-image archival-image" role="img" aria-label="Exhibition 04 preview"></div>
            <div class="vs-workspace-card-body">
              <h3 class="vs-workspace-card-title"><em>Exhibition 04</em></h3>
              <div class="vs-workspace-card-meta">
                <span class="vs-workspace-badge vs-workspace-badge--staging"><span class="vs-workspace-dot vs-workspace-dot--gold"></span>Staging</span>
                <span class="vs-workspace-state">Syncing...</span>
              </div>
              <div class="vs-workspace-card-footer">
                <span class="vs-workspace-tag">Local Dev</span>
                <span class="vs-workspace-time">Oct 24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VS The Vault — Repository metrics -->
    <section ref="vsVaultSection" class="vs-vault section">
      <div class="section-default vs-vault-inner">
        <div class="vs-vault-hero-metric">
          <p class="vs-vault-number reveal">12,842</p>
          <p class="vs-vault-label reveal">Assets</p>
        </div>
        <div class="vs-vault-breakdown">
          <div class="vs-vault-col reveal">
            <span class="vs-vault-col-number">4,216</span>
            <span class="vs-vault-col-label">Structural Meshes</span>
          </div>
          <div class="vs-vault-col reveal">
            <span class="vs-vault-col-number">5,891</span>
            <span class="vs-vault-col-label">Material Library</span>
          </div>
          <div class="vs-vault-col reveal">
            <span class="vs-vault-col-number">2,735</span>
            <span class="vs-vault-col-label">Logic Snippets</span>
          </div>
        </div>
      </div>
    </section>

    <!-- VS Fellow Showcase — Verified creators -->
    <section ref="vsFellowSection" class="vs-fellow section-dark">
      <div class="section-default">
        <p class="overline reveal">Fellow Showcase</p>
        <div class="vs-fellow-grid">
          <div class="vs-fellow-card vellum-card reveal">
            <div class="vs-fellow-header">
              <span class="vs-fellow-initial">A.R.</span>
              <span class="vs-fellow-verified">
                <span class="material-symbols-outlined">verified</span>
              </span>
            </div>
            <h3 class="vs-fellow-name"><em>Adrienne Ross</em></h3>
            <p class="vs-fellow-role">Brand Architecture &middot; Visual Systems</p>
            <p class="vs-fellow-bio">Spatial identity and wayfinding systems for cultural institutions. Seven years at the intersection of architecture and graphic design.</p>
          </div>
          <div class="vs-fellow-card vellum-card reveal">
            <div class="vs-fellow-header">
              <span class="vs-fellow-initial">M.K.</span>
              <span class="vs-fellow-verified">
                <span class="material-symbols-outlined">verified</span>
              </span>
            </div>
            <h3 class="vs-fellow-name"><em>Marcus Kwan</em></h3>
            <p class="vs-fellow-role">Motion Design &middot; Creative Direction</p>
            <p class="vs-fellow-bio">Cinematic title sequences and motion identity. Former lead at two BAFTA-nominated studios before going independent.</p>
          </div>
          <div class="vs-fellow-card vellum-card reveal">
            <div class="vs-fellow-header">
              <span class="vs-fellow-initial">S.V.</span>
              <span class="vs-fellow-verified">
                <span class="material-symbols-outlined">verified</span>
              </span>
            </div>
            <h3 class="vs-fellow-name"><em>Sana Voss</em></h3>
            <p class="vs-fellow-role">Digital Production &middot; Technical Direction</p>
            <p class="vs-fellow-bio">Full-stack creative engineering. Builds interfaces where design and code share a single conversation. Obsessive about performance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- VS Studio Philosophy — Asymmetric 7/5 grid -->
    <section ref="vsPhilosophySection" class="vs-philosophy section">
      <div class="section-default vs-philosophy-grid">
        <div class="vs-philosophy-quote">
          <blockquote>
            <p class="vs-philosophy-pullquote word-reveal">&ldquo;The machine does not replace the artisan; it amplifies the memory of the work itself.&rdquo;</p>
          </blockquote>
          <p class="vs-philosophy-attribution reveal">&mdash; Meraki Studio Principle</p>
        </div>
        <div class="vs-philosophy-body">
          <h3 class="vs-philosophy-heading reveal">
            <span class="material-symbols-outlined vs-philosophy-icon">precision_manufacturing</span>
            Studio Philosophy
          </h3>
          <div class="vs-philosophy-rule" aria-hidden="true" />
          <p class="reveal">
            Meraki Studio is the creative engine of Meraki Road. A full-service design practice that pairs strategic thinking with obsessive craft, working with ventures and cultural institutions that refuse to settle for conventional output.
          </p>
          <p class="reveal">
            Every engagement is a collaboration built on the belief that the best work happens when ambition meets restraint, and when both sides are willing to go further than comfortable. We don&rsquo;t decorate. We negotiate between form and function until the answer is inevitable.
          </p>
        </div>
      </div>
    </section>

    <!-- VS CTA — Dual action -->
    <section ref="vsCtaSection" class="vs-cta section-dark">
      <div class="section-default vs-cta-inner">
        <h2 class="vs-cta-heading reveal">Start a conversation.</h2>
        <div class="vs-cta-actions reveal">
          <NuxtLink to="/apply" class="vs-cta-btn vs-cta-btn--primary">Enter Production View →</NuxtLink>
          <a href="mailto:hello@merakiroad.com" class="vs-cta-btn vs-cta-btn--secondary">Archival Data →</a>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- Explore More (shared) -->
    <section ref="navSection" class="q-explore section">
      <div class="section-default">
        <p class="overline reveal">Explore more</p>
        <div class="q-explore-grid">
          <NuxtLink
            v-if="prev"
            :to="'/districts/' + prev.slug"
            class="q-explore-card reveal"
          >
            <div class="q-explore-image parallax-container">
              <NuxtImg :src="prev.image" :alt="prev.name" loading="lazy" decoding="async" width="600" height="338" />
            </div>
            <div class="q-explore-info">
              <span class="q-explore-type">{{ prev.type }}</span>
              <h3>{{ prev.name }}</h3>
            </div>
          </NuxtLink>
          <NuxtLink
            v-if="next"
            :to="'/districts/' + next.slug"
            class="q-explore-card reveal"
          >
            <div class="q-explore-image parallax-container">
              <NuxtImg :src="next.image" :alt="next.name" loading="lazy" decoding="async" width="600" height="338" />
            </div>
            <div class="q-explore-info">
              <span class="q-explore-type">{{ next.type }}</span>
              <h3>{{ next.name }}</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- BESPOKE: The Provenance                                -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div v-else-if="district && isProvenance" ref="root" :style="{ '--color-accent': district.accentColor, '--color-accent-accessible': district.accentColorAccessible }">

    <!-- Prov Hero — Full viewport, archival treatment -->
    <section ref="heroSection" class="prov-hero">
      <div class="prov-hero-image-wrap">
        <NuxtImg
          :src="district.image"
          :alt="`${district.name} — ${district.type}`"
          class="prov-hero-image archival-image"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div class="prov-hero-overlay" />
      </div>
      <div class="prov-hero-content">
        <p class="prov-hero-subtitle">The Vault</p>
        <h1 ref="heroTitle" class="prov-hero-title">The Provenance</h1>
      </div>
    </section>

    <!-- District Navigator (shared) -->
    <nav class="q-nav" aria-label="District navigation">
      <div class="section-default q-nav-inner">
        <NuxtLink
          v-for="d in districts"
          :key="d.slug"
          :to="'/districts/' + d.slug"
          class="q-nav-dot"
          :class="{ 'q-nav-active': d.slug === slug }"
          :style="{ '--dot-color': d.accentColor }"
          :aria-label="d.name"
          :aria-current="d.slug === slug ? 'page' : undefined"
        >
          <span class="q-nav-num">{{ d.number }}</span>
        </NuxtLink>
      </div>
    </nav>

    <!-- Prov Entry Metadata — Institutional ledger header -->
    <section ref="provMetadataSection" class="prov-metadata section">
      <div class="section-default prov-metadata-inner">
        <p class="prov-metadata-entry-no reveal">Entry No. <span class="prov-mono">05-774/X</span></p>
        <h2 class="prov-metadata-title reveal">Artifact Provenance Record</h2>
        <p class="prov-metadata-desc reveal">Immutable ledger entry for verified cultural objects under permanent archival custody.</p>
        <div class="prov-metadata-rule" aria-hidden="true" />
      </div>
    </section>

    <!-- Prov Data Grid — 3-column verification data -->
    <section ref="provDataGridSection" class="prov-datagrid section-dark">
      <div class="section-default">
        <p class="overline reveal">Institutional Record</p>
        <div class="prov-datagrid-grid">
          <div class="prov-datagrid-card reveal">
            <h3 class="prov-datagrid-card-label">Origin Data</h3>
            <dl class="prov-datagrid-dl">
              <div class="prov-datagrid-row">
                <dt>Creation Date</dt>
                <dd>2024.11.03</dd>
              </div>
              <div class="prov-datagrid-row">
                <dt>Creator ID</dt>
                <dd class="prov-mono">MRD-0577-A</dd>
              </div>
              <div class="prov-datagrid-row">
                <dt>Materiality</dt>
                <dd>Digital composite / mixed substrate</dd>
              </div>
            </dl>
          </div>
          <div class="prov-datagrid-card reveal">
            <h3 class="prov-datagrid-card-label">Verification Layer</h3>
            <dl class="prov-datagrid-dl">
              <div class="prov-datagrid-row">
                <dt>Node Consensus</dt>
                <dd class="prov-mono">99.8%</dd>
              </div>
              <div class="prov-datagrid-row">
                <dt>Hash Protocol</dt>
                <dd class="prov-mono">SHA-256 / R3</dd>
              </div>
              <div class="prov-datagrid-row">
                <dt>Custody Blocks</dt>
                <dd class="prov-mono">2,418</dd>
              </div>
            </dl>
          </div>
          <div class="prov-datagrid-card reveal">
            <h3 class="prov-datagrid-card-label">Exhibition Status</h3>
            <dl class="prov-datagrid-dl">
              <div class="prov-datagrid-row">
                <dt>Gallery Location</dt>
                <dd>Vault 03 &mdash; West Wing</dd>
              </div>
              <div class="prov-datagrid-row">
                <dt>Access Level</dt>
                <dd>Restricted / Fellow</dd>
              </div>
              <div class="prov-datagrid-row">
                <dt>Next Cycle</dt>
                <dd class="prov-mono">2026.Q3</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- Prov Ink-Trace History — Gold-line timeline -->
    <section ref="provTimelineSection" class="prov-timeline section">
      <div class="section-default">
        <p class="overline reveal">Ink-Trace History</p>
        <div class="prov-timeline-track">
          <div class="prov-timeline-line" aria-hidden="true" />
          <div class="prov-timeline-event reveal">
            <div class="prov-timeline-dot" />
            <div class="prov-timeline-content">
              <p class="prov-timeline-label">Genesis Block</p>
              <p class="prov-timeline-date prov-mono">2024.11.03 &mdash; 14:22 UTC</p>
              <p class="prov-timeline-body">Initial creation entry. Object registered to permanent archive with full provenance chain established at point of origin.</p>
            </div>
          </div>
          <div class="prov-timeline-event reveal">
            <div class="prov-timeline-dot" />
            <div class="prov-timeline-content">
              <p class="prov-timeline-label">Transfer 08-B</p>
              <p class="prov-timeline-date prov-mono">2025.02.17 &mdash; 09:41 UTC</p>
              <p class="prov-timeline-body">Custody transfer to Vault 03 verified. Witness attribution: <span class="prov-mono">K. Vasquez / Archivist II</span></p>
            </div>
          </div>
          <div class="prov-timeline-event reveal">
            <div class="prov-timeline-dot prov-timeline-dot--active" />
            <div class="prov-timeline-content">
              <p class="prov-timeline-label">Current State</p>
              <p class="prov-timeline-date prov-mono">Present</p>
              <p class="prov-timeline-body">Object held under restricted access. Integrity verified. <span class="prov-timeline-badge">Verified</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prov Archival Philosophy — Asymmetric 7/5 grid -->
    <section ref="provPhilosophySection" class="prov-philosophy section">
      <div class="section-default prov-philosophy-grid">
        <div class="prov-philosophy-quote">
          <blockquote>
            <p class="prov-philosophy-pullquote word-reveal">&ldquo;Every work deserves a lineage. Every lineage deserves a guardian.&rdquo;</p>
          </blockquote>
        </div>
        <div class="prov-philosophy-body">
          <div class="prov-philosophy-rule" aria-hidden="true" />
          <p class="reveal">
            The Provenance exists because creative work is fragile. Not the object itself&mdash;the context around it. Who made it, when, under what conditions, through whose hands it passed. Strip that away and you have an artifact without meaning.
          </p>
          <p class="reveal">
            This district is the archival conscience of Meraki Road. A permanent record that treats provenance not as metadata but as material&mdash;as essential to the work as the medium it was made in. In a world that treats digital objects as infinitely reproducible and therefore disposable, The Provenance insists on permanence.
          </p>
        </div>
      </div>
    </section>

    <!-- Prov Verification Protocol — 3-column numbered cards -->
    <section ref="provProtocolSection" class="prov-protocol section-dark">
      <div class="section-default">
        <p class="overline reveal">Verification Protocol</p>
        <div class="prov-protocol-grid">
          <div class="prov-protocol-card vellum-card reveal">
            <span class="prov-protocol-number" aria-hidden="true">01</span>
            <h3 class="prov-protocol-title"><em>Genesis Check</em></h3>
            <p class="prov-protocol-desc">Metadata integrity validation. Every work enters the archive with its full provenance chain intact&mdash;origin, authorship, medium, and the conditions of its creation verified before a single byte is stored.</p>
          </div>
          <div class="prov-protocol-card vellum-card reveal">
            <span class="prov-protocol-number" aria-hidden="true">02</span>
            <h3 class="prov-protocol-title"><em>Consensus Layering</em></h3>
            <p class="prov-protocol-desc">Distributed curator authentication. No single voice determines what endures. Each work is reviewed by an independent panel whose assessments are recorded as part of the permanent record.</p>
          </div>
          <div class="prov-protocol-card vellum-card reveal">
            <span class="prov-protocol-number" aria-hidden="true">03</span>
            <h3 class="prov-protocol-title"><em>Perpetual Audit</em></h3>
            <p class="prov-protocol-desc">Continuous anomaly detection. The archive watches itself. Integrity checks run against every stored object, flagging drift before it becomes degradation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Prov The Repository — Dark metric section -->
    <section ref="provRepositorySection" class="prov-repository section">
      <div class="section-default prov-repo-inner">
        <div class="prov-repo-metric-wrap">
          <p class="prov-repo-metric reveal">99.9%</p>
          <p class="prov-repo-metric-label reveal">persistence</p>
        </div>
        <div class="prov-repo-body">
          <div class="prov-repo-rule" aria-hidden="true" />
          <p class="reveal">
            Redundancy is not a feature. It is the founding assumption. Every object in The Provenance exists across geographically distributed nodes with independent verification layers. The commitment is unconditional&mdash;what enters the archive stays in the archive.
          </p>
          <blockquote class="prov-repo-quote reveal">
            <p>&ldquo;An institution that cannot guarantee permanence has no business accepting custody.&rdquo;</p>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Prov From The Provenance — Essay cards -->
    <section ref="provFromSection" class="prov-from section-dark">
      <div class="section-default">
        <p class="overline reveal">From The Provenance</p>
        <div class="prov-from-grid">
          <NuxtLink to="/the-road" class="prov-from-card reveal">
            <span class="prov-from-tag">Essay</span>
            <h3>On the ethics of preservation in an era that incentivizes forgetting</h3>
            <span class="prov-from-read">Read on Meraki Publishing House &rarr;</span>
          </NuxtLink>
          <NuxtLink to="/the-road" class="prov-from-card reveal">
            <span class="prov-from-tag">Dispatch</span>
            <h3>Why provenance is the last honest metadata in a world of synthetic attribution</h3>
            <span class="prov-from-read">Read on Meraki Publishing House &rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Prov Validate CTA — Institutional verification -->
    <section ref="provCtaSection" class="prov-cta section">
      <div class="section-default prov-cta-inner">
        <h2 class="prov-cta-heading reveal">Submit work for archival review.</h2>
        <p class="prov-cta-body reveal">
          The Provenance accepts submissions on a rolling basis. Each work is evaluated against our verification protocol before admission to the permanent collection.
        </p>
        <NuxtLink to="/apply" class="prov-validate-btn reveal">
          <span class="material-symbols-outlined prov-validate-icon" aria-hidden="true">gavel</span>
          Validate Now
        </NuxtLink>
      </div>
    </section>

    <SectionDivider />

    <!-- Explore More (shared) -->
    <section ref="navSection" class="q-explore section">
      <div class="section-default">
        <p class="overline reveal">Explore more</p>
        <div class="q-explore-grid">
          <NuxtLink
            v-if="prev"
            :to="'/districts/' + prev.slug"
            class="q-explore-card reveal"
          >
            <div class="q-explore-image parallax-container">
              <NuxtImg :src="prev.image" :alt="prev.name" loading="lazy" decoding="async" width="600" height="338" />
            </div>
            <div class="q-explore-info">
              <span class="q-explore-type">{{ prev.type }}</span>
              <h3>{{ prev.name }}</h3>
            </div>
          </NuxtLink>
          <NuxtLink
            v-if="next"
            :to="'/districts/' + next.slug"
            class="q-explore-card reveal"
          >
            <div class="q-explore-image parallax-container">
              <NuxtImg :src="next.image" :alt="next.name" loading="lazy" decoding="async" width="600" height="338" />
            </div>
            <div class="q-explore-info">
              <span class="q-explore-type">{{ next.type }}</span>
              <h3>{{ next.name }}</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- GENERIC: All other districts                           -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div v-else-if="district" ref="root" :style="{ '--color-accent': district.accentColor, '--color-accent-accessible': district.accentColorAccessible }">
    <!-- Hero -->
    <section ref="heroSection" class="q-hero">
      <div class="q-hero-image-wrap parallax-container">
        <NuxtImg
          :src="district.image"
          :alt="`${district.name} — ${district.type}`"
          class="q-hero-image"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1400"
          height="750"
        />
        <div class="q-hero-overlay" />
      </div>
      <div class="q-hero-content section-default">
        <p class="overline">{{ district.type }}</p>
        <h1 ref="heroTitle" class="q-hero-title" :style="{ fontVariationSettings: district.fontVariation }">{{ district.name }}</h1>
        <span class="q-hero-number">{{ district.number }}</span>
      </div>
    </section>

    <!-- District Navigator -->
    <nav class="q-nav" aria-label="District navigation">
      <div class="section-default q-nav-inner">
        <NuxtLink
          v-for="d in districts"
          :key="d.slug"
          :to="'/districts/' + d.slug"
          class="q-nav-dot"
          :class="{ 'q-nav-active': d.slug === slug }"
          :style="{ '--dot-color': d.accentColor }"
          :aria-label="d.name"
          :aria-current="d.slug === slug ? 'page' : undefined"
        >
          <span class="q-nav-num">{{ d.number }}</span>
        </NuxtLink>
      </div>
    </nav>

    <!-- Body -->
    <section ref="bodySection" class="q-body section">
      <div class="section-narrow">
        <div class="q-rule" aria-hidden="true" />
        <p class="q-long reveal">{{ district.longDescription }}</p>
      </div>
    </section>

    <!-- Pull Quote -->
    <section ref="quoteSection" class="q-quote section-dark">
      <div class="section-default q-quote-inner">
        <blockquote class="q-quote-text">
          <p class="word-reveal">&ldquo;{{ district.pullQuote }}&rdquo;</p>
        </blockquote>
      </div>
    </section>

    <!-- Offerings -->
    <section ref="offeringsSection" class="q-offerings section">
      <div class="section-default">
        <p class="overline reveal">What you&rsquo;ll find</p>
        <div class="q-offerings-grid">
          <div
            v-for="(item, i) in district.offerings"
            :key="i"
            class="q-offering reveal"
          >
            <span class="q-offering-index">{{ String(i + 1).padStart(2, '0') }}</span>
            <p class="q-offering-name">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- From This District (active only) -->
    <section v-if="district.status === 'active'" ref="fromSection" class="q-from section-dark">
      <div class="section-default">
        <p class="overline reveal">From This District</p>
        <div class="q-from-content reveal">
          <template v-if="district.slug === 'the-road'">
            <p class="q-from-body">
              Meraki Publishing House publishes weekly. Long-form essays, cultural criticism, and field dispatches
              from practitioners who treat writing as a creative discipline.
            </p>
            <NuxtLink to="/the-road" class="q-from-link">Read the latest &rarr;</NuxtLink>
          </template>
        </div>
      </div>
    </section>

    <!-- Status -->
    <section ref="statusSection" class="q-status-section section">
      <div class="section-narrow">
        <div class="q-status reveal" :class="'q-status--' + district.status">
          <div class="q-status-marker" />
          <div>
            <p class="q-status-label">Status</p>
            <p class="q-status-text">
              <template v-if="district.status === 'active'">
                This district is live. {{ district.statusNote || '' }}
              </template>
              <template v-else-if="district.status === 'coming-soon'">
                {{ district.statusNote || 'Coming soon.' }}
              </template>
              <template v-else>
                This district is in development. Every detail is being built with the same standard we apply to the work itself.
              </template>
            </p>
          </div>
        </div>

        <div class="q-cta reveal">
          <p class="q-cta-text">
            Want to be notified when {{ district.name }} opens?
          </p>
          <NuxtLink to="/apply" class="q-cta-button">Express interest &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- Explore More -->
    <section ref="navSection" class="q-explore section">
      <div class="section-default">
        <p class="overline reveal">Explore more</p>
        <div class="q-explore-grid">
          <NuxtLink
            v-if="prev"
            :to="'/districts/' + prev.slug"
            class="q-explore-card reveal"
          >
            <div class="q-explore-image parallax-container">
              <NuxtImg :src="prev.image" :alt="prev.name" loading="lazy" decoding="async" width="600" height="338" />
            </div>
            <div class="q-explore-info">
              <span class="q-explore-type">{{ prev.type }}</span>
              <h3>{{ prev.name }}</h3>
            </div>
          </NuxtLink>
          <NuxtLink
            v-if="next"
            :to="'/districts/' + next.slug"
            class="q-explore-card reveal"
          >
            <div class="q-explore-image parallax-container">
              <NuxtImg :src="next.image" :alt="next.name" loading="lazy" decoding="async" width="600" height="338" />
            </div>
            <div class="q-explore-info">
              <span class="q-explore-type">{{ next.type }}</span>
              <h3>{{ next.name }}</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- NOT FOUND                                              -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div v-else class="not-found section">
    <div class="section-narrow">
      <h1>District not found</h1>
      <p><NuxtLink to="/districts">Back to all districts</NuxtLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useParallax } from '~/composables/useParallax'
import { useTilt } from '~/composables/useInteractions'
import { districts, useDistrict } from '~/composables/useDistricts'

const route = useRoute()

const slug = computed(() => route.params.slug as string)
const district = computed(() => useDistrict(slug.value))
const isVoightStudio = computed(() => slug.value === 'voight-studio')
const isProvenance = computed(() => slug.value === 'the-provenance')
const currentIndex = computed(() => districts.findIndex(i => i.slug === slug.value))
const prev = computed(() => currentIndex.value > 0 ? districts[currentIndex.value - 1] : null)
const next = computed(() => currentIndex.value < districts.length - 1 ? districts[currentIndex.value + 1] : null)

useHead(computed(() => ({
  title: district.value ? district.value.name + ' \u2014 Meraki Road' : 'Meraki Road',
  meta: district.value ? [
    { name: 'description', content: district.value.description },
    { property: 'og:title', content: district.value.name + ' \u2014 Meraki Road' },
    { property: 'og:description', content: district.value.description },
  ] : [],
})))

const root = ref<HTMLElement | null>(null)
const heroSection = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const bodySection = ref<HTMLElement | null>(null)
const quoteSection = ref<HTMLElement | null>(null)
const offeringsSection = ref<HTMLElement | null>(null)
const statusSection = ref<HTMLElement | null>(null)
const navSection = ref<HTMLElement | null>(null)
const fromSection = ref<HTMLElement | null>(null)

// Meraki Studio section refs
const vsSprintsSection = ref<HTMLElement | null>(null)
const vsWorkspaceSection = ref<HTMLElement | null>(null)
const vsVaultSection = ref<HTMLElement | null>(null)
const vsFellowSection = ref<HTMLElement | null>(null)
const vsPhilosophySection = ref<HTMLElement | null>(null)
const vsCtaSection = ref<HTMLElement | null>(null)

// The Provenance section refs
const provMetadataSection = ref<HTMLElement | null>(null)
const provDataGridSection = ref<HTMLElement | null>(null)
const provTimelineSection = ref<HTMLElement | null>(null)
const provPhilosophySection = ref<HTMLElement | null>(null)
const provProtocolSection = ref<HTMLElement | null>(null)
const provRepositorySection = ref<HTMLElement | null>(null)
const provFromSection = ref<HTMLElement | null>(null)
const provCtaSection = ref<HTMLElement | null>(null)

// Composable-driven animations (run once on mount)
useGsapScrollReveal(bodySection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(offeringsSection, '.reveal', { stagger: 0.08 })
useGsapScrollReveal(fromSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(statusSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(navSection, '.reveal', { stagger: 0.12 })
useParallax(heroSection, '.q-hero-image', { speed: 0.08 })
useTilt(navSection, '.q-explore-card', { maxRotation: 2 })

// Meraki Studio composable animations
useGsapScrollReveal(vsSprintsSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(vsWorkspaceSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(vsVaultSection, '.reveal', { stagger: 0.12 })
useGsapScrollReveal(vsFellowSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(vsPhilosophySection, '.reveal', { stagger: 0.12 })
useGsapScrollReveal(vsCtaSection, '.reveal', { stagger: 0.1 })
useTilt(vsSprintsSection, '.vs-sprint', { maxRotation: 2 })
useTilt(vsFellowSection, '.vs-fellow-card', { maxRotation: 2 })

// The Provenance composable animations
useGsapScrollReveal(provMetadataSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(provDataGridSection, '.reveal', { stagger: 0.12 })
useGsapScrollReveal(provTimelineSection, '.reveal', { stagger: 0.15 })
useGsapScrollReveal(provPhilosophySection, '.reveal', { stagger: 0.12 })
useGsapScrollReveal(provProtocolSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(provRepositorySection, '.reveal', { stagger: 0.12 })
useGsapScrollReveal(provFromSection, '.reveal', { stagger: 0.12 })
useGsapScrollReveal(provCtaSection, '.reveal', { stagger: 0.1 })
useTilt(provProtocolSection, '.prov-protocol-card', { maxRotation: 2 })
useTilt(provDataGridSection, '.prov-datagrid-card', { maxRotation: 1.5 })

let ctx: gsap.Context | null = null

/**
 * Split text into word-reveal spans and animate.
 * Reproduces useWordReveal logic inline so it can re-run on slug changes.
 */
function wordReveal(el: HTMLElement, opts: { stagger?: number; duration?: number; y?: number } = {}) {
  const { stagger = 0.07, duration = 1.1, y = 70 } = opts
  const text = el.textContent || ''
  const words = text.trim().split(/\s+/)
  el.style.display = 'flex'
  el.style.flexWrap = 'wrap'
  el.style.columnGap = '0.27em'
  el.innerHTML = words.map(word =>
    '<span class="wr-mask" style="display:inline-flex;overflow:hidden;vertical-align:bottom;padding-bottom:0.1em">' +
    '<span class="wr-word" style="display:inline-block;will-change:transform">' + word + '</span>' +
    '</span>'
  ).join('')

  gsap.from(el.querySelectorAll('.wr-word'), {
    yPercent: y,
    duration,
    stagger,
    ease: 'power2.out',
  })
}

/**
 * Split quote text and animate with ScrollTrigger.
 */
function quoteWordReveal(el: HTMLElement, triggerSelector?: string) {
  const text = el.textContent || ''
  const words = text.trim().split(/\s+/)
  el.style.display = 'flex'
  el.style.flexWrap = 'wrap'
  el.style.columnGap = '0.27em'
  el.innerHTML = words.map(word =>
    '<span class="wr-mask" style="display:inline-flex;overflow:hidden;vertical-align:bottom;padding-bottom:0.1em">' +
    '<span class="wr-word" style="display:inline-block;will-change:transform">' + word + '</span>' +
    '</span>'
  ).join('')

  gsap.from(el.querySelectorAll('.wr-word'), {
    yPercent: 70,
    duration: 1.2,
    stagger: 0.04,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: triggerSelector ? (el.closest(triggerSelector) || el) : (el.closest('.q-quote') || el),
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  })
}

function initAnimations() {
  if (!root.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)
  ctx?.revert()

  ctx = gsap.context(() => {
    if (isVoightStudio.value) {
      // ── Meraki Studio — Deep-Work Portal animations ──
      // Hero image entrance
      gsap.from('.vs-hero-image', {
        scale: 1.15,
        duration: 2.2,
        ease: 'power3.out',
      })

      // Hero subtitle fade
      gsap.from('.vs-hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.4,
      })

      // Hero metrics fade in
      gsap.from('.vs-metric', {
        opacity: 0,
        x: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.8,
      })

      // Hero title word-reveal
      if (heroTitle.value) {
        wordReveal(heroTitle.value, { stagger: 0.08, duration: 1.2, y: 100 })
      }

      // Sprint cards stagger
      gsap.fromTo('.vs-sprint',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.vs-sprints-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Vault hero metric counter
      gsap.fromTo('.vs-vault-number',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
          trigger: '.vs-vault',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      // Vault breakdown columns
      gsap.fromTo('.vs-vault-col',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.vs-vault-breakdown',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Philosophy pull quote word-reveal on scroll
      const philosophyQuote = root.value?.querySelector('.vs-philosophy-pullquote')
      if (philosophyQuote) {
        quoteWordReveal(philosophyQuote as HTMLElement, '.vs-philosophy')
      }

      // Philosophy rule draw
      gsap.fromTo('.vs-philosophy-rule',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.vs-philosophy-rule',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

    } else if (isProvenance.value) {
      // ── The Provenance animations ──
      // Hero image entrance
      gsap.from('.prov-hero-image', {
        scale: 1.15,
        duration: 2.2,
        ease: 'power3.out',
      })

      // Hero subtitle fade
      gsap.from('.prov-hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.4,
      })

      // Hero title word-reveal
      if (heroTitle.value) {
        wordReveal(heroTitle.value, { stagger: 0.08, duration: 1.2, y: 100 })
      }

      // Philosophy pull quote word-reveal on scroll
      const provQuote = root.value?.querySelector('.prov-philosophy-pullquote')
      if (provQuote) {
        quoteWordReveal(provQuote as HTMLElement, '.prov-philosophy')
      }

      // Metadata rule draw
      gsap.from('.prov-metadata-rule', {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.prov-metadata-rule',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Data grid cards stagger
      gsap.from('.prov-datagrid-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.prov-datagrid-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Timeline line draw
      gsap.from('.prov-timeline-line', {
        scaleY: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.prov-timeline-track',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Timeline events stagger
      gsap.from('.prov-timeline-event', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.prov-timeline-track',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      // Philosophy rule draw
      gsap.from('.prov-philosophy-rule', {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.prov-philosophy-rule',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Protocol cards stagger
      gsap.from('.prov-protocol-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.prov-protocol-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Repository metric counter
      gsap.from('.prov-repo-metric', {
        opacity: 0,
        y: 30,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.prov-repository',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

    } else {
      // ── Generic district animations ──
      gsap.from('.q-hero-image', {
        scale: 1.1,
        duration: 1.8,
        ease: 'power3.out',
      })

      gsap.from('.q-hero-content .overline', {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.3,
      })

      gsap.from('.q-hero-number', {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: 'power3.out',
        delay: 0.8,
      })

      if (heroTitle.value) {
        wordReveal(heroTitle.value, { stagger: 0.06, duration: 1.0, y: 80 })
      }

      gsap.from('.q-body', {
        y: 60,
        opacity: 0,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.4,
      })

      gsap.from('.q-rule', {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.q-rule',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      const quoteP = root.value?.querySelector('.q-quote-text .word-reveal')
      if (quoteP) {
        quoteWordReveal(quoteP as HTMLElement)
      }
    }
  }, root.value)
}

onMounted(async () => {
  if (!root.value) return
  await waitForAncestorAnimations(root.value)
  if (!root.value) return
  initAnimations()
})

watch(slug, async () => {
  ctx?.revert()
  window.scrollTo(0, 0)
  await nextTick()
  await nextTick()
  initAnimations()
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════ */
/* VOIGHT STUDIO — Deep-Work Portal Styles                    */
/* ═══════════════════════════════════════════════════════════ */

/* VS Hero — Full viewport, archival image background */
.vs-hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.vs-hero-image-wrap {
  position: absolute;
  inset: 0;
}

.vs-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
}

.vs-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.88) 0%,
    rgba(10, 10, 10, 0.45) 35%,
    rgba(10, 10, 10, 0.08) 70%,
    transparent 100%
  );
}

.vs-hero-metrics {
  position: absolute;
  top: var(--space-8);
  right: var(--content-padding);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-3);
}

.vs-metric {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.vs-metric-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-success);
  box-shadow: 0 0 6px rgba(22, 163, 74, 0.5);
  flex-shrink: 0;
}

.vs-metric-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 400;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: rgba(250, 250, 249, 0.5);
}

.vs-metric-value {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  color: rgba(250, 250, 249, 0.8);
}

.vs-hero-content {
  position: relative;
  z-index: 1;
  padding: 0 var(--content-padding) var(--space-16);
  width: 100%;
  max-width: var(--content-max-width);
}

.vs-hero-subtitle {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.vs-hero-title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 300;
  font-style: italic;
  line-height: 1.0;
  color: #FAFAF9;
  letter-spacing: var(--tracking-hero);
  font-variation-settings: 'WONK' 1, 'SOFT' 0, 'opsz' 72;
}

/* VS Active Sprints — 3-column card grid */
.vs-sprints {
  padding: var(--space-32) 0;
}

.vs-sprints .overline {
  margin-bottom: var(--space-12);
}

.vs-sprints-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.vs-sprint {
  padding: var(--space-8);
  position: relative;
  border-color: rgba(184, 150, 78, 0.08);
  display: flex;
  flex-direction: column;
  transition: border-color var(--duration-normal) ease,
              transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.vs-sprint:hover {
  border-color: rgba(184, 150, 78, 0.35);
}

.vs-sprint-number {
  font-family: var(--font-mono);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 200;
  color: rgba(250, 250, 249, 0.06);
  line-height: 1;
  display: block;
  margin-bottom: var(--space-6);
  letter-spacing: var(--tracking-wide);
}

.vs-sprint-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 400;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
  line-height: var(--leading-snug);
}

.vs-sprint-title em {
  font-style: italic;
  font-variation-settings: 'WONK' 1, 'SOFT' 40;
}

.vs-sprint-desc {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  max-width: none;
  margin-bottom: auto;
  padding-bottom: var(--space-6);
}

.vs-sprint-status {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: auto;
}

.vs-sprint-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.vs-sprint-status-dot--active {
  background: var(--color-success);
  box-shadow: 0 0 6px rgba(22, 163, 74, 0.5);
}

.vs-sprint-status-dot--staging {
  background: var(--color-gold);
  box-shadow: 0 0 6px rgba(184, 150, 78, 0.4);
}

.vs-sprint-status-dot--queued {
  background: var(--color-dark-muted);
}

.vs-sprint-status-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

/* VS The Workspace — Active production environment */
.vs-workspace {
  padding: var(--space-32) 0;
  background: var(--color-dark-bg);
}

.vs-workspace .overline {
  margin-bottom: var(--space-2);
}

.vs-workspace-subtitle {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-8);
}

.vs-workspace-tabs {
  display: flex;
  gap: var(--space-6);
  border-bottom: 1px solid rgba(184, 150, 78, 0.12);
  margin-bottom: var(--space-12);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.vs-workspace-tabs::-webkit-scrollbar {
  display: none;
}

.vs-workspace-tab {
  background: none;
  border: none;
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  padding: var(--space-3) 0;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  transition: color var(--duration-fast) ease;
}

.vs-workspace-tab:hover {
  color: var(--color-dark-secondary);
}

.vs-workspace-tab--active {
  color: var(--color-gold);
}

.vs-workspace-tab--active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-gold);
}

.vs-workspace-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.vs-workspace-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.vs-workspace-card-image {
  width: 100%;
  height: 160px;
  background: linear-gradient(135deg, #2a2a2d 0%, #1a1a1d 50%, #222225 100%);
  border-bottom: 1px solid rgba(184, 150, 78, 0.08);
}

.vs-workspace-card-body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.vs-workspace-card-title {
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: var(--weight-regular);
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
}

.vs-workspace-card-title em {
  font-style: italic;
  font-variation-settings: 'WONK' 1;
}

.vs-workspace-card-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.vs-workspace-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--text-caption);
  font-weight: 500;
  color: var(--color-dark-secondary);
}

.vs-workspace-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.vs-workspace-dot--green {
  background: var(--color-success);
  box-shadow: 0 0 6px rgba(22, 163, 74, 0.4);
}

.vs-workspace-dot--gold {
  background: var(--color-gold);
  box-shadow: 0 0 6px rgba(184, 150, 78, 0.4);
}

.vs-workspace-state {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.vs-workspace-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-3);
  border-top: 1px solid rgba(184, 150, 78, 0.08);
}

.vs-workspace-tag {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

.vs-workspace-time {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--color-dark-muted);
  opacity: 0.6;
}

/* VS The Vault — Repository metrics */
.vs-vault {
  padding: var(--space-32) 0;
  background: var(--color-dark-bg);
}

.vs-vault-inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.vs-vault-hero-metric {
  text-align: center;
}

.vs-vault-number {
  font-family: var(--font-display);
  font-size: clamp(5rem, 12vw, 10rem);
  font-weight: 200;
  line-height: 1;
  color: var(--color-gold);
  letter-spacing: var(--tracking-hero);
  font-variation-settings: 'WONK' 1, 'opsz' 72;
}

.vs-vault-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-ultra-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-top: var(--space-3);
}

.vs-vault-breakdown {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  border-top: 1px solid rgba(184, 150, 78, 0.15);
  padding-top: var(--space-8);
}

.vs-vault-col {
  text-align: center;
}

.vs-vault-col-number {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-2);
  font-variation-settings: 'WONK' 1, 'opsz' 72;
}

.vs-vault-col-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

/* VS Philosophy — Asymmetric 7/5 grid */
.vs-philosophy {
  padding-top: var(--space-32);
  padding-bottom: var(--space-24);
}

.vs-philosophy-grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: var(--space-16);
  align-items: start;
}

.vs-philosophy-pullquote {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-ink);
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
}

.vs-philosophy-attribution {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-text-muted);
  margin-top: var(--space-4);
  letter-spacing: var(--tracking-wide);
}

.vs-philosophy-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-8);
  transform-origin: left;
}

.vs-philosophy-body p {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-6);
}

.vs-philosophy-body p:last-child {
  margin-bottom: 0;
}

/* VS Fellow Showcase — Verified creators */
.vs-fellow {
  padding: var(--space-32) 0;
}

.vs-fellow .overline {
  margin-bottom: var(--space-12);
}

.vs-fellow-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.vs-fellow-card {
  padding: var(--space-8);
  border-color: rgba(184, 150, 78, 0.08);
  display: flex;
  flex-direction: column;
  transition: border-color var(--duration-normal) ease;
}

.vs-fellow-card:hover {
  border-color: rgba(184, 150, 78, 0.35);
}

.vs-fellow-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.vs-fellow-initial {
  font-family: var(--font-mono);
  font-size: var(--text-h3);
  font-weight: 300;
  color: rgba(250, 250, 249, 0.08);
  letter-spacing: var(--tracking-wide);
}

.vs-fellow-verified {
  color: var(--color-gold);
  display: flex;
  align-items: center;
}

.vs-fellow-verified .material-symbols-outlined {
  font-size: 18px;
}

.vs-fellow-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-dark-text);
  margin-bottom: var(--space-1);
  line-height: var(--leading-snug);
}

.vs-fellow-name em {
  font-style: italic;
  font-variation-settings: 'WONK' 1, 'SOFT' 40;
}

.vs-fellow-role {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.7;
  margin-bottom: var(--space-4);
}

.vs-fellow-bio {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
}

/* VS Philosophy heading with icon */
.vs-philosophy-heading {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.vs-philosophy-icon {
  font-size: 16px;
  opacity: 0.8;
}

/* VS CTA — Dual action */
.vs-cta {
  padding: var(--space-32) 0;
}

.vs-cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vs-cta-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
}

.vs-cta-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
}

.vs-cta-btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-3) var(--space-8);
  font-size: var(--text-overline);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  text-decoration: none;
  background-image: none;
  transition: opacity var(--duration-normal) ease;
}

.vs-cta-btn--primary {
  background: var(--color-gold);
  color: var(--color-background);
}

.vs-cta-btn--primary:hover {
  opacity: 0.85;
}

.vs-cta-btn--secondary {
  background: transparent;
  color: var(--color-gold);
  border: 1px solid rgba(184, 150, 78, 0.4);
}

.vs-cta-btn--secondary:hover {
  border-color: var(--color-gold);
}


/* ═══════════════════════════════════════════════════════════ */
/* THE PROVENANCE — Bespoke Styles                            */
/* ═══════════════════════════════════════════════════════════ */

/* Prov Hero — Full viewport, archival treatment */
.prov-hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.prov-hero-image-wrap {
  position: absolute;
  inset: 0;
}

.prov-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  filter: sepia(15%) contrast(1.05) brightness(0.95);
}

.prov-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.88) 0%,
    rgba(10, 10, 10, 0.45) 35%,
    rgba(10, 10, 10, 0.08) 70%,
    transparent 100%
  );
}

.prov-hero-content {
  position: relative;
  z-index: 1;
  padding: 0 var(--content-padding) var(--space-16);
  width: 100%;
  max-width: var(--content-max-width);
}

.prov-hero-subtitle {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.prov-hero-title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 300;
  font-style: italic;
  line-height: 1.0;
  color: #FAFAF9;
  letter-spacing: var(--tracking-hero);
  font-variation-settings: 'WONK' 1, 'SOFT' 0, 'opsz' 72;
}

/* Prov Mono utility */
.prov-mono {
  font-family: var(--font-mono);
}

/* Prov Entry Metadata — Institutional ledger header */
.prov-metadata {
  padding-top: var(--space-24);
  padding-bottom: var(--space-16);
}

.prov-metadata-inner {
  max-width: 640px;
}

.prov-metadata-entry-no {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.prov-metadata-entry-no .prov-mono {
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  color: var(--color-gold-accessible);
}

.prov-metadata-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  font-variation-settings: 'WONK' 1, 'SOFT' 60;
}

.prov-metadata-desc {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-8);
}

.prov-metadata-rule {
  width: 64px;
  height: 1px;
  background: var(--color-gold);
  transform-origin: left;
}

/* Prov Data Grid — 3-column verification data */
.prov-datagrid {
  padding: var(--space-24) 0;
}

.prov-datagrid .overline {
  margin-bottom: var(--space-12);
}

.prov-datagrid-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.prov-datagrid-card {
  padding: var(--space-8);
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.02);
  transition: border-color var(--duration-normal) ease,
              transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.prov-datagrid-card:hover {
  border-color: rgba(184, 150, 78, 0.35);
}

.prov-datagrid-card-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid rgba(184, 150, 78, 0.12);
}

.prov-datagrid-dl {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.prov-datagrid-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.prov-datagrid-row dt {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.prov-datagrid-row dd {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-text);
  line-height: var(--leading-normal);
}

/* Prov Ink-Trace History — Gold-line timeline */
.prov-timeline {
  padding: var(--space-24) 0 var(--space-16);
}

.prov-timeline .overline {
  margin-bottom: var(--space-12);
}

.prov-timeline-track {
  position: relative;
  padding-left: var(--space-10);
}

.prov-timeline-line {
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--color-gold);
  transform-origin: top;
}

.prov-timeline-event {
  position: relative;
  padding-bottom: var(--space-10);
}

.prov-timeline-event:last-child {
  padding-bottom: 0;
}

.prov-timeline-dot {
  position: absolute;
  left: calc(-1 * var(--space-10) + 1px);
  top: 4px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid var(--color-gold);
  background: #09090B;
}

.prov-timeline-dot--active {
  background: var(--color-gold);
  box-shadow: 0 0 0 3px rgba(184, 150, 78, 0.2);
}

.prov-timeline-content {
  padding-left: var(--space-4);
}

.prov-timeline-label {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: 2px;
  font-variation-settings: 'WONK' 1, 'SOFT' 40;
}

.prov-timeline-date {
  font-size: 0.75rem;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}

.prov-timeline-body {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

.prov-timeline-badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(184, 150, 78, 0.3);
  padding: 2px 8px;
  margin-left: var(--space-2);
  vertical-align: middle;
}

/* Prov Archival Philosophy — Asymmetric 7/5 grid */
.prov-philosophy {
  padding-top: var(--space-32);
  padding-bottom: var(--space-24);
}

.prov-philosophy-grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: var(--space-16);
  align-items: start;
}

.prov-philosophy-pullquote {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-ink);
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
}

.prov-philosophy-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-8);
  transform-origin: left;
}

.prov-philosophy-body p {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-6);
}

.prov-philosophy-body p:last-child {
  margin-bottom: 0;
}

/* Prov Verification Protocol — 3-column cards */
.prov-protocol {
  padding: var(--space-32) 0;
}

.prov-protocol .overline {
  margin-bottom: var(--space-12);
}

.prov-protocol-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.prov-protocol-card {
  padding: var(--space-8);
  position: relative;
  border-color: rgba(184, 150, 78, 0.08);
  transition: border-color var(--duration-normal) ease,
              transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.prov-protocol-card:hover {
  border-color: rgba(184, 150, 78, 0.35);
}

.prov-protocol-number {
  font-family: var(--font-mono);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 200;
  color: rgba(250, 250, 249, 0.06);
  line-height: 1;
  display: block;
  margin-bottom: var(--space-6);
  letter-spacing: var(--tracking-wide);
}

.prov-protocol-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 400;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
  line-height: var(--leading-snug);
}

.prov-protocol-title em {
  font-style: italic;
  font-variation-settings: 'WONK' 1, 'SOFT' 40;
}

.prov-protocol-desc {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  max-width: none;
}

/* Prov Repository — Dark metric section */
.prov-repository {
  padding: var(--space-32) 0;
}

.prov-repo-inner {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: var(--space-16);
  align-items: start;
}

.prov-repo-metric-wrap {
  text-align: left;
}

.prov-repo-metric {
  font-family: var(--font-display);
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 200;
  line-height: 1;
  color: var(--color-gold);
  letter-spacing: var(--tracking-hero);
  font-variation-settings: 'WONK' 1, 'opsz' 72;
}

.prov-repo-metric-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-top: var(--space-3);
}

.prov-repo-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-8);
  transform-origin: left;
}

.prov-repo-body p {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-bottom: var(--space-6);
}

.prov-repo-quote {
  border-left: 2px solid rgba(184, 150, 78, 0.3);
  padding-left: var(--space-6);
  margin-top: var(--space-4);
}

.prov-repo-quote p {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  font-style: italic;
  color: var(--color-text-muted);
  line-height: var(--leading-snug);
  max-width: 45ch;
  font-variation-settings: 'WONK' 1, 'SOFT' 60;
}

/* Prov From The Provenance — Essay cards */
.prov-from {
  padding: var(--space-24) 0 var(--space-16);
}

.prov-from .overline {
  margin-bottom: var(--space-8);
}

.prov-from-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.prov-from-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-8);
  border: 1px solid var(--color-border);
  background-image: none;
  text-decoration: none;
  color: inherit;
  transition: border-color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.prov-from-card:hover {
  border-color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.04);
}

.prov-from-tag {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold-accessible);
  margin-bottom: var(--space-4);
  display: block;
}

.prov-from-card h3 {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 400;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  margin-bottom: auto;
  padding-bottom: var(--space-8);
  font-variation-settings: 'WONK' 1, 'SOFT' 60;
}

.prov-from-read {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.6;
  transition: opacity var(--duration-fast) ease;
}

.prov-from-card:hover .prov-from-read {
  opacity: 1;
}

/* Prov CTA — Quiet institutional */
.prov-cta {
  padding: var(--space-32) 0;
}

.prov-cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.prov-cta-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-6);
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
}

.prov-cta-body {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
  margin-bottom: var(--space-8);
}

.prov-validate-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  text-decoration: none;
  border: 1px solid rgba(184, 150, 78, 0.4);
  padding: var(--space-3) var(--space-8);
  transition: border-color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.prov-validate-icon {
  font-size: 1.125rem;
}

.prov-validate-btn:hover {
  border-color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.06);
}


/* ═══════════════════════════════════════════════════════════ */
/* GENERIC — All other districts (unchanged)                  */
/* ═══════════════════════════════════════════════════════════ */

/* Hero */
.q-hero {
  position: relative;
  height: 75vh;
  min-height: 450px;
  max-height: 750px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.q-hero-image-wrap {
  position: absolute;
  inset: 0;
}

.q-hero-image {
  width: 100%;
  height: 130%;
  top: -15%;
  position: relative;
  object-fit: cover;
  will-change: transform;
  filter: grayscale(100%) sepia(20%) contrast(1.1);
  transition: filter 0.6s ease-in-out;
}

.q-hero:hover .q-hero-image {
  filter: grayscale(0) sepia(0) contrast(1);
}

.q-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(9, 9, 11, 0.88) 0%,
    rgba(9, 9, 11, 0.35) 45%,
    rgba(9, 9, 11, 0.08) 100%
  );
  box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.5);
}

.q-hero-content {
  position: relative;
  z-index: 1;
  padding-bottom: var(--space-16);
  width: 100%;
}

.q-hero-content .overline {
  color: var(--color-accent);
  margin-bottom: var(--space-3);
}

.q-hero-title {
  font-size: var(--text-display);
  color: var(--color-dark-text);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
}

.q-hero-number {
  position: absolute;
  bottom: var(--space-16);
  right: var(--content-padding);
  font-family: var(--font-mono);
  font-size: clamp(4rem, 8vw, 7rem);
  color: var(--color-accent);
  letter-spacing: var(--tracking-ultra-wide);
  opacity: 0.12;
  line-height: 1;
  pointer-events: none;
}

/* District Navigator — museum wayfinding strip */
.q-nav {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.q-nav-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: var(--space-3) 0;
  position: relative;
}

/* Connecting line between all dots */
.q-nav-inner::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - var(--content-padding) * 2);
  max-width: 440px;
  height: 1px;
  background: var(--color-border);
  pointer-events: none;
}

.q-nav-dot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-image: none;
  text-decoration: none;
  position: relative;
  z-index: 1;
  transition: transform var(--duration-normal) var(--ease-out);
}

.q-nav-dot:hover {
  transform: scale(1.15);
}

/* Node circle on the line */
.q-nav-dot::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-border);
  transition: width var(--duration-normal) var(--ease-out),
              height var(--duration-normal) var(--ease-out),
              background var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.q-nav-dot:hover::before {
  width: 8px;
  height: 8px;
  background: var(--dot-color);
}

.q-nav-active::before {
  width: 10px;
  height: 10px;
  background: var(--color-gold);
  box-shadow: 0 0 8px rgba(184, 150, 78, 0.35);
}

/* Bottom indicator bar */
.q-nav-dot::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--dot-color);
  transition: width var(--duration-normal) var(--ease-out);
}

.q-nav-dot:hover::after,
.q-nav-active::after {
  width: 100%;
}

.q-nav-num {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
  opacity: 0;
  position: absolute;
  bottom: -14px;
  transition: color var(--duration-fast) ease,
              opacity var(--duration-normal) var(--ease-out);
  pointer-events: none;
}

.q-nav-dot:hover .q-nav-num,
.q-nav-active .q-nav-num {
  opacity: 1;
}

.q-nav-active .q-nav-num {
  color: var(--color-gold);
  font-weight: 600;
}

.q-nav-dot:hover .q-nav-num {
  color: var(--color-ink);
}

/* Body */
.q-body { padding-top: var(--space-24); }

.q-rule {
  width: 48px;
  height: 1px;
  background: var(--color-accent);
  margin-bottom: var(--space-12);
  transform-origin: left;
}

.q-long {
  font-size: var(--text-body);
  color: var(--color-text);
  line-height: var(--leading-relaxed);
  max-width: 60ch;
}

/* Pull Quote */
.q-quote {
  padding: var(--space-32) 0;
}

.q-quote-inner {
  display: flex;
  justify-content: center;
}

.q-quote-text {
  text-align: center;
  max-width: 700px;
}

.q-quote-text p {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  max-width: none;
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
}

/* From This District */
.q-from {
  padding: var(--space-16) 0;
}

.q-from-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-bottom: var(--space-6);
}

.q-from-link {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-accent);
  background-image: none;
  border-left: 2px solid var(--color-accent);
  padding-left: var(--space-4);
  transition: opacity var(--duration-fast) ease;
}

.q-from-link:hover {
  opacity: 0.7;
}

/* Offerings */
.q-offerings { padding-bottom: var(--space-16); }

.q-offerings .overline {
  margin-bottom: var(--space-12);
}

.q-offerings-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
}

.q-offering {
  background: var(--color-background);
  padding: var(--space-8);
  transition: background 0.3s ease;
}

.q-offering:hover {
  background: var(--color-surface);
}

.q-offering-index {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  color: var(--color-accent);
  letter-spacing: var(--tracking-mega-wide);
  display: block;
  margin-bottom: var(--space-4);
}

.q-offering-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  letter-spacing: var(--tracking-snug);
  color: var(--color-ink);
  max-width: none;
}

/* Status */
.q-status {
  display: flex;
  align-items: flex-start;
  gap: var(--space-6);
  padding: var(--space-8);
  border: 1px solid var(--color-border);
}

.q-status-marker {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  flex-shrink: 0;
  margin-top: var(--space-1);
  animation: statusPulse 2s ease-in-out infinite;
}

.q-status--active .q-status-marker {
  background: var(--color-success);
  animation: none;
}

.q-status--coming-soon .q-status-marker {
  background: var(--color-accent);
}

@keyframes statusPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.q-status-label {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-accent-accessible);
  margin-bottom: var(--space-2);
  max-width: none;
}

.q-status-text {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

/* CTA */
.q-cta {
  margin-top: var(--space-16);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

.q-cta-text {
  font-size: var(--text-body);
  color: var(--color-text-muted);
}

.q-cta-button {
  flex-shrink: 0;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-3) var(--space-8);
  border: 1px solid var(--color-border);
  border-left: 2px solid var(--color-accent);
  background-image: none;
  transition: border-color var(--duration-fast) ease,
              color var(--duration-fast) ease,
              background-color var(--duration-fast) ease;
}

.q-cta-button:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 6%, transparent);
}

/* Explore More */
.q-explore .overline { margin-bottom: var(--space-8); }

.q-explore-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
}

.q-explore-card {
  display: block;
  background: var(--color-background);
  text-decoration: none;
  color: inherit;
  background-image: none;
  overflow: hidden;
  transition: background 0.3s ease;
}

.q-explore-card:hover {
  background: var(--color-surface);
}

.q-explore-card:hover .q-explore-image img {
  transform: scale(1.04);
}

.q-explore-image {
  aspect-ratio: 16/9;
  overflow: hidden;
}

.q-explore-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) sepia(20%) contrast(1.1);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.6s ease-in-out;
}

.q-explore-card:hover .q-explore-image img {
  filter: grayscale(0) sepia(0) contrast(1);
}

/* Parallax container interaction */
.parallax-container img {
  transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1),
              filter 0.6s ease;
}

.parallax-container:hover img {
  transform: scale(1.08) translateY(-2%);
}

.q-explore-info {
  padding: var(--space-6) var(--space-8);
}

.q-explore-type {
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-2);
}

.q-explore-info h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-h3);
  line-height: var(--leading-snug);
}

/* Not found */
.not-found {
  padding-top: calc(var(--space-32) + 3rem);
  min-height: 60vh;
}

.not-found h1 { margin-bottom: var(--space-4); }


/* ═══════════════════════════════════════════════════════════ */
/* RESPONSIVE                                                 */
/* ═══════════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  /* Nav dots — ensure touch targets */
  .q-nav-dot {
    width: 44px;
    height: 44px;
  }

  .q-nav-inner {
    gap: var(--space-1);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .q-nav-inner::-webkit-scrollbar {
    display: none;
  }

  /* VS Hero */
  .vs-hero {
    height: 70vh;
    min-height: 400px;
  }

  .vs-hero-title {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  .vs-hero-metrics {
    top: var(--space-16);
  }

  /* VS Sprints */
  .vs-sprints-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* VS Fellow Showcase */
  .vs-fellow-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  /* VS CTA */
  .vs-cta-actions {
    flex-direction: column;
    width: 100%;
  }

  .vs-cta-btn {
    justify-content: center;
    min-height: 44px;
  }

  /* VS Workspace */
  .vs-workspace-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* VS Vault */
  .vs-vault-number {
    font-size: clamp(3.5rem, 14vw, 6rem);
  }

  .vs-vault-breakdown {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .vs-vault-col {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: var(--space-3);
  }

  /* VS Philosophy */
  .vs-philosophy-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .vs-philosophy-pullquote {
    font-size: var(--text-h2);
  }

  /* VS CTA */
  .vs-cta-email {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  /* Prov Hero */
  .prov-hero {
    height: 70vh;
    min-height: 400px;
  }

  .prov-hero-title {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  /* Prov Metadata */
  .prov-metadata-title {
    font-size: var(--text-h3);
  }

  /* Prov Data Grid */
  .prov-datagrid-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  /* Prov Timeline */
  .prov-timeline-track {
    padding-left: var(--space-8);
  }

  .prov-timeline-dot {
    left: calc(-1 * var(--space-8) + 1px);
  }

  /* Prov Philosophy */
  .prov-philosophy-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .prov-philosophy-pullquote {
    font-size: var(--text-h2);
  }

  /* Prov Protocol */
  .prov-protocol-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Prov Repository */
  .prov-repo-inner {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .prov-repo-metric {
    font-size: clamp(3rem, 12vw, 5rem);
  }

  /* Prov From */
  .prov-from-grid {
    grid-template-columns: 1fr;
  }

  /* Prov CTA */
  .prov-validate-btn {
    min-height: 44px;
  }

  /* Generic Hero */
  .q-hero {
    height: 55vh;
    min-height: 320px;
  }

  .q-hero-content {
    padding-bottom: var(--space-8);
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
  }

  .q-quote { padding: var(--space-16) 0; }

  .q-quote-text p { font-size: var(--text-h2); }

  .q-offerings-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .q-cta {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .q-cta-button {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
    min-height: 44px;
  }

  .q-explore-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .q-offerings-grid {
    grid-template-columns: 1fr;
  }

  .vs-sprints-grid {
    grid-template-columns: 1fr;
  }

  .vs-workspace-grid {
    grid-template-columns: 1fr;
  }

  .prov-protocol-grid {
    grid-template-columns: 1fr;
  }
}
</style>
