<template>
  <Container>
    <header class="flex py-3 items-center justify-between border-b">
      <h1 class="text-2xl font-bold text-gray-600">Popular</h1>
      <RouterLink to="/" class="text-gray-600 text-xs"> See all </RouterLink>
    </header>

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
  </Container>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Container from "../layout/Container.vue";
import PlayListItem from "./PlayListItem.vue";

const list = ref([
  {
    id: 1,
    title: "Wildest Dreams",
    views: 6390393,
    duration: "3:40",
    album: "1998",
    picture:
      "https://i0.wp.com/www.globalgranary.life/wp-content/uploads/2018/06/Zhao-Lu-Si.jpeg?ssl=1",
  },
  {
    id: 2,
    title: "Blank Space",
    views: 780393,
    duration: "4:20",
    album: "1998",
    picture:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/go_yoo_jung_main.jpeg",
  },
  {
    id: 3,
    title: "This Love",
    views: 6390393,
    duration: "2:40",
    album: "DOTS OST",
    picture:
      "https://0.soompi.io/wp-content/uploads/2022/11/14214254/315595155_697255911770881_3042158866055911006_n.jpg",
  },
]);
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
