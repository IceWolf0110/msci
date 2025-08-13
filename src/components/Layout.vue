<script setup>
  import videoBackGround from '@/assets/videos/home_bg.mp4';

  const props = defineProps({
    video: {
      default: videoBackGround,
    },
    nextRoute: {
      default: null,
    }
  })

  import {useRouter} from "vue-router";

  const router = useRouter();
</script>

<template>
  <div class="relative h-screen w-screen text-white" @click="props.nextRoute ? router.push({
    name: props.nextRoute,
  }) : ''">
    <video class="absolute h-full w-full object-cover" autoplay muted loop playsinline >
      <source :src="video" type="video/mp4" />
    </video>
    <div class="h-full">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>