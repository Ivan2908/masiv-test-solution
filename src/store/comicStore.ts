import { defineStore } from 'pinia';

type Comic = {
  title: string;
  num: number;
  img: string;
  alt: string;
};

export const useComicRatingStore = defineStore('comicRating', {
  state: () => ({
    ratings: {} as Record<number, number>
  }),
  actions: {
    setRating(comicId: number, rating: number) {
      this.ratings[comicId] = rating;
    },
    getRating(comicId: number): number {
      return this.ratings[comicId] || 0;
    },

    loadFromLocalStorage() {
      const storedData = localStorage.getItem('comicRatings');
      if (storedData) {
        this.ratings = JSON.parse(storedData);
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('comicRatings', JSON.stringify(this.ratings));
    }
  }
});

export const useComicStore = defineStore('comic', {
  state: () => ({
    infoComic: {
      title: '',
      num: 0,
      alt: '',
      img: ''
    },
    imageLoaded: false
  }),
  actions: {
    setInfoComic(infoComic: Comic): void {
      this.infoComic = infoComic;
    },
    setImageLoaded(loaded: boolean) {
      this.imageLoaded = loaded;
    }
  }
});
