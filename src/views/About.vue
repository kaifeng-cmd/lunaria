<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Heart, Target, Telescope, Users, BookOpenText, Route } from 'lucide-vue-next';
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
  year: number;
  title: string;
  description: string;
}

interface Stats {
  value: string;
  label: string;
}

const values: Value[] = [
  {
    icon: Heart,
    title: 'Customer First',
    description:
      'Every decision we make starts with asking: "How does this help our customers succeed?"',
  },
  {
    icon: Telescope,
    title: 'Innovation',
    description:
      'We constantly push the boundaries to deliver cutting-edge solutions for modern bookstores.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'We believe in building strong relationships and supporting independent bookstores worldwide.',
  },
  {
    icon: BookOpenText,
    title: 'Knowledge',
    description: 'We appreciate books and the people who sell them. Their success is our success.',
  },
];

const team: TeamMember[] = [
  {
    name: 'Nick Richardson',
    role: 'Founder & CEO',
    avatar: '🧝🏼',
    bio: 'Former bookstore owner with more than 15 years of retail experience. Passionate about helping bookstore owners thrive.',
  },
  {
    name: 'Ren Kobayashi',
    role: 'Head of Product',
    avatar: '🥷🏻',
    bio: 'Product designer who believes technology should be beautiful and intuitive. Expert in Adobe Illustrator and Figma.',
  },
  {
    name: 'Kavitha a/p Raj',
    role: 'Lead Engineer',
    avatar: '👩🏽‍🎤',
    bio: 'Full-stack developer who is proficient in TypeScript, Vue.js, and Node.js. Built systems serving millions of users.',
  },
  {
    name: 'Nur Aisyah bt. Hassan',
    role: 'Customer Success Manager',
    avatar: '🧕🏼',
    bio: 'Dedicated to ensuring everyone has an amazing customer experience. Available 24/7 to help you succeed in your business.',
  },
];

const milestones: Milestone[] = [
  {
    year: 2022,
    title: 'The Beginning',
    description: 'Started with a simple idea: make it easier for bookstore owners to sell online.',
  },
  {
    year: 2023,
    title: 'First 100 Customers',
    description:
      'Reached our first major milestone and learned invaluable lessons from early adopters.',
  },
  {
    year: 2024,
    title: 'Series A Funding',
    description:
      'Raised around RM 1.65 Million to accelerate product development and expand our team.',
  },
  {
    year: 2025,
    title: 'Global Expansion',
    description: 'Now serving over 1,000 bookstores across 12 countries. Just getting started!',
  },
];

const stats: Stats[] = [
  { value: '1,000+', label: 'Active Bookstores' },
  { value: '10+', label: 'Countries' },
  { value: '3.6 M+', label: 'Processed Sales (MYR)' },
  { value: '4.7/5', label: 'Customer Rating' },
];
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-100">
    <!-- First Section -->
    <div class="bg-gradient-to-r from-[#f3d8d8] to-purple-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6"
        >
          <Route class="w-4 h-4 mr-2" />
          Our Story
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Simple, Elegant, and Powerful.
        </h1>
        <p class="text-xl text-white max-w-3xl mx-auto mb-6 leading-tight">
          We're on a mission to help independent bookstore owners compete in the digital age while
          preserving what makes them special.
        </p>
      </div>
    </div>

    <!-- Statistics Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-100"
      >
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-pink-500 mb-2">{{ stat.value }}</div>
          <div class="text-sm text-gray-700">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <div
            class="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-4"
          >
            <Target class="w-4 h-4 mr-2" />
            Our Mission
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Making Online Selling Simple for
            <span class="bg-gradient-to-r from-[#f09898] to-pink-600 bg-clip-text text-transparent"
              >Everyone</span
            >
          </h2>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
            We started because we saw talented, passionate bookstore owners struggling with
            complicated, expensive e-commerce platforms that weren't built for their needs.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed text-justify">
            Today, we're proud to serve thousands of independent bookstores around the world,
            helping them reach more customers while focusing on what they do best: curating amazing
            books and building community.
          </p>
        </div>
        <div class="relative">
          <img
            src="@/assets/images/illustrations/bookstore.png"
            alt="Bookstore"
            class="aspect-square object-contain rounded-full w-full h-full"
          />
        </div>
      </div>
    </div>

    <!-- Core Values Section -->
    <div class="bg-pink-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Our Core Values</h2>
          <p class="text-xl font-medium text-gray-500">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="bg-white rounded-2xl p-8 hover:border-4 hover:border-pink-300 hover:shadow-xl mb-4 transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#f4acac] to-pink-500 rounded-full mb-4"
            >
              <component :is="value.icon" class="w-7 h-7 text-white" />
            </div>
            <h3 class="text-xl font-bold text-pink-700 mb-3">{{ value.title }}</h3>
            <p class="text-gray-800 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline Section -->
    <div class="py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our
            <span class="bg-gradient-to-r from-[#f09898] to-pink-600 bg-clip-text text-transparent"
              >Journey</span
            >
          </h2>
          <p class="text-xl text-gray-600">From idea to global platform.</p>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-700 hidden md:block"
          ></div>

          <div class="space-y-10">
            <div
              v-for="(milestone, index) in milestones"
              :key="milestone.year"
              class="relative flex"
              :class="index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'"
            >
              <!-- Card Container -->
              <div
                class="w-full md:w-5/12 bg-white rounded-xl p-6 border-4 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all"
              >
                <div
                  class="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#f09898] to-pink-600 text-white font-bold text-sm mb-3"
                >
                  {{ milestone.year }}
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ milestone.title }}</h3>
                <p class="text-gray-700">{{ milestone.description }}</p>
              </div>

              <!-- Center Space with Timeline Dot -->
              <div class="hidden md:flex md:w-2/12 items-start justify-center pt-6 relative">
                <div class="w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              <!-- Empty Space (for alternating layout) -->
              <div class="hidden md:block md:w-5/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="bg-gradient-to-b from-gray-50 to-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our
            <span class="bg-gradient-to-r from-[#f09898] to-pink-600 bg-clip-text text-transparent"
              >Team</span
            >
          </h2>
          <p class="text-xl text-gray-600">
            We are a team of innovators shaping the next chapter of bookstore eCommerce.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-4 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
          >
            <div class="text-6xl mb-4">{{ member.avatar }}</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ member.name }}</h3>
            <div
              class="text-sm text-pink-600 font-medium mb-4 px-3 py-1 bg-pink-50 rounded-full inline-block"
            >
              {{ member.role }}
            </div>
            <p class="text-sm text-gray-700 leading-relaxed">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Hiring Section -->
    <div class="bg-gradient-to-br from-yellow-300/50 to-orange-300 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Join Us on This Journey</h2>
        <p class="text-xl text-gray-700 font-medium mb-8">
          Be part of the movement supporting independent bookstores worldwide.
        </p>
        <div class="justify-center">
          <Button
            variant="outline"
            size="lg"
            class="text-lg px-4 py-2 border-gray-700 border-2 bg-transparent text-gray-700 hover:text-gray-700 hover:bg-transparent hover:scale-105 transition-all duration-200"
          >
            We're Hiring. Join Us
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
