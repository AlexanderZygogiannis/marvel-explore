<template>
  <div class="container mx-auto px-4">
    <ul
      ref="listEl"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4 py-5 list"
    >
      <li
        v-for="comic in comicsList"
        :key="comic.id"
        class="cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-150 rounded"
      >
        <ComicCard :comic="comic" />
      </li>
      <li
        v-if="fetchingData"
        class="font-bold text-xl"
      >
        Fetching more comics... Please hold
      </li>
    </ul>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'
import ComicCard from './ComicCard.vue';
import getComics from '../api/getComics'

const listEl = ref<HTMLElement | null>(null)

const page = ref(0)

const comicsList = ref(await getComics(page.value))

const fetchingData = ref<null | boolean>(null)

const getComicsOnScroll = async () => {
  fetchingData.value = true
    
  page.value += 1
  
  const newComics = await getComics(page.value)

  fetchingData.value = null

  comicsList.value.push(...newComics)
}

useInfiniteScroll(
  listEl,
  async () => {
    await getComicsOnScroll();
  },
  { distance: 10 }
)
</script>

<style scoped>
.list {
  height: 100vh;
  overflow-y: scroll;
}
</style>