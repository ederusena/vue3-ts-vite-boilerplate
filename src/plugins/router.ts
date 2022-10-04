import type { App } from "vue";
import router from "../app/AppRoutes";

export default function initRouter(app: App<Element>) {
  app.use(router);
}
