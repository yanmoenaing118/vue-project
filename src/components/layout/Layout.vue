<template>
    <Header />
    <slot></slot>
    <!-- <FooterPlayer :player="player" /> -->
</template>

<script setup>
import Header from "./Header.vue";
import FooterPlayer from "./FooterPlayer.vue";
import { usePlayerStore } from "../../stores/counter";

const playerStore = usePlayerStore();

console.log('valuer changed', playerStore);
</script>

<style lang="scss" scoped>

</style>
