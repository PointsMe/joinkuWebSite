<template>
  <div class="warehouse-management">
    <div class="content">
      <div class="title">
        <el-row class="row-t-5">
          <el-col :span="10" class="col-1-t"> 两大专业仓库管理系统 </el-col>
          <el-col :span="4" class="col-2-t">
            <div class="line"></div>
          </el-col>
          <el-col :span="10" class="col-3-t">
            满足各类商户需求，确保百货机食品供货仓储高效、规范运营
          </el-col>
        </el-row>
      </div>
      <div class="center">
        <img src="@/assets/banner3-1.png" alt="" />
      </div>
      <div class="bottom-banner-3">
        <el-row :gutter="20">
          <el-col :span="7" class="col-b" style="background: #dfe5f0">
            <div class="col-1-ban-3">
              <div class="top1-col">
                <img src="@/assets/supplier-icon.png" alt="" />
                <span class="tips">JOINKU SUPPLIER</span>
              </div>
              <div class="line-2">
                供应商版
                <img class="qiehuan" src="@/assets/qiehuan.png" alt="" />
              </div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="7" class="col-b border-top">
            <div class="con-a-b">
              <div class="t-b">智能库存管理</div>
              <div class="t-b-t">以批次级精度跟踪库存，以确保准确性可可追溯性。 高效的订单处理</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="7" class="col-b border-top">
            <div class="con-a-b">
              <div class="t-b">高效的订单处理</div>
              <div class="t-b-t">
                自动生成订单，支持客户代理下单简化订单管理。批量产品导入和条形码生成
              </div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top">
            <div class="con-a-b">
              <div class="t-b">批量产品导入和条形码生成</div>
              <div class="t-b-t">
                轻松批量上传产品并生成可打印的条形码以及加快处理速度。协作订单管理
              </div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top">
            <div class="con-a-b">
              <div class="t-b">协作订单管理</div>
              <div class="t-b-t">与下游零售商无缝对接，实现同步工作流程。</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top">
            <div class="con-a-b">
              <div class="t-b">基于云的数据存储</div>
              <div class="t-b-t">安全的云存储，保证数据安全和实时同步。</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
        </el-row>
      </div>

      <div class="center">
        <img src="@/assets/banner3-2.png" alt="" />
      </div>
      <div class="bottom-banner-3">
        <el-row :gutter="20">
          <el-col :span="7" class="col-b" style="background: #dee9e1">
            <div class="col-1-ban-3" style="color: #387a46">
              <div class="top1-col">
                <img src="@/assets/supplier-icon-y.png" alt="" />
                <span class="tips">JOINKU SUPPLIER</span>
              </div>
              <div class="line-2">零售业管理</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="7" class="col-b border-top-y">
            <div class="con-a-b">
              <div class="t-b">多角色管理</div>
              <div class="t-b-t">灵活的基于角色的权限以优化商店运营。</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="7" class="col-b border-top-y">
            <div class="con-a-b">
              <div class="t-b">移动友好的库存管理</div>
              <div class="t-b-t">支持通过移动应用程序进行库存输入，库存检查和调整。</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top-y">
            <div class="con-a-b">
              <div class="t-b">无缝同步</div>
              <div class="t-b-t">订单和库存的实时更新确保数据的一致性</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top-y">
            <div class="con-a-b">
              <div class="t-b">促销与采购</div>
              <div class="t-b-t">管理促销和采购工作流程以简化补货流程。</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top-y">
            <div class="con-a-b">
              <div class="t-b">多店监管</div>
              <div class="t-b-t">从统一的仪表板访问所有商店的收银机和订单详细信息。</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑这里暂时不需要添加
</script>

<style scoped lang="less">
.warehouse-management {
  width: 100%;
  background-color: #fff;

  .content {
    width: 1280px;
    margin: auto;

    .bottom-banner-3 {
      margin: auto;
      text-align: left;
      margin-top: 40px;
      margin-bottom: 40px;
      .border-top {
        border-top: 1px solid;
      }

      .border-top-y {
        border-top: 1px solid #387533;
      }

      .col-b {
        padding: 15px;
        height: 110px;
        margin-top: 10px;
        margin-bottom: 10px;

        .con-a-b {
          background-color: #fff !important;

          .t-b {
            font-size: 24px;
            font-weight: bold;

            .t-b-t {
              color: #595959;
              padding: 10px 0;
            }
          }
        }

        .col-1-ban-3 {
          color: #365aa1;

          .top1-col {
            text-align: right;
            padding-bottom: 10px;
            font-size: 32px;
            height: 36px;
            line-height: 36px;

            .tips {
              display: inline-block;
              margin-left: 15px;
            }

            > img {
              height: 36px;
              display: block;
              float: left;
            }
          }

          .line-2 {
            border-top: 1px solid;
            padding: 10px 0;

            .qiehuan {
              display: block;
              float: right;
            }
          }
        }
      }
    }

    .center {
      width: 100%;

      > img {
        width: 100%;
      }
    }

    .title {
      margin-top: 150px;
      text-align: left;
      margin-bottom: 20px;
      .row-t-5 {
        height: 70px;
        line-height: 70px;
        .col-3-t {
          text-indent: 20px;
          font-weight: 400;
          font-size: 18px;
        }
        .col-2-t {
          position: relative;
          .line {
            width: 100%;
            height: 1px;
            background-color: #aaa;
            position: absolute;
            top: 50%;
          }
        }
        .col-1-t {
          font-size: 52px;
          font-weight: bold;
          text-align: left;
        }
      }
    }
  }
}
</style>
