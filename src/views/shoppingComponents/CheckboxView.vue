<template>
    <el-checkbox-group v-model="checkList" @change=changeCheckbox>
        <el-checkbox v-for="(itemChil, chilIndex) in props.checkboxList" :key="chilIndex" :label="itemChil.spec"
            :value="itemChil.id">
            <div class="radio-con">
                {{ itemChil.spec }}
                <span class="grey">
                    €{{ itemChil.sellPrice }}
                </span>
            </div>
        </el-checkbox>
    </el-checkbox-group>
</template>
<script setup lang="ts">
import {useUserStore} from "@/stores/modules/user"
import { ElMessage } from 'element-plus'
const userStore = useUserStore()
const props = defineProps({
    checkboxList: {
        type: Array<{
            spec: string,
            sellPrice: string,
            id: string
        }>,
        require: true
    },
    id: {
        type: String,
        require: true
    }
})
const checkList = ref<Array<string>>([])
const changeCheckbox = (e: Array<string>)=>{
    if(!userStore.token){
        return ElMessage.warning("请先登录")
    }
    console.log(e)
    checkList.value = e
}
</script>
<style scoped lang="less">
.radio-con {
    font-family: Source Han Sans SC, Source Han Sans SC;
    font-weight: 500;
    font-size: 14px;
    color: #646464;
}

.oragin {
    color: #FDB522;
}

.grey {
    color: #999999;
    font-family: DIN, DIN;
    font-weight: 500;
    font-size: 18px;
    color: #999999;
}
</style>