<script setup lang="ts">
import {v4 as uuid} from 'uuid';

useSeoMeta({
  title: 'Login | CRM System'
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')
const isLoadingStore = useIsLoadingStore()
const router = useRouter()
const authStore = useAuthStore()
const login = async () => {
  isLoadingStore.set(true)
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
  const res = await account.get()
  if (res) {
    authStore.set({
      email: res.email,
      name: res.name,
      status: res.status
    })
  }
  emailRef.value = ''
  passwordRef.value = ''
  nameRef.value = ''
  await router.push('/')
  isLoadingStore.set(false)
}
const register = async () => {
  await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
  await login()
}

const isRegisterMode = ref(false)
const toggleMode = () => {
  isRegisterMode.value = !isRegisterMode.value
  passwordRef.value = ''
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded-md bg-sidebar w-1/4 p-5">
      <h1 class="text-center mb-5">{{ isRegisterMode ? 'Register' : 'Log in' }}</h1>
      <form class="text-primary space-y-2">
        <UiInput placeholder="Email" type="email" v-model="emailRef" autocomplete="email"/>
        <UiInput placeholder="Password" type="password" v-model="passwordRef" autocomplete="password"/>
        <UiInput placeholder="User name" type="text" v-model="nameRef" autocomplete="name" v-if="isRegisterMode"/>
        <UiButton
            type="button"
            variant="secondary"
            class="w-full"
            @click="isRegisterMode ? register() : login()"
        >
          {{ isRegisterMode ? 'Register' : 'Log in' }}
        </UiButton>
        <div class="flex justify-center items-center">
          <p>{{ isRegisterMode ? "Already have an account?" : "Don't have an account?" }}</p>
          <UiButton
              type="button"
              variant="link"
              @click="toggleMode"
              class="text-base font-semibold px-2"
          >
            {{ isRegisterMode ? "Login" : "Register" }}
          </UiButton>
        </div>
      </form>
    </div>
  </div>
</template>
