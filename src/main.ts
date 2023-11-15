import App from '@/App.vue'
import requestConfig from '@/config/requestConfig';
import systemConfig from '@/config/systemConfig';
import { createCNSFramewoke } from '@axewo/cnsframework'
import {initPermission} from "@/router/permission"
import { loadPlugins } from "@/plugins"

import '@axewo/cnsframework/style.css'
import "@/styles/index.scss"


const app = await createCNSFramewoke(App,{
    systemConfig,
    requestConfig,
    routers: import.meta.glob('./views/**/index.vue'),
    configs: import.meta.glob('./views/**/config.ts')
})
/** 加载插件 */
loadPlugins(app)
// /** 加载全局 SVG */
// loadSvg(app)
initPermission()
app.mount('#app')
