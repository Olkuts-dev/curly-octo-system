
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
  
  .cards {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 80%;
    overflow-y: scroll;

    // для скроллбара
    padding-right: 20px;
    margin-right: -20px;
  }

  .nothing {
    font-size: 18px;
    color: var(--primary-text);
    opacity: 0.5;
    margin-top: 20px;
    height: 50px;
  }

  .loader {
    border: 5px solid white;
    border-top: 5px solid var(--primary);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: 20px;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
}
</style>
