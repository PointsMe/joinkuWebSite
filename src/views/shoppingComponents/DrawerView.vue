<template>
  <div class="drawer-view">
    <el-drawer v-model="drawerStatus" size="67%" :with-header="false">
      <el-row class="row-d">
        <el-col :span="15" class="left-content">
          <div class="title">
            <el-row>
              <el-col :span="12" class="left">{{ $t('shoppingCart.checkout') }}</el-col>
              <el-col :span="12" class="right">
                <!-- 15584566249 -->
              </el-col>
            </el-row>
          </div>
          <div class="pay-style">
            <p>{{ $t('shoppingCart.selectPaymentMethod') }}</p>
            <el-row :gutter="12">
              <el-col
                :span="12"
                class="col-pay"
                v-for="(item, index) in payStyle"
                :key="index"
              >
                <div
                  @click="choosePayStyle(item.id)"
                  :class="item.checked ? 'pay-c choosed-pay' : 'pay-c'"
                >
                  <el-row>
                    <el-col :span="12" class="left-col">
                      <div class="left-img">
                        <img :src="item.img" alt="" />
                        <span>{{ item.name }}</span>
                      </div>
                    </el-col>
                    <el-col :span="12" class="right-col">
                      <div class="sele">
                        <span v-if="!item.checked" class="not-choose-icon"></span>
                        <el-icon v-else>
                          <CircleCheckFilled />
                        </el-icon>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <p class="title-t">{{ $t('shoppingCart.shippingInfo') }}</p>
            <div class="form-message">
              <el-form
                ref="ruleFormRef"
                :model="formModel"
                :rules="rules"
                label-width="auto"
              >
                <el-row :gutter="12">
                  <el-col :span="12">
                    <el-form-item label="" prop="contactName">
                      <el-input
                        size="default"
                        v-model="formModel.contactName"
                        :placeholder="$t('shoppingCart.name')"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="" prop="contactPhone">
                      <el-input
                        size="default"
                        v-model="formModel.contactPhone"
                        :placeholder="$t('shoppingCart.phone')"
                      >
                        <template #prepend>
                          <AllCountryView @changeCountry="changeCountry" />
                        </template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="" prop="country">
                      <el-select
                        v-model="formModel.country"
                        :placeholder="$t('shoppingCart.country')"
                        size="default"
                        @change="changeCountrySelect"
                      >
                        <el-option
                          v-for="item in commonStore.countryList"
                          :key="item.code"
                          :label="item.name"
                          :value="item.code"
                        />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="" prop="province">
                      <el-select
                        v-model="formModel.province"
                        :placeholder="$t('shoppingCart.province')"
                        size="default"
                      >
                        <el-option
                          v-for="item in provinceList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="" prop="city">
                      <el-input
                        size="default"
                        v-model="formModel.city"
                        :placeholder="$t('shoppingCart.city')"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="" prop="address">
                      <el-input
                        size="default"
                        v-model="formModel.address"
                        :placeholder="$t('shoppingCart.address')"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <div class="code">{{ $t('shoppingCart.referralCode') }}</div>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="">
                      <el-input
                        size="default"
                        v-model="formModel.inviteCode"
                        :placeholder="$t('shoppingCart.enterReferralCode')"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
          <div class="bottom-pay" v-if="showPayBtn">
            <el-button class="pay-btn" @click="payMoneyFn">{{ $t('shoppingCart.payNow') }}</el-button>
          </div>
          <div class="qrCode-pay" v-else>
            <el-row :gutter="12">
              <el-col :span="12">
                <div class="left-pay">
                  <img class="pay-mon" src="@/assets/fastsImages/wx-pay.png" alt="" />
                </div>
              </el-col>
              <el-col :span="12">
                <div class="right-pay">
                  <p>{{ $t('shoppingCart.total') }}：</p>
                  <p>€1652</p>
                  <p>
                    <img
                      class="pay-mon-icon"
                      src="@/assets/fastsImages/wx-pay-icon.png"
                      alt=""
                    />
                  </p>
                  <p>{{ $t('shoppingCart.scanWechatPay') }}</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="9" class="right-content">
          <div class="title">
            <el-row>
              <el-col :span="12" class="left">{{ $t('shoppingCart.orderSummary') }}</el-col>
              <el-col :span="12" class="right">
                <div class="close">
                  <el-icon @click="closeDrawer">
                    <Close />
                  </el-icon>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="order-list">
            <el-row
              class="row-one"
              v-for="(item,index) in (orderList.items).filter((iv:any)=>iv.type === 119)"
              :key="index"
            >
              <el-col :span="18">
                <div class="title-i">
                  {{ item.name }}
                </div>
              </el-col>
              <el-col :span="6">
                <div class="money-num">
                  <span>*1</span>
                  <span>€{{ item.sellPrice }}</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="goods-list">
                  <p v-for="(itemChild, indexChild) in item.children" :key="indexChild">
                    {{ itemChild.name }}
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row
              class="row-one"
              v-for="(item,index) in (orderList.items).filter((iv:any)=>iv.type !== 119)"
              :key="index"
            >
              <el-col :span="18">
                <div class="title-i">
                  {{ item.name }}
                </div>
              </el-col>
              <el-col :span="6">
                <div class="money-num">
                  <span v-if="item.count > 0">*{{ item.count }}</span>
                  <span style="margin-left: 20px;">€{{ item.sellPrice }}</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="goods-list">
                  <p>
                    {{ item.unit }}
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="order-btn">
            <el-row class="order-btn-row">
              <el-col :span="12" class="left-i-sub">{{ $t('shoppingCart.subtotal') }}</el-col>
              <el-col :span="12" class="right-i-sub">
                €{{ orderList?.totalAmount || 0 }}
              </el-col>
              <el-col :span="12" class="left-i-sub">{{ $t('shoppingCart.discount') }}</el-col>
              <el-col :span="12" class="right-i-sub">
                €{{ orderList?.discountAmount || 0 }}
              </el-col>
              <el-col :span="12" class="left-i-sub">{{ $t('shoppingCart.tax') }}</el-col>
              <el-col :span="12" class="right-i-sub">
                €{{ orderList?.taxAmount || 0 }}
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="left">
                <span>{{ $t('shoppingCart.totalAmount') }}</span>
              </el-col>
              <el-col :span="12" class="right">
                <span>
                  €{{ orderList?.finalAmount || 0 }}<label class="word-1">+ IVA</label>
                </span>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-drawer>
    <PaySuccess ref="PaySuccessRef" />
    <PayError ref="PayErrorRef" />
    <PayIframeView ref="PayIframeViewRef" />
  </div>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage, ElLoading } from "element-plus";
