<script setup lang="ts">
import SubTitle from '~/components/typographys/SubTitle.vue';
import { AnOutlinedCopy } from '@kalimahapps/vue-icons';
import useAppConfigStore from '~/store/AppConfig';
import { AppModals } from '~/store/AppConfig/AppModalTypes';

interface IItemPodProps {
  name: string;
}

const props = defineProps<IItemPodProps>();
const AppConfigStore = useAppConfigStore();
</script>

<template>
  <div
    class="border-2 text-comet border-borderLine rounded-lg p-3 flex justify-between items-center"
  >
    <SubTitle
      class-name="cursor-pointer"
      :text="props.name"
      @click="
        AppConfigStore.toggleModals({
          open: true,
          name: AppModals.ITEM_DETAILS_MODAL,
          id: 'facebook'
        })
      "
    />
    <AnOutlinedCopy class="text-xl cursor-pointer" @click="" />
  </div>
</template>
