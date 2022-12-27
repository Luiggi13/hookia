<template>
  <div class="container h-screen w-screen max-w-full">
    <div class="grid grid-cols-12 gap-0 max-h-max">
      <AppNavigation class="sm:block md:block lg:block xl:block 2xl:block col-span-2" />
      <div class="col-span-10 bg-violet-200 py-3 px-10 max-h-max">
        <div>
          <Header />
          <section class="flex flex-row md:flex-col md:items-center mt-10 px-4">
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
