<template>
  <div
    class="my-bg flex flex-col h-full w-screen max-w-full items-center text-white relative pb-[50px]"
  >
    <div class="bg-overlay" />
    <div class="flex mb-6 z-20 justify-center items-center">
      <router-link class="w-11/12 lg:w-6/12 h-auto z-20 flex items-center justify-center" to="/">
        <img src="../assets/logo.png">
      </router-link>
    </div>
    <div class="mb-6 z-20">
      <h1 class="text-3xl text-center w-11/12 lg:w-full uppercase font-black italic">
        <img class="h-28" src="../assets/download_btn.png">
      </h1>
    </div>
    <div class="container grid md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto z-20 grid-rows-1">
      <div class="w-full rounded mb-5" />
      <div class="w-full rounded mb-5">
        <a href="@assets/wallpapers/wallpaper_security_sm.png" alt="Hookia wallpaper security day #1" download>
          <img class="img__med mx-auto glow-pinker hover:glow-pinker-0 p-1 rounded-md" src="@assets/wallpapers/wallpaper_security_sm.png" alt="Hookia wallpaper security day #1">
          <p class="text-pinker text-center mt-5 text-xl font-bold">Wallpaper 1# : Security Day</p>
          <p class="bg-green-600 text-white mx-auto mt-3 text-center rounded-md p-3 w-1/2">Download</p>
        </a>
        <a href="src/assets/wallpapers/wallpaper_security.png" target="_blank" alt="Hookia wallpaper security day #1">
          <p class="bg-green-600 text-white mx-auto mt-3 text-center rounded-md p-3 w-1/2">Open in new tab</p>
        </a>
      </div>
      <div class="w-full rounded mb-5" />
    </div>
    <div class="flex mt-5 mb-6 w-11/12 lg:w-6/12 items-center justify-center">
      <router-link
        to="/"
        class="text-white right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:focus:ring-0 z-20"
      >
        <img class="h-24" src="../assets/back.png">
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-bg {
  background-color: black;
  background-image: url(../assets/bg_pattern-small.png);
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .63);
  filter: blur(100px);
  content: "";
  width: 100%;
  height: 100%;
  z-index: 1;
}

.img__med {
  height: 500px;
}

.glow-pinker {
  box-shadow: 0px 0px 50px 0px #CC00FF;
}

.text-pinker {
  color: white;
}

.glow-pinker-0 {
  box-shadow: 0px 0px 0px 0px transparent;
}
</style>
