<script setup lang="ts">
import { ref, computed } from 'vue';
import Label from './Label.vue';
import { BsEye, BsEyeSlash } from '@kalimahapps/vue-icons';
import { useField } from 'vee-validate';

const props = defineProps({
  label: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: false
  },
  note: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  }
});
const showPass = ref<boolean>(false);

const inputType = computed(() => {
  return props.type === 'password' ? (showPass.value ? 'text' : 'password') : props.type;
});

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <div class="flex w-full flex-col space-y-0 relative">
    <Label v-if="label" :for="id" :text="label" />

    <div class="relative flex w-full">
      <input
        :id="id"
        :type="inputType"
        :class="`h-[40px] w-full px-2 rounded-xl border-2 border-borderLine font-light text-sm outline-none transition-all
      duration-300 hover:border-bitterSweet focus:border-bitterSweet ${
        errorMessage ? 'border-error/50 bg-error/5' : ''
      } disabled:focus:border-neutral-borderLine disabled:cursor-not-allowed
      disabled:text-neutral-300 disabled:hover:border-borderLine`"
        v-bind="$attrs"
        v-model="value"
      />

      <div v-if="props.type === 'password'" class="absolute top-3 right-3">
        <BsEye v-if="showPass" @click="showPass = false" />
        <BsEyeSlash v-else @click="showPass = true" />
      </div>
    </div>

    <div className="flex items-center justify-between px-2">
      <small v-if="errorMessage" class="text-xs text-error/50 transition-all duration-300">{{
        errorMessage
      }}</small>
      <small v-else-if="note" class="text-xs text-neutral-400 transition-all duration-300">{{
        note
      }}</small>
      <small v-else class="invisible text-xs">error</small>
    </div>
  </div>
</template>
