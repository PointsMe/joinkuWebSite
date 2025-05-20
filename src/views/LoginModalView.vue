<template>
  <div class="login-modal-view">
    <el-dialog
      v-model="dialogVisible"
      title=""
      width="500"
      :close-on-click-modal="false"
      :before-close="handleClose"
    >
      <div class="content">
        <LoginComponents/>
      </div>
      <!-- <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
        </div>
      </template> -->
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import LoginComponents from '@/views/loginComponents/LoginComponents.vue'
import { ref } from "vue";
import { ElMessageBox } from "element-plus";

const dialogVisible = ref(false);
const showLoginModal = () => {
  dialogVisible.value = true;
};
const handleClose = (done: () => void) => {
    done();
//   ElMessageBox.confirm("Are you sure to close this dialog?")
//     .then(() => {
//       done();
//     })
//     .catch(() => {
//       // catch error
//     });
};
defineExpose({
  showLoginModal
})
</script>
<style scoped lang="less"></style>
