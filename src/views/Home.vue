<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import ProductSection from '@/components/sections/ProductSection.vue';
import displaySlidingSection from '@/components/sections/DisplaySlidingSection.vue';
import FeaturesSection from '@/components/sections/FeaturesSection.vue';
import PricingPreview from '@/components/sections/PricingPreview.vue';
import GuideSection from '@/components/sections/GuideSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import FAQSection from '@/components/sections/FAQSection.vue';
import CTASection from '@/components/sections/CTASection.vue';
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section id="hero">
      <HeroSection />
    </section>

    <!-- Product Section -->
    <section id="product">
      <ProductSection />
    </section>

    <!-- Display Sliding Section -->
    <section id="displaySliding">
      <displaySlidingSection />
    </section>

    <!-- Features Section -->
    <section id="features">
      <FeaturesSection />
    </section>

    <!-- Pricing Preview -->
    <section id="pricing">
      <PricingPreview />
    </section>

    <!-- Guide Section -->
    <section id="guide">
      <GuideSection />
    </section>

    <!-- Testimonials -->
    <section id="testimonials">
      <TestimonialsSection />
    </section>

    <!-- FAQ -->
    <section id="faq">
      <FAQSection />
    </section>

    <!-- Call to Action -->
    <section id="cta">
      <CTASection />
    </section>
  </div>
</template>
