import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

const request = config => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  })

  instance.interceptors.request.use(config => {
    // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

    // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

    // 3.对请求的参数进行序列化(看服务器是否需要序列化)
    // config.data = qs.stringify(config.data)
    // console.log(config);
    return config
  }, err => {
    return err
  })

  instance.interceptors.response.use(response => {
    return response.data
  }, err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
        default:
          err.message = '其他错误信息'
      }
    }
    return err
  })

  return instance(config)
}

export default request 
