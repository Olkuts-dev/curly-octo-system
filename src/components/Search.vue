<script lang="ts" setup>
  import { SearchApi } from '@src/api/index'
import { Result } from 'postcss';
import { onMounted, ref } from 'vue';

  onMounted(async () => {
  })
  const searchValue = ref<string>('')
  const onSearch = async () => {
    const result = await SearchApi.search(searchValue.value)

    console.log(result)
  }
</script>

<template>
  <input v-model="searchValue">
  <button @click="onSearch">
    +
  </button>
</template>

<style lang="scss" scoped>

</style>