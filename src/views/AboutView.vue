<template>
  <div class="about-view">
    <div class="top">
      <p>{{ $t("aboutView.whoWeAre") }}</p>
      <p>
        {{ $t("aboutView.companyDescription") }}
      </p>
    </div>
    <div class="pen">
      <p>{{ $t("aboutView.globalExpertise") }}</p>
      <p>{{ $t("aboutView.technicalSupport") }}</p>
      <el-row :gutter="12" class="row-pen">
        <el-col :span="12" class="col-con">
          <el-row :gutter="12">
            <el-col :span="6" class="col-pen">
              <div class="content">
                <img src="@/assets/fastsImages/about-1.png" alt="" />
              </div>
            </el-col>
            <el-col :span="6" class="col-pen">
              <div class="content">
                <img src="@/assets/fastsImages/about-2.png" alt="" />
              </div>
            </el-col>
            <el-col :span="6" class="col-pen">
              <div class="content">
                <img src="@/assets/fastsImages/about-3.png" alt="" />
              </div>
            </el-col>
            <el-col :span="6" class="col-pen">
              <div class="content">
                <img src="@/assets/fastsImages/about-4.png" alt="" />
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12" class="col-pen-i col-con">
          <div class="line"></div>
        </el-col>
        <el-col :span="12" class="col-pen-i col-con">
          <div class="line-i"></div>
        </el-col>
        <el-col :span="12" class="col-con">
          <el-row :gutter="12" style="text-align: right">
            <el-col :span="4" class="col-pen">
              <div class="content">
                <img src="@/assets/fastsImages/about-5.png" alt="" />
              </div>
            </el-col>
            <el-col :span="5" class="col-pen">
              <div class="content">
                <img src="@/assets/fastsImages/about-6.png" alt="" />
              </div>
            </el-col>
            <el-col :span="5" class="col-pen">
              <div class="content">
                <img src="@/assets/fastsImages/about-7.png" alt="" />
              </div>
            </el-col>
            <el-col :span="5" class="col-pen">
              <div class="content">
                <img src="@/assets/fastsImages/about-8.png" alt="" />
              </div>
            </el-col>
            <el-col :span="5" class="col-pen">
              <div class="content">
                <img src="@/assets/fastsImages/about-9.png" alt="" />
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="componey">
      <div class="title">{{ $t("aboutView.companyCulture") }}</div>
      <div class="content">
        <el-row :gutter="12">
          <el-col :span="8">
            <div class="current">
              <p>
                <img src="@/assets/fastsImages/about-10.png" alt="" />
              </p>
              <p>{{ $t("aboutView.customerFirst.title") }}</p>
              <p>{{ $t("aboutView.customerFirst.description") }}</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="current">
              <p>
                <img src="@/assets/fastsImages/about-11.png" alt="" />
              </p>
              <p>{{ $t("aboutView.innovationDriven.title") }}</p>
              <p>{{ $t("aboutView.innovationDriven.description") }}</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="current">
              <p>
                <img src="@/assets/fastsImages/about-12.png" alt="" />
              </p>
              <p>{{ $t("aboutView.teamwork.title") }}</p>
              <p>{{ $t("aboutView.teamwork.description") }}</p>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="12" class="row-i">
          <el-col :span="4"> </el-col>
          <el-col :span="8">
            <div class="current">
              <p>
                <img src="@/assets/fastsImages/about-13.png" alt="" />
              </p>
              <p>{{ $t("aboutView.socialResponsibility.title") }}</p>
              <p>{{ $t("aboutView.socialResponsibility.description") }}</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="current">
              <p>
                <img src="@/assets/fastsImages/about-14.png" alt="" />
              </p>
              <p>{{ $t("aboutView.excellence.title") }}</p>
              <p>{{ $t("aboutView.excellence.description") }}</p>
            </div>
          </el-col>
          <el-col :span="4"> </el-col>
        </el-row>
      </div>
    </div>

    <div class="dream">
      <div class="content">
        <span class="t_i"> {{ $t("aboutView.vision.title") }} </span>
        <span class="line"></span>
        <span class="tips"> {{ $t("aboutView.vision.description") }} </span>
      </div>
      <div class="content-i">
        <span class="t_i"> {{ $t("aboutView.mission.title") }} </span>
        <span class="line"></span>
        <span class="tips"> {{ $t("aboutView.mission.description") }} </span>
      </div>
    </div>
    <div class="my-server">
      <el-row :gutter="12" class="row-server">
        <el-col :span="['zh-US'].includes(commonStore.language) ? 5 : 7" class="col-1-m">
          <div class="title">{{ $t("aboutView.ourServices.title") }}</div>
        </el-col>
        <el-col :span="['zh-US'].includes(commonStore.language) ? 9 : 7" class="col-2-m">
          <div class="line"></div>
        </el-col>
        <el-col
          :span="['zh-US'].includes(commonStore.language) ? 10 : 10"
          class="col-3-m"
        >
          <div class="sub-title">{{ $t("aboutView.ourServices.subtitle") }}</div>
        </el-col>
      </el-row>
      <el-row :gutter="12" class="row-num">
        <el-col :span="8" class="col-num">
          <div class="content">
            <p>1500<span>+</span></p>
            <p>{{ $t("aboutView.satisfaction.title") }}</p>
            <p>{{ $t("aboutView.satisfaction.description") }}</p>
          </div>
        </el-col>
        <el-col :span="8" class="col-num">
          <div class="content">
            <p>7×24<span>h</span></p>
            <p>{{ $t("aboutView.support.title") }}</p>
            <p>{{ $t("aboutView.support.description") }}</p>
          </div>
        </el-col>
        <el-col :span="8" class="col-num">
          <div class="content">
            <p>2<span>min</span></p>
            <p>{{ $t("aboutView.response.title") }}</p>
            <p>{{ $t("aboutView.response.description") }}</p>
          </div>
        </el-col>
      </el-row>
      <div class="list-c-6">
        <div class="flex1 flex1-y">
          <div>
            <img src="@/assets/headset-fill.png" alt="" />
          </div>
          <div>
            <p>{{ $t("aboutView.channelSupport.title") }}</p>
            <p>{{ $t("aboutView.channelSupport.description") }}</p>
          </div>
        </div>
        <div class="flex1 flex1-g">
          <div>
            <img src="@/assets/fastsImages/b-9-2.png" alt="" />
          </div>
          <div>
            <p>{{ $t("aboutView.internalDevelopment.title") }}</p>
            <p>{{ $t("aboutView.internalDevelopment.description") }}</p>
          </div>
        </div>
      </div>

      <div class="banner-scroller">
        <p class="title">{{ $t("aboutView.news") }}</p>
        <el-carousel class="carousel-div" motion-blur indicator-position="none">
          <el-carousel-item v-for="item in 4" :key="item">
            <el-row :gutter="12">
              <el-col :span="12">
                <div class="content">
                  <p class="title-time">{{ $t("aboutView.newsDate") }}</p>
                  <el-row :gutter="12">
                    <el-col :span="12">
                      <img src="@/assets/fastsImages/b-2-4.png" alt="" />
                    </el-col>
                    <el-col :span="12">
                      <p class="title-f">{{ $t("aboutView.newsTitle") }}</p>
                      <p class="title-l">{{ $t("aboutView.newsContent") }}</p>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="content">
                  <p class="title-time">{{ $t("aboutView.newsDate") }}</p>
                  <el-row :gutter="12">
                    <el-col :span="12">
                      <img src="@/assets/fastsImages/b-2-4.png" alt="" />
                    </el-col>
                    <el-col :span="12">
                      <p class="title-f">{{ $t("aboutView.newsTitle") }}</p>
                      <p class="title-l">{{ $t("aboutView.newsContent") }}</p>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCommonStore } from "@/stores/modules/common";
