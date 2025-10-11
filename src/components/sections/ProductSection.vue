<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Animation state (controls fade/slide in)
const isVisible = ref(false);
const sectionRef = ref<HTMLElement>();

let observer: IntersectionObserver | null = null;

// Intersection Observer for scroll-based animation trigger
onMounted(() => {
  if (sectionRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-gradient-to-br from-green-400 via-green-300 to-yellow-300 py-28"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Adjusted grid ratio: narrow sides, wider center -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr_1fr] gap-12 items-center min-h-[600px]">
        <!-- LEFT TEXT -->
        <div
          :class="[
            'lg:text-right transition-all duration-1000 ease-out',
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0',
          ]"
        >
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Revolutionary
            <span class="block text-green-800">Product Design</span>
          </h2>
          <p class="text-base lg:text-lg text-gray-700 leading-relaxed">
            Experience the next generation of product innovation. Carefully crafted with attention
            to every detail, bringing your ideas to life with unprecedented precision.
          </p>
        </div>

        <!-- CENTER IMAGE -->
        <div
          :class="[
            'flex justify-center transition-all duration-1000 ease-out delay-300',
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0',
          ]"
        >
          <div class="relative scale-110">
            <!-- Glowing background effect -->
            <div class="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-150"></div>

            <!-- Main product image -->
            <img
              src="@/assets/images/products/product_main.png"
              alt="Main Product"
              class="relative z-10 max-w-[400px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            <!-- Floating decoration elements -->
            <div
              class="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-pulse"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 w-12 h-12 bg-green-500 rounded-full opacity-60 animate-bounce"
            ></div>
          </div>
        </div>

        <!-- RIGHT TEXT -->
        <div
          :class="[
            'transition-all duration-1000 ease-out delay-200',
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0',
          ]"
        >
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Built for
            <span class="text-green-800">Performance</span>
          </h3>
          <p class="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
            Engineered with cutting-edge technology and user-centric design principles. Every
            feature is optimized to deliver maximum efficiency and seamless user experience.
          </p>

          <!-- Feature list -->
          <ul class="space-y-3">
            <li
              v-for="(feature, index) in [
                'Lightning Fast',
                'Intuitive Design',
                'Secure & Reliable',
              ]"
              :key="feature"
              :class="[
                'flex items-center transition-all duration-500 ease-out',
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
              ]"
              :style="{ transitionDelay: `${800 + index * 100}ms` }"
            >
              <div class="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
              <span class="text-gray-800 font-medium">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom fade transition -->
    <div
      class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-50"
    ></div>
  </section>
</template>
