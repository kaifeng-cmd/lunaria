<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';

const route = useRoute();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

// 导航项目
const navItems = [
  { name: 'Features', href: '/features', anchor: '#features' },
  { name: 'Pricing', href: '/pricing', anchor: '#pricing' },
  { name: 'Reviews', href: '/reviews', anchor: '#testimonials' }, // Reviews 对应 testimonials section
  { name: 'About', href: '/about', anchor: null }, // About 只有独立页面
  { name: 'Blog', href: '/blog', anchor: null }, // Blog 只有独立页面
  { name: 'Contact', href: '/contact', anchor: null }, // Contact 只有独立页面
];

// 滚动监听，改变导航栏背景
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// 平滑滚动到锚点（主页内）
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
  handleScroll(); // 初始检查
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
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link
            to="/"
            :class="[
              'text-2xl font-bold transition-colors duration-200',
              isScrolled ? 'text-gray-900' : 'text-white',
            ]"
          >
            Lunaria
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-8">
            <template v-for="item in navItems" :key="item.name">
              <!-- 主页内锚点链接（只有当在主页且 anchor 存在时） -->
              <button
                v-if="route.path === '/' && item.anchor"
                :class="[
                  'transition-colors duration-200 hover:scale-105',
                  isScrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-gray-200 hover:text-white',
                ]"
                @click="scrollToSection(item.anchor)"
              >
                {{ item.name }}
              </button>

              <!-- 页面路由链接（其他所有情况） -->
              <router-link
                v-else
                :to="item.href"
                :class="[
                  'transition-colors duration-200 hover:scale-105',
                  isScrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-gray-200 hover:text-white',
                  route.path === item.href ? 'font-semibold' : '',
                ]"
              >
                {{ item.name }}
              </router-link>
            </template>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <Button
            :variant="isScrolled ? 'default' : 'outline'"
            size="sm"
            class="transition-all duration-200 hover:scale-105"
          >
            Get Started
          </Button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            :class="[
              'transition-colors duration-200',
              isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white',
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
            <!-- 主页内锚点链接（只有当在主页且 anchor 存在时） -->
            <button
              v-if="route.path === '/' && item.anchor"
              class="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              @click="scrollToSection(item.anchor)"
            >
              {{ item.name }}
            </button>

            <!-- 页面路由链接（其他所有情况） -->
            <router-link
              v-else
              :to="item.href"
              class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              :class="route.path === item.href ? 'font-semibold bg-gray-50' : ''"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </template>

          <div class="px-3 py-2">
            <Button variant="default" size="sm" class="w-full"> Get Started </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
