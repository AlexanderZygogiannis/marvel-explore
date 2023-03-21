<template>
  <Suspense>
    <InfiniteScroll />
    <template #fallback>
      <p class="font-bold text-xl text-center p-4">Loading...</p>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import InfiniteScroll from "./components/InfiniteScroll.vue";
</script>
