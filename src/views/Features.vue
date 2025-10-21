<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import {
  Zap,
  ShieldCheck,
  ChartNoAxesCombined,
  Users,
  BookOpen,
  ShoppingCart,
  Package,
  Search,
  Bell,
  Settings,
  Sparkles,
  Lock,
  Cloud,
} from 'lucide-vue-next';
import type { Component } from 'vue';

interface Feature {
  icon: Component;
  title: string;
  description: string;
  benefits: string[];
}

interface Category {
  name: string;
  features: Feature[];
}

const selectedCategory = ref<string>('core');

const categories: Record<string, Category> = {
  core: {
    name: 'Core Features',
    features: [
      {
        icon: Zap,
        title: 'Lightning Fast Performance',
        description: 'Built on modern infrastructure for instant page loads and real-time updates.',
        benefits: [
          'Sub-second page load times',
          'Real-time inventory synchronization',
          'Instant order notifications',
          'Optimized for mobile devices',
        ],
      },
      {
        icon: ShieldCheck,
        title: 'Bank-Grade Security',
        description: 'Enterprise-level security to protect your business and customer data.',
        benefits: [
          'SSL/TLS encryption',
          'PCI DSS compliant payments',
          'Two-factor authentication',
          'Regular security audits',
        ],
      },
      {
        icon: ChartNoAxesCombined,
        title: 'Advanced Analytics',
        description: 'Comprehensive business intelligence and reporting tools.',
        benefits: [
          'Real-time sales dashboard',
          'Customer behavior insights',
          'Inventory tracking',
          'Revenue forecasting',
        ],
      },
    ],
  },
  selling: {
    name: 'Selling Tools',
    features: [
      {
        icon: BookOpen,
        title: 'Catalog Management',
        description: 'Effortlessly manage your entire book inventory.',
        benefits: [
          'Bulk import/export tools',
          'ISBN auto-lookup',
          'Category organization',
          'Stock level alerts',
        ],
      },
      {
        icon: ShoppingCart,
        title: 'Smart Shopping Cart',
        description: 'Optimized checkout experience to maximize conversions.',
        benefits: [
          'Guest checkout option',
          'Save for later feature',
          'Discount code support',
          'Multiple payment methods',
        ],
      },
      {
        icon: Package,
        title: 'Order Management',
        description: 'Streamlined order processing and fulfillment.',
        benefits: [
          'Automated order routing',
          'Shipping label generation',
          'Tracking number integration',
          'Return management',
        ],
      },
    ],
  },
  customer: {
    name: 'Customer Experience',
    features: [
      {
        icon: Search,
        title: 'Advanced Search',
        description: 'Powerful search engine to help customers find books instantly.',
        benefits: [
          'Full-text search',
          'Filter by genre, author, price',
          'Smart recommendations',
          'Search history',
        ],
      },
      {
        icon: Users,
        title: 'Community Features',
        description: 'Build a loyal community around your bookstore.',
        benefits: [
          'Customer reviews & ratings',
          'Wishlist functionality',
          'Reading lists',
          'Social sharing',
        ],
      },
      {
        icon: Bell,
        title: 'Smart Notifications',
        description: 'Keep customers engaged with timely updates.',
        benefits: [
          'Order status updates',
          'New arrival alerts',
          'Price drop notifications',
          'Personalized recommendations',
        ],
      },
    ],
  },
  technical: {
    name: 'Technical Excellence',
    features: [
      {
        icon: Cloud,
        title: 'Cloud Infrastructure',
        description: 'Scalable cloud architecture that grows with your business.',
        benefits: [
          '99.9% uptime SLA',
          'Auto-scaling capabilities',
          'Global CDN',
          'Automatic backups',
        ],
      },
      {
        icon: Settings,
        title: 'Easy Integration',
        description: 'Connect with your favorite tools and services.',
        benefits: [
          'RESTful API',
          'Webhook support',
          'Third-party app marketplace',
          'Custom integrations',
        ],
      },
      {
        icon: Lock,
        title: 'Data Privacy',
        description: 'Your data is yours. We take privacy seriously.',
        benefits: [
          'GDPR compliant',
          'Data encryption at rest',
          'Regular data exports',
          'Right to be forgotten',
        ],
      },
    ],
  },
};
</script>

<template>
  <div class="pt-16 min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-pink-500 to-purple-600 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6"
        >
          <Sparkles class="w-4 h-4 mr-2" />
          Everything You Need to Succeed
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Powerful Features for Modern Bookstores
        </h1>
        <p class="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
          From inventory management to customer engagement, we've built everything you need to run a
          successful online bookstore.
        </p>
        <Button size="lg" class="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
          Start Your Free Trial
        </Button>
      </div>
    </div>

    <!-- Category Tabs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <Button
          v-for="(category, key) in categories"
          :key="key"
          :variant="selectedCategory === key ? 'default' : 'outline'"
          class="transition-all duration-200"
          :class="
            selectedCategory === key
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0'
              : 'hover:border-pink-300'
          "
          @click="selectedCategory = key"
        >
          {{ category.name }}
        </Button>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in categories[selectedCategory].features"
          :key="feature.title"
          class="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-pink-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <component :is="feature.icon" class="w-8 h-8 text-white" />
          </div>

          <!-- Content -->
          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            {{ feature.description }}
          </p>

          <!-- Benefits List -->
          <ul class="space-y-2">
            <li
              v-for="benefit in feature.benefits"
              :key="benefit"
              class="flex items-start text-sm text-gray-700"
            >
              <span class="text-green-500 mr-2 mt-0.5">✓</span>
              {{ benefit }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Feature Comparison Section -->
    <div class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Compare</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            See why thousands of bookstores choose us over traditional platforms.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <tr>
                  <th class="px-6 py-4 text-left">Feature</th>
                  <th class="px-6 py-4 text-center">Miki Yoshiko</th>
                  <th class="px-6 py-4 text-center">Traditional Platforms</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 font-medium">Setup Time</td>
                  <td class="px-6 py-4 text-center text-green-600 font-semibold">15 minutes</td>
                  <td class="px-6 py-4 text-center text-gray-500">2-4 weeks</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 font-medium">Monthly Fee</td>
                  <td class="px-6 py-4 text-center text-green-600 font-semibold">From $0</td>
                  <td class="px-6 py-4 text-center text-gray-500">$299+</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium">Payment Processing</td>
                  <td class="px-6 py-4 text-center text-green-600 font-semibold">Stripe Escrow</td>
                  <td class="px-6 py-4 text-center text-gray-500">Various</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 font-medium">24/7 Support</td>
                  <td class="px-6 py-4 text-center text-green-600 font-semibold">✓</td>
                  <td class="px-6 py-4 text-center text-gray-500">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to experience these features?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Start your 60-day free trial. No credit card required.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8">
            Get Started Free
          </Button>
          <Button variant="outline" size="lg" class="border-2 border-pink-300 px-8">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
</style>
