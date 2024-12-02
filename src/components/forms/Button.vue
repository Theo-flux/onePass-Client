<script setup lang="ts">
import { VNode, computed } from 'vue';
import { VueSpinnerIos } from 'vue3-spinners';

/* Define Props */
interface IButtonProps {
  text?: string;
  variable: 'filled' | 'outlined';
  isLoading?: boolean;
  leftIcon?: VNode;
  rightIcon?: VNode;
  className?: string;
}

const props = defineProps<IButtonProps>();

const btnStyle = computed(() => {
  switch (props.variable) {
    case 'filled':
      return 'btn-filled';
    case 'outlined':
      return 'btn-filled';
    default:
      return 'btn';
  }
});
</script>

<template>
  <button :class="`btn ${btnStyle} ${className}`" v-bind="$attrs">
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
