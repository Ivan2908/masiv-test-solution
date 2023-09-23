<template>
  <div v-if="isLoading" class="flex justify-center items-center h-full">
    <img class="h-16 w-16" src="../assets/spinner.gif" alt="" />
  </div>
</template>
<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    required: true
  }
});
</script>
