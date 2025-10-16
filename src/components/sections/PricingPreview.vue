<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-vue-next';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for trying out and launching your first bookstore',
    features: [
      'Limited book listings',
      'Limited storage & bandwidth',
      'Basic storefront theme',
      'Email support',
      'Real-time analytics dashboard',
      'Stripe payment processing (escrow)',
    ],
    notIncluded: ['Automated inventory sync', 'Custom domain / branding'],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: 'RM 99',
    period: 'per month',
    description: 'Best for growing bookstores and scaling your business',
    features: [
      'Everything in Starter',
      'Unlimited book listings',
      'Advanced analytics & reporting dashboard',
      'Bulk import / export',
      'Automated inventory sync',
      'Custom domain / branding',
    ],
    notIncluded: ['White-label solution', 'Dedicated account manager'],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large bookstore networks and marketplace operators',
    features: [
      'Everything in Pro',
      'Unlimited storage & bandwidth',
      'White-label solution',
      'Dedicated account manager',
      '24/7 phone & email support',
      'Advanced storefront theme',
      'Advanced security & compliance',
      'Custom SLA',
      'Priority access to new features',
    ],
    notIncluded: [],
    popular: false,
    cta: 'Contact Our Sales',
  },
];
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5D2D2]">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#921A40] mb-6">
          Simple, transparent
          <span class="bg-gradient-to-l from-[#e66d6d] to-[#a32e53] bg-clip-text text-transparent">
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
              ? 'border-[#ca7892] border-4 shadow-xl scale-105'
              : 'border-gray-100 border-4 hover:border-[#daa6b6]',
          ]"
        >
          <!-- Popular Badge -->
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#e66d6d] to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Most Popular
          </div>

          <!-- Plan Header -->
          <div class="text-center mb-8">
            <h3
              class="text-2xl font-bold mb-2"
              :class="
                plan.name === 'Pro'
                  ? 'bg-gradient-to-r from-[#e66d6d] to-purple-500 bg-clip-text text-transparent'
                  : plan.name === 'Enterprise'
                    ? 'bg-gradient-to-r from-[#d52d2d] to-yellow-200 bg-clip-text text-transparent'
                    : 'text-gray-900'
              "
            >
              {{ plan.name }}
            </h3>
            <div class="mb-4">
              <span class="text-3xl font-bold text-gray-900">{{ plan.price }}</span>
              <span class="text-gray-600 ml-2">{{ plan.period }}</span>
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
              class="flex items-center opacity-60"
            >
              <X class="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
              <span class="text-gray-500">{{ feature }}</span>
            </div>
          </div>

          <!-- CTA Button -->
          <Button
            :variant="plan.popular ? 'default' : 'outline'"
            class="w-full py-3 transition-all duration-200 hover:scale-105"
            :class="
              plan.popular
                ? 'bg-gradient-to-r from-[#e66d6d] to-purple-500 border-0'
                : plan.name === 'Enterprise'
                  ? 'border-[#d52d2d]/40 border-2 hover:bg-transparent'
                  : ''
            "
          >
            {{ plan.cta }}
          </Button>
        </div>
      </div>

      <!-- Bottom Note -->
      <div class="text-center mt-14">
        <p class="text-gray-600 font-semibold mb-4">
          Pro plan includes a 60-days free trial. No credit card required.
        </p>
        <Button
          as="a"
          href="pricing"
          variant="link"
          class="text-[#A94A4A] hover:text-[#822e2e] font-semibold hover:underline transition-all duration-200"
        >
          Compare all packages →
        </Button>
      </div>
    </div>
  </section>
</template>
