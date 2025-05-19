<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="order-one">
    <el-row :gutter="6" class="row-list">
      <el-col :span="16" class="left">
        <div class="content-list">
          <div class="list-one">
            <el-row>
              <el-col :span="12" class="left title">
                {{ response.subtitle }}
              </el-col>
              <el-col :span="12" class="right sub-title">
                <div class="pos-right" @click="joinUsFn" v-if="!userStore.token">
                  <el-icon>
                    <QuestionFilled />
                  </el-icon>
                  {{
                    $t("orderOne.registerMember", { price: userStore.discountedPrice })
                  }}
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="list-one-i">
            <el-row>
              <el-row
                style="width: 100%"
                v-for="(item, index) in response.items"
                :key="index"
              >
                <el-col :span="12" class="left">{{ item.name }}</el-col>
                <el-col :span="12" class="right">€{{ item.price }}</el-col>
              </el-row>
            </el-row>
          </div>
          <div class="list-one-j">
            <div>
              <span>{{ $t("orderOne.normalPrice") }}</span>
              <span class="normal"> €{{ response.sellPrice }} </span>
              <span class="m-f-20">{{ $t("orderOne.invitePrice") }}</span>
              <span class="origin">
                €{{ Number(response.sellPrice) - Number(userStore.discountedPrice) }}
              </span>
              <div class="pos-abs">
                <AddNum
                  :parents="{
                    minSelectCount: 1,
                    maxSelectCount: 1,
                  }"
                  :data="{
                    id: response.id,
                    name: response.name,
                    type: 119,
                  }"
                  :inviteCode="inviteCode"
                  @changeOrderList="changeOrderList"
                />
              </div>
            </div>
            <!-- <div>
                            <span style="color: #FF0000;">*</span>
                            固定套餐数量每增加一套，FASTSIMPLE标配版年费增加€10/年
                        </div> -->
          </div>
        </div>
        <div
          class="content-list-a"
          v-for="(item, index) in response.assorts"
          :key="index"
        >
          <el-row v-if="item.items.length < 3">
            <el-col :span="12" class="left">
              <div class="left-i-a">
                {{ item.name }}
                <label
                  class="sub-left-i-a"
                  v-if="item.items.length === 1 && item.items[0].spec"
                  >({{ item.items[0].spec }})</label
                >
              </div>
            </el-col>
            <el-col :span="12" class="right">
              <el-row>
                <el-col
                  :span="24"
                  v-for="(itemChil, chilIndex) in item.items"
                  :key="chilIndex"
                >
                  <div class="num-div" v-if="item.maxSelectCount > 2">
                    <span v-if="itemChil.spec" style="color: #fdb522"
                      >({{ itemChil.spec }})</span
                    >
                    <span v-if="itemChil.value">{{ itemChil.value }}</span>
                    <span v-if="itemChil.unit">{{ itemChil.unit }}/</span>
                    <span>€{{ itemChil.sellPrice }}</span>
                    <div class="pos-abs">
                      <AddNum
                        :parents="item"
                        :data="itemChil"
                        :inviteCode="inviteCode"
                        @changeOrderList="changeOrderList"
                      />
                    </div>
                  </div>
                  <div class="radio-common" v-if="item.maxSelectCount < 3">
                    <span v-if="itemChil.spec && item.items.length > 1"
                      >({{ itemChil.spec }})</span
                    >
                    <RadioView
                      :parents="item"
                      :data="itemChil"
                      :inviteCode="inviteCode"
                      @changeOrderList="changeOrderList"
                    />
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <!-- <el-col :span="24" class="right tips" v-if="item.tips">
                            <span><label style="color: #FF0000;">*</label>{{ item.tips }}</span>
                        </el-col> -->
          </el-row>
          <el-row v-if="item.items.length > 2">
            <el-col :span="24" class="title-b">{{ item.name }}</el-col>
            <el-col :span="24">
              <InvoiceCheckbox
                @changeOrderList="changeOrderList"
                :parents="item"
                :inviteCode="inviteCode"
              />
            </el-col>
          </el-row>
        </div>
        <!-- <div class="content-list content-list-top">
                    <div class="list-one">
                        <el-row>
                            <el-col :span="12" class="left title">
                                {{ serverBuyer.subtitle }}
                            </el-col>
                        </el-row>

                    </div>
                    <div class="list-one-i none-m-b">
                        <el-row>
                            <el-row style="width: 100%;" v-for="(item, index) in serverBuyer.assorts" :key="index">
                                <el-col :span="12" class="left">{{ item.name }}</el-col>
                                <el-col :span="12" class="right">
                                    <div class="all-i" v-if="item.type === 'input'">
                                        <span class="i-1"> {{ item.items[0].unit }}/</span><span class="i-2">€ {{
                                            item.items[0].sellPrice }}</span>
                                        <div class="pos-abs">
                                            <AddNum :require-choosed="false" :id="item.id" :mixNum="item.mixNum"
                                                :maxNum="item.maxNum" />
                                        </div>
                                    </div>
                                    <CheckboxView v-if="item.type === 'checkbox'" :id="item.id"
                                        :checkbox-list="item.items">
                                    </CheckboxView>
                                </el-col>
                            </el-row>
                        </el-row>
                    </div>
                </div> -->
      </el-col>
      <el-col :span="8" class="right">
        <div class="content-list-right">
          <div class="title">
            <el-row :gutter="12">
              <el-col :span="10" class="col-a">
                <div class="line"></div>
              </el-col>
              <el-col :span="4" class="col-a"> {{ $t("orderOne.total") }} </el-col>
              <el-col :span="10" class="col-a">
                <div class="line"></div>
              </el-col>
            </el-row>
          </div>
          <div class="all-order">
            <div
              class="order-list"
              v-if="orderList.items.find((iv: any)=> iv.type === 119)"
            >
              <el-row>
                <el-col
                  v-for="(item,index) in orderList.items.find((iv: any)=> iv.type === 119)?.children"
                  :span="orderList.items.find((iv: any)=> iv.type === 119)?.children?.length === index + 1 ? 20 : 24"
                  class="left"
                  :key="index"
                >
                  {{ item.name }}
                </el-col>
                <el-col :span="4" class="right">
                  €{{ orderList.items.find((iv: any)=> iv.type === 119)?.sellPrice }}
                </el-col>
              </el-row>
            </div>
            <div
              class="order-i"
              v-for="(item,index) in orderList.items.filter((iv: any)=> iv.type !== 119)"
              :key="index"
            >
              <el-row>
                <el-col :span="24" class="left">
                  {{ item.name }}
                </el-col>
                <el-col :span="16" class="left tips">
                  <!-- 1打印机+1平板 -->
                </el-col>
                <el-col :span="8" class="right tips-1">
                  <div>
                    <span v-if="item.count > 0">*{{ item.count }}</span>
                    <span style="margin-left: 20px"> €{{ item.sellPrice }}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!-- <div class="order-i">
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
                        </div> -->
          </div>
          <div class="order-btn" v-if="orderList.items.length > 0">
            <el-row class="order-btn-row">
              <el-col :span="12" class="left-i-sub">
                {{ $t("orderOne.totalAmount") }}
              </el-col>
              <el-col :span="12" class="right-i-sub">
                €{{ orderList?.totalAmount || 0 }}
              </el-col>
              <el-col :span="12" class="left-i-sub">
                {{ $t("orderOne.discountAmount") }}
              </el-col>
              <el-col :span="12" class="right-i-sub">
                €{{ orderList?.discountAmount || 0 }}
              </el-col>
              <el-col :span="12" class="left-i-sub">
                {{ $t("orderOne.taxAmount") }}
              </el-col>
              <el-col :span="12" class="right-i-sub">
                €{{ orderList?.taxAmount || 0 }}
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" class="left-i">
                <span class="word">{{ $t("orderOne.finalAmount") }}：</span>
              </el-col>
              <el-col :span="16" class="right-i">
                <span>
                  €{{ orderList?.finalAmount || 0 }}<label class="word-1">+ IVA</label>
                </span>
              </el-col>
              <el-col :span="24">
                <el-input
                  class="input-h"
                  v-model="inviteCode"
                  @input="changeInviteCode"
                  @keydown.enter.native="enterEvent($event)"
                  :placeholder="
                    $t('orderOne.enterInviteCode', { price: userStore.discountedPrice })
                  "
                  size="large"
                />
              </el-col>
              <el-col :span="24">
                <el-button class="button-h" @click="toPay">{{
                  $t("orderOne.buyNow")
                }}</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <JoinUs ref="JoinUsFnRef" />
    <UpdateView ref="UpdateViewRef" />
  </div>
