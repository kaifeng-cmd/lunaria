<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Heart, Target, Zap, Users, BookOpen, Sparkles } from 'lucide-vue-next';
import type { Component } from 'vue';

interface Value {
  icon: Component;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Heart,
    title: 'Customer First',
    description:
      'Every decision we make starts with asking: how does this help our customers succeed?',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'We constantly push boundaries to deliver cutting-edge solutions for modern bookstores.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'We believe in building strong relationships and supporting independent bookstores worldwide.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge',
    description: 'We love books and the people who sell them. Their success is our success.',
  },
];

const team: TeamMember[] = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    avatar: '👨‍💼',
    bio: 'Former bookstore owner with 15 years of retail experience. Passionate about helping independent bookstores thrive.',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Product',
    avatar: '👩‍💻',
    bio: 'Product designer who believes technology should be beautiful and intuitive. Previously at Shopify and Square.',
  },
  {
    name: 'Marcus Thompson',
    role: 'Lead Engineer',
    avatar: '👨‍🔬',
    bio: 'Full-stack developer obsessed with performance and scalability. Built systems serving millions of users.',
  },
  {
    name: 'Emily Park',
    role: 'Customer Success',
    avatar: '👩‍💼',
    bio: 'Dedicated to ensuring every customer has an amazing experience. Available 24/7 to help you succeed.',
  },
];

const milestones: Milestone[] = [
  {
    year: '2022',
    title: 'The Beginning',
    description:
      'Started with a simple idea: make it easier for independent bookstores to sell online.',
  },
  {
    year: '2023',
    title: 'First 100 Customers',
    description:
      'Reached our first major milestone and learned invaluable lessons from early adopters.',
  },
  {
    year: '2024',
    title: 'Series A Funding',
    description: 'Raised $10M to accelerate product development and expand our team.',
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Now serving over 5,000 bookstores across 50 countries. Just getting started!',
  },
];

const stats = [
  { value: '5,000+', label: 'Active Bookstores' },
  { value: '50+', label: 'Countries' },
  { value: '$100M+', label: 'Processed Sales' },
  { value: '4.9/5', label: 'Customer Rating' },
];
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
          Our Story
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Empowering Bookstores Worldwide
        </h1>
        <p class="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
          We're on a mission to help independent bookstores compete in the digital age while
          preserving what makes them special.
        </p>
      </div>
    </div>

    <!-- Stats -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-2xl p-8 border-2 border-pink-100"
      >
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{{ stat.value }}</div>
          <div class="text-sm text-gray-600">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div
            class="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-4"
          >
            <Target class="w-4 h-4 mr-2" />
            Our Mission
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Making Online Selling Simple for Bookstores
          </h2>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">
            We started because we saw talented, passionate bookstore owners struggling with
            complicated, expensive e-commerce platforms that weren't built for their needs.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Today, we're proud to serve thousands of independent bookstores around the world,
            helping them reach more customers while focusing on what they do best: curating amazing
            books and building community.
          </p>
        </div>
        <div class="relative">
          <div
            class="aspect-square bg-gradient-to-br from-pink-400 to-purple-600 rounded-3xl"
          ></div>
          <div
            class="absolute inset-0 flex items-center justify-center text-white text-9xl opacity-20"
          >
            📚
          </div>
        </div>
      </div>
    </div>

    <!-- Values Section -->
    <div class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p class="text-xl text-gray-600">The principles that guide everything we do</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl mb-6"
            >
              <component :is="value.icon" class="w-7 h-7 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline Section -->
    <div class="py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p class="text-xl text-gray-600">From idea to global platform</p>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-600 hidden md:block"
          ></div>

          <div class="space-y-12">
            <div
              v-for="(milestone, index) in milestones"
              :key="milestone.year"
              class="relative"
              :class="index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'"
            >
              <div
                class="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all"
                :class="index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'"
              >
                <div
                  class="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm mb-3"
                >
                  {{ milestone.year }}
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ milestone.title }}</h3>
                <p class="text-gray-600">{{ milestone.description }}</p>
              </div>

              <!-- Timeline Dot -->
              <div
                class="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-lg hidden md:block"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="bg-gradient-to-b from-gray-50 to-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p class="text-xl text-gray-600">
            The passionate people building the future of online bookselling
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
          >
            <div class="text-6xl mb-4">{{ member.avatar }}</div>
            <h3 class="text-xl font-bold text-gray-900 mb-1">{{ member.name }}</h3>
            <div
              class="text-sm text-pink-600 font-medium mb-4 px-3 py-1 bg-pink-50 rounded-full inline-block"
            >
              {{ member.role }}
            </div>
            <p class="text-sm text-gray-600 leading-relaxed">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gradient-to-r from-pink-500 to-purple-600 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Join Us on This Journey</h2>
        <p class="text-xl text-pink-100 mb-8">
          Be part of the movement supporting independent bookstores worldwide
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
            Start Your Free Trial
          </Button>
          <Button
            variant="outline"
            size="lg"
            class="border-2 border-white text-white hover:bg-white/10 px-8"
          >
            We're Hiring!
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
