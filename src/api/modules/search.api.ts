import { SearchResult } from '@src/types/search.dto';
import $axios from '../axios';

const search = async (searchValue: string, format: string = 'jsonv2') => {
  const result =  await $axios.get<SearchResult[]>(`/search.php`, {
    params: {
      q: searchValue,
      format
    }
  });
  return result.data;
};

export default {
  search,
};