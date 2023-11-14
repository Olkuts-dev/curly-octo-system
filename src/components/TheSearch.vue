<script lang="ts" setup>
  import { ref } from 'vue';
  import CustomInput from '@src/components/DelayedInput.vue';
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