import adyenPng from "@/assets/fastsImages/adyen.png";
import guestPng from "@/assets/fastsImages/guest.png";
import wxPng from "@/assets/fastsImages/wx.png";
import alipayPng from "@/assets/fastsImages/alipay.png";
import { CircleCheckFilled, Close } from "@element-plus/icons-vue";
import PaySuccess from "./PaySuccess.vue";
import PayError from "./PayError.vue";
import AllCountryView from "@/components/AllCountryView.vue";
import { debounce } from "@/utils/index";
import { ref } from "vue";
import { createApi, payApi, orderListApi, paymodesApi } from "@/apis/goods";
import { useShoppingCartStore } from "@/stores/modules/shoppingCart";
import PayIframeView from "./PayIframeView.vue";
import { useCommonStore } from "@/stores/modules/common";
import { getProvinceListApi } from "@/apis/common";
interface RuleForm {
  contactName: string;
  contactPhone: string;
  country: string;
  city: string;
  address: string;
  inviteCode: string;
  province: string;
}
const PaySuccessRef = ref();
const PayErrorRef = ref();
const PayIframeViewRef = ref();
const countryCode = ref("+86");
const drawerStatus = ref<boolean>(false);
const qrCode = ref();
const loading = ref<any>(null);
const showPayBtn = ref<boolean>(true);
const ruleFormRef = ref<FormInstance>();
const formModel = ref<RuleForm>({
  contactName: "",
  contactPhone: "",
  country: "",
  city: "",
  address: "",
  inviteCode: "",
  province: "",
});
const provinceList = ref<any[]>([]);
const commonStore = useCommonStore();
const rules = reactive<FormRules<RuleForm>>({
  contactName: [{ required: true, message: "Please input contactName", trigger: "blur" }],
  contactPhone: [
    { required: true, message: "Please input contactPhone", trigger: "blur" },
  ],
  country: [{ required: true, message: "Please input country", trigger: "blur" }],
  city: [{ required: true, message: "Please input city", trigger: "blur" }],
  province: [{ required: true, message: "Please input province", trigger: "blur" }],
  // mail: [
  //     { required: true, message: 'Please input mail', trigger: 'blur' },
  // ],
  address: [{ required: true, message: "Please input address", trigger: "blur" }],
  // inviteCode: [
  //     { required: true, message: 'Please input Activity name', trigger: 'blur' },
  // ],
});
const changeCountrySelect = async (e: string) => {
  console.log("e===>", e);
  const { data } = await getProvinceListApi({
    countryId: commonStore.countryList.find((iv: any) => iv.code === e)?.id,
  });
  const arr = data.map((iv) => {
    return {
      label: iv.name,
      value: iv.name,
    };
  });
  formModel.value.province = '';
  ruleFormRef.value?.resetFields(['province']);
  provinceList.value = arr;
};
const shoppingCartStore = useShoppingCartStore();
const changeCountry = (e: string) => {
  countryCode.value = e;
};
const orderList = ref<any>({});
const showDrawer = (data: any,inviteCode:string) => {
  drawerStatus.value = true;
  orderList.value = data;
  formModel.value.inviteCode = inviteCode;
  console.log("orderList===>", orderList.value, data);
};
const closeDrawer = () => {
  drawerStatus.value = false;
};
const payMoney = () => {
  // if(PaySuccessRef.value){
  //     PaySuccessRef.value.showModal()
  // }
  // if (PayErrorRef.value) {
  //     PayErrorRef.value.showModal()
  // }
  // if([82,92].includes(qrCode.value)){
  //     showPayBtn.value = false
  // }
  if (!countryCode.value) {
    return ElMessage.warning("请选择国家");
  }
  if (!ruleFormRef.value) return;
  if (payStyle.value.find((iv) => iv.checked)?.id !== 101) {
    return ElMessage.warning("请先选择付款方式");
  }
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = ElLoading.service({
        lock: true,
        text: "加载中",
        background: "rgba(0, 0, 0, 0.7)",
      });
      const cart = shoppingCartStore.cart;
      console.log("valid", valid);
      const params = {
        ...cart,
        deliveryAddress: {
          ...formModel.value,
          contactPhone: `${countryCode.value.replace("+", "")}-${
            formModel.value.contactPhone
          }`,
        },
        inviteCode: formModel.value.inviteCode,
      };
      console.log("params===>", params);
      try {
        const { data } = await createApi(params);
        console.log("data===>", data);
        if (data.id) {
          shoppingCartStore.setOrderId(data.id);
          const res = await payApi({
            orderId: data.id,
            paymode: payStyle.value.find((iv) => iv.checked)?.id,
          });
          if (res.data.redirectUrl) {
            // loading.value.close();
            // PayIframeViewRef.value.showPayIframeView(res.data.redirectUrl);
            window.open(res.data.redirectUrl, "_blank");
            // getOrderList();
          }
          // PaySuccessRef.value.showModal()
        } else {
          // PayErrorRef.value.showModal()
        }
      } catch (e) {
        loading.value.close();
        console.log("e===>", e);
      } finally {
        // loading.value.close();
      }
    }
  });
};
const payMoneyFn = debounce(payMoney, 1000);
const payStyle = ref<
  Array<{
    id: number;
    img: string;
    name: string;
    checked: boolean;
  }>
