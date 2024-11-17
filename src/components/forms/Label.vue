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
    :class="`text-xs font-bebas text-neutral-500 cursor-pointer px-2 ${className}`"
  >
    {{ text }}
  </label>
</template>
