<template>
  <div class="shopping-new-index">
    <div class="content">
      <div class="shopping-tab">
        <el-row :gutter="6">
          <el-col
            :span="8"
            class="shopping-col"
            v-for="(item, index) in tabArr"
            :key="index"
          >
            <div
              @click="changeTab(item.id)"
              :class="item.checked ? 'shopping-content choosed' : 'shopping-content'"
            >
              <p :class="index + 1 === tabArr.length ? 't_c l_t_c' : 't_c'">
                {{ item.subtitle }}
              </p>
              <p class="t_d" v-if="index + 1 !== tabArr.length">
                {{ item.name }}
              </p>
              <span></span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="tab-content">
        <div v-for="(item, index) in tabArr" :key="index">
          <OrderOne v-if="!index && item.checked" :id="item.id" @toPay="toPayDrawer" />
          <OrderTwo
            v-if="index === 1 && item.checked"
            :id="item.id"
            @toPay="toPayDrawer"
          />
          <OrderThree
            v-if="index === 2 && item.checked"
            :id="item.id"
            @toPay="toPayDrawer"
          />
        </div>
      </div>
    </div>
    <DrawerView ref="DrawerRef" />
    <PayError ref="PayErrorRef" />
    <PaySuccess ref="PaySuccessRef" />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import OrderOne from "./OrderOne.vue";
import OrderTwo from "./OrderTwo.vue";
import OrderThree from "./OrderThree.vue";
import DrawerView from "./DrawerView.vue";
import PayError from "./PayError.vue";
import PaySuccess from "./PaySuccess.vue";
import { getGoodsListApi } from "@/apis/goods";
import { useShoppingCartStore } from "@/stores/modules/shoppingCart";
import { getToken } from "@/utils/cache/cookies";
const shoppingCartStore = useShoppingCartStore();
defineOptions({
  name: "shoppingNewIndex",
});
const router = useRouter();
const hardwareSelection = {
  id: "1003",
  name: "",
  subtitle: "硬件选购",
  checked: false,
};
const DrawerRef = ref();
const PayErrorRef = ref();
const PaySuccessRef = ref();
const tab = ref<string>("1");
const tabArr = ref<
  Array<{
    id: string;
    name: string;
    subtitle: string;
    checked: boolean;
  }>
>([]);
// {
//     id: '1001',
//     name: 'FASTSIMPLE BASIC',
//     subtitle: '基础套餐',
//     checked: false
// },
// {
//     id: '1002',
//     name: 'FASTSIMPLE premiun',
//     subtitle: '升级套餐',
//     checked: false
// },hardwareSelection
const toPayDrawer = (orderList: any,inviteCode:string) => {
  console.log("toPayDrawer=>", shoppingCartStore.cart,inviteCode);
  if (DrawerRef.value) {
    DrawerRef.value.showDrawer(orderList,inviteCode);
  }
};
const changeTab = (val: string) => {
  window.localStorage.setItem("shoppingTab",val)
  shoppingCartStore.setCart({
    type: "",
    items: [],
  });
  console.log("====changeTab>",shoppingCartStore.cart)
  tabArr.value = tabArr.value.map((item) => {
    return {
      ...item,
      checked: item.id === val ? true : false,
    };
  });
  tab.value = val;
};
const getData = async () => {
  const { data } = await getGoodsListApi();
  if (data && data.length > 0) {
    console.log("res===>", data);
    const list = data.map((item: any, index: number) => {
      return {
        id: item.id,
        name: item.name,
        subtitle: item.subtitle,
        checked: false,
      };
    });
    console.log("list.contact(hardwareSelection)", list);
    list.push(hardwareSelection);
    tabArr.value = list;
  }
};

onMounted(() => {
  getData().then(() => {
    console.log("onMounted=>", router.currentRoute.value.query);
    changeTab(window.localStorage.getItem("shoppingTab") || '1001');
    if (getToken()) {
      if (
        router.currentRoute.value?.query?.status &&
        router.currentRoute.value?.query?.status === "false"
    ) {
      PayErrorRef.value.showModal(router.currentRoute.value?.query?.orderId);
    } else if (
      router.currentRoute.value?.query?.status &&
      router.currentRoute.value?.query?.status === "true"
    ) {
        PaySuccessRef.value.showModal(router.currentRoute.value?.query?.orderId);
      }
    }
  });
});
defineExpose({
  toPayDrawer,
});
</script>
<style scoped lang="less">
.shopping-new-index {
  width: 100%;
  background-color: #f6f6f4;

  p {
    margin: 0;
    padding: 0;
  }

  .content {
    width: 1280px;
    margin: auto;

    .tab-content {
      margin-top: 30px;
    }

    .shopping-tab {
      margin-top: 40px;

      .shopping-col {
        display: flex;
        flex-direction: column;

        .choosed {
          background: linear-gradient(305deg, #1a1a1a 0%, #2f2f2f 100%);
          box-shadow: 3px 5px 9px 0px rgba(38, 27, 8, 0.14);
          border-radius: 4px 4px 4px 4px;

          .t_c {
            font-family: Inter, Inter;
            font-weight: normal;
            font-size: 20px;
            color: #fed15f !important;
          }
          .l_t_c {
            height: 100%;
            line-height: 3;
          }

          .t_d {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 20px;
            color: #ffffff !important;
          }

          > span {
            display: block;
            height: 4px;
            width: 80px;
            background-color: #fed15f;
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .shopping-content {
          position: relative;
          background-color: #ffffff;
          text-align: center;
          padding: 26px 0;
          cursor: pointer;
          height: 100%;

          // line-height: 1;
          .t_c {
            font-family: Inter, Inter;
            font-weight: normal;
            font-size: 20px;
            color: #666666;
          }
          .l_t_c {
            height: 100%;
            line-height: 3;
          }
          .t_d {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 20px;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>
