import { request } from "@/http/axios"

/** 获取验证码 */
export function getGoodsListApi() {
  return request<ApiResponseData<any>>({
    url: "/plan/list",
    method: "post",
  })
}

export function getGoodsDetailApi(id: string) {
  return request<ApiResponseData<any>>({
    url: `/plan/detail?id=${id}`,
    method: "post",
  })
}
export function getHardwareListApi() {
  return request<ApiResponseData<any>>({
    url: `/product/sku/list`,
    method: "post",
  })
}
export function precreateApi(data: any) {
  return request<ApiResponseData<any>>({
    url: `/order/precreate`,
    method: "post",
    data: data
  })
}
export function createApi(data: any) {
  return request<ApiResponseData<any>>({
    url: `/order/create`,
    method: "post",
    data: data
  })
}
export function payApi(data: any) {
  return request<ApiResponseData<any>>({
    url: `/trade/create`,
    method: "post",
    data: data
  })
}
export function orderListApi(orderId: string = "") {
  return request<ApiResponseData<any>>({
    url: `/me/order/page`,
    method: "post",
    data: {
      "page": 1,
      "size": 100,
      id: orderId
    }
  })
}
export function paymodesApi() {
  return request<ApiResponseData<any>>({
    url: `/trade/paymodes`,
    method: "post",
  })
}
export function cancelOrderApi(orderId: string) {
  return request<ApiResponseData<any>>({
    url: `/me/order/cancel?id=${orderId}`,
    method: "post",
  })
}

