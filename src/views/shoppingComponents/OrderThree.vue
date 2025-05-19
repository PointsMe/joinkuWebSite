<template>
    <div class="order-one">
        <el-row :gutter="6" class="row-list">
            <el-col :span="16" class="left">
                <div class="content-list-left">
                    <div class="left-1">
                        <el-row class="row-1 row-b" v-for="(item,index) in response" :key="index">
                            <el-col :span="12">
                                <div class="con">
                                    <img :src="item.imageUrl" alt="">
                                    {{ item.name }}
                                </div>
                            </el-col>
                            <el-col :span="24">
                                <div class="con-r">
                                    <div class="con-l">
                                        <span v-if="item.unit">{{ item.unit }}/</span>
                                        <span>€{{ item.sellPrice }}</span>
                                    </div>

                                    <div class="pos-abs">
                                        <AddNum 
                                           :data="item"
                                           :parents="{
                                                minSelectCount: 0,
                                                maxSelectCount: 999
                                           }"
                                           @changeOrderList="changeOrderList"
                                        />
                                    </div>
                                </div>
                            </el-col>
                            <!-- <el-col :span="24" class="margin-5"></el-col> -->
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :span="8" class="right margin-5">
                <div class="content-list-right">
                    <div class="title">
                        <el-row :gutter="12">
                            <el-col :span="10" class="col-a">
                                <div class="line"></div>
                            </el-col>
                            <el-col :span="4" class="col-a">
                                {{ $t('orderThree.total') }}
                            </el-col>
                            <el-col :span="10" class="col-a">
                                <div class="line"></div>
                            </el-col>
                        </el-row>
                    </div>
                    <!-- <div class="all-order">
                        <div class="order-list">
                            <el-row>
                                <el-col :span="24" class="left">
                                    平板11寸HUAWEI SE*1
                                </el-col>
                                <el-col :span="24" class="left">
                                    热敏打印机*1
                                </el-col>
                                <el-col :span="24" class="left">
                                    平板收银防盗支架*1
                                </el-col>
                                <el-col :span="20" class="left">
                                    FASTSIMPLE软件授权费*1
                                </el-col>
                                <el-col :span="4" class="right">
                                    €800
                                </el-col>
                            </el-row>
                        </div>
                        <div class="order-i">
                            <el-row>
                                <el-col :span="24" class="left">
                                    FASTSIMPLE标配版年费
                                </el-col>
                                <el-col :span="20" class="left tips">
                                    1打印机+1平板
                                </el-col>
                                <el-col :span="4" class="right tips-1">
                                    €216
                                </el-col>
                            </el-row>
                        </div>
                        <div class="order-i">
                            <el-row>
                                <el-col :span="24" class="left">
                                    POS机（刷卡机）*1
                                </el-col>
                                <el-col :span="20" class="left tips">
                                    购买
                                </el-col>
                                <el-col :span="4" class="right tips-1">
                                    €220
                                </el-col>
                            </el-row>
                        </div>
                        <div class="order-i">
                            <el-row>
                                <el-col :span="20" class="left">
                                    热敏打印机*2
                                </el-col>
                                <el-col :span="4" class="right">
                                    €600
                                </el-col>
                            </el-row>
                        </div>
                    </div> -->
                    <div class="all-order">
                        <div class="order-list" v-if="orderList.items.find((iv: any)=> iv.type === 119)">
                            <el-row>
                                <el-col 
                                    v-for="(item,index) in orderList.items.find((iv: any)=> iv.type === 119)?.children"
                                    :span="orderList.items.find((iv: any)=> iv.type === 119)?.children?.length === index + 1 ? 20 : 24" class="left"  :key="index">
                                    {{ item.name }}
                                </el-col>
                                <el-col :span="4" class="right">
                                    €{{ orderList.items.find((iv: any)=> iv.type === 119)?.sellPrice }}
                                </el-col>
                            </el-row>
                        </div>
                        <div class="order-i" v-for="(item,index) in orderList.items.filter((iv: any)=> iv.type !== 119)" :key="index">
                            <el-row>
                                <el-col :span="24" class="left">
                                    {{ item.name }}
                                </el-col>
                                <el-col :span="20" class="left tips">
                                    <!-- 1打印机+1平板 -->
                                </el-col>
                                <el-col :span="4" class="right tips-1">
                                    €{{ item.sellPrice }}
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="order-btn">
                        <el-row class="order-btn-row">
                            <el-col :span="12" class="left-i-sub">{{ $t('orderThree.totalAmount') }}</el-col>
                            <el-col :span="12" class="right-i-sub">
                                €{{ orderList?.totalAmount || 0 }}
                            </el-col>
                            <el-col :span="12" class="left-i-sub">{{ $t('orderThree.taxAmount') }}</el-col>
                            <el-col :span="12" class="right-i-sub">
                                €{{ orderList?.taxAmount || 0 }}
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4" class="left-i">
                                <span class="word">{{ $t('orderThree.finalAmount') }}：</span>
                            </el-col>
                            <el-col :span="20" class="right-i">
                                <span>
                                    €{{ orderList?.finalAmount || 0 }}<label class="word-1">+ IVA</label>
                                </span>
                            </el-col>
                            <el-col :span="24">
                                <el-button class="button-h" @click="toPay">{{ $t('orderThree.buyNow') }}</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import AddNum from "./AddNum.vue"
