<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <TheNavbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

/* Custom animations */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
