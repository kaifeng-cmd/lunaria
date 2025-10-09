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
    <!-- 鼠标跟踪渐变背景 -->
    <div
      class="absolute inset-0 transition-all duration-300 ease-out"
      :style="{
        background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, 
          rgba(59, 130, 246, 0.8) 0%, 
          rgba(147, 51, 234, 0.7) 25%, 
          rgba(99, 102, 241, 0.6) 50%, 
          rgba(79, 70, 229, 0.8) 100%),
          linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #4338ca 100%)`,
      }"
    >
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <!-- 动态背景元素 -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse transition-all duration-1000"
        :style="{
          left: `${mouseX * 0.3}%`,
          top: `${mouseY * 0.3}%`,
        }"
      ></div>
      <div
        class="absolute w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-bounce transition-all duration-1000"
        :style="{
          right: `${(100 - mouseX) * 0.2}%`,
          bottom: `${(100 - mouseY) * 0.2}%`,
        }"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto text-center z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8 animate-fade-in"
        >
          🚀 Now in Beta - Join the waitlist
        </div>

        <!-- Main Heading -->
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up"
        >
          Build your next
          <span
            class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          >
            SaaS product
          </span>
          faster than ever
        </h1>

        <!-- Subtitle -->
        <p
          class="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay"
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
            class="text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-200"
          >
            Start Building Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            class="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-200"
          >
            Watch Demo
          </Button>
        </div>

        <!-- Social Proof -->
        <div class="mt-16 animate-fade-in-delay">
          <p class="text-sm text-gray-300 mb-6">Trusted by teams at</p>
          <div class="flex justify-center items-center space-x-8 opacity-70">
            <!-- Placeholder for company logos -->
            <div class="text-gray-300 font-semibold hover:text-white transition-colors">
              Company A
            </div>
            <div class="text-gray-300 font-semibold hover:text-white transition-colors">
              Company B
            </div>
            <div class="text-gray-300 font-semibold hover:text-white transition-colors">
              Company C
            </div>
            <div class="text-gray-300 font-semibold hover:text-white transition-colors">
              Company D
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
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
