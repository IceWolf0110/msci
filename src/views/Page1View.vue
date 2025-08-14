<script setup>
  import Layout from "@/components/Layout.vue";
  import BackgroundVideo from '@/assets/videos/home_bg.mp4'
  import bg_1 from '@/assets/images/page1_1.jpg'
  import bg_2 from '@/assets/images/page1_2.jpg'
  import bg_3 from '@/assets/images/page1_3.jpg'
</script>

<template>
  <Layout :video="BackgroundVideo">
    <div class="h-full container mx-auto flex flex-col justify-around p-8">
      <div class="mb-3 text-4xl font-bold uppercase">
        <h1 class="mb-6">
          M-SCI: THE GAMEFI UNIVERSE
        </h1>
        <h1>
          BUILT ON AVALANCHE.
        </h1>
      </div>
      <div class="grow">
        <div class="h-full grid grid-cols-4 gap-x-4">
          <div class="p-6 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
            <div class="h-11/12 rounded-xl bg-cover bg-no-repeat bg-center" :style="{
            backgroundImage: `url(${bg_1})`
          }"></div>
            <div class="h-1/12 flex justify-center items-end">
              <h2 class="text-lg">M-SCI Web 3 on Telegram</h2>
            </div>
          </div>
          <div class="p-6 col-span-2 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
            <div class="h-11/12 rounded-xl bg-cover bg-no-repeat bg-center" :style="{
            backgroundImage: `url(${bg_2})`
          }"></div>
            <div class="h-1/12 flex justify-center items-end">
              <h2 class="text-lg">M-SCI Web 3 on Telegram</h2>
            </div>
          </div>
          <div class="p-6 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
            <div class="h-11/12 rounded-xl bg-cover bg-no-repeat bg-center" :style="{
            backgroundImage: `url(${bg_3})`
          }"></div>
            <div class="h-1/12 flex justify-center items-end">
              <h2 class="text-lg">M-SCI Web 3 on Telegram</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>

</style>