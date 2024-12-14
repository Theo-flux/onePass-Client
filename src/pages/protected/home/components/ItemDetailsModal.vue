<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import FullModal from '~/components/modals/parentmodals/FullModal.vue';
import useAppConfigStore from '~/store/AppConfig';
import {
  AkChevronLeftSmall,
  AnOutlinedCalendar,
  ClLink,
  CdAccount,
  ReLockPasswordLine,
  AnOutlinedCopy,
  BsEye,
  BsEyeSlash
} from '@kalimahapps/vue-icons';
import Title from '~/components/typographys/Title.vue';
import Button from '~/components/forms/Button.vue';
import { AppModals } from '~/store/AppConfig/AppModalTypes';
import Paragraph from '~/components/typographys/Paragraph.vue';

const AppConfigStore = useAppConfigStore();
const { isOpen } = storeToRefs(AppConfigStore);

const showPass = ref<boolean>(false);
</script>

<template>
  <FullModal class-name="" :show="isOpen.ITEM_DETAILS_MODAL">
    <div class="flex flex-col w-full h-[100dvh] space-y-8">
      <div class="flex justify-start w-full items-center">
        <AkChevronLeftSmall
          class="text-xl cursor-pointer"
          @click="AppConfigStore.toggleModals({ open: false, name: AppModals.ITEM_DETAILS_MODAL })"
        />
      </div>

      <div>
        <Paragraph text="not compromised" />
        <Title text="Facebook" />
      </div>

      <div className="flex flex-col space-y-6 h-[68dvh]">
        <div class="flex flex-col space-y-1">
          <AnOutlinedCalendar class="text-xl text-silver cursor-pointer" @click="" />
          <Paragraph class-name="!text-comet" text="25th May 2022" />
        </div>

        <div class="flex flex-col space-y-1">
          <ClLink class="text-xl text-silver cursor-pointer" @click="" />
          <Paragraph class-name="!text-comet" text="25th May 2022" />
        </div>

        <div class="flex flex-col space-y-1">
          <CdAccount class="text-xl text-silver cursor-pointer" @click="" />
          <Paragraph class-name="!text-comet" text="25th May 2022" />
        </div>

        <div class="flex justify-between items-center">
          <div class="flex flex-col space-y-1">
            <ReLockPasswordLine class="text-xl text-silver cursor-pointer" @click="" />
            <Paragraph class-name="!text-comet" :text="showPass ? `Password` : `****`" />
          </div>

          <div class="flex justify-start space-x-4 text-bitterSweet">
            <BsEyeSlash v-if="showPass" @click="showPass = false" class="text-xl cursor-pointer" />
            <BsEye v-else @click="showPass = true" class="text-xl cursor-pointer" />
            <AnOutlinedCopy class="text-xl cursor-pointer" @click="" />
          </div>
        </div>
      </div>

      <div class="flex justify-end items-center space-x-4">
        <Button variable="outlined" text="delete" />
        <Button
          variable="filled"
          text="update"
          @click="
            AppConfigStore.toggleModals({ open: true, name: AppModals.UPDATE_ITEM_MODAL, id: '' })
          "
        />
      </div>
    </div>
  </FullModal>
</template>
