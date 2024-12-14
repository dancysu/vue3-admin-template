import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes.ts"

/**
 * 路由实例
 */
export const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
})