</template>
<script setup lang="ts">
import AddNum from "./AddNum.vue";
import RadioView from "./RadioView.vue";
import InvoiceCheckbox from "./InvoiceCheckbox.vue";
import { QuestionFilled } from "@element-plus/icons-vue";
import JoinUs from "./JoinUs.vue";
import UpdateView from "./UpdateView.vue";
import { useUserStore } from "@/stores/modules/user";
import { ElMessage } from "element-plus";
import { getGoodsDetailApi, precreateApi } from "@/apis/goods";
import { useCommonStore } from "@/stores/modules/common";
import { useShoppingCartStore } from "@/stores/modules/shoppingCart";
import { debounce } from "lodash";
import { i18n } from "@/lang/index";
const userStore = useUserStore();
const commonStore = useCommonStore();
const shoppingCartStore = useShoppingCartStore();
const JoinUsFnRef = ref();
const UpdateViewRef = ref();
const props = defineProps({
  id: {
    type: String,
    require: true,
  },
});
const emits = defineEmits(["toPay"]);
const inviteCode = ref("");
defineOptions({
  name: "orderOne",
});
const serverBuyer: any = reactive({
  id: "1002",
  name: "SERVER BUYER",
  subtitle: "服务选购",
  sellPrice: 800,
  mixNum: 1,
  maxNum: 999,
  assorts: [
    {
      id: "1",
      name: "远程指导安装人工费",
      type: "input",
      mixNum: 0,
      maxNum: 999,
      items: [
        {
          id: "产品ID",
          type: 101,
          unit: "小时", //单位
          spec: "", //规格
          sellPrice: 230,
        },
      ],
    },
    {
      id: "2",
      name: "商品人工导入费",
      type: "checkbox",
      items: [
        {
          id: "1",
          type: 101,
          unit: "", //单位
          spec: "", //规格
          sellPrice: 100,
        },
        {
          id: "2",
          type: 101,
          unit: "", //单位
          spec: "", //规格
          sellPrice: 200,
        },
      ],
    },
    {
      id: "3",
      name: "商品人工翻译费",
      type: "input",
      mixNum: 0,
      maxNum: 999,
      items: [
        {
          id: "产品ID",
          type: 101,
          unit: "语言", //单位
          spec: "", //规格
          sellPrice: 50,
        },
      ],
    },
    {
      id: "4",
      name: "人工售后费",
      type: "input",
      mixNum: 0,
      maxNum: 999,
      items: [
        {
          id: "产品ID",
          type: 101,
          unit: "30分钟", //单位
          spec: "", //规格
          sellPrice: 10,
        },
      ],
    },
  ],
});
const response: any = ref({});

