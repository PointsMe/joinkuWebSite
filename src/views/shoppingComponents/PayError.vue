<template>
    <div class="pay-suc-m">
        <el-dialog :width="'33.8%'" :show-close="false" custom-class="no-header-dialog" :close-on-click-modal="false"
            :destroy-on-close="true" v-model="centerDialogVisible" center>
            <div class="content">
                <img class="t-bg" src="@/assets/fastsImages/pay-bg.png" alt="">
                <div class="c_i">
                    <img class="t-j" src="@/assets/fastsImages/pay-err.png" alt="">
                    <p class="t-i">
                        支付失败
                    </p>
                    <p class="t-b-i">
                        抱歉，当前交易未能完成，请检查以下信息
                    </p>
                    <p class="t_c">
                        1.账户余额或信用额度是否充足
                    </p>
                    <p class="t_c">
                        2.网络连接是否稳定
                    </p>
                </div>
                <div class="close">
                    <el-icon @click="closeDrawer">
                        <Close />
                    </el-icon>
                    <!-- <el-icon><CloseBold /></el-icon> -->
                </div>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-row :gutter="12">
                        <el-col :span="12">
                            <el-button class="cancel" @click="closeDrawer">返回商城</el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-button class="sure" type="primary" @click="againPay">
                                订单详情
                            </el-button>
                        </el-col>
                    </el-row>
                </div>
            </template>

        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Close } from '@element-plus/icons-vue'
import { useShoppingCartStore } from '@/stores/modules/shoppingCart'
import { useCommonStore } from '@/stores/modules/common'
import { useRouter } from 'vue-router'
const router = useRouter()
const shoppingCartStore = useShoppingCartStore()
const commonStore = useCommonStore()
const centerDialogVisible = ref(false)
const showModal = (orderId:string) => {
    shoppingCartStore.setOrderId(orderId);
    centerDialogVisible.value = true
}
const closeDrawer = () => {
    router.replace("/shopping");
    shoppingCartStore.resetOrderId()
    centerDialogVisible.value = false
}
/*
    重新支付 
*/
const againPay = () => {
    router.replace("/shopping");
    // centerDialogVisible.value = false
    centerDialogVisible.value = false;
    commonStore.setShowOrderDetailView(true);
}
defineExpose({
    showModal
})
</script>
<style scoped lang="less">
.pay-suc-m {
    padding: 0 50px;

    .dialog-footer {
        width: 100%;
        padding: 50px;
        border-radius: 10px;
        background-color: #ffffff;

        .cancel {
            width: 100%;
            height: 50px;
            border-radius: 34px 34px 34px 34px;
            border: 1px solid #000000;
        }

        .sure {
            width: 100%;
            height: 50px;
            background: #1A1A1A;
            border-radius: 34px 34px 34px 34px;
        }
    }

    .content {
        width: 100%;
        height: 536px;
        margin: auto;
        text-align: center;
        padding-bottom: 74px;
        // background-color: #1A1A1A;
        position: relative;

        .t-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 0;
        }

        .close {
            position: absolute;
            right: 30px;
            top: 20px;
            font-size: 24px;
            cursor: pointer;
        }

        .c_i {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 50%;
            top: 65%;
            transform: translate(-50%, -50%);

            p {
                margin: 0;
                padding: 0;
            }

            .t-j {
                width: 230px;
                height: 230px;
            }

            .t-i {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 28px;
                color: #FFFFFF;
                margin-top: 20px;
            }

            .t-b-i {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 14px;
                color: #FFFFFF;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .t_c{
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 14px;
                color: #999999;
            }
        }

    }
}
</style>