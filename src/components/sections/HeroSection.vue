<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref, onMounted, onUnmounted } from 'vue';

const heroRef = ref<HTMLElement>();
const mouseX = ref<number>(50);
const mouseY = ref<number>(50);
const showGifs = ref<boolean>(false);

const booksGifUrl = `${import.meta.env.BASE_URL}assets/books.gif`;
const bookGifUrl = `${import.meta.env.BASE_URL}assets/book.gif`;

const companies: string[] = [
  'Macrohard',
  'TKL Consulting',
  'Orange',
  'SkyNet Solutions',
  'Vxytify',
  'Alipupu',
];

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  if (target) {
    target.style.display = 'none';
    console.log('Failed to load image:', target.src);
  }
};

// Get mouse position within the hero section
const handleMouseMove = (event: MouseEvent) => {
  if (heroRef.value) {
    const rect = heroRef.value.getBoundingClientRect();
    mouseX.value = ((event.clientX - rect.left) / rect.width) * 100;
    mouseY.value = ((event.clientY - rect.top) / rect.height) * 100;
  }
};

/* Check visibility using scroll and window resize: 
  show GIFs as long as HeroSection has any area visible */
const updateGifVisibility = () => {
  if (!heroRef.value) return;
  const rect = heroRef.value.getBoundingClientRect();
  const visible = rect.bottom > 0 && rect.top < window.innerHeight;
  showGifs.value = visible;
};

onMounted(() => {
  if (heroRef.value) {
    heroRef.value.addEventListener('mousemove', handleMouseMove);
  }
  updateGifVisibility();

  window.addEventListener('scroll', updateGifVisibility, { passive: true });
  window.addEventListener('resize', updateGifVisibility);
});

onUnmounted(() => {
  if (heroRef.value) {
    heroRef.value.removeEventListener('mousemove', handleMouseMove);
  }
  window.removeEventListener('scroll', updateGifVisibility);
  window.removeEventListener('resize', updateGifVisibility);
});
</script>

