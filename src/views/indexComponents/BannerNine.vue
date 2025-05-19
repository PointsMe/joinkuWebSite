<template>
  <div class="banner-9-div">
    <div class="top">
      <p>{{ $t('bannerNine.title') }}</p>
      <p>{{ $t('bannerNine.subtitle') }}</p>
    </div>
    <div class="top-t">
      <p>{{ $t('bannerNine.supportTitle') }}</p>
      <p>{{ $t('bannerNine.supportSubtitle') }}</p>
    </div>
    <div class="top-f">
      <el-row :gutter="12" class="line-height-row">
        <el-col :span="8">
          <div class="current-f">
            <p>{{ $t('bannerNine.services.selfService.title') }}</p>
            <p>
              {{ $t('bannerNine.services.selfService.description') }}
            </p>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="current-f">
            <p>{{ $t('bannerNine.services.onSiteSupport.title') }}</p>
            <p>{{ $t('bannerNine.services.onSiteSupport.description') }}</p>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="current-f">
            <p>{{ $t('bannerNine.services.remoteSupport.title') }}</p>
            <p>{{ $t('bannerNine.services.remoteSupport.description') }}</p>
          </div>
        </el-col>

      </el-row>
    </div>

    <div class="list-c-6">
      <div class="flex1 flex1-y">
        <div>
          <img src="@/assets/fastsImages/b-9-1.png" alt="" />
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
</template>
<style scoped lang="less">
.banner-9-div {
  width: 100%;
  padding-bottom: 138px;
  p {
    padding: 0;
    margin: 0;
  }

  .list-c-6 {
    display: flex;
    text-align: left;
    width: 1280px;
    margin: auto;
    margin-top: 140px;

    .flex1-y {
      background-color: #fed15f;
      color: #181818;
      margin-right: 10px;
    }

    .flex1-g {
      background: #181818;
      color: #fed15f;
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

  .top-f {
    width: 1280px;
    margin: auto;
    margin-top: 60px;
    .line-height-row{
      .el-col {
          display: flex;
          flex-direction: column;
        }
    }
    .current-f {
      text-align: center;
      padding: 16px 26px;
      border-left: 1px solid #1b1b1b;
      height: 100%;
      > p:first-child {
        font-weight: bold;
        font-size: 24px;
        color: #000000;
      }

      > p:last-child {
        font-family:
          Source Han Sans SC,
          Source Han Sans SC;
        font-weight: 400;
        font-size: 14px;
        color: #1a1a1a;
        padding-top: 5px;
      }
    }
  }

  .top-t {
    margin: auto;
    margin-top: 150px;
    width: 1280px;

    > p:first-child {
      font-weight: bold;
      font-size: 52px;
      color: #1a1a1a;
    }

    > p:last-child {
      font-family:
        Source Han Sans SC,
        Source Han Sans SC;
      font-weight: 400;
      font-size: 18px;
      color: #1a1a1a;
    }
  }

  .top {
    width: 100%;
    background: linear-gradient(#1e1e1e 0%, #111111 100%);
    border-radius: 0px 0px 0px 0px;
    padding: 120px 0;
    text-align: center;

    > p:first-child {
      font-weight: bold;
      font-size: 52px;
      color: #ffffff;
    }

    > p:last-child {
      font-family:
        Source Han Sans SC,
        Source Han Sans SC;
      font-weight: 400;
      font-size: 18px;
      color: #ffffff;
    }
  }
}
</style>
