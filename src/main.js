import { createApp } from "vue";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiMusicNote,
  BiMusicNoteBeamed,
  RiFolderMusicFill,
  CoMediaPlay,
  CoMediaPause,
  CoMediaSkipForward,
  CoMediaSkipBackward,
} from "oh-vue-icons/icons";

addIcons(
  BiMusicNote,
  BiMusicNoteBeamed,
  RiFolderMusicFill,
  CoMediaPause,
  CoMediaPlay,
  CoMediaSkipForward,
  CoMediaSkipBackward
);

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("v-icon", OhVueIcon);


app.mount("#app");
