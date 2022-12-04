<template>
      <div class="list">
        <div class="list-header mb-6 py-2 font-bold text-lg capitalize px-3 text-gray-900 font-serif">
          <div>#</div>
          <div></div>
          <div>Title</div>
          <div>Playing</div>
          <div>time</div>
          <div class="text-right">album</div>
        </div>
  
        <div v-for="item in list" :key="item.id">
          <PlayListItem :item="item" />
        </div>
      </div>
    
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  import PlayListItem from "./PlayListItem.vue";

  const props = defineProps({
    list: Array
  })
  
  </script>
  
  <style lang="scss" scoped>
  .list-header {
    display: grid;
    grid-template-columns: 60px 80px minmax(280px, 1fr) repeat(
        3,
        minmax(120px, 1fr)
      );
  }
  </style>
  