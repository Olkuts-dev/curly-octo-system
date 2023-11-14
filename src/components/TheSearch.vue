<script lang="ts" setup>
  import { ref } from 'vue';
  import CustomInput from '@src/components/CustomInput.vue';
  import { useSearchStore } from '@src/store/search.store';

  const searchStore = useSearchStore();
  const searchValue = ref<string>('');

  const search = async (): Promise<void> => {
    if (!searchValue.value.trim().length) {
      return;
    }

    await searchStore.search(searchValue.value.trim());
  };
  
</script>

<template>
  <CustomInput
    v-model="searchValue"
    placeholder="Поиск... "
    :delay="100"
    @update:model-value="search"
  />
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
</style>