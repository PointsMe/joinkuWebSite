<template>
  <div class="banner-10-div">
    <div class="content">
      <el-row>
        <el-col :span="10" class="col-con">
          <div class="col-left">
            <p>{{ $t("bannerTen.contactUs") }}</p>
            <p>{{ $t("bannerTen.contactDescription") }}</p>
          </div>
          <div class="con-left-i">
            <p>{{ $t("bannerTen.email") }}: info@yine.it</p>
            <p>{{ $t("bannerTen.address") }}: Via Procaccini 11, 20154 – Milano (MI)</p>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="col-right">
            <el-form
              ref="formRef"
              :key="formKey"
              :label-position="'top'"
              style="width: 100%"
              label-width="auto"
              :model="formLabelAlign"
              :rules="rules"
            >
              <el-row :gutter="12">
                <el-col :span="12">
                  <el-form-item
                    :label="$t('bannerTen.form.name')"
                    :label-position="'top'"
                    prop="name"
                  >
                    <el-input
                      class="bg-input"
                      :placeholder="$t('bannerTen.form.namePlaceholder')"
                      size="large"
                      v-model="formLabelAlign.name"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    :label="$t('bannerTen.form.email')"
                    :label-position="'top'"
                    prop="email"
                  >
                    <el-input
                      class="bg-input"
                      :placeholder="$t('bannerTen.form.emailPlaceholder')"
                      size="large"
                      v-model="formLabelAlign.email"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    :label="$t('bannerTen.form.phone')"
                    :label-position="'top'"
                    prop="tel"
                  >
                    <el-input
                      class="bg-input"
                      :placeholder="$t('bannerTen.form.phonePlaceholder')"
                      size="large"
                      v-model="formLabelAlign.tel"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    :label="$t('bannerTen.form.company')"
                    :label-position="'top'"
                    prop="componey"
                  >
                    <el-input
                      class="bg-input"
                      :placeholder="$t('bannerTen.form.companyPlaceholder')"
                      size="large"
                      v-model="formLabelAlign.componey"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item
                    :label="$t('bannerTen.form.address')"
                    :label-position="'top'"
                    prop="address"
                  >
                    <el-input
                      class="bg-input"
                      :placeholder="$t('bannerTen.form.addressPlaceholder')"
                      size="large"
                      v-model="formLabelAlign.address"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item
                    :label="$t('bannerTen.form.message')"
                    :label-position="'top'"
                    prop="message"
                  >
                    <el-input
                      :rows="6"
                      class="bg-input"
                      type="textarea"
                      :placeholder="$t('bannerTen.form.messagePlaceholder')"
                      size="large"
                      v-model="formLabelAlign.message"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <div class="btn-div">
                    <el-button class="btn" @click="sendMessage">{{
                      $t("bannerTen.form.sendMessage")
                    }}</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed, ref } from "vue";
import { addNotificationApi } from "@/apis/common";
import { ElMessage, ElLoading } from "element-plus";
import { i18n } from "@/lang/index";
import { useCommonStore } from "@/stores/modules/common";
import { getRandomString } from "@/utils/index";
defineOptions({
  name: "BannerTen",
});
const formKey = ref(getRandomString(8));
const commonStore = useCommonStore();
const formRef = ref<any>(null);
const formLabelAlign = reactive({
  name: "",
  email: "",
  tel: "",
  address: "",
  componey: "",
  message: "",
});
const rules = computed(() => {
  return {
    name: [
      {
        required: true,
        message: i18n.global.t("bannerTen.form.namePlaceholder"),
        trigger: "blur",
      },
    ],
    email: [
      {
        required: true,
        message: i18n.global.t("bannerTen.form.emailPlaceholder"),
        trigger: "blur",
      },
    ],
    tel: [
      {
        required: true,
        message: i18n.global.t("bannerTen.form.phonePlaceholder"),
        trigger: "blur",
      },
    ],
    address: [
      {
        required: true,
        message: i18n.global.t("bannerTen.form.addressPlaceholder"),
        trigger: "blur",
      },
    ],
    componey: [
      {
        required: true,
        message: i18n.global.t("bannerTen.form.companyPlaceholder"),
        trigger: "blur",
      },
    ],
    message: [
      {
        required: true,
        message: i18n.global.t("bannerTen.form.messagePlaceholder"),
        trigger: "blur",
      },
    ],
  };
});

const loading = ref<any>(null);
const sendMessage = async () => {
  if (!formRef.value) return;
  console.log("====onSubmit===>", formRef);
  formRef.value.validate(async (valid: any) => {
    if (valid) {
      console.log("====onSubmit===>", formRef);
      const params = {
        msg_type: "interactive",
        card: {
          elements: [
            {
              tag: "div",
              text: {
                content: `姓名： ${formLabelAlign.name}`,
                tag: "lark_md",
              },
            },
            {
              tag: "div",
              text: {
                content: `机构： ${formLabelAlign.componey}`,
                tag: "lark_md",
              },
            },
            // {
            //   tag: "div",
            //   text: {
            //     content: `增值税号：  ${formLabelAlign.message}`,
            //     tag: "lark_md",
            //   },
            // },
            {
              tag: "div",
              text: {
                content: `邮箱： ${formLabelAlign.email}`,
                tag: "lark_md",
              },
            },
            {
              tag: "div",
              text: {
                content: `电话：  ${formLabelAlign.tel}`,
                tag: "lark_md",
              },
            },
            {
              tag: "div",
              text: {
                content: `地址：  ${formLabelAlign.address}`,
                tag: "lark_md",
              },
            },
            {
              tag: "div",
              text: {
                content: `城市：  ${formLabelAlign.message}`,
                tag: "lark_md",
              },
            },
            {
              tag: "div",
              text: {
                content: `消息： ${formLabelAlign.message}`,
                tag: "lark_md",
              },
            },
          ],
          header: {
            title: {
              content: "Fast Simple",
              tag: "plain_text",
            },
          },
        },
      };
      console.log("params===>", params);
      try {
        loading.value = ElLoading.service({
          lock: true,
          text: "加载中",
          background: "rgba(0, 0, 0, 0.7)",
        });
        const res = await addNotificationApi(params);
        console.log("res===>", res);
        if (res) {
          ElMessage.success("发送成功");
        } else {
          ElMessage.error("发送失败");
        }
      } catch (error) {
        console.log("error===>", error);
      } finally {
        loading.value.close();
      }
    }
  });
};
watch(
    () => commonStore.language,
  (newVal) => {
    console.log("newVal===>", newVal);
    formKey.value = getRandomString(8);
  }
);
</script>
<style scoped lang="less">
.banner-10-div {
  p {
    margin: 0;
    padding: 0;
  }

  width: 100%;
  background-color: #f2f0e4;
  // margin-top: 138px;

  .content {
    padding: 120px 320px;

    .col-right {
      // height: 480px;
      width: 100%;
      border: 1px solid #1a1a1a;
      border-radius: 5px;
      padding: 38px 30px;
      .btn-div {
        text-align: center;
        .btn {
          width: 278px;
          height: 48px;
          background: #1a1a1a;
          color: #ffffff;
          border-radius: 72px 72px 72px 72px;
        }
      }
    }

    .col-con {
      position: relative;
      // height: 480px;
      width: 100%;

      .con-left-i {
        position: absolute;
        left: 0;
        bottom: 0;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400;
        font-size: 16px;
        color: #1a1a1a;
      }

      .col-left {
        > p:first-child {
          font-weight: bold;
          font-size: 52px;
          color: #1a1a1a;
        }

        > p:last-child {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 18px;
          color: #1a1a1a;
        }
      }
    }
  }
}
</style>
