<script setup lang="ts">
import { storeToRefs } from 'pinia';
import FullModal from '~/components/modals/parentmodals/FullModal.vue';
import useAppConfigStore from '~/store/AppConfig';
import { AkChevronLeftSmall } from '@kalimahapps/vue-icons';
import Title from '~/components/typographys/Title.vue';
import Input from '~/components/forms/Input.vue';
import Button from '~/components/forms/Button.vue';
import { AppModals } from '~/store/AppConfig/AppModalTypes';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { AddNewSchema, TAddNewSchema } from '../validation';

const AppConfigStore = useAppConfigStore();
const { isOpen } = storeToRefs(AppConfigStore);

const validationSchema = toTypedSchema(AddNewSchema);
const { handleSubmit } = useForm<TAddNewSchema>({
  validationSchema
});

const onsubmit = handleSubmit((value: TAddNewSchema) => {
  alert(JSON.stringify(value));
});
</script>

<template>
  <FullModal class-name="" :show="isOpen.ADD_NEW_MODAL">
    <div class="flex flex-col w-full py-8 space-y-8">
      <div class="flex justify-start w-full items-center">
        <AkChevronLeftSmall
          class="text-xl cursor-pointer"
          @click="AppConfigStore.toggleModals({ name: AppModals.ADD_NEW_MODAL, open: false })"
        />
      </div>

      <form @submit="onsubmit" class="flex flex-col space-y-24">
        <Title text="Add New" />

        <fieldset className="mt-8 flex flex-col space-y-8">
          <div>
            <Input
              id="name"
              name="name"
              autofocus
              autocomplete="off"
              label="Name"
              placeholder="John Doe"
              type="text"
            />

            <Input
              id="url"
              name="url"
              autocomplete="off"
              label="url"
              placeholder="John Doe"
              type="text"
            />

            <Input
              id="email"
              name="email"
              autocomplete="off"
              label="Email/Username"
              placeholder="johndoe@gmail.com"
              type="email"
            />

            <Input
              id="password"
              name="password"
              autocomplete="off"
              label="Password"
              placeholder="Password"
              type="password"
            />
          </div>

          <div class="flex justify-end items-center space-x-4">
            <Button
              type="button"
              variable="outlined"
              class-name="w-[40%]"
              text="Generate new"
              @click="AppConfigStore.toggleModals({ open: true, name: AppModals.GENERATE_PWD })"
            />
          </div>
        </fieldset>

        <Button type="submit" variable="filled" text="add password" />
      </form>
    </div>
  </FullModal>
</template>
