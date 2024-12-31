<script setup lang="ts">
import ProtectedLayout from '~/layouts/ProtectedLayout.vue';
import Slab from './components/Slab.vue';
import Search from '~/components/forms/Search.vue';
// import OnepassSearchImg from '~/assets/onepass-server.svg';
// import Paragraph from '~/components/typographys/Paragraph.vue';
import ItemPod from './components/ItemPod.vue';
</script>

<template>
  <ProtectedLayout>
    <div class="flex flex-col space-y-4">
      <section class="flex justify-between h-auto items-stretch w-full space-x-4">
        <div class="w-[50%] h-full">
          <Slab stat="5" :texts="['Passwords', 'Stored']" />
        </div>

        <div class="w-[50%] h-full">
          <Slab stat="0" :texts="['Passwords', 'Compromised']" />
        </div>
      </section>

      <Search id="search" autofocus autocomplete="off" placeholder="search apps..." />

      <div class="w-full h-[60vh] overflow-y-scroll">
        <div class="w-full h-[1200px]">
          <ItemPod name="Facebook" />
        </div>
      </div>
      <!-- <figure class="w-full h-full flex flex-col py-4 justify-center items-center space-y-4">
        <img :src="OnepassSearchImg" alt="" />

        <div class="flex flex-col space-y-1 w-[300px] text-center">
          <Paragraph class-name="font-bebas !text-xl leading-none !text-comet" text="No results" />
          <Paragraph
            class-name="!text-xs"
            text="We couldn't find anything from your search. Try searching for something else."
          />
        </div>
      </figure> -->
    </div>
  </ProtectedLayout>
</template>
