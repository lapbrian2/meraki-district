<template>
  <div class="layout">
    <Preloader />
    <a href="#main-content" class="skip-to-content">Skip to content</a>
    <AppNav />
    <main id="main-content">
      <slot />
    </main>
    <AppFooterNew />
    <SocialSidebar />
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
</style>
