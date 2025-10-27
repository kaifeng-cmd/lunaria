<script setup lang="ts">
import { ref, computed } from 'vue';
import { Star, Quote, ThumbsUp, Users, Award } from 'lucide-vue-next';
import light from '@/assets/images/illustrations/light.png';
import { Button } from '@/components/ui/button';
import type { Component } from 'vue';
import type { Rating } from '@/types/rating';

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: Rating;
  title: string;
  content: string;
  date: Date;
  verified: boolean;
  helpful: number;
}

interface Stat {
  label: string;
  value: string;
  icon: Component;
}

const showAll = ref<boolean>(false);
const backgroundImage = ref<string>(light);

const reviews: Review[] = [
  {
    id: 1,
    name: 'Thabo Lebo Khumalo',
    role: 'CEO',
    company: 'Chipo Moyo',
    avatar: '👨🏿‍🔧',
    rating: 5,
    title: 'Best decision for our bookstore',
    content:
      'Switching to this platform was the best decision we made. Sales increased by 40% in the first month, and customer engagement has never been better. The analytics dashboard is incredibly helpful.',
    date: new Date('2025-10-26'),
    verified: true,
    helpful: 124,
  },
  {
    id: 2,
    name: 'Nurul Izza binti Latif',
    role: 'Manager',
    company: 'FrozLit Sdn. Bhd.',
    avatar: '🧕🏼',
    rating: 5,
    title: 'Incredible support team',
    content:
      'The customer support is outstanding. They helped us migrate our entire inventory in just 2 days. The platform is intuitive and our staff learned it quickly. Highly recommend!',
    date: new Date('2025-08-11'),
    verified: true,
    helpful: 58,
  },
  {
    id: 3,
    name: 'Soo Suet Ling',
    role: 'Founder',
    company: 'Bookworm Paradise',
    avatar: '👩‍🎨',
    rating: 5,
    title: 'Game changer for small businesses',
    content:
      'As a small independent bookstore, we needed something affordable yet powerful. This platform delivered on both fronts. The free plan was perfect to start, and upgrading was seamless.',
    date: new Date('2025-04-15'),
    verified: true,
    helpful: 31,
  },
  {
    id: 4,
    name: 'Vikram Rajesh Nair',
    role: 'Owner',
    company: 'Novel Ideas',
    avatar: '👨🏽‍🌾',
    rating: 5,
    title: 'Perfect for growing bookstores',
    content:
      'We started with 50 books and now have over 1,200. The platform scaled effortlessly with our growth. Inventory management is a breeze, and the UI design is intuitive.',
    date: new Date('2024-09-28'),
    verified: true,
    helpful: 22,
  },
  {
    id: 5,
    name: 'Ricard Thompson',
    role: 'Director',
    company: 'UUM Century Bookshop',
    avatar: '👨‍🏫',
    rating: 3,
    title: 'Great for academic bookstores',
    content:
      'The bulk import feature saved us countless hours. Being able to organize books by subject and semester is perfect for our university bookstore. Only minor wish is for more customization options.',
    date: new Date('2024-09-19'),
    verified: true,
    helpful: 15,
  },
  {
    id: 6,
    name: 'James Walker',
    role: 'CFO',
    company: 'Mystery & More',
    avatar: '👨🏻‍🦱',
    rating: 4,
    title: 'The analytics are phenomenal',
    content:
      'Understanding statistics through the analytics dashboard has transformed how we stock our inventory. We can now understand sales trends and order well. ROI has been incredible.',
    date: new Date('2024-06-15'),
    verified: true,
    helpful: 27,
  },
  {
    id: 7,
    name: 'Amanda Moore',
    role: 'Co-Founder',
    company: 'Literary Haven',
    avatar: '👩‍💼',
    rating: 5,
    title: 'Seamless integration with our workflow',
    content:
      'The platform so far integrated perfectly with our existing business operations. The documentation is clear. Our checkout process is now 2x faster.',
    date: new Date('2024-05-28'),
    verified: true,
    helpful: 19,
  },
  {
    id: 8,
    name: 'Lay Martinez',
    role: 'Manager',
    company: 'Oan Lyson Sdn. Bhd.',
    avatar: '🦸‍♂️',
    rating: 4,
    title: 'Excellent value for money',
    content:
      'For the price we pay, the features are outstanding. We tried three other platforms before this, and none came close in terms of value. The Pro plan is worth every penny.',
    date: new Date('2024-03-01'),
    verified: true,
    helpful: 25,
  },
  {
    id: 9,
    name: 'Sophie Sanders',
    role: 'Owner',
    company: 'SS Book Corner',
    avatar: '🤹🏻‍♀️',
    rating: 5,
    title: 'Customer experience is top-notch',
    content:
      "Our customers love the new shopping experience. The search functionality is fast and accurate, and the app is beautiful. We've seen a 30% increase in the orders.",
    date: new Date('2023-12-22'),
    verified: true,
    helpful: 33,
  },
];

