<script setup>
  import Layout from "@/components/Layout.vue";
  import BackgroundVideo from '@/assets/videos/home_bg.mp4'
  import backgroundImage from '@/assets/images/image-not-available.webp'
</script>

<template>
  <Layout :video="BackgroundVideo" :next-route="'page8'">
    <div class="h-full p-8 flex flex-col justify-around container mx-auto">
      <h1 class="font-medium text-5xl mb-12">
        Đội Ngũ Thực Thi
      </h1>

      <h2 class="font-medium text-3xl mb-6">
        Kinh Nghiệm & Thành Tích Đã Được Chứng Minh
      </h2>

      <div class="grow grid grid-cols-3 gap-x-4 mb-6">
        <div class="p-6 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
          <div class="h-8/12 rounded-xl bg-cover bg-no-repeat bg-center" :style="{
            backgroundImage: `url(${backgroundImage})`
          }"></div>
          <div class="mt-6">
            <h2 class="text-2xl mb-3">Sin (CEO)</h2>
            <p class="text-lg">Kiến trúc sư cộng đồng Web3. Founder của TON Gaming, công ty đã gia công hơn 50 sản phẩm GameFi, mang lại sự thấu hiểu sâu sắc về thị trường.</p>
          </div>
        </div>
        <div class="p-6 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
          <div class="h-8/12 rounded-xl bg-cover bg-no-repeat bg-center" :style="{
            backgroundImage: `url(${backgroundImage})`
          }"></div>
          <div class="mt-6">
            <h2 class="text-2xl mb-3">Kelvin (CMO)</h2>
            <p class="text-lg">Chuyên gia 7 năm kinh nghiệm blockchain. Đã huy động thành công hơn $13 triệu USD cho các dự án, nhận tài trợ từ Sei Foundation và dẫn dắt BD cho AVE.ai.</p>
          </div>
        </div>
        <div class="p-6 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
          <div class="h-8/12 rounded-xl bg-cover bg-no-repeat bg-center" :style="{
            backgroundImage: `url(${backgroundImage})`
          }"></div>
          <div class="mt-6">
            <h2 class="text-2xl mb-3">Henry (CTO)</h2>
            <p class="text-lg">Kỹ sư full-stack 10 năm kinh nghiệm. Cựu kỹ sư tại Remitano, có kinh nghiệm xây dựng cơ sở hạ tầng an toàn, có khả năng mở rộng ở cấp độ tài chính.</p>
          </div>
        </div>
      </div>

      <div class="text-2xl">
        Đội ngũ: Đội ngũ nhân sự với hơn 20 nhà phát triển, họa sĩ, nhà thiết kế của MSCI Labs và sự hỗ trợ kỹ thuật toàn diện từ TON Gaming.
      </div>
    </div>
  </Layout>
</template>

<style scoped>

</style>