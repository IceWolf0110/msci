<script setup>
  import Layout from "@/components/Layout.vue";
  import BackgroundVideo from '@/assets/videos/home_bg.mp4'
</script>

<template>
  <Layout :video="BackgroundVideo">
    <div class="h-full container mx-auto flex flex-col justify-around p-6">
      <div>
        <h1 class="font-medium text-5xl mb-16">
          Lời Kêu Gọi Hợp Tác
        </h1>

        <p class="font-medium text-3xl mb-6">
          Chúng tôi không chỉ đến đây để dự thi; chúng tôi đến đây để tìm một đối tác chiến lược dài hạn. MSCI có đủ các yếu tố để trở thành một tựa game đầu tàu, giúp đưa Avalanche trở thành ngôi nhà không thể tranh cãi của ngành game Web3.
        </p>

        <div class="grid grid-cols-3 gap-x-6">
          <div class="rounded-xl bg-blue-800 p-8">
            <h2 class="font-medium text-2xl mb-6">GAMEPLAY ĐỘT PHÁ</h2>
            <p class="font-medium text-xl mb-10">
              MOBA dịch chuyển dọc với vòng lặp đã được chứng minh là hấp dẫn.
            </p>
          </div>
          <div class="rounded-xl bg-blue-800 p-8">
            <h2 class="font-medium text-2xl mb-6">GAMEPLAY ĐỘT PHÁ</h2>
            <p class="font-medium text-xl mb-10">
              MOBA dịch chuyển dọc với vòng lặp đã được chứng minh là hấp dẫn.
            </p>
          </div>
          <div class="rounded-xl bg-blue-800 p-8">
            <h2 class="font-medium text-2xl mb-6">GAMEPLAY ĐỘT PHÁ</h2>
            <p class="font-medium text-xl mb-10">
              MOBA dịch chuyển dọc với vòng lặp đã được chứng minh là hấp dẫn.
            </p>
          </div>
        </div>
      </div>

      <div class="font-medium text-2xl">
        Website: http://m-sci.net
      </div>
    </div>
  </Layout>
</template>

<style scoped>

</style>