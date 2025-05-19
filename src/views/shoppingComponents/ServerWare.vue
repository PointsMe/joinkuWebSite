<template>
  <div class="server-ware">
    <el-row :gutter="12">
      <el-col :span="8" class="col-one">
        <div class="soft-ware-one">
          <p>远程指导安装人工费</p>
          <div class="radio-list-i">
            <el-row class="row-radio">
              <el-col :span="15">
                <el-radio-group>
                  <el-radio :value="3">€50/小时</el-radio>
                </el-radio-group>
              </el-col>
              <el-col :span="9">
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
        </div>
      </el-col>

      <el-col :span="8" class="col-one">
        <div class="soft-ware-one">
          <p>商品人工导入费</p>
          <div class="radio-list-i">
            <el-row class="row-radio">
              <el-col :span="15">
                <el-radio-group>
                  <el-radio :value="3">€100</el-radio>
                  <el-radio :value="6">€200</el-radio>
                </el-radio-group>
              </el-col>
              <el-col :span="9">
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
        </div>
      </el-col>

      <el-col :span="8" class="col-one">
        <div class="soft-ware-one">
          <p>商品人工翻译费</p>
          <div class="radio-list-i">
            <el-row class="row-radio">
              <el-col :span="15">
                <el-radio-group>
                  <el-radio :value="3">€50/语言</el-radio>
                </el-radio-group>
              </el-col>
              <el-col :span="9">
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
        </div>
      </el-col>

      <el-col :span="8" class="col-one">
        <div class="soft-ware-one">
          <p>人工售后费</p>
          <div class="radio-list-i">
            <el-row class="row-radio">
              <el-col :span="15">
                <el-radio-group>
                  <el-radio :value="3">€10€/30min</el-radio>
                </el-radio-group>
              </el-col>
              <el-col :span="9">
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
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { Minus, Plus } from '@element-plus/icons-vue'
defineOptions({
  name: 'serverWare'
})
</script>
<style scoped lang="less">
.server-ware {
  p {
    margin: 0;
    padding: 0;
  }

  .col-one {
    margin-top: 20px;

    .soft-ware-one {
      width: 100%;
      background-color: #fff;
      padding: 22px 20px;
      border-radius: 6px 6px 6px 6px;

      .radio-list-i {
        .row-radio {
          margin-top: 32px;
          font-family: Inter, Inter;
          font-weight: 500;
          font-size: 14px;
          color: #666666;
          line-height: 14px;
          .num {
            height: 24px;
            position: relative;

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
      }

      > p {
        font-family:
          Source Han Sans SC,
          Source Han Sans SC;
        font-weight: 500;
        font-size: 16px;
        color: #1a1a1a;
      }
    }
  }
}
</style>
