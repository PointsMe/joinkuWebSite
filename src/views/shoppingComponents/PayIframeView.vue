<template>
  <div class="pay-iframe-view">
    <el-dialog
      v-model="dialogVisible"
      width="70%"
      height="80%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="handleClose"
    >
      <div class="pay-iframe-view-content">
        <iframe
          :src="url"
          width="100%"
          height="800px"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const dialogVisible = ref<boolean>(false);
const url = ref<string>("");
const handleClose = (done: () => void) => {
  done();
};
const showPayIframeView = (data: string) => {
  dialogVisible.value = true;
  url.value = data;
};
defineExpose({
  showPayIframeView,
});
</script>
<style scoped lang="less">
.pay-iframe-view {
  .pay-iframe-view-content {
  }
}
</style>
