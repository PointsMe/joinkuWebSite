<template>
  <div class="package-section">
    <div class="section-header">
      <div class="title">
        <div>精选套餐</div>
        <div>
          <span class="left"> 限时优惠套餐</span>
          <span class="right">更多 >></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 使用 Vue 3 的 Composition API
</script>

<style scoped lang="less">
.package-section {
  width: 100%;
  margin: auto;
  background: #f8f8f8;
}

.section-header {
  width: 1280px;
  padding: 20px;
  margin: auto;
  .title {
    font-size: 24px;
    font-weight: bold;
    > div:first-child {
      text-align: left;
    }
    > div:last-child {
      width: 100%;
      text-align: left;
      font-size: 12px;
      color: #1b1b1b;
      .right {
        display: block;
        float: right;
        color: #666;
        cursor: pointer;
      }
    }
  }
}
</style>
