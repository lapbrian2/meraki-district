<template>
  <div class="submit-page">

    <!-- ============================================
         HERO — The Ritual of Offering
    ============================================= -->
    <section ref="heroSection" class="submit-hero section section-dark">
      <div class="section-narrow hero-inner">
        <span class="overline-badge reveal">Submission</span>
        <h1 class="submit-hero-title word-reveal">
          <em>The Ritual of Offering.</em>
        </h1>
        <p class="submit-hero-sub reveal">
          Every work submitted to the archive is treated as an act of record.
          What you offer here becomes permanent &mdash; cataloged, preserved,
          and held to the standards of the district it enters.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         STEP INDICATOR
    ============================================= -->
    <section ref="stepsSection" class="submit-steps section section-dark">
      <div class="section-default">
        <div class="steps-track">
          <div
            v-for="(step, i) in steps"
            :key="step.label"
            class="step-node reveal"
            :class="{ 'step-node--active': currentStep === i, 'step-node--done': currentStep > i }"
          >
            <span class="step-number">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="step-label">{{ step.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         STEP 01: UPLOAD
    ============================================= -->
    <section v-show="currentStep === 0" ref="uploadSection" class="submit-upload section section-dark">
      <div class="section-default">
        <div class="form-header">
          <span class="form-step-label reveal">01. Upload</span>
          <h2 class="form-title word-reveal"><em>Commence the Upload</em></h2>
          <p class="form-subtitle reveal">
            Digital manuscript or visual artefact. Accepted formats: RAW, TIFF,
            PNG, PDF. Maximum 2.0GB per transmission.
          </p>
        </div>

        <div class="upload-zone reveal" @click="triggerUpload" @dragover.prevent @drop.prevent="handleDrop">
          <span class="material-symbols-outlined upload-icon">cloud_upload</span>
          <p class="upload-text">Drag your work here, or click to browse</p>
          <p class="upload-hint">The file will be encrypted and held in cold storage until verification.</p>
          <input
            ref="fileInput"
            type="file"
            class="upload-input"
            accept=".raw,.tiff,.tif,.png,.pdf"
            @change="handleFileSelect"
          />
        </div>

        <div v-if="uploadedFile" class="uploaded-file reveal">
          <span class="material-symbols-outlined uploaded-icon">description</span>
          <span class="uploaded-name">{{ uploadedFile.name }}</span>
          <span class="uploaded-size">{{ formatFileSize(uploadedFile.size) }}</span>
          <button class="uploaded-remove" aria-label="Remove file" @click="removeFile">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <div class="form-actions reveal">
          <button class="form-btn-primary" :disabled="!uploadedFile" @click="nextStep">
            Proceed to Metadata &rarr;
          </button>
          <button class="form-btn-ghost" @click="saveDraft">Save Draft</button>
        </div>
      </div>
    </section>

    <!-- ============================================
         STEP 02: METADATA
    ============================================= -->
    <section v-show="currentStep === 1" ref="metadataSection" class="submit-metadata section section-dark">
      <div class="section-default">
        <div class="form-header">
          <span class="form-step-label reveal">02. Metadata Schema</span>
          <h2 class="form-title word-reveal"><em>Classify the Specimen</em></h2>
          <p class="form-subtitle reveal">
            Technical classification and conceptual anchoring. All fields
            are sealed into the district ledger upon verification.
          </p>
        </div>

        <form class="metadata-form" @submit.prevent="nextStep">
          <div class="form-field reveal">
            <label for="specimen-title" class="field-label">Specimen Title</label>
            <input
              id="specimen-title"
              v-model="form.title"
              type="text"
              class="field-input"
              placeholder="Untitled Work"
              required
            />
          </div>

          <div class="form-field reveal">
            <label class="field-label">Primary Medium</label>
            <div class="radio-group">
              <label v-for="medium in mediums" :key="medium" class="radio-option">
                <input v-model="form.medium" type="radio" :value="medium" name="medium" class="radio-input" />
                <span class="radio-mark" />
                <span class="radio-text">{{ medium }}</span>
              </label>
            </div>
          </div>

          <div class="form-field reveal">
            <label for="tooling" class="field-label">Tooling &amp; Protocol</label>
            <input
              id="tooling"
              v-model="form.tooling"
              type="text"
              class="field-input"
              placeholder="e.g., Blender 4.1, Stable Diffusion XL, oil on linen"
            />
          </div>

          <div class="form-field reveal">
            <label for="intent" class="field-label">Conceptual Intent</label>
            <textarea
              id="intent"
              v-model="form.intent"
              class="field-textarea"
              rows="4"
              placeholder="What is this work about? What question does it ask?"
            />
          </div>

          <div class="form-field reveal">
            <label for="district" class="field-label">Target District</label>
            <select id="district" v-model="form.district" class="field-select">
              <option value="" disabled>Select a district</option>
              <option value="pavilion">The Pavilion</option>
              <option value="publishing">Publishing House</option>
              <option value="voight-studio">Meraki Studio</option>
              <option value="fashion-atelier">Fashion Atelier</option>
              <option value="frame">The Frame</option>
            </select>
          </div>

          <div class="form-actions reveal">
            <button type="submit" class="form-btn-primary" :disabled="!form.title || !form.medium">
              Proceed to Verification &rarr;
            </button>
            <button type="button" class="form-btn-ghost" @click="prevStep">&larr; Back</button>
          </div>
        </form>
      </div>
    </section>

    <!-- ============================================
         STEP 03: VERIFICATION
    ============================================= -->
    <section v-show="currentStep === 2" ref="verifySection" class="submit-verify section section-dark">
      <div class="section-default">
        <div class="form-header">
          <span class="form-step-label reveal">03. Verification</span>
          <h2 class="form-title word-reveal"><em>Seal the Record</em></h2>
          <p class="form-subtitle reveal">
            Review your submission before it enters the archive.
            Once sealed, the metadata becomes permanent.
          </p>
        </div>

        <div class="verify-summary">
          <div class="verify-row reveal">
            <span class="verify-label">Specimen</span>
            <span class="verify-value">{{ form.title || 'Untitled' }}</span>
          </div>
          <div class="verify-row reveal">
            <span class="verify-label">Medium</span>
            <span class="verify-value">{{ form.medium || '---' }}</span>
          </div>
          <div class="verify-row reveal">
            <span class="verify-label">Tooling</span>
            <span class="verify-value">{{ form.tooling || '---' }}</span>
          </div>
          <div class="verify-row reveal">
            <span class="verify-label">Intent</span>
            <span class="verify-value verify-value--long">{{ form.intent || '---' }}</span>
          </div>
          <div class="verify-row reveal">
            <span class="verify-label">District</span>
            <span class="verify-value">{{ form.district || '---' }}</span>
          </div>
          <div v-if="uploadedFile" class="verify-row reveal">
            <span class="verify-label">File</span>
            <span class="verify-value">{{ uploadedFile.name }} ({{ formatFileSize(uploadedFile.size) }})</span>
          </div>
        </div>

        <div class="verify-protocol reveal">
          <span class="material-symbols-outlined verify-protocol-icon">verified</span>
          <span class="verify-protocol-text">Authenticity Protocol Active &middot; Archival Link Established</span>
        </div>

        <div class="form-actions reveal">
          <button class="form-btn-primary" @click="submitWork">
            <span class="material-symbols-outlined form-btn-icon">lock</span>
            Seal &amp; Submit
          </button>
          <button class="form-btn-ghost" @click="prevStep">&larr; Back to Metadata</button>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ATMOSPHERIC FOOTER QUOTE
    ============================================= -->
    <section class="submit-footer section section-dark">
      <div class="section-narrow" style="text-align: center;">
        <p class="submit-footer-quote reveal">
          <em>&ldquo;What is offered with integrity enters the record. What enters the record endures.&rdquo;</em>
        </p>
        <div class="submit-footer-meta reveal">
          <span class="submit-footer-protocol">Protocol &middot; Governance &middot; Privacy</span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'Submit Work — Meraki Road',
  meta: [
    { name: 'description', content: 'Submit your work to the Meraki Road archive. A structured ritual of offering for practitioners.' },
  ],
})

