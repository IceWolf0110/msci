<script setup>
  import Layout from "@/components/Layout.vue";
  import BackgroundVideo from '@/assets/videos/home_bg.mp4'
</script>

<template>
  <Layout :video="BackgroundVideo" :next-route="'page4'">
    <div class="h-full container mx-auto flex flex-col justify-around p-8">
      <h1 class="font-bold text-4xl">
        Quan Hệ Đối Tác Chiến Lược
      </h1>

      <p class="text-2xl">
        Chúng tôi không chỉ xây dựng một game. Chúng tôi mang đến cho Avalanche một tài sản chiến lược để chiến thắng trong cuộc đua trở thành "THE gaming chain".
      </p>

      <div class="grid grid-cols-2 gap-x-4">
        <div>
          <h2 class="font bold text-3xl mb-6">MSCI Cung Cấp</h2>
          <ul class="list-disc list-inside font-medium text-2xl">
            <li class="mb-4">
              Một hệ sinh thái game đa sản phẩm, chất lượng cao.
            </li>
            <li class="mb-4">
              15,000+ người dùng hiện hữu sẵn sàng chuyển đổi.
            </li>
            <li class="mb-4">
              Kiến trúc "Dual Subnet Star" đột phá.
            </li>
            <li>
              Một đội ngũ Việt Nam thành công với tham vọng toàn cầu.
            </li>
          </ul>
        </div>
        <div>
          <h2 class="font bold text-3xl mb-6">Avalanche Nhận Được</h2>
          <ul class="list-disc list-inside font-medium text-2xl">
            <li class="mb-4">
              Một "Killer App" tiềm năng để dẫn đầu hệ sinh thái.
            </li>
            <li class="mb-4">
              Lưu lượng giao dịch và người dùng thật ngay từ ngày đầu.
            </li>
            <li class="mb-4">
              Một case study kỹ thuật hoàn hảo về sức mạnh của Subnet.
            </li>
            <li>
              Một thành trì chiến lược tại thị trường game SEA.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>

</style>