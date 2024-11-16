<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  text: string;
  className?: string;
}>();
</script>

<template>
  <p :class="`text-xs md:text-sm text-silver ${className || ''}`">{{ text }}</p>
</template>
