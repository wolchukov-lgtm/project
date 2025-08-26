<script setup lang="ts">
const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
const id = route.params.id;
const lang = useLang();
const theme = useTheme();
const themes = useThemes();

const languages = useLanguages();

let langCor = "ru"
let langText = "Крупнейшее обновление системы профессиональных камер за всю историю. Дисплей Super Retina XDR с улучшенной поддержкой для более быстрой и отзывчивой работы. Молниеносный чип A15 Bionic. Прочный дизайн и огромный скачок в времени автономной работы. Это Профессионал, не похожий ни на кого другого."
let langAdd = "Добавыить в корзину"
let lang1 = "Дисплей Super Retina XDR"
let lang2 = "Керамический экран"
let lang3 = "Поддержка 5G"
let lang4 = "Бионический чип A15"
let lang5 = "Профессиональная система камер"
let lang6 = "Лидарный сканер"
let lang7 = "Запись в формате Dolby Vision"
let langS1 = "полноэкранный OLED-дисплей с диагональю 6,1 дюйма"
let langS2 = "в 4 раза более высокая производительность при сбрасывании"
let langS3 = "Поддержка 5G"
let langS4 = "Бионический чип A15"
let langS5 = "Профессиональная система камер"
let langS6 = "Лидарный сканер"
let langS7 = "Запись в формате Dolby Vision"

let themeOr = "white"
let themeCol = "bg-white"
let themeLet = "text-[#111318]"

function changeTheme(theme) {
  if (themeOr == "white")  {
    themeOr = "dark"
    themeCol = "bg-black"
    themeLet = "text-[#ffffff]"
    return themeOr, themeCol, themeLet
  } else if (themeOr == "dark")  {
    themeOr = "fr"
    themeCol = "bg-white"
    themeLet = "text-[#111318]"
    return themeOr, themeCol, themeLet
  }
}

