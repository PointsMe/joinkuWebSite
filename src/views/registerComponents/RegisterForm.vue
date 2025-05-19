<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
    <div class="login-form">
        <el-form :key="formId" :model="formModel" ref="formModelRef"
            :rules="formRules">
            <el-row :gutter="12">
                <el-col v-for="(item, index) in emailForm" :key="index" :span="item.span">
                    <el-form-item :label="item.label" :prop="item.value">
                        <el-input 
                        controls-position="right"
                        @change="(e: any) => EventFunction({
                            evt: item?.onEventFunction,
                            data: e
                        })" v-if="item.type === 'input'" size="large" :type="`${item.typePass}`"
                            v-model="formModel[item.value]" :placeholder="$t(item.placeholder)" class="bg-input">
                            <template #append v-if="item.haveEmailSelect || item.haveBtn || item.haveIcon">
                                <div v-if="item.haveEmailSelect">
                                    <span class="line-border"></span>
                                    <AllEmailView @changeEmail="changeEmail"/>
                                </div>
                                <span v-if="item.haveBtn" class="span-code" @click="getVerificationCode"> 
                                    <label v-if="!num">{{$t('aboutLogin.sendCode')}}</label> 
                                    <label v-else>{{ num }}s</label> 
                                </span>
                                <span v-if="item.haveIcon" class="span-code" @click="changeType(item)">
                                    <el-icon>
                                        <View v-if="item.typePass === 'password'" />
                                        <Hide v-else />
                                    </el-icon>
                                </span>
                            </template>
                            <template #prepend v-if="item.haveTelSelect">
                                <AllCountryView @changeCountry="changeCountry"/>
                            </template>
                        </el-input>
                        <el-select
                         size="large" 
                         v-if="item.type === 'select'"
                          v-model="formModel[item.value]"
                          @change="(e: any) => EventFunction({
                            evt: item?.onEventFunction,
                            data: e
                        })"
                            :disabled="item.disabled"
                            :placeholder="$t(item.placeholder)">
                            <el-option v-for="(iv, ivIndex) in item.optionsData" :key="ivIndex" :label="iv.label"
                                :value="iv.value" />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div class="login-last">
            <div class="title-box" v-if="props.step === '2'">
                <span @click="toBack">{{$t('aboutLogin.previousStep')}}</span>
                <el-icon><ArrowRightBold /></el-icon>
            </div>
            <div :class="props.step === '1' ? 'btn-login margin-top-60' : 'btn-login margin-top-148'">
                <el-button class="el-btn-color" size="large" style="width: 100%" @click="onSubmit">
                    <span v-if="props.step === '2'">{{$t('aboutLogin.register')}}</span>
                    <span v-if="props.step === '1'">{{$t('aboutLogin.nextStep')}}</span>
                </el-button>
            </div>
            <div class="checkbox-con">
                <el-row :gutter="12">
                    <el-col :span="24">
                        <div v-if="props.step === '2'">
                            <el-checkbox v-model="checked1">
                                {{$t('aboutLogin.loginTips')}}
                                <span class="link-span" @click.native.prevent="checkBooks(1)">{{$t('aboutLogin.linkOne')}}</span>
                                {{$t('aboutLogin.linkAnd')}}
                                <span class="link-span" @click.native.prevent="checkBooks(2)">{{$t('aboutLogin.linkTwo')}}</span>
                            </el-checkbox>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="chin-select">
                            <LanguageView />
                        </div>
                    </el-col>
                </el-row>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type * as Types from "@/apis/type"
import { ElMessage,ElLoading } from 'element-plus'
import LanguageView from "@/components/LanguageView.vue"
import AllCountryView from "@/components/AllCountryView.vue"
import AllEmailView from "@/components/AllEmailView.vue"
import { getVerificationCodeApi } from "@/apis/user"
import { View, Hide } from '@element-plus/icons-vue'
import { reactive, ref, computed,watch } from 'vue'
import {getProvinceListApi} from "@/apis/common"
import {getRandomString} from "@/utils/index"
import {registerApi} from "@/apis/user"
import type { FormInstance, FormRules } from 'element-plus'
import { i18n } from '@/lang/index'
import {
    emailFormStep1,
    phoneFormStep1,
    formStep2
} from "./formList"
import { useRouter } from 'vue-router'
import { useUserStore } from "@/stores/modules/user"
import { useCommonStore } from "@/stores/modules/common"
import { ArrowRightBold } from '@element-plus/icons-vue'
const userStore = useUserStore()
const commonStore = useCommonStore()
// 获取路由实例
const router = useRouter()

