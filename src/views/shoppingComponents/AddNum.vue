<template>
    <div class="add-num-div">
        <span @click="reduceFn">
            <el-icon>
                <Minus />
            </el-icon>
        </span>
        <span>
            <el-input size="small" v-model="inputNum" placeholder="0" @input="changeInput" />
        </span>
        <span @click="increaseFn">
            <el-icon>
                <Plus />
            </el-icon>
        </span>
    </div>
</template>
<script setup lang="ts">
import { Minus, Plus } from '@element-plus/icons-vue'
import {debounce} from "@/utils/index"
import {useShoppingCartStore} from "@/stores/modules/shoppingCart"
import {useUserStore} from "@/stores/modules/user"
import{precreateApi} from "@/apis/goods"
import { ElMessage } from 'element-plus'
defineOptions({
    name: 'addNum'
})
const shoppingCartStore = useShoppingCartStore()
const userStore = useUserStore()
const emits = defineEmits(['changeOrderList'])
//定义props变量接收defineProps返回值
const props = defineProps({
    parents: {
        type: Object,
        required: false
    },
    data: {
        type: Object,
        required: false
    },
    inviteCode: {
        type: String,
        required: false
    }
});
const inputNum = ref<number>(0)
const changeInput = async (e: any) => {
    if(!userStore.token){
        return ElMessage.warning("请先登录")
    }
    console.log("changeInput===>",e)
    let value = 0
    if (parseInt(e) && parseInt(e) > 0) {
        value = parseInt(e) > props.parents?.maxSelectCount  ? props.parents?.maxSelectCount : parseInt(e);
    } else {
        value = props.parents?.minSelectCount ?? 1
    }
    const params = shoppingCartStore.cart
    const current = params.items.find(iv => iv.itemId === props?.data?.id)
    if (current) {
        current.count = value
    } else {
        params.items.push({
            "type": props?.data?.type,
            "itemId": props?.data?.id,
            "count": value
        })
    }
    shoppingCartStore.setCart(params)
    const data = await addPrecreate()
    if (data) {
        inputNum.value = value
        emits('changeOrderList', data)
    }
}


const reduce = async() => {
    console.log("reduce===>",props.parents,inputNum.value)
    if(!userStore.token){
        return ElMessage.warning("请先登录")
    }
    if (Number(inputNum.value) > 0) {
        const value = Number(inputNum.value) > props.parents?.minSelectCount ? Number(inputNum.value) - 1  : props.parents?.minSelectCount
        // const value = Number(inputNum.value) - 1
        const params = shoppingCartStore.cart
        const current = params.items.find(iv=>  iv.itemId === props?.data?.id)
        if(current){
            current.count = value
        }else{
            params.items.push({
                "type": props?.data?.type,
                "itemId": props?.data?.id,
                "count": value
            })
        }
        shoppingCartStore.setCart(params)
        const data = await addPrecreate()
        if(data){
            inputNum.value = value
            emits('changeOrderList',data)
        }
    }
}
const addPrecreate = async () => {
    if(!userStore.token){
        return ElMessage.warning("请先登录")
    }
    const params = shoppingCartStore.cart as any
    const tab = window.localStorage.getItem("shoppingTab") || '1001';
    console.log("请求参数：",params,tab)
    if(tab === '1003'){
        params.items = params.items.filter((iv: any)=> iv.type !== 119)
    }else{
        params.items = params.items.filter((iv: any)=> iv.type !== 119)
        params.items.push({
            "type": 119,
            "itemId": tab,
            "count": 1
        })
    }
    const current = params.items.find((iv: any)=> iv.type === 119)
    if(current){
        params.type = 102
    }else{
        params.type = 100
    }
    if(props.inviteCode){
        params.inviteCode = props.inviteCode
    }
    params.items = params.items.filter((iv: any)=> iv.count)
    shoppingCartStore.setCart(params)
    const { data } = await precreateApi(params)
    console.log("precreateApi===>",data)
    return data
    // return params
}
const increase = async () => {
    console.log("increase===>",props.parents,inputNum.value)
    const value = Number(inputNum.value) + 1 > props.parents?.maxSelectCount ? props.parents?.maxSelectCount : Number(inputNum.value) + 1
    const params = shoppingCartStore.cart
    const current = params.items.find(iv=>  iv.itemId === props?.data?.id)
    if(current){
        current.count = value
    }else{
        params.items.push({
            "type": props?.data?.type,
            "itemId": props?.data?.id,
            "count": value
        })
    }
    shoppingCartStore.setCart(params)
    const data = await addPrecreate()
    if(data){
        inputNum.value = value
        emits('changeOrderList',data)
    }
}
const reduceFn = debounce(reduce, 500)
const increaseFn = debounce(increase, 500)
onMounted(()=>{
    if(props.data?.type === 119){
        inputNum.value = 1
        increaseFn()
    }
})
</script>
<style scoped lang="less">
.add-num-div {
    width: 96px;
    height: 24px;
    position: relative;

    span {
        display: block;
    }

    >span:first-child {
        background-color: #F7F7F7;
        width: 24px;
        text-align: center;
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 1px;
        color: #BDBDBD;
        height: 24px;

        .el-icon {
            font-size: 16px;
            font-weight: bold;
            margin-top: 4px;
        }
    }

    >span:nth-child(2) {
        margin-left: 28px;
        // height: 20px;
        width: 40px;
        text-align: center;
    }

    >span:last-child {
        background-color: #F7F7F7;
        width: 24px;
        height: 24px;
        text-align: center;
        cursor: pointer;
        position: absolute;
        left: 72px;
        top: 1px;
        color: #1A1A1A;

        .el-icon {
            font-size: 16px;
            font-weight: bold;
            margin-top: 4px;
        }
    }
}
</style>