function changeLang(lang, langText) {
  if (langCor == "ru")  {
    langCor = "en"
    langText = "The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Durable design and a huge leap in battery life. This is a Pro unlike any other."
    langAdd = "Add to bag"
    lang1 = "Super Retina XDR display"
    lang2 = "Ceramic Shield"
    lang3 = "5G capable"
    lang4 = "A15 Bionic chip"
    lang5 = "Pro camera system"
    lang6 = "LiDAR Scanner"
    lang7 = "Dolby Vision recording"
    langS1 = "6.1-inch (diagonal) all-screen OLED display"
    langS2 = "4x better drop performance"
    langS3 = "Superfast downloads and high-quality streaming"
    langS4 = "50% faster CPU and GPU than any other smartphone chip"
    langS5 = "12MP camera system"
    langS6 = "Cinematic mode"
    langS7 = "ProRAW and ProRes video"
    return langCor, langText
  } else if (langCor == "en")  {
    langCor = "fr"
    langText = "La plus grande mise à niveau de système de caméra professionnelle jamais réalisée. Écran Super Retina XDR avec ProMotion pour une sensation plus rapide et plus réactive. Puce bionique A15 ultra-rapide. Conception durable et un énorme bond en avant dans la durée de vie de la batterie. C'est un Pro pas comme les autres."
    langAdd = "Ajouter au panier"
    lang1 = "Écran Super Retina XDR"
    lang2 = "Bouclier en Céramique"
    lang3 = "Compatible 5G"
    lang4 = "Puce A15 bionique"
    lang5 = "Système de caméra Pro"
    lang6 = "Scanneur LiDAR"
    lang7 = "Enregistrement Dolby Vision"
    langS1 = "écran OLED tout écran de 6,1 pouces (diagonale)"
    langS2 = "4x meilleures performances de chute"
    langS3 = "Téléchargements ultra-rapides et streaming de haute qualité"
    langS4 = "CPU et GPU 50% plus rapides que toute autre puce de smartphone"
    langS5 = "Système de caméra 12MP"
    langS6 = "Mode cinématique"
    langS7 = "Vidéo professionnelle RAW et ProRes"
    return langCor, langText
  } else if (langCor == "fr")  {
    langCor = "sp"
    langText = "La mayor actualización del sistema de cámara profesional de la historia. Pantalla Super Retina XDR con promoción para una sensación más rápida y receptiva. Chip biónico A15 ultrarrápido. Diseño duradero y un gran salto en la duración de la batería. Este es un profesional diferente a cualquier otro."
    langAdd = "Añadir a la bolsa"
    lang1 = "Pantalla Super Retina XDR"
    lang2 = "Escudo de Cerámica"
    lang3 = "Capacidad 5G"
    lang4 = "Chip biónico A15"
    lang5 = "Sistema de cámara profesional"
    lang6 = "Escáner LiDAR"
    lang7 = "Grabación Dolby Visión"
    langS1 = "pantalla OLED de pantalla completa de 6,1 pulgadas (diagonal)"
    langS2 = "4 veces mejor rendimiento de caída"
    langS3 = "Descargas ultrarrápidas y streaming de alta calidad"
    langS4 = "CPU y GPU un 50% más rápidas que cualquier otro chip de teléfono inteligente"
    langS5 = "Sistema de cámara de 12MP"
    langS6 = "Modo cinematográfico"
    langS7 = "Vídeo profesional RAW y ProRes"
    return langCor, langText
  } else if (langCor == "sp")  {
    langCor = "ru"
    langText = "Крупнейшее обновление системы профессиональных камер за всю историю. Дисплей Super Retina XDR с улучшенной поддержкой для более быстрой и отзывчивой работы. Молниеносный чип A15 Bionic. Прочный дизайн и огромный скачок в времени автономной работы. Это Профессионал, не похожий ни на кого другого."
    langAdd = "Добавыить в корзину"
    lang1 = "Дисплей Super Retina XDR"
    lang2 = "Керамический экран"
    lang3 = "Поддержка 5G"
    lang4 = "Бионический чип A15"
    lang5 = "Профессиональная система камер"
    lang6 = "Лидарный сканер"
    lang7 = "Запись в формате Dolby Vision"
    langS1 = "полноэкранный OLED-дисплей с диагональю 6,1 дюйма"
    langS2 = "в 4 раза более высокая производительность при сбрасывании"
    langS3 = "Сверхбыстрая загрузка и высококачественная потоковая передача"
    langS4 = "процессор и графический процессор на 50% быстрее, чем любой другой чип для смартфонов"
    langS5 = "Система камер с разрешением 12 МП"
    langS6 = "Кинематографический режим"
    langS7 = "Профессиональное видео в формате RAW и ProRes"
    return langCor, langText
  }
}

</script>

<template>
<h2>Тема: {{ theme }}</h2>
<h2>Язык: {{ langCor }}</h2>

<UButton :ui="{ rounded: 'rounded-full' }" @click="theme = changeTheme(themeOr)">Сменить тему</UButton>

<UButton :ui="{ rounded: 'rounded-full' }" @click="lang = changeLang(langCor)">Сменить язык</UButton>

