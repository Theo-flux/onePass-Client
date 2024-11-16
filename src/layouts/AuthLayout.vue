<script setup lang="ts">
import OnepassLogo from '~/components/OnepassLogo.vue';
</script>

<template>
  <nav className="w-full top-0 shadow z-50 bg-white">
    <section className="flex justify-between items-start w-[95%] max-w-mobile m-auto py-2">
      <OnepassLogo />
    </section>
  </nav>
  <section class="w-[95%] py-8 max-w-mobile mx-auto">
    <slot></slot>
  </section>
</template>
