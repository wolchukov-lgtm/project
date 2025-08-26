<template>
  
  <body>
    <div class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style='font-family: "Be Vietnam Pro", "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
    <AppHeader></AppHeader><!--компонент, отвечающий за шапку сайта-->

    <slot></slot><!--компонент,куда вставляется page-->

    <AppFooter></AppFooter><!--компонент, отвечающий за подвал сайта-->
  </div></div>
  </body>

</template>