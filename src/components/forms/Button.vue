<script setup lang="ts">
import { VNode } from 'vue';
import { VueSpinnerIos } from 'vue3-spinners';

/* Define Props */
interface IButtonProps {
  text?: string;
  isLoading?: boolean;
  leftIcon?: VNode;
  rightIcon?: VNode;
  className?: string;
}

defineProps<IButtonProps>();
</script>

<template>
  <button :class="`btn ${className}`" v-bind="$attrs">
    <VueSpinnerIos v-if="isLoading" color="#ffffff" size="20" aria-label="Loading Spinner" />

    <div v-else class="flex justify-center items-center space-x-2 w-full">
      <component v-if="leftIcon" :is="leftIcon" />

      <p v-if="text || $slots.default">
        {{ text }}
      </p>

      <component v-if="rightIcon" :is="rightIcon" />
    </div>
  </button>
</template>
