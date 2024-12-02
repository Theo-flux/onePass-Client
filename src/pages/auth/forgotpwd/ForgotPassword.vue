<script setup lang="ts">
import Button from '~/components/forms/Button.vue';
import Title from '~/components/typographys/Title.vue';
import Input from '~/components/forms/Input.vue';
import AuthLayout from '~/layouts/AuthLayout.vue';
import Anchor from '~/components/forms/Anchor.vue';

import ROUTES from '~/constants/routes';
</script>

<template>
  <AuthLayout>
    <Title className="uppercase font-bebas tracking-wider" text="Forgot" />
    <Title className="uppercase font-bebas tracking-wider" text="Password" />

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
        <Button variable="filled" text="submit" />
      </fieldset>
      <Anchor :to="ROUTES.LOGIN.path" :text="`Remeber your password ?`" :label="`Login`" />
    </form>
  </AuthLayout>
</template>
