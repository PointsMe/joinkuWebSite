<template>
  <div class="index-view">
    <BannerView />
    <BannerOne />
    <BannerTwo />
    <BannerThree />
    <BannerFour />
    <BannerFive />
    <BannerSix />
    <BannerSeven />
    <BannerEight />
    <BannerNine />
  </div>
</template>

<script setup lang="ts">
import BannerView from '@/views/indexComponents/BannerView.vue'
import BannerOne from '@/views/indexComponents/BannerOne.vue'
import BannerTwo from '@/views/indexComponents/BannerTwo.vue'
import BannerThree from '@/views/indexComponents/BannerThree.vue'
import BannerFour from '@/views/indexComponents/BannerFour.vue'
import BannerFive from '@/views/indexComponents/BannerFive.vue'
import BannerSix from '@/views/indexComponents/BannerSix.vue'
import BannerSeven from '@/views/indexComponents/BannerSeven.vue'
import BannerEight from '@/views/indexComponents/BannerEight.vue'
import BannerNine from '@/views/indexComponents/BannerNine.vue'
</script>

<style scoped lang="less">
.index-view {
  width: 100%;
}
</style>
