<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headset, Globe } from 'lucide-vue-next';
import type { Component } from 'vue';

interface ContactMethod {
  icon: Component;
  title: string;
  value: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const formData = ref<FormData>({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
});

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'support@mikiyoshiko.com',
    description: 'Get a response within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm PST',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    value: 'Start a conversation',
    description: 'Available 24/7 for Pro & Enterprise',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '123 Book Street, San Francisco, CA',
    description: 'Come say hi at our office',
  },
];

const faqs = [
  {
    question: 'How quickly will I get a response?',
    answer: 'We typically respond to all inquiries within 24 hours during business days.',
  },
  {
    question: 'Do you offer phone support?',
    answer: 'Yes! Phone support is available for Professional and Enterprise plan customers.',
  },
  {
    question: 'Can I schedule a demo?',
    answer: 'Absolutely! Use the contact form or book directly through our scheduling page.',
  },
];

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value);
  alert('Thank you for your message! We will get back to you soon.');
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
          <Headset class="w-4 h-4 mr-2" />
          We're Here to Help
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Get In Touch</h1>
        <p class="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
          Have questions? Need help? Want to schedule a demo? Our team is ready to assist you.
        </p>
      </div>
    </div>

    <!-- Contact Methods -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div
          v-for="method in contactMethods"
          :key="method.title"
          class="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
        >
          <div
            class="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl mx-auto mb-4"
          >
            <component :is="method.icon" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ method.title }}</h3>
          <p class="text-pink-600 font-medium mb-2">{{ method.value }}</p>
          <p class="text-sm text-gray-600">{{ method.description }}</p>
        </div>
      </div>

      <!-- Contact Form & Info Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p class="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible
            </p>

            <form class="space-y-6" @submit.prevent="handleSubmit">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <!-- Company -->
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                  Company / Bookstore Name
                </label>
                <input
                  id="company"
                  v-model="formData.company"
                  type="text"
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="My Awesome Bookstore"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  v-model="formData.subject"
                  required
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-0 focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="demo">Schedule a Demo</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-0 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <Button
                type="submit"
                size="lg"
                class="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
              >
                <Send class="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <!-- Sidebar Info -->
        <div class="space-y-6">
          <!-- Office Hours -->
          <div class="bg-white rounded-2xl p-6 border-2 border-gray-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-xl">
                <Clock class="w-6 h-6 text-pink-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900">Office Hours</h3>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Monday - Friday</span>
                <span class="font-medium text-gray-900">8am - 6pm PST</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Saturday</span>
                <span class="font-medium text-gray-900">10am - 4pm PST</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Sunday</span>
                <span class="font-medium text-gray-900">Closed</span>
              </div>
            </div>
          </div>

          <!-- Global Presence -->
          <div class="bg-white rounded-2xl p-6 border-2 border-gray-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl">
                <Globe class="w-6 h-6 text-purple-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900">Global Reach</h3>
            </div>
            <p class="text-sm text-gray-600 mb-4">
              Serving bookstores in over 50 countries worldwide
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">🇺🇸 USA</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">🇬🇧 UK</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >🇨🇦 Canada</span
              >
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >🇦🇺 Australia</span
              >
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">+46 more</span>
            </div>
          </div>

          <!-- Quick FAQs -->
          <div class="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white">
            <h3 class="text-lg font-bold mb-4">Quick Answers</h3>
            <div class="space-y-4 text-sm">
              <div v-for="faq in faqs" :key="faq.question">
                <p class="font-medium mb-1">{{ faq.question }}</p>
                <p class="text-pink-100">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Section (Placeholder) -->
    <div class="bg-gray-100 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl h-96 flex items-center justify-center"
        >
          <div class="text-center">
            <MapPin class="w-16 h-16 text-white mx-auto mb-4" />
            <p class="text-2xl font-bold text-white">Visit Our Office</p>
            <p class="text-white/80">123 Book Street, San Francisco, CA 94102</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Prefer to get started right away?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Sign up for a free account and explore the platform yourself
        </p>
        <Button size="lg" class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8">
          Start Your Free Trial
        </Button>
      </div>
    </div>
  </div>
</template>
