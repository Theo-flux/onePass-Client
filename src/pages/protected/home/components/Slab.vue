<script setup lang="ts">
import Paragraph from '~/components/typographys/Paragraph.vue';
import Title from '~/components/typographys/Title.vue';

interface ISlabProps {
  stat: string;
  texts: Array<string>;
}

const props = defineProps<ISlabProps>();
</script>

<template>
  <div
    class="w-full h-full bg-borderLine rounded-lg px-2 py-4 flex flex-col space-y-2 justify-center items-start"
  >
    <Title class-name="!text-bitterSweet" :text="props.stat" />
    <div>
      <div v-for="text in props.texts" :key="text">
        <Paragraph class-name="!text-neutral-600" :text="text" />
      </div>
    </div>
  </div>
</template>
