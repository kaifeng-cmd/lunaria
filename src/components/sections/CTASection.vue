<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Ready to get started?
      </h2>
      <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
        Join thousands of teams already building amazing products with Lunaria. Start your free
        trial today.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          size="lg"
          class="text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-200"
        >
          Start Free Trial
        </Button>
        <Button
          variant="outline"
          size="lg"
          class="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-200"
        >
          Schedule Demo
        </Button>
      </div>

      <p class="text-blue-200 text-sm mt-6">
        No credit card required • 14-day free trial • Cancel anytime
      </p>
    </div>
  </section>
</template>
