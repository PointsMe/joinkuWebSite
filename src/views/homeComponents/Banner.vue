<template>
  <div class="banner">
    <div class="banner-content">
      <h1 class="title">智能仓库管理，实现无缝运营</h1>
      <p class="subtitle">智能工具助力智能运营</p>
      <div class="button-group">
        <span class="primary-btn">联系我们</span>
      </div>
    </div>
    <div class="banner-two"></div>
    <div class="banner-two-i">精准盘点，智能管控</div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HomeBanner'
})
// 使用 setup 语法糖，目前不需要额外的逻辑
</script>

<style scoped lang="less">
.banner-two-i {
  color: #ffffff;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  z-index: 2;
  font-size: 20px;
  text-align: center;
}
.banner-two {
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 0px 0px 0px 0px;
  text-align: center;
  line-height: 80px;
  color: #ffffff;
}
.banner {
  width: 100%;
  height: 600px;
  background-image: url('@/assets/top1-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #ffffff;
  padding: 0 20px;
  max-width: 800px;
}

.title {
  font-size: 50px;
  font-weight: bold;
  /* margin-bottom: 1.5rem;
  line-height: 1.2; */
}

.subtitle {
  font-size: 16px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-btn {
  display: block;
  width: 187px;
  height: 60px;
  line-height: 60px;
  background: #6a8c69;
  border-radius: 85px 85px 85px 85px;
  color: #fff;
}

/* .primary-btn:hover {
  background-color: transparent;
  color: #ffffff;
} */

/* .secondary-btn {
  background-color: transparent;
  color: #ffffff;
} */

/* .secondary-btn:hover {
  background-color: #ffffff;
  color: #000000;
} */

/* 响应式设计 */
@media (max-width: 768px) {
  .banner {
    height: 400px;
  }

  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .button-group {
    flex-direction: column;
    align-items: center;
  }

  .primary-btn,
  .secondary-btn {
    width: 200px;
  }
}
</style>
