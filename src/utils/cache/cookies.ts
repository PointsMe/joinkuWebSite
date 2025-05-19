
export const setLanguage = (value: string)=>{
    return window.localStorage.setItem('language',value)
}

export const getLanguage = ()=>{
    return window.localStorage.getItem('language')
}

export const removeLanguage = ()=>{
    return window.localStorage.removeItem('language')
}

export const setToken = (value: string)=>{
    return window.localStorage.setItem('token',value)
}

export const getToken = ()=>{
    return window.localStorage.getItem('token')
}

export const removeToken = ()=>{
    return window.localStorage.removeItem('token')
}

export const setOrderId = (value: string)=>{
    return window.localStorage.setItem('orderId',value)
}

export const getOrderId = ()=>{
    return window.localStorage.getItem('orderId')
}

export const removeOrderId = ()=>{
    return window.localStorage.removeItem('orderId')
}

export const setCountryListStorage = (value:any)=>{
    return window.localStorage.setItem('countryList',JSON.stringify(value))
}

export const getCountryListStorage = ()=>{
    return JSON.parse(window.localStorage.getItem('countryList') || '[]')
}

export const removeCountryListStorage = ()=>{
    return window.localStorage.removeItem('countryList')
}

export const setUserInfoStorage = (value:any)=>{
    return window.localStorage.setItem('userInfo',JSON.stringify(value))
}

export const getUserInfoStorage = ()=>{
    return JSON.parse(window.localStorage.getItem('userInfo') || '{}')
}

export const removeUserInfoStorage = ()=>{
    return window.localStorage.removeItem('userInfo')
}