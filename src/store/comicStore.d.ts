type Comic = {
    title: string;
    num: number;
    img: string;
    alt: string;
};
export declare const useComicRatingStore: import("pinia").StoreDefinition<"comicRating", {
    ratings: Record<number, number>;
}, {}, {
    setRating(comicId: number, rating: number): void;
    getRating(comicId: number): number;
    loadFromLocalStorage(): void;
    saveToLocalStorage(): void;
}>;
export declare const useComicStore: import("pinia").StoreDefinition<"comic", {
    infoComic: {
        title: string;
        num: number;
        alt: string;
        img: string;
    };
    imageLoaded: boolean;
}, {}, {
    setInfoComic(infoComic: Comic): void;
    setImageLoaded(loaded: boolean): void;
}>;
export {};
//# sourceMappingURL=comicStore.d.ts.map