<script setup lang="ts">
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue';

interface IFullModal {
  className: string;
  show: boolean;
}

defineProps<IFullModal>();
</script>

<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" class="relative z-[99]" @close="">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div class="fixed inset-0 bg-white" />
      </TransitionChild>

      <div class="fixed inset-0 z-[99]">
        <div class="">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel
              :class="`flex w-full max-w-mobile m-auto transform flex-col items-center justify-center space-y-1 rounded-2xl bg-white px-4 py-6 text-left align-middle transition-all md:w-[550px] ${className}`"
            >
              <slot></slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
