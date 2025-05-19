<template>
  <div class="banner-8-div">
    <div class="current-target">
      <div class="current-one">
        <div class="border-a"></div>
        <div class="content">
          <p>{{ $t('bannerEight.invoiceTitle.first') }}</p>
          <p>{{ $t('bannerEight.invoiceTitle.second') }}</p>
        </div>
        <div class="num">01</div>
      </div>
      <div class="current-two">
        <div class="border-a"></div>
        <div class="content">
          {{ $t('bannerEight.invoiceDescription') }}
        </div>
      </div>
    </div>

    <div class="current-target padding-top">
      <div class="current-one">
        <div class="border-a"></div>
        <div class="content">
          <p>{{ $t('bannerEight.taxSystemTitle.first') }}</p>
          <p>{{ $t('bannerEight.taxSystemTitle.second') }}</p>
        </div>
        <div class="num">02</div>
      </div>
      <div class="current-two">
        <div class="border-a"></div>
        <div class="content">
          {{ $t('bannerEight.taxSystemDescription') }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-8-div {
  width: 1280px;
  margin: 150px auto;
  .padding-top {
    margin-top: 120px;
  }
  .current-target {
    .current-two {
      position: relative;
      // height: 129px;
      width: 100%;
      text-align: left;
      padding-bottom: 15px;
      .content {
        // padding: 24px;
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        padding-left: 456px;
        padding-top: 45px;
        padding-right: 24px;
      }

      .border-a {
        width: 836px;
        height: 129px;
        border-right: 1px solid #1b1b1b;
        border-bottom: 1px solid #1b1b1b;
        border-radius: 5px 0 5px 5px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }

    .current-one {
      position: relative;
      // height: 129px;
      width: 100%;

      .num {
        font-weight: bold;
        font-size: 52px;
        color: #999999;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      .content {
        padding: 24px 45px 24px 24px;

        p {
          margin: 0;
          padding: 0;
        }

        > p:first-child {
          font-weight: bold;
          font-size: 52px;
          color: #1a1a1a;
        }

        > p:last-child {
          font-weight: 400;
          font-size: 18px;
          color: #1a1a1a;
        }
      }

      .border-a {
        width: 405px;
        height: 129px;
        border-left: 1px solid #1b1b1b;
        border-top: 1px solid #1b1b1b;
        border-radius: 5px 0 0 5px;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
