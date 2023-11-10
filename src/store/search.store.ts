import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore('search', () => {
  const searchValue = ref<string>('')

  const searchResult = ref<[]>()
  const search = () => {

  }
})