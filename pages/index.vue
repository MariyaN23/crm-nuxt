<script setup lang="ts">
import type {ICard, IColumn} from "~/components/board/board.types";

useSeoMeta({
  title: 'Home | CRM System'
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)
</script>

<template>
  <div class="p-10">
    <h1 class="mb-10">CRM System</h1>
    <div>
      <UiCard draggable="true">
        <UiCardHeader role="button">name card</UiCardHeader>
        <UiCardContent>Company</UiCardContent>
        <UiCardFooter>Date</UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>
