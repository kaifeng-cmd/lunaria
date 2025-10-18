<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E06B80] to-yellow-100/70">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Ready to get started?
      </h2>
      <p class="text-xl text-white mb-10 font-semibold max-w-2xl mx-auto">
        Join hundreds of teams already building amazing bookstores with us. Start your free trial
        today.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          size="lg"
          class="text-lg px-6 py-4 bg-white font-semibold text-red-900 hover:bg-gray-200 hover:scale-105 transition-all duration-200"
        >
          Start Free Trial
        </Button>
        <Button
          variant="outline"
          size="lg"
          class="text-lg px-6 py-4 border-red-900 border-2 bg-transparent text-red-900 hover:text-red-900 hover:bg-transparent hover:scale-105 transition-all duration-200"
        >
          Schedule Demo
        </Button>
      </div>

      <p class="text-black text-sm mt-6">
        No credit card required • 60-days free trial • Cancel anytime
      </p>
    </div>
  </section>
</template>
