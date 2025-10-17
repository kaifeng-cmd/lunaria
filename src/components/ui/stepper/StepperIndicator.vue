<script lang="ts" setup>
import type { StepperIndicatorProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { StepperIndicator, useForwardProps } from 'reka-ui';
import { cn } from '@/lib/utils';

const props = defineProps<StepperIndicatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = reactiveOmit(props, 'class');

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperIndicator
    v-slot="slotProps"
    v-bind="forwarded"
    :class="
      cn(
        'inline-flex items-center justify-center rounded-full text-neutral-500/50 w-8 h-8 dark:text-neutral-400/50',
        // Disabled
        'group-data-[disabled]:text-neutral-500 group-data-[disabled]:opacity-50 dark:group-data-[disabled]:text-neutral-400',
        // Active
        'group-data-[state=active]:bg-gradient-to-r from-blue-400 to-pink-500 group-data-[state=active]:text-neutral-50 dark:group-data-[state=active]:bg-neutral-50 dark:group-data-[state=active]:text-neutral-900',
        // Completed
        'group-data-[state=completed]:bg-neutral-100 group-data-[state=completed]:text-neutral-900 dark:group-data-[state=completed]:bg-neutral-800 dark:group-data-[state=completed]:text-neutral-50',
        props.class
      )
    "
  >
    <slot v-bind="slotProps" />
  </StepperIndicator>
</template>