const getData = async () => {
  if (props.id) {
    const { data } = await getGoodsDetailApi(props.id);
    // const value = {
    //     "id": "1001",
    //     "name": "FASTSIMPLE BASIC",
    //     "subtitle": "基础套餐",
    //     "sellPrice": 800,
    //     "items": [
    //         {
    //             "id": "100010101",
    //             "name": "平板11寸HUAWEI SE",
    //             "price": 230
    //         },
    //         {
    //             "id": "100030101",
    //             "name": "热敏打印机",
    //             "price": 300
    //         },
    //         {
    //             "id": "100040101",
    //             "name": "平板电脑支架",
    //             "price": 70
    //         },
    //         {
    //             "id": "200010101",
    //             "name": "FASTSIMPLE软件授权费",
    //             "price": 200
    //         }
    //     ],
    //     "assorts": [
    //         {
    //             "name": "FASTSIMPLE年费",
    //             "minSelectCount": 1,
    //             "maxSelectCount": 1,
    //             "items": [
    //                 {
    //                     "id": "200030101",
    //                     "type": 102,
    //                     "spec": "1打印机 + 1平板",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 200
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "POS机",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 200,
    //             "items": [
    //                 {
    //                     "id": "100070101",
    //                     "type": 101,
    //                     "spec": "",
    //                     "unit": null,
    //                     "value": null,
    //                     "sellPrice": 220
    //                 },
    //                 {
    //                     "id": "100070102",
    //                     "type": 103,
    //                     "spec": "",
    //                     "unit": null,
    //                     "value": "12",
    //                     "sellPrice": 10
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "点单手印打印扫码PDA",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 200,
    //             "items": [
    //                 {
    //                     "id": "100080101",
    //                     "type": 101,
    //                     "spec": "80mm",
    //                     "unit": null,
    //                     "value": null,
    //                     "sellPrice": 800
    //                 },
    //                 {
    //                     "id": "100080102",
    //                     "type": 101,
    //                     "spec": "58mm",
    //                     "unit": null,
    //                     "value": null,
    //                     "sellPrice": 600
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "WIFI路由器SIM卡版",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 200,
    //             "items": [
    //                 {
    //                     "id": "100050101",
    //                     "type": 101,
    //                     "spec": "",
    //                     "unit": null,
    //                     "value": null,
    //                     "sellPrice": 100
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "钱箱",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 200,
    //             "items": [
    //                 {
    //                     "id": "100090101",
    //                     "type": 101,
    //                     "spec": "",
    //                     "unit": null,
    //                     "value": null,
    //                     "sellPrice": 80
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "SOFATTURA发票",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 6,
    //             "items": [
    //                 {
    //                     "id": "200020101",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 },
    //                 {
    //                     "id": "200020102",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 },{
    //                     "id": "200020103",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 },{
    //                     "id": "200020104",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 },{
    //                     "id": "200020105",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 },{
    //                     "id": "200020106",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "税号搜索",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 1,
    //             "items": [
    //                 {
    //                     "id": "200020201",
    //                     "type": 102,
    //                     "spec": "",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 }
    //             ]
    //         }
    //     ]
    // }
    response.value = data;
  }
};

