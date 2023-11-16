# vue3-basic-cnsframework
#### 介绍
一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术

该框架整合了常用的vue后台系统平台，只需要安装该框架，页面就会根据views 目录结构生成相应的菜单功能。目前该框架集成了三种布局模式。left| top| top-left 

或者 clone 例子
```
git clone https://github.com/charsle/vue3-basic-cnsframework.git
```

#### 使用说明
1、使用该框架插件，要先安装依赖文件
```
pnpm install element-plus sass nprogress  @element-plus/icons-vue

```


#### 安装教程

1.  第一步 选择一个你喜欢的包管理器
```
# NPM
$ npm install @axewo/cnsframework --save

# Yarn
$ yarn add @axewo/cnsframework

# pnpm
$ pnpm install @axewo/cnsframework

```
2.  框架整合 

  在main.js 或者main.ts 引入文件
```ts
import App from '@/App.vue'
import requestConfig from '@/config/requestConfig';
import systemConfig from '@/config/systemConfig';
import { createCNSFramewoke } from '@axewo/cnsframework'
import {initPermission} from "@/router/permission"

import '@axewo/cnsframework/style.css'
import "@/styles/index.scss"


const app = await createCNSFramewoke(App,{
    systemConfig, //系统配置
    requestConfig, //axios请求配置
    routers: import.meta.glob('./views/**/index.vue'),//文件目录，一个目录下只能有一个index.vue
    configs: import.meta.glob('./views/**/config.ts')// 目录配置文件，用于路由的展示和标题展示，name是必填
})
//路由权限加载
initPermission()
//注册
app.mount('#app')
```
3.  systemConfig配置
``` ts
/** 项目配置类型 */
export default {
    /** 布局模式 */
  layoutMode: "left",
    /** 是否显示标签栏 */
  showSettings: true,
   /** 是否显示标签栏 */
  showTagsView: true,
    /** 是否固定 Header */
  fixedHeader: true,
    /** 是否显示页脚 Footer */
  showFooter: true,
    /** 是否显示 Logo */
  showLogo: false,
  /**菜单栏logo 路径，一般把logo放在public 下面的文件夹里面 */
  sideLogo:'/static/images/logo.png',
    /** 是否显示消息通知 */
  showNotify: true,
    /** 是否显示切换主题按钮 */
  showThemeSwitch: true,
    /** 是否显示全屏按钮 */
  showScreenfull: true,
    /** 是否显示搜索按钮 */
  showSearchMenu: true,
    /** 是否缓存标签栏 */
  cacheTagsView: false,
    /** 开启系统水印 */
  showWatermark: true,
    /** 是否显示灰色模式 */
  showGreyMode: false,
    /** 是否显示色弱模式 */
  showColorWeakness: false,
    // default language
    lang: 'zh-cn',
    // 标题
    title: '',
    // 系统名称
    systemName: '',
    // 版权信息
    copyrightZh: '版权所有 © xxxx科技有限公司',

  copyrightEn: 'Copyright © xxxx Technology Co., Ltd..All Rights Reserved',
}

```
3. requestConfig 配置
```ts
/**
 * @description 配置axios请求基础信息
 */
export default {
  // axios 基础url地址
  baseURL: import.meta.env.VITE_BASE_API,
  // 根据后端定义配置
  responseType: 'json',
  // 最长请求时间
  timeout: 60000,
  // 请求拦截自定义函数，接收config参数
  handleRequest:undefined,
  // 返回成功拦截自定义函数，接收response参数
  handleResponse: undefined,
  // 返回成功拦截自定义函数，接收response error参数
  handleResponseError:undefined
}


```
4. router 全局拦截配置
```ts
import { setRouteChange,getToken ,useTitle,fixBlankPage,useCNSRouteHook} from "@axewo/cnsframework"

import NProgress from "nprogress"
import "nprogress/nprogress.css"
export const initPermission=()=>{
  const {router}=useCNSRouteHook()

  const { setTitle } = useTitle()
  NProgress.configure({ showSpinner: false })
  
  router.beforeEach(async (to, _from, next) => {
    fixBlankPage()
    //这里根据业务场景进行配置和拦截
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


```

#### 展示效果图
![效果图1](https://github.com/charsle/vue3-basic-cnsframework/blob/main/public/1.png)https://github.com/charsle/vue3-basic-cnsframework/blob/main/public/1.png)

![效果图2](https://github.com/charsle/vue3-basic-cnsframework/blob/main/public/1.png)https://github.com/charsle/vue3-basic-cnsframework/blob/main/public/2.png)

![效果图3](https://github.com/charsle/vue3-basic-cnsframework/blob/main/public/1.png)https://github.com/charsle/vue3-basic-cnsframework/blob/main/public/3.png)

![效果图4](https://github.com/charsle/vue3-basic-cnsframework/blob/main/public/1.png)https://github.com/charsle/vue3-basic-cnsframework/blob/main/public/4.png)

![效果图5](https://github.com/charsle/vue3-basic-cnsframework/blob/main/public/1.png)https://github.com/charsle/vue3-basic-cnsframework/blob/main/public/5.png)
