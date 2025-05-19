<template>
  <div class="banner-6-div">
    <div class="con-job">
      <div class="title-content">
        <div class="title">
          <span class="con">{{ $t('bannerSix.digitalTaxCompliance') }}</span>
          <span class="line"></span>
          {{ $t('bannerSix.digitalTaxCompliance') }}
        </div>
      </div>
      <div class="sub-title">{{ $t('bannerSix.tailoredSolution') }}</div>
    </div>
    <div class="list-number">
      <el-row>
        <el-col :span="8">
          <div class="con-con">
            <div class="bg-num bg-num1"></div>
            <div class="con-con-b">
              <p>{{ $t('bannerSix.autoDataSubmission') }}</p>
              <p>{{ $t('bannerSix.instantDataTransmission') }}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="con-con">
            <div class="bg-num bg-num2"></div>
            <div class="con-con-b">
              <p>{{ $t('bannerSix.autoDataSubmission') }}</p>
              <p>{{ $t('bannerSix.instantDataTransmission') }}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="con-con">
            <div class="bg-num bg-num3"></div>
            <div class="con-con-b">
              <p>{{ $t('bannerSix.autoDataSubmission') }}</p>
              <p>{{ $t('bannerSix.instantDataTransmission') }}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="con-job">
      <div class="title-content">
        <div class="title">
          <span class="con">{{ $t('bannerSix.regulations') }}</span>
          <span class="line"></span>
          {{ $t('bannerSix.regulations') }}
        </div>
      </div>
      <div class="sub-title">
        {{ $t('bannerSix.regulationDetails') }}
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-6-div {
  width: 100%;
  .list-number {
    width: 1280px;
    margin: auto;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 150px;
    .con-con {
      width: 100%;
      position: relative;
      .bg-num1 {
        background-image: url('@/assets/fastsImages/b-6-1.png');
      }
      .bg-num2 {
        background-image: url('@/assets/fastsImages/b-6-2.png');
      }
      .bg-num3 {
        background-image: url('@/assets/fastsImages/b-6-3.png');
      }
      .bg-num {
        width: 200px;
        height: 118px;
        margin: auto;

        background-size: 60%; /* 确保图片覆盖整个元素 */
        background-position: center; /* 将图片居中显示 */
        background-repeat: no-repeat;
      }
      .con-con-b {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 120%;
        p {
          margin: 0;
          padding: 0;
        }
        > p:first-child {
          font-weight: bold;
          font-size: 24px;
          color: #1a1a1a;
        }
        > p:last-child {
          font-weight: 400;
          font-size: 16px;
          color: #666666;
        }
      }
    }
  }
  .con-job {
    width: 1280px;
    margin: auto;
    // text-align: center;
    .sub-title {
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      color: #1b1b1b;
    }
    .title-content {
      position: relative;
      height: 80px;
      // width: 100%;
      margin: auto;
      margin-top: 150px;
      display: block;
      text-align: center;
      display: flex;
      justify-content: center;
      .title {
        font-weight: bold;
        font-size: 52px;
        color: #1a1a1a;
        width: auto;
        height: 100%;
        position: relative;
        color: #ffffff;
        .con{
          position: absolute;
          z-index: 2;
          bottom: 0;
          font-weight: bold;
          font-size: 52px;
          color: #1a1a1a;
        }
        .line {
          display: block;
          width: 204px;
          height: 16px;
          background: #fed15f;
          position: absolute;
          bottom: 10px;
          // left: 0px;
          z-index: 1;
      }
      }

      
    }
  }
}
</style>
