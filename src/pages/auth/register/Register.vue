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
    <Title text="Register" />
    <Paragraph text="Let’s get you setup with a new account!" />

    <form className="mt-8 flex flex-col space-y-8">
      <fieldset>
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

        <Button variable="filled" text="REGISTER" />
      </fieldset>

      <Anchor :to="ROUTES.LOGIN.path" :text="`Already have an account ?`" :label="`Login`" />
    </form>
  </AuthLayout>
</template>
