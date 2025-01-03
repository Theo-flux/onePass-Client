<script setup lang="ts">
import Paragraph from '~/components/typographys/Paragraph.vue';
import Button from '~/components/forms/Button.vue';
import Title from '~/components/typographys/Title.vue';
import Input from '~/components/forms/Input.vue';
import AuthLayout from '~/layouts/AuthLayout.vue';
import Anchor from '~/components/forms/Anchor.vue';
import { useForm } from 'vee-validate';
import { RegisterSchema, TRegisterSchema } from './validation';
import { toTypedSchema } from '@vee-validate/zod';
import ROUTES from '~/constants/routes';
import useAuthStore from '~/store/AuthStore';
import { storeToRefs } from 'pinia';

const validationSchema = toTypedSchema(RegisterSchema);
const { handleSubmit } = useForm<TRegisterSchema>({ validationSchema });
const AuthStore = useAuthStore();
const { isLoading } = storeToRefs(AuthStore);

const onSubmit = handleSubmit((values: TRegisterSchema) => {
  AuthStore.createUser(values);
});
</script>

<template>
  <AuthLayout>
    <Title text="Register" />
    <Paragraph text="Let’s get you setup with a new account!" />

    <form @submit="onSubmit" className="mt-8 flex flex-col space-y-8">
      <fieldset :disabled="isLoading.register">
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
          id="email"
          name="email"
          autocomplete="off"
          label="Email"
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

        <Button
          variable="filled"
          text="REGISTER"
          type="submit"
          :isLoading="isLoading.register"
          :disabled="isLoading.register"
        />
      </fieldset>

      <Anchor :to="ROUTES.LOGIN.path" :text="`Already have an account ?`" :label="`Login`" />
    </form>
  </AuthLayout>
</template>
