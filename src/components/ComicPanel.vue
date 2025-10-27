<script setup lang="ts">
import { ref, computed } from 'vue';
import type { StoryPanel } from '@/types/story';

interface Props {
  panel: StoryPanel;
  isSelected: boolean;
  isClicked: boolean;
  isDimmed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isDimmed: false,
});

const emit = defineEmits<{
  panelClicked: [panel: StoryPanel];
  panelHovered: [panel: StoryPanel | null];
}>();

const isHovered = ref(false);

// fallback background colors
const bgColor = computed(() => {
  const colors = {
    inception: 'from-purple-200 to-purple-300',
    growth: 'from-blue-200 to-blue-300',
    milestone: 'from-green-200 to-green-300',
    future: 'from-pink-200 to-pink-300',
  };
  return colors[props.panel.category];
});

const handleClick = () => {
  emit('panelClicked', props.panel);
};

const handleMouseEnter = () => {
  isHovered.value = true;
  emit('panelHovered', props.panel);
};

const handleMouseLeave = () => {
  isHovered.value = false;
  emit('panelHovered', null);
};
</script>

<template>
  <div
    :style="{ gridArea: panel.gridArea }"
    :class="[
      'relative group cursor-pointer overflow-hidden transition-all duration-300',
      'border-2 border-gray-800 shadow-md hover:shadow-xl',
      isSelected ? 'scale-105 z-10' : 'hover:scale-[1.02]',
      isDimmed ? 'opacity-50' : 'opacity-100',
    ]"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Background Image (if provided) -->
    <div
      v-if="panel.backgroundImage"
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url('${panel.backgroundImage}')` }"
    ></div>

    <!-- Gradient Background (fallback if no image) -->
    <div v-else :class="['absolute inset-0 bg-gradient-to-br', bgColor, 'opacity-80']"></div>

    <!-- Dark Overlay for better text readability -->
    <div class="absolute inset-0 bg-black opacity-20"></div>

    <!-- Content -->
    <div class="relative h-full flex flex-col items-center justify-center p-6 text-center">
      <!-- title -->
      <h3 class="font-bold text-white text-lg drop-shadow-md">
        {{ panel.title }}
      </h3>

      <!-- clicked indicator -->
      <div
        v-if="isClicked"
        class="absolute top-3 right-3 text-3xl text-green-400 font-bold drop-shadow-lg"
      >
        ✓
      </div>
    </div>

    <!-- Hover Overlay -->
    <div
      :class="[
        'absolute inset-0 bg-white transition-opacity duration-300',
        isHovered ? 'opacity-10' : 'opacity-0',
      ]"
    ></div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
