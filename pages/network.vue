<script setup>
// const {data: joke} = await useFetch(`https://official-joke-api.appspot.com/random_joke`);
const {data: joke, status} = await useAsyncData(`joke`, () => $fetch(`https://official-joke-api.appspot.com/random_joke`));
console.log(joke.value);
async function  createUser() {
  const {data: user, status} = await useAsyncData(`user`, () => useFetch(`https://670cdcf87e5a228ec1d1adcf.mockapi.io/users`, {
      method: 'POST',
      body: {
          id: 1,
          message: 'Messagy',
          name: 'Anton'
      }
  }));
}
async function getUser(id) {
  const {data: user, status} = await useAsyncData(`user`, () => $fetch(`https://670cdcf87e5a228ec1d1adcf.mockapi.io/users/${id}`, {
      method: 'GET'
  }));
}

let users = await getUser(1)


const route = useRoute();
const NuxtApp = useNuxtApp();
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


</script>

<template>

  <UInputMenu v-model="lang" :options="languages" />

  <UButton :ui="{ rounded: 'rounded-full' }" @click="theme = 'white'">Сменить тему на светлую</UButton>
  <UButton :ui="{ rounded: 'rounded-full' }" @click="themes = 'dark'">Сменить тему на тёмную</UButton>

  <UButton :ui="{ rounded: 'rounded-full' }" @click="lang = changeLang(langCor)">Сменить язык</UButton>

    <div class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style='font-family: Newsreader, "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
        <div class="gap-1 px-6 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-80">
            <div class="flex h-full min-h-[700px] flex-col justify-between bg-white p-4">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#f0f2f4]">
                    <div class="text-[#111418]" data-icon="House" data-size="24px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Главная</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#111418]" data-icon="FireSimple" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85ZM128,216a72.08,72.08,0,0,1-72-72c0-22,8.09-44.79,24.06-67.84l26.37,25.58a8,8,0,0,0,13.09-3l22.27-61.07C164.21,58.08,200,97.91,200,144A72.08,72.08,0,0,1,128,216Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Тренды</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#111418]" data-icon="PlayCircle" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Подписки</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#111418]" data-icon="FolderSimple" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33l27.74,20.8a16.12,16.12,0,0,0,9.6,3.2H216Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Библиотека</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#111418]" data-icon="Clock" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">История</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#111418]" data-icon="Video" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Ваши видео</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="@[480px]:px-4 @[480px]:py-3">
                <div
                  class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[218px]"
                  style='background-image: url("https://informatics.ru/img/SHPlogo-1200x630.png");'
                ></div>
              </div>
            </div>
            <div class="flex p-4 @container">
              <div class="flex w-full flex-col gap-4 items-center">
                <div class="flex gap-4 flex-col items-center">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style='background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBT_h9-lRwaWR4TlaMawZNr_WvNm1XqnxRmQ&s");'
                  ></div>
                  <div class="flex flex-col items-center justify-center justify-center">
                    <p class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Наська Левушкина</p>
                    <p class="text-[#637588] text-base font-normal leading-normal text-center">@webdesigngod</p>
                  </div>
                </div>
                <div class="flex w-full max-w-[480px] gap-3 @[480px]:w-auto">
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto"
                  >
                    <span class="truncate">Подписаться</span>
                  </button>
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2884e6] text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto"
                  >
                    <span class="truncate">Написать</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap gap-3 px-4 py-3">
              <div class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#dce0e5] p-3 items-center text-center">
                <p class="text-[#111418] tracking-light text-2xl font-bold leading-tight">3</p>
                <div class="flex items-center gap-2"><p class="text-[#637588] text-sm font-normal leading-normal">Публикации</p></div>
              </div>
              <div class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#dce0e5] p-3 items-center text-center">
                <p class="text-[#111418] tracking-light text-2xl font-bold leading-tight">999+</p>
                <div class="flex items-center gap-2"><p class="text-[#637588] text-sm font-normal leading-normal">Подписчиков</p></div>
              </div>
              <div class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#dce0e5] p-3 items-center text-center">
                <p class="text-[#111418] tracking-light text-2xl font-bold leading-tight">1.8K</p>
                <div class="flex items-center gap-2"><p class="text-[#637588] text-sm font-normal leading-normal">Подписок</p></div>
              </div>
            </div>
            <div class="pb-3">
              <div class="flex border-b border-[#dce0e5] px-4 gap-8">
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] pb-[13px] pt-4" href="#">
                  <p class="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">Посты</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4" href="#">
                  <p class="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">Действия</p>
                </a>
              </div>
            </div>

            <!--Трогать нужно только этот div --> 
            <div id="posts">
              <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-xl">
                <div class="flex flex-[2_2_0px] flex-col gap-4">
                  <div class="flex flex-col gap-1">
                    <p class="text-[#111418] text-base font-normal leading-tight">Тип шутки: {{ joke.type }}</p>
                    <p class="text-[#111418] text-base font-bold leading-tight">{{ joke.setup }}</p>

                    <p class="text-[#637588] text-sm font-normal leading-normal">
                        {{ joke.punchline }}
                    </p>
                  </div>
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit"
                  >
                    <span class="truncate">Read more</span>
                  </button>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style='background-image: url("https://cdn.usegalileo.ai/stability/2beee341-a9e5-4499-8314-484844361b69.png");'
                ></div>
              </div>
            </div>
            <!-- <div id="users">
              <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-xl">
                <div class="flex flex-[2_2_0px] flex-col gap-4">
                  <div class="flex flex-col gap-1">
                    <p class="text-[#111418] text-base font-normal leading-tight">Имя юзера: {{ user.name }}</p>
                    <p class="text-[#111418] text-base font-bold leading-tight">Сообщение юзера {{ user.message }}</p>

                  </div>
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit"
                  >
                    <span class="truncate">Read more</span>
                  </button>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style='background-image: url("https://cdn.usegalileo.ai/stability/2beee341-a9e5-4499-8314-484844361b69.png");'
                ></div>
              </div>
            </div>
            </div> -->
            <!--Трогать нужно только этот div --> 
            </div>
          </div>
        </div>
      </div>
      </div>
</template>
