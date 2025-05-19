<template>
    <div class="updata-view-modal">
        <el-dialog v-model="visible" :show-close="false" width="31.25%" :close-on-click-modal="false"
            :destroy-on-close="true">
            <template #header="{ close, titleId, titleClass }">
                <div class="my-header">
                    <el-icon class="el-icon--left" @click="close">
                        <Close />
                    </el-icon>
                </div>
            </template>
            <div class="all-con">
                <div class="content">
                    <p class="t-i">
                        即将升级为完整版
                    </p>
                    <p class="t-s">
                        打印机数量已达上限，继续添加后需在云服务器【打印设置】配置，无法通过平板添加，此操作无额外费用
                    </p>
                </div>
                <div class="footer-btns">
                    <el-row :gutter="12">
                        <el-col :span="24">
                            <el-button class="btns">知道了</el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { CircleCloseFilled, Close } from '@element-plus/icons-vue'

const visible = ref(false)
const showModal = () => {
    visible.value = true
}
defineExpose({
    showModal
})
</script>

<style scoped lang="less">
.updata-view-modal {
    .all-con {
        text-align: center;
        padding: 44px 91px 40px 91px;
        .footer-btns {

            .btns {
                height: 50px;
                width: 100%;
                border-radius: 8px 8px 8px 8px;
                border: 1px solid #1B1B1B;
                background-color: #1B1B1B;
                color: #fff;
            }
        }

        .content {
            .t-i {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: bold;
                font-size: 32px;
                color: #1A1A1A;
            }

            .t-s {
                font-family: Source Han Sans SC, Source Han Sans SC;
font-weight: 400;
font-size: 16px;
color: #1A1A1A;
padding-top: 30px;
padding-bottom: 40px;
            }
        }
    }


    .my-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 16px;

        .el-icon--left {
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 24px;
        }
    }
}
</style>