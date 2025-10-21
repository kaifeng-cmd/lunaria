<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-vue-next';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  image: string;
}

interface Category {
  name: string;
  count: number;
}

const selectedCategory = ref<string>('all');
const searchQuery = ref<string>('');

const categories: Category[] = [
  { name: 'All Posts', count: 24 },
  { name: 'Product Updates', count: 8 },
  { name: 'Tips & Guides', count: 10 },
  { name: 'Success Stories', count: 6 },
];

const posts: BlogPost[] = [
  {
    id: 1,
    title: '10 Ways to Boost Your Bookstore Sales This Holiday Season',
    excerpt:
      'Discover proven strategies to maximize your revenue during the busiest shopping season of the year.',
    author: 'Sarah Chen',
    authorAvatar: '👩‍💻',
    date: '2024-10-15',
    readTime: '8 min read',
    category: 'Tips & Guides',
    tags: ['Marketing', 'Sales', 'Holiday'],
    featured: true,
    image: '🎄',
  },
  {
    id: 2,
    title: 'Introducing Advanced Analytics Dashboard',
    excerpt:
      'Get deeper insights into your business with our new analytics tools. Track sales, inventory, and customer behavior in real-time.',
    author: 'Marcus Thompson',
    authorAvatar: '👨‍🔬',
    date: '2024-10-12',
    readTime: '5 min read',
    category: 'Product Updates',
    tags: ['Features', 'Analytics'],
    image: '📊',
  },
  {
    id: 3,
    title: 'How The Book Nook Increased Sales by 300% in 6 Months',
    excerpt:
      'A case study on how one independent bookstore transformed their business using our platform.',
    author: 'Emily Park',
    authorAvatar: '👩‍💼',
    date: '2024-10-10',
    readTime: '12 min read',
    category: 'Success Stories',
    tags: ['Case Study', 'Growth'],
    image: '📈',
  },
  {
    id: 4,
    title: 'SEO Best Practices for Online Bookstores',
    excerpt:
      'Learn how to optimize your bookstore for search engines and attract more organic traffic.',
    author: 'Alex Rivera',
    authorAvatar: '👨‍💼',
    date: '2024-10-08',
    readTime: '10 min read',
    category: 'Tips & Guides',
    tags: ['SEO', 'Marketing'],
    image: '🔍',
  },
  {
    id: 5,
    title: 'New Payment Options: Buy Now, Pay Later',
    excerpt:
      "We've partnered with leading BNPL providers to give your customers more flexible payment options.",
    author: 'Sarah Chen',
    authorAvatar: '👩‍💻',
    date: '2024-10-05',
    readTime: '4 min read',
    category: 'Product Updates',
    tags: ['Features', 'Payments'],
    image: '💳',
  },
  {
    id: 6,
    title: 'Building a Loyal Community Around Your Bookstore',
    excerpt:
      'Strategies for creating meaningful connections with your customers and keeping them coming back.',
    author: 'Emily Park',
    authorAvatar: '👩‍💼',
    date: '2024-10-01',
    readTime: '7 min read',
    category: 'Tips & Guides',
    tags: ['Community', 'Engagement'],
    image: '❤️',
  },
];

const featuredPost = posts.find((post) => post.featured);
const regularPosts = posts.filter((post) => !post.featured);
</script>

<template>
  <div class="pt-16 min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6"
        >
          <BookOpen class="w-4 h-4 mr-2" />
          Latest Insights
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Blog & Resources</h1>
        <p class="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
          Tips, guides, and updates to help you grow your online bookstore
        </p>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto mt-8">
          <div class="relative">
            <Search
              class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search articles..."
              class="w-full pl-12 pr-4 py-4 rounded-full border-0 shadow-xl focus:ring-2 focus:ring-pink-300 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-wrap justify-center gap-3">
        <Button
          v-for="category in categories"
          :key="category.name"
          :variant="selectedCategory === category.name ? 'default' : 'outline'"
          class="transition-all"
          :class="
            selectedCategory === category.name
              ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
              : 'hover:border-pink-300'
          "
          @click="selectedCategory = category.name"
        >
          {{ category.name }}
          <span class="ml-2 opacity-70">({{ category.count }})</span>
        </Button>
      </div>
    </div>

    <!-- Featured Post -->
    <div v-if="featuredPost" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div
        class="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl overflow-hidden shadow-2xl"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Content -->
          <div class="p-8 md:p-12 text-white flex flex-col justify-center">
            <div class="inline-flex items-center text-sm font-medium mb-4 opacity-90">
              <Tag class="w-4 h-4 mr-2" />
              Featured Post
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ featuredPost.title }}</h2>
            <p class="text-lg text-purple-100 mb-6">{{ featuredPost.excerpt }}</p>

            <div class="flex items-center gap-4 mb-6">
              <div class="flex items-center gap-2">
                <span class="text-2xl">{{ featuredPost.authorAvatar }}</span>
                <span class="text-sm">{{ featuredPost.author }}</span>
              </div>
              <div class="flex items-center gap-4 text-sm text-purple-100">
                <span class="flex items-center gap-1">
                  <Calendar class="w-4 h-4" />
                  {{ featuredPost.date }}
                </span>
                <span class="flex items-center gap-1">
                  <Clock class="w-4 h-4" />
                  {{ featuredPost.readTime }}
                </span>
              </div>
            </div>

            <Button size="lg" class="bg-white text-purple-600 hover:bg-gray-100 w-fit">
              Read Article
              <ArrowRight class="w-4 h-4 ml-2" />
            </Button>
          </div>

          <!-- Image -->
          <div class="flex items-center justify-center text-9xl p-12 bg-white/10 backdrop-blur-sm">
            {{ featuredPost.image }}
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in regularPosts"
          :key="post.id"
          class="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <!-- Image -->
          <div
            class="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-6xl"
          >
            {{ post.image }}
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Category Badge -->
            <div
              class="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-medium mb-3"
            >
              {{ post.category }}
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{{ post.title }}</h3>

            <!-- Excerpt -->
            <p class="text-gray-600 mb-4 line-clamp-3">{{ post.excerpt }}</p>

            <!-- Meta -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div class="flex items-center gap-2">
                <span class="text-xl">{{ post.authorAvatar }}</span>
                <span class="text-sm text-gray-700">{{ post.author }}</span>
              </div>
              <span class="text-sm text-gray-500">{{ post.readTime }}</span>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Load More -->
      <div class="text-center mt-12">
        <Button variant="outline" size="lg" class="border-2 border-pink-300 hover:bg-pink-50">
          Load More Articles
        </Button>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="bg-gradient-to-r from-purple-600 to-pink-500 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
        <p class="text-xl text-purple-100 mb-8">
          Get the latest tips, updates, and exclusive content delivered to your inbox
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-6 py-4 rounded-full border-0 shadow-xl focus:ring-2 focus:ring-white focus:outline-none"
          />
          <Button size="lg" class="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
