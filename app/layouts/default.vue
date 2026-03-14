<template>
  <div class="layout">
    <a href="#main-content" class="skip-to-content">Skip to content</a>
    <ScrollProgress />
    <AppNav />
    <main id="main-content">
      <slot />
    </main>
    <AppFooter />
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
