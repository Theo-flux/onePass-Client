<script setup lang="ts">
import ProtectedLayout from '~/layouts/ProtectedLayout.vue';
import Slab from './components/Slab.vue';
</script>

<template>
  <ProtectedLayout>
    <section class="flex justify-between h-auto items-stretch w-full space-x-4">
      <div class="w-[50%] h-full">
        <Slab stat="5" :texts="['Passwords', 'Stored']" />
      </div>

      <div class="w-[50%] h-full">
        <Slab stat="0" :texts="['Passwords', 'Compromised']" />
      </div>
    </section>
  </ProtectedLayout>
</template>
