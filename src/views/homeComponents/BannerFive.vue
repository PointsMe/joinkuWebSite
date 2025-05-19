<template>
  <div class="banner-5">
    <div class="content-5">
      <div class="title">
        <el-row class="row-t-5">
          <el-col :span="9" class="col-1-t"> Joinku 多平台协作 </el-col>
          <el-col :span="12" class="col-2-t">
            <div class="line"></div>
          </el-col>
          <el-col :span="3" class="col-3-t"> 跨角色无缝连接 </el-col>
        </el-row>
      </div>
      <el-row class="row-t-5-2">
        <el-col :span="7">
          <div>
            <div>
              <img src="@/assets/banner-5-1.png" alt="" />
            </div>
            <p class="f-p">跨平台数据同步</p>
            <p class="s-p">整合供应商、零售商和销售代理，确保可追踪的工作流程并实时更新。</p>
          </div>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="7">
          <div>
            <div>
              <img src="@/assets/banner-5-2.png" alt="" />
            </div>
            <p class="f-p">灵活提交订单</p>
            <p class="s-p">通过应用程序、即时消息或电子邮件发送订单以满足不同的业务需求。</p>
          </div>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="7">
          <div>
            <div>
              <img src="@/assets/banner-5-3.png" alt="" />
            </div>
            <p class="f-p">合规性和安全性</p>
            <p class="s-p">确保加密数据存储、隐私保护和遵守行业标准。</p>
          </div>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-5 {
  width: 100%;
  height: 707px;
  background-color: #1b1b1b;
  .content-5 {
    width: 1280px;
    margin: auto;
    .row-t-5-2 {
      text-align: left;
      color: #fff;
      margin-top: 60px;
      p {
        margin: 0;
        padding: 0;
      }
      .f-p {
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
      }
      .s-p {
        font-weight: 400;
        font-size: 16px;
        margin-top: 10px;
        color: #666;
        font-family: Source Han Sans SC-Regular;
      }
    }
    .title {
      .row-t-5 {
        color: #fff;
        padding: 120px 0px 60px 0px;
        height: 70px;
        line-height: 70px;
        .col-3-t {
          font-weight: 400;
          font-size: 18px;
        }
        .col-2-t {
          position: relative;
          .line {
            width: 100%;
            height: 1px;
            background-color: #fff;
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
