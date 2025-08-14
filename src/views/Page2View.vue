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
                      class="absolute p-3 bg-blue-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="relative">
                  <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                      <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                      <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                    </svg>
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
                      class="absolute p-3 bg-blue-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="relative">
                  <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                      <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                      <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                    </svg>
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
                      class="absolute p-3 bg-blue-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="relative">
                  <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                      <path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clip-rule="evenodd" />
                    </svg>
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
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                  </span>
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
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                  </span>
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
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                      <path fill-rule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 0 0 3 3h.27l-.155 1.705A1.875 1.875 0 0 0 7.232 22.5h9.536a1.875 1.875 0 0 0 1.867-2.045l-.155-1.705h.27a3 3 0 0 0 3-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0 0 18 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM16.5 6.205v-2.83A.375.375 0 0 0 16.125 3h-8.25a.375.375 0 0 0-.375.375v2.83a49.353 49.353 0 0 1 9 0Zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 0 1-.374.409H7.232a.375.375 0 0 1-.374-.409l.526-5.784a.373.373 0 0 1 .333-.337 41.741 41.741 0 0 1 8.566 0Zm.967-3.97a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H18a.75.75 0 0 1-.75-.75V10.5ZM15 9.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H15Z" clip-rule="evenodd" />
                    </svg>
                  </span>
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