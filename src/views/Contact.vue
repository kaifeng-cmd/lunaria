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

interface FAQ {
  question: string;
  answer: string;
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
    value: 'dreamkfeng@gmail.com',
    description: 'Get a response within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '(+60) 16-622 0559',
    description: 'Mon-Fri from 9am to 6pm UTC+8',
  },
  {
    icon: MessageCircle,
    title: 'Chat with Us',
    value: 'Start a conversation',
    description: 'Available 24/7 for Enterprise plan',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Kota Damansara, Selangor',
    description: 'Come say Hi at our office',
  },
];

const faqs: FAQ[] = [
  {
    question: 'How quickly will I get a response?',
    answer: 'We typically respond to all inquiries within 24 hours during business days.',
  },
  {
    question: 'Can I walk-in directly to your office?',
    answer: 'Yes! We are happy to invite walk-in at our office beside phone calls.',
  },
  {
    question: 'Where can I schedule a demo?',
    answer:
      'You can fill the message form at this page or make a booking via email or phone number.',
  },
];

const handleSubmit = () => {
  // Handle form submission (now is example only)
  console.log('Form submitted:', formData.value);
  alert('Thank you for your message. We will get back to you soon.');
};
</script>

<template>
  <div class="pt-16 min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-100">
    <!-- First Section -->
    <div class="bg-gradient-to-r from-[#F39F9F] to-purple-900 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6"
        >
          <Headset class="w-4 h-4 mr-2" />
          We're Here to Help
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Get In Touch</h1>
        <p class="text-xl text-white max-w-2xl mx-auto leading-tight mb-6">
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
          class="bg-white rounded-2xl p-6 shadow-md hover:border-4 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
        >
          <div
            class="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#F39F9F] to-pink-500 rounded-2xl mx-auto mb-4"
          >
            <component :is="method.icon" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ method.title }}</h3>
          <p class="text-pink-600 font-medium mb-2">{{ method.value }}</p>
          <p class="text-sm text-gray-600">{{ method.description }}</p>
        </div>
      </div>

      <!-- Contact Submit Form & Info Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Contact Submit Form (2/3 area)-->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
            <h2 class="text-2xl font-bold text-red-700 mb-4">Send Us a Message</h2>
            <p class="text-gray-700 mb-8">
              Fill out the form below and we'll get back to you as soon as possible : )
            </p>

            <form class="space-y-6" @submit.prevent="handleSubmit">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span class="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-md border-2 border-gray-200 text-pink-500 font-semibold focus:border-pink-300 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="Kong Kai Feng"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span class="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-md border-2 border-gray-200 text-pink-500 font-semibold focus:border-pink-300 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="dreamkfeng@gmail.com"
                />
              </div>

              <!-- Company -->
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                  Company / Organization Name
                </label>
                <input
                  id="company"
                  v-model="formData.company"
                  type="text"
                  class="w-full px-4 py-3 rounded-md border-2 border-gray-200 text-pink-500 font-semibold focus:border-pink-300 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="WezaTech Consulting"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span class="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  v-model="formData.subject"
                  required
                  class="w-full cursor-pointer px-4 py-3 rounded-md border-2 text-pink-500 font-semibold focus:border-pink-300 focus:ring-0 focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="demo">Schedule a Demo</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="issue">Report an Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  type="text"
                  required
                  rows="5"
                  class="w-full px-4 py-3 rounded-md border-2 text-pink-500 font-semibold focus:border-pink-300 focus:ring-0 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  class="w-full sm:w-[60%] md:w-[40%] px-2 py-4 flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-600 text-white hover:opacity-90 hover:scale-105 transition-all duration-200"
                >
                  <Send class="w-4 h-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>

        <!-- Info Cards (1/3 area)-->
        <div class="space-y-6">
          <!-- Office Hours -->
          <div class="bg-white rounded-2xl p-6 border-2 border-gray-200">
            <div class="flex items-center gap-3 mb-5">
              <div class="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-xl">
                <Clock class="w-6 h-6 text-pink-600" />
              </div>
              <h3 class="text-lg font-bold text-pink-600">Office Hours</h3>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Monday - Thursday</span>
                <span class="font-medium text-gray-900">9am - 6pm UTC+8</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Friday</span>
                <span class="font-medium text-gray-900">10am - 6pm UTC+8</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Saturday - Sunday</span>
                <span class="font-medium text-gray-900">Closed</span>
              </div>
            </div>
          </div>

          <!-- Global Presence -->
          <div class="bg-white rounded-2xl p-6 border-2 border-gray-200">
            <div class="flex items-center gap-3 mb-5">
              <div class="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl">
                <Globe class="w-6 h-6 text-purple-600" />
              </div>
              <h3 class="text-lg font-bold text-purple-800">Global Reach</h3>
            </div>
            <p class="text-sm text-gray-600 mb-4">
              Serving services in over 12 countries worldwide
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 bg-yellow-200/60 text-gray-700 font-semibold text-xs rounded-full"
                >Malaysia</span
              >
              <span
                class="px-3 py-1 bg-green-200/60 text-gray-700 font-semibold text-xs rounded-full"
                >Thailand</span
              >
              <span class="px-3 py-1 bg-orange-200 text-gray-700 font-semibold text-xs rounded-full"
                >Japan</span
              >
              <span class="px-3 py-1 bg-blue-200 text-gray-700 font-semibold text-xs rounded-full"
                >Australia</span
              >
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">+8 more</span>
            </div>
          </div>

          <!-- Quick FAQs -->
          <div class="bg-[#d9c9d0] rounded-2xl p-6">
            <h3 class="text-lg text-[#572121] font-bold mb-4">Quick Answers</h3>
            <div class="space-y-6 text-md">
              <div v-for="faq in faqs" :key="faq.question">
                <p class="text-red-900 font-medium">{{ faq.question }}</p>
                <p class="text-gray-800">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div
          class="bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl h-72 flex items-center justify-center"
        >
          <div class="text-center">
            <MapPin class="w-16 h-16 text-white mx-auto mb-4" />
            <p class="text-2xl font-bold text-white mb-2">Visit Our Office</p>
            <p class="text-purple-800/80 font-semibold">
              Level 123, Menara ABC, Jalan Nazrin 7, Kota Damansara, Selangor.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Prefer to get started right away?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Sign up for a free account and explore all the features of the platform.
        </p>
        <Button
          variant="outline"
          size="lg"
          class="text-lg px-4 py-2 border-purple-600 border-2 bg-transparent text-purple-600 hover:text-purple-600 hover:bg-transparent hover:scale-105 transition-all duration-200"
        >
          Start Now
        </Button>
      </div>
    </div>
  </div>
</template>
