<template>
  <div class="order-view-dialog">
    <el-dialog
      v-model="dialogVisible"
      width="45%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="handleClose"
    >
      <template #title>
        <h3 class="title-dialog">{{ $t('orderView.myOrders') }}</h3>
      </template>
      <div class="content">
        <el-row>
          <el-col :span="24">
            <div class="content-tab">
              <span
                v-for="(item, index) in tabList"
                :key="index"
                :class="item.checked ? 'choosed' : ''"
                @click="changeTab(item)"
                >{{ $t(item.name) }}</span
              >
            </div>
          </el-col>
          <el-col :span="12">
            <!-- <div class="content-tab">
            <span>
                <el-button type="primary"></el-button>
            </span>
        </div> -->
          </el-col>
        </el-row>

        <div class="order-list">
          <div v-if="orderList.length > 0" class="current-one">
            <el-collapse>
              <el-collapse-item
                title="Consistency"
                v-for="(item, index) in orderList"
                :key="index"
                :name="index + 1"
              >
                <template #title>
                  <div>
                    <el-row class="order-row-one">
                      <el-col :span="16">
                        <div class="title-left">
                          <span class="sp-1">{{ $t('orderView.orderNumber') }}:</span>
                          <span class="sp-2">{{ item.number }}</span>
                          <span class="sp-3" v-if="item.state === 101">{{ $t('orderView.pendingPayment') }}</span>
                          <span
                            class="sp-3"
                            v-if="item.state === 102 && item.deliveryState === 103"
                            >{{ $t('orderView.pendingShipment') }}</span
                          >
                          <span
                            class="sp-3"
                            style="background: #91baff"
                            v-if="item.state === 102 && item.deliveryState === 101"
                            >{{ $t('orderView.shipped') }}</span
                          >
                          <span
                            class="sp-3"
                            style="background: #b7c268"
                            v-if="item.state === 109"
                            >{{ $t('orderView.completed') }}</span
                          >
                          <span class="sp-3" v-if="item.state === 111">{{ $t('orderView.cancelled') }}</span>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="title-right">{{ item.createdAt }}</div>
                      </el-col>
                    </el-row>
                    <div
                      class="order-title"
                      v-if="item.items.find((iv:any)=>iv.type === 119)"
                    >
                      {{ item.items.find((iv:any)=>iv.type === 119).name }}
                    </div>
                    <div class="order-title" v-else>{{ $t('orderView.hardwareSelection') }}</div>
                    <div class="order-info">
                      <span v-if="item.items.find((iv:any)=>iv.type === 119)"
                        >{{ $t('orderView.packageInfo') }}</span
                      >
                      <span v-else>{{ $t('orderView.productInfo') }}</span>
                    </div>
                  </div>
                </template>
                <div>
                  <div class="order-info-list">
                    <el-row
                      class="order-info-row"
                      v-if="item.items.find((iv:any)=> iv.type === 119)"
                    >
                      <el-col
                        :span="12"
                        v-for="(iv,index) in (item.items).find((iv:any)=> iv.type === 119).children"
                        :key="index"
                      >
                        <div>{{ iv.name }}</div>
                      </el-col>
                    </el-row>
                    <el-row
                      class="order-info-row-1"
                      v-if="item.items.filter((iv:any)=> iv.type !== 119).length > 0"
                    >
                      <el-col
                        :span="12"
                        v-for="(iv,index) in (item.items).filter((iv:any)=> iv.type !== 119)"
                        :key="index"
                      >
                        <div>{{ iv.name }} * {{ iv.count }}</div>
                      </el-col>
                    </el-row>
                    <div class="order-total">
                      <el-row>
                        <el-col :span="12">
                          <el-button
                            v-if="item.state === 101"
                            class="btn-re-pay"
                            size="small"
                            type="success"
                            @click="rePay(item)"
                            >{{ $t('orderView.repay') }}</el-button
                          >
                          <el-button
                            v-if="item.state === 101"
                            class="btn-cancel-order"
                            size="small"
                            type="danger"
                            @click="cancelOrder(item)"
                            >{{ $t('orderView.cancelOrder') }}</el-button
                          >
                        </el-col>
                        <el-col :span="12">
                          <el-row>
                            <el-col :span="16"> {{ $t('orderView.totalAmount') }} </el-col>
                            <el-col :span="8"> €{{ item.totalAmount }} </el-col>
                            <el-col :span="16"> {{ $t('orderView.discountAmount') }} </el-col>
                            <el-col :span="8"> €{{ item.discountAmount }} </el-col>
                            <el-col :span="16"> {{ $t('orderView.taxRate') }} </el-col>
                            <el-col :span="8"> €{{ item.taxAmount }} </el-col>
                            <el-col :span="16" class="total-amount"> {{ $t('orderView.total') }}： </el-col>
                            <el-col :span="8" class="total-amount"> €{{ item.finalAmount }} </el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="wuliu-info">
                    <div class="wuliu-info-title">{{ $t('orderView.logisticsInfo') }}</div>
                    <div class="wuliu-info-content">
                      {{ $t('orderView.recipient') }}：{{ item?.deliveryAddress?.contactName }}
                    </div>
                    <div class="wuliu-info-content">
                      {{ $t('orderView.phoneNumber') }}：{{ item?.deliveryAddress?.contactPhone }}
                    </div>
                    <div class="wuliu-info-content">
                      {{ $t('orderView.detailedAddress') }}：
                      <span v-if="item?.deliveryAddress?.country">
                      {{ item?.deliveryAddress?.country }}-
                      </span>
                      <span v-if="item?.deliveryAddress?.province">
                      {{ item?.deliveryAddress?.province }}-
                      </span>
                      <span v-if="item?.deliveryAddress?.city">
                      {{ item?.deliveryAddress?.city }}-
                      </span> 
                      <span v-if="item?.deliveryAddress?.address">
                      {{ item?.deliveryAddress?.address }}
                      </span>
                    </div>
                    <div class="wuliu-info-name">
                      <span v-if="item.state === 102 && item.deliveryState === 103"
                        >{{ $t('orderView.waitingForShipment') }}</span
                      >
                      <span v-if="item.state === 102 && item.deliveryState === 101"
                        >{{ $t('orderView.shipped') }}</span
                      >
                      （{{ $t('orderView.contactCustomerService') }}：88546331224）
                    </div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div v-else class="current-none">
            <img src="@/assets/fastsImages/no-order.png" alt="" />
            <p>{{ $t('orderView.noOrderRecords') }}</p>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import moment from "moment";
