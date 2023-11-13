import searchApi from "@src/api/modules/search.api";
import { SearchResult } from "@src/types/search.dto";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore('search', () => {

  const searchResult = ref<SearchResult[] | null>();

  const search = async (value: string) => {
    searchResult.value = null;
    searchResult.value = await searchApi.search(value);
  };

  return {
    search,
    searchResult
  };
});