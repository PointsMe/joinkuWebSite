<template>
  <div class="banner-4-div">
    <div class="con-job">
      <div class="title-content">
        <div class="title">
          <span class="con">{{ $t("bannerFour.idealBusiness") }}</span>
          <span class="line"></span>
          {{ $t("bannerFour.idealBusiness") }}
        </div>
      </div>
      <div class="sub-title">{{ $t("bannerFour.solutionForSmallBusinesses") }}</div>
    </div>
    <div class="con-list">
      <ImgView />
    </div>
    <div class="pay-style">
      <div class="title-content">
        <div class="title">{{ $t("bannerFour.flexiblePayment") }}</div>
        <span></span>
      </div>
      <div class="sub-title">{{ $t("bannerFour.multiplePaymentOptions") }}</div>
      <div class="pay-list">
        <el-row :gutter="12">
          <el-col :span="12">
            <el-row>
              <el-col :span="8"> </el-col>
              <el-col :span="16" class="height-50">
                <div class="title">{{ $t("bannerFour.multiplePaymentMethods") }}</div>
                <div class="sub-t">{{ $t("bannerFour.satisfyCustomerPreferences") }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" class="height-50"> </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-2.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-3.png" alt="" />
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-4.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-5.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-6.png" alt="" />
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-7.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-8.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-9.png" alt="" />
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-10.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50"> </el-col>
              <el-col :span="8" class="height-50"> </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="pay-options">
        <div class="title">
          <el-row class="row-line">
            <el-col
              :span="['zh-US', 'en-US'].includes(commonStore.language) ? 9 : 7"
              class="col-relative"
            >
              <div class="line"></div>
            </el-col>
            <el-col :span="['zh-US', 'en-US'].includes(commonStore.language) ? 6 : 10">
              <div class="name">
                <p>{{ $t("bannerFour.billingOptions") }}</p>
                <p>{{ $t("bannerFour.adaptToVariousScenarios") }}</p>
              </div>
            </el-col>
            <el-col
              :span="['zh-US', 'en-US'].includes(commonStore.language) ? 9 : 7"
              class="col-relative"
            >
              <div class="line"></div>
            </el-col>
          </el-row>
        </div>
        <div class="title-list">
          <el-row>
            <el-col :span="6">
              <div class="col-one">
                <span>01</span>
                {{ $t("bannerFour.provideAllPayments") }}
              </div>
            </el-col>
            <el-col :span="6">
              <div class="col-one">
                <span>02</span>
                {{ $t("bannerFour.splitEvenly") }}
              </div>
            </el-col>
            <el-col :span="6">
              <div class="col-one">
                <span>03</span>
                {{ $t("bannerFour.payAsNeeded") }}
              </div>
            </el-col>
            <el-col :span="6">
              <div class="col-one">
                <span>04</span>
                {{ $t("bannerFour.billingPerOrder") }}
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="title-list-1">
          <el-row :gutter="12">
            <el-col :span="8">
              <div class="con-a">
                <img src="@/assets/fastsImages/b-4-11.png" alt="" />
                <p class="f-p">{{ $t("bannerFour.currencySupport") }}</p>
                <p class="s-p">{{ $t("bannerFour.currencySupportDesc") }}</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="con-a">
                <img src="@/assets/fastsImages/b-4-12.png" alt="" />
                <p class="f-p">{{ $t("bannerFour.paymentScenarios") }}</p>
                <p class="s-p">{{ $t("bannerFour.paymentScenariosDesc") }}</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="con-a">
                <img src="@/assets/fastsImages/b-4-13.png" alt="" />
                <p class="f-p">{{ $t("bannerFour.eInvoicing") }}</p>
                <p class="s-p">{{ $t("bannerFour.eInvoicingDesc") }}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCommonStore } from "@/stores/modules/common";
import ImgView from "./ImgView.vue";
const commonStore = useCommonStore();
// console.log("useCommonStore==>",commonStore.language)
</script>
<style scoped lang="less">
.banner-4-div {
  width: 100%;
  .pay-style {
    width: 1280px;
    margin: auto;
    .pay-options {
      .title-list-1 {
        .con-a {
          text-align: center;
          img {
            display: block;
            height: 282px;
            width: 100%;
          }
          > p {
            margin: 0;
            padding: 0;
          }
          .f-p {
            font-weight: bold;
            font-size: 24px;
            color: rgba(0, 0, 0, 0.9);
            margin-top: 20px;
          }

          .s-p {
            margin-top: 10px;
            font-weight: 400;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.6);
          }
        }
      }
      .title-list {
        margin: 60px 0;
        .col-one {
          font-weight: bold;
          font-size: 24px;
          color: #1a1a1a;
          > span {
            font-weight: 400;
            font-size: 80px;
            color: #fed15f;
          }
        }
      }
      .title {
        margin-top: 150px;
        .row-line {
          height: 60px;
          .col-relative {
            position: relative;
            .line {
              position: absolute;
              top: 50%;
              width: 100%;
              height: 1px;
              background-color: #1a1a1a;
            }
          }

          .name {
            text-align: center;
            > p:first-child {
              font-weight: bold;
              font-size: 40px;
              color: #1b1b1b;
            }
            > p:last-child {
              font-weight: 400;
              font-size: 16px;
              color: rgba(0, 0, 0, 0.6);
            }
          }
        }
      }
    }
    .pay-list {
      width: 100%;
      .height-50 {
        height: 200px;
        margin-top: 20px;
        .one-pay {
          width: 200px;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        .title {
          font-weight: bold;
          font-size: 40px;
          color: #1b1b1b;
          margin-top: 20px;
        }
        .sub-t {
          font-weight: 400;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    .sub-title {
      text-align: left;
      font-weight: 400;
      font-size: 18px;
      color: #1b1b1b;
    }
    .title-content {
      position: relative;
      height: 80px;
      margin: auto;
      margin-top: 100px;
      text-align: left;
      .title {
        font-weight: bold;
        font-size: 52px;
        color: #1a1a1a;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0;
      }

      > span {
        display: block;
        width: 204px;
        height: 16px;
        background: #fed15f;
        position: absolute;
        bottom: 10px;
        left: 10px;
        z-index: 1;
      }
    }
  }
  .con-list {
    width: 1280px;
    height: 164px;
    margin: auto;
    margin-top: 80px;
    overflow: hidden;
    // background-image: url("@/assets/fastsImages/b-4-1.png");
    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;
    // text-align: center;
  }
  .con-job {
    width: 1280px;
    margin: auto;
    text-align: center;
    .sub-title {
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      color: #1b1b1b;
    }
    .title-content {
      position: relative;
      height: 80px;
      // width: 100%;
      margin: auto;
      margin-top: 150px;
      display: block;
      text-align: center;
      display: flex;
      justify-content: center;
      .title {
        font-weight: bold;
        font-size: 52px;
        color: #1a1a1a;
        width: auto;
        height: 100%;
        position: relative;
        color: #ffffff;
        .con {
          position: absolute;
          z-index: 2;
          bottom: 0;
          font-weight: bold;
          font-size: 52px;
          color: #1a1a1a;
        }
        .line {
          display: block;
          width: 204px;
          height: 16px;
          background: #fed15f;
          position: absolute;
          bottom: 10px;
          // left: 0px;
          z-index: 1;
        }
      }
    }
  }
}
</style>
