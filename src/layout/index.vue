<template>
  <div class="page">
    <navbar />
    <div class="container">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import navbar from './navbar.vue';
const Component = ref(null);
const currentRoute = ref(null);
watch(() => currentRoute.value, (newVal, oldVal) => {
  if (newVal) {
    Component.value = newVal.meta.component;
  }
});
</script>

<style lang="scss" scoped>

</style>
