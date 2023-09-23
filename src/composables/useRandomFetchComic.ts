import { ref, Ref } from 'vue';
import axios from 'axios';
import obtainRandomNumber from '../utils/utils';

type Comic = {
  title: string;
  num: number;
  img: string;
  alt: string;
};

const isLoading = ref(false);
const showNotFound = ref(false);

export function useRandomFetch(): {
  randomComic: Ref<Comic>;
  fetchRandomComic: () => Promise<void>;
  isLoading: Ref<boolean>;
  showNotFound: Ref<boolean>;
} {
  const randomComic = ref<Comic>({
    title: '',
    num: 0,
    img: '',
    alt: ''
  });

  const fetchRandomComic: () => Promise<void> = async () => {
    try {
      isLoading.value = true;
      showNotFound.value = false;
      const responseMax = await axios.get<Comic>(
        `${process.env.VITE_APP_BASE_URL}/info.0.json`
      );
      const maxComicNumber = responseMax.data.num;

      const randomComicNumber = obtainRandomNumber(1, maxComicNumber);

      // const randomComicNumber = 2832;

      const randomComicUrl = `${process.env.VITE_APP_BASE_URL}/${randomComicNumber}/info.0.json`;

      const responseRandom = await axios.get<Comic>(randomComicUrl);
      randomComic.value = responseRandom.data;
    } catch (error: any) {
      showNotFound.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    randomComic,
    fetchRandomComic,
    isLoading,
    showNotFound
  };
}
