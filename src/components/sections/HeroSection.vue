<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref, onMounted, onUnmounted } from 'vue';

const heroRef = ref<HTMLElement>();
const mouseX = ref(50);
const mouseY = ref(50);

// 鼠标跟踪效果
const handleMouseMove = (event: MouseEvent) => {
  if (heroRef.value) {
    const rect = heroRef.value.getBoundingClientRect();
    mouseX.value = ((event.clientX - rect.left) / rect.width) * 100;
    mouseY.value = ((event.clientY - rect.top) / rect.height) * 100;
  }
};

onMounted(() => {
  if (heroRef.value) {
    heroRef.value.addEventListener('mousemove', handleMouseMove);
  }
});

onUnmounted(() => {
  if (heroRef.value) {
    heroRef.value.removeEventListener('mousemove', handleMouseMove);
  }
});
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
  >
    <!-- 高级 Glassmorphism 鼠标跟踪背景 -->
    <div class="absolute inset-0">
      <!-- 基础渐变背景 -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-red-300 via-orange-200 to-yellow-100"
      ></div>

      <!-- 流动的 Glassmorphism 追踪效果 -->
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
      >
        <!-- 玻璃质感覆盖层 -->
        <div
          class="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-br from-white/5 to-transparent"
        ></div>
      </div>

      <!-- 动态光效流动 -->
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

      <!-- 细微的网格纹理 -->
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

    <!-- 高级浮动元素 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- 流动的玻璃球 1 -->
      <div
        class="absolute w-64 h-64 rounded-full transition-all duration-1000 ease-out"
        :style="{
          left: `${mouseX * 0.15}%`,
          top: `${mouseY * 0.2}%`,
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 182, 193, 0.1))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transform: `translateZ(${mouseX * 0.1}px) rotateX(${mouseY * 0.1}deg) rotateY(${mouseX * 0.1}deg)`,
        }"
      ></div>

      <!-- 流动的玻璃球 2 -->
      <div
        class="absolute w-48 h-48 rounded-full transition-all duration-1200 ease-out"
        :style="{
          right: `${(100 - mouseX) * 0.1}%`,
          bottom: `${(100 - mouseY) * 0.15}%`,
          background: 'linear-gradient(225deg, rgba(255, 228, 181, 0.2), rgba(255, 160, 122, 0.1))',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          transform: `translateZ(${-mouseX * 0.05}px) rotateX(${-mouseY * 0.05}deg)`,
        }"
      ></div>

      <!-- 微光粒子效果 -->
      <div
        class="absolute w-32 h-32 rounded-full transition-all duration-800 ease-out opacity-60"
        :style="{
          left: `${mouseX * 0.3 + 20}%`,
          top: `${mouseY * 0.25 + 30}%`,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
          filter: 'blur(8px)',
          transform: `scale(${1 + mouseX * 0.002})`,
        }"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto text-center z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/25 backdrop-blur-md border border-white/20 text-gray-800 text-sm font-medium mt-16 mb-1 animate-fade-in shadow-lg"
        >
          🚀 Now in Beta - Join the waitlist
        </div>

        <!-- Main Heading -->
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight animate-slide-up drop-shadow-sm"
        >
          Build your next
          <span class="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            SaaS product
          </span>
          faster than ever
        </h1>

        <!-- Subtitle -->
        <p
          class="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay drop-shadow-sm"
        >
          The modern platform that helps teams ship beautiful products quickly. From idea to launch
          in minutes, not months.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-2"
        >
          <Button
            size="lg"
            class="text-lg px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 hover:scale-105 transition-all duration-200 backdrop-blur-sm border-0 shadow-lg"
          >
            Start Building Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            class="text-lg px-8 py-4 border-2 border-white/30 text-gray-800 bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Watch Demo
          </Button>
        </div>

        <!-- Social Proof -->
        <div class="mt-10 animate-fade-in-delay">
          <p class="text-sm text-gray-600 mb-6">Trusted by teams at</p>
          <div class="flex mb-6 justify-center items-center space-x-8 opacity-70">
            <!-- Placeholder for company logos -->
            <div
              class="text-gray-700 font-semibold hover:text-gray-900 transition-colors px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              Company A
            </div>
            <div
              class="text-gray-700 font-semibold hover:text-gray-900 transition-colors px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              Company B
            </div>
            <div
              class="text-gray-700 font-semibold hover:text-gray-900 transition-colors px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              Company C
            </div>
            <div
              class="text-gray-700 font-semibold hover:text-gray-900 transition-colors px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              Company D
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
      <div
        class="w-6 h-10 border-2 border-gray-600/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm"
      >
        <div class="w-1 h-3 bg-gray-600/70 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 自定义动画 */
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

/* 鼠标跟踪效果增强 */
section:hover .bg-white\/10 {
  animation-duration: 2s;
}

section:hover .bg-blue-300\/20 {
  animation-duration: 3s;
}
</style>
