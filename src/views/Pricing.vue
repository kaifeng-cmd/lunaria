<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Crown, TrendingUp } from 'lucide-vue-next';
import type { Component } from 'vue';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  icon: Component;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'default' | 'outline';
}

const billingCycle = ref<'monthly' | 'annually'>('monthly');

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    icon: Sparkles,
    price: billingCycle.value === 'monthly' ? '$0' : '$0',
    period: 'forever',
    description: 'Perfect for getting started with your online bookstore',
    features: [
      { text: 'Up to 100 books', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Email support', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Stripe payment integration', included: true },
      { text: 'Advanced features', included: false },
      { text: 'Priority support', included: false },
      { text: 'Custom domain', included: false },
    ],
    buttonText: 'Start Free',
    buttonVariant: 'outline',
  },
  {
    name: 'Professional',
    icon: Zap,
    price: billingCycle.value === 'monthly' ? '$29' : '$290',
    period: billingCycle.value === 'monthly' ? '/month' : '/year',
    description: 'For growing bookstores ready to scale',
    features: [
      { text: 'Unlimited books', included: true },
      { text: 'Advanced analytics & reports', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Custom domain', included: true },
      { text: 'SEO optimization', included: true },
      { text: 'Bulk import/export', included: true },
      { text: 'Marketing tools', included: true },
      { text: 'API access', included: false },
    ],
    popular: true,
    buttonText: 'Start 60-Day Trial',
    buttonVariant: 'default',
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations with custom needs',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: '24/7 phone support', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Full API access', included: true },
      { text: 'White-label options', included: true },
      { text: 'SLA guarantee', included: true },
      { text: 'On-premise deployment', included: true },
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline',
  },
];

const faqs = [
  {
    question: 'Can I change plans anytime?',
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes, the Professional plan comes with a 60-day free trial. No credit card required to start.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. Enterprise customers can also pay via invoice.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use bank-grade encryption and are PCI DSS compliant. Your data is backed up daily and stored securely.',
  },
];
</script>

<template>
  <div class="pt-16 min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6"
        >
          <TrendingUp class="w-4 h-4 mr-2" />
          Simple, Transparent Pricing
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Choose the Perfect Plan for Your Bookstore
        </h1>
        <p class="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
          Start free, scale as you grow. All plans include core features with no hidden fees.
        </p>

        <!-- Billing Toggle -->
        <div class="flex items-center justify-center gap-4 mt-8">
          <span
            class="text-white font-medium"
            :class="billingCycle === 'monthly' ? 'opacity-100' : 'opacity-60'"
          >
            Monthly
          </span>
          <button
            class="relative w-16 h-8 bg-white/30 rounded-full transition-colors"
            @click="billingCycle = billingCycle === 'monthly' ? 'annually' : 'monthly'"
          >
            <div
              class="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300"
              :class="billingCycle === 'annually' ? 'translate-x-9' : 'translate-x-1'"
            ></div>
          </button>
          <span
            class="text-white font-medium"
            :class="billingCycle === 'annually' ? 'opacity-100' : 'opacity-60'"
          >
            Annually
            <span class="text-sm text-green-200">(Save 17%)</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          :class="
            plan.popular
              ? 'border-pink-500 shadow-xl scale-105 md:scale-110'
              : 'border-gray-200 hover:border-pink-300'
          "
        >
          <!-- Popular Badge -->
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full"
          >
            Most Popular
          </div>

          <!-- Icon -->
          <div
            class="flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
            :class="plan.popular ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-gray-100'"
          >
            <component
              :is="plan.icon"
              class="w-7 h-7"
              :class="plan.popular ? 'text-white' : 'text-gray-600'"
            />
          </div>

          <!-- Plan Name & Price -->
          <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
          <div class="mb-4">
            <span class="text-4xl font-bold text-gray-900">{{ plan.price }}</span>
            <span class="text-gray-600">{{ plan.period }}</span>
          </div>
          <p class="text-gray-600 mb-8">{{ plan.description }}</p>

          <!-- CTA Button -->
          <Button
            :variant="plan.popular ? 'default' : 'outline'"
            class="w-full mb-8"
            :class="
              plan.popular
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90'
                : 'border-2 border-pink-300 hover:bg-pink-50'
            "
          >
            {{ plan.buttonText }}
          </Button>

          <!-- Features List -->
          <ul class="space-y-3">
            <li v-for="feature in plan.features" :key="feature.text" class="flex items-start gap-3">
              <Check
                class="w-5 h-5 flex-shrink-0 mt-0.5"
                :class="feature.included ? 'text-green-500' : 'text-gray-300'"
              />
              <span :class="feature.included ? 'text-gray-700' : 'text-gray-400'">
                {{ feature.text }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Feature Comparison Table -->
    <div class="bg-gray-50 py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compare All Features</h2>
          <p class="text-xl text-gray-600">See what's included in each plan</p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                <tr>
                  <th class="px-6 py-4 text-left">Feature</th>
                  <th class="px-6 py-4 text-center">Starter</th>
                  <th class="px-6 py-4 text-center">Professional</th>
                  <th class="px-6 py-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 font-medium">Number of Books</td>
                  <td class="px-6 py-4 text-center">100</td>
                  <td class="px-6 py-4 text-center">Unlimited</td>
                  <td class="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 font-medium">Storage</td>
                  <td class="px-6 py-4 text-center">1 GB</td>
                  <td class="px-6 py-4 text-center">50 GB</td>
                  <td class="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium">Team Members</td>
                  <td class="px-6 py-4 text-center">1</td>
                  <td class="px-6 py-4 text-center">5</td>
                  <td class="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 font-medium">Support</td>
                  <td class="px-6 py-4 text-center">Email</td>
                  <td class="px-6 py-4 text-center">Email + Chat</td>
                  <td class="px-6 py-4 text-center">24/7 Phone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600">Everything you need to know about our pricing</p>
        </div>

        <div class="space-y-6">
          <div
            v-for="faq in faqs"
            :key="faq.question"
            class="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-pink-300 transition-colors"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ faq.question }}</h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gradient-to-r from-pink-500 to-purple-600 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
        <p class="text-xl text-pink-100 mb-8">
          Join thousands of bookstores already using our platform
        </p>
        <Button size="lg" class="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
          Start Your Free Trial
        </Button>
      </div>
    </div>
  </div>
</template>
