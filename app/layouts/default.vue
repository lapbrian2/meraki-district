<template>
  <div class="layout">
    <a href="#main-content" class="skip-to-content">Skip to content</a>
    <AppNav />
    <main id="main-content">
      <slot />
    </main>
    <AppFooterNew />
    <SocialSidebar />
    <MobileBottomNav />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}

/* Prevent content from hiding behind fixed bottom nav on mobile */
@media (max-width: 768px) {
  main {
    padding-bottom: 72px;
  }
}
</style>
