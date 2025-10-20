<script setup lang="ts">
import { Zap, ShieldCheck, ChartNoAxesCombined, Users, Headset, Globe } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import type { Component } from 'vue';

interface Feature {
  icon: Component;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description:
      'Experience instant page loads and real-time updates — your customers and inventory stay perfectly in sync.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security',
    description:
      'Secure payment processing with Stripe escrow, encrypted customer data, and full compliance standards.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Business Intelligence',
    description:
      'Monitor sales performance, track pending orders, and access your dashboard — make decisions instantly.',
  },
  {
    icon: Users,
    title: 'Built for Community',
    description:
      'Enable customers to rate books, leave reviews, and build trust, turning readers into loyal repeat buyers.',
  },
  {
    icon: Headset,
    title: '24/7 Dedicated Support',
    description:
      'Get expert help anytime — from setup to scaling, our support team is always ready to help your bookstore succeed.',
  },
  {
    icon: Globe,
    title: 'Scale Without Limits',
    description:
      'From indie bookstores to multi-seller marketplaces, our infrastructure grows with your ambitions.',
  },
];
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-7">
          Everything you need to
          <span class="bg-gradient-to-r from-[#F39F9F] to-purple-800 bg-clip-text text-transparent">
            succeed.
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Powerful features designed to help you manage, grow, and scale your online bookstore
          effortlessly
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="group p-6 bg-white rounded-xl border shadow-md border-gray-200 hover:border-purple-700/30 hover:border-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          :class="`animate-delay-${index * 100}`"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#eca8a8]/80 to-purple-800/70 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
          >
            <component :is="feature.icon" class="w-6 h-6 text-white" />
          </div>

          <!-- Content -->
          <h3
            class="text-xl font-bold bg-gradient-to-r text-gray-700 mb-2 group-hover:text-purple-800 transition-colors duration-200"
          >
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ feature.description }}
          </p>

          <!-- Hover Effect Line -->
          <div
            class="w-0 h-0.5 bg-gradient-to-r from-[#F39F9F] to-purple-800 mt-4 group-hover:w-full transition-all duration-300"
          ></div>
        </div>
      </div>

      <!-- Direct to explore all -->
      <div class="text-center mt-16">
        <p class="text-gray-600 mb-4">Ready to experience the difference?</p>
        <Button
          as="a"
          href="features"
          variant="link"
          class="text-[#B95E82] hover:text-[#a43763] font-semibold hover:underline transition-all duration-200"
        >
          Explore all features →
        </Button>
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
