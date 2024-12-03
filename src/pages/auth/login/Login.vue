<script setup lang="ts">
import Paragraph from '~/components/typographys/Paragraph.vue';
import Button from '~/components/forms/Button.vue';
import Title from '~/components/typographys/Title.vue';
import Input from '~/components/forms/Input.vue';
import AuthLayout from '~/layouts/AuthLayout.vue';
import Anchor from '~/components/forms/Anchor.vue';

import ROUTES from '~/constants/routes';
</script>

<template>
  <AuthLayout>
    <Title text="Login" />
    <Paragraph text="Login into your account!" />

    <form className="mt-8 flex flex-col space-y-8">
      <fieldset>
        <Input
          id="email"
          autofocus
          autocomplete="off"
          label="Email"
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

        <Button variable="filled" text="login" />
      </fieldset>

      <Anchor :to="ROUTES.FORGOT_PWD.path" :label="`Forgot password ?`" />
      <Anchor :to="ROUTES.REGISTER.path" :text="`Don't have an account ?`" :label="`Register`" />
    </form>
  </AuthLayout>
</template>
