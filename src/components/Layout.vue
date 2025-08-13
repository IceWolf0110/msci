<script setup>
  import videoBackGround from '@/assets/videos/home_bg.mp4';
  import Header from "@/components/Header.vue";

  const props = defineProps({
    video: {
      default: videoBackGround,
    },
    nextRoute: {
      default: null,
    }
  })
</script>

<template>
  <div class="flex flex-col relative h-screen w-screen text-white">
    <video class="absolute h-full w-full object-cover" autoplay muted loop playsinline >
      <source :src="video" type="video/mp4" />
    </video>
    <div class="h-full bg-black/50 backdrop-blur-sm">
      <div class="h-[7%] relative w-full bg-gradient-to-b from-black/90 to-transparent border-b-[0.5px]  border-b-purple-700">
        <Header/>
      </div>
      <div class="relative h-[93%]">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>