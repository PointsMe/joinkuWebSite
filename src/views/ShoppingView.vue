<template>
  <div class="shop-view">
    <div class="top">
      <p>{{ $t('shopping.title') }}</p>
      <span v-if="!userStore.token">
        {{ $t('shopping.membershipPromotion') }}
        <span style="color: #fed15f;cursor: pointer;" @click="goRegister">{{ $t('shopping.registerNow') }}</span>&nbsp;&nbsp;&nbsp;
        <el-icon class="icon-right-shop">
          <Right />
        </el-icon>
      </span>
    </div>
    <!-- <ShoppingIndex /> -->
    <ShoppingNewIndex />
  </div>
</template>
<script setup lang="ts">
// import ShoppingIndex from '@/views/shoppingComponents/ShoppingIndex.vue'
import ShoppingNewIndex from '@/views/shoppingComponents/ShoppingNewIndex.vue'
import { useUserStore } from '@/stores/modules/user'
import {
  Right,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import {onUnmounted} from "vue"
defineOptions({
  name: 'shoppingView'
})
onUnmounted(()=>{
  window.localStorage.setItem("shoppingTab","1001");
})
const userStore = useUserStore()
const router = useRouter()
const goRegister = () => {
  router.push('/module/register')
}
</script>
<style scoped lang="less">
.shop-view {
  background-color: #f7f7f7;
  width: 100%;
  padding-bottom: 150px;

  p {
    margin: 0;
    padding: 0;
  }

  .top {
    width: 100%;
    height: 400px;
    background-image: url('@/assets/fastsImages/shopping.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-left: 320px;
    padding-top: 116px;
    margin-top: 90px;

    > p:first-child {
      font-family: Inter, Inter;
      font-weight: normal;
      font-size: 60px;
      color: #f6f6f4;
    }

    > span {
      font-family: Inter, Inter;
      font-weight: 500;
      font-size: 18px;
      color: #ffffff;
      margin-top: 14px;
      padding-bottom: 12px;
      position: relative; /* 使伪元素能够相对于它定位 */
      .icon-right-shop {
        display: block;
        position: absolute;
        right: -10px;
        top: 0;
        transform: translateY(30%);
      }
    }
    > span::after {
        content: ''; /* 创建伪元素 */
        position: absolute; /* 绝对定位 */
        left: 0; /* 与原始元素左对齐 */
        bottom: 0; /* 与原始元素底部对齐 */
        width: 100%; /* 宽度为100%，即与原始元素相同 */
        height: 1px; /* 下划线的高度 */
        background-color: #ffffff; /* 下划线的颜色 */
    }
  }
}
</style>