const displayedReviews = computed(() => {
  return showAll.value ? reviews : reviews.slice(0, 6);
});

const stats: Stat[] = [
  { label: 'Average Rating', value: '4.7/5', icon: Star },
  { label: 'Total Reviews', value: '1,341', icon: Users },
  { label: 'Verified Users', value: '98%', icon: Award },
  { label: 'Would Recommend', value: '92.7%', icon: ThumbsUp },
];
</script>

<template>
  <div class="pt-16 min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
    <!-- First Section with Image Background -->
    <div
      class="relative py-14 bg-cover bg-center bg-no-repeat"
      :style="backgroundImage ? `background-image: url('${backgroundImage}')` : ''"
    >
      <!-- Overlay for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6"
        >
          <Star class="w-4 h-4 mr-2 fill-current" />
          Trusted by Thousands
        </div>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          style="
            text-shadow:
              2px 2px 4px rgba(0, 0, 0, 0.2),
              4px 4px 6px rgba(0, 0, 0, 0.3);
          "
        >
          What Our Customers Say
        </h1>
        <p
          class="text-xl text-purple-100 max-w-xl mx-auto mb-8 font-medium"
          style="
            text-shadow:
              2px 2px 4px rgba(0, 0, 0, 0.3),
              4px 4px 6px rgba(0, 0, 0, 0.4);
          "
        >
          Want the inside scoop? Here's what bookstore owners across the world are saying about us.
        </p>

        <!-- Statistics -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <component :is="stat.icon" class="w-8 h-8 text-white mx-auto mb-2" />
            <div class="text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
            <div class="text-sm text-purple-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reviews Posts -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="review in displayedReviews"
          :key="review.id"
          class="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-pink-300 hover:border-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Header -->
          <div class="flex items-start justify-between mb-6">
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
            <Quote class="w-8 h-8 text-pink-400 fill-current" />
          </div>

          <!-- Rating Stars -->
          <div class="flex items-center gap-1 mb-3">
            <Star
              v-for="i in 5"
              :key="i"
              class="w-5 h-5"
              :class="
                i <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'
              "
            />
          </div>

          <!-- Content -->
          <h4 class="font-semibold text-gray-900 mb-2">{{ review.title }}</h4>
          <p class="text-gray-600 mb-4 leading-relaxed line-clamp-4 text-justify">
            {{ review.content }}
          </p>

          <!-- Footer -->
          <div class="flex items-center justify-between pt-4 border-t border-gray-200">
            <span class="text-sm text-gray-700">{{ review.date.toLocaleDateString() }}</span>
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
      <div v-if="!showAll" class="text-center mt-12">
        <Button
          variant="outline"
          size="lg"
          class="border-2 text-pink-500 border-pink-400 hover:bg-pink-100 hover:text-pink-500 hover:scale-105 transition-transform duration-200"
          @click="showAll = true"
        >
          Load More Reviews ({{ reviews.length - 6 }} more)
        </Button>
      </div>
    </div>

    <!-- Trust Badges -->
    <div class="py-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-pink-100 to-purple-300 rounded-3xl py-10 px-6 sm:px-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-purple-900 mb-4">Trusted by Industry Leaders</h2>
            <p class="text-xl text-gray-600">
              Featured in leading publications and recognized by industry experts.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              class="flex items-center justify-center bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
            >
              <div class="text-3xl">📰</div>
              <span class="ml-3 text-xl font-bold text-gray-700">TechCrunch</span>
            </div>
            <div
              class="flex items-center justify-center bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
            >
              <div class="text-3xl">🏆</div>
              <span class="ml-3 text-xl font-bold text-gray-700">Best SaaS 2024 (MY)</span>
            </div>
            <div
              class="flex items-center justify-center bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
            >
              <div class="text-3xl">🦄</div>
              <span class="ml-3 text-xl font-bold text-gray-700">GRC CEO</span>
            </div>
            <div
              class="flex items-center justify-center bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
            >
              <div class="text-3xl">💎</div>
              <span class="ml-3 text-xl font-bold text-gray-700">Capterra</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-14">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Join These Happy Customers
        </h2>
        <p class="text-xl text-gray-600 mb-10">
          Start your free trial today and see why they love our platform.
        </p>
        <Button
          size="lg"
          class="bg-gradient-to-r from-pink-300 to-purple-600 text-white px-6 hover:scale-105 transition-transform duration-200"
        >
          Start Free Trial
        </Button>
      </div>
    </div>
  </div>
</template>
