import { createPinia } from "pinia";
import type { App } from "vue";

export default function initPinia(app: App<Element>) {
  app.use(createPinia());
}
