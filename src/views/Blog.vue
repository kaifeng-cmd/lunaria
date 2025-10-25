<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button } from '@/components/ui/button';
import featured from '@/assets/images/illustrations/featuredPOST.png';
import { TestTubeDiagonal, Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-vue-next';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: Date;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  image: string;
}

const searchQuery = ref<string>('');

const posts: BlogPost[] = [
  {
    id: 1,
    title: '10 Ways to Boost Your Bookstore Sales This Holiday Season',
    excerpt:
      "Dreading the holiday chaos? This year, let's turn that stress into success. We break down the ten most effective, stress-free methods for driving serious sales, covering everything from unique gift-wrapping services and curated gift bundles to leveraging social media buzz, ensuring you can relax and watch your revenue soar.",
    author: 'Lavender Cristina',
    authorAvatar: '👰🏻‍♀️',
    date: new Date('2025-10-15 13:30'),
    readTime: '20 mins read',
    category: 'Tips & Guides',
    tags: ['Marketing', 'Sales', 'Holiday'],
    featured: true,
    image: featured,
  },
  {
    id: 2,
    title: 'Introducing Advanced Analytics Dashboard',
    excerpt:
      'Get deeper insights into your business with our new analytics tools. Track sales, inventory, and customer behavior in real-time.',
    author: 'Oluwaseun Adesanya',
    authorAvatar: '🙋🏿‍♂️',
    date: new Date('2024-10-12'),
    readTime: '7 mins read',
    category: 'Product Updates',
    tags: ['Features', 'Business Analytics'],
    image: 'Analytics',
  },
  {
    id: 3,
    title: 'How The Book Nook Increased Sales by 90% in 6 Months',
    excerpt:
      'A case study on how one independent bookstore transformed their business using our platform.',
    author: 'Kelly Morris',
    authorAvatar: '💃🏻',
    date: new Date('2025-11-10'),
    readTime: '22 mins read',
    category: 'Success Stories',
    tags: ['Case Study', 'Growth'],
    image: '💰',
  },
  {
    id: 4,
    title: 'SEO Best Practices for Online Bookstores',
    excerpt:
      'Learn how to optimize your bookstore for search engines and attract more organic traffic.',
    author: 'Karl Robertson',
    authorAvatar: '🧙🏼‍♂️',
    date: new Date('2023-09-08'),
    readTime: '10 mins read',
    category: 'Tips & Guides',
    tags: ['SEO', 'Marketing', 'Boost Your Sales'],
    image: '🔍',
  },
  {
    id: 5,
    title: 'New Payment Options: Buy Now, Pay Later',
    excerpt:
      "We've partnered with leading BNPL providers to give your customers more flexible payment options.",
    author: 'Ren Kobayashi',
    authorAvatar: '🥷🏻',
    date: new Date('2024-02-05'),
    readTime: '14 mins read',
    category: 'Product Updates',
    tags: ['Features', 'Payments', 'User Experience'],
    image: '💳',
  },
  {
    id: 6,
    title: 'Building a Loyal Community Around Your Bookstore',
    excerpt:
      'Strategies for creating meaningful and strong connections with your customers and keeping them coming back.',
    author: 'Emily Clark',
    authorAvatar: '👩‍💻',
    date: new Date('2022-10-01'),
    readTime: '9 mins read',
    category: 'Tips & Guides',
    tags: ['Community', 'Engagement'],
    image: '❤️',
  },
];

// Featured post
const featuredPost = posts.find((post) => post.featured);

// Filter posts based on search query (exclude featured post)
const filteredPosts = computed(() => {
  const regularPosts = posts.filter((post) => !post.featured);

  if (!searchQuery.value.trim()) {
    return regularPosts;
  }

  const query = searchQuery.value.toLowerCase();
  return regularPosts.filter((post) => post.title.toLowerCase().includes(query));
});
</script>

