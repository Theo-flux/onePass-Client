<script setup lang="ts">
import Paragraph from '../typographys/Paragraph.vue';
import { RouterLink } from 'vue-router';

interface IAnchorProps {
  label?: string;
  text?: string;
  to: string;
}

const props = defineProps<IAnchorProps>();
</script>

<template>
  <div class="w-full mx-auto text-center">
    <Paragraph :text="props.text ? props.text : ''" />
    <RouterLink :to="props.to">
      <p class="font-bebas tracking-wider text-bitterSweet cursor-pointer hover:underline">
        {{ props.label }}
      </p>
    </RouterLink>
  </div>
</template>
