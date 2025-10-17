<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';

interface NavItem {
  name: string;
  href: string;
  anchor: string | null;
}

interface LiquidStyle {
  left: string;
  width: string;
  opacity: number;
}

interface MeteorTrail {
  show: boolean;
  startX: number;
  endX: number;
  startWidth: number;
  endWidth: number;
}

const route = useRoute();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

// "Liquid" effect state
const navContainer = ref<HTMLElement>();
const isLiquidVisible = ref(false);
const liquidStyle = ref<LiquidStyle>({
  left: '0px',
  width: '0px',
  opacity: 0,
});

// "Meteor trail" effect state
const meteorTrail = ref<MeteorTrail>({
  show: false,
  startX: 0,
  endX: 0,
  startWidth: 0,
  endWidth: 0,
});

// Navigation
const navItems: NavItem[] = [
  { name: 'Features', href: '/features', anchor: '#features' },
  { name: 'Pricing', href: '/pricing', anchor: '#pricing' },
  { name: 'Reviews', href: '/reviews', anchor: '#testimonials' },
  // About, Blog, Contact are independent page (no anchor)
  { name: 'About', href: '/about', anchor: null },
  { name: 'Blog', href: '/blog', anchor: null },
  { name: 'Contact', href: '/contact', anchor: null },
];

// "Liquid" effect
const updateLiquidPosition = (element: HTMLElement) => {
  if (!navContainer.value) return;

  const containerRect = navContainer.value.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  // Record current position for trail effect
  const currentLeft = parseFloat(liquidStyle.value.left) || 0;
  const currentWidth = parseFloat(liquidStyle.value.width) || 0;
  const newLeft = elementRect.left - containerRect.left;
  const newWidth = elementRect.width;

  // if there was a previous position, create meteor trail effect
  if (isLiquidVisible.value && Math.abs(newLeft - currentLeft) > 5) {
    meteorTrail.value = {
      show: true,
      startX: currentLeft + currentWidth / 2,
      endX: newLeft + newWidth / 2,
      startWidth: Math.max(currentWidth * 0.8, 20),
      endWidth: Math.max(newWidth * 0.8, 20),
    };

    // show trail for a moment then hide
    setTimeout(() => {
      meteorTrail.value.show = false;
    }, 400);
  }

  liquidStyle.value = {
    left: `${newLeft}px`,
    width: `${newWidth}px`,
    opacity: 1,
  };
  isLiquidVisible.value = true;
};

const hideLiquid = () => {
  liquidStyle.value.opacity = 0;
  isLiquidVisible.value = false;
  meteorTrail.value.show = false;
};

