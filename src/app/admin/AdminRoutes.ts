import type { RouteRecordRaw } from "vue-router";
import AdminView from "./AdminView.vue";

const AdminRoutes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    component: AdminView,
  },
];

export default AdminRoutes;
