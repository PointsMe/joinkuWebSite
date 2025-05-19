<template>
    <div class="banner-top-div">
        <div class="top">
            <div class="container">
                <!-- Logo -->
                <img src="@/assets/fastsImages/logo.png" alt="Fast Simple Logo" />

                <!-- Navigation Menu -->
                <div class="nav-menu">
                    <el-menu mode="horizontal" :ellipsis="false" class="menu">
                        <el-menu-item index="1" @click="goToPage('index')">{{$t('navigation.home')}}</el-menu-item>
                        <el-menu-item index="2" @click="goToPage('shopping')">{{$t('navigation.shop')}}</el-menu-item>
                        <!-- <el-menu-item index="3" @click="goToPage('news')">{{$t('navigation.news')}}</el-menu-item> -->
                        <el-menu-item index="4" @click="goToPage('server')">{{$t('navigation.support')}}</el-menu-item>
                        <el-menu-item index="5" @click="goToPage('about')">{{$t('navigation.about')}}</el-menu-item>
                        <el-menu-item index="6" @click="goToPage('contact')">{{$t('navigation.contact')}}</el-menu-item>
                        <el-menu-item index="7">
                            <el-dropdown @command="handleCommand" trigger="click">
                                <span class="language-selector">
                                    {{ languageList.find(iv=>iv.code === commonStore.language)?.label }}
                                     <el-icon>
                                        <ArrowDown />
                                    </el-icon>
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item v-for="(item, index) in languageList"
                                            :command="item.code" :key="index">{{ item.label }}</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div class="right-section">
                    <el-button v-if="!userStore.token" class="login-btn" type="pain" @click="login">{{$t('user.loginRegister')}}</el-button>
                    <div v-else>
                        <el-dropdown trigger="click">
                            <span class="language-selector">
                                <img src="@/assets/fastsImages/user.png" alt="">
                                <el-tooltip
                                    class="box-item"
                                    effect="dark"
                                    :content="userStore.userInfo.username"
                                    placement="top-start"
                                >
                                 <div>
                                  
                                {{ `${(userStore.userInfo.username).substring(0,3)}...` }} 
                                 </div>
                                </el-tooltip>
                                  <!-- 18376614866 -->
                                <el-icon>
                                    <ArrowDown />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="toMyOrder">{{$t('user.myOrders')}}</el-dropdown-item>
                                    <el-dropdown-item @click="loginOut">{{$t('user.logout')}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {languageList} from "@/http/config"
import { useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/modules/user'
import {useCommonStore} from "@/stores/modules/common"
import { useShoppingCartStore } from "@/stores/modules/shoppingCart"
const current = getCurrentInstance()?.appContext.config.globalProperties as any;
// 获取路由实例
const router = useRouter()
const userStore = useUserStore()
const commonStore = useCommonStore()
const shoppingCartStore = useShoppingCartStore()
const handleCommand = (command: string) => {
    current.$i18n.locale = command
    commonStore.setLanguageFn(command)
}
// 跳转到首页的方法
const goToPage = (value: any) => {
    router.push(`/${value}`)
}
const login = () => {
    router.push(`/module/login`)
}
const loginOut = () => {
    userStore.resetToken()
    userStore.resetUserInfo()
    shoppingCartStore.resetCart()
    shoppingCartStore.resetOrderId()
    router.push(`/module/login`)
}
const toMyOrder = ()=> {
    commonStore.setShowOrderListView(true)
}
onMounted(() => {
    console.log(userStore.userInfo)
})
</script>
<style scoped lang="less">
.banner-top-div {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    background-color: #111111;

    .top {
        height: 90px;
        width: 1280px;
        margin: auto;


        .container {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            //   padding: 0 120px;
            box-sizing: border-box;

            >img {
                width: 187.6px;
                height: 36px;
            }

            .nav-menu {
                flex: 1;
                display: flex;
                justify-content: center;

                :deep(.menu) {
                    background-color: transparent;
                    border: none;

                    .el-menu-item {
                        color: #ffffff;
                        font-size: 16px;
                        padding: 0 30px;

                        &:hover,
                        &.is-active {
                            color: #409eff;
                            background-color: transparent;
                        }
                    }
                }
            }

            .right-section {
                display: flex;
                align-items: center;
                gap: 20px;

                .language-selector {
                    color: #ffffff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 4px;

                    img {
                        width: 20px;
                        height: 20px;
                    }
                }

                .login-btn {
                    height: 40px;
                    padding: 0 24px;
                    border-radius: 20px;
                    background-color: #111111 !important;
                    color: #ffffff;
                }
            }
        }
    }
}
</style>