<template>
  <section
    ref="heroRef"
    class="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 cursor-none"
    style="min-height: 100vh; max-height: 100vh"
  >
    <!-- light gradient background-->
    <div class="absolute inset-0 overflow-hidden">
      <!-- basic gradient background -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-red-300 via-orange-200 to-yellow-100"
      ></div>

      <!-- flowing tracking effect -->
      <div
        class="absolute inset-0 transition-all duration-500 ease-out"
        :style="{
          background: `
            linear-gradient(45deg, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 100%),
            radial-gradient(ellipse 800px 400px at ${mouseX}% ${mouseY}%, 
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0.08) 25%,
              rgba(255, 255, 255, 0.03) 50%,
              transparent 70%),
            radial-gradient(ellipse 600px 300px at ${mouseX + 10}% ${mouseY - 5}%, 
              rgba(255, 182, 193, 0.2) 0%,
              rgba(255, 160, 122, 0.1) 30%,
              transparent 60%),
            radial-gradient(ellipse 400px 200px at ${mouseX - 15}% ${mouseY + 10}%, 
              rgba(255, 228, 181, 0.15) 0%,
              rgba(255, 218, 185, 0.08) 40%,
              transparent 70%)
          `,
        }"
      ></div>

      <!-- flowing conic-like light effect -->
      <div
        class="absolute inset-0 opacity-30 transition-all duration-700 ease-out"
        :style="{
          background: `
            conic-gradient(from ${mouseX}deg at ${mouseX}% ${mouseY}%, 
              transparent 0deg,
              rgba(255, 255, 255, 0.1) 45deg,
              transparent 90deg,
              rgba(255, 192, 203, 0.08) 180deg,
              transparent 270deg,
              rgba(255, 255, 255, 0.05) 315deg,
              transparent 360deg)
          `,
        }"
      ></div>

      <!-- subtle grid texture -->
      <div
        class="absolute inset-0 opacity-20"
        style="
          background-image: radial-gradient(
            circle at 2px 2px,
            rgba(255, 255, 255, 0.15) 1px,
            transparent 0
          );
        "
      ></div>
    </div>

    <!-- Mouse tracking effect -->
    <div class="absolute inset-0 pointer-events-none" style="z-index: 10">
      <!-- Top layer transparent pink effect -->
      <div
        class="absolute transition-all duration-300 ease-out"
        :style="{
          left: `${mouseX}%`,
          top: `${mouseY}%`,
          width: '90px',
          height: '90px',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, 
            rgba(255, 182, 193, 0.5) 0%,
            rgba(255, 182, 193, 0.25) 40%,
            rgba(255, 182, 193, 0.15) 70%,
            transparent 100%)`,
          borderRadius: '50%',
        }"
      ></div>
    </div>

    <!-- GIF decoration -->
    <div
      v-show="showGifs"
      class="absolute hidden md:block bottom-16 left-5 pointer-events-none transition-opacity duration-200 ease-in-out z-30"
      :class="showGifs ? 'opacity-100' : 'opacity-0'"
    >
      <!-- books.gif -->
      <div class="relative">
        <div class="w-48 h-48 overflow-hidden">
          <img
            :src="booksGifUrl"
            alt="books animation"
            class="w-full h-full object-cover"
            @error="handleImageError"
          />
        </div>
      </div>

      <!-- book.gif -->
      <div class="absolute left-32 top-11">
        <div class="w-44 h-44 overflow-hidden">
          <img
            :src="bookGifUrl"
            alt="book animation"
            class="w-full h-full object-cover"
            @error="handleImageError"
          />
        </div>
      </div>
    </div>

    <!-- Custom mouse logo -->
    <div class="absolute inset-0 pointer-events-none" style="z-index: 10000">
      <div
        class="absolute transition-all duration-150 ease-out"
        :style="{
          left: `${mouseX}%`,
          top: `${mouseY}%`,
          transform: 'translate(-50%, -50%)',
        }"
      >
        <img
          src="@/assets/book-of-wonders-sticker.png"
          alt="cursor"
          class="w-8 h-8 opacity-70 drop-shadow-lg"
        />
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto text-center" style="z-index: 20">
      <div class="max-w-4xl mx-auto">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/25 backdrop-blur-md border border-white/20 text-gray-800 text-sm font-medium mt-24 mb-3 animate-fade-in shadow-lg"
        >
          🚀 Miki Yoshiko - is NOW AVAILABLE!
        </div>

        <!-- Main Heading -->
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight animate-slide-up drop-shadow-md"
        >
          Manage, publish, and sell
          <span class="bg-gradient-to-r from-[#e7a2a2] to-[#d81f69] bg-clip-text text-transparent">
            your books online
          </span>
          — all-in-one.
        </h1>

        <!-- Subtitle -->
        <p
          class="text-md text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up-delay drop-shadow-sm"
        >
          A next-generation bookstore SaaS that launch your digital bookstore in minutes. Upload
          once, customize store, sell everywhere, and reach readers across the world.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-2"
        >
          <Button
            size="lg"
            class="text-lg px-8 py-4 bg-gradient-to-r from-[#b88bb8] to-[#8D5F8C] text-white hover:from-[#8D5F8C] hover:to-[#543353] hover:scale-105 transition-all duration-200 backdrop-blur-sm border-0 shadow-lg"
          >
            Start Using Now
          </Button>

          <Button
            as="a"
            href="https://dreamkfeng.wixsite.com/quantumnebuladrifter/portfolio-collections/my-portfolio/real-time-e-commerce-bookstore-with-online-payment"
            variant="outline"
            size="lg"
            class="text-lg px-8 py-4 border-2 border-white/20 text-gray-800 bg-white/10 backdrop-blur-md hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Watch Demo
          </Button>
        </div>

        <!-- Social Proof -->
        <div class="mt-7 animate-fade-in-delay">
          <p class="text-sm text-gray-600 mb-6">Trusted by teams at</p>

          <!-- Auto rolling for company name -->
          <div class="relative overflow-hidden h-10">
            <div class="flex animate-scroll-companies items-center">
              <div
                v-for="company in [...companies, ...companies, ...companies]"
                :key="company"
                class="flex-shrink-0 mx-8 flex items-center space-x-2 whitespace-nowrap"
              >
                <!-- company logo -->
                <div
                  class="w-5 h-5 bg-[#4f0b26] rounded flex items-center justify-center text-xs font-bold text-white"
                >
                  {{ company.charAt(0) }}
                </div>
                <!-- company name -->
                <span class="text-[#9f1a4f] font-semibold text-base">{{ company }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
      style="z-index: 20"
    >
      <div
        class="w-6 h-10 border-2 border-gray-600/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm"
      >
        <div class="w-1 h-3 bg-gray-600/70 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

@keyframes scroll-companies {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-180%);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out 0.8s both;
}

.animate-slide-up {
  animation: slide-up 1s ease-out;
}

.animate-slide-up-delay {
  animation: slide-up 1s ease-out 0.3s both;
}

.animate-slide-up-delay-2 {
  animation: slide-up 1s ease-out 0.6s both;
}

.animate-scroll-companies {
  animation: scroll-companies 22s linear infinite;
}

/* Improve mouse tracking effect */
section:hover .bg-white\/10 {
  animation-duration: 2s;
}

section:hover .bg-blue-300\/20 {
  animation-duration: 3s;
}
</style>
