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
    <Title className="uppercase font-bebas tracking-wider" text="Login" />
    <Paragraph text="Login into your account!" />

    <form className="mt-8 flex flex-col space-y-8">
      <fieldset>
        <Input
          autofocus
          autocomplete="off"
          label="Email"
          id="email"
          placeholder="johndoe@gmail.com"
          type="email"
        />
        <Input
          autocomplete="off"
          label="Password"
          id="password"
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