//定义props变量接收defineProps返回值
const props = defineProps({
    step: {
        type: String,
        required: true
    },
    registerStyle: {
        type: String,
        required: true
    }

});
const emit = defineEmits(['setStep']);
const formId = ref<string>(getRandomString(8))
const num = ref<number>(0)
const countryCode = ref("+86")
const emailCode = ref("@gmail.com")
const changeCountry = (e:string)=>{
    countryCode.value = e
}
const changeEmail = (e:string)=>{
    emailCode.value = e
}
const formModel: any = reactive({
    name: '',
    // storeName: '',
    phoneAccount:'',
    emailAccount:'',
    verificationCode: '',
    password: '',
    againpassword: '',


    type: 101,
    subName: "",
    vatNumber: "",
    compony: '1',
    taxCode: "",
    countryId: "",
    provinceId: "",
    city: "",
    zipcode: "",
    address: ""
})
const formModelRef = ref<FormInstance>()

const formRules = computed(()=> {
    return {
    name: [
        { required: true, message: i18n.global.t('aboutLogin.pleaseInputName'), trigger: 'blur' },
    ],
    // storeName: [
    //     { required: true, message: i18n.global.t('aboutLogin.pleaseInputStoreName'), trigger: 'blur' },
    // ],
    phoneAccount: [
        { required: true, message: i18n.global.t('aboutLogin.pleaseInputTel'), trigger: 'blur' },
    ],
    emailAccount: [
        { required: true, message: i18n.global.t('aboutLogin.pleaseInputEmail'), trigger: 'blur' },
    ],
    verificationCode: [
        { required: true, message:  i18n.global.t('aboutLogin.pleaseInputCode'), trigger: 'blur' },
        { min: 4, max: 6, message: 'Length should be 4 to 6', trigger: 'blur' },
    ],
    password: [
        {
            required: true, validator: (rule: any, value: any, callback: any) => {
                if (value === '') {
                    callback(new Error(i18n.global.t('aboutLogin.pleaseInputPassword')))
                }else if((value.length < 6 || value.length > 16)){
                    callback(new Error(i18n.global.t('aboutLogin.passwordLength')))
                }else {
                    if (formModel.againpassword !== '') {
                        if (!formModelRef.value) return
                        formModelRef.value.validateField('againpassword')
                    }
                    callback()
                }
            }, trigger: 'blur'
        },
    ],
    againpassword: [
        {
            required: true, validator: (rule: any, value: any, callback: any) => {
                if (value === '') {
                    callback(new Error(i18n.global.t('aboutLogin.pleaseInputPasswordAgain')))
                }else if((value.length < 6 || value.length > 16)){
                    callback(new Error(i18n.global.t('aboutLogin.passwordLength')))
                } else if (value !== formModel.password) {
                    callback(new Error(i18n.global.t('aboutLogin.againPassWrong')))
                } else {
                    callback()
                }
            }, trigger: 'blur'
        },
    ],

    
    subName: [
        { required: true, message: i18n.global.t('aboutLogin.componeyName'), trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    vatNumber: [
        { required: true, message: i18n.global.t('aboutLogin.componeyPI'), trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    countryId: [
        { required: true, message: i18n.global.t('aboutLogin.countryName'), trigger: 'change', },
    ],
    provinceId: [
        { required: true, message: i18n.global.t('aboutLogin.printent'), trigger: 'change' },
    ],
    city: [
        { required: true, message: i18n.global.t('aboutLogin.city'), trigger: 'blur' },
    ],
    zipcode: [
        { required: true, message:  i18n.global.t('aboutLogin.cityEmail'), trigger: 'blur' },
    ],
    address: [
        { required: true, message:  i18n.global.t('aboutLogin.address'), trigger: 'blur' },
    ],
    taxCode: [
        { required: true, message: i18n.global.t('aboutLogin.point'), trigger: 'blur' },
        // { min: 7, max: 11, message: 'Length should be 7 to 11', trigger: 'blur' },
    ],
}
})
const checkBooks = (value:number)=>{
    if(['it','es'].includes(commonStore.language)){
        if(value === 1){
            router.push('/privice')
        }else{
            router.push('/regulations')
        }
    }
}
const toBack = ()=>{
    emit('setStep', '1')
}
const EventFunction = async (event: any) => {
    console.log("EventFunction==>",event)
    switch (event.evt) {
        case 'changeCountryId':
            // eslint-disable-next-line no-case-declarations
            const currentData = emailForm.value.find(iv=>iv.value === 'provinceId');
            if(currentData){
                const { data } = await getProvinceListApi({
                    countryId: event.data
                })
                const arr = data.map(iv=>{
                    return {
                        label: iv.name,
                        value: iv.id
                    }
                })
                currentData.optionsData = arr
                formModel.value.provinceId = arr[0].value
            }
            break
        default:
            break
    }
}
const emailForm = ref<Array<Types.formTypeOne>>([])
// do not use same name with ref
const checked1 = ref()
//密码显示与隐藏
const changeType = (e: Types.formTypeOne) => {
    const current = emailForm.value.find(iv => iv.value === e.value)
    if (current) {
        current.typePass = current?.typePass !== 'password' ?'password' : undefined
    }
}
const timer = ref()
// 发送短信验证码
const getVerificationCode = async () => {
    console.log("aaaaa", countryCode.value)
    if (num.value) return false
    if (props.registerStyle === '1') {
        if (!countryCode.value) {
            ElMessage.error(i18n.global.t('aboutLogin.pleaseCountry'))
            return false
        }
    } else {
        if (!emailCode.value) {
            ElMessage.error(i18n.global.t('aboutLogin.pleaseEmail'))
            return false
        }
    }
    if (formModel.phoneAccount || formModel.emailAccount) {
        const loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)',
        })
        const params = {
            account: '',
            type: 101
        }
        if (props.registerStyle === '1') {
            params.account = `${countryCode.value.replace('+', '')}-${formModel.phoneAccount}`
        } else {
            params.account = `${formModel.emailAccount}${emailCode.value}`
        }
        try {
            await getVerificationCodeApi(params)
            loading.close()
            num.value = 60
            timer.value = setInterval(() => {
                if (num.value) {
                    num.value = num.value - 1
                } else {
                    clearInterval(timer.value)
                }
            }, 1000)
        } catch (e) {
            loading.close()
        }
    } else {
        ElMessage.error(i18n.global.t('aboutLogin.pleaseInputTel'))
    }
}

const onSubmit = () => {
    if (!formModelRef.value) return
        console.log("====onSubmit===>",formModel)
        formModelRef.value.validate(async (valid) => {
            if (valid) {
                if (props.step === '1') {
                    emit('setStep', '2')
                }else{
                    console.log("请求注册")
                    if(!checked1.value){
                        ElMessage.error(i18n.global.t('aboutLogin.pleaseCheckbox'))
                        return Promise.reject(false)
                    }
                    const params = {
                        "name": formModel.name,
                        "account": props.registerStyle === '1' ? `${countryCode.value.replace('+', '')}-${formModel.phoneAccount}` : `${formModel.emailAccount}${emailCode.value}`,
                        "password": formModel.password,
                        "verificationCode": formModel.verificationCode,
                        // "storeName": formModel.storeName,
                        company: {
                            "type": 101,
                            "name": formModel.subName,
                            "vatNumber": formModel.vatNumber,
                            "taxCode": formModel.taxCode,
                            "countryId": formModel.countryId,
                            "provinceId": formModel.provinceId,
                            "city": formModel.city,
                            "zipcode":formModel.zipcode,
                            "address": formModel.address,
                        }
                    }
                    console.log('submit!', valid, params)
                    const { data } = await registerApi(params);
                    if (data) {
                        ElMessage.success({
                            message: i18n.global.t('aboutLogin.registerSuccess'),
                            duration: 2000
                        })
                        userStore.setToken(data.token)
                        userStore.setUserInfo(data.account)
                        setTimeout(()=>{
                            router.push('/index')
                        },2000)
                    }
                }
                
            } else {
                console.log('error submit!')
            }
        })
}
watch(
    () => props.registerStyle,
    (newVal) => {
        console.log("newVal", newVal)
        if (newVal) {
            formId.value = getRandomString(8)
            if (newVal === '1') {
                emailForm.value = phoneFormStep1 as any
            }
            if (newVal === '2') {
                emailForm.value = emailFormStep1 as any
            }
        };
    },
    { immediate: true } // 关键选项
);
watch(
    () => props.step,
    (newVal) => {
        if (newVal) {
            formId.value = getRandomString(8)
            if (newVal === '1') {
                if (props.registerStyle === '1') {
                    emailForm.value = phoneFormStep1 as any
                }
                if (props.registerStyle === '2') {
                    emailForm.value = emailFormStep1 as any
                }
            }
            if (newVal === '2') {
                emailForm.value = formStep2 as any
            }
        };
    },
    { immediate: true } // 关键选项
);
</script>
<style scoped lang="less">
.login-form {
    margin-top: 50px;

    .login-last {
        .title-box{
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 10px;
    color: #bdbdbd;
    text-align: right;
    font-size: 14px;
    font-family: Inter, Inter;
    >span{
      cursor: pointer;
    }
    .el-icon{
      // color: #fff;
    }
  }
        .checkbox-con {
            font-family: Inter, Inter;
            font-weight: 500;
            font-size: 12px;
            color: #8f8f8f;
            margin-top: 33px;

            .link-span {
                color: #4c8afd;
            }
        }

        .forget-pass {
            margin: 0;
            padding: 0;
            text-align: right;
            font-weight: 400;
            font-size: 14px;
            color: #a4a4a4;
        }

        .checkbox-con {}

        .margin-top-60 {
            margin-top: 60px;
        }

        .margin-top-148 {
            margin-top: 108px;
        }

        .btn-login {
            width: 100%;
            background: #ffffff;
            border-radius: 8px 8px 8px 8px;
            font-family:
                Source Han Sans SC,
                Source Han Sans SC;
            font-weight: 400;
            font-size: 16px;
            color: #1a1a1a;

            .el-btn-color {
                // background-color: #1A1A1A;
            }
        }
    }
}
</style>
