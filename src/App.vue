<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@use "./assets/scss/index.scss";
#app {
  background-color: var(--background);
  height: 100vh;
  width: 100vw;
}
</style>
