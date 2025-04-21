<script setup lang="ts">
import {LogOut} from 'lucide-vue-next';
</script>

<template>
  <aside class="px-3 py-8 bg-sidebar h-full relative w-full select-none">
    <NuxtLink to="/" class="flex justify-center p-2">
      <NuxtImg src="/logo.svg" alt="logo" width="40"/>
    </NuxtLink>
    <NuxtLink to="/login" class="absolute top-2 right-3 transition-colors text-primary hover:text-secondary">
      <LogOut/>
    </NuxtLink>
    <LayoutMenu/>
  </aside>
</template>
