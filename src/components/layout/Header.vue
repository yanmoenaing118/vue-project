<template>
  <header class="bg-green-300 shadow-sm">
    <Container>
      <div class="header">
        <h1 class="text-2xl font-bold font-mono">
          <RouterLink to="/" class="text-white text-shadow">
            <v-icon name="ri-folder-music-fill" scale="2"></v-icon>
          </RouterLink>
        </h1>
        <nav>
          <ul>
            <li>
              <RouterLink
                to="/artists"
                class="text-md font-bold font-serif uppercase underline text-gray-600"
                >Artists</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Container from "./Container.vue";
</script>

<style lang="scss" scoped>
.header {
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  letter-spacing: 3px;
}
</style>
