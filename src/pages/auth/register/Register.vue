<script setup lang="ts">
import Paragraph from '~/components/typographys/Paragraph.vue';
import Title from '~/components/typographys/Title.vue';
import Input from '~/components/forms/Input.vue';
import AuthLayout from '~/layouts/AuthLayout.vue';
</script>

<template>
  <AuthLayout>
    <Title className=" uppercase font-bebas" text="Register" />
    <Paragraph text="Let’s get you setup with a new account!" />

    <form>
      <Input label="Name" placeholder="John Doe" :type="`password`" />
    </form>
  </AuthLayout>
</template>
