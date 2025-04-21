<script setup lang="ts">
import {MENU_DATA} from "~/components/layout/menu.data.js";
</script>

<template>
  <nav>
    <ul class="space-y-2.5">
      <li v-for="item in MENU_DATA"
          :key="item.name">
        <NuxtLink :to="item.url"
                  class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-muted hover:shadow transition-all">
          <Icon :name="item.icon" class="mr-3"/>
          <span>{{ item.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
