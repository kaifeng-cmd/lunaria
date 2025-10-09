<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-vue-next';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for trying out our platform',
    features: ['1 project', '5GB storage', 'Basic support', 'Community access'],
    notIncluded: ['Advanced analytics', 'Priority support', 'Custom integrations'],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'per month',
    description: 'Best for growing teams and businesses',
    features: [
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access',
    ],
    notIncluded: ['White-label solution', 'Dedicated account manager'],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations with specific needs',
    features: [
      'Everything in Professional',
      'Unlimited storage',
      'White-label solution',
      'Dedicated account manager',
      'Custom SLA',
      'On-premise deployment',
      'Advanced security',
    ],
    notIncluded: [],
    popular: false,
    cta: 'Contact Sales',
  },
];
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Simple, transparent
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            pricing
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the perfect plan for your needs. Always know what you'll pay.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2',
            plan.popular
              ? 'border-blue-500 shadow-xl scale-105'
              : 'border-gray-200 hover:border-blue-300',
          ]"
        >
          <!-- Popular Badge -->
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Most Popular
          </div>

          <!-- Plan Header -->
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
            <div class="mb-4">
              <span class="text-4xl font-bold text-gray-900">{{ plan.price }}</span>
              <span class="text-gray-600 ml-1">{{ plan.period }}</span>
            </div>
            <p class="text-gray-600">{{ plan.description }}</p>
          </div>

          <!-- Features List -->
          <div class="space-y-3 mb-8">
            <!-- Included Features -->
            <div v-for="feature in plan.features" :key="feature" class="flex items-center">
              <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span class="text-gray-700">{{ feature }}</span>
            </div>

            <!-- Not Included Features -->
            <div
              v-for="feature in plan.notIncluded"
              :key="feature"
              class="flex items-center opacity-50"
            >
              <div class="w-5 h-5 mr-3 flex-shrink-0 flex items-center justify-center">
                <div class="w-4 h-0.5 bg-gray-300"></div>
              </div>
              <span class="text-gray-400">{{ feature }}</span>
            </div>
          </div>

          <!-- CTA Button -->
          <Button
            :variant="plan.popular ? 'default' : 'outline'"
            class="w-full py-3 transition-all duration-200 hover:scale-105"
            :class="plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-0' : ''"
          >
            {{ plan.cta }}
          </Button>
        </div>
      </div>

      <!-- Bottom Note -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">
          All plans include a 14-day free trial. No credit card required.
        </p>
        <button
          class="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all duration-200"
        >
          Compare all features →
        </button>
      </div>
    </div>
  </section>
</template>
