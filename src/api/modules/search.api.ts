import $axios from '../axios'

const search = async (searchValue) => {
  return await $axios.get(`/search.php?q=${searchValue}&format=jsonv2`)
}

export default {
  search,
}