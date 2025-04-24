<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {cn} from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
      data-slot="card"
      :class="
      cn(
        'bg-primary-foreground text-card-foreground flex flex-col gap-6 rounded-xl border border-transparent hover:border-border py-6 shadow-sm animation',
        props.class,
      )
    "
  >
    <slot/>
  </div>
</template>

<style scoped>
@keyframes show {
  from {
    border: var(--border);
    transform: scale(0.5) translateY(-30px);
    opacity: 0.4;
  }

  90% {
    border: var(--border);
  }

  to {
    border: transparent;
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.animation {
  animation: show 0.3s ease-in-out;
}
</style>
