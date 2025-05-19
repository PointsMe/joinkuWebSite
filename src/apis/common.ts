import type * as Types from "@/apis/type"
import { request } from "@/http/axios"
import Qs from "qs"
// export function getCountryListApi(data?: Types.CountryListParams) {
//     return request<Types.countryResponseData>({
//       url: "/region/country/list",
//       method: "post",
//       data: data
//     })
//   }

export function getCountryListApi() {
  return request<Types.countryResponseData>({
    url: "/region/country/list",
    method: "post",
  })
}
export function getProvinceListApi(data: any) {
    return request<Types.countryResponseData>({
      url: "/region/province/list",
      method: "post",
      data: Qs.stringify(data),
      headers: {
        // 携带 Token
        // "Authorization": token ? `Bearer ${token}` : undefined,
        "Content-Type": "application/x-www-form-urlencoded"
      },
    })
  }
//   export function getAllCountryApi() {
//     return request<Types.countryResponseData>({
//       url: "https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd",
//       method: "get",
//       headers: {
//         // 携带 Token
//         // "Authorization": token ? `Bearer ${token}` : undefined,
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//     })
//   }
export function addNotificationApi(data: any) {
  return request<Types.countryResponseData>({
    url: "https://boss.pointsme.it/api/v3/lark/notification",
    method: "post",
    data:data,
  })
}