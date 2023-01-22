<template>
  <div class="my-bg flex h-screen w-screen max-w-full items-center justify-center text-white relative">
    <div class="bg-overlay" />
    <a class="sm:w-full w-full h-auto z-20 flex items-center justify-center" href="https://www.instagram.com/hook.ia/" target="_blank" title="Hook.ia Instagram profile">
      <img src="./assets/logo.png">
    </a>
    <!-- <template v-if="recipeStore.recipesList.hits?.length">
      <AppNavigation class="h-screen mybg w-60 fixed left-0 top-0" />
      <div class="block w-full h-screen pl-60">
        <div class="col-span-10 py-3 px-10 h-screen bg-violet-200">
          <div class="h-1/3">
            <Header />
            <section class="flex flex-row md:flex-row md:items-center mt-10 px-4">
              <Subheader />
            </section>
          </div>
          <div class="h-2/4">
            <section class="flex flex-col px-4 h-full mt-10">
              <GridSection />
            </section>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <LoadingCircle />
    </template> -->
  </div>
  <!-- <AppFooter /> -->
</template>

<script setup lang="ts">
// import AppFooter from './components/AppFooter.vue'
// import LoadingCircle from './components/shared/loading/LoadingCircle.vue'
// import AppNavigation from './components/AppNavigation.vue'
// import Header from './components/shared/header/Header.vue'
// import Subheader from './components/shared/header/Subheader.vue'
// import GridSection from './components/shared/grid-section/GridSection.vue'
// import { onBeforeMount } from 'vue'
// import { useRecipeStore } from './store/recipes'

// const recipeStore = useRecipeStore()

// onBeforeMount(async () => await recipeStore.getRecipes(recipeStore.recipesList._links?.next.href ?? ''))

</script>
<style lang="scss" scoped>
.my-bg {
  background-color: black;
  background-image: url(./assets/bg_pattern-small.png);
 }
 .bg-overlay {
    position: absolute;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,.63);
    filter: blur(100px);
    content: "";
    width: 100%;
    height: 100%;
    z-index: 1;
 }
</style>
