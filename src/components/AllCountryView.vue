<template>
    <div>
        <el-select v-model="value" filterable placeholder="+86" style="width: 0.45rem;" @change="changeCountry">
            <el-option v-for="item in options" :key="item.num" :label="item.num" :value="item.num">
                <div class="all-country">
                    <img :src="item.icon" alt="">
                    <span>{{ item.name }}</span>
                    <span>({{ item.num }})</span>
                </div>
            </el-option>
        </el-select>
    </div>
</template>
<script setup lang="ts">
import countryJson from "@/utils/json"
import { onMounted } from 'vue';
defineOptions({
    name: 'allCountryView'
})
import { ref } from 'vue'
const emits = defineEmits(['changeCountry'])
const value = ref('+86')
const options = ref<Array<{
    icon: string,
    name: string,
    num: string
}>>([])
const changeCountry = (e: string) => {
    console.log(e)
    emits('changeCountry', e)
}
const getData = async () => {
    console.log(countryJson)
    const arr: Array<{
        icon: string,
        name: string,
        num: string
    }> = countryJson.map(item => {
        return {
            icon: item.flags.png,
            name: item.name.common,
            num: `${item.idd.root}${item.idd.suffixes.toString().replace(/,/g, '')}`
        }
    })
    options.value = arr
    console.log(arr)
}
onMounted(() => {
    getData()
})
</script>
<style scoped lang="less">
.all-country {
        width: 300px;

        img {
            width: 15px;
            height: 15px;
        }

        >span {
            display: inline-block;
        }

        >span:first-child {
            margin-left: 20px;
        }
    }
</style>