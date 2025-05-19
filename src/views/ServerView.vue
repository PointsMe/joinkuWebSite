<template>
  <div class="server-view-div">
    <div class="my-server">
      <el-row :gutter="12" class="row-server">
        <el-col :span="6" class="col-1-m">
          <div class="title">{{ $t('serverView.ourServices') }}</div>
        </el-col>
        <el-col :span="['zh-US'].includes(commonStore.language) ? 8 : 5" class="col-2-m">
          <div class="line"></div>
        </el-col>
        <el-col :span="['zh-US'].includes(commonStore.language) ? 10 : 13" class="col-3-m">
          <div class="sub-title">{{ $t('serverView.serviceDesc') }}</div>
        </el-col>
      </el-row>
      <el-row :gutter="12" class="row-num">
        <el-col :span="8" class="col-num">
          <div class="content">
            <p>1500<span>+</span></p>
            <p>{{ $t('serverView.customerSatisfaction') }}</p>
            <p>{{ $t('serverView.onlineCourses') }}</p>
          </div>
        </el-col>
        <el-col :span="8" class="col-num">
          <div class="content">
            <p>7×24<span>h</span></p>
            <p>{{ $t('serverView.intelligentSupport') }}</p>
            <p>{{ $t('serverView.fullTimeSupport') }}</p>
          </div>
        </el-col>
        <el-col :span="8" class="col-num">
          <div class="content">
            <p>2<span>min</span></p>
            <p>{{ $t('serverView.quickResponse') }}</p>
            <p>{{ $t('serverView.responseProcess') }}</p>
          </div>
        </el-col>
      </el-row>
      <div class="list-c-6">
        <div class="flex1 flex1-y">
          <div>
            <img src="@/assets/headset-fill.png" alt="" />
          </div>
          <div>
            <p>{{ $t('bannerNine.features.omniChannel.title') }}</p>
            <p>{{ $t('bannerNine.features.omniChannel.description') }}</p>
          </div>
        </div>
        <div class="flex1 flex1-g">
          <div>
            <img src="@/assets/fastsImages/b-9-2.png" alt="" />
          </div>
          <div>
            <p>{{ $t('bannerNine.features.inHouse.title') }}</p>
            <p>{{ $t('bannerNine.features.inHouse.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCommonStore } from "@/stores/modules/common"
const commonStore = useCommonStore()
</script>
<style scoped lang="less">
.server-view-div {
  margin-top: 90px;
  .my-server {
    width: 1280px;
    margin: auto;
    padding: 120px 0;

    .list-c-6 {
      display: flex;
      text-align: left;
      width: 1280px;
      margin: auto;
      margin-top: 140px;

      .flex1-y {
        background-color: #181818;
        color: #ffffff;
        margin-right: 10px;
      }

      .flex1-g {
        background: #fed15f;
        color: #111111;
        margin-left: 10px;
      }

      .flex1 {
        flex: 1;
        padding: 40px 30px;

        img {
          width: 42px;
        }

        p {
          padding: 0;
          margin: 0;
        }

        div {
          > p:first-child {
            font-size: 24px;
            padding-top: 30px;
          }

          > p:last-child {
            font-size: 14px;
            padding-top: 15px;
          }
        }
      }
    }

    .row-num {
      text-align: center;
      margin-top: 120px;
      margin-bottom: 120px;

      .col-num {
        .content {
          > p:first-child {
            font-family: DIN, DIN;
            font-weight: bold;
            font-size: 80px;
            color: #fdb522;

            > span {
              color: #1a1a1a;
            }
          }

          > p:nth-child(2) {
            font-family:
              Source Han Sans SC,
              Source Han Sans SC;
            font-weight: bold;
            font-size: 24px;
            color: #1a1a1a;
            padding-top: 16px;
          }

          > p:last-child {
            font-family:
              Source Han Sans SC,
              Source Han Sans SC;
            font-weight: 400;
            font-size: 16px;
            color: #666666;
            padding: 0 30px;
          }
        }
      }
    }

    .row-server {
      height: 64px;
      width: 100%;

      .col-1-m {
        position: relative;

        .title {
          font-weight: bold;
          font-size: 52px;
          color: #1a1a1a;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      .col-3-m {
        font-weight: 400;
        font-size: 18px;
        color: #1a1a1a;
        position: relative;

        .sub-title {
          position: absolute;
          top: 50%;
          left: 30px;
          transform: translateY(-50%);
        }
      }

      .col-2-m {
        position: relative;

        .line {
          position: absolute;
          width: 100%;
          height: 1px;
          top: 50%;
          background-color: #1a1a1a;
        }
      }
    }
  }
}
</style>
