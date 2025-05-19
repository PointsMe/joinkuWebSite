<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
    <div>
        <el-checkbox-group v-if="props.parents.maxSelectCount > 1" class="g-b" v-model="checkList" @change="changeCheckBox">
            <el-checkbox v-for="(itemChil, chilIndex) in props.parents.items" :key="chilIndex" :label="itemChil.spec"
                :value="itemChil">
                <div class="c-b">
                    {{ itemChil.spec }} /{{ itemChil.value }}{{ itemChil.unit }}
                    <span class="mon">€{{ itemChil.sellPrice }}</span>
                </div>
            </el-checkbox>
        </el-checkbox-group>

        <el-radio-group style="margin-top: 0.1rem;" v-if="props.parents.maxSelectCount < 2" v-model="radio1">
            <el-radio v-for="(itemChil, chilIndex) in props.parents.items" 
                :key="chilIndex" 
                :value="itemChil.id" 
                @click.native.prevent="clickitem(itemChil)" :label="itemChil.unit"
                >
                    <div class="radio-con">
                       {{ itemChil.spec }} {{ itemChil.value }}{{ itemChil.unit }}/<span :class="!chilIndex ? 'oragin' : 'grey'">€{{
                            itemChil.sellPrice }}</span>
                    </div>
            </el-radio>
        </el-radio-group>
    </div>
</template>
<script setup lang="ts">
import {useShoppingCartStore} from "@/stores/modules/shoppingCart"
import{precreateApi} from "@/apis/goods"
import {useUserStore} from "@/stores/modules/user"
import { ElMessage } from 'element-plus'
const shoppingCartStore = useShoppingCartStore()
const userStore = useUserStore()
const emits = defineEmits(['changeOrderList'])
const props = defineProps({
    parents: {
        type: Object,
        required: true
    },
});
const checkList = ref([])
const changeCheckBox = async(e:any)=>{
    console.log(e)
    if(!userStore.token){
        return ElMessage.warning("请先登录")
    }
    const params = shoppingCartStore.cart
    params.items = params.items.filter(iv => {
        if (!props.parents.items.map((iv:any)=> iv.id).includes(iv.itemId)) {
            return true
        }
    })
    const arr = e.map((iv:any)=>{
        return {
            "type": iv.type,
            "itemId": iv.id,
            "count": 1
        }
    })
    params.items = params.items.concat(arr)
    shoppingCartStore.setCart(params)
    const data = await addPrecreate()
    if(data){
        radio1.value = e.id
        emits('changeOrderList',data)
    }
    checkList.value = e
}

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
const clickitem = async(e: any) => {
    if(!userStore.token){
        return ElMessage.warning("请先登录")
    }
    console.log(e)
    const params = shoppingCartStore.cart
    params.items = params.items.filter(iv => {
        if (!props.parents.items.map((iv:any)=> iv.id).includes(iv.itemId)) {
            return true
        }
    })
    if (e.id === radio1.value) {
        shoppingCartStore.setCart(params)
        const data = await addPrecreate()
        if(data){
            radio1.value = ''
            emits('changeOrderList',data)
        }
    } else {
        params.items.push({
            "type": e.type,
            "itemId": e.id,
            "count": 1
        })
        shoppingCartStore.setCart(params)
        const data = await addPrecreate()
        if(data){
            radio1.value = e.id
            emits('changeOrderList',data)
        }
    }
    
}



</script>
<style scoped lang="less"></style>