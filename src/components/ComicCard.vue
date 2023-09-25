<template>
  <div class="rounded overflow-hidden shadow-lg bg-white p-5">
    <h1 v-if="comicStore.imageLoaded" class="font-bold text-xl mb-5">
      {{ infoComic.title }}
    </h1>
    <div class="relative group">
      <img
        class="w-full h-auto"
        :class="{
          'cursor-pointer transform hover:scale-105 transition-transform duration-300':
            isImgExpanded
        }"
        :src="img"
        :alt="infoComic.alt"
        @load="onImageLoad"
        @error="imagenError"
      />
      <button
        v-if="isImgExpanded"
        class="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        @click="showModalImg = true"
      >
        <span class="text-white font-bold">Ampliar</span>
      </button>
    </div>

    <div class="p-4">
      <ComicRating
        :is-visible="comicStore.imageLoaded"
        :comic-id="infoComic.num"
      />
    </div>
    <!-- Modal for the IMG-->
    <div
      v-if="showModalImg"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div class="max-w-4xl bg-white p-8 rounded-lg shadow-xl relative">
        <h1 v-if="comicStore.imageLoaded" class="font-bold text-xl">
          {{ infoComic.title }}
        </h1>
        <small>{{ infoComic.num }}</small>
        <img class="w-full h-[45rem] mt-3" :src="img" :alt="infoComic.alt" />
        <button
          v-if="comicStore.imageLoaded"
          class="absolute top-3 right-3 bg-white rounded-full p-2"
          @click="showModalImg = false"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ComicRating from '../components/ComicRating.vue';
import { useComicStore } from '../store/comicStore';

const props = defineProps<{
  infoComic: {
    title: string;
    num: number;
    alt: string;
    img: string;
  };
}>();

const isImgExpanded = ref(false);

const showModalImg = ref(false);

const showImgError = ref(false);

const comicStore = useComicStore();

const infoComic = props.infoComic;

const onImageLoad = (event: Event): void => {
  const img = event.target as HTMLImageElement;
  isImgExpanded.value = img.height < 600;

  showImgError.value = false;
  comicStore.setImageLoaded(true);
};

const imagenError = (): void => {
  showImgError.value = true;
  comicStore.setImageLoaded(true);
};

const img = computed<string>(() => {
  return showImgError.value
    ? '../assets/No-Image-Placeholder.png'
    : infoComic.img;
});
</script>

<style scoped>
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:opacity-100:hover {
  opacity: 1;
}
</style>
../store/useComicStore
