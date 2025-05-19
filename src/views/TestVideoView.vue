<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div style="width: 300px; margin: auto; margin-top: 200px">
    <!-- <vue3VideoPlay
      width="800px"
      title="钢铁侠"
      src="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4"
      :poster="options.poster"
      @play="onPlay"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @canplay="onCanplay"
    /> -->
    <!-- <vue3-country-intl ref="intl" v-model="countryCode"></vue3-country-intl> -->
    <el-radio-group v-model="radio2">
      <el-radio @click.native.prevent="clickitem(3)" :label="3"> 备选项</el-radio>
      <!-- <el-radio @click.native.prevent="clickitem(6)" :label="6"> 备选项</el-radio>
      <el-radio @click.native.prevent="clickitem(9)" :label="9"> 备选项</el-radio> -->
  </el-radio-group>
    <div>{{ 
    userStore.token
     }}</div>
     <el-button @click="changeToken">更改token</el-button>
     <span>{{$t('aboutLogin.loginText')}}</span><br />
     <LanguageView />
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useUserStore } from "@/stores/modules/user"
import LanguageView from "@/components/LanguageView.vue"
import { values } from 'lodash-es'
// import { useI18n } from "vue-i18n";

// const { t } = useI18n();
// Interfaces and types
const radio2 = ref()
const clickitem = (e:any)=>{
  console.log(e)
  if(e === radio2.value){
    radio2.value = ''
  }else{
    radio2.value = e
  }
}
onMounted(() => {
  console.log('初始化视频')
})
const userStore = useUserStore()
const changeToken = ()=>{
  userStore.setToken('bbbbbbb')
}
const countryCode = ref()
const intl = ref()
const options = reactive({
  src: 'https://m.suike.cn/19ad7364-c927-4f21-87ed-5f6fa45c70eb', //视频源
  poster: '' //封面
})
const onPlay = (ev: any) => {
  console.log('播放')
}
const onPause = (ev: any) => {
  console.log(ev, '暂停')
}

const onTimeupdate = (ev: any) => {
  console.log(ev, '时间更新')
}
const onCanplay = (ev: any) => {
  console.log(ev, '可以播放')
}

</script>
<style lang="less">

::v-deep .no-focus .el-radio__inner {
  box-shadow: none !important;
}
</style>
