<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
    <el-radio-group v-model="radio1">
        <el-radio v-for="(itemChil, chilIndex) in props.parents.items" 
        :key="chilIndex" 
        :value="itemChil.id" 
         @click.native.prevent="clickitem(itemChil.id,false)" :label="itemChil.unit"
        >
            <div class="radio-con">
                <label v-if="itemChil.value || itemChil.unit">{{ itemChil.value }}{{ itemChil.unit }}/</label>
                <span :class="!chilIndex ? 'oragin' : 'grey'">€{{
                    itemChil.sellPrice }}</span>
            </div>
        </el-radio>
    </el-radio-group>
</template>
<script setup lang="ts">
import{precreateApi} from "@/apis/goods"
import {useShoppingCartStore} from "@/stores/modules/shoppingCart"
import {useUserStore} from "@/stores/modules/user"
import { ElMessage } from 'element-plus'
const emits = defineEmits(['changeOrderList'])
const shoppingCartStore = useShoppingCartStore()
const userStore = useUserStore()
const props = defineProps({
    parents: {
        type: Object,
        required: true
    },
    data: {
        type: Object,
        required: true
    },
});
const radio1 = ref<string>()
const addPrecreate = async () => {
    const params = shoppingCartStore.cart
    const current = params.items.find((iv: any)=> iv.type === 119)
    if(current){
        params.type = 102
    }else{
        params.type = 100
    }
    params.items = params.items.filter(iv => iv.count)
    console.log("请求参数：",params)
    const { data } = await precreateApi(params)
    console.log("precreateApi===>",data)
    return data
}
const clickitem = async(e: any,isAdd:boolean) => {
    console.log(e)
    if(props.parents.maxSelectCount === props.parents.minSelectCount  && !isAdd){
        return 
    }
    if(!userStore.token){
        return ElMessage.warning("请先登录")
    }
    const params = shoppingCartStore.cart
    if (e === radio1.value) {
        params.items = params.items.filter(iv => iv.itemId !== e)
        shoppingCartStore.setCart(params)
        const data = await addPrecreate()
        if(data){
            radio1.value = ''
            emits('changeOrderList',data)
        }
    } else {
        params.items.push({
            "type": props?.data?.type,
            "itemId": props?.data?.id,
            "count": 1
        })
        shoppingCartStore.setCart(params)
        const data = await addPrecreate()
        if(data){
            radio1.value = e
            emits('changeOrderList',data)
        }
    }
    
}
onMounted(()=>{
    console.log("props.data===>",props.data,props.parents)
    if(props.parents.maxSelectCount === props.parents.minSelectCount){
        clickitem(props.parents.items[0].id,true)
    }
})
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
}
</style>