// Scrolling down to change navbar background
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Smooth scroll to anchor (within homepage)
const scrollToSection = (anchor: string) => {
  if (route.path === '/' && anchor) {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 3 components: Logo, nav items, START button -->
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link
            to="/"
            :class="[
              'text-2xl font-bold transition-colors duration-200',
              isScrolled ? 'text-[#B95E82]' : 'text-[#C1856D]',
            ]"
          >
            Miki Yoshiko
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div
            ref="navContainer"
            class="relative flex items-center space-x-4"
            @mouseleave="hideLiquid"
          >
            <!-- meteor trail effect -->
            <div
              v-if="meteorTrail.show"
              :class="['absolute top-1/2 pointer-events-none z-0', 'meteor-trail']"
              :style="{
                left: `${Math.min(meteorTrail.startX, meteorTrail.endX) - meteorTrail.startWidth / 2}px`,
                width: `${Math.abs(meteorTrail.endX - meteorTrail.startX) + Math.max(meteorTrail.startWidth, meteorTrail.endWidth)}px`,
                height: '20px',
                transform: 'translateY(-50%)',
                background: isScrolled
                  ? `linear-gradient(${meteorTrail.startX < meteorTrail.endX ? '90deg' : '270deg'}, 
                     rgba(222, 124, 163, 0.1) 0%, 
                     rgba(222, 124, 163, 0.2) 20%, 
                     rgba(222, 124, 163, 0.5) 60%, 
                     rgba(222, 124, 163, 0.8) 85%, 
                     transparent 100%)`
                  : `linear-gradient(${meteorTrail.startX < meteorTrail.endX ? '90deg' : '270deg'}, 
                     rgba(247, 224, 186, 0.15) 0%, 
                     rgba(247, 224, 186, 0.4) 20%, 
                     rgba(247, 224, 186, 0.7) 60%, 
                     rgba(247, 224, 186, 0.9) 85%, 
                     transparent 100%)`,
                borderRadius: '16px',
                filter: 'blur(0.5px)',
                animation: 'meteor-fade 0.4s ease-out forwards',
              }"
            ></div>

            <!-- liquid flowing background (blur layer) -->
            <div
              :class="[
                'absolute top-1/2 transform -translate-y-1/2 h-8 rounded-2xl transition-all duration-300 ease-out pointer-events-none z-1',
                isScrolled ? 'bg-[#de7ca3]/80' : 'bg-[#f7e0ba]',
              ]"
              :style="{
                left: liquidStyle.left,
                width: liquidStyle.width,
                opacity: liquidStyle.opacity * 0.6,
                filter: 'blur(2px)',
                transform: `translateY(-50%) scaleX(${isLiquidVisible ? 1 : 0.8}) scaleY(${isLiquidVisible ? 1 : 0.6})`,
              }"
            ></div>

            <!-- main liquid effect -->
            <div
              :class="[
                'absolute top-1/2 transform -translate-y-1/2 h-8 rounded-2xl transition-all duration-200 ease-out pointer-events-none z-2',
                isScrolled ? 'bg-[#de7ca3]/30' : 'bg-[#f7e0ba]/80',
              ]"
              :style="{
                left: liquidStyle.left,
                width: liquidStyle.width,
                opacity: liquidStyle.opacity,
                transform: 'translateY(-45%)',
              }"
            ></div>

            <template v-for="item in navItems" :key="item.name">
              <!-- for nav items that have anchor -->
              <button
                v-if="route.path === '/' && item.anchor"
                :class="[
                  'relative z-10 px-3 py-1.5 transition-colors duration-200 rounded-2xl',
                  isScrolled
                    ? 'text-gray-600 hover:text-white'
                    : 'text-[#4F200D] hover:text-[#4F200D] hover:font-semibold',
                ]"
                @click="scrollToSection(item.anchor)"
                @mouseenter="updateLiquidPosition($event.target as HTMLElement)"
              >
                {{ item.name }}
              </button>

              <!-- for nav items that don't have anchor, route to other page -->
              <router-link
                v-else
                :to="item.href"
                :class="[
                  'relative z-10 px-3 py-1.5 transition-colors duration-200 rounded-2xl',
                  isScrolled
                    ? 'text-gray-600 hover:text-white'
                    : 'text-[#4F200D] hover:text-[#4F200D] hover:font-semibold',
                  route.path === item.href ? 'font-semibold' : '',
                ]"
                @mouseenter="updateLiquidPosition($event.target as HTMLElement)"
              >
                {{ item.name }}
              </router-link>
            </template>
          </div>
        </div>

        <!-- START Button -->
        <div class="hidden md:block">
          <Button
            :variant="isScrolled ? 'default' : 'outline'"
            size="sm"
            :class="[
              'transition-all duration-200 hover:scale-105',
              isScrolled
                ? 'bg-[#B95E82] text-white border border-transparent hover:bg-[#91395c]'
                : 'bg-transparent border-[1.8px] border-[#4F200D] text-[#4F200D] hover:bg-transparent',
            ]"
          >
            Get Started
          </Button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            :class="[
              'transition-colors duration-200',
              isScrolled
                ? 'text-[#B95E82] hover:text-[#91395c]'
                : 'text-[#91395c] hover:text-[#4F200D]',
            ]"
            @click="isMenuOpen = !isMenuOpen"
          >
            <Menu v-if="!isMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden transition-all duration-200 ease-in-out">
        <div
          class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 rounded-b-lg shadow-lg"
        >
          <template v-for="item in navItems" :key="item.name">
            <!-- for nav items that have anchor -->
            <button
              v-if="route.path === '/' && item.anchor"
              class="block w-full text-left px-3 py-2 text-gray-600 hover:text-white hover:bg-[#e8c2d2] hover:font-semibold rounded-md transition-colors duration-200"
              @click="scrollToSection(item.anchor)"
            >
              {{ item.name }}
            </button>

            <!-- for nav items that don't have anchor, route to other page -->
            <router-link
              v-else
              :to="item.href"
              class="block px-3 py-2 text-gray-600 hover:text-white hover:bg-[#e8c2d2] hover:font-semibold rounded-md transition-colors duration-200"
              :class="route.path === item.href ? 'font-semibold text-white bg-[#e8c2d2]' : ''"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </template>

          <div class="px-3 py-2">
            <Button variant="default" size="lg" class="w-full bg-[#B95E82] hover:bg-[#91395c]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@keyframes meteor-fade {
  0% {
    opacity: 0;
    transform: translateY(-50%) scaleX(0.3);
  }
  20% {
    opacity: 1;
    transform: translateY(-50%) scaleX(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-50%) scaleX(1.2);
  }
}

.meteor-trail {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* z-index hierarchy */
.z-0 {
  z-index: 0;
}
.z-1 {
  z-index: 1;
}
.z-2 {
  z-index: 2;
}
</style>
