<script setup lang="ts">
import Paragraph from '~/components/typographys/Paragraph.vue';
import Button from '~/components/forms/Button.vue';
import Title from '~/components/typographys/Title.vue';
import Input from '~/components/forms/Input.vue';
import AuthLayout from '~/layouts/AuthLayout.vue';
import Anchor from '~/components/forms/Anchor.vue';
import ROUTES from '~/constants/routes';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { LoginSchema, TLoginSchema } from './validation';

const validationSchema = toTypedSchema(LoginSchema);

const { handleSubmit } = useForm<TLoginSchema>({
  validationSchema
});

const onSubmit = handleSubmit((values: TLoginSchema) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <AuthLayout>
    <Title text="Login" />
    <Paragraph text="Login into your account!" />

    <form @submit="onSubmit" className="mt-8 flex flex-col space-y-8">
      <fieldset>
        <Input
          id="email"
          autofocus
          name="email"
          autocomplete="off"
          label="Email"
          placeholder="johndoe@gmail.com"
          type="email"
        />
        <Input
          id="password"
          autocomplete="off"
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
        />

        <Button type="submit" variable="filled" text="login" />
      </fieldset>

      <Anchor :to="ROUTES.FORGOT_PWD.path" :label="`Forgot password ?`" />
      <Anchor :to="ROUTES.REGISTER.path" :text="`Don't have an account ?`" :label="`Register`" />
    </form>
  </AuthLayout>
</template>
