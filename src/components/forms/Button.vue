<script setup lang="ts">
import { ButtonHTMLAttributes, VNode, computed, watchEffect } from 'vue';
import { VueSpinnerIos } from 'vue3-spinners';

/* @vue-ignore */
interface IButtonProps extends ButtonHTMLAttributes {
  variant: 'filled' | 'outlined';
  isLoading?: boolean;
  leftIcon?: VNode;
  rightIcon?: VNode;
}

const props = defineProps<IButtonProps>();

const btnStyle = computed(() => {
  console.log('Computed variant:', props.variant);
  switch (props.variant) {
    case 'filled':
      return 'button-filled';
    case 'outlined':
      return 'button-outlined';
    default:
      return '';
  }
});

watchEffect(() => {
  console.log(props);
});

console.log(props.variant, props.isLoading, btnStyle.value);
</script>

<template>
  <button :class="`button group cursor-pointer ${btnStyle}`">
    <VueSpinnerIos v-if="props.isLoading" size="10" color="red" />

    <div class="flex justify-center items-center space-x-2">
      <span v-if="props.leftIcon">{{ props.leftIcon }}</span>

      <slot></slot>

      <span v-if="props.rightIcon">{{ props.rightIcon }}</span>
    </div>
  </button>
</template>
