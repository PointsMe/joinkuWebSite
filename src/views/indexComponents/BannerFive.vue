<template>
  <div class="banner-5-div">
    <div class="content">
      <el-row>
        <el-col :span="14" class="left">
          <div class="title">{{ $t('bannerFive.exclusiveHardware') }}</div>
          <div class="sub-title">{{ $t('bannerFive.reasonablePrice') }}</div>
        </el-col>
        <el-col :span="10" class="right">
          <div class="one-div">
            <span>{{ $t('bannerFive.limitedTimeOffer') }}<label class="label-th">€{{ userStore.discountedPrice* 2}}</label></span>
            <span>{{ userStore.discountedPrice }}€</span>
          </div>
          <div class="two-div">
            {{ $t('bannerFive.additionalFee') }}<span class="color-a">{{ $t('bannerFive.monthlyFee') }}</span> {{ $t('bannerFive.feeDescription') }}
          </div>
        </el-col>
      </el-row>
      <el-row class="margin-top-50">
        <el-col :span="12" class="left-a"> {{ $t('bannerFive.goToShop') }}<span class="color-a" @click="goToShop">{{ $t('bannerFive.viewMore') }}</span> </el-col>
        <el-col :span="12" class="right-a"> {{ $t('bannerFive.imageDisclaimer') }} </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="8">
          <div class="content-list-img">
            <img src="@/assets/fastsImages/b-5-1.png" alt="" />
            <span>{{ $t('bannerFive.tablet') }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="content-list-img">
            <img src="@/assets/fastsImages/b-5-2.png" alt="" />
            <span>{{ $t('bannerFive.printer') }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="content-list-img">
            <img src="@/assets/fastsImages/b-5-3.png" alt="" />
            <span>{{ $t('bannerFive.tabletStation') }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user';
import { useRouter } from 'vue-router';
const router = useRouter();
const userStore = useUserStore();
const goToShop = () => {
  router.push('/shopping');
};
</script>
<style scoped lang="less">
.banner-5-div {
  width: 100%;
  background-color: #111111;
  color: #ffffff;
  margin-top: 100px;
  .content {
    width: 1280px;
    margin: auto;
    padding: 120px 0;
    .content-list-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;
      text-align: center;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        display: block;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        line-height: 30px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        position: absolute;
        width: 100%;
        bottom: 8%;
      }
    }
    .margin-top-50 {
      margin-top: 100px;
      margin-bottom: 10px;
      .left-a {
        text-align: left;
        font-weight: 400;
        font-size: 16px;
        color: #d9d9d9;
        .color-a {
          color: #fed15f;
        }
      }
      .right-a {
        text-align: right;
        font-weight: 400;
        font-size: 12px;
        color: #999999;
      }
    }

    .right {
      .two-div {
        text-align: right;
        .color-a {
          color: #fed15f;
        }
      }
      .one-div {
        text-align: right;
        position: relative;
        .label-th{
          text-decoration: line-through;
        }
        > span:first-child {
          display: block;
          width: 210px;
          height: 36px;
          line-height: 36px;
          border-radius: 43px 43px 43px 43px;
          border: 1px solid #d9d9d9;
          text-align: center;
          position: absolute;
          right: 160px;
          bottom: 20px;
        }
        > span:last-child {
          font-weight: bold;
          font-size: 60px;
          color: #fed15f;
          margin-left: 20px;
        }
      }
    }
    .left {
      .title {
        font-weight: bold;
        font-size: 52px;
      }
      .sub-title {
        font-weight: 400;
        font-size: 18px;
      }
    }
  }
}
</style>