const commonStore = useCommonStore();
</script>
<style scoped lang="less">
.about-view {
  p {
    margin: 0;
    padding: 0;
  }

  font-family: Source Han Sans SC, Source Han Sans SC;

  .my-server {
    width: 1280px;
    margin: auto;
    padding: 120px 0;

    .banner-scroller {
      width: 100%;
      text-align: center;
      .carousel-div {
        height: 240px;
        text-align: left;
        .content {
          font-family: Source Han Sans SC, Source Han Sans SC;
          .title-l {
            font-weight: 400;
            font-size: 16px;
            color: #666666;
            padding-top: 20px;
          }
          .title-f {
            font-weight: bold;
            font-size: 24px;
            color: #1a1a1a;
          }
          .title-time {
            padding: 20px 0;
            font-weight: 400;
            font-size: 14px;
            color: #1a1a1a;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .title {
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: bold;
        font-size: 52px;
        color: #1a1a1a;
        text-align: center;
        margin: 150px 0 50px 0;
      }
      .demonstration {
        color: var(--el-text-color-secondary);
      }
    }

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
        background: #F6F6F4;
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
            color: #6A8C69;

            > span {
              color: #1a1a1a;
            }
          }

          > p:nth-child(2) {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: bold;
            font-size: 24px;
            color: #1a1a1a;
            padding-top: 16px;
          }

          > p:last-child {
            font-family: Source Han Sans SC, Source Han Sans SC;
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

  .dream {
    background-color: #1a1a1a;
    padding: 150px 320px;

    .content-i {
      margin-left: 540px;
      margin-top: 70px;
    }

    .content,
    .content-i {
      height: 70px;
      position: relative;

      .tips {
        display: inline-block;
        // position: absolute;
        // left: 150px;
        // bottom: -5px;
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
      }

      .line {
        width: 1px;
        height: 50px;
        background-color: #ffffff;
        display: inline-block;
        margin-right: 10px;
        // position: absolute;
        // top: 20px;
        // left: 130px;
      }

      .t_i {
        // width: 120px;
        font-weight: bold;
        font-size: 52px;
        color: #ffffff;
        display: inline-block;
        margin-right: 10px;
      }
    }
  }

  .componey {
    width: 100%;
    background-color: #f6f6f4;
    padding-bottom: 120px;

    .title {
      font-weight: bold;
      font-size: 52px;
      color: #1a1a1a;
      width: 100%;
      padding-top: 123px;
      padding-bottom: 89px;
      text-align: center;
    }

    .content {
      width: 1280px;
      margin: auto;
      .el-col {
        display: flex;
        flex-direction: column;
      }
      .row-i {
        margin-top: 16px;
      }

      .current {
        background-color: #ffffff;
        padding: 37px 66px 32px 30px;
        height: 100%;
        > p:first-child {
          img {
            display: block;
          }
        }

        > p:nth-child(2) {
          margin-top: 72px;
          font-weight: bold;
          font-size: 24px;
          color: rgba(0, 0, 0, 0.9);
        }

        > p:last-child {
          margin-top: 19px;
          font-weight: 400;
          font-size: 16px;
          color: #666666;
        }
      }
    }
  }

  .pen {
    width: 1280px;
    margin: auto;
    margin-top: 150px;

    .row-pen {
      margin-top: 60px;
      margin-bottom: 60px;

      .col-con {
        margin-bottom: 60px;
      }

      .col-pen-i {
        position: relative;

        .line-i {
          width: 80%;
          margin: auto;
          height: 1px;
          background-color: #1a1a1a;
          position: absolute;
          left: 0;
          top: 50%;
        }

        .line {
          width: 80%;
          margin: auto;
          height: 1px;
          background-color: #1a1a1a;
          position: absolute;
          right: 0;
          top: 50%;
        }
      }

      .col-pen {
        width: 100%;

        .content {
          height: 124px;
          width: 100%;
          position: relative;

          img {
            position: absolute;
            display: block;
            // height: 100%;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }

    > p:first-child {
      font-weight: bold;
      font-size: 52px;
      color: #1a1a1a;
    }

    > p:last-child {
      font-weight: 400;
      font-size: 18px;
      color: #000000;
    }
  }

  .top {
    margin-top: 90px;
    height: 406px;
    width: 100%;
    padding: 120px 320px;
    background-image: url("@/assets/fastsImages/about-bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    > p:first-child {
      font-weight: bold;
      font-size: 52px;
      color: #ffffff;
    }

    > p:last-child {
      font-weight: 400;
      font-size: 18px;
      color: #ffffff;
    }
  }
}
</style>
