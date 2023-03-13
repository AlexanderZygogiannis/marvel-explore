<template>
  <div class="card text-gray-500 p-2">
    <img
      :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"
      class="max-w-full max-h-72 mx-auto"
    >
    <h2 class="font-bold mx-1 my-2 text-center">
      {{ comic.title }}
    </h2>
    <div class="border-t p-1">
      <p class="m-1">
        <span class="font-medium text-sm">Price:</span> {{ comic.prices[0].price }}
      </p>
      <p class="m-1">
        <span class="font-medium text-sm">Issue Number:</span> {{ comic.issueNumber }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line vue/no-setup-props-destructure, vue/require-prop-types
const { comic } = defineProps(['comic'])
</script>

<style scoped>
  .thumb {
    width: 100%;
  }
</style>
