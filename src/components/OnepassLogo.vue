<template>
  <figure className="flex justify-start items-center space-x-1">
    <img :src="ZoneImgLogo" alt="zone logo" className="{`${className}`}" />
  </figure>
</template>

<script setup lang="ts">
import ZoneImgLogo from '~/assets/onepass.svg';

interface IZoneLogoProps {
  className?: string;
}

defineProps<IZoneLogoProps>();
</script>