useSeoMeta({
  ogTitle: 'Submit Work — Meraki Road',
  ogDescription: 'Submit your work to the Meraki Road archive. A structured ritual of offering for practitioners.',
  twitterTitle: 'Submit Work — Meraki Road',
  twitterDescription: 'Submit your work to the Meraki Road archive.',
})

/* -- Refs --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const stepsSection = ref<HTMLElement | null>(null)
const uploadSection = ref<HTMLElement | null>(null)
const metadataSection = ref<HTMLElement | null>(null)
const verifySection = ref<HTMLElement | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')
useGsapScrollReveal(stepsSection, '.reveal', { stagger: 0.08 })
useGsapScrollReveal(uploadSection, '.reveal', { stagger: 0.06 })
useWordReveal(uploadSection, '.word-reveal')
useGsapScrollReveal(metadataSection, '.reveal', { stagger: 0.06 })
useWordReveal(metadataSection, '.word-reveal')
useGsapScrollReveal(verifySection, '.reveal', { stagger: 0.06 })
useWordReveal(verifySection, '.word-reveal')

/* -- Step management ---------------------------- */
const currentStep = ref(0)

const steps = [
  { label: 'Upload' },
  { label: 'Metadata' },
  { label: 'Verification' },
]

function nextStep() {
  if (currentStep.value < 2) {
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

/* -- File handling ------------------------------ */
const uploadedFile = ref<File | null>(null)

function triggerUpload() {
  fileInput.value?.click()
}

function handleFileSelect(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files?.[0]) {
    uploadedFile.value = target.files[0]
  }
}

function handleDrop(e: DragEvent) {
  if (e.dataTransfer?.files?.[0]) {
    uploadedFile.value = e.dataTransfer.files[0]
  }
}

function removeFile() {
  uploadedFile.value = null
  if (fileInput.value) fileInput.value.value = ''
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/* -- Form data ---------------------------------- */
const form = reactive({
  title: '',
  medium: '',
  tooling: '',
  intent: '',
  district: '',
})

const mediums = ['Digital', 'Physical', 'Hybrid']

function saveDraft() {
  // Placeholder for draft save functionality
}

function submitWork() {
  // Placeholder for submission functionality
}
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.submit-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  text-align: center;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.overline-badge {
  display: inline-block;
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(184, 150, 78, 0.3);
  padding: var(--space-1) var(--space-3);
  margin-bottom: var(--space-6);
}

.submit-hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-bottom: var(--space-8);
  color: var(--color-dark-text);
}

.submit-hero-title em { font-style: italic; }

.submit-hero-sub {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 48ch;
}

@media (max-width: 768px) {
  .submit-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }
}

