import { setRouteChange,getToken ,useTitle,fixBlankPage,useCNSRouteHook} from "@axewo/cnsframework"

import NProgress from "nprogress"
import "nprogress/nprogress.css"
export const initPermission=()=>{
  const {router}=useCNSRouteHook()

  const { setTitle } = useTitle()
  NProgress.configure({ showSpinner: false })
  
  router.beforeEach(async (to, _from, next) => {
    fixBlankPage()
    NProgress.start()
    next()
    NProgress.done()
  })
  
  router.afterEach((to) => {
    setRouteChange(to)
    setTitle(to.meta.title)
    NProgress.done()
  })
  }