<template>
  <div class="banner-11-div">
    <div class="top">
      <el-row :gutter="12">
        <el-col :span="12">
          <div class="nav-menu">
            <el-menu mode="horizontal" :ellipsis="false" class="menu">
              <el-menu-item index="1" @click="goToPage('index')">{{$t('navigation.home')}}</el-menu-item>
              <el-menu-item index="2" @click="goToPage('shopping')">{{$t('navigation.shop')}}</el-menu-item>
              <!-- <el-menu-item index="3" @click="goToPage('news')">{{$t('navigation.news')}}</el-menu-item> -->
              <el-menu-item index="4" @click="goToPage('server')">{{$t('navigation.support')}}</el-menu-item>
              <el-menu-item index="5" @click="goToPage('about')">{{$t('navigation.about')}}</el-menu-item>
              <el-menu-item index="6" @click="goToPage('contact')">{{$t('navigation.contact')}}</el-menu-item>
              <el-menu-item index="7">
                <el-dropdown @command="handleCommand" trigger="click">
                  <span class="language-selector">
                    {{ languageList.find(iv=>iv.code === commonStore.language)?.label }}
                     <el-icon>
                      <ArrowDown />
                    </el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item v-for="(item, index) in languageList" :command="item.code" :key="index">{{
                        item.label }}</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="qr-code">
            <el-row :gutter="12">
              <el-col :span="12">
                <div class="code-div">
                  <div class="code-top">
                    {{ $t('bannerEleven.technicalAdvisor') }}
                    <!-- <span class="line"></span> -->
                  </div>
                  <div class="wx-img">
                    <p>
                      <img src="@/assets/fastsImages/b-11-1.png" alt="" />
                    </p>
                  </div>
                </div>
                <div class="wx-div">{{ $t('bannerEleven.wechat') }}:wxid_g1oajzv7yyu922</div>
              </el-col>
              <el-col :span="12">
                <div class="code-div">
                  <div class="code-top">
                    {{ $t('bannerEleven.technicalAdvisor') }}
                    <!-- <span class="line"></span> -->
                  </div>
                  <div class="wx-img">
                    <p>
                      <img src="@/assets/fastsImages/b-11-2.png" alt="" />
                    </p>
                  </div>
                </div>
                <div class="wx-div" style="text-indent: 0">{{ $t('bannerEleven.wechat') }}:PM3242850588</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="des">
      {{ $t('bannerEleven.copyright') }} - P.iva: 08435150969 -<span class="line-th">{{ $t('bannerEleven.terms') }}</span>
    </div>
    <div class="des-img">
      <img src="@/assets/fastsImages/b-11-3.png" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { languageList } from "@/http/config"
import { useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'
import { useCommonStore } from "@/stores/modules/common"
const current = getCurrentInstance()?.appContext.config.globalProperties as any;
const commonStore = useCommonStore()
const router = useRouter()
const handleCommand = (command: string) => {
  current.$i18n.locale = command
  commonStore.setLanguageFn(command)
}
// 跳转到首页的方法
const goToPage = (value: any) => {
    router.push(`/${value}`)
}
</script>
<style scoped lang="less">
.banner-11-div {
  width: 100%;
  // height: 585px;
  background: #151515;

  .des-img {
    width: 1280px;
    margin: auto;

    img {
      display: block;
      width: 1182px;
      height: 136px;
      margin: auto;
    }
  }

  .des {
    width: 1280px;
    margin: auto;
    text-align: center;
    font-family: Inter, Inter;
    font-weight: 500;
    font-size: 14px;
    color: #bdbdbd;
    margin-top: 30px;
    margin-bottom: 39px;

    .line-th {
      display: inline-block;
      text-decoration: underline;
    }
  }

  .top {
    width: 1280px;
    margin: auto;
    border-bottom: 1px solid #ffffff;

    .qr-code {
      font-family:
        Source Han Sans SC,
        Source Han Sans SC;
      font-weight: 400;
      font-size: 14px;
      color: #ffffff;
      margin-top: 130px;
      text-align: center;

      .wx-div {
        text-indent: 30px;
        margin-top: 16px;
      }

      .code-div {
        width: 140px;
        margin: auto;

        .wx-img {
          width: 100%;
          margin-top: 14px;

          img {
            width: 100%;
          }
        }

        .code-top {
          position: relative;
          text-align: left;

          .line {
            display: block;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            width: 78px;
            height: 1px;
            background-color: #ffffff;
          }
        }
      }
    }

    .nav-menu {
      flex: 1;
      display: flex;
      justify-content: center;
      margin-top: 210px;
      padding-bottom: 124px;

      .language-selector {
        color: #ffffff;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;
      }

      :deep(.menu) {
        background-color: transparent;
        border: none;

        .el-menu-item {
          color: #ffffff;
          font-size: 16px;
          padding: 0 30px;

          &:hover,
          &.is-active {
            color: #409eff;
            background-color: transparent;
          }
        }
      }
    }
  }
}
</style>
