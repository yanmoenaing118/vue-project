<template>
    <div class="list-item py-2 text-gray-500 text-sm shadow-sm mb-1 px-3">
      <div>
          <v-icon name="bi-music-note-beamed" ></v-icon>
      </div>
      <div >
        <img
          :src="item.picture"
          :alt="item.title"
          class="w-12 h-12 object-cover"
          @click="playerStore.setPlayer(item)"
        />
      </div>
      <div>
        <RouterLink :to="`/songs/${item.id}`">{{ item.title }}</RouterLink>
      </div>
      <div>{{ item.views }}</div>
      <div>{{ item.duration }}</div>
      <div class="text-right">{{ item.album }}</div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
import { usePlayerStore } from "../../stores/counter";
  
  const props = defineProps({
    item: Object,
  });

  const playerStore = usePlayerStore();
  </script>
  
  <style lang="scss" scoped>
  .list-item {
    display: grid;
    grid-template-columns: 60px 80px minmax(280px, 1fr) repeat(
        3,
        minmax(100px, 1fr)
      );
    align-items: center;
  }
  </style>
  