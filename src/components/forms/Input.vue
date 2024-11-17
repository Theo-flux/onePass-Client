<script setup lang="ts">
import { ref } from 'vue';
import Label from './Label.vue';
import { BsEye, BsEyeSlash } from '@kalimahapps/vue-icons';

interface IInputProps {
  label?: string;
  id?: string;
  error?: string;
  note?: string;
  type?: string;
}

const props = defineProps<IInputProps>();
const showPass = ref(false);
const inputType = props.type === 'password' ? (showPass.value ? 'text' : 'password') : props.type;
console.log(inputType, showPass.value);
</script>

<template>
  <div class="flex w-full flex-col space-y-0 relative">
    <Label v-if="label" :for="id" :text="label" />

    <div class="relative flex w-full">
      <input
        :id="id"
        :type="inputType"
        :class="`h-[40px] w-full px-2 rounded-xl border-2 border-borderLine font-light text-sm outline-none transition-all
      duration-300 hover:border-black focus:border-black ${
        props.error ? 'border-error/50 bg-error/5' : ''
      } disabled:focus:border-neutral-borderLine disabled:cursor-not-allowed
      disabled:text-neutral-300 disabled:hover:border-borderLine`"
        v-bind="$attrs"
      />

      <div v-if="inputType === 'password'" class="absolute top-3 right-3">
        <BsEye v-if="showPass" @click="showPass = false" />
        <BsEyeSlash v-else @click="showPass = true" />
      </div>
    </div>

    <div className="flex items-center justify-between">
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
