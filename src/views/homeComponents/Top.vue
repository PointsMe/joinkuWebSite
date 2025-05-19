<template>
  <el-header class="navbar">
    <div class="navbar-container">
      <!-- Logo部分 -->
      <div class="navbar-brand">
        <img src="@/assets/new-logo.png" alt="Joinku" class="logo" />
      </div>

      <!-- 主导航链接 -->
      <el-menu
        :default-active="activeIndex"
        class="navbar-menu"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="/">主页</el-menu-item>
        <el-menu-item index="/mall">商城</el-menu-item>
        <el-menu-item index="/service">服务支持</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>
        <el-menu-item index="/contact">联系我们</el-menu-item>
      </el-menu>

      <!-- 右侧操作区 -->
      <div class="navbar-end">
        <!-- 语言选择器 -->
        <el-select
          v-model="currentLanguage"
          class="language-selector"
          size="small"
          @change="changeLanguage"
        >
          <el-option label="中文" value="zh" />
          <el-option label="English" value="en" />
        </el-select>

        <!-- 用户操作按钮 -->
        <div class="auth-buttons">
          <el-button type="primary" plain size="default">登录</el-button>
          <el-button type="primary" size="default">注册</el-button>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
defineOptions({
  name: 'topView'
})
const route = useRoute()
const router = useRouter()

const currentLanguage = ref('zh')
const activeIndex = computed(() => route.path)

const handleSelect = (key: any) => {
  router.push(key)
}

const changeLanguage = () => {
  console.log('Language changed to:', currentLanguage.value)
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 64px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0;
}

.navbar-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo {
  height: 36px;
  width: auto;
}

:deep(.navbar-menu) {
  border: none;
  margin-left: 40px;
  background-color: transparent;
}

:deep(.el-menu--horizontal > .el-menu-item) {
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  padding: 0 16px;
  color: #333333;
}

:deep(.el-menu--horizontal > .el-menu-item.is-active) {
  color: var(--el-color-primary);
  border-bottom: 2px solid var(--el-color-primary);
}

.navbar-end {
  display: flex;
  align-items: center;
  gap: 24px;
}

.language-selector {
  width: 100px;
}

.auth-buttons {
  display: flex;
  gap: 12px;
}

:deep(.el-button) {
  padding: 8px 20px;
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  .navbar-container {
    padding: 0 10px;
  }

  :deep(.navbar-menu) {
    display: none;
  }

  .language-selector {
    width: 80px;
  }

  .auth-buttons {
    gap: 8px;
  }
}
</style>
