<script setup lang="ts">
import { Star } from 'lucide-vue-next';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow',
    avatar: '👩‍💻',
    rating: 5,
    content:
      'Lunaria transformed how we build and deploy our products. The speed and reliability are unmatched.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager',
    company: 'InnovateHub',
    avatar: '👨‍💼',
    rating: 5,
    content:
      'The best investment we made this year. Our development cycle went from months to weeks.',
  },
  {
    name: 'Emily Watson',
    role: 'Founder',
    company: 'StartupLabs',
    avatar: '👩‍🚀',
    rating: 5,
    content:
      'As a non-technical founder, Lunaria made it possible for me to bring my ideas to life quickly.',
  },
];
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Loved by
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            thousands
          </span>
          of teams
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our customers have to say.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          :class="`animate-delay-${index * 200}`"
        >
          <!-- Rating Stars -->
          <div class="flex mb-4">
            <Star
              v-for="star in testimonial.rating"
              :key="star"
              class="w-5 h-5 text-yellow-400 fill-current"
            />
          </div>

          <!-- Testimonial Content -->
          <blockquote class="text-gray-700 text-lg leading-relaxed mb-6">
            "{{ testimonial.content }}"
          </blockquote>

          <!-- Author Info -->
          <div class="flex items-center">
            <div class="text-3xl mr-4">{{ testimonial.avatar }}</div>
            <div>
              <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
              <div class="text-gray-600">{{ testimonial.role }} at {{ testimonial.company }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Stats -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="p-6">
          <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10k+</div>
          <div class="text-gray-600">Happy Customers</div>
        </div>
        <div class="p-6">
          <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.9%</div>
          <div class="text-gray-600">Uptime</div>
        </div>
        <div class="p-6">
          <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
          <div class="text-gray-600">Support</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-delay-0 {
  animation-delay: 0ms;
}
.animate-delay-200 {
  animation-delay: 200ms;
}
.animate-delay-400 {
  animation-delay: 400ms;
}
</style>
