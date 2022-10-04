import { createRouter, createWebHistory } from "vue-router";
import AdminRoutes from "./admin/AdminRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...AdminRoutes],
});

export default router;
