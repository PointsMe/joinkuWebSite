<template>
  <div class="banner-6">
    <div class="content-6">
      <div class="title">
        <el-row class="row-t-5">
          <el-col :span="10" class="col-2-t">
            <div class="line"></div>
          </el-col>
          <el-col :span="4" class="col-1-t"> 独家优势 </el-col>
          <el-col :span="10" class="col-2-t">
            <div class="line"></div>
          </el-col>
        </el-row>
        <div class="s-t">为什么选择Joinku？</div>
      </div>
      <div class="list-b-6">
        <div class="flex">
          <div class="flex1 f-1">
            <div class="f-1-b">
              <p>智能匹配</p>
              <p>自动匹配常购买的商品，减少手动输入，提高效率。</p>
            </div>
          </div>
          <div class="flex1 f-2">
            <div class="f-1-b">
              <p>多渠道订单确认</p>
              <p>与多个审批者共享预订单并管理确认链接以减少错误。</p>
            </div>
          </div>
          <div class="flex1 f-3">
            <div class="f-1-b">
              <p>端到端数字化工作流程</p>
              <p>可以通过应用程序、消息平台或电子邮件处理订单，以实现完全的灵活性。</p>
            </div>
          </div>
          <div class="flex1 f-4">
            <div class="f-1-b">
              <p>全面的角色覆盖</p>
              <p>专为供应商和零售商设计的定制工具，提高可用性和运营效率。</p>
            </div>
          </div>
          <div class="flex1 f-5">
            <div class="f-1-b">
              <p>智能语音下单</p>
              <p>独特的语音预订功能简化了订购流程并减少了手动输入错误。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="list-c-6">
        <div class="flex1 flex1-y">
          <div>
            <img src="@/assets/headset-fill.png" alt="" />
          </div>
          <div>
            <p>通过远程和现场服务提供全渠道支持</p>
            <p>远程和AI服务支持。多种支持渠道，从远程电话指导到现场协助，旨在支持您的业务增长</p>
          </div>
        </div>
        <div class="flex1 flex1-g">
          <div>
            <img src="@/assets/headset-fill-1.png" alt="" />
          </div>
          <div>
            <p>完全内部开发，拥有专家技术支持</p>
            <p>内部研发确保优质服务，专业团队提供全面的技术和客户支持</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-6 {
  .content-6 {
    width: 1280px;
    margin: auto;

    .list-c-6 {
      display: flex;
      text-align: left;
      margin-top: 140px;
      .flex1-y {
        background-color: #6a8c69;
        color: #fff;
        margin-right: 10px;
      }
      .flex1-g {
        background-color: #f6f6f4;
        color: #88a284;
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
    .list-b-6 {
      text-align: center;
      .flex {
        display: flex;
        height: 194px;
        p {
          margin: 0;
          padding: 0;
        }
        .f-1 {
          background-image: url('@/assets/01.png');
          background-size: 60%; /* 确保图片覆盖整个元素 */
          background-position: center; /* 将图片居中显示 */
          background-repeat: no-repeat;
        }
        .f-2 {
          background-image: url('@/assets/02.png');
          background-size: 60%; /* 确保图片覆盖整个元素 */
          background-position: center; /* 将图片居中显示 */
          background-repeat: no-repeat;
        }
        .f-3 {
          background-image: url('@/assets/03.png');
          background-size: 60%; /* 确保图片覆盖整个元素 */
          background-position: center; /* 将图片居中显示 */
          background-repeat: no-repeat;
        }
        .f-4 {
          background-image: url('@/assets/04.png');
          background-size: 60%; /* 确保图片覆盖整个元素 */
          background-position: center; /* 将图片居中显示 */
          background-repeat: no-repeat;
        }
        .f-5 {
          background-image: url('@/assets/05.png');
          background-size: 60%; /* 确保图片覆盖整个元素 */
          background-position: center; /* 将图片居中显示 */
          background-repeat: no-repeat;
        }
        .flex1 {
          flex: 1;
          position: relative;
          .f-1-b {
            position: absolute;
            bottom: 0;
            > p:first-child {
              font-size: 22px;
              color: #1b1b1b;
            }
            > p:last-child {
              color: #595959;
              font-size: 14px;
              padding-top: 5px;
              padding: 5px 10px 0 10px;
              height: 50px;
            }
          }
        }
      }
    }
    .title {
      color: #000;
      .s-t {
        text-align: center;
        font-size: 18px;
        font-weight: 400px;
        padding: 15px 0;
      }
      .row-t-5 {
        padding: 200px 0px 60px 0px;
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
            background-color: #000;
            position: absolute;
            top: 50%;
          }
        }
        .col-1-t {
          font-size: 52px;
          font-weight: bold;
          text-align: center;
          color: #1b1b1b;
        }
      }
    }
  }
}
</style>
