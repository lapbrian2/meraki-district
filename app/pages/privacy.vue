<template>
  <div>
    <section class="legal section">
      <div class="section-narrow">
        <p class="overline">Legal</p>
        <h1 class="legal-title">Privacy Policy</h1>
        <div class="legal-body">
          <p>
            Meraki District is committed to protecting your privacy.
            This policy will be updated as our services launch.
          </p>
          <p>
            For questions, contact us at
            <a href="mailto:hello@merakidistrict.ai">hello@merakidistrict.ai</a>.
          </p>
          <p class="legal-updated">Last updated: March 2026</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Privacy — Meraki District',
  meta: [
    { name: 'description', content: 'Meraki District privacy policy.' },
  ],
})
</script>

<style scoped>
.legal {
  padding-top: calc(var(--space-48) + 4rem);
  padding-bottom: var(--space-32);
}

.legal-title {
  font-size: var(--text-h1);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.legal-body p {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
  max-width: none;
}

.legal-body a {
  color: var(--color-gold-accessible);
}

.legal-updated {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  margin-top: var(--space-12);
}
</style>
