import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "home",
		component: () => import("../pages/home/index.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../pages/login/index.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("../pages/error/404.vue"),
	},
]

export default routes
