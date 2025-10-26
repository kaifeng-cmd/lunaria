<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import ComparisonTable from '@/components/ComparisonTable.vue';
import {
  Zap,
  ShieldCheck,
  ChartNoAxesCombined,
  Users,
  BookImage,
  ShoppingCart,
  Package,
  Search,
  Bell,
  Blocks,
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
        description:
          'Enterprise-level security to protect your business and customer transactional data.',
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
  management: {
    name: 'Management Tools',
    features: [
      {
        icon: BookImage,
        title: 'Catalog Management',
        description: 'Effortlessly manage your entire bookstore inventory.',
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
        benefits: ['Guest checkout option', 'Save for later feature', 'Discount code support'],
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
        benefits: ['Full-text search', 'Filter by genre, author, price', 'Search history'],
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
        benefits: ['Order status updates', 'New arrival alerts', 'Price drop notifications'],
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
        benefits: ['99.9% uptime SLA', 'Auto-scaling capabilities', 'Automatic backups'],
      },
      {
        icon: Blocks,
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
        description: 'Your data is yours. We take customer privacy seriously.',
        benefits: ['Data encryption at rest', 'Regular data exports', 'Right to be forgotten'],
      },
    ],
  },
};

// Comparison Table Data
const comparisonTableData = {
  columns: [
    { key: 'feature', label: 'Feature', align: 'left' as const },
    { key: 'us', label: 'Miki Yoshiko', align: 'center' as const },
    { key: 'others', label: 'Other Platforms', align: 'center' as const },
  ],
  rows: [
    {
      label: 'Setup Time',
      values: {
        us: '15 minutes+',
        others: '2-3 weeks',
      },
    },
    {
      label: 'In/Outbound Data Transfer',
      values: {
        us: 'Start from 50 GB (for Pro 1 TB)',
        others: 'Limited to 200 GB (Pro)',
      },
    },
    {
      label: 'Business Intelligence',
      values: {
        us: 'Real-time Dashboard & Reporting',
        others: 'Basic Analytic Reports',
      },
    },
    {
      label: '24/7 Customer Support',
      values: {
        us: true,
        others: false,
      },
    },
  ],
};
</script>

<template>
  <div class="pt-16 min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
    <!-- First Section -->
    <div class="bg-gradient-to-r from-[#F39F9F] to-purple-900 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6"
        >
          <Sparkles class="w-4 h-4 mr-2" />
          Everything You Need to Know
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Our Powerful Features
        </h1>
        <p class="text-xl text-white max-w-2xl mx-auto leading-tight mb-6">
          From inventory management to customer engagement, we've built everything you need to run a
          successful online bookstore.
        </p>
      </div>
    </div>

    <!-- Category Tabs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <Button
          v-for="(category, key) in categories"
          :key="key"
          :variant="selectedCategory === key ? 'default' : 'outline'"
          class="transition-all duration-200"
          :class="
            selectedCategory === key
              ? 'bg-gradient-to-r from-[#F39F9F] to-pink-500 text-white border-0'
              : 'hover:border-pink-300 hover:border-2'
          "
          @click="selectedCategory = key"
        >
          {{ category.name }}
        </Button>
      </div>

      <!-- Features Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in categories[selectedCategory].features"
          :key="feature.title"
          class="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-100/50 hover:border-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Badge icon -->
          <div
            class="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#F39F9F] to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <component :is="feature.icon" class="w-8 h-8 text-white" />
          </div>

          <!-- Content -->
          <h3 class="text-2xl font-bold text-gray-900 mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 mb-8 leading-relaxed">
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
    <div class="bg-pink-300/40 py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
            How are we different from others?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            See why thousands of bookstores choose us over traditional platforms.
          </p>
        </div>

        <ComparisonTable
          :columns="comparisonTableData.columns"
          :rows="comparisonTableData.rows"
          highlight-column="us"
        />
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-orange-300/70 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to experience these features?
        </h2>
        <p class="text-xl text-gray-600 font-semibold mb-10">
          Start your 60-days free trial. No credit card required.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            class="text-lg px-4 py-4 bg-white font-semibold text-red-900 hover:bg-gray-200 hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            class="text-lg px-4 py-4 border-red-900 border-2 bg-transparent text-red-900 hover:text-red-900 hover:bg-transparent hover:scale-105 transition-all duration-200"
          >
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
  animation: fadeInUp 1.6s ease-out forwards;
  opacity: 0;
}
</style>
