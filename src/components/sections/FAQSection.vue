<script setup lang="ts">
import { ref } from 'vue';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

interface AccordionItemType {
  value: string;
  title: string;
  content: string;
}

const defaultValue = ref<string>('item-1');

const accordionItems: AccordionItemType[] = [
  {
    value: 'item-1',
    title: 'How is this different from other platforms?',
    content:
      'Our platform focuses on what modern bookstores actually need — not a one-size-fits-all eCommerce solution. From catalog management to built-in analytics and secure payments with escrow, everything is designed to help you sell smarter with less manual work.',
  },
  {
    value: 'item-2',
    title: 'Do I have a free trial?',
    content:
      'Yes, we provide a 60-days free trial with no credit card required so you can test all features.',
  },
  {
    value: 'item-3',
    title: 'How much does it cost to get started?',
    content:
      'The Starter plan is free forever. Pro and Enterprise unlock advanced features like white-labeling, dedicated support, and advanced security.',
  },
  {
    value: 'item-4',
    title: 'How long does it take to set up?',
    content:
      'Most sellers go live in under 15 minutes using our guided setup and templates. Bulk import tools speed up catalog onboarding.',
  },
  {
    value: 'item-5',
    title: 'Is my customer data secure?',
    content:
      'Yes. We use encryption, follow best practices, and comply with relevant regulations. You retain ownership of your data and can export it anytime.',
  },
  {
    value: 'item-6',
    title: 'Can I export my data?',
    content:
      'Yes, you can export orders, products, and customer lists anytime in CSV or JSON formats to avoid vendor lock-in.',
  },
];
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-100/20">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Frequently asked
          <span class="text-white bg-gradient-to-r from-[#F39F9F] to-purple-800 px-2"
            >questions</span
          >
        </h2>
        <p class="text-[#B95E82]">
          Answers to common questions about selling and business operations on Miki Yoshiko.
        </p>
      </div>

      <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
          <AccordionTrigger class="text-left font-medium py-4">{{ item.title }}</AccordionTrigger>
          <AccordionContent class="text-sm text-gray-600 pb-4">{{ item.content }}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
</template>

<style scoped>
/* Small spacing override for accordion content if desired */
.accordion-content p {
  margin: 0;
}
</style>
