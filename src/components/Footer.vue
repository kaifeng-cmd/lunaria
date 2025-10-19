<script setup lang="ts">
import { Linkedin, Github, Instagram } from 'lucide-vue-next';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: typeof Linkedin | typeof Github | typeof Instagram;
  url: string;
  label: string;
}

// Footer sections
const footerSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Security', href: '/' },
      { label: 'Status', href: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/' },
      { label: 'Community', href: '/' },
      { label: 'Forum', href: '/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms of Service', href: '/' },
      { label: 'Cookie Policy', href: '/' },
      { label: 'License', href: '/' },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/kong-kai-feng-08a93530b/',
    label: 'LinkedIn',
  },
  { icon: Github, url: 'https://github.com/kaifeng-cmd', label: 'GitHub' },
  { icon: Instagram, url: 'https://www.instagram.com/k__feng0108/', label: 'Instagram' },
];
</script>

<template>
  <footer class="bg-gray-900 text-gray-100 bg-gradient-to-r from-pink-300/30 to-purple-300/20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Footer Links Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div v-for="section in footerSections" :key="section.title">
          <h4 class="text-sm font-semibold mb-3 text-white uppercase tracking-wider">
            {{ section.title }}
          </h4>
          <ul class="space-y-2">
            <li v-for="link in section.links" :key="link.label">
              <template v-if="link.href.startsWith('/')">
                <RouterLink
                  :to="link.href"
                  class="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {{ link.label }}
                </RouterLink>
              </template>
              <template v-else>
                <a
                  :href="link.href"
                  class="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {{ link.label }}
                </a>
              </template>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-b border-gray-500 mb-6"></div>

      <!-- Social Links -->
      <div class="flex justify-center mb-6">
        <div class="flex gap-4">
          <!-- _blank means load the link in new browser tab -->
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.url"
            :aria-label="social.label"
            class="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <component :is="social.icon" class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center mb-4">
        <p class="text-xs text-gray-400">
          © 2025 Miki Yoshiko. Made for book owners and readers worldwide.
        </p>
      </div>

      <!-- Bottom Links -->
      <div class="flex flex-col sm:flex-row sm:justify-center gap-3 text-xs text-gray-400">
        <a href="#" class="hover:text-white transition-colors">Privacy</a>
        <span class="hidden sm:inline">•</span>
        <a href="#" class="hover:text-white transition-colors">Terms</a>
        <span class="hidden sm:inline">•</span>
        <a href="#" class="hover:text-white transition-colors">Cookies</a>
      </div>
    </div>
  </footer>
</template>
