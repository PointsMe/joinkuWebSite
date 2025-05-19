export type country = {
    id: string,
    name: string,
    code: string
}
export type verificationCodeType = {
    account: string,
    type: number | string
}
export type CurrentUserResponseData = ApiResponseData<{ username: string, roles: string[] }>
export type countryResponseData = ApiResponseData<Array<country>>

export type formTypeOne = {
    span: number,
    label: string,
    value: string,
    type: string,
    placeholder: string,
    optionsData?: Array<{
        label: string,
        value: string | number
    }>
    haveEmailSelect?: boolean,
    haveBtn?: boolean,
    haveIcon?: boolean,
    haveTelSelect?: boolean,
    onEventFunction?:Function,
    typePass?: string
    disabled?: boolean
}
export type RuleForm ={
  name: string,
  storeName:string,
  account:string,
  verificationCode:string,
  password:string,
  againpassword:string
}
type companyType = {
    type: Number,
    name: string,
    vatNumber: string,
    taxCode: string,
    countryId:  string,
    provinceId:string,
    city: string,
    zipcode: string,
    address: string,
}
export type registerType = {
    name: string,
    account: string,
    password: string,
    verificationCode: string,
    company: companyType
}
export type loginResponseData = ApiResponseData<{ username: string, roles: string[] }>