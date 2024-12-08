<script setup lang="ts">
import { defineAsyncComponent, h, VNode, computed } from 'vue';
import { AppModals } from '~/store/AppConfig/AppModalTypes';
import useAppConfigStore from '~/store/AppConfig';
import { storeToRefs } from 'pinia';

const ModalsMap = {
  [AppModals.EDIT_PROFILE]: defineAsyncComponent(
    () => import('@pages/protected/profile/components/EditProfileModal.vue')
  ),
  [AppModals.CHANGE_MASTER_PWD]: defineAsyncComponent(
    () => import('@pages/protected/profile/components/changePassword.vue')
  ),
  [AppModals.ADD_NEW_MODAL]: defineAsyncComponent(
    () => import('@pages/protected/home/components/AddNewModal.vue')
  ),
  [AppModals.GENERATE_PWD]: defineAsyncComponent(
    () => import('@pages/protected/home/components/Generate.vue')
  )
};

const AppConfigStore = useAppConfigStore();
const { isOpen } = storeToRefs(AppConfigStore);

const OpenedModals = computed(() => {
  return Object.entries(ModalsMap).reduce(
    (acc: { Render: VNode; name: string }[], [keyName, Component]) => {
      if (isOpen.value[keyName as keyof typeof AppModals]) {
        acc.push({ Render: h(Component, { key: keyName }), name: keyName });
      }
      return acc;
    },
    []
  );
});
</script>

<template>
  <div v-for="OpenedModal in OpenedModals" :key="OpenedModal.name">
    <component :is="OpenedModal.Render" />
  </div>
</template>