/* =============================================
   STEP INDICATOR
   ============================================= */
.submit-steps {
  padding: var(--space-8) var(--content-padding);
  background: var(--color-dark-bg);
}

.steps-track {
  display: flex;
  justify-content: center;
  gap: var(--space-12);
}

.step-node {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  opacity: 0.3;
  transition: opacity 0.4s ease;
}

.step-node--active {
  opacity: 1;
}

.step-node--done {
  opacity: 0.6;
}

.step-number {
  font-family: var(--font-mono);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-gold);
}

.step-node:not(.step-node--active):not(.step-node--done) .step-number {
  color: var(--color-dark-muted);
}

.step-label {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
}

.step-node:not(.step-node--active):not(.step-node--done) .step-label {
  color: var(--color-dark-muted);
}

@media (max-width: 480px) {
  .steps-track {
    gap: var(--space-6);
  }
  .step-label {
    display: none;
  }
}

/* =============================================
   SHARED FORM ELEMENTS
   ============================================= */
.submit-upload,
.submit-metadata,
.submit-verify {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-dark-bg);
}

.form-header {
  margin-bottom: var(--space-12);
}

.form-step-label {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.7;
  display: block;
  margin-bottom: var(--space-4);
}

.form-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.form-title em { font-style: italic; }

.form-subtitle {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
}

.form-actions {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-12);
}

.form-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-bg);
  padding: var(--space-4) var(--space-8);
  background-color: var(--color-gold);
  border: none;
  cursor: pointer;
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.form-btn-primary:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.form-btn-primary:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.form-btn-icon {
  font-size: 16px;
}

.form-btn-ghost {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-secondary);
  padding: var(--space-4) var(--space-8);
  border: 1px solid rgba(250, 250, 249, 0.12);
  background: transparent;
  cursor: pointer;
  transition: border-color var(--duration-normal) ease, color var(--duration-normal) ease;
}

.form-btn-ghost:hover {
  border-color: rgba(184, 150, 78, 0.3);
  color: var(--color-gold);
}

@media (max-width: 768px) {
  .form-actions {
    flex-direction: column;
  }

  .form-btn-primary,
  .form-btn-ghost {
    width: 100%;
    justify-content: center;
    min-height: 44px;
  }
}

/* =============================================
   UPLOAD ZONE
   ============================================= */
.upload-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-16) var(--space-8);
  border: 1px dashed rgba(184, 150, 78, 0.25);
  cursor: pointer;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  text-align: center;
}

