<script setup lang="ts">
const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
const id = route.params.id;
const lang = useLang();
const theme = useTheme();
const themes = useThemes();

const languages = useLanguages();

let langCor = "ru"
function changeLang(lang) {
  if (langCor == "ru")  {
    langCor = "en"
    return langCor
  } else if (langCor == "en")  {
    langCor = "fr"
    return langCor
  } else if (langCor == "fr")  {
    langCor = "sp"
    return langCor
  } else if (langCor == "sp")  {
    langCor = "ru"
    return langCor
  }
}

console.log('Первое изменение в проекте!')
</script>
<template>
  <UInputMenu v-model="lang" :options="languages" />

  <UButton :ui="{ rounded: 'rounded-full' }" @click="theme = 'white'">Сменить тему на светлую</UButton>
  <UButton :ui="{ rounded: 'rounded-full' }" @click="themes = 'dark'">Сменить тему на тёмную</UButton>

  <UButton :ui="{ rounded: 'rounded-full' }" @click="lang = changeLang(langCor)">Сменить язык</UButton>
  <h2>Привет, я могу увидеть сообщение</h2>
  <h2>Привет я увидел свои изменения</h2>
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap gap-2 p-4">
              <a class="text-[#636f88] text-base font-medium leading-normal" href="#">Products</a>
              <span class="text-[#636f88] text-base font-medium leading-normal">/</span>
              <span class="text-[#111318] text-base font-medium leading-normal">Top 4</span>
            </div>
            <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-[#111318] tracking-light text-[32px] font-bold leading-tight min-w-72">Mac</p></div>
            <div class="flex gap-3 p-3 flex-wrap pr-4">
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111318] text-sm font-medium leading-normal">New</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111318] text-sm font-medium leading-normal">$899 - $1,099</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111318] text-sm font-medium leading-normal">MacBook Air</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111318] text-sm font-medium leading-normal">MacBook Pro</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111318] text-sm font-medium leading-normal">13-inch</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111318] text-sm font-medium leading-normal">14-inch</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111318] text-sm font-medium leading-normal">16-inch</p>
              </div>
            </div>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <!--Тут лежит Nuxtlink-->
              <NuxtLink :to="'phones/16'"><div class="flex flex-col gap-3 pb-3">

                <div
                  class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style='background-image: url("https://iphoriya.ru/wp-content/uploads/iphone-16-pro-max-desert-titanium.webp");'
                ></div>
                <div>
                  <p class="text-[#111318] text-base font-medium leading-normal">IPhone 16 PRO MAX</p>
                  <p class="text-[#636f88] text-sm font-normal leading-normal">From $999 or $18.70/mo. for 12 mo.</p>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink :to="'mackBooks/13'">
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/stability/6480dc1c-2777-4ca1-ac2d-06da494b700c.png");'
                ></div>
                <div>
                  <p class="text-[#111318] text-base font-medium leading-normal">MacBook Pro 13-inch</p>
                  <p class="text-[#636f88] text-sm font-normal leading-normal">From $1,199 or $22.78/mo. for 12 mo.</p>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink :to="'mackBooks/14'">
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/stability/6480dc1c-2777-4ca1-ac2d-06da494b700c.png");'
                ></div>
                <div>
                  <p class="text-[#111318] text-base font-medium leading-normal">MacBook Pro 14-inch</p>
                  <p class="text-[#636f88] text-sm font-normal leading-normal">From $1,999 or $37.97/mo. for 12 mo.</p>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink :to="'mackBooks/16'">
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/stability/b2f27118-1c39-4fd5-8326-acf6c3dc42d5.png");'
                ></div>
                <div>
                  <p class="text-[#111318] text-base font-medium leading-normal">MacBook Pro 16-inch</p>
                  <p class="text-[#636f88] text-sm font-normal leading-normal">From $2,399 or $45.53/mo. for 12 mo.</p>
                </div>
              </div>
            </NuxtLink>
            </div>
          </div>
        </div>

</template>