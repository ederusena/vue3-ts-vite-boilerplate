import type { App } from "vue";
import initPinia from "./pinia";
import initRouter from "./router";

export default function initPlugins(app: App<Element>) {
  initRouter(app);
  initPinia(app);
}
