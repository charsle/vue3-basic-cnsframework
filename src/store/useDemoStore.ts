import { ref } from 'vue'
import { defineStore } from "pinia"
 const useDemoStore=defineStore('demoStore',()=>{
  const requestConfig=ref({})
  const setDemo=(config:any)=>{
      requestConfig.value=config
  }
return {setDemo,requestConfig}
})
export default useDemoStore