import { QuestionFilled } from '@element-plus/icons-vue'
import {getHardwareListApi,precreateApi} from "@/apis/goods"
import { ElMessage } from "element-plus"
import { useUserStore } from "@/stores/modules/user"
import { useShoppingCartStore } from "@/stores/modules/shoppingCart"
import { i18n } from '@/lang/index'
defineOptions({
    name: 'orderTwo'
})
const emits = defineEmits(['toPay'])
const response = ref()
const userStore = useUserStore()
const shoppingCartStore = useShoppingCartStore()
const inviteCode = ref("")
const getData = async()=>{
    const {data} = await getHardwareListApi()
    response.value = data
}

const orderList = ref<any>({
    netAmount: 0,
    taxAmount: 0,
    totalAmount: 0,
    discountAmount: 0,
    finalAmount: 0,
    items:[]
})

const changeOrderList = (data:any)=>{
    console.log("changeOrderList==>",data)
    orderList.value = data
}

const toPay = async () => {
  console.log("aaaaa");
  if(orderList.value.items.length > 0){
    emits('toPay',JSON.parse(JSON.stringify(orderList.value)))
}
};
onMounted(()=>{
    getData()
})
defineExpose({
    changeOrderList
})
</script>
<style scoped lang="less">
.order-one {
    .pos-abs {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .row-list {
        .el-col {
            display: flex;
            flex-direction: column;
        }
        .margin-5{
            margin-bottom: 5px;
        }
        .content-list,
        .content-list-right {
            height: 100%; // 确保内容容器占满高度
        }

        .content-list,
        .content-list-left {
            height: 100%; // 确保内容容器占满高度
        }

        .content-list-right {
            padding: 30px;
            background-color: #FFFFFF;
            border-radius: 6px;
            position: relative;

            .order-btn {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        padding: 0px 30px 30px 30px;
        .order-btn-row {
          font-size: 16px;
          .left-i-sub {
            text-align: left;
          }
          .right-i-sub {
            text-align: right;
          }
        }

        .input-h {
          text-align: center;
          height: 60px;
          margin-top: 16px;
        }

        .button-h {
          text-align: center;
          height: 60px;
          background: #1b1b1b;
          margin-top: 10px;
          font-family: Inter, Inter;
          font-weight: 500;
          font-size: 16px;
          color: #ffffff;
        }

        .left-i {
          text-align: left;
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 16px;
          color: #1b1b1b;
          position: relative;

          .word {
            position: absolute;
            bottom: 10px;
            left: 0;
          }
        }

        .right-i {
          text-align: right;
          font-family: Inter, Inter;
          font-weight: bold;
          font-size: 48px;
          color: #1a1a1a;
          .word-1 {
            font-size: 24px;
            color: #999999;
          }
        }
      }

            .all-order {
                height: 77%;
                overflow-y: scroll;
                .left {
                    text-align: left;
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 400;
                    font-size: 16px;
                    padding-top: 30px;
                }

                .right {
                    padding-top: 30px;
                    font-family: DIN, DIN;
                    font-weight: 500;
                    font-size: 18px;
                    color: #1A1A1A;
                    // margin-bottom: 5px;
                }

                .order-i {
                    border-bottom: 1px solid #EDEDED;
                    padding-bottom: 24px;

                    .tips-1 {
                        padding-top: 0;
                    }

                    .tips {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 400;
                        font-size: 14px;
                        color: #999999;
                        padding-top: 0;
                    }
                }

                .order-list {
                    border-bottom: 1px solid #EDEDED;
                    padding-bottom: 24px;


                }
            }

            .title {
                text-align: center;

                .col-a {
                    position: relative;

                    .line {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 50%;
                        height: 1px;
                        /* 初始高度1px */
                        background: #BDBDBD;
                        transform: scaleY(0.5);
                        /* 垂直缩放至0.5倍 */
                        transform-origin: 0 0;
                        /* 确保缩放基点正确 */
                    }
                }
            }
        }

        .content-list-left {
            // padding: 30px;
            // background-color: #FFFFFF;
            position: relative;

            .left-1 {
                .row-b{
                    margin-bottom: 5px;
                    // .margin-5{
                    //     height: 5px;
                    //     background-color: #F6F6F4;
                    // }
                }
                .row-1 {
                    padding: 12px;
                    background-color: #ffffff;
                    border-radius: 6px;
                    .con-l {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 500;
                        font-size: 14px;
                        color: #646464;
                        height: 60px;
                        line-height: 60px;

                        >span:last-child {
                            font-family: DIN, DIN;
                            font-weight: 500;
                            font-size: 18px;
                            color: #999999;
                        }
                    }

                    .con-r {
                        padding-right: 102px;
                        position: relative;
                        width: 100%;
                        // height: 60px;
                        // height: 100%;
                        position: relative;
                        // line-height: 60px;
                        text-align: right;
                    }

                    .con {
                        height: 60px;
                        position: relative;
                        line-height: 60px;
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 500;
                        font-size: 16px;
                        color: #1B1B1B;
                        text-indent: 65px;

                        >img {
                            height: 60px;
                            display: block;
                            position: absolute;
                            left: 0;
                        }
                    }
                }
            }
        }

        .left {
            text-align: left;

            .title {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 16px;
                color: #1B1B1B;
            }

            .sub-title {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 12px;
                color: #646464;

                .pos-right {
                    position: absolute;
                    right: 0;
                    bottom: 0;

                    .el-icon {
                        color: #2865FF;
                        font-size: 13px;
                    }

                    // font-size: 13px;
                }
            }
        }

        .right {
            text-align: right;
        }
    }

}
</style>