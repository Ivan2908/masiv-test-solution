<template>
  <div v-if="!isLoading && !showNotFound">
    <div class="py-7">
      <div class="text-7xl text-black">
        I <span class="text-red-500">&hearts;</span> Comics
      </div>
      <div class="lead-xl font-light">
        See random comics and rating if you want !
      </div>
    </div>
  </div>
  <Spinner :is-loading="isLoading" />
  <NotFound
    :is-visible="showNotFound"
    :is-loading="isLoading"
    @generate-random-comic="generateRandomComic"
  />
  <section v-if="!isLoading && !showNotFound">
    <Comic :info-comic="randomComic" />
    <BtnGenerateRandomCOmic
      :is-visible="true"
      @generate-random-comic="generateRandomComic"
    />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Comic from './components/ComicCard.vue';
import Spinner from './components/SpinnerLoading.vue';
import NotFound from './components/NotFoundPage.vue';
import BtnGenerateRandomCOmic from './components/GenerateRandomBtn.vue';
import { useComicRatingStore, useComicStore } from './store/comicStore';
import { useRandomFetch } from './composables/useRandomFetchComic';

const comicRatingStore = useComicRatingStore();
const comicStore = useComicStore();
comicRatingStore.loadFromLocalStorage();

const { randomComic, fetchRandomComic, isLoading, showNotFound } =
  useRandomFetch();

const generateRandomComic = async (): Promise<void> => {
  comicStore.setImageLoaded(false);
  await fetchRandomComic();
  comicStore.setInfoComic(randomComic.value);
};

onMounted(async () => {
  await fetchRandomComic();
  comicStore.setInfoComic(randomComic.value);
});
</script>
./store/useComicStore ./store/ComicStore
