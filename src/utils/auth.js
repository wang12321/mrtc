import Cookies from 'js-cookie'

const tokenKey = 'vue_admin_ff_token'

export function getToken() {
  return Cookies.get(tokenKey)
}

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

export function removeToken() {
  return Cookies.remove(tokenKey)
}

const preSetLocalStorageKey = 'preSetLocalStorage'
export function setPreSetLocalStorage(data) {
  return localStorage.setItem(preSetLocalStorageKey, data)
}

export function getPreSetLocalStorage() {
  return localStorage.getItem(preSetLocalStorageKey)
}
// 切换环境
const isUseMasterApiKey = 'isUseMasterApiKey'
export function setIsUseMasterApiKey(data) {
  return localStorage.setItem(isUseMasterApiKey, data)
}
export function getIsUseMasterApiKey() {
  return localStorage.getItem(isUseMasterApiKey)
}