<div class="gap-1 px-6 flex flex-1 justify-center py-5" :class="themeCol">
    <div class="layout-content-container flex flex-col max-w-[920px] flex-1">
      <div class="flex flex-wrap gap-2 p-4">
        <a class="text-base font-medium leading-normal" :class="themeLet" href="#">Home</a>
        <span class="text-[#636f88] text-base font-medium leading-normal" >/</span>
        <a class="text-base font-medium leading-normal" :class="themeLet" href="#">iPhone</a>
        <span class="text-[#636f88] text-base font-medium leading-normal">/</span>
        <span class=" text-base font-medium leading-normal" :class="themeLet">iPhone {{ id }} Pro Max</span>
      </div>
      <div class="flex flex-wrap justify-between gap-3 p-4">
        <div class="flex min-w-72 flex-col gap-3">
          <p class="text-[#111318] tracking-light text-[32px] font-bold leading-tight">iPhone {{ id }} Pro</p>
          <p class="text-[#636f88] text-sm font-normal leading-normal">$999</p>
        </div>
      </div>
      <div class="pb-3">
        <div class="flex border-b border-[#dcdfe5] px-4 gap-8">
          <NuxtLink :to="'../16'"><a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#636f88] pb-[13px] pt-4" href="#">
            <p class="text-[#636f88] text-sm font-bold leading-normal tracking-[0.015em]" >Overview</p>
          </a></NuxtLink>
          <a class="flex flex-col items-center justify-center border-b-[3px] border-b-[#111318] text-[#111318] pb-[13px] pt-4" href="#">
            <p class="text-[#111318] text-sm font-bold leading-normal tracking-[0.015em]">Tech Specs</p>
          </a>
          <NuxtLink :to="'../pricing/id'"><a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#636f88] pb-[13px] pt-4" href="#">
            <p class="text-[#636f88] text-sm font-bold leading-normal tracking-[0.015em]">Pricing</p>
          </a></NuxtLink>
          <NuxtLink :to="'../Software/id'"><a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#636f88] pb-[13px] pt-4" href="#">
            <p class="text-[#636f88] text-sm font-bold leading-normal tracking-[0.015em]">Software</p>
          </a></NuxtLink>
        </div>
      </div>
      <!-- <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"> -->
    <!-- <div class="flex flex-col gap-3">
      <div
        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        style='background-image: url("https://cdn.usegalileo.ai/stability/dc51bab8-a04d-4144-9452-346a96b8a7a3.png");'
      ></div>
    </div>
    <div class="flex flex-col gap-3">
      <div
        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        style='background-image: url("https://cdn.usegalileo.ai/sdxl10/dd520496-c3b7-49d7-aa2f-33ef2a37166d.png");'
      ></div>
    </div>
    <div class="flex flex-col gap-3">
      <div
        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        style='background-image: url("https://cdn.usegalileo.ai/stability/8ce1bf3c-d999-41ff-af8d-178b36a84898.png");'
      ></div>
    </div>
    <div class="flex flex-col gap-3">
      <div
        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        style='background-image: url("https://cdn.usegalileo.ai/stability/c64a18b9-76dc-4247-938a-29620fad3a5f.png");'
      ></div>
    </div>
    <div class="flex flex-col gap-3">
      <div
        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        style='background-image: url("https://cdn.usegalileo.ai/stability/a17d420d-bf31-4224-8d55-9ee3fe5fba6a.png");'
      ></div>
    </div>
    <div class="flex flex-col gap-3">
      <div
        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        style='background-image: url("https://cdn.usegalileo.ai/stability/48b3dcfd-79f1-4a58-984d-b7b6b03eac9b.png");'
      ></div>
    </div>
  </div> -->
      <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">iPhone 13 Pro</h3>
      <p class="text-[#111318] text-base font-normal leading-normal pb-3 pt-1 px-4">
        {{ lang }}
      </p>
      <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Tech Specs</h3>
      <div class="p-4 grid grid-cols-2">
        <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2">
          <p class="text-[#636f88] text-sm font-normal leading-normal">{{ lang1 }}</p>
          <p class="text-[#111318] text-sm font-normal leading-normal">{{ langS1 }}</p>
        </div>
        <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pl-2">
          <p class="text-[#636f88] text-sm font-normal leading-normal">{{ lang2 }}</p>
          <p class="text-[#111318] text-sm font-normal leading-normal">{{ langS2 }}</p>
        </div>
        <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2">
          <p class="text-[#636f88] text-sm font-normal leading-normal">{{ lang3 }}</p>
          <p class="text-[#111318] text-sm font-normal leading-normal">{{ langS3 }}</p>
        </div>
        <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pl-2">
          <p class="text-[#636f88] text-sm font-normal leading-normal">{{ lang4 }}</p>
          <p class="text-[#111318] text-sm font-normal leading-normal">{{ langS4 }}</p>
        </div>
        <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2">
          <p class="text-[#636f88] text-sm font-normal leading-normal">{{ lang5 }}</p>
          <p class="text-[#111318] text-sm font-normal leading-normal">{{ langS5 }}</p>
        </div>
        <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pl-2">
          <p class="text-[#636f88] text-sm font-normal leading-normal">{{ lang6 }}</p>
          <p class="text-[#111318] text-sm font-normal leading-normal">{{ langS6 }}</p>
        </div>
        <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2 col-span-2 pr-[50%]">
          <p class="text-[#636f88] text-sm font-normal leading-normal">{{ lang7 }}</p>
          <p class="text-[#111318] text-sm font-normal leading-normal">{{ langS7 }}</p>
        </div>
      </div>
      <div class="flex px-4 py-3 justify-start">
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#3571e9] text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span class="truncate">{{ langAdd }}</span>
        </button>
      </div>
    </div>
    <div class="layout-content-container flex flex-col w-[360px]">
      <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Select your iPhone 13 Pro</h3>
      <div class="flex flex-wrap gap-5 p-4">
        <label
          class="size-10 rounded-full border border-[#dcdfe5] ring-[color-mix(in_srgb,#111318_50%,_transparent)] has-[:checked]:border-[3px] has-[:checked]:border-white has-[:checked]:ring"
          style="background-color: rgb(0, 0, 0);"
        >
          <input type="radio" class="invisible" name="7c4caaa2-55e9-419f-a4a3-f9b0087fef62" checked = "false" />
        </label>
        <label
          class="size-10 rounded-full border border-[#dcdfe5] ring-[color-mix(in_srgb,#111318_50%,_transparent)] has-[:checked]:border-[3px] has-[:checked]:border-white has-[:checked]:ring"
          style="background-color: rgb(255, 255, 255);"
        >
          <input type="radio" class="invisible" name="7c4caaa2-55e9-419f-a4a3-f9b0087fef62" />
        </label>
      </div>
      <div class="flex flex-wrap gap-3 p-4">
        <label
          class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dcdfe5] px-4 h-11 text-[#111318] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3571e9] relative cursor-pointer"
        >
          128GB
          <input type="radio" class="invisible absolute" name="9aab891a-7a29-414a-8f17-07fe579482ca" />
        </label>
        <label
          class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dcdfe5] px-4 h-11 text-[#111318] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3571e9] relative cursor-pointer"
        >
          256GB
          <input type="radio" class="invisible absolute" name="9aab891a-7a29-414a-8f17-07fe579482ca" />
        </label>
        <label
          class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dcdfe5] px-4 h-11 text-[#111318] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3571e9] relative cursor-pointer"
        >
          512GB
          <input type="radio" class="invisible absolute" name="9aab891a-7a29-414a-8f17-07fe579482ca" />
        </label>
        <label
          class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dcdfe5] px-4 h-11 text-[#111318] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3571e9] relative cursor-pointer"
        >
          1TB
          <input type="radio" class="invisible absolute" name="9aab891a-7a29-414a-8f17-07fe579482ca" />
        </label>
      </div>
      <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div
          class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
          style='background-image: url("https://cdn.usegalileo.ai/sdxl10/8ff92ef5-7990-4ad5-927c-413a653862c4.png");'
        ></div>
        <div class="flex flex-col justify-center">
          <p class="text-[#111318] text-base font-medium leading-normal line-clamp-1">Pay over time with Apple Card Monthly Installments</p>
          <p class="text-[#636f88] text-sm font-normal leading-normal line-clamp-2">From $25/mo or $599 with trade-in</p>
        </div>
      </div>
      <p class="text-[#636f88] text-sm font-normal leading-normal pb-3 pt-1 px-4">Or pay $999 upfront</p>
      <p class="text-[#636f88] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">Buy directly from Apple</p>
      <p class="text-[#636f88] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">Learn more about financing</p>
    </div>
  </div></template>