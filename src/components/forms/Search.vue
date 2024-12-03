<script setup lang="ts">
import Label from './Label.vue';
import { AkSearch } from '@kalimahapps/vue-icons';

interface IInputProps {
  label?: string;
  id?: string;
  error?: string;
  note?: string;
}

const props = defineProps<IInputProps>();
</script>

<template>
  <div class="flex w-full flex-col space-y-0 relative">
    <Label v-if="label" :for="id" :text="label" />

    <div
      :class="`flex items-center w-full h-[40px] px-2 rounded-xl border-2 border-borderLine font-light text-sm outline-none transition-all
      duration-300 hover:border-bitterSweet focus-within:border-bitterSweet ${
        props.error ? 'border-error/50 bg-error/5' : ''
      } disabled:focus-within:border-neutral-borderLine disabled:cursor-not-allowed
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

    <div className="flex items-center justify-between px-2">
      <small v-if="error" class="text-xs text-error/50 transition-all duration-300">{{
        error
      }}</small>
      <small v-else-if="note" class="text-xs text-neutral-400 transition-all duration-300">{{
        note
      }}</small>
      <small v-else class="invisible text-xs">error</small>
    </div>
  </div>
</template>
