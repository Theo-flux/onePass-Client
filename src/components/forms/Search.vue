<script setup lang="ts">
import Label from './Label.vue';
import { AkSearch } from '@kalimahapps/vue-icons';

interface IInputProps {
  label?: string;
  id?: string;
}

defineProps<IInputProps>();
</script>

<template>
  <div class="flex w-full flex-col space-y-0 relative">
    <Label v-if="label" :for="id" :text="label" />

    <div
      :class="`flex items-center w-full h-[40px] px-2 rounded-xl border-2 border-borderLine font-light text-sm outline-none transition-all
      duration-300 hover:border-bitterSweet focus-within:border-bitterSweet disabled:focus-within:border-neutral-borderLine disabled:cursor-not-allowed
      disabled:text-neutral-300 disabled:hover:border-borderLine`"
    >
      <AkSearch />
      <input
        :id="id"
        type="text"
        :class="`h-full w-full px-2 rounded-xl font-light text-sm outline-none border-none transition-all
      duration-300`"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>
