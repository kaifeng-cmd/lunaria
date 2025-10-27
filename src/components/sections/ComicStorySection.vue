<script setup lang="ts">
import { ref } from 'vue';
import ComicPanel from '@/components/ComicPanel.vue';
import { Button } from '@/components/ui/button';
import { Map, X, PartyPopper } from 'lucide-vue-next';
import type { StoryPanel } from '@/types/story';

// Manga background images
import idea from '@/assets/images/manga/idea.png';
import mvp from '@/assets/images/manga/mvp.png';
import customers from '@/assets/images/manga/customers.png';
import funding from '@/assets/images/manga/funding.png';
import global from '@/assets/images/manga/global.png';
import team from '@/assets/images/manga/team.png';

const panels: StoryPanel[] = [
  // [layout design] total col = 4
  // Row 1: Col 1-3
  {
    id: 1,
    title: 'The Spark',
    description: '2022 - A simple idea born from frustration with complex platforms.',
    image: '💡',
    backgroundImage: idea,
    gridArea: '1 / 1 / 2 / 4',
    category: 'inception',
  },

  // Row 2: Col 2-4
  {
    id: 2,
    title: 'First Prototype',
    description: '2022 Q1 - Built MVP in 3 months with a small team.',
    image: '🛠️',
    backgroundImage: mvp,
    gridArea: '2 / 2 / 3 / 5',
    category: 'inception',
  },

  // Row 3: Col 1-2
  {
    id: 3,
    title: 'First 100 customers',
    description:
      '2023 Q3 - Reached our first 100 customers, a key milestone that validated our product’s value and market fit.',
    image: '🔮',
    backgroundImage: customers,
    gridArea: '3 / 1 / 4 / 3',
    category: 'milestone',
  },

  // Row 4: Col 1-2
  {
    id: 4,
    title: 'Funding Success',
    description:
      '2024 - Successfully raised RM 1.65 million in Series A funding to accelerate product development and market expansion.',
    image: '💰',
    backgroundImage: funding,
    gridArea: '4 / 1 / 5 / 3',
    category: 'milestone',
  },

  // Row 3-4: Col 3-4
  {
    id: 5,
    title: 'Global Reach',
    description:
      '2025 - Now serving 1,000+ stores worldwide, including Thailand, Japan, and Indonesia.',
    image: '🌍',
    backgroundImage: global,
    gridArea: '3 / 3 / 5 / 5',
    category: 'growth',
  },

  // Row 5: Col 1-4
  {
    id: 6,
    title: 'Join Our Story',
    description: 'Be part of the next milestone - Start your journey with us today.',
    image: '✒️',
    backgroundImage: team,
    gridArea: '5 / 1 / 6 / 5',
    category: 'future',
  },
];

const selectedPanel = ref<StoryPanel | null>(null);

// Set is better than Array in this case as it prevent repetitive value
const clickedPanelIds = ref<Set<number>>(new Set());

const handlePanelClick = (panel: StoryPanel) => {
  // If the currently selected panel is clicked, deselect it (reset to original state)
  if (selectedPanel.value?.id === panel.id) {
    selectedPanel.value = null;
  } else {
    // Otherwise, select the new panel
    selectedPanel.value = panel;
    clickedPanelIds.value.add(panel.id);

    setTimeout(() => {
      document.getElementById('panel-detail')?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }, 100);
  }
};

const handlePanelHover = (panel: StoryPanel | null) => {
  if (!selectedPanel.value && panel) {
    console.log('Hovering:', panel.title);
  }
};
</script>

<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-pink-50">
    <div class="max-w-xl md:max-w-4xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4"
        >
          <Map class="w-4 h-4 mr-2" />
          Our Visual Journey
        </div>
        <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          The Story Behind
          <span class="bg-gradient-to-r from-orange-300 to-pink-600 bg-clip-text text-transparent">
            Miki Yoshiko
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto mb-3">
          Click on each panel to explore our journey from a simple idea to a global platform.
        </p>
        <p class="text-lg font-bold text-red-700">
          Explored: {{ clickedPanelIds.size }} / {{ panels.length }} chapters
        </p>
      </div>

      <!-- Manga Section -->
      <div
        class="grid gap-6 mb-10"
        style="
          grid-template-columns: repeat(4, minmax(70px, 1fr));
          grid-template-rows: repeat(5, 160px);
        "
      >
        <ComicPanel
          v-for="panel in panels"
          :key="panel.id"
          :panel="panel"
          :is-selected="selectedPanel?.id === panel.id"
          :is-clicked="clickedPanelIds.has(panel.id)"
          :is-dimmed="selectedPanel !== null && selectedPanel.id !== panel.id"
          @panel-clicked="handlePanelClick"
          @panel-hovered="handlePanelHover"
        />
      </div>

      <!-- Detail Panel -->
      <div
        v-if="selectedPanel"
        id="panel-detail"
        class="bg-white rounded-2xl p-6 border-4 border-orange-200 animate-fade-in"
      >
        <div class="flex items-start gap-4">
          <div class="text-5xl">{{ selectedPanel.image }}</div>
          <div class="flex-1">
            <div
              class="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
              :class="{
                'bg-purple-100 text-purple-700': selectedPanel.category === 'inception',
                'bg-blue-100 text-blue-700': selectedPanel.category === 'growth',
                'bg-green-100 text-green-700': selectedPanel.category === 'milestone',
                'bg-pink-100 text-pink-700': selectedPanel.category === 'future',
              }"
            >
              {{ selectedPanel.category.toUpperCase() }}
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedPanel.title }}</h3>
            <p class="text-base text-gray-700 leading-relaxed">{{ selectedPanel.description }}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            class="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            @click="selectedPanel = null"
          >
            <X class="w-5 h-5" />
          </Button>
        </div>
      </div>

      <!-- Progress Indicator -->
      <div v-if="clickedPanelIds.size === panels.length" class="text-center mt-12">
        <div
          class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-700 text-white rounded-full shadow-lg animate-bounce"
        >
          <PartyPopper class="text-2xl fill-current text-yellow-200" />
          <span class="font-semibold">You've explored the entire journey!</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
</style>
