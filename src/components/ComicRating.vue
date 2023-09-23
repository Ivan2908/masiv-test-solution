<template>
  <div v-if="isVisible">
    <div class="stars">
      <span
        v-for="(_, index) in stars"
        :key="index"
        :class="{ filled: index < currentRating }"
        @click="setRating(index + 1)"
      >
        ★
      </span>
    </div>
    <p>Rating: {{ currentRating }}/5</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import confetti from 'canvas-confetti';
import { toast } from 'vue3-toastify';
import { useComicRatingStore } from '../store/comicStore';

const props = defineProps({
  comicId: {
    type: Number,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  }
});

const comicRatingStore = useComicRatingStore();
const currentRating = ref(comicRatingStore.getRating(props.comicId));

watch(
  () => props.comicId,
  (newComicId) => {
    currentRating.value = comicRatingStore.getRating(newComicId);
  }
);

onMounted(() => {
  currentRating.value = comicRatingStore.getRating(props.comicId);
});

const stars = [1, 2, 3, 4, 5];

const setRating = (rating: number): void => {
  comicRatingStore.setRating(props.comicId, rating);
  currentRating.value = rating;
  comicRatingStore.saveToLocalStorage();
  confetti();
  toast.success('Thank you for Rating !!');
};
</script>

<style scoped>
.stars {
  cursor: pointer;
}

.stars span {
  font-size: 1.5rem;
  margin-right: 0.2rem;
}

.stars span.filled {
  color: gold;
}
</style>
../store/useComicStore
