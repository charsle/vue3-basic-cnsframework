<script lang="ts" setup>

import { useNotityHook} from "@axewo/cnsframework"
// 将 Element Plus 的语言设置为中文
import zhCn from "element-plus/es/locale/lang/zh-cn"

const {setNotity,notityProps}=useNotityHook()

setNotity({
  props: {
      title:'title',
      description:'description',
      extra:'extra',
      status:'status',
      datetime:'datetime'
    },
  column:[{
    name: "通知",
    type: "primary" ,
    list:[
  {
    title: "任务名称qqqq111",
    description: "这家伙很懒，什么都没留下",
    extra: "未开始",
    status: "info"
  }],
    rowKey:"id",
    badge:10
      },{
    name: "消息",
    type: "primary" ,
    list:[
  {
    title: "新消息",
    description: "111111这家伙很懒333，什么都没留下",
    extra: "未开始",
    status: "info"
  }],
    rowKey:"id",
    badge:10
      }],
  jumpUrl:'sasdasd'
})

console.log(notityProps)

</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
