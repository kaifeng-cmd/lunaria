<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

// Import images so Vite includes them in the build production
import imgLogin from '@/assets/images/products/login.png';
import imgBrowse from '@/assets/images/products/browse_product.png';
import imgInventory from '@/assets/images/products/inventory.png';
import imgDelete from '@/assets/images/products/product_delete.png';
import imgOverview from '@/assets/images/products/overview.png';
import imgOrder from '@/assets/images/products/check_order.png';
import imgProductMain from '@/assets/images/products/product_main.png';

type TagColor = 'pink' | 'green' | 'blue';

interface Screenshot {
  id: number;
  title: string;
  tag: string;
  tagColor: TagColor;
  image: string;
  description: string;
}

// Track the current displayed screenshot index
const currentIndex = ref<number>(0);

// Screenshot data
const screenshots: Screenshot[] = [
  {
    id: 1,
    title: 'Quick, Secure Login',
    tag: 'For Users',
    tagColor: 'pink',
    image: imgLogin,
    description:
      'Sign in with Email, Google, or Facebook — get started in seconds with multiple authentication options',
  },
  {
    id: 2,
    title: 'Beautiful Book Catalog',
    tag: 'Customer Experience',
    tagColor: 'green',
    image: imgBrowse,
    description:
      'Customers can browse your entire collection with an elegant, easy-to-navigate interface',
  },
  {
    id: 3,
    title: 'Powerful Inventory Management',
    tag: 'For Sellers',
    tagColor: 'blue',
    image: imgInventory,
    description:
      'Organize your book catalog with real-time stock tracking and bulk management tools',
  },
  {
    id: 4,
    title: 'Easy Book Management',
    tag: 'For Sellers',
    tagColor: 'blue',
    image: imgDelete,
    description: 'Effortlessly manage your inventory — remove outdated books with just one click',
  },
  {
    id: 5,
    title: 'Dashboard Analytics',
    tag: 'For Sellers',
    tagColor: 'blue',
    image: imgOverview,
    description:
      'Monitor sales performance, track revenue, and check pending orders with comprehensive analytics',
  },
  {
    id: 6,
    title: 'Real-Time Order Tracking',
    tag: 'For Sellers',
    tagColor: 'blue',
    image: imgOrder,
    description:
      'See customer orders instantly as they come in — manage, process, and fulfill orders efficiently',
  },
  {
    id: 7,
    title: 'Seamless Shopping Experience',
    tag: 'Customer Experience',
    tagColor: 'green',
    image: imgProductMain,
    description:
      'Customers can add books to cart, view details, and checkout smoothly — driving more sales for you',
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
    class="relative bg-gradient-to-b from-green-200/20 via-gray-50 to-white py-20 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          See It In
          <span class="bg-gradient-to-r from-[#F39F9F] to-purple-800 bg-clip-text text-transparent">
            Action
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our product through interactive interfaces and discover the powerful features that
          make us different.
        </p>
      </div>

      <!-- 3D Screenshot Slider -->
      <div class="relative">
        <!-- perspective container for 3D depth -->
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
              :class="index === currentIndex ? 'ring-4 ring-pink-300/20' : ''"
            >
              <!-- image inside the card -->
              <img
                :src="screenshot.image"
                :alt="screenshot.title"
                class="w-full h-full object-contain"
                loading="lazy"
              />

              <!-- green dot indicator for active image -->
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
            class="w-6 h-6 text-[#B95E82] group-hover:text-[#a24268] transform group-hover:-translate-x-0.5 transition-transform"
          />
        </button>

        <!-- Next Button -->
        <button
          class="absolute top-1/2 right-8 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group z-20"
          @click="nextSlide"
        >
          <ChevronRight
            class="w-6 h-6 text-[#B95E82] group-hover:text-[#a24268] transform group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>

      <!-- Current Interface Info -->
      <div class="text-center mt-12">
        <div class="flex items-center justify-center gap-3 mb-3">
          <!-- Tag Badge -->
          <span
            class="px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm"
            :class="[
              currentScreenshot?.tagColor === 'blue'
                ? 'bg-blue-500 text-white'
                : currentScreenshot?.tagColor === 'green'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-pink-500 text-white',
            ]"
          >
            {{ currentScreenshot?.tag }}
          </span>
          <!-- Title -->
          <h3 class="text-2xl font-bold text-gray-900">
            {{ currentScreenshot?.title || 'Loading...' }}
          </h3>
        </div>
        <!-- Description -->
        <p class="text-gray-600 max-w-xl mx-auto">
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
            index === currentIndex ? 'bg-[#B95E82] scale-125' : 'bg-gray-300 hover:bg-gray-400',
          ]"
        ></button>
      </div>
    </div>

    <!-- Bottom Gradient Overlay -->
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"
    ></div>
  </section>
</template>
