import { createApp } from "vue";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiMusicNote, BiMusicNoteBeamed , RiFolderMusicFill} from "oh-vue-icons/icons";

addIcons(BiMusicNote, BiMusicNoteBeamed, RiFolderMusicFill);

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("v-icon", OhVueIcon);


app.mount("#app");
