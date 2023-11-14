
<script setup lang="ts">
import ResultCard from '@src/components/ResultCard.vue';
import TheSearch from '@src/components/TheSearch.vue';
import { useSearchStore } from '@src/store/search.store';

const store = useSearchStore();
</script>

<template>
  <div class="home-page">
    <TheSearch />

    <!-- Загрузка -->
    <div
      v-if="store.searchResult === null"
      class="loader"
    />

    <!-- Ничего не нашлось  -->
    <div
      v-else-if="store.searchResult?.length === 0"
      class="nothing"
    >
      Nothing... Try again
    </div>

    <!-- Результаты -->
    <div
      v-else
      class="cards"
    >
      <ResultCard
        v-for="item in store.searchResult"
        :key="item.place_id"
        v-bind="item"
      />
    </div>
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
