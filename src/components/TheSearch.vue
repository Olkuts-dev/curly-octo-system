<script lang="ts" setup>
  import { SearchApi } from '@src/api/index';
  import { onMounted, ref } from 'vue';
  import CustomInput from './CustomInput.vue';
  import { useSearchStore } from '@src/store/search.store';
import ResultCard from './ResultCard.vue';

  const searchStore = useSearchStore();
  const searchValue = ref<string>('');

  const search = async () => {
    searchStore.search(searchValue.value);
  };
  
</script>

<template>
  <CustomInput
    v-model="searchValue"
    :delay="200"
    placeholder="Поиск... "
    @update:model-value="search"
  />
  <div v-if="searchStore.searchResult === null" class="loader">

  </div>
  <div class="cards" v-else>
    <template
      v-for="item in searchStore.searchResult"
      :key="item.place_id"
    >
      <ResultCard v-bind="item" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
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

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}
</style>