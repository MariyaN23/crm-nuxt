<script setup lang="ts">
import {LogOut} from 'lucide-vue-next';
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/">
      <NuxtImg src="/logo.svg" alt="logo" width="100"/>
    </NuxtLink>
    <UiButton>Send</UiButton>
    <button class="absolute top-2 right-3 transition-colors text-primary hover:text-secondary">
      <LogOut/>
    </button>
  </aside>
</template>
