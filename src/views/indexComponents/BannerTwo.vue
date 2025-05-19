<template>
  <div class="banner-two">
    <div class="title-content">
      <div class="title">
          <span class="con">{{ $t('bannerTwo.title') }}</span>
          <span class="line"></span>
          {{ $t('bannerTwo.title') }}
      </div>
    </div>
    <div class="sub-title-con">
      {{ $t('bannerTwo.subTitle') }}
    </div>
    <div class="title-content-1">
      <div class="title">
          <span class="con">{{ $t('bannerTwo.whyChoose') }}</span>
          <span class="line"></span>
          {{ $t('bannerTwo.whyChoose') }}
      </div>
    </div>
    <div class="choose-fast">
      <el-row>
        <el-col :span="8">
          <div class="b-2-col">
            <p>
              <img src="@/assets/fastsImages/b-2-1.png" alt="" />
            </p>
            <p>{{ $t('bannerTwo.seamlessIntegration') }}</p>
            <p>{{ $t('bannerTwo.seamlessIntegrationDesc') }}</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="b-2-col">
            <p>
              <img src="@/assets/fastsImages/b-2-2.png" alt="" />
            </p>
            <p>{{ $t('bannerTwo.diverseFunctions') }}</p>
            <p>{{ $t('bannerTwo.diverseFunctionsDesc') }}</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="b-2-col">
            <p>
              <img src="@/assets/fastsImages/b-2-3.png" alt="" />
            </p>
            <p>{{ $t('bannerTwo.enhancedExp') }}</p>
            <p>{{ $t('bannerTwo.enhancedExpDesc') }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="point-banner">
      <h1>{{ $t('bannerTwo.keyFeatures') }}</h1>
      <p class="sub-title">{{ $t('bannerTwo.keyFeaturesSubtitle') }}</p>
      <div class="top-margin-40">
        <el-row :gutter="12">
          <el-col :span="8">
            <div class="one">
              <div></div>
              <div>
                <p>{{ $t('bannerTwo.tabletFeature') }}</p>
                <p>{{ $t('bannerTwo.tabletFeatureDesc1') }}</p>
                <p>{{ $t('bannerTwo.tabletFeatureDesc2') }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="two">
              <div></div>
              <div>
                <p>{{ $t('bannerTwo.qrCodeFeature') }}</p>
                <p>{{ $t('bannerTwo.qrCodeFeatureDesc1') }}</p>
                <p>{{ $t('bannerTwo.qrCodeFeatureDesc2') }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="three">
              <div></div>
              <div>
                <p>{{ $t('bannerTwo.onlinePayment') }}</p>
                <p>{{ $t('bannerTwo.onlinePaymentDesc1') }}</p>
                <p>{{ $t('bannerTwo.onlinePaymentDesc2') }}</p>
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="12" class="row-top-20">
          <el-col :span="6">
            <div class="eight">
              <div></div>
              <div>
                <p>{{ $t('bannerTwo.queueManagement') }}</p>
                <p>{{ $t('bannerTwo.queueManagementDesc1') }}</p>
                <p>{{ $t('bannerTwo.queueManagementDesc2') }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="seven">
              <div></div>
              <div>
                <p>{{ $t('bannerTwo.orderSync') }}</p>
                <p>{{ $t('bannerTwo.orderSyncDesc1') }}</p>
                <p>{{ $t('bannerTwo.orderSyncDesc2') }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="six">
              <div></div>
              <div>
                <p>{{ $t('bannerTwo.digitalInvoice') }}</p>
                <p>{{ $t('bannerTwo.digitalInvoiceDesc1') }}</p>
                <p>{{ $t('bannerTwo.digitalInvoiceDesc2') }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="five">
              <div></div>
              <div>
                <p>{{ $t('bannerTwo.allergenScreening') }}</p>
                <p>{{ $t('bannerTwo.allergenScreeningDesc1') }}</p>
                <p>{{ $t('bannerTwo.allergenScreeningDesc2') }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'bannerTwo'
})
</script>
<style scoped lang="less">
.banner-two {
  width: 100%;
  background: #ffffff;

  .point-banner {
    width: 1280px;
    margin: auto;
    margin-top: 100px;
    text-align: left;

    .top-margin-40 {
      margin-top: 40px;

      .row-top-20 {
        margin-top: 20px;
      }

      .one {
        background-image: url('@/assets/fastsImages/b-2-4.png');
      }

      .two {
        background-image: url('@/assets/fastsImages/b-2-10.png');
      }

      .three {
        background-image: url('@/assets/fastsImages/b-2-9.png');
      }

      .eight {
        background-image: url('@/assets/fastsImages/b-2-8.png');
      }

      .seven {
        background-image: url('@/assets/fastsImages/b-2-7.png');
      }

      .six {
        background-image: url('@/assets/fastsImages/b-2-6.png');
      }

      .five {
        background-image: url('@/assets/fastsImages/b-2-5.png');
      }

      .one,
      .two,
      .three,
      .eight,
      .seven,
      .six,
      .five {
        height: 285px;
        width: 100%;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        > div {
          position: absolute;
          bottom: 0;
          color: #ffffff;
          left: 20px;

          > p:first-child {
            font-weight: bold;
            font-size: 18px;
            color: #ffffff;
            padding: 10px 0;
          }

          > p {
            margin: 0;
            padding: 0;
            font-weight: 400;
            font-size: 16px;
            color: #ffffff;
          }

          > p:last-child {
            padding-bottom: 10px;
          }
        }
      }
    }

    > h1 {
      font-weight: bold;
      font-size: 52px;
      color: #111111;
    }

    .sub-title {
      font-weight: 400;
      font-size: 18px;
      color: #111111;
    }
  }

  .choose-fast {
    width: 1280px;
    margin: auto;
    margin-top: 100px;

    .b-2-col {
      border-left: 1px solid #a1a1a1;
      text-align: center;

      > p {
        margin: 0;
        padding: 0;

        > img {
          width: 60px;
          height: 60px;
        }
      }

      > p:nth-child(2) {
        padding: 15px 0;
        font-weight: bold;
        font-size: 24px;
        color: #000000;
      }

      > p:last-child {
        font-weight: 400;
        font-size: 14px;
        color: #000000;
      }
    }
  }

  .sub-title-con {
    margin-left: 860px;
    margin-top: 50px;
    font-weight: 400;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.9);
    text-align: left;
    margin-right: 438px;
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
        .con{
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

  .title-content-1 {
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
        .con{
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
</style>
