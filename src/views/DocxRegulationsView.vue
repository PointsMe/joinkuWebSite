<template>
  <div class="word-tips-view">
  <div class="title">
      <div>
        <el-icon><Document /></el-icon>
        <span>{{ $t('regulationsTips.title') }}</span>
      </div>
      <!-- <div>
        {{ $t('wordTips.updateDate') }}
      </div> -->
  </div>
    <div class="content" v-html="content"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import mammoth from 'mammoth';
import { Document } from '@element-plus/icons-vue';
import { useCommonStore } from "@/stores/modules/common";
const commonStore = useCommonStore();
const content = ref('');
async function extractContent() {
    try {
        let url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/word/${commonStore.language}-regulations.docx`;
        // let url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/word/it-privice.docx`;
        console.log(url);
        const response = await fetch(url);
        console.log(response);
        // 读取文件
        const arrayBuffer = await response.arrayBuffer();
 
        // 自定义样式映射
        const options = {
            styleMap: ["p[style-name='注意事项'] => div.alert-warning", "p[style-name='重要提示'] => div.alert-danger"],
        };
 
        const result = await mammoth.convertToHtml({ arrayBuffer }, options);
        content.value = result.value;
 
        if (result.messages.length > 0) {
            console.warn('转换有些小问题:', result.messages);
        }
    } catch (error) {
        console.error('转换文档失败:', error);
    }
}
onMounted(() => {
    extractContent();
})
</script>
<style scoped lang="less">
.word-tips-view {
    .title{
        font-family: Inter, Inter;
        font-weight: 500;
        font-size: 24px;
        color: #1E1E1E;
        text-align: center;
        padding: 20px 0;
        >div:first-child{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            .el-icon{
                color: #FDB522;
            }
        }
    }
  .content{
    padding: 20px;
  }
}
</style>
