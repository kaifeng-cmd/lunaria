<script setup lang="ts">
import { ref } from 'vue';
import { Star, Quote, ThumbsUp, Users, Award } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import type { Component } from 'vue';

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  helpful: number;
}

interface Stat {
  label: string;
  value: string;
  icon: Component;
}

const filterCategory = ref<string>('all');

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Owner',
    company: 'The Book Nook',
    avatar: '👩‍💼',
    rating: 5,
    title: 'Best decision for our bookstore',
    content:
      'Switching to this platform was the best decision we made. Sales increased by 40% in the first month, and customer engagement has never been better. The analytics dashboard is incredibly helpful.',
    date: '2024-10-15',
    verified: true,
    helpful: 24,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Manager',
    company: 'City Lights Books',
    avatar: '👨‍💻',
    rating: 5,
    title: 'Incredible support team',
    content:
      'The customer support is outstanding. They helped us migrate our entire inventory in just 2 days. The platform is intuitive and our staff learned it quickly. Highly recommend!',
    date: '2024-10-10',
    verified: true,
    helpful: 18,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Bookworm Paradise',
    avatar: '👩‍🎨',
    rating: 5,
    title: 'Game changer for small businesses',
    content:
      'As a small independent bookstore, we needed something affordable yet powerful. This platform delivered on both fronts. The free plan was perfect to start, and upgrading was seamless.',
    date: '2024-10-05',
    verified: true,
    helpful: 31,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Owner',
    company: 'Novel Ideas',
    avatar: '👨‍🏫',
    rating: 5,
    title: 'Perfect for growing bookstores',
    content:
      'We started with 500 books and now have over 5,000. The platform scaled effortlessly with our growth. Inventory management is a breeze, and customers love the shopping experience.',
    date: '2024-09-28',
    verified: true,
    helpful: 22,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Director',
    company: 'Academic Book Center',
    avatar: '👩‍🔬',
    rating: 4,
    title: 'Great for academic bookstores',
    content:
      'The bulk import feature saved us countless hours. Being able to organize books by subject and semester is perfect for our university bookstore. Only minor wish is for more customization options.',
    date: '2024-09-20',
    verified: true,
    helpful: 15,
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Owner',
    company: 'Mystery & More',
    avatar: '👨‍🦰',
    rating: 5,
    title: 'The analytics are phenomenal',
    content:
      'Understanding customer behavior through the analytics dashboard has transformed how we stock our inventory. We can now predict trends and order accordingly. ROI has been incredible.',
    date: '2024-09-15',
    verified: true,
    helpful: 27,
  },
];

const stats: Stat[] = [
  { label: 'Average Rating', value: '4.9/5', icon: Star },
  { label: 'Total Reviews', value: '2,341', icon: Users },
  { label: 'Verified Users', value: '98%', icon: Award },
  { label: 'Would Recommend', value: '96%', icon: ThumbsUp },
];

const categories = [
  { value: 'all', label: 'All Reviews' },
  { value: 'features', label: 'Features' },
  { value: 'support', label: 'Support' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'ease', label: 'Ease of Use' },
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
          <Star class="w-4 h-4 mr-2 fill-current" />
          Trusted by Thousands
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          What Our Customers Say
        </h1>
        <p class="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
          Don't just take our word for it. Here's what bookstore owners across the world are saying
          about us.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-white/10 backdrop-blur-md rounded-xl p-6"
          >
            <component :is="stat.icon" class="w-8 h-8 text-white mx-auto mb-2" />
            <div class="text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
            <div class="text-sm text-purple-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Category Filter -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-wrap justify-center gap-3">
        <Button
          v-for="category in categories"
          :key="category.value"
          :variant="filterCategory === category.value ? 'default' : 'outline'"
          class="transition-all"
          :class="
            filterCategory === category.value
              ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
              : 'hover:border-pink-300'
          "
          @click="filterCategory = category.value"
        >
          {{ category.label }}
        </Button>
      </div>
    </div>

    <!-- Reviews Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Header -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="text-4xl">{{ review.avatar }}</div>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-semibold text-gray-900">{{ review.name }}</h3>
                  <span
                    v-if="review.verified"
                    class="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded"
                  >
                    Verified
                  </span>
                </div>
                <p class="text-sm text-gray-600">{{ review.role }} at {{ review.company }}</p>
              </div>
            </div>
            <Quote class="w-8 h-8 text-pink-200" />
          </div>

          <!-- Rating -->
          <div class="flex items-center gap-1 mb-3">
            <Star
              v-for="i in 5"
              :key="i"
              class="w-5 h-5"
              :class="i <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'"
            />
          </div>

          <!-- Content -->
          <h4 class="font-semibold text-gray-900 mb-2">{{ review.title }}</h4>
          <p class="text-gray-600 mb-4 leading-relaxed">{{ review.content }}</p>

          <!-- Footer -->
          <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <span class="text-sm text-gray-500">{{ review.date }}</span>
            <button
              class="flex items-center gap-1 text-sm text-gray-600 hover:text-pink-600 transition-colors"
            >
              <ThumbsUp class="w-4 h-4" />
              <span>{{ review.helpful }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div class="text-center mt-12">
        <Button variant="outline" size="lg" class="border-2 border-pink-300 hover:bg-pink-50">
          Load More Reviews
        </Button>
      </div>
    </div>

    <!-- Trust Badges -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Trusted By Industry Leaders</h2>
          <p class="text-xl text-gray-600">
            Featured in leading publications and recognized by industry experts
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            class="flex items-center justify-center bg-white rounded-xl p-8 border border-gray-200"
          >
            <div class="text-4xl">📰</div>
            <span class="ml-3 text-lg font-semibold text-gray-700">TechCrunch</span>
          </div>
          <div
            class="flex items-center justify-center bg-white rounded-xl p-8 border border-gray-200"
          >
            <div class="text-4xl">🏆</div>
            <span class="ml-3 text-lg font-semibold text-gray-700">Best SaaS 2024</span>
          </div>
          <div
            class="flex items-center justify-center bg-white rounded-xl p-8 border border-gray-200"
          >
            <div class="text-4xl">⭐</div>
            <span class="ml-3 text-lg font-semibold text-gray-700">G2 Leader</span>
          </div>
          <div
            class="flex items-center justify-center bg-white rounded-xl p-8 border border-gray-200"
          >
            <div class="text-4xl">💎</div>
            <span class="ml-3 text-lg font-semibold text-gray-700">Capterra</span>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Join These Happy Customers
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Start your free trial today and see why bookstores love our platform
        </p>
        <Button size="lg" class="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8">
          Start Your Free Trial
        </Button>
      </div>
    </div>
  </div>
</template>
