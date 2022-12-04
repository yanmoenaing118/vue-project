<template>
  <Container>
    <header class="flex py-3 items-center justify-between border-b">
      <h1 class="text-2xl font-bold text-gray-600">Popular</h1>
      <RouterLink to="/songs" class="text-gray-600 text-xs">
        See all
      </RouterLink>
    </header>

    <PlayList :list="list" />
  </Container>
</template>

<script setup>
import { ref } from "vue";
import PlayList from "../common/PlayList.vue";
import Container from "../layout/Container.vue";

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

<style lang="scss" scoped></style>
