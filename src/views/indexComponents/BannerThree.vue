<template>
  <div class="b-3-div">
    <div class="title">{{ $t('bannerThree.title') }}</div>
    <div class="sub-title">{{ $t('bannerThree.subTitle') }}</div>
    <div class="con-lan">
      <el-row>
        <el-col :span="8">
          <div class="col-lang">
            <img src="@/assets/fastsImages/b-3-2.png" alt="" />
            <span>{{ $t('bannerThree.greetings.english') }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="col-lang">
            <img src="@/assets/fastsImages/b-3-3.png" alt="" />
            <span>{{ $t('bannerThree.greetings.french') }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="col-lang">
            <img src="@/assets/fastsImages/b-3-4.png" alt="" />
            <span>{{ $t('bannerThree.greetings.german') }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="col-lang1">
            <img src="@/assets/fastsImages/b-3-5.png" alt="" />
            <span>{{ $t('bannerThree.greetings.chinese') }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="col-lang1">
            <img src="@/assets/fastsImages/b-3-6.png" alt="" />
            <span>{{ $t('bannerThree.greetings.italian') }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="col-lang1">
            <img src="@/assets/fastsImages/b-3-7.png" alt="" />
            <span>{{ $t('bannerThree.greetings.spanish') }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'bannerThree'
})
</script>

<style scoped lang="less">
.b-3-div {
  height: 618px;
  width: 100%;
  background-image: url('@/assets/fastsImages/b-3-1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  margin-top: 200px;
  .con-lan {
    width: 1280px;
    margin: auto;

    .col-lang {
      margin: auto;
      margin-top: 40px;
    }

    .col-lang1 {
      margin-top: 40px;
    }

    .col-lang,
    .col-lang1 {
      position: relative;
      width: 250px;
      text-align: left;

      > img {
        width: 48px;
        height: 48px;
        display: block;
        position: absolute;
        left: 0;
        top: 13px;
      }

      > span {
        font-weight: 500;
        font-size: 46px;
        color: #fed15f;
        display: block;
        margin-left: 55px;
      }
    }
  }

  .title {
    font-weight: bold;
    font-size: 52px;
    color: #ffffff;
    padding-top: 120px;
  }

  .sub-title {
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    margin-top: 10px;
  }
}
</style>
