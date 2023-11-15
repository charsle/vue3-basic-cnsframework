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

