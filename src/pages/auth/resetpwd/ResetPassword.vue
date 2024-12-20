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
    <Title text="Reset" />
    <Title text="Password" />

    <form className="mt-8 flex flex-col space-y-8">
      <fieldset>
        <Input
          id="password"
          name="password"
          autocomplete="off"
          label="New Password"
          placeholder="Password"
          type="password"
        />
        <Button variable="filled" text="reset" />
      </fieldset>
      <Anchor :to="ROUTES.LOGIN.path" :text="`Remeber your password ?`" :label="`Login`" />
    </form>
  </AuthLayout>
</template>
