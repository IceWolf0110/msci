<script setup>
  import Layout from "@/components/Layout.vue";
  import BackgroundVideo from '@/assets/videos/home_bg.mp4'
</script>

<template>
  <Layout :video="BackgroundVideo">
      <div class="h-full container mx-auto px-8 pt-6">
        <div class="h-full flex flex-col justify-around">
          <h1 class="font-bold text-2xl mb-4">
            Gameplay Hấp Dẫn, Hệ Sinh Thái Bền Vững
          </h1>

          <div class="grow">
            <div class="grid grid-cols-3 gap-4 mb-3">
              <div class="px-2 py-1 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
                <div class="relative w-full bg-blue-400 h-1 rounded-full mt-4 mb-2">
                  <div
                      class="absolute p-4 bg-blue-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="relative">
                  <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    hi
                  </span>
                    </div>
                  </div>
                </div>
                <div class="p-2">
                  <h3 class="font-bold text-md mb-2">Game PVE (Web3)</h3>
                  <p>
                    Trải nghiệm chiến đấu với Boss, vượt màn đầy thử thách, nơi người chơi phải linh hoạt chuyển đổi nhân
                    vật và kỹ năng để chiến thắng, nhận về các NFT giá trị.
                  </p>
                </div>
              </div>
              <div class="px-2 py-1 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
                <div class="relative w-full bg-blue-400 h-1 rounded-full mt-4 mb-2">
                  <div
                      class="absolute p-4 bg-blue-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="relative">
                  <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    hi
                  </span>
                    </div>
                  </div>
                </div>
                <div class="p-2">
                  <h3 class="font-bold text-md mb-2">Game MOBA (Web2)</h3>
                  <p>
                    Trải nghiệm "Người Nhện cầm Súng" độc đáo. Những trận đấu súng trên không, đu dây giữa các tòa nhà và
                    các pha đột kích với tốc độ nghẹt thở, đòi hỏi kỹ năng cá nhân và chiến thuật đồng đội đỉnh cao.
                  </p>
                </div>
              </div>
              <div class="px-2 py-1 bg-slate-400/10 backdrop-blur-sm rounded-xl shadow-xl">
                <div class="relative w-full bg-blue-400 h-1 rounded-full mt-4 mb-2">
                  <div
                      class="absolute p-4 bg-blue-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="relative">
                  <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    hi
                  </span>
                    </div>
                  </div>
                </div>
                <div class="p-2">
                  <h3 class="font-bold text-md mb-2">Kết Nối Hệ Sinh Thái</h3>
                  <p>
                    Phần thưởng từ PVE (NFT Anh Hùng) được sử dụng trực tiếp trong MOBA. Chiến thắng trong MOBA mở khóa nội
                    dung trong hệ sinh thái "Read-and-Earn".
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-3">
              <h2 class="font text-md mb-6">
                Linh Hồn Của Hệ Sinh Thái: Tiểu Thuyết M-SCI
              </h2>
              <p class="text-sm">
                Cốt lõi của hệ sinh thái chúng tôi là tiểu thuyết khoa học viễn tưởng "Musk Institute of Science and
                Cybernetic Intelligence" (M-SCI). Lấy bối cảnh năm 2049, khi công nghệ Neuralink của Elon Musk đã thay đổi
                thế giới, Trái Đất đối mặt với nguy cơ diệt vong từ các thế lực ngoài vũ trụ. Học viện M-SCI, do chính Elon
                Musk lãnh đạo, là tuyến phòng thủ cuối cùng của nhân loại.
              </p>
            </div>

            <div class="grid grid-cols-3 px-6 mb-3">
              <div>
                <div class="flex relative h-12 bg-blue-700 w-11/12 items-center justify-center mb-3">
                  <div class="absolute -left-6 w-6  overflow-hidden inline-block">
                    <div class="h-12 bg-blue-700 -rotate-45 transform origin-top-left"></div>
                  </div>
                  <div class="absolute -left-6 w-6  overflow-hidden inline-block">
                    <div class="h-12 bg-blue-700 rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <span>e</span>
                  <div
                      class="absolute -right-6 border-solid border-l-blue-700  border-l-24 border-y-transparent border-y-24 border-r-0"></div>
                </div>
                <div>
                  <h3 class="font-medium text-md">
                    KHÁM PHÁ
                  </h3>
                  <p>
                    Đắm mình vào vũ trụ M-SCI, theo chân người hùng Elon Musk.
                  </p>
                </div>
              </div>
              <div>
                <div class="flex relative h-12 bg-blue-700 w-11/12 items-center justify-center mb-3">
                  <div class="absolute -left-6 w-6  overflow-hidden inline-block">
                    <div class="h-12 bg-blue-700 -rotate-45 transform origin-top-left"></div>
                  </div>
                  <div class="absolute -left-6 w-6  overflow-hidden inline-block">
                    <div class="h-12 bg-blue-700 rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <span>e</span>
                  <div
                      class="absolute -right-6 border-solid border-l-blue-700  border-l-24 border-y-transparent border-y-24 border-r-0"></div>
                </div>
                <div>
                  <h3 class="font-medium text-md">
                    CHỨNG TỎ
                  </h3>
                  <p>
                    Chứng tỏ sự am hiểu về cốt truyện qua các thử thách.
                  </p>
                </div>
              </div>
              <div>
                <div class="flex relative h-12 bg-blue-700 w-11/12 items-center justify-center mb-3">
                  <div class="absolute -left-6 w-6  overflow-hidden inline-block">
                    <div class="h-12 bg-blue-700 -rotate-45 transform origin-top-left"></div>
                  </div>
                  <div class="absolute -left-6 w-6  overflow-hidden inline-block">
                    <div class="h-12 bg-blue-700 rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <span>e</span>
                  <div
                      class="absolute -right-6 border-solid border-l-blue-700  border-l-24 border-y-transparent border-y-24 border-r-0"></div>
                </div>
                <div>
                  <h3 class="font-medium text-md">
                    NHẬN THƯỞNG
                  </h3>
                  <p>
                    Mở khóa Token $MSCI, vật phẩm và các anh hùng độc quyền trong game.
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-6">
              <h2 class="font text-md mb-3">
                Tokenomics Bền Vững
              </h2>
              <p>
                Mô hình "Phát Hành Cân Bằng Động" của chúng tôi đảm bảo giá trị lâu dài cho token và tưởng thưởng cho những
                người tham gia gắn bó.
              </p>
            </div>

            <div class="relative overflow-x-auto shadow-md rounded-lg border border-gray-700">
              <table class="table-fixed w-full text-left">
                <thead class="capitalize bg-slate-400/10 border-b border-gray-700">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Hạng Mục
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Phân Bổ (%)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Chi Tiết
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr class="border-b border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium">
                    Cộng Đồng & Hệ Sinh Thái
                  </th>
                  <td class="px-6 py-4">
                    65%
                  </td>
                  <td class="px-6 py-4">
                    Play/Read-to-Earn, Staking, Marketing, DAO
                  </td>
                </tr>
                <tr class="capitalize bg-slate-400/10 border-b border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium">
                    Phát Triển & Tăng Trưởng
                  </th>
                  <td class="px-6 py-4">
                    35%
                  </td>
                  <td class="px-6 py-4">
                    Đội ngũ, Cố vấn, Phát triển, Thanh khoản
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="px-6 py-4 font-medium">
                    Tổng Cộng
                  </th>
                  <td class="px-6 py-4">
                    100%
                  </td>
                  <td class="px-6 py-4">
                    (1 tỷ $MSCI)
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  </Layout>
</template>

<style scoped>

</style>