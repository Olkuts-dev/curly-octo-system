<script lang="ts" setup>
import { SearchResult } from '@src/types/search.dto';
import { computed } from 'vue';

  const props = defineProps<SearchResult>();
</script>

<template>
  <div class="card">
    <p class="id">
      #{{ props.place_id }}
    </p>
    <p class="name">
      <span>{{ props.display_name }}</span>
      <span class="type">{{ props.type }}</span>
    </p>
    <p class="coords">
      {{ props.lat }}, {{ props.lon }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.id {
  font-size: 14px;
  opacity: 0.5;
  margin-bottom: 10px;
}
.card {
  border-radius: 10px;
  background-color: white;
  padding: 20px 10px;
  width: 80vw;
  max-width: 600px;

  .name {
    color: var(--primary-text);
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    margin-bottom: 10px;

    .type {
      margin-left: auto;
      color: var(--primary-text);
      font-weight: 400;
      font-size: 16px;
      opacity: 0.5;
      text-transform: capitalize;
    }
  }
  .coords {
  }
}
</style>