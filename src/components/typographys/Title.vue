<script setup lang="ts">
defineProps<{
  className?: string;
  text: string;
}>();
</script>

<template>
  <h1
    :class="`text-5xl m-0 font-bebas tracking-wide text-comet md:text-4xl lg:text-7xl leading-none ${className}`"
  >
    {{ text }}
  </h1>
</template>
