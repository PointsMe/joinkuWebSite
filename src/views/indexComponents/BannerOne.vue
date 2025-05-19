<template>
  <div class="banner-one">
    <div class="title">
      <span>{{ $t("bannerOne.featuredPackages") }}</span>
      <div class="more" @click="toShopping('')">
        <span>{{ $t("bannerOne.more") }}</span>
        <el-icon><DArrowRight /></el-icon>
      </div>
    </div>
    <div>
      <el-row :gutter="12">
        <el-col :span="8" v-for="(item,index) in listData" :key="index">
          <div class="img-col">
            <p class="t_i">{{ item.name }}</p>
            <p class="s_i">€{{ Number(item.sellPrice) - Number(userStore.discountedPrice) }}
              <span>€{{ Number(item.sellPrice) }}
            </span></p>
            <p class="b_i"  v-if="!userStore.token">{{ $t('bannerOne.registerNowDesc') }},<span  @click="toRegister">{{ $t('bannerOne.registerNow') }} >></span></p>
            <div class="content-list">
              <el-row v-for="(itemChild,indexChild) in item.items" :key="indexChild">
                <el-col :span="16">
                  <div class="content-list-left">
                    <img src="@/assets/r-1-1.png" alt="" />
                    <span style="margin-left: 10px;"> {{ itemChild.name }} </span>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="content-list-right">€{{ itemChild.price }}</div>
                </el-col>
              </el-row>
              <div class="content-list-bottom" @click="toShopping(item.id)">{{ $t('bannerOne.nowBuy') }}</div>
            </div>
            <!-- <img src="@/assets/fastsImages/b-1-1.png" alt="" /> -->
          </div>
        </el-col>
        <el-col :span="8">
          <div class="img-col">
            <p class="t_i">CUSTOM</p>
            <p class="s_i">€***</p>
            <p class="b_i"  v-if="!userStore.token">{{ $t('bannerOne.registerNowDesc') }}，<span @click="toRegister">{{ $t('bannerOne.registerNow') }} >></span></p>
            <div class="content-list">
              <el-row v-for="(itemChild,indexChild) in goodsList" :key="indexChild">
                <el-col :span="12" v-if="indexChild < 4">
                  <div class="content-list-left">
                    <!-- <img src="@/assets/r-1-1.png" alt="" /> -->
                    <span>{{ itemChild.name }} </span>
                  </div>
                </el-col>
                <el-col :span="12" v-if="indexChild < 4">
                  <div class="content-list-right">€{{ itemChild.sellPrice }}</div>
                </el-col>
              </el-row>
              <div class="content-list-bottom" @click="toShopping('1003')">{{ $t('bannerOne.nowBuy') }}</div>
            </div>
            <!-- <img src="@/assets/fastsImages/b-1-1.png" alt="" /> -->
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DArrowRight } from "@element-plus/icons-vue";
import { useUserStore } from "@/stores/modules/user";
import { getGoodsListApi,getHardwareListApi } from "@/apis/goods";
const userStore = useUserStore();
defineOptions({
  name: "bannerOne",
});
const listData = ref<any[]>([]);
const goodsList = ref<any[]>([]);
const router = useRouter();
const toShopping = (index:any) => {
  index && window.localStorage.setItem("shoppingTab",index);
  router.push("/shopping");
};
const toRegister = () => {
  router.push("/module/register");
};
const getListData = async () => {
  const { data } = await getGoodsListApi();
  listData.value = data;
  return data;
};
const getData = async()=>{
    const {data} = await getHardwareListApi()
    goodsList.value = data
    return data;
}
onMounted(() => {
  Promise.all([getListData(),getData()]).then(res=>{
    console.log("onMounted==>",res);
    listData.value = res[0];
    goodsList.value = res[1];
  });
});
</script>
<style scoped lang="less">
.banner-one {
  width: 100%;
  height: 986px;
  background: #f6f6f4;
  padding: 240px 320px 40px 320px;
  p {
    margin: 0;
    padding: 0;
  }
  .img-col {
    padding: 0 36px 50px 36px;
    text-align: left;
    background-color: #fff;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .content-list {
      .content-list-bottom {
        cursor: pointer;
        font-family: Source Han Sans SC, Source Han Sans SC;
        margin-top: 80px;
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        line-height: 16px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: #1a1a1a;
        border-radius: 85px 85px 85px 85px;
        text-align: center;
        color: #fff;
      }
      .content-list-left {
        height: 30px;
        text-align: left;
        display: flex;
        align-items: center;
        padding-top: 20px;
        font-family: Inter, Inter;
        font-weight: 400;
        font-size: 14px;
        color: #1a1a1a;
        line-height: 14px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .content-list-right {
        text-align: right;
        padding-top: 20px;
        font-family: Inter, Inter;
        font-weight: 500;
        font-size: 14px;
        color: #fed15f;
        line-height: 14px;
        text-align: right;
        font-style: normal;
        text-transform: none;
      }
    }
    .t_i {
      padding-top: 40px;
      font-family: Inter, Inter;
      font-weight: bold;
      font-size: 30px;
      color: #fed15f;
      line-height: 32px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .s_i {
      padding-top: 20px;
      font-family: Inter, Inter;
      font-weight: bold;
      font-size: 52px;
      color: #3e1c00;
      line-height: 48px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      > span {
        display: inline-block;
        margin-left: 10px;
        font-family: Inter, Inter;
        font-weight: 400;
        font-size: 18px;
        color: #bdbdbd;
        line-height: 14px;
        text-align: left;
        font-style: normal;
        text-decoration-line: line-through;
        text-transform: none;
      }
    }
    .b_i {
      padding-top: 10px !important;
      font-family: Inter, Inter;
      font-weight: 500;
      font-size: 14px;
      color: #666666;
      line-height: 14px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      padding-bottom: 20px;
      border-bottom: 1px solid #e6e6e6;
      > span {
        cursor: pointer;
        color: #fed15f;
      }
    }
    // margin-top: 20px;
    // img {
    //   width: 100%;
    // }
  }
  .title {
   
    position: relative;
    margin-bottom: 20px;
    > span:first-child {
      font-weight: bold;
      font-size: 52px;
      color: #1b1b1b;
    }
    .more{
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: right;
    }
  }
}
</style>
