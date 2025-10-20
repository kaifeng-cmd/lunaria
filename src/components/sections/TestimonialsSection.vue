<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-vue-next';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: 1 | 2 | 3 | 4 | 5;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Selina Tan',
    role: 'CTO',
    company: 'Tmex KL Sdn. Bhd.',
    avatar: '👩‍💻',
    rating: 5,
    content:
      "I cant't believe it'd transformed how we build and deploy our products. The speed, reliability are satisfied.",
  },
  {
    name: 'Lukas Rodriguez',
    role: 'Product Manager',
    company: 'SnowHub',
    avatar: '👨‍💼',
    rating: 5,
    content:
      'The best investment we made this year. Our development cycle went from months to weeks.',
  },
  {
    name: 'Emily Katelynn',
    role: 'Founder',
    company: 'Axyria Lab',
    avatar: '👩‍🚀',
    rating: 4,
    content:
      'As a non-technical founder, Miki Yoshiko made it possible for me to bring my ideas to life quickly.',
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
          <span class="bg-gradient-to-r from-[#F39F9F] to-purple-800 bg-clip-text text-transparent">
            hundreds
          </span>
          of teams
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our customers have to say.
        </p>
      </div>

      <!-- Testimonials Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="bg-white rounded-2xl p-8 border border-white hover:border-pink-300 shadow-2xl hover:border-4 hover:shadow-md transition-all duration-300 hover:-translate-y-2"
          :class="`animate-delay-${index * 200}`"
        >
          <!-- Rating Stars -->
          <div class="flex mb-4 relative">
            <!-- gray stars -->
            <div class="flex">
              <Star v-for="n in 5" :key="'bg-' + n" class="w-5 h-5 text-gray-300 fill-current" />
            </div>

            <!-- yellow stars -->
            <div class="flex absolute top-0 left-0 overflow-hidden">
              <Star
                v-for="star in testimonial.rating"
                :key="'fg-' + star"
                class="w-5 h-5 text-yellow-400 fill-current"
              />
            </div>
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

      <!-- Direct to all reviews -->
      <div class="text-center mt-6">
        <Button
          as="a"
          href="reviews"
          variant="link"
          class="text-[#B95E82] hover:text-[#a43763] font-semibold hover:underline transition-all duration-200"
        >
          Explore all testimonials →
        </Button>
      </div>

      <!-- Bottom Statistics -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="p-6">
          <div class="text-3xl md:text-4xl font-bold text-pink-700 mb-2">1.2 k+</div>
          <div class="text-gray-600">Satisfied Customers</div>
        </div>
        <div class="p-6">
          <div class="text-3xl md:text-4xl font-bold text-purple-600 mb-2">97.6 %</div>
          <div class="text-gray-600">Stable Uptime</div>
        </div>
        <div class="p-6">
          <div class="text-3xl md:text-4xl font-bold text-purple-900 mb-2">1.8x</div>
          <div class="text-gray-600">Workflow Efficiency</div>
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
