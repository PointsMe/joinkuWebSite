<template>
  <el-select
    v-model="value"
    :filterable="true"
    placeholder="+86"
    :allow-create="true"
    @change="changeCountry"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.name"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>
<script setup lang="ts">
defineOptions({
  name: "languageView",
});
import { ref } from "vue";
const emits = defineEmits(["changeEmail"]);
const value = ref("@gmail.com");
const options = ref([
  {
    name: "@gmail.com",
    value: "@gmail.com",
  },
//   {
//     name: "@qq.com",
//     value: "@qq.com",
//   },
//   {
//     name: "@163.com",
//     value: "@163.com",
//   },
]);
const changeCountry = (e: string) => {
  console.log(e);
  emits("changeEmail", e);
};
</script>
<style scoped lang="less">
.all-country {
  width: 120px;
  img {
    width: 15px;
    height: 15px;
  }
  > span {
    display: inline-block;
  }
  > span:first-child {
    margin-left: 20px;
  }
}
</style>
