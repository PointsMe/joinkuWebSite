<template>
  <div class="banner-7-div">
    <div class="content">
      <div class="title">{{ $t('bannerSeven.perfectSolution') }}</div>
      <div class="sub-title">{{ $t('bannerSeven.helpBusinesses') }}</div>
      <div class="list">
        <el-row>
          <el-col :span="8">
            <div class="list-con">
              <img src="@/assets/fastsImages/b-7-1.png" alt="" />
              <span>{{ $t('bannerSeven.invoiceTitle.first') }}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="list-con">
              <img src="@/assets/fastsImages/b-7-2.png" alt="" />
              <span>{{ $t('bannerSeven.invoiceTitle.second') }}</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="list-con">
              <img src="@/assets/fastsImages/b-7-3.png" alt="" />
              <span>{{ $t('bannerSeven.invoiceTitle.third') }}</span>
            </div>
          </el-col>
        </el-row>
        <div class="con-con">
          {{ $t('bannerSeven.description') }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-7-div {
  margin-top: 150px;
  width: 100%;
  background-color: #f6f6f4;

  .content {
    width: 1280px;
    margin: auto;
    .list {
      margin-top: 60px;
      .con-con {
        font-weight: 400;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.9);
        margin-top: 40px;
        padding-bottom: 120px;
      }
      .list-con {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        img {
          display: inline-block;
          height: 64px;
          // width: 248px;
        }
        span {
          font-weight: 400;
          font-size: 18px;
          color: #1a1a1a;
          display: inline-block;
          margin-left: 20px;
        }
      }
    }
    .sub-title {
      font-weight: 400;
      font-size: 18px;
      color: #1a1a1a;
    }

    .title {
      padding-top: 120px;
      font-weight: bold;
      font-size: 52px;
      color: #1a1a1a;
    }
  }
}
</style>
