<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  text: string;
  className?: string;
}>();
</script>

<template>
  <h3 :class="`text-lg font-medium md:text-xl ${className || ''}`">{{ text }}</h3>
</template>
