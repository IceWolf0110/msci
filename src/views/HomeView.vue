<script setup>
  import Layout from "@/components/Layout.vue";
  import BackgroundVideo from '@/assets/videos/home_bg.mp4'
  import {useRouter} from "vue-router";

  const router = useRouter();
</script>

<template>
  <Layout :video="BackgroundVideo">
    <div class="relative z-1 flex h-full items-center justify-center">
      <div class="text-center transition-all duration-300 transform">
        <h1 class="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white mb-6 uppercase text-shadow-blue animate-title-glow text-glitch tracking-wide">
          M-SCI
        </h1>
        <div class="mt-4">
          <div @click="router.push('page1')" class="cursor-pointer inline-block no-underline! px-8 py-3 bg-gradient-to-r from-[#8a2be2] to-[#00b4d8] rounded-lg text-white font-bold text-lg hover:scale-105 transition-all duration-300" >
            <span>Play now</span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
  .text-shadow-blue {
    text-shadow: 0 0 10px #4a9fd580,0 0 20px #4a9fd54d;
  }

  .animate-title-glow {
    animation: title-glow 3s ease-in-out infinite;
  }

  @keyframes title-glow {
    0% {
      text-shadow:0 0 10px #4a9fd599,0 0 20px #4a9fd566
    }
    50% {
      text-shadow:0 0 20px #4a9fd5cc,0 0 30px #4a9fd599
    }
    to {
      text-shadow:0 0 10px #4a9fd599,0 0 20px #4a9fd566
    }
  }

  @keyframes spawnFloat {
    0% {
      transform: translateY(20px) scale(0.5) rotate(10deg);
      opacity: 0;
    }
    50% {
      transform: translateY(-15px) scale(1.1) rotate(-2deg);
      opacity: 0.8;
    }
    75% {
      transform: translateY(-8px) scale(1.05) rotate(1deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0px) scale(1) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes spawnFloatAlt {
    0% {
      transform: translateY(25px) scale(0.3) rotate(-15deg);
      opacity: 0;
    }
    40% {
      transform: translateY(-20px) scale(1.15) rotate(3deg);
      opacity: 0.7;
    }
    70% {
      transform: translateY(-5px) scale(1.08) rotate(-1deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0px) scale(1) rotate(0deg);
      opacity: 1;
    }
  }
</style>