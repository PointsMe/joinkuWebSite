<template>
    <div class="login-div">
      <el-row>
        <el-col :span="10">
          <div class="left-login">
            <img src="@/assets/fastsImages/login.png" alt="" />
            <img class="logo" src="@/assets/fastsImages/logo.png" alt="" />
          </div>
        </el-col>
        <el-col :span="14" class="relative-div">
          <div class="right-login">
            <!-- <LoginComponents /> -->
            <RouterView></RouterView>
          </div>
        </el-col>
      </el-row>
    </div>
  </template>
  <script setup lang="ts">
//   import LoginComponents from '@/views/loginComponents/LoginComponents.vue'
import { useCommonStore } from "@/stores/modules/common"
const commonStore = useCommonStore()
  defineOptions({
    name: 'moduleView'
  })
onMounted(()=>{
  commonStore.getCountryList()
})
  </script>
  <style scoped lang="less">
  .login-div {
    width: 100%;
    height: 100vh;
    background: linear-gradient(270deg, #1b1b1b 0%, #151618 100%);
    .relative-div {
      position: relative;
      .right-login {
        width: 630px;
        margin: auto;
        position: absolute;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  
    .left-login {
      height: 100vh;
      position: relative;
      padding: 20px;
      img {
        display: block;
        height: 100%;
        width: 100%;
      }
  
      .logo {
        display: block;
        position: absolute;
        bottom: 85px;
        left: 60px;
        width: 187px;
        height: 36px;
      }
    }
  }
  </style>
  