const orderList = ref<any>({
  netAmount: 0,
  taxAmount: 0,
  totalAmount: 0,
  discountAmount: 0,
  finalAmount: 0,
  items: [],
});

const changeOrderList = (data: any) => {
  console.log("changeOrderList==>", data);
  orderList.value = data;
};

const joinUsFn = () => {
  if (JoinUsFnRef.value) {
    JoinUsFnRef.value.showModal();
  }
  // if(UpdateViewRef.value){
  //     UpdateViewRef.value.showModal()
  // }
};
const enterEvent = (event: any) => {
  console.log("enterEvent==>", event);
  blurInviteCode(event.target.value);
};
const blurInviteCode = async (value: any) => {
  console.log("blurInviteCode==>", value, inviteCode.value);

  if (
    (inviteCode.value && inviteCode.value.length > 4) ||
    inviteCode.value.length === 0
  ) {    const params = shoppingCartStore.cart;
    const current = params.items.find((iv: any) => iv.type === 119);
    if (current) {
      params.type = 102;
    } else {
      params.type = 100;
    }
    params.items = params.items.filter((iv) => iv.count);
    const { data } = await precreateApi({
      ...params,
      inviteCode: inviteCode.value,
    });
    orderList.value = data;
    ElMessage.success(i18n.global.t("orderOne.discountUpdated"));
  } else {
    ElMessage.warning(i18n.global.t("orderOne.pleaseEnterCorrectCode"));
  }
};
const blurInviteCodeFn = debounce(blurInviteCode, 1000);
const changeInviteCode = (value: any) => {
  // 限制输入为数字和字母
  const val = value.replace(/[^a-zA-Z0-9]/g, "").trim();
  inviteCode.value = val.substring(0, 8);
  console.log("changeInviteCode==>", val);
  if (val.length === 0) {
    blurInviteCode(event);
  } else {
    if (val.length > 4 && val.length < 9) {
      blurInviteCodeFn(event);
    }
  }
};
const toPay = async () => {
  console.log("aaaaa====>", orderList.value);
  if (orderList.value.items.find((iv: any) => iv.type === 119)) {
    emits("toPay", JSON.parse(JSON.stringify(orderList.value)), inviteCode.value);
  } else {
    ElMessage.warning(i18n.global.t("orderOne.pleaseSelectPackage"));
  }
};
onMounted(() => {
  getData();
});

