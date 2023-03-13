<template>
  <div class="card text-center">
    <img
      :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"
      class="thumb"
    >
    <p class="font-bold text-gray-500 m-4 truncate">
      {{ comic.title }}
    </p>
    <p><span>Issue Number:</span> {{ comic.issueNumber }}</p>
    <p><span>Price:</span> {{ comic.prices[0].price }}</p>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line vue/no-setup-props-destructure, vue/require-prop-types
const { comic } = defineProps(['comic'])
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>
