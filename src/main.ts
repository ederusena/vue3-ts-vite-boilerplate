import { createApp } from "vue";

import initPlugins from "./plugins/initPlugins";

import App from "./App.vue";

const app = createApp(App);

initPlugins(app);

app.mount("#app");