.upload-zone:hover {
  border-color: rgba(184, 150, 78, 0.5);
  background-color: rgba(184, 150, 78, 0.03);
}

.upload-input {
  display: none;
}

.upload-icon {
  font-size: 2.5rem;
  color: var(--color-gold);
  opacity: 0.5;
  margin-bottom: var(--space-4);
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
}

.upload-text {
  font-size: var(--text-body);
  color: var(--color-dark-text);
  margin-bottom: var(--space-2);
}

.upload-hint {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  opacity: 0.5;
}

.uploaded-file {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  margin-top: var(--space-4);
  border: 1px solid rgba(184, 150, 78, 0.2);
  background: rgba(184, 150, 78, 0.03);
}

.uploaded-icon {
  font-size: 1.25rem;
  color: var(--color-gold);
}

.uploaded-name {
  font-size: var(--text-small);
  color: var(--color-dark-text);
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.uploaded-size {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  color: var(--color-dark-muted);
}

.uploaded-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  color: var(--color-dark-muted);
  cursor: pointer;
  transition: color 0.2s ease;
}

.uploaded-remove:hover {
  color: var(--color-error);
}

.uploaded-remove .material-symbols-outlined {
  font-size: 16px;
}

/* =============================================
   METADATA FORM
   ============================================= */
.metadata-form {
  max-width: 640px;
}

.form-field {
  margin-bottom: var(--space-8);
}

.field-label {
  display: block;
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.field-input,
.field-textarea,
.field-select {
  width: 100%;
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-dark-text);
  background: rgba(250, 250, 249, 0.03);
  border: 1px solid rgba(250, 250, 249, 0.1);
  padding: var(--space-3) var(--space-4);
  transition: border-color 0.3s ease;
  appearance: none;
}

.field-input:focus,
.field-textarea:focus,
.field-select:focus {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
  border-color: var(--color-gold);
}

.field-input::placeholder,
.field-textarea::placeholder {
  color: var(--color-dark-muted);
  opacity: 0.5;
}

.field-textarea {
  resize: vertical;
  min-height: 100px;
}

.field-select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23A1A1AA' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-10, 2.5rem);
}

.field-select option {
  background: var(--color-dark-bg);
  color: var(--color-dark-text);
}

/* Radio group */
.radio-group {
  display: flex;
  gap: var(--space-6);
}

.radio-option {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio-mark {
  width: 16px;
  height: 16px;
  border: 1px solid rgba(250, 250, 249, 0.2);
  border-radius: 50%;
  position: relative;
  transition: border-color 0.2s ease;
}

.radio-input:checked + .radio-mark {
  border-color: var(--color-gold);
}

.radio-input:checked + .radio-mark::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-gold);
}

.radio-text {
  font-size: var(--text-small);
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-wide);
}

.radio-input:checked ~ .radio-text {
  color: var(--color-gold);
}

/* =============================================
   VERIFICATION SUMMARY
   ============================================= */
.verify-summary {
  border: 1px solid rgba(250, 250, 249, 0.08);
  max-width: 640px;
}

.verify-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-6);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid rgba(250, 250, 249, 0.06);
}

.verify-row:last-child {
  border-bottom: none;
}

.verify-label {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  min-width: 7rem;
  flex-shrink: 0;
}

.verify-value {
  font-size: var(--text-body);
  color: var(--color-dark-text);
}

.verify-value--long {
  font-size: var(--text-small);
  line-height: var(--leading-normal);
  color: var(--color-dark-muted);
}

.verify-protocol {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-8);
  padding: var(--space-3) var(--space-5);
  border: 1px solid rgba(22, 163, 74, 0.2);
  background: rgba(22, 163, 74, 0.04);
  max-width: 640px;
}

.verify-protocol-icon {
  font-size: 1rem;
  color: var(--color-success);
}

.verify-protocol-text {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-success);
}

@media (max-width: 768px) {
  .verify-row {
    flex-direction: column;
    gap: var(--space-1);
  }
}

/* =============================================
   FOOTER QUOTE
   ============================================= */
.submit-footer {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-dark-bg);
}

.submit-footer-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-muted);
  line-height: var(--leading-snug);
  max-width: 36ch;
  margin: 0 auto var(--space-8);
  opacity: 0.6;
}

.submit-footer-meta {
  margin-top: var(--space-6);
}

.submit-footer-protocol {
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  opacity: 0.3;
}
</style>
