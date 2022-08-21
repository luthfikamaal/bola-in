<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavTop from './components/NavTop.vue';
import NavBottom from './components/NavBottom.vue';
</script>

<template>
  <div class="max-w-lg mx-auto">
    <NavTop />
    <div class="px-3 pt-16 pb-14">
      <RouterView />
    </div>
    <NavBottom />
  </div>
</template>
