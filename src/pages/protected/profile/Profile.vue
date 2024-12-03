<script setup lang="ts">
import Paragraph from '~/components/typographys/Paragraph.vue';
import Title from '~/components/typographys/Title.vue';
import ProtectedLayout from '~/layouts/ProtectedLayout.vue';
import OPProfileImg from '~/assets/onepass_profile.png';
import { RaAvatar, CdLock, FeEdit3, TaLogout2 } from '@kalimahapps/vue-icons';
import { AppModals } from '~/store/AppConfig/AppModalTypes';
import useAppConfigStore from '~/store/AppConfig';

const AppConfigStore = useAppConfigStore();
const { toggleModals } = AppConfigStore;

const settings = [
  {
    Icon: RaAvatar,
    name: 'Update Profile',
    action: () => {
      toggleModals({ name: AppModals.EDIT_PROFILE, open: true });
    }
  },
  {
    Icon: CdLock,
    name: 'Change Master Password',
    action: () => {
      toggleModals({ name: AppModals.CHANGE_MASTER_PWD, open: true });
    }
  },
  {
    Icon: FeEdit3,
    name: 'Autofill settings',
    action: () => {
      console.log('Autofill settings');
    }
  },
  {
    Icon: TaLogout2,
    name: 'Logout',
    action: () => {
      console.log('Logout');
    }
  }
];
</script>

<template>
  <ProtectedLayout>
    <div class="flex flex-col space-y-12">
      <Title text="Profile" />

      <section class="flex flex-col justify-center items-center space-y-4">
        <figure class="w-[80px] h-[80px] bg-bitterSweet rounded-lg">
          <img :src="OPProfileImg" alt="" class="w-full h-full bg-white rounded" />
        </figure>

        <div class="w-auto">
          <Paragraph
            class-name="font-bebas !mb-0 !leading-none !text-comet !text-center !text-lg"
            text="James smith"
          />
          <Paragraph class-name="!text-xs" text="jamessmith@gmail.com" />
        </div>
      </section>

      <section class="flex flex-col space-y-2">
        <template v-for="setting in settings" :key="setting.name">
          <div class="flex items-center space-x-2 cursor-pointer py-2" @click="setting.action">
            <component :is="setting.Icon" class="text-bitterSweet text-xl" />
            <Paragraph class-name="!text-neutral-600" :text="setting.name" />
          </div>
        </template>
      </section>
    </div>
  </ProtectedLayout>
</template>
