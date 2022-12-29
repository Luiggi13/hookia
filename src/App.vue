<template>
  <div class="container h-screen w-screen max-w-full">
    <div class="grid grid-cols-12 gap-0 max-h-max">
      <AppNavigation class="hidden lg:block col-span-2" />
      <div class="col-span-10 py-3 px-10 max-h-max bg-violet-200">
        <div>
          <Header />
          <section class="flex flex-row md:flex-row md:items-center mt-10 px-4">
            <Subheader />
          </section>
        </div>
        <div>
          <section class="flex flex-col px-4 h-full mt-10">
            <GridSection class="h-full" />
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- <AppFooter /> -->
</template>

<script setup lang="ts">
// import AppFooter from './components/AppFooter.vue'
import AppNavigation from './components/AppNavigation.vue'
import Header from './components/shared/header/Header.vue'
import Subheader from './components/shared/header/Subheader.vue'
import GridSection from './components/shared/grid-section/GridSection.vue'
</script>
<style lang="scss" scoped>
.my-bg {
  background-color: #e0dad8;
  // background-image: url(./assets/bg-landing2.webp);
  background: rgba(250,183,99,1);

  background: url(./assets/bg-landing2.webp), linear-gradient(90deg, rgba(250,183,99,1) 25%, rgba(169,150,141,1) 30%);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;

}
</style>
