<template>
  <div class="app">
    <Suspense>
      <InfiniteScroll />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import InfiniteScroll from './components/InfiniteScroll.vue';
</script>
