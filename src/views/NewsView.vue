<template>
    <div class="news-view-div">
        <div class="content">
            <div class="title">
                <p>新闻</p>
                <p>
                    新闻新闻新闻新闻
                </p>
                <div>
                    <el-input size="large" style="height: 100%;" placeholder="Please input">
                        <template #append>
                            <div>
                                <el-icon>
                                    <Search />
                                </el-icon>
                                <span>搜索</span>
                            </div>
                        </template>
                    </el-input>
                </div>
            </div>
            <div class="title-list">
                <p>
                    热点、推荐
                </p>
                <el-row :gutter="12">
                    <el-col :span="6">
                        <div class="col-content">
                            <div class="word">
                                <p>铜锣烧是一种烤制面皮内置红豆沙等夹心的甜点</p>
                            <p>也是日本卡通人物哆啦A梦最爱的食物</p>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="6">
                        <div class="col-content">
                            <div class="word">
                                <p>铜锣烧是一种烤制面皮内置红豆沙等夹心的甜点</p>
                            <p>也是日本卡通人物哆啦A梦最爱的食物</p>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="6">
                        <div class="col-content">
                            <div class="word">
                                <p>铜锣烧是一种烤制面皮内置红豆沙等夹心的甜点</p>
                            <p>也是日本卡通人物哆啦A梦最爱的食物</p>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="6">
                        <div class="col-content">
                            <div class="word">
                                <p>铜锣烧是一种烤制面皮内置红豆沙等夹心的甜点</p>
                            <p>也是日本卡通人物哆啦A梦最爱的食物</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
<style scoped lang="less">
.news-view-div {
    width: 100%;
    background: #F7F7F7;
    .content{
        width: 1280px;
        margin: auto;
        padding-top: 90px;
        .title-list{
            margin-top: 60px;
            margin-bottom: 60px;
            .col-content{
                width: 100%;
                height: 220px;
                padding: 20px;
                background-image: url('@/assets/banner-5-1.png');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                position: relative;
                .word{
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    >p:first-child{
                        font-family: Source Han Sans SC, Source Han Sans SC;
font-weight: 500;
font-size: 16px;
color: #F7F7F7;
                    }
                    >p:last-child{
                        font-family: Source Han Sans SC, Source Han Sans SC;
font-weight: 400;
font-size: 14px;
color: #999999;
                    }
                }
            }
            >p{
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 18px;
                color: #1E1E1E;
            }
        }
        .title{
            text-align: center;
            >p:first-child{
                font-family: Inter, Inter;
                margin-top: 120px;
                font-weight: normal;
                font-size: 60px;
                color: #1E1E1E;
            }
            >p:last-child{
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 18px;
                color: #1E1E1E;
            }
            >div{

                width: 848px;
                height: 50px;
                margin: auto;
                margin-top: 36px;
            }
        }
    }
    p {
        margin: 0;
        padding: 0;
    }
}
</style>