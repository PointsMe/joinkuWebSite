<template>
  <div class="hard-ware">
    <el-row :gutter="12">
      <el-col :span="8" class="col-one-ware">
        <div class="hard-ware-one">
          <div class="left-one">
            <img src="@/assets/fastsImages/goods-img.png" alt="" />
          </div>
          <div class="right-one">
            <p>平板11寸HUAWEI SE</p>
            <p>€230</p>
            <div class="num">
              <span>
                <el-icon><Minus /></el-icon>
              </span>
              <span>
                <el-input style="text-align: center" placeholder="0" />
              </span>
              <span>
                <el-icon><Plus /></el-icon>
              </span>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="8" class="col-one-ware">
        <div class="hard-ware-one">
          <div class="left-one">
            <img src="@/assets/fastsImages/goods-img.png" alt="" />
          </div>
          <div class="right-one">
            <p>平板11寸HUAWEI SE</p>
            <p>€230</p>
            <div class="num">
              <span>
                <el-icon><Minus /></el-icon>
              </span>
              <span>
                <el-input style="text-align: center" placeholder="0" />
              </span>
              <span>
                <el-icon><Plus /></el-icon>
              </span>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="8" class="col-one-ware">
        <div class="hard-ware-one">
          <div class="left-one">
            <img src="@/assets/fastsImages/goods-img.png" alt="" />
          </div>
          <div class="right-one">
            <p>平板11寸HUAWEI SE</p>
            <p>€230</p>
            <div class="num">
              <span>
                <el-icon><Minus /></el-icon>
              </span>
              <span>
                <el-input style="text-align: center" placeholder="0" />
              </span>
              <span>
                <el-icon><Plus /></el-icon>
              </span>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="8" class="col-one-ware">
        <div class="hard-ware-one">
          <div class="left-one">
            <img src="@/assets/fastsImages/goods-img.png" alt="" />
          </div>
          <div class="right-one">
            <p>平板11寸HUAWEI SE</p>
            <p>€230</p>
            <div class="num">
              <span>
                <el-icon><Minus /></el-icon>
              </span>
              <span>
                <el-input style="text-align: center" placeholder="0" />
              </span>
              <span>
                <el-icon><Plus /></el-icon>
              </span>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="8" class="col-one-ware">
        <div class="hard-ware-one">
          <div class="left-one">
            <img src="@/assets/fastsImages/goods-img.png" alt="" />
          </div>
          <div class="right-one">
            <p>平板11寸HUAWEI SE</p>
            <p>€230</p>
            <div class="num">
              <span>
                <el-icon><Minus /></el-icon>
              </span>
              <span>
                <el-input style="text-align: center" placeholder="0" />
              </span>
              <span>
                <el-icon><Plus /></el-icon>
              </span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { Minus, Plus } from '@element-plus/icons-vue'
defineOptions({
  name: 'hardWare'
})
</script>
<style scoped lang="less">
.hard-ware {
  p {
    margin: 0;
    padding: 0;
  }
  .col-one-ware {
    margin-top: 30px;
  }
  .hard-ware-one {
    height: 92px;
    width: 100%;
    position: relative;
    .right-one {
      margin-left: 108px;
      > p:nth-child(2) {
        padding: 8px 0;
      }
      .num {
        height: 24px;
        position: relative;
        span {
          display: block;
        }
        > span:first-child {
          background-color: #fff;
          width: 27px;
          text-align: center;
          cursor: pointer;
          position: absolute;
          left: 0;
          top: 1px;
          color: gray;
          height: 29px;
          .el-icon {
            border: 1px dashed #1b1b1b;
            font-size: 16px;
            margin-top: 6px;
          }
        }
        > span:nth-child(2) {
          margin-left: 33px;
          // height: 20px;
          width: 70px;
          text-align: center;
          text-align: center;
        }
        > span:last-child {
          background-color: #fff;
          width: 27px;
          height: 29px;
          text-align: center;
          margin-left: 10px;
          cursor: pointer;
          position: absolute;
          left: 103px;
          top: 1px;
          color: gray;
          .el-icon {
            border: 1px dashed #1b1b1b;
            font-size: 16px;
            margin-top: 6px;
          }
        }
      }
    }
    .left-one {
      height: 92px;
      width: 92px;
      background-color: #fff;
      position: absolute;
      left: 0;
      border-radius: 5px;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
