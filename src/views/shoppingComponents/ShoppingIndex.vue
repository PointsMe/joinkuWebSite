<template>
    <div class="shopping-index">
        <div class="shop-list">
      <div class="shopping-card">
        购物车
        <el-icon class="crad-class">
          <ShoppingCart />
        </el-icon>
      </div>

      <el-collapse accordion>
        <el-collapse-item name="1">
          <template #title>
            <div class="card-title-style">
              <span> 硬件选购 </span>
              <span></span>
            </div>
          </template>
          <template #icon="{ isActive }">
            <div class="card-title-style-i">
              <div v-if="isActive">
                <span>展开</span>
                <el-icon class="icon-open-i">
                  <ArrowDownBold />
                </el-icon>
              </div>
              <div v-else>
                <span>收起</span>
                <el-icon class="icon-open-i">
                  <ArrowRightBold />
                </el-icon>
              </div>
            </div>
          </template>
          <div class="card-content-div">
            <HardWare />
          </div>
        </el-collapse-item>

        <el-collapse-item name="2">
          <template #title>
            <div class="card-title-style">
              <span> 软件费用 </span>
              <span></span>
            </div>
          </template>
          <template #icon="{ isActive }">
            <div class="card-title-style-i">
              <div v-if="isActive">
                <span>展开</span>
                <el-icon class="icon-open-i">
                  <ArrowDownBold />
                </el-icon>
              </div>
              <div v-else>
                <span>收起</span>
                <el-icon class="icon-open-i">
                  <ArrowRightBold />
                </el-icon>
              </div>
            </div>
          </template>
          <div class="card-content-div">
            <SoftWare />
          </div>
        </el-collapse-item>

        <el-collapse-item name="3">
          <template #title>
            <div class="card-title-style">
              <span> 服务选购 </span>
              <span></span>
            </div>
          </template>
          <template #icon="{ isActive }">
            <div class="card-title-style-i">
              <div v-if="isActive">
                <span>展开</span>
                <el-icon class="icon-open-i">
                  <ArrowDownBold />
                </el-icon>
              </div>
              <div v-else>
                <span>收起</span>
                <el-icon class="icon-open-i">
                  <ArrowRightBold />
                </el-icon>
              </div>
            </div>
          </template>
          <div class="card-content-div">
            <ServerWare />
          </div>
        </el-collapse-item>

        <el-collapse-item name="4">
          <template #title>
            <div style="position: relative">
              <div class="card-title-style">
                <span> 精选套餐 </span>
                <span></span>
              </div>
              <div class="tips">
                <el-icon><QuestionFilled /></el-icon>
                注册会员输入邀请码后，能享受
                <span>€800</span>
                优惠哦
                <el-button class="btn">立即注册</el-button>
              </div>
            </div>
          </template>
          <template #icon="{ isActive }">
            <div class="card-title-style-i">
              <div v-if="isActive">
                <span>展开</span>
                <el-icon class="icon-open-i">
                  <ArrowDownBold />
                </el-icon>
              </div>
              <div v-else>
                <span>收起</span>
                <el-icon class="icon-open-i">
                  <ArrowRightBold />
                </el-icon>
              </div>
            </div>
          </template>
          <div class="card-content-div">
            <PackageWare />
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    </div>
</template>
<script setup lang="ts">
import HardWare from '@/views/shoppingComponents/HardWare.vue'
import SoftWare from '@/views/shoppingComponents/SoftWare.vue'
import ServerWare from '@/views/shoppingComponents/ServerWare.vue'
import PackageWare from '@/views/shoppingComponents/PackageWare.vue'
import {
  QuestionFilled,
  ShoppingCart,
  ArrowDownBold,
  ArrowRightBold
} from '@element-plus/icons-vue'
defineOptions({
  name: 'shoppingIndex'
})
</script>
<style scoped lang="less">
.shopping-index{
    .shop-list {
    width: 1280px;
    margin: auto;

    .card-content-div {
      background-color: #f7f7f7;
      padding-bottom: 50px;
    }

    .card-title-style-i {
      margin: 0 8px 0 auto;
      font-family:
        Source Han Sans SC,
        Source Han Sans SC;
      font-weight: 400;
      font-size: 14px;
      color: #1a1a1a;

      > div {
        position: relative;

        span {
          display: block;
          margin-right: 20px;
        }

        .icon-open-i {
          display: block;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-40%);
        }
      }
    }
    .tips {
      position: absolute;
      bottom: 15px;
      left: 110px;
      > span {
        color: #fed15f;
      }
      .el-icon {
        color: #2865ff;
      }
      .btn {
        font-family:
          Source Han Sans SC,
          Source Han Sans SC;
        font-weight: 400;
        font-size: 12px;
        color: #1a1a1a;
        background-color: #fed15f;
        width: 64px;
        height: 24px;
        border: none;
        margin-left: 10px;
      }
    }
    .card-title-style {
      position: relative;
      width: 600px;
      height: 92px;

      span {
        display: block;
        position: absolute;
      }

      > span:first-child {
        font-family:
          Source Han Sans SC,
          Source Han Sans SC;
        font-weight: 500;
        font-size: 24px;
        color: #1a1a1a;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
      }

      > span:last-child {
        width: 47px;
        height: 16px;
        background: #fed15f;
        left: 0;
        top: 50%;
        transform: translateY(20%);
        z-index: 1;
      }
    }

    .shopping-card {
      padding-top: 30px;
      padding-bottom: 24px;
      font-family:
        Source Han Sans SC,
        Source Han Sans SC;
      font-weight: 400;
      font-size: 16px;
      color: #1a1a1a;
      text-align: right;
      position: relative;
      padding-right: 25px;

      .crad-class {
        font-size: 23px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-30%);
      }
    }
  }
}
</style>