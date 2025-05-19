<template>
  <div class="banner-view-div">
    <div class="top-two">
      <div class="content">
        <img class="icon-title" src="@/assets/fastsImages/Vector.png" alt="" />
        <div class="title">
          {{ $t('banner.fastSimpleTitle') }}<br />
          <span>{{ $t('banner.smartDining') }}</span>
          {{ $t('banner.solution') }}
        </div>
        <div class="sub-title">
          {{ $t('banner.subTitle') }}
          <el-button class="tel-btn" type="pain" @click="goContactUs"
            >{{ $t('banner.contactUs') }}<el-icon><Right /></el-icon
          ></el-button>
        </div>
        <div class="bg-title"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Right } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const goContactUs = () => {
  router.push('/contact')
}
</script>
<style scoped lang="less">
.banner-view-div {
  width: 100%;
  padding-top: 90px;
  .top-two {
    height: 780px;
    width: 100%;
    background: linear-gradient(#1e1e1e 0%, #111111 100%);
    .content {
      width: 1280px;
      margin: auto;
      position: relative;
      padding: 40px 0;
      .bg-title {
        width: 1720px;
        height: 500px;
        background-image: url('@/assets/fastsImages/top-bg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: -220px;
        bottom: -550px;
      }
      .icon-title {
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        right: 0;
        top: 60px;
      }
      .sub-title {
        font-weight: 400;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.9);
        .tel-btn {
          width: 187px;
          height: 60px;
          padding: 0 24px;
          border-radius: 70px;
          background-color: #fed15f !important;
          color: #111111;
          float: right;
          border: none;
        }
      }
      .title {
        // width: 800px;
        font-weight: bold;
        font-size: 72px;
        color: rgba(255, 255, 255, 0.9);
        > span {
          color: #fed15f;
        }
      }
    }
  }
}
</style>