defineExpose({
  joinUsFn,
  changeOrderList,
});
</script>
<style scoped lang="less">
.order-one {
  .row-list {
    .pos-abs {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .el-col {
      display: flex;
      flex-direction: column;
    }

    .content-list,
    .content-list-right {
      height: 100%; // 确保内容容器占满高度
    }

    .content-list-right {
      padding: 30px;
      background-color: #ffffff;
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
        height: 73%;
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
          color: #1a1a1a;
        }

        .order-i {
          border-bottom: 1px solid #ededed;
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
          border-bottom: 1px solid #ededed;
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
            background: #bdbdbd;
            transform: scaleY(0.5);
            /* 垂直缩放至0.5倍 */
            transform-origin: 0 0;
            /* 确保缩放基点正确 */
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
        color: #1b1b1b;
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
          cursor: pointer;

          .el-icon {
            color: #2865ff;
            font-size: 13px;
          }

          // font-size: 13px;
        }
      }
    }

    .right {
      text-align: right;
    }

    .content-list-a {
      padding: 30px;
      margin-top: 5px;
      background-color: #ffffff;
      border-radius: 6px;

      .g-b {
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 500;
        font-size: 14px;
        color: #646464;

        .c-b {
          .mon {
            font-family: DIN, DIN;
            font-weight: 500;
            font-size: 18px;
            color: #999999;
          }
        }
      }

      .title-b {
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 500;
        font-size: 16px;
        color: #1b1b1b;
      }

      .tips {
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400 !important;
        font-size: 14px !important;
        color: #999999;
      }

      .left {
        .left-i-a {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 500;
          font-size: 16px;
          color: #1b1b1b;
          .sub-left-i-a {
            font-size: 13px;
          }
        }
      }

      .right {
        .oragin {
          color: #fdb522;
        }

        .grey {
          color: #999999;
        }

        .num-div {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 500;
          font-size: 14px;
          color: #646464;
          position: relative;
          width: 100%;
          height: 100%;
          padding-right: 102px;

          .oragin {
            color: #fdb522;
          }

          > span {
            font-family: DIN, DIN;
            font-weight: 500;
            font-size: 18px;
            color: #999999;
          }
        }

        .radio-common {
          .radio-con {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 14px;
            color: #646464;
          }
        }
      }
    }

    .content-list-top {
      margin-top: 5px;
    }

    .content-list {
      padding: 30px;
      background-color: #ffffff;
      border-radius: 6px;

      .list-one-j {
        text-align: right;
        padding-top: 28px;

        > div:first-child {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 500;
          font-size: 14px;
          color: #646464;
          position: relative;
          padding-right: 120px;

          .normal {
            font-family: DIN, DIN;
            font-weight: 500;
            font-size: 18px;
            color: #999999;
          }

          .m-f-20 {
            margin-left: 30px;
          }

          .origin {
            font-family: DIN, DIN;
            font-weight: 500;
            font-size: 18px;
            color: #fdb522;
          }
        }

        > div:last-child {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 14px;
          color: #646464;
        }
      }

      .none-m-b {
        border: none !important;
        padding-bottom: 0px !important;
      }

      .list-one-i {
        padding-left: 10px;
        padding-bottom: 28px;
        border-bottom: 1px solid #ededed;

        .left {
          padding-top: 28px;
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 16px;
          color: #595959;
        }

        .right {
          padding-top: 28px;
          font-family: DIN, DIN;
          font-weight: 500;
          font-size: 16px;
          color: #999999;

          .num-c {
            font-family: DIN, DIN;
            font-weight: 500;
            font-size: 18px;
            color: #999999;
          }

          .all-i {
            padding-right: 102px;
            position: relative;

            .i-1 {
              font-family: Source Han Sans SC, Source Han Sans SC;
              font-weight: 500;
              font-size: 14px;
              color: #646464;
            }

            .i-2 {
              font-family: DIN, DIN;
              font-weight: 500;
              font-size: 18px;
              color: #999999;
            }
          }
        }
      }

      .list-one {
        padding-left: 10px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ededed;
      }
    }
  }
}
</style>
