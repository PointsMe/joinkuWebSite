import { pinia } from "@/stores/index"
import { getCountryListApi } from "@/apis/common"
import { defineStore } from 'pinia'
import {setCountryListStorage,getCountryListStorage,getLanguage,setLanguage,removeLanguage} from "@/utils/cache/cookies"
import type * as Types from "@/apis/type"
export const useCommonStore = defineStore("common", () => {
  const countryList = ref<Array<Types.country>>(getCountryListStorage() || [])
  const language = ref<string>(getLanguage() || 'zh-US')
  const showOrderListView = ref<boolean>(false)
  const showOrderDetailView = ref<boolean>(false)
  //获取国家列表
  const getCountryList = async () => {
    try {
      const { data } = await getCountryListApi()
      countryList.value = data
      setCountryListStorage(data)
    } catch (error) {
      console.log(error)
    }
  }
  const setShowOrderListView = (status: boolean)=>{
    showOrderListView.value = status;
  }
  const setShowOrderDetailView = (status: boolean)=>{
    showOrderDetailView.value = status;
  }
  // 设置 Token
  const setLanguageFn = (value: string) => {
    setLanguage(value)
    language.value = value
  }
  const resetLanguageFn = () => {
    removeLanguage()
    language.value = ""
  }

  return { countryList, language,showOrderListView,showOrderDetailView,setShowOrderListView,setShowOrderDetailView,getCountryList,setLanguageFn,resetLanguageFn }
})


/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useCommonStoreOutside() {
  return useCommonStore(pinia)
}