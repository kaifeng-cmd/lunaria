<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  ShoppingCart,
  Package,
  CheckCircle,
  User,
  BarChart3,
  Upload,
  Sparkles,
} from 'lucide-vue-next';
import type { Component } from 'vue';
import {
  Stepper,
  StepperItem,
  StepperDescription,
  StepperIndicator,
  StepperTitle,
  StepperTrigger,
  StepperSeparator,
} from '@/components/ui/stepper';

type ViewType = 'seller' | 'customer';

interface Step {
  step: number;
  title: string;
  description: string;
  icon: Component;
}

const currentView = ref<ViewType>('seller');

// Seller Journey - How to set up and grow bookstore
const sellerSteps: Step[] = [
  {
    step: 1,
    title: 'Register your Store',
    description: 'Create a free account in seconds with email, Google, or Facebook.',
    icon: User,
  },
  {
    step: 2,
    title: 'Upload your Books',
    description: 'Bulk import your catalog or add books 1 by 1 with our simple interface.',
    icon: Upload,
  },
  {
    step: 3,
    title: 'Manage Everything',
    description: 'Real-time analytics, inventory management & instant order notification.',
    icon: BarChart3,
  },
  {
    step: 4,
    title: 'Scale your Business',
    description: 'From indie bookstore to multi-seller marketplace — grow without limits.',
    icon: Sparkles,
  },
];

// Customer Journey - How to browse and buy books
const customerSteps: Step[] = [
  {
    step: 1,
    title: 'Browse Books',
    description: 'Explore millions of books with smart filters.',
    icon: BookOpen,
  },
  {
    step: 2,
    title: 'Add to Cart',
    description: 'Save your favorite books and review your selections.',
    icon: ShoppingCart,
  },
  {
    step: 3,
    title: 'Secure Checkout',
    description: 'Fast, secure payment with multiple options and buyer protection.',
    icon: CheckCircle,
  },
  {
    step: 4,
    title: 'Receive & Enjoy',
    description: 'Track your order status and receive your books with guaranteed satisfaction.',
    icon: Package,
  },
];

const steps = ref<Step[]>(sellerSteps);

const switchView = (view: ViewType) => {
  currentView.value = view;
  steps.value = view === 'seller' ? sellerSteps : customerSteps;
};
</script>

<template>
  <section
    class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E7F2EF] via-[#fddede] to-white"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Simple Steps to
          <span class="bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent">
            Use.
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Whether you're a seller launching your bookstore or a user discovering new books, our
          platform makes it easy.
        </p>

        <div class="flex justify-center mb-12">
          <Button
            variant="outline"
            :class="[
              'px-6 py-3 rounded-sm font-semibold transition-all duration-300',
              currentView === 'seller'
                ? 'border-2 border-white/20 text-gray-800 bg-white/30 backdrop-blur-md hover:border-blue-700/40 hover:animate-pulse shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
            ]"
            @click="switchView('seller')"
          >
            For Sellers
          </Button>
          <Button
            variant="outline"
            :class="[
              'px-6 py-3 rounded-sm font-semibold transition-all duration-300',
              currentView === 'customer'
                ? 'border-2 border-white/20 text-gray-800 bg-white/30 backdrop-blur-md hover:border-pink-700/40 hover:animate-pulse shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
            ]"
            @click="switchView('customer')"
          >
            For Users
          </Button>
        </div>
      </div>

      <div class="bg-white/80 rounded-2xl p-8 border border-gray-200">
        <Stepper class="flex gap-4 w-full">
          <template v-for="(item, index) in steps" :key="item.step">
            <StepperItem class="flex-1 group" :step="item.step">
              <StepperTrigger class="w-full">
                <div class="flex flex-col items-start gap-2 w-full">
                  <StepperIndicator
                    class="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                  >
                    <component :is="item.icon" class="w-6 h-6" />
                  </StepperIndicator>

                  <div class="text-left">
                    <StepperTitle class="text-lg font-semibold text-gray-800">
                      {{ item.title }}
                    </StepperTitle>
                    <StepperDescription class="text-sm text-gray-600 mt-1">
                      {{ item.description }}
                    </StepperDescription>
                  </div>
                </div>
              </StepperTrigger>

              <StepperSeparator v-if="index !== steps.length - 1" class="w-full h-px" />
            </StepperItem>
          </template>
        </Stepper>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center p-6">
          <div class="text-3xl font-bold text-blue-600 mb-2">15 mins</div>
          <p class="text-gray-600">Average setup time for owners</p>
        </div>
        <div class="text-center p-6">
          <div class="text-3xl font-bold text-purple-600 mb-2">0 %</div>
          <p class="text-gray-600">Setup or listing fees</p>
        </div>
        <div class="text-center p-6">
          <div class="text-3xl font-bold text-pink-600 mb-2">24/7</div>
          <p class="text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  </section>
</template>
