import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const usePlayerStore = defineStore("player", {
  state: () => {
    return {
      player: null,
    };
  },

  getters: {
    getPlayer: () => player,
  },

  actions: {
    setPlayer(player) {
      console.log(player);
      this.player = player;
    },
  },

  
});
