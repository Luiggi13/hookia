<template>
  <router-view />
</template>
<style lang="scss" scoped>
.my-bg {
  background-color: black;
  background-image: url(./assets/bg_pattern-small.png);
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
</style>
