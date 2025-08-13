<script setup>
  import Layout from "@/components/Layout.vue";
  import BackgroundVideo from '@/assets/videos/home_bg.mp4'
</script>

<template>
  <Layout :video="BackgroundVideo" :next-route="'page5'">
    <div class="h-full container mx-auto flex flex-col justify-around">
      <h1 class="font-bold text-3xl my-6">
        Kiến Trúc Vượt Trội Trên Subnet
      </h1>

      <div class="rounded-lg p-6 border-4 border-blue-400 mb-6">
        <h2 class="font-bold text-3xl">Kiến Trúc "Dual Subnet Star"</h2>
      </div>

      <div class="grid grid-cols-2 gap-x-4 mb-8">
        <div>
          <h2 class="font bold text-3xl mb-6">"THE ARENA" Subnet (Lớp Gameplay)</h2>
          <ul class="list-disc list-inside font-medium text-2xl">
            <li class="mb-4">
              Sử dụng $MSCI làm Gas Token.
            </li>
            <li class="mb-4">
              Tối ưu hóa cho thông lượng cao, độ trễ thấp.
            </li>
            <li class="mb-4">
              Tài trợ Gas để mang lại trải nghiệm Web2 liền mạch.
            </li>
            <li>
              Dữ liệu On-chain: Kết quả trận đấu, Kills, Thành tích.
            </li>
          </ul>
        </div>
        <div>
          <h2 class="font bold text-3xl mb-6">"THE CITADEL" Subnet (Lớp Kinh Tế)</h2>
          <ul class="list-disc list-inside font-medium text-2xl">
            <li class="mb-4">
              Sử dụng $MSCI làm Gas.
            </li>
            <li class="mb-4">
              Tối ưu hóa cho giao dịch bảo mật cao.
            </li>
            <li class="mb-4">
              Dữ liệu On-chain: Sở hữu NFT, số dư $MSCI, giao dịch Marketplace.
            </li>
          </ul>
        </div>
      </div>

      <div class="text-2xl">(Kết nối bởi Avalanche Warp Messaging - AWM)</div>

      <div class="grid grid-cols-3 gap-x-4">
        <div class="mt-[3rem]">
          <div class="w-full h-[1rem] bg-blue-800 rounded-full" />
          <div class="p-6 pt-4">
            <h2 class="font-bold text-3xl mb-4">
              Tải & Chơi
            </h2>
            <p class="text-2xl">
              Không cần ví, không cần gas. Trải nghiệm như một game Web2 thực thụ.
            </p>
          </div>
        </div>
        <div class="mt-[1.5rem]">
          <div class="w-full h-[1rem] bg-blue-800 rounded-full" />
          <div class="p-6 pt-4">
            <h2 class="font-bold text-3xl mb-4">
              Thắng Vật Phẩm Giá Trị
            </h2>
            <p class="text-2xl">
              Người chơi nhận được NFT/Token.
            </p>
          </div>
        </div>
        <div>
          <div class="w-full h-[1rem] bg-blue-800 rounded-full" />
          <div class="p-6 pt-4">
            <h2 class="font-bold text-3xl mb-4">
              Kết Nối & Sở Hữu
            </h2>
            <p class="text-2xl">
              Một cú nhấp chuột để kết nối Core Wallet và nhận toàn quyền sở hữu tài sản, sẵn sàng giao dịch trên "The Citadel".
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>

</style>