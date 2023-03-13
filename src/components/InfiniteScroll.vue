<template>
  <ul
    ref="listEl"
    class="grid grid-cols-4 gap-5"
    style="height: 100vh; overflow-y: scroll;"
  >
    <li
      v-for="comic in comicsList"
      :key="comic.id"
      class="li"
    >
      <ComicCard :comic="comic" />
    </li>
  </ul>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'
import ComicCard from './ComicCard.vue';
import getComics from '../api/getComics'

const listEl = ref<HTMLElement | null>(null)

const page = ref(0)

const comicsList = ref(await getComics(page.value))

const getComicsOnScroll = async () => {
  page.value += 1
  const newComics = await getComics(page.value)

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