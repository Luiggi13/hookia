<script setup lang="ts">
import LogoKudos from './shared/logo-kudos/LogoKudos.vue'
import UserSidebar from './shared/sidebar/user-sidebar/UserSidebar.vue'
import MenuSidebar from './shared/sidebar/user-sidebar/MenuSidebar.vue'
</script>

<template>
  <div class="h-screen mybg">
    <div class="bg-white pb-2 bg-superheader">
      <LogoKudos />
      <UserSidebar />
    </div>
    <MenuSidebar />
  </div>
</template>
<style lang="scss">
.mybg {
  background: url(../assets/bg-landing2.webp), linear-gradient(90deg, rgba(250, 183, 99, 1) 15%, #dfb68d 51%, #c7ad98 72%, #ad9b91 100%);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;
}

.bg-superheader {
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
}
</style>