>([
  {
    id: 102,
    img: adyenPng,
    name: "PAYPAL",
    checked: true,
  },
  {
    id: 101,
    img: guestPng,
    name: "guest",
    checked: false,
  },
  {
    id: 92,
    img: wxPng,
    name: "微信",
    checked: false,
  },
  {
    id: 82,
    img: alipayPng,
    name: "支付宝",
    checked: false,
  },
]);

const choosePayStyle = (val: number) => {
  payStyle.value = payStyle.value.map((item) => {
    if (item.id === val) {
      item.checked = true;
    } else {
      item.checked = false;
    }
    return {
      ...item,
    };
  });
  showPayBtn.value = true;
};
const paymodesFn = async () => {
  const { data } = await paymodesApi();
  console.log("data===>", data);
  payStyle.value = payStyle.value.filter((iv: any) => data.paymodes.includes(iv.id));
};
const getOrderList = async () => {
  const timer = setInterval(async () => {
    const { data } = await orderListApi();
    console.log("data===>", data);
    const current = data.list.find((iv: any) => iv.id === shoppingCartStore.orderId);
    if (current) {
      clearInterval(timer);
      if ([109, 111].includes(current.state)) {
        //101 创建 （待审核） 102 已接单 109 已结束 111 已取消
        if (current.paymentState === 101) {
          //101 未付款    103 已付款
          PayErrorRef.value.showModal();
        } else if (current.paymentState === 103) {
          PaySuccessRef.value.showModal();
        }
      } else if (current.state === 111) {
        PayErrorRef.value.showModal();
      } else if (current.state === 101) {
        PayErrorRef.value.showModal();
      }
    }
  }, 1000);
};
watch(
  () => payStyle.value,
  (newVal: Array<any>) => {
    let current = newVal.find((iv) => iv.checked);
    console.log("newVal", newVal, current);
    if (current) {
      qrCode.value = current.id;
    }
  },
  { deep: true, immediate: true } // 关键选项
);
onMounted(() => {
  console.log("cart===>", shoppingCartStore.cart);
  //   if (shoppingCartStore.orderId) {
  //     getOrderList();
  //   }
  paymodesFn();
});
defineExpose({
  showDrawer,
});
</script>
<style scoped lang="less">
.drawer-view {
  .row-d {
    height: 100vh;
    width: 100%;

    .left-content {
      background: #f0f0f0;
      width: 100%;
      padding: 0 50px;
      padding-top: 94px;
      position: relative;

      .qrCode-pay {
        width: 70%;
        margin: auto;

        .left-pay {
          text-align: right;
          height: 100%;

          .pay-mon {
            width: 160px;
            height: 160px;
            display: block;
            float: right;
          }
        }

        .left-pay::after {
          clear: both;
        }

        .right-pay {
          text-align: left;
          font-family: Source Han Sans SC, Source Han Sans SC;

          p {
            padding: 0;
            margin: 0;
          }

          > p:first-child {
            font-weight: 400;
            font-size: 14px;
            color: #1b1b1b;
          }

          > p:nth-child(2) {
            font-family: Inter, Inter;
            font-weight: bold;
            font-size: 36px;
            color: #1b1b1b;
          }

          > p:nth-child(3) {
          }

          > p:nth-child(4) {
            font-weight: 500;
            font-size: 16px;
            color: #1a1a1a;
          }

          .pay-mon-icon {
            width: 24px;
            height: 24px;
          }
        }
      }

      .bottom-pay {
        position: absolute;
        width: calc(100% - 100px);
        height: 55px;
        bottom: 70px;
        left: 50px;

        .pay-btn {
          width: 100%;
          height: 100%;
          background: #1b1b1b;
          color: #fff;
          border-radius: 12px 12px 12px 12px;
        }
      }

      .pay-style {
        > p {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 500;
          font-size: 16px;
          color: #1a1a1a;
          margin: 0;
          padding: 0;
          padding-bottom: 14px;
        }

        .form-message {
          .code {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 16px;
            color: #1a1a1a;
            margin: 0;
            padding: 0;
            padding-bottom: 14px;
          }
        }

        .title-t {
          margin-top: 30px;
        }

        .col-pay {
          margin-top: 10px;

          .choosed-pay {
            background: rgba(233, 156, 14, 0.04) !important;
            border-radius: 8px;
            border: 1px solid #e99c0e;
          }

          .pay-c {
            background: #ffffff;
            height: 74px;
            width: 100%;
            border-radius: 8px;

            .right-col {
              .sele {
                height: 100%;
                // line-height: 74px;
                position: relative;

                .el-icon {
                  position: absolute;
                  display: block;
                  font-size: 25px;
                  right: 16px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: #e99c0e;
                }

                .not-choose-icon {
                  position: absolute;
                  display: block;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  right: 18px;
                  top: 50%;
                  transform: translateY(-50%);
                  border: 1px solid #999999;
                }
              }
            }

            .left-col {
              .left-img {
                width: 100%;
                height: 74px;
                line-height: 74px;
                position: relative;
                text-indent: 70px;

                > img {
                  position: absolute;
                  display: block;
                  left: 8px;
                  top: 8px;
                  width: 58px;
                  height: 58px;
                }
              }
            }
          }
        }
      }

      .title {
        padding-bottom: 50px;

        .left {
          text-align: left;
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 500;
          font-size: 24px;
          color: #1a1a1a;
        }

        .right {
          text-align: right;
          font-family: Inter, Inter;
          font-weight: 500;
          font-size: 16px;
          color: #999999;
        }
      }
    }

    .right-content {
      background-color: #ffffff;
      padding: 0 50px;
      padding-top: 94px;
      padding-bottom: 50px;
      position: relative;
      width: 100%;
      height: 100%;

      .order-btn {
        width: calc(100% - 100px);
        // height: 80px;
        position: absolute;
        bottom: 50px;
        .order-btn-row {
          font-size: 16px;
          .left-i-sub {
            text-align: left;
          }
          .right-i-sub {
            text-align: right;
          }
        }
        .left {
          text-align: left;
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 16px;
          color: #666666;
          line-height: 50px;
        }

        .right {
          text-align: right;
          font-family: Inter, Inter;
          font-weight: bold;
          font-size: 28px;
          color: #1a1a1a;
          .word-1 {
            font-size: 16px;
            color: #999999;
          }
        }
      }

      .order-list {
        height: 73%;
        overflow-y: scroll;
        overflow-x: hidden;
        .row-one {
          margin-top: 24px;

          .title-i {
            width: 100%;
            text-align: left;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 16px;
            color: #595959;
          }

          .money-num {
            width: 100%;
            text-align: right;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 16px;
            color: #1a1a1a;

            > span:last-child {
              margin-left: 20px;
            }
          }

          .goods-list {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
            padding-top: 5px;

            p {
              padding-top: 5px;
            }
          }
        }
      }

      .title {
        padding-bottom: 26px;

        .left {
          text-align: left;
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 500;
          font-size: 24px;
          color: #1a1a1a;
        }

        .close {
          width: 100%;
          height: 100%;

          > .el-icon {
            display: block;
            position: absolute;
            right: 0;
            top: -30px;
            cursor: pointer;
            font-size: 30px;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>
