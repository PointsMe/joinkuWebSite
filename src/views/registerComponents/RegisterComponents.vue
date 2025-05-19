<template>
  <div class="login-com">
    <div class="title">
      <el-row class="top-title">
        <el-col :span="12" class="left-title"> {{$t('aboutLogin.registerMember')}} </el-col>
        <el-col :span="24" class="right-title-i">
          <div class="r-t-i-r-1">
            <img src="@/assets/r-1-1.png" alt="">
            <span class="color-step-2">{{$t('aboutLogin.messagePerson')}}</span>
            <span :class="step === '1' ? 'line color-step-1 color-step-1-span':'line color-step-2 color-step-2-span'">
            </span>
            <img src="@/assets/r-1-3.png" alt="" v-if="step === '1'">
            <img src="@/assets/r-1-2.png" alt="" v-if="step === '2'">
            <span :class="step === '1' ? 'color-step-1' : 'color-step-2'">{{$t('aboutLogin.componeyMess')}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="two-title">
        <el-col :span="24" class="left-title-i">
          <div class="step-1" v-if="step === '2'">
            {{$t('aboutLogin.componeyMess')}} 
          </div>  
          <div  v-if="step === '1'">
            <RegisterTab :registerStyle="registerStyle"  @setRegisterStyle="setRegisterStyle"/>
          </div>
        </el-col>
        <el-col :span="24" class="right-title">
          <div class="tips">{{$t('aboutLogin.haveAccout')}} <span @click="toLogin" style="cursor: pointer;">{{$t('aboutLogin.goLogin')}} </span></div>
        </el-col>
      </el-row>
    </div>
    <div class="login-form">
      <RegisterForm :step="step" @setStep="setStep" :registerStyle="registerStyle"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import RegisterForm from './RegisterForm.vue'
import RegisterTab from "./RegisterTab.vue"
import { useRouter } from 'vue-router'
// 获取路由实例
const router = useRouter()

const step = ref<string>('1')
const registerStyle = ref<string>('1')

const setStep = (value: string)=>{
  step.value = value
}
const setRegisterStyle = (value: string)=>{
  registerStyle.value = value
}
// 跳转到首页的方法
const toLogin = () => {
  router.push('/module/login')
}
defineExpose({
  setStep,
  setRegisterStyle
})
</script>
<style scoped lang="less">
.login-com {
  width: 100%;
  height: 100%;

  .title {
    .top-title {
      height: 40px;
      line-height: 40px;
    }

    .two-title {
      margin-top: 60px;
    }

    .left-title {
      text-align: left;
      font-family:
        Source Han Sans SC,
        Source Han Sans SC;
      font-weight: 500;
      font-size: 32px;
      color: #ffffff;
    }

    .left-title-i {
      height: 40px;
      width: 100%;

      .step-1 {
        font-weight: 500;
        font-size: 18px;
        color: #FED15F;
      }
    }

    .right-title-i {
      .r-t-i-r-1{
          display: flex;
          align-items: center;
          justify-content: left;
          gap: 10px;
          font-size: 16px;
        .line{
          display: block;
          position: relative;
          width: 100px;
          height: 1px;
          // background-color: #bdbdbd;
        }
        .line::after{
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          position: absolute;
          top: 50%;
          transform: translateY(50%);
        }
          img{
            width: 20px;
            height: 20px;
          }
          label{
            font-size: 14px;
            color: #bdbdbd;
          }
        }
      .color-step-1-span{
        background-color: #999999;
      }
      .color-step-2-span{
        background-color: #FED15F;
      }
      .color-step-1{
        color: #999999 !important;
      }
      .color-step-2{
        color: #FED15F !important;
      }
    }

    .right-title {
      text-align: right;
      font-family: Inter, Inter;
      font-weight: 500;
      font-size: 14px;
      color: #bdbdbd;
      position: relative;

      .tips {
        position: absolute;
        right: 0;
        bottom: -20px;

        span {
          color: #fed15f;
        }
      }
    }
  }
}
</style>
