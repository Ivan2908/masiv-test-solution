import { Ref } from 'vue';
type Comic = {
    title: string;
    num: number;
    img: string;
    alt: string;
};
export declare function useRandomFetch(): {
    randomComic: Ref<Comic>;
    fetchRandomComic: () => Promise<void>;
    isLoading: Ref<boolean>;
    showNotFound: Ref<boolean>;
};
export {};
//# sourceMappingURL=useRandomFetchComic.d.ts.map