<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import ComparisonTable from '@/components/ComparisonTable.vue';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Check, X, Ghost, Citrus, Crown, TrendingUp } from 'lucide-vue-next';
import type { Component } from 'vue';

interface PricingPlan {
  name: string;
  icon: Component;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
  buttonText: string;
}

interface AccordionItemType {
  value: string;
  question: string;
  answer: string;
}

const billingCycle = ref<'monthly' | 'annually'>('monthly');

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    icon: Ghost,
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
    buttonText: 'Get Started',
  },
  {
    name: 'Pro',
    icon: Citrus,
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
    buttonText: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    icon: Crown,
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
    buttonText: 'Contact Our Sales',
  },
];

const faqs: AccordionItemType[] = [
  {
    value: 'item-1',
    question: 'Can I change plans anytime?',
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
  },
  {
    value: 'item-2',
    question: 'Is there a free trial?',
    answer: 'Yes, the Pro plan comes with a 60-days free trial. No credit card required to start.',
  },
  {
    value: 'item-3',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. Enterprise customers can also pay via invoice.',
  },
  {
    value: 'item-4',
    question: 'Do you offer refunds?',
    answer:
      "Yes, we offer a 30-days money-back guarantee. If you're not satisfied, contact us for a full refund.",
  },
  {
    value: 'item-5',
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use bank-grade encryption and are PCI DSS compliant. Your data is backed up daily and stored securely.',
  },
];

const defaultFaqValue = ref<string>('item-1');

// Comparison Table Data
const comparisonTableData = {
  columns: [
    { key: 'feature', label: 'Feature', align: 'left' as const },
    { key: 'starter', label: 'Starter', align: 'center' as const },
    { key: 'pro', label: 'Pro', align: 'center' as const },
    { key: 'enterprise', label: 'Enterprise', align: 'center' as const },
  ],
  rows: [
    {
      label: 'Number of Books',
      values: {
        starter: '150',
        pro: 'Unlimited',
        enterprise: 'Unlimited',
      },
    },
    {
      label: 'Storage',
      values: {
        starter: '1 GB',
        pro: '50 GB',
        enterprise: 'Unlimited',
      },
    },
    {
      label: 'Max Team Members',
      values: {
        starter: '1',
        pro: '10',
        enterprise: 'Unlimited',
      },
    },
    {
      label: 'Support',
      values: {
        starter: 'Email',
        pro: 'Email + Phone',
        enterprise: '24/7 Email + Phone',
      },
    },
  ],
};
</script>

<template>
  <div class="pt-16 min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
    <!-- First Section -->
    <div class="bg-gradient-to-r from-[#F39F9F] to-purple-900 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6"
        >
          <TrendingUp class="w-4 h-4 mr-2" />
          Flexible Pricing Options
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Choose Your Perfect Plan
        </h1>
        <p class="text-xl text-white max-w-2xl mx-auto leading-tight mb-6">
          Transparent pricing that grows with your business. No hidden fees, cancel anytime.
        </p>

        <!-- Billing Toggle -->
        <div class="flex items-center justify-center gap-4 mt-8">
          <span
            class="text-white font-medium"
            :class="billingCycle === 'monthly' ? 'opacity-100' : 'opacity-50'"
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
            :class="billingCycle === 'annually' ? 'opacity-100' : 'opacity-50'"
          >
            Annually
            <span class="text-sm text-green-300">(Save 17%)</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Pricing Plan Cards -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

          <!-- Icon Badge -->
          <div
            class="flex items-center justify-center w-12 h-12 rounded-2xl mb-2"
            :class="
              plan.popular
                ? 'bg-gradient-to-r from-[#e66d6d] to-purple-500'
                : plan.name === 'Enterprise'
                  ? 'bg-gradient-to-r from-[#e66d6d] to-yellow-200'
                  : 'bg-purple-200'
            "
          >
            <component
              :is="plan.icon"
              class="w-7 h-7"
              :class="plan.popular ? 'text-white' : 'text-gray-600'"
            />
          </div>

          <!-- Plan Header -->
          <div class="mb-8">
            <h3
              class="text-2xl font-bold mb-4"
              :class="
                plan.name === 'Pro'
                  ? 'bg-gradient-to-r from-[#e66d6d] to-purple-500 bg-clip-text text-transparent'
                  : plan.name === 'Enterprise'
                    ? 'bg-gradient-to-r from-[#d52d2d] to-yellow-200 bg-clip-text text-transparent'
                    : 'text-gray-600'
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
            {{ plan.buttonText }}
          </Button>
        </div>
      </div>

      <!-- Bottom Note -->
      <div class="text-center mt-14">
        <p class="text-gray-600 font-semibold">
          Pro plan includes a 60-days free trial. No credit card required.
        </p>
      </div>
    </div>

    <!-- Feature Comparison Table -->
    <div class="bg-red-100 py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#fc8d8d] to-red-700 bg-clip-text text-transparent mb-4"
          >
            Compare Between Plans
          </h2>
          <p class="text-xl text-gray-600">
            See what's included in each plan. Find the one that fits your needs.
          </p>
        </div>

        <ComparisonTable
          :columns="comparisonTableData.columns"
          :rows="comparisonTableData.rows"
          highlight-column="pro"
        />
      </div>
    </div>

    <!-- Pricing FAQ Section -->
    <div class="py-16 bg-[#e7c2e5]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked
            <span class="text-white bg-gradient-to-r from-[#f9c2a4] to-purple-900 px-2">
              questions
            </span>
          </h2>
          <p class="text-[#b74e78]">Everything you need to know about our pricing.</p>
        </div>

        <Accordion type="single" class="w-full" collapsible :default-value="defaultFaqValue">
          <AccordionItem v-for="faq in faqs" :key="faq.value" :value="faq.value">
            <AccordionTrigger class="text-left font-medium py-4">
              {{ faq.question }}
            </AccordionTrigger>
            <AccordionContent class="text-sm text-gray-600 pb-4">
              {{ faq.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-black mb-6">Ready to move forward?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Unlock the advanced features by upgrading to a PRO plan today!
        </p>
        <Button
          size="lg"
          class="bg-white text-purple-600 shadow-md hover:bg-gray-100 hover:scale-105 font-semibold px-6 transition-all duration-200"
        >
          Upgrade to PRO
        </Button>
      </div>
    </div>
  </div>
</template>
