<template>
  <div v-if="isVisible && !isLoading" class="not-found">
    <h1>404 Not Found</h1>
    <p>
      The information you are looking for does not exist or has been removed.
    </p>
    <BtnGenerateRandomCOmic
      :is-visible="true"
      @generate-random-comic="generateRandomComic"
    />
  </div>
</template>

<script setup lang="ts">
import BtnGenerateRandomCOmic from '../components/GenerateRandomBtn.vue';
const { isVisible, isLoading } = defineProps({
  isLoading: {
    type: Boolean,
    required: true
  },
  isVisible: {
    type: Boolean,
    required: true
  }
});
const emit = defineEmits<(e: 'generateRandomComic') => void>();

const generateRandomComic = (): void => {
  emit('generateRandomComic');
};
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 55vh;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>
