<script lang="ts" setup>
import type { StepperSeparatorProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { StepperSeparator, useForwardProps } from 'reka-ui';
import { cn } from '@/lib/utils';

const props = defineProps<StepperSeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = reactiveOmit(props, 'class');

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperSeparator
    v-bind="forwarded"
    :class="
      cn(
        'bg-neutral-100 dark:bg-neutral-800',
        // Disabled
        'group-data-[disabled]:bg-neutral-100 group-data-[disabled]:opacity-50 dark:group-data-[disabled]:bg-neutral-800',
        // Completed
        'group-data-[state=completed]:bg-gradient-to-r from-blue-500 to-pink-600 dark:group-data-[state=completed]:bg-neutral-50',
        props.class
      )
    "
  />
</template>