import { orderListApi, cancelOrderApi, payApi } from "@/apis/goods";
import { ElMessageBox, ElLoading } from "element-plus";
import { useCommonStore } from "@/stores/modules/common";
interface TabListType {
  id: number;
  name: string;
  checked: boolean;
}
const commonStore = useCommonStore();
const dialogVisible = ref<boolean>(false);
const tabList = ref<Array<TabListType>>([
  {
    name: "orderView.all",
    id: 1,
    checked: true,
  },
  {
    name: "orderView.pendingPayment",
    id: 2,
    checked: false,
  },
  {
    name: "orderView.pendingShipment",
    id: 3,
    checked: false,
  },
  {
    name: "orderView.completed",
    id: 4,
    checked: false,
  },
]);
const orderList = ref<Array<any>>([]);
const sourceOrderList = ref<Array<any>>([]);
const handleClose = (done: () => void) => {
  commonStore.setShowOrderListView(false);
  done();
};
const changeTab = (item: TabListType) => {
  if (item.id === 1) {
    orderList.value = sourceOrderList.value;
  } else if (item.id === 2) {
    orderList.value = sourceOrderList.value.filter((iv: any) => iv.state === 101);
  } else if (item.id === 3) {
    orderList.value = sourceOrderList.value.filter(
      (iv: any) => iv.state === 102 && iv.deliveryState === 103
    );
  } else if (item.id === 4) {
    orderList.value = sourceOrderList.value.filter((iv: any) => iv.state === 109);
  }
  tabList.value = tabList.value.map((iv) => {
    return {
      ...iv,
      checked: iv.id === item.id,
    };
  });
};
const cancelOrder = async (item: any) => {
  console.log("item===>", item);
  ElMessageBox.confirm("确定取消订单吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    cancelButtonClass: "cancel-button-order",
    confirmButtonClass: "confirm-button-order",
    type: "warning",
  }).then(async () => {
    const loading = ElLoading.service({
      lock: true,
      text: "loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    try {
      const { data } = await cancelOrderApi(item.id);
      console.log("data===>", data);
      getOrderList();
    } catch (error) {
      console.log("error===>", error);
    } finally {
      loading.close();
    }
  });
};
const rePay = (item: any) => {
  console.log("item===>", item);
  ElMessageBox.confirm("确定重新支付吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    cancelButtonClass: "cancel-button-order",
    confirmButtonClass: "confirm-button-order",
    type: "warning",
  }).then(async () => {
    console.log("item===>", item);
    const loading = ElLoading.service({
      lock: true,
      text: "loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    try {
      const res = await payApi({
        orderId: item.id,
        paymode: item?.payMode || 101,
      });
      if (res.data.redirectUrl) {
        // loading.value.close();
        // PayIframeViewRef.value.showPayIframeView(res.data.redirectUrl);
        window.open(res.data.redirectUrl, "_blank");
        // getOrderList();
      }
    } catch (error) {
      console.log("error===>", error);
      loading.close();
    }
  });
};
const getOrderList = async () => {
  const { data } = await orderListApi();
  console.log("data===>", data);
  const arr = data.list.map((iv: any) => {
    return {
      ...iv,
      autoCancelAt: moment(iv.autoCancelAt).format("YYYY-MM-DD HH:mm:ss"),
      createdAt: moment(iv.createdAt).format("YYYY-MM-DD HH:mm:ss"),
    };
  });
  orderList.value = arr;
  sourceOrderList.value = arr;
};
watch(
  () => commonStore.showOrderListView,
  (newVal) => {
    console.log("newVal", newVal);
    dialogVisible.value = newVal;
    if (newVal) {
      getOrderList();
    }
  },
  { immediate: true } // 关键选项
);
</script>
<style scoped lang="less">
.order-view-dialog {
  .content {
    .order-list {
      margin-top: 20px;
      .order-info {
        padding-left: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400;
        font-size: 16px;
        color: #1a1a1a;
        text-align: left;
      }
      .order-title {
        padding-left: 20px;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: bold;
        font-size: 20px;
        color: #1e1e1e;
        > span {
          font-weight: 400;
          font-size: 16px;
          color: #666666;
        }
      }
      .current-none {
        text-align: center;
        margin-top: 100px;
        margin-bottom: 100px;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400;
        font-size: 16px;
        color: #999999;
        > img {
          display: block;
          width: 300px;
          margin: auto;
        }
        > p {
          padding-top: 10px;
        }
      }
      .current-one {
        width: 100%;
        // position: relative;
        height: 500px;
        overflow-y: scroll;
        .wuliu-info {
          padding-left: 20px;
          .wuliu-info-name {
            text-align: right;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 14px;
            color: #666666;
            padding-top: 20px;
          }
          .wuliu-info-content {
            font-family: Source Han Sans SC, Source Han Sans SC;
            padding-top: 16px;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
          }
          .wuliu-info-title {
            padding-top: 20px;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 16px;
            color: #1a1a1a;
          }
        }
        .order-info-list {
          border-bottom: 1px solid #e5e5e5;
          .order-total {
            margin-top: 20px;
            .total-amount{
              font-family: Source Han Sans SC, Source Han Sans SC;
              font-weight: 400;
              font-size: 24px;
              color: #1a1a1a;
            }
            .btn-re-pay {
              margin-left: 20px;
              float: left;
              margin-top: 20px;
              background-color: #fdb522;
              border: none;
              // color: #fff;
            }
            .btn-cancel-order {
              margin-left: 20px;
              float: left;
              margin-top: 20px;
              background-color: #f56c6c;
              border: none;
              // color: #fff;
            }
            text-align: right;
            padding-right: 20px;
            padding-bottom: 20px;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 14px;
            color: #666666;
            > span {
              font-family: DIN, DIN;
              font-weight: 500;
              font-size: 20px;
              color: #1b1b1b;
            }
          }
          .order-info-row-1 {
            padding: 20px;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
            border-bottom: 1px dashed #e5e5e5;
          }
          .order-info-row {
            padding: 0 20px 20px 20px;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
            border-bottom: 1px dashed #e5e5e5;
          }
        }

        .order-row-one {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 16px;
          color: #1a1a1a;
          background: #f6f6f6;
          border-radius: 5px;
          // padding: 8px 16px;
          padding-left: 16px;
          padding-right: 16px;
          width: 100%;
          position: absolute;
          top: -1px;
          height: 42px;
          line-height: 42px;
          .title-right {
            text-align: right;
          }
          .title-left {
            text-align: left;
            span {
              display: inline-block;
            }
            .sp-3 {
              height:25px;
              line-height: 25px;
              border-radius: 6px 6px 6px 6px;
              background: #fdb522;
              color: #fff;
              padding: 0 10px;
              margin-left: 10px;
              font-weight: 400;
              font-size: 12px;
            }
          }
        }
      }
    }
    .content-tab {
      display: flex;
      // justify-content: left;
      // align-items: center;
      // margin-bottom: 83px;
      span {
        display: inline-block;
        position: relative;
        cursor: pointer;
        margin-left: 30px;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400;
        font-size: 16px;
        color: #666666;
      }
      > span:first-child {
        margin-left: 0 !important;
      }
      .choosed {
        color: #fdb522;
        &::after {
          content: ""; /* 创建伪元素 */
          position: absolute; /* 绝对定位 */
          left: 50%; /* 与原始元素左对齐 */
          bottom: -5px; /* 与原始元素底部对齐 */
          width: 20px; /* 宽度为100%，即与原始元素相同 */
          height: 2px; /* 下划线的高度 */
          background-color: #fdb522; /* 下划线的颜色 */
          transform: translateX(-50%);
        }
      }
    }
  }
  .title-dialog {
    font-family: Inter, Inter;
    font-weight: bold;
    font-size: 24px;
    color: #1a1a1a;
  }
}
</style>
