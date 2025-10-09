<script setup lang="ts">
import { Zap, Shield, Rocket, Users, Code, Globe } from 'lucide-vue-next';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with modern technologies and optimized performance',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance',
  },
  {
    icon: Rocket,
    title: 'Easy Deployment',
    description: 'Deploy anywhere with our one-click deployment and CI/CD integration',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time collaboration tools',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Comprehensive APIs and SDKs for easy integration and customization',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Scale globally with our distributed infrastructure and CDN',
  },
];
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Everything you need to
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            succeed
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Powerful features designed to help you build, deploy, and scale your SaaS product with
          confidence
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          :class="`animate-delay-${index * 100}`"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
          >
            <component :is="feature.icon" class="w-6 h-6 text-white" />
          </div>

          <!-- Content -->
          <h3
            class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200"
          >
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ feature.description }}
          </p>

          <!-- Hover Effect Line -->
          <div
            class="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 group-hover:w-full transition-all duration-300"
          ></div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <p class="text-gray-600 mb-4">Ready to experience the difference?</p>
        <button
          class="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all duration-200"
        >
          Explore all features →
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-delay-0 {
  animation-delay: 0ms;
}
.animate-delay-100 {
  animation-delay: 100ms;
}
.animate-delay-200 {
  animation-delay: 200ms;
}
.animate-delay-300 {
  animation-delay: 300ms;
}
.animate-delay-400 {
  animation-delay: 400ms;
}
.animate-delay-500 {
  animation-delay: 500ms;
}
</style>
