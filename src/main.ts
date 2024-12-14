// core
import { createApp } from "vue"
import { router } from "./router"
import App from "./App.vue"

// 创建应用实例
const app = createApp(App)

// 安装路由
app.use(router)

// router 准备就绪后挂载应用
router.isReady().then(() => {
	app.mount("#app")
})
