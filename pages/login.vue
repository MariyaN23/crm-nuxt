<script setup lang="ts">
useSeoMeta({
  title: 'Login | CRM System'
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded-md bg-sidebar w-1/4 p-5">
      <h1 class="text-center mb-5">Login</h1>
      <form class="text-primary space-y-2">
        <UiInput placeholder="Email" type="email" v-model="emailRef"/>
        <UiInput placeholder="Password" type="password" v-model="passwordRef"/>
        <UiInput placeholder="User name" type="text" v-model="nameRef"/>
        <UiButton type="button" class="w-full">Login</UiButton>
      </form>
    </div>
  </div>
</template>
