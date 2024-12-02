<script setup lang="ts">
interface ILabelProps {
  className?: string;
  text?: string;
}

defineProps<ILabelProps>();
</script>

<template>
  <label
    v-bind="$attrs"
    :class="`text-xs font-light font-bebas tracking-wider text-neutral-900 cursor-pointer px-2 ${className}`"
  >
    {{ text }}
  </label>
</template>
