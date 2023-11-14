
<script setup lang="ts">
import TheSearch from '@src/components/TheSearch.vue';
</script>

<template>
  <div class="home-page">
    <TheSearch />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
}
</style>
