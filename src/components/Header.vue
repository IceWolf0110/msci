<script setup>
import {useRoute, useRouter} from "vue-router";

  const routers = useRouter().getRoutes();
  const route = useRoute();
</script>

<template>
  <div class="h-full mx-auto container flex items-center gap-x-12">
    <RouterLink v-for="router in routers" :class="[`capitalize font-bold`,
      router.name === route.name ? 'text-blue-400' : ''
    ]" :to="{
      name: router.name
    }">{{ router.meta.title ?? router.name }}</RouterLink>
  </div>
</template>

<style scoped>

</style>