<script setup lang="ts">
import Button from '~/components/forms/Button.vue';
import Title from '~/components/typographys/Title.vue';
import Input from '~/components/forms/Input.vue';
import AuthLayout from '~/layouts/AuthLayout.vue';
import Anchor from '~/components/forms/Anchor.vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import ROUTES from '~/constants/routes';
import { ForgotPwdSchema, TForgotPwdSchema } from './validation';

const validationSchema = toTypedSchema(ForgotPwdSchema);
const { handleSubmit } = useForm<TForgotPwdSchema>({
  validationSchema
});
const onSubmit = handleSubmit((values: TForgotPwdSchema) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <AuthLayout>
    <Title text="Forgot" />
    <Title text="Password" />

    <form @submit="onSubmit" className="mt-8 flex flex-col space-y-8">
      <fieldset>
        <Input
          id="email"
          name="email"
          autofocus
          autocomplete="off"
          label="Email"
          placeholder="johndoe@gmail.com"
          type="email"
        />
        <Button type="submit" variable="filled" text="submit" />
      </fieldset>
      <Anchor :to="ROUTES.LOGIN.path" :text="`Remeber your password ?`" :label="`Login`" />
    </form>
  </AuthLayout>
</template>
