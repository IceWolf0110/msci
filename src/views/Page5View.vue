<script setup>
  import Layout from "@/components/Layout.vue";
  import BackgroundVideo from '@/assets/videos/home_bg.mp4'
  import backgroundImage from '@/assets/images/page5.jpg'
</script>

<template>
  <Layout :video="BackgroundVideo">
    <div class="h-full flex flex-col justify-around container mx-auto p-8">
      <div class="grow">
          <div class="h-full grid grid-cols-2 gap-x-4">
            <div class="h-full p-6 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
              <div class="h-full rounded-xl bg-cover bg-no-repeat bg-center " :style="{
                backgroundImage: `url(${backgroundImage})`
              }"/>
            </div>
            <div class="flex flex-col justify-around p-6 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
              <h1 class="font-bold text-4xl mb-10">Bằng Chứng Thành Công & Số Liệu</h1>
              <div class="grid grid-cols-3 text-center gap-x-6 font-bold mb-6">
                <div>
                  <h2 class="mb-6 text-4xl">#1</h2>
                  <h3 class="mb-6 text-2xl">DappRadar Global</h3>
                  <p class="text-xl">Đạt hạng #1 trong danh mục 'Game Mới' của DappRadar (Tháng 3/2024) sau khi ra mắt ban đầu trên TON, chứng tỏ sức hút thị trường mạnh mẽ.</p>
                </div>
                <div>
                  <h2 class="mb-6 text-4xl">30K</h2>
                  <h3 class="mb-6 text-2xl">Doanh Thu</h3>
                  <p class="text-xl">Đạt hạng #1 trong danh mục 'Game Mới' của DappRadar (Tháng 3/2024) sau khi ra mắt ban đầu trên TON, chứng tỏ sức hút thị trường mạnh mẽ.</p>
                </div>
                <div>
                  <h2 class="mb-6 text-4xl">68%</h2>
                  <h3 class="mb-6 text-2xl">Tỷ Lệ Giữ Chân (D1)</h3>
                  <p class="text-xl">Đạt hạng #1 trong danh mục 'Game Mới' của DappRadar (Tháng 3/2024) sau khi ra mắt ban đầu trên TON, chứng tỏ sức hút thị trường mạnh mẽ.</p>
                </div>
              </div>
              <a class="text-lg" href="https://x.com/dappradar/status/1892176223918342540?s=46&t=8cLSBwfQ7Bwx9A4i4YWz5w">
                https://x.com/dappradar/status/1892176223918342540?s=46&t=8cLSBwfQ7Bwx9A4i4YWz5w
              </a>
            </div>
          </div>
        </div>
      </div>
  </Layout>
</template>

<style scoped>

</style>