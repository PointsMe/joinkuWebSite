import { pinia } from "@/stores/index"
// import { getCurrentUserApi } from "@@/apis/users"
import { defineStore } from 'pinia'
import { setToken as _setToken, getToken, removeToken,getUserInfoStorage,setUserInfoStorage,removeUserInfoStorage } from "@/utils/cache/cookies"

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "")
  const userInfo = ref<any>(getUserInfoStorage())
  const discountedPrice =ref<number>(400)

  // 设置 Token
  const setToken = (value: string) => {
    _setToken(value)
    token.value = value
  }
  // 设置 Token
  const setUserInfo = (data: any) => {
    setUserInfoStorage(data)
    userInfo.value = data
  }

  // 重置 Token
  const resetToken = () => {
    removeToken()
    token.value = ""
  }
    // 重置 Token
  const resetUserInfo = () => {
    removeUserInfoStorage()
    userInfo.value = ""
  }

  return { token, discountedPrice,setToken, resetToken,userInfo,setUserInfo,resetUserInfo }
})

/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useUserStoreOutside() {
  return useUserStore(pinia)
}