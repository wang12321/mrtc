/**
 * @author ff
 * @date 2021/7/29
 * @Description: 接口请求配置按模块划分
 * @update by:
 */

import request from './request'
import apiUrl from './api-url'

import { getIsUseMasterApiKey } from '@/utils/auth'
let accounts = apiUrl[process.env.VUE_APP_BASE_API]
if (getIsUseMasterApiKey() === 'true' && process.env.NODE_ENV.indexOf('development') > -1) {
  accounts = apiUrl['production']
}

// 模块划分
const userUrl = accounts['userUrl']
export const userModule = {
  postUserLoginApi(params) {
    return request.post(`${userUrl}/user/login`, params)
  },
  postUserInfoApi(params) {
    return request.post(`${userUrl}/user/info`, params)
  }
}
