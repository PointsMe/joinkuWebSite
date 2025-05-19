import { createRouter, createWebHashHistory } from 'vue-router'
import { getVersion } from "@/utils/index"
import routerMenu from "@/router/router"
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routerMenu,
  scrollBehavior() {
    // to, from, savedPosition
    createWebHashHistory
    return { top: 0 }
  }
})
router.beforeEach((to, from, next) => {
  getVersion().then((res:any)=>{
    console.log("==getVersion==>",res);
    next()
  })
})
export default router
