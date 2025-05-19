<template>
  <div class="package-ware">
    <el-row :gutter="12">
      <el-col :span="12" class="package-col">
        <div class="package-left">
          <div class="title">
            <p>FASTSIMPLE BASIC</p>
            <el-row :gutter="12">
              <el-col :span="12" class="col-left"> 基础套餐 </el-col>
              <el-col :span="12" class="col-right"> €830 </el-col>
            </el-row>
          </div>
          <div class="package-list">
            <div class="title-i">固定套餐</div>
            <el-row :gutter="12" class="row-pack">
              <el-col :span="12" class="left color-y"> 平板11寸HUAWEI SE </el-col>
              <el-col :span="12" class="right color-y"> €230 </el-col>
            </el-row>
            <el-row :gutter="12" class="row-pack">
              <el-col :span="12" class="left"> 热敏打印机 </el-col>
              <el-col :span="12" class="right"> €300 </el-col>
            </el-row>
            <el-row :gutter="12" class="row-pack">
              <el-col :span="12" class="left"> 平板收银防盗支架 </el-col>
              <el-col :span="12" class="right"> €70 </el-col>
            </el-row>
            <el-row :gutter="12" class="row-pack">
              <el-col :span="12" class="left"> FASTSIMPLE软件授权费 </el-col>
              <el-col :span="12" class="right"> €200 </el-col>
            </el-row>
            <el-row :gutter="12" class="row-pack bottom">
              <el-col :span="9"></el-col>
              <el-col :span="15">
                <div class="pack-money">
                  <span class="normal">
                    正常价:
                    <label>€800</label>
                  </span>
                  <span class="vips">
                    会员价:
                    <label>€400</label>
                  </span>
                  <div class="num">
                    <span>
                      <el-icon>
                        <Minus />
                      </el-icon>
                    </span>
                    <span>
                      <el-input style="text-align: center" placeholder="0" />
                    </span>
                    <span>
                      <el-icon>
                        <Plus />
                      </el-icon>
                    </span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> FASTSIMPLE标配版年费（1打印机+1平板） </el-col>
              <el-col :span="12" class="right">
                <el-radio-group>
                  <el-radio :value="3">年/ €240</el-radio>
                  <el-radio :value="6">月/ €20</el-radio>
                </el-radio-group>
              </el-col>
              <el-col :span="12"> </el-col>
              <el-col :span="12" class="right">
                <span class="red"><label>*</label>二选一</span>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> POS机(刷卡机) </el-col>
              <el-col :span="12" class="right">
                <el-radio-group>
                  <el-radio :value="3">购买 €220</el-radio>
                  <el-radio :value="6">租用/月 €10</el-radio>
                </el-radio-group>
              </el-col>
              <el-col :span="12"> </el-col>
              <el-col :span="12" class="right">
                <span class="red"><label>*</label>二选一</span>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> 点单收银打印扫码PDA </el-col>
              <el-col :span="12" class="right">
                <el-radio-group>
                  <el-radio :value="3">80mm €800</el-radio>
                  <el-radio :value="6">58mm €600</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> WIFI SIM卡版路由器 </el-col>
              <el-col :span="12" class="right">
                <span>台/ €100 &nbsp;&nbsp;&nbsp;</span>
                <div class="num">
                  <span>
                    <el-icon>
                      <Minus />
                    </el-icon>
                  </span>
                  <span>
                    <el-input style="text-align: center" placeholder="0" />
                  </span>
                  <span>
                    <el-icon>
                      <Plus />
                    </el-icon>
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> 钱箱 </el-col>
              <el-col :span="12" class="right">
                <span>个/ €80 &nbsp;&nbsp;&nbsp;</span>
                <div class="num">
                  <span>
                    <el-icon>
                      <Minus />
                    </el-icon>
                  </span>
                  <span>
                    <el-input style="text-align: center" placeholder="0" />
                  </span>
                  <span>
                    <el-icon>
                      <Plus />
                    </el-icon>
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> 热敏打印机 </el-col>
              <el-col :span="12" class="right">
                <span>台/ €300 &nbsp;&nbsp;&nbsp;</span>
                <div class="num">
                  <span>
                    <el-icon>
                      <Minus />
                    </el-icon>
                  </span>
                  <span>
                    <el-input style="text-align: center" placeholder="0" />
                  </span>
                  <span>
                    <el-icon>
                      <Plus />
                    </el-icon>
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="p-i" style="border: none">
            <el-row :gutter="12">
              <el-col :span="12" class="left">
                <el-select v-model="value" placeholder="SOFATTURA套餐购买" style="width: 1rem">
                  <el-option :key="'1'" :label="'SOFATTURA套餐购买'" :value="'1'" />
                </el-select>
              </el-col>
              <el-col :span="12" class="right">
                <el-radio-group>
                  <el-radio :value="3">A套餐(200张) €100</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
          </div>
          <div class="bottom-div">
            <el-row :gutter="12">
              <el-col :span="8">
                <el-button class="btn">输入邀请码</el-button>
              </el-col>
              <el-col :span="16">
                <el-button class="btn-i">立即购买</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>

      <el-col :span="12" class="package-col">
        <div class="package-left">
          <div class="title">
            <p style="color: #e99c0e">FASTSIMPLE PREMIUM</p>
            <el-row :gutter="12">
              <el-col :span="12" class="col-left"> 升级套餐 </el-col>
              <el-col :span="12" class="col-right" style="color: #e99c0e"> €1230 </el-col>
            </el-row>
          </div>
          <div class="package-list">
            <div class="title-i">固定套餐</div>
            <el-row :gutter="12" class="row-pack">
              <el-col :span="12" class="left color-y"> 平板14寸 </el-col>
              <el-col :span="12" class="right color-y"> €630 </el-col>
            </el-row>
            <el-row :gutter="12" class="row-pack">
              <el-col :span="12" class="left"> 热敏打印机 </el-col>
              <el-col :span="12" class="right"> €300 </el-col>
            </el-row>
            <el-row :gutter="12" class="row-pack">
              <el-col :span="12" class="left"> 平板收银防盗支架 </el-col>
              <el-col :span="12" class="right"> €70 </el-col>
            </el-row>
            <el-row :gutter="12" class="row-pack">
              <el-col :span="12" class="left"> FASTSIMPLE软件授权费 </el-col>
              <el-col :span="12" class="right"> €200 </el-col>
            </el-row>
            <el-row :gutter="12" class="row-pack bottom">
              <el-col :span="8"></el-col>
              <el-col :span="16">
                <div class="pack-money">
                  <span class="normal">
                    正常价:
                    <label>€1200</label>
                  </span>
                  <span class="vips">
                    会员价:
                    <label>€800</label>
                  </span>
                  <div class="num">
                    <span>
                      <el-icon>
                        <Minus />
                      </el-icon>
                    </span>
                    <span>
                      <el-input style="text-align: center" placeholder="0" />
                    </span>
                    <span>
                      <el-icon>
                        <Plus />
                      </el-icon>
                    </span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> FASTSIMPLE标配版年费（1打印机+1平板） </el-col>
              <el-col :span="12" class="right">
                <el-radio-group>
                  <el-radio :value="3">年/ €240</el-radio>
                  <el-radio :value="6">月/ €20</el-radio>
                </el-radio-group>
              </el-col>
              <el-col :span="12"> </el-col>
              <el-col :span="12" class="right">
                <span class="red"><label>*</label>二选一</span>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> POS机(刷卡机) </el-col>
              <el-col :span="12" class="right">
                <el-radio-group>
                  <el-radio :value="3">购买 €220</el-radio>
                  <el-radio :value="6">租用/月 €10</el-radio>
                </el-radio-group>
              </el-col>
              <el-col :span="12"> </el-col>
              <el-col :span="12" class="right">
                <span class="red"><label>*</label>二选一</span>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> 点单收银打印扫码PDA </el-col>
              <el-col :span="12" class="right">
                <el-radio-group>
                  <el-radio :value="3">80mm €800</el-radio>
                  <el-radio :value="6">58mm €600</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> WIFI SIM卡版路由器 </el-col>
              <el-col :span="12" class="right">
                <span>台/ €100 &nbsp;&nbsp;&nbsp;</span>
                <div class="num">
                  <span>
                    <el-icon>
                      <Minus />
                    </el-icon>
                  </span>
                  <span>
                    <el-input style="text-align: center" placeholder="0" />
                  </span>
                  <span>
                    <el-icon>
                      <Plus />
                    </el-icon>
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> 钱箱 </el-col>
              <el-col :span="12" class="right">
                <span>个/ €80 &nbsp;&nbsp;&nbsp;</span>
                <div class="num">
                  <span>
                    <el-icon>
                      <Minus />
                    </el-icon>
                  </span>
                  <span>
                    <el-input style="text-align: center" placeholder="0" />
                  </span>
                  <span>
                    <el-icon>
                      <Plus />
                    </el-icon>
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="p-i">
            <el-row :gutter="12">
              <el-col :span="12" class="left"> 热敏打印机 </el-col>
              <el-col :span="12" class="right">
                <span>台/ €300 &nbsp;&nbsp;&nbsp;</span>
                <div class="num">
                  <span>
                    <el-icon>
                      <Minus />
                    </el-icon>
                  </span>
                  <span>
                    <el-input style="text-align: center" placeholder="0" />
                  </span>
                  <span>
                    <el-icon>
                      <Plus />
                    </el-icon>
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="p-i" style="border: none">
            <el-row :gutter="12">
              <el-col :span="12" class="left">
                <el-select v-model="value" placeholder="SOFATTURA套餐购买" style="width: 1rem">
                  <el-option :key="'1'" :label="'SOFATTURA套餐购买'" :value="'1'" />
                </el-select>
              </el-col>
              <el-col :span="12" class="right">
                <el-radio-group>
                  <el-radio :value="3">A套餐(200张) €100</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
          </div>
          <div class="bottom-div">
            <el-row :gutter="12">
              <el-col :span="8">
                <el-button class="btn">输入邀请码</el-button>
              </el-col>
              <el-col :span="16">
                <el-button class="btn-i">立即购买</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'
