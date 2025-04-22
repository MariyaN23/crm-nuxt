<script setup lang="ts">
import {LogOut} from 'lucide-vue-next';

const authStore = useAuthStore()
const isLoadingStore = useIsLoadingStore()
const router = useRouter()
const logout = async () => {
  isLoadingStore.set(true)
  await account.deleteSession("current")
  authStore.clear()
  await router.push('/login')
  isLoadingStore.set(false)
}
</script>

<template>
  <aside class="px-3 py-8 bg-sidebar h-full relative w-full select-none">
    <NuxtLink to="/" class="flex justify-center p-2">
      <NuxtImg src="/logo.svg" alt="logo" width="40"/>
    </NuxtLink>
    <button class="absolute top-2 right-3 transition-colors text-primary hover:text-secondary"
            @click="logout">
      <LogOut/>
    </button>
    <LayoutMenu/>
  </aside>
</template>
