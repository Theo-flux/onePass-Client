<script setup lang="ts">
defineProps<{
  className?: string;
  text: string;
}>();
</script>

<template>
  <h1
    :class="`text-3xl m-0 font-semibold text-comet md:text-4xl lg:text-5xl leading-none ${className}`"
  >
    {{ text }}
  </h1>
</template>
