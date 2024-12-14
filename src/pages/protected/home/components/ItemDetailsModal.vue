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
  <FullModal class-name="" :show="isOpen.ITEM_DETAILS_MODAL">
    <div class="flex flex-col w-full py-8 space-y-8">
      <div class="flex justify-start w-full items-center">
        <AkChevronLeftSmall
          class="text-xl cursor-pointer"
          @click="AppConfigStore.toggleModals({ open: false, name: AppModals.ITEM_DETAILS_MODAL })"
        />
      </div>

      <form class="flex flex-col space-y-24">
        <Title text="Generate New" />

        <fieldset className="mt-8 flex flex-col space-y-8">
          <div>
            <Input
              id="name"
              autofocus
              autocomplete="off"
              label="Name"
              placeholder="John Doe"
              type="text"
            />

            <Input
              id="email"
              autocomplete="off"
              label="Email/Username"
              placeholder="johndoe@gmail.com"
              type="email"
            />

            <Input
              id="password"
              autocomplete="off"
              label="Password"
              placeholder="Password"
              type="password"
            />
          </div>

          <div class="flex justify-end items-center space-x-4">
            <Button variable="outlined" text="randomize" />
            <Button variable="filled" text="copy" />
          </div>
        </fieldset>
      </form>
    </div>
  </FullModal>
</template>
