<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import FeaturesSection from '@/components/sections/FeaturesSection.vue';
import PricingPreview from '@/components/sections/PricingPreview.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import CTASection from '@/components/sections/CTASection.vue';
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section id="hero">
      <HeroSection />
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20">
      <FeaturesSection />
    </section>

    <!-- Pricing Preview -->
    <section id="pricing" class="py-20 bg-gray-50">
      <PricingPreview />
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-20">
      <TestimonialsSection />
    </section>

    <!-- Call to Action -->
    <section id="cta" class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <CTASection />
    </section>
  </div>
</template>
