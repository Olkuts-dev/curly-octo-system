<script lang="ts" setup>
  import { SearchResult } from '@src/types/search.dto';

  const props = defineProps<SearchResult>();
</script>

<template>
  <div class="card">
    <p class="id">
      <span>#{{ props.place_id }}</span>
      <span class="type">{{ props.type }}</span>
    </p>

    <p class="name">
      <span>{{ props.display_name }}</span>
    </p>

    <div class="licence">
      <span>{{ props.licence }}</span>
      <a
        class="link"
        target="_blank"
        :href="`https://nominatim.openstreetmap.org/ui/details.html?osmtype=${osm_type?.substring(0, 1).toUpperCase()}&osmid=${osm_id}&class=${category}`"
      >
        Details
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  background-color: white;
  padding: 20px 10px;
  width: 80vw;
  max-width: 600px;

  .id {
    font-size: 14px;
    opacity: 0.5;
    display: inline-flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    .type {
      margin-left: auto;
      color: var(--primary-text);
      font-weight: 400;
      font-size: 16px;
      opacity: 0.5;
      text-transform: capitalize;
    }
  }
  .name {
    color: var(--primary-text);
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .licence {
    display: inline-flex;
    align-items: end;
    margin-top: 10px;
    font-size: 12px;
    width: 100%;

    .link {
      margin-left: auto;
      background-color: var(--primary);
      border: none;
      font-size: 16px;
      text-decoration: none;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      padding: 12px 18px;
      transition: opacity .2s;

      &:hover {
        opacity: 0.8
        // background-color: var(--primary-text);
      }
    }
  }
}
</style>