defineOptions({
  name: 'packageWare'
})
const value = ref('1')
</script>
<style scoped lang="less">
.package-ware {
  .package-col {
    margin-top: 40px;

    .package-left {
      border-radius: 16px 16px 16px 16px;
      padding: 40px 32px;
      background-color: #fff;
      .bottom-div {
        font-family: Inter, Inter;
        font-weight: 500;
        font-size: 16px;
        color: #ffffff;
        margin-top: 23px;
        .btn {
          width: 100%;
          height: 60px;
          background: #ffffff;
          border-radius: 100px;
          border: 1px solid #1a1a1a;
        }
        .btn-i {
          width: 100%;
          height: 60px;
          background: #1a1a1a;
          border-radius: 100px;
          border: 1px solid #1a1a1a;
          color: #fff;
        }
      }
      .p-i {
        padding: 20px 0;
        border-bottom: 1px solid #eeeeee;
        .left {
          text-align: left;
          font-family: Inter, Inter;
          font-weight: 500;
          font-size: 14px;
          color: #1a1a1a;
        }
        .right {
          text-align: right;
          font-family: Inter, Inter;
          font-weight: 500;
          font-size: 14px;
          color: #1a1a1a;
          .num {
            height: 24px;
            position: relative;
            float: right;
            margin-right: 32px;
            span {
              display: block;
            }

            > span:first-child {
              background-color: #f7f7f7;
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
              background-color: #f7f7f7;
            }

            > span:last-child {
              background-color: #f7f7f7;
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
          .red {
            font-family:
              Source Han Sans SC,
              Source Han Sans SC;
            font-weight: 400;
            font-size: 14px;
            > label {
              color: #ff0000;
            }
          }
        }
      }
      .package-list {
        border-bottom: 1px solid #eeeeee;
        padding-bottom: 10px;
        .row-pack {
          padding: 10px 0;
          font-family:
            Source Han Sans SC,
            Source Han Sans SC;
          font-weight: 400;
          font-size: 14px;
          .pack-money {
            .normal {
              font-family:
                Source Han Sans SC,
                Source Han Sans SC;
              font-weight: 500;
              font-size: 12px;
              color: #666666;
              > label {
                font-weight: 500;
                font-size: 20px;
              }
            }
            .vips {
              font-family:
                Source Han Sans SC,
                Source Han Sans SC;
              font-weight: 500;
              font-size: 12px;
              color: #e99c0e;
              margin-left: 30px;
              > label {
                font-weight: 500;
                font-size: 20px;
              }
            }
            .num {
              height: 24px;
              position: relative;
              float: right;
              margin-right: 32px;
              span {
                display: block;
              }

              > span:first-child {
                background-color: #f7f7f7;
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
                background-color: #f7f7f7;
              }

              > span:last-child {
                background-color: #f7f7f7;
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

          .color-y {
            color: #e99c0e;
          }

          .left {
            text-align: left;
          }

          .right {
            text-align: right;
          }
        }

        .title-i {
          font-family:
            Source Han Sans SC,
            Source Han Sans SC;
          font-weight: 500;
          font-size: 14px;
          color: #1b1b1b;
          padding-top: 20px;
          padding-bottom: 10px;
        }
      }

      .title {
        padding-bottom: 10px;
        border-bottom: 1px solid #eeeeee;

        .col-right {
          font-family: Inter, Inter;
          font-weight: bold;
          font-size: 44px;
          color: #fed15f;
          text-align: right;
        }

        .col-left {
          font-family:
            Source Han Sans SC,
            Source Han Sans SC;
          font-weight: bold;
          font-size: 32px;
          color: #1a1a1a;
          margin-top: 12px;
        }

        p {
          margin: 0;
          font-family: Inter, Inter;
          font-weight: bold;
          font-size: 32px;
          color: #fed15f;
        }
      }
    }
  }
}
</style>
