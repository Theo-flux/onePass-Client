<script setup lang="ts">
import { storeToRefs } from 'pinia';
import FullModal from '~/components/modals/parentmodals/FullModal.vue';
import useAppConfigStore from '~/store/AppConfig';
import { AkChevronLeftSmall } from '@kalimahapps/vue-icons';
import Title from '~/components/typographys/Title.vue';
import Input from '~/components/forms/Input.vue';
import Button from '~/components/forms/Button.vue';
import { AppModals } from '~/store/AppConfig/AppModalTypes';

const AppConfigStore = useAppConfigStore();
const { isOpen } = storeToRefs(AppConfigStore);
</script>

<template>
  <FullModal class-name="" :show="isOpen.CHANGE_MASTER_PWD">
    <div class="flex flex-col w-full py-8 space-y-8">
      <div class="flex justify-start w-full items-center">
        <AkChevronLeftSmall
          class="text-xl cursor-pointer"
          @click="AppConfigStore.toggleModals({ open: false, name: AppModals.CHANGE_MASTER_PWD })"
        />
      </div>

      <div class="flex flex-col space-y-12">
        <data class="">
          <Title text="Change" />
          <Title text="Password" />
        </data>

        <form class="flex flex-col justify-center items-center">
          <Input
            id="password"
            autocomplete="off"
            label="New Password"
            placeholder="Password"
            type="password"
          />
          <Input
            id="password"
            autocomplete="off"
            label="Confirm Password"
            placeholder="Password"
            type="password"
          />
          <Button type="submit" variable="filled" text="change password" />
        </form>
      </div>
    </div>
  </FullModal>
</template>
