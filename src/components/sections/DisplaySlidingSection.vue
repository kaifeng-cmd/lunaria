<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

// Track the current displayed screenshot index
const currentIndex = ref(0);

// Screenshot data (each slide item)
const screenshots = [
  {
    id: 1,
    title: 'Dashboard Overview',
    image: 'src/assets/images/products/overview.png',
    description: 'Comprehensive analytics and insights at your fingertips',
  },
  {
    id: 2,
    title: 'Advanced Analytics',
    image: 'src/assets/images/products/browse_product.png',
    description: 'Deep dive into your data with powerful visualization tools',
  },
  {
    id: 3,
    title: 'Team Collaboration',
    image: 'src/assets/images/products/product_view.png',
    description: 'Seamless teamwork with real-time collaboration features',
  },
  {
    id: 4,
    title: 'Mobile Experience',
    image: 'src/assets/images/products/product_delete.png',
    description: 'Perfect responsive design for any device',
  },
];

// Go to previous slide
const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? screenshots.length - 1 : currentIndex.value - 1;
};

// Go to next slide
const nextSlide = () => {
  currentIndex.value = currentIndex.value === screenshots.length - 1 ? 0 : currentIndex.value + 1;
};

// Calculate 3D transform style for each screenshot card
const getSlideStyle = (index: number) => {
  const offset = index - currentIndex.value;
  const isActive = offset === 0;

  return {
    transform: `translateX(${offset * 120}px) translateZ(${isActive ? 0 : -100}px) rotateY(${offset * 15}deg)`,
    opacity: Math.abs(offset) <= 1 ? 1 : 0.3,
    zIndex: isActive ? 10 : Math.abs(offset) <= 1 ? 5 : 1,
    scale: isActive ? 1 : 0.8,
  };
};

// Current active screenshot info (title + description)
const currentScreenshot = computed(() => screenshots[currentIndex.value] || screenshots[0]);
</script>

<template>
  <section
    class="relative bg-gradient-to-b from-green-300/20 via-gray-50 to-white py-20 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          See It In
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Action
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our product through interactive screenshots and discover the powerful features
          that make us different.
        </p>
      </div>

      <!-- 3D Screenshot Slider -->
      <div class="relative">
        <!-- Perspective container for 3D depth -->
        <div
          class="relative h-[300px] mx-auto"
          style="perspective: 1000px; perspective-origin: center center"
        >
          <!-- Loop through screenshots -->
          <div
            v-for="(screenshot, index) in screenshots"
            :key="screenshot.id"
            class="absolute top-1/2 left-1/2 w-[600px] h-auto cursor-pointer transition-all duration-700 ease-out"
            :style="{
              transform: `translate(-50%, -50%) ${getSlideStyle(index).transform}`,
              opacity: getSlideStyle(index).opacity,
              zIndex: getSlideStyle(index).zIndex,
            }"
            @click="currentIndex = index"
          >
            <!-- Screenshot Card -->
            <div
              class="w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow duration-300"
              :class="index === currentIndex ? 'ring-4 ring-blue-500/20' : ''"
            >
              <!-- Image inside the card -->
              <img
                :src="screenshot.image"
                :alt="screenshot.title"
                class="w-full h-full object-contain"
                loading="lazy"
              />

              <!-- Green dot indicator for active image -->
              <div
                v-if="index === currentIndex"
                class="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"
              ></div>
            </div>
          </div>
        </div>

        <!-- Previous Button -->
        <button
          class="absolute top-1/2 left-8 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group z-20"
          @click="previousSlide"
        >
          <ChevronLeft
            class="w-6 h-6 text-gray-600 group-hover:text-gray-900 transform group-hover:-translate-x-0.5 transition-transform"
          />
        </button>

        <!-- Next Button -->
        <button
          class="absolute top-1/2 right-8 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group z-20"
          @click="nextSlide"
        >
          <ChevronRight
            class="w-6 h-6 text-gray-600 group-hover:text-gray-900 transform group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>

      <!-- Current Screenshot Info -->
      <div class="text-center mt-12">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">
          {{ currentScreenshot?.title || 'Loading...' }}
        </h3>
        <p class="text-gray-600 max-w-2xl mx-auto">
          {{ currentScreenshot?.description || 'Loading description...' }}
        </p>
      </div>

      <!-- Dot Navigation -->
      <div class="flex justify-center mt-8 space-x-2">
        <button
          v-for="(screenshot, index) in screenshots"
          :key="screenshot.id"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-200',
            index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400',
          ]"
          @click="currentIndex = index"
        ></button>
      </div>
    </div>

    <!-- Bottom Gradient Overlay -->
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"
    ></div>
  </section>
</template>

<style scoped>
/* Perspective container for 3D hover depth */
.perspective-container {
  perspective: 1000px;
}
</style>
