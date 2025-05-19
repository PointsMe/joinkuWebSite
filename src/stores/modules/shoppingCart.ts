import { pinia } from "@/stores/index"
import { defineStore } from 'pinia'
import { setOrderId as setOrderIdStorage,getOrderId as getOrderIdStorage,removeOrderId as removeOrderIdStorage } from "@/utils/cache/cookies"
export const useShoppingCartStore = defineStore("shoppingCart", () => {
  const cart = ref<{
    type: Number | string
    items: Array<any>
  }>({
    type:'',
    items:[]
  })
  const orderId = ref<string>(getOrderIdStorage() || '')
  const setCart = (value: any) => {
    cart.value = value
  }
  const setOrderId = (value: string) => {
    setOrderIdStorage(value)
    orderId.value = value
  }
  const resetCart = () => {
    cart.value = {
        type:'',
        items:[]
      }
  }
  const resetOrderId = () => {
    removeOrderIdStorage()
    orderId.value = ''
  }

  return { cart, setCart,resetCart,orderId,setOrderId,resetOrderId }
})


/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useShoppingCartStoreOutside() {
  return useShoppingCartStore(pinia)
}