<template>
  <div class="pt-16 min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
    <!-- First Section -->
    <div class="bg-gradient-to-r from-[#F39F9F] to-purple-900 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6"
        >
          <TestTubeDiagonal class="w-4 h-4 mr-2" />
          Latest Insights
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Blog & Resources</h1>
        <p class="text-xl text-white max-w-2xl mx-auto leading-tight mb-6">
          Tips, guides, and updates from the experts to help you grow your online bookstore.
        </p>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto mt-8">
          <div class="relative">
            <Search
              class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search articles..."
              class="w-full pl-12 pr-4 py-4 rounded-full border-0 shadow-xl focus:ring-2 focus:ring-pink-200 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Post -->
    <div v-if="featuredPost" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div
        class="bg-gradient-to-r from-[#fc8787] to-[#FFECC0] rounded-3xl overflow-hidden shadow-2xl"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Content -->
          <div class="p-8 md:p-12 text-white flex flex-col justify-center">
            <div class="inline-flex items-center text-lg text-red-900 font-medium mb-4 opacity-90">
              <Tag class="w-6 h-6 mr-2 text-red-900" />
              Featured Post
            </div>
            <h2
              class="text-3xl md:text-4xl font-bold mb-4"
              style="
                text-shadow:
                  2px 2px 4px rgba(0, 0, 0, 0.1),
                  4px 4px 6px rgba(0, 0, 0, 0.2);
              "
            >
              {{ featuredPost.title }}
            </h2>
            <p class="text-lg text-red-700 mb-6 text-justify bg-white/20 p-4 rounded-lg">
              {{ featuredPost.excerpt }}
            </p>

            <div class="flex items-center gap-4 mb-6 text-gray-800/80 font-medium">
              <div class="flex items-center gap-2">
                <span class="text-3xl">{{ featuredPost.authorAvatar }}</span>
                <span class="text-sm">{{ featuredPost.author }}</span>
              </div>
              <div class="flex items-center gap-4 text-sm">
                <span class="flex items-center gap-2">
                  <Calendar class="w-4 h-4" />
                  {{ featuredPost.date }}
                </span>
                <span class="flex items-center gap-2">
                  <Clock class="w-4 h-4" />
                  {{ featuredPost.readTime }}
                </span>
              </div>
            </div>

            <Button
              size="lg"
              class="bg-white text-red-600 hover:bg-gray-200 hover:scale-105 transition-all duration-200 w-fit"
            >
              Read Article
              <ArrowRight class="w-4 h-4 ml-2" />
            </Button>
          </div>

          <!-- Image -->
          <div class="flex items-center justify-center p-8 bg-white/10 backdrop-blur-sm">
            <img
              :src="featuredPost.image"
              :alt="featuredPost.title"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Posts Cards -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <!-- Search Results Info -->
      <div v-if="searchQuery" class="text-center mb-8">
        <p class="text-gray-600">
          Found
          <span class="text-lg font-bold text-purple-500">{{ filteredPosts.length }}</span>
          article<span v-if="filteredPosts.length > 1">s</span> matching "<span class="font-bold">{{
            searchQuery
          }}</span
          >"
        </p>
      </div>

      <!-- If Else Condition -->
      <!-- No Results -->
      <div v-if="filteredPosts.length === 0" class="text-center py-20">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">No articles found...</h3>
        <p class="text-gray-600">Try searching with different keywords.</p>
      </div>

      <!-- Posts Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          class="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-pink-500 hover:border-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <!-- Act-like Image (just string emoji) -->
          <div
            class="h-48 bg-gradient-to-br from-orange-200 to-pink-400 flex items-center justify-center text-6xl"
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
            <p class="text-gray-600 mb-4 line-clamp-2">{{ post.excerpt }}</p>

            <!-- Meta -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-200">
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
    </div>

    <!-- Help Section -->
    <div class="py-14">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 text-center"
        >
          <div class="text-6xl mb-6">💬</div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Our support team is here to help you with any questions.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href="contact"
              size="lg"
              class="bg-gradient-to-r from-[#df7cd8] to-purple-800 text-white hover:opacity-90 px-6 hover:scale-105 transition-all duration-200"
            >
              Contact Support
            </Button>
            <Button
              variant="outline"
              size="lg"
              class="border-2 border-purple-300 bg-white px-6 hover:scale-105 transition-all duration-200"
            >
              Browse Help Center
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="bg-pink-700/80 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
        <p class="text-lg text-white mb-8">
          Get the latest tips, updates, and exclusive content delivered to your mail inbox.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-6 py-2 rounded-full border-0 shadow-xl focus:ring-2 focus:ring-white focus:outline-none"
          />
          <Button
            size="lg"
            class="bg-white text-purple-700 hover:bg-gray-200 font-semibold px-6 hover:scale-105 transition-all duration-200"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
