<template>
    <div class="tab-register">
        <div class="step-2">
            <div @click="changeRegisterStyle('1')" :class="props.registerStyle === '1' ? 'chooseed' : 'not-choose'">
                {{$t('aboutLogin.telLogin')}}
                <span v-if="props.registerStyle === '1'">
                </span>
            </div>
            <div @click="changeRegisterStyle('2')" :class="props.registerStyle === '2' ? 'chooseed' : 'not-choose'">
                {{$t('aboutLogin.emailLogin')}}
                <span v-if="props.registerStyle === '2'">
                </span>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
//定义props变量接收defineProps返回值
const props = defineProps({
    registerStyle: {
        type: String,
        required: true
    }
});
const emit = defineEmits(['setRegisterStyle']);
const changeRegisterStyle = (value: string) => {
    emit('setRegisterStyle', value)
}
</script>
<style scoped lang="less">
.tab-register {
    height: 40px;
    width: 100%;

    .not-choose {
        color: #BDBDBD;
    }

    .chooseed {
        color: #387533;
    }

    .step-2 {
        width: 100%;
        height: 100%;
        // position: relative;
        color: #BDBDBD;

        div {
            // position: absolute;
            // top: 50%;
            // transform: translateY(-50%);
            cursor: pointer;
            float: left;
            position: relative;
        }
        >div:first-child {
            >span {
                display: block;
                position: absolute;
                bottom: -5px;
                width: 20px;
                height: 1px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #387533;
            }
        }

        >div:last-child {
            // left: 100px;
            margin-left: 20px;
            >span {
                display: block;
                position: absolute;
                bottom: -5px;
                width: 20px;
                height: 1px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #387533;
            }
        }
    }

}
</style>