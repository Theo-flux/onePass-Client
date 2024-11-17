<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <h1>Hello</h1>

  <div class="">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped></style>
