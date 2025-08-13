<script setup>
  import Layout from "@/components/Layout.vue";
  import BackgroundVideo from '@/assets/videos/home_bg.mp4'
</script>

<template>
  <Layout :video="BackgroundVideo" :next-route="'page7'">
    <div class="h-full p-6">
      <div class="h-full bg-black/60 backdrop-blur-sm rounded-2xl p-20 flex flex-col">
        <h1 class="font-medium text-7xl mb-12">
          Tầm Nhìn & Lộ Trình
        </h1>
        <h2 class="font-medium text-4xl mb-6">Từ GameJam Đến Dẫn Đầu Toàn Cầu</h2>

        <div class="relative grow">
          <div class="absolute h-full w-1 bg-blue-800 left-1/2 transform -translate-x-1/2" />
          <div class="grid grid-cols-2 h-full">
            <div class="flex flex-col justify-around">
              <div class="relative">
                <div class="absolute w-12 h-12 rounded-xl flex items-center justify-center bg-blue-800 -right-6">
                  <span>1</span>
                </div>

                <div class="flex justify-between">
                  <div class="mr-4">
                    <h2 class="font-medium text-2xl mb-4">Giai Đoạn 1 (Tháng 8 - 12/2025): Thu Hút Người Dùng Đại Chúng & Phát Triển IP</h2>
                    <ul class="list-disc list-inside text-xl">
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
                  <div class="mt-5 w-25">
                    <div class="h-1 w-full bg-blue-800"/>
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="absolute w-12 h-12 rounded-xl flex items-center justify-center bg-blue-800 -right-6">
                  <span>3</span>
                </div>

                <div class="flex justify-between">
                  <div class="mr-4">
                    <h2 class="font-medium text-2xl mb-4">Giai Đoạn 1 (Tháng 8 - 12/2025): Thu Hút Người Dùng Đại Chúng & Phát Triển IP</h2>
                    <ul class="list-disc list-inside text-xl">
                      <li class="mb-4">
                        Công bố tựa game thứ hai trong hệ sinh thái.
                      </li>
                      <li class="mb-4">
                        Tổ chức Giải Vô Địch Thế Giới MSCI đầu tiên.
                      </li>
                      <li class="mb-4">
                        Mở rộng IP sang các lĩnh vực phim ảnh và vật phẩm thương mại.
                      </li>
                    </ul>
                  </div>
                  <div class="mt-5 w-25">
                    <div class="h-1 w-full bg-blue-800"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="relative">
                <div class="absolute w-12 h-12 rounded-xl flex items-center justify-center bg-blue-800 -left-6">
                  <span>2</span>
                </div>

                <div class="flex justify-between">
                  <div class="mt-5 w-25">
                    <div class="h-1 w-full bg-blue-800"/>
                  </div>
                  <div class="ml-4">
                    <h2 class="font-medium text-2xl mb-4">Giai Đoạn 2 (2026): Phi Tập Trung Hóa & Thống Lĩnh eSports</h2>
                    <ul class="list-disc list-inside text-xl">
                      <li class="mb-4">
                        Chuyển giao quyền quản trị cốt lõi cho M-SCI DAO.
                      </li>
                      <li class="mb-4">
                        Ra mắt các Mùa giải eSports chính thức với tổng giải thưởng lớn.
                      </li>
                      <li class="mb-4">
                        Bắt đầu R&D cho tựa game tiếp theo trong vũ trụ MSCI.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>

</style>