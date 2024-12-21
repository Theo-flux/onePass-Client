<script setup lang="ts">
import { AkHome, ClAddPlus, RaAvatar } from '@kalimahapps/vue-icons';
import ROUTES from '~/constants/routes';
import useAppConfigStore from '~/store/AppConfig';
import { AppModals } from '~/store/AppConfig/AppModalTypes';

const AppConfigStore = useAppConfigStore();
</script>

<template>
  <div class="bottom-0 fixed h-auto max-w-mobile w-[95%] py-2 bg-white">
    <div
      class="flex relative h-[50px] w-full justify-between items-center bg-borderLine px-4 rounded-lg"
    >
      <RouterLink :to="ROUTES.HOME.path">
        <AkHome
          class="text-2xl cursor-pointer transition-all duration-300 ease-in-out hover:text-bitterSweet"
        />
      </RouterLink>
      <div class="absolute left-[50%]">
        <div
          class="bg-bitterSweet shadow -top-6 transition-all duration-300 ease-in-out hover:bg-black hover:-top-8 cursor-pointer w-[60px] h-[60px] relative -left-[50%] text-white flex justify-center items-center text-3xl rounded-full"
          @click="AppConfigStore.toggleModals({ open: true, name: AppModals.ADD_NEW_MODAL })"
        >
          <ClAddPlus />
        </div>
      </div>

      <RouterLink :to="ROUTES.PROFILE.path">
        <RaAvatar
          class="text-2xl cursor-pointer transition-all duration-300 ease-in-out hover:text-bitterSweet"
        />
      </RouterLink>
    </div>
  </div>
</template>
