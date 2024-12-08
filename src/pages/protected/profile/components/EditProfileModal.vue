<script setup lang="ts">
import { storeToRefs } from 'pinia';
import FullModal from '~/components/modals/parentmodals/FullModal.vue';
import useAppConfigStore from '~/store/AppConfig';
import { AkChevronLeftSmall } from '@kalimahapps/vue-icons';
import Title from '~/components/typographys/Title.vue';
import Paragraph from '~/components/typographys/Paragraph.vue';
import Input from '~/components/forms/Input.vue';
import Button from '~/components/forms/Button.vue';
import OPProfileImg from '~/assets/onepass_profile.png';
import { AppModals } from '~/store/AppConfig/AppModalTypes';

const AppConfigStore = useAppConfigStore();
const { isOpen } = storeToRefs(AppConfigStore);
</script>

<template>
  <FullModal class-name="" :show="isOpen.EDIT_PROFILE">
    <div class="flex flex-col w-full py-8 space-y-8">
      <div class="flex justify-start w-full items-center">
        <AkChevronLeftSmall
          class="text-xl cursor-pointer"
          @click="AppConfigStore.toggleModals({ open: false, name: AppModals.EDIT_PROFILE })"
        />
      </div>

      <div class="flex flex-col space-y-12">
        <Title text="Edit Profile" />

        <section class="flex flex-col justify-center items-center space-y-4">
          <figure class="w-[150px] h-[150px] bg-bitterSweet rounded-lg">
            <img :src="OPProfileImg" alt="" class="w-full h-full bg-white rounded" />
          </figure>

          <div class="w-auto">
            <Paragraph class-name="!text-bitterSweet" text="change picture" />
          </div>
        </section>

        <Input
          id="name"
          autofocus
          autocomplete="off"
          label="Name"
          placeholder="John Doe"
          type="text"
        />
      </div>

      <div class="flex justify-between items-center space-x-4">
        <Button variable="outlined" text="cancel" />
        <Button variable="filled" text="save" />
      </div>
    </div>
  </FullModal>
</template>
