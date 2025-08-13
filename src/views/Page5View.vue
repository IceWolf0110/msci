<script setup>
  import Layout from "@/components/Layout.vue";
  import BackgroundVideo from '@/assets/videos/home_bg.mp4'
  import backgroundImage from '@/assets/images/image-not-available.webp'
</script>

<template>
  <Layout :video="BackgroundVideo" :next-route="'page6'">
    <div class="h-full p-6">
      <div class="h-full bg-black/60 backdrop-blur-sm rounded-2xl p-8">
        <div class="h-full grid grid-cols-2">
          <div class="rounded-2xl w-full h-full bg-cover bg-no-repeat bg-center" :style="{
            backgroundImage: `url('${backgroundImage}')`
          }"></div>
          <div class="p-8 flex flex-col justify-around">
            <h1 class="font-bold text-7xl mb-10">Bằng Chứng Thành Công & Số Liệu</h1>
            <div class="grid grid-cols-3 text-center gap-x-6 font-bold mb-6">
              <div>
                <h2 class="mb-6 text-7xl">#1</h2>
                <h3 class="mb-6 text-5xl">DappRadar Global</h3>
                <p class="text-3xl">Đạt hạng #1 trong danh mục 'Game Mới' của DappRadar (Tháng 3/2024) sau khi ra mắt ban đầu trên TON, chứng tỏ sức hút thị trường mạnh mẽ.</p>
              </div>
              <div>
                <h2 class="mb-6 text-7xl">30K</h2>
                <h3 class="mb-6 text-5xl">Doanh Thu</h3>
                <p class="text-3xl">Đạt hạng #1 trong danh mục 'Game Mới' của DappRadar (Tháng 3/2024) sau khi ra mắt ban đầu trên TON, chứng tỏ sức hút thị trường mạnh mẽ.</p>
              </div>
              <div>
                <h2 class="mb-6 text-7xl">68%</h2>
                <h3 class="mb-6 text-5xl">Tỷ Lệ Giữ Chân (D1)</h3>
                <p class="text-3xl">Đạt hạng #1 trong danh mục 'Game Mới' của DappRadar (Tháng 3/2024) sau khi ra mắt ban đầu trên TON, chứng tỏ sức hút thị trường mạnh mẽ.</p>
              </div>
            </div>
            <p class="text-xl">
              https://x.com/dappradar/status/1892176223918342540?s=46&t=8cLSBwfQ7Bwx9A4i4YWz5w
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>

</style>