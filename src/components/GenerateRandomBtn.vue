<template>
  <button
    v-if="isVisible"
    class="group relative h-12 w-80 overflow-hidden rounded-lg bg-white text-lg shadow mt-3"
    @click="generateRandomComic()"
  >
    <div
      class="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"
    ></div>
    <span class="relative text-black group-hover:text-white"
      >Generate a new random Comic!</span
    >
  </button>
</template>
<script setup lang="ts">
const { isVisible } = defineProps({
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
