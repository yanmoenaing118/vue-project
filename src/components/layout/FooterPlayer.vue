<template>
  <div
    class="fixed z-10 bottom-0 w-full h-28 border-t flex items-center bg-white"
  >
    <audio
      src="https://myplaylist.vercel.app/static/media/here_i_am_again.1e8e27f3.mp3"
      controls
      ref="audio"
    ></audio>

    <Container>
      <div
        class="controls flex justify-center gap-6 items-center text-gray-600"
      >
        <button>
          <v-icon name="co-media-skip-backward" scale="2"></v-icon>
        </button>

        <button @click="togglePlayState()">
          <v-icon
            :name="`co-media-${audioPlayState === STOPPING ? 'play' : 'pause'}`"
            scale="3"
          ></v-icon>
        </button>

        <button>
          <v-icon name="co-media-skip-forward" scale="2"></v-icon>
        </button>
      </div>
      <div class="progress flex gap-6 justify-center items-center">
        <div class="text-sm text-gray-500">3:04</div>
        <div class="progress__bar bg-gray-200" ref="progressBarElementRef">
          <div
            class="progress__bar-progress"
            :style="`width: ${audioProgress}%`"
          ></div>
        </div>
        <div class="text-sm text-gray-500">0:00</div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { CoSn } from "oh-vue-icons/icons";
import { onMounted, ref } from "vue";
import Container from "./Container.vue";

const PLAYING = "PLAYING";
const STOPPING = "STOPPING";
const PROGRESS_WIDTH = 320;

const audio = ref(null);
const progressBarElementRef = ref(null);
const audioPlayState = ref(STOPPING);
const audioProgress = ref(0);

onMounted(() => {
  console.log(audio.value);
  audio.value.addEventListener("timeupdate", onAudioTimeAupdate);
  progressBarElementRef.value.addEventListener(
    "click",
    getPointerClickedPosition
  );
});

function isAudioValid() {
  return audio.value;
}

function play() {
  if (isAudioValid()) {
    audio.value.play();
    audioPlayState.value = PLAYING;
  }
}

function pause() {
  if (isAudioValid()) {
    audio.value.pause();
    audioPlayState.value = STOPPING;
  }
}

function togglePlayState() {
  if (audio.value.paused) {
    play();
  } else {
    pause();
  }
}

function onAudioTimeAupdate(e) {
  if (!isAudioValid()) return;
  const audio = e.target;
  const duration = audio.duration;
  const current = audio.currentTime;
  const width = Math.round((current / duration) * 100);
  audioProgress.value = width;
}

function setCurrentTime() {}

function getPointerClickedPosition(event) {
  if (!progressBarElementRef.value) return;
  const { x: progressBarPostion } =
    progressBarElementRef.value.getBoundingClientRect();
  const pointerPositionX = event.clientX;
  const clickedPosition = pointerPositionX - progressBarPostion;
  const clickedPercent = Math.round((clickedPosition / PROGRESS_WIDTH) * 100);
  const currentTimeByClickedPositionPercent = Math.round(
    (clickedPercent / 100) * audio.value.duration
  );

  audio.value.currentTime = currentTimeByClickedPositionPercent;
}
</script>

<style lang="scss" scoped>
audio {
  display: none;
}

.progress {
  &__bar {
    width: 320px;
    height: 4px;
    border-radius: 4px;
    position: relative;
    &-progress {
      border-radius: 4px;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-color: hsl(132, 62%, 52%);
      height: 4px;
    }
  }
}
</style>
