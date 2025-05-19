<template>
  <div class="img-view">
    <div class="tag-row" v-for="(row, rowIndex) in tagRows" :key="rowIndex">
      <button
        v-for="tag in row"
        :key="tag.name"
        class="tag-btn"
        :class="{
          selected: tag.selected,
          disabled: tag.disabled
        }"
        :disabled="tag.disabled"
        @click="selectTag(tag)"
      >
        {{ $t(tag.name) }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { i18n } from '@/lang/index'
interface Tag {
  name: string
  disabled: boolean
  selected: boolean
}

// 标签数据，分两行
const tags = ref<Tag[]>([
  { name: 'bannerFour.bar', disabled: true, selected: false },
  { name: 'bannerFour.fastFood', disabled: false, selected: false },
  { name: 'bannerFour.snackBar', disabled: false, selected: false },
  { name: 'bannerFour.iceCream', disabled: false, selected: false },
  { name: 'bannerFour.foodTruck', disabled: true, selected: false },
  { name: 'bannerFour.coffeeShop', disabled: true, selected: false },
  { name: 'bannerFour.cocktailBar', disabled: false, selected: false },
  { name: 'bannerFour.teaShop', disabled: false, selected: false },
  { name: 'bannerFour.beerBar', disabled: true, selected: false }
])

// 分两行显示
const tagRows = ref<Tag[][]>([
  tags.value.slice(0, 5),
  tags.value.slice(5)
])

// 选中标签
function selectTag(tag: Tag) {
//   if (tag.disabled) return
//   tags.value.forEach(t => (t.selected = false))
//   tag.selected = true
}
</script>

<style scoped lang="less">
.img-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  width: 100%;
}

.tag-row {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
}

.tag-btn {
  min-width: 250px;
  height: 60px;
  margin: 0 16px;
  border: 1px solid #d9d9d9;
  border-radius: 32px;
  background: #fff;
  color: #888;
  font-size: 32px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
  opacity: 1;

  &.selected {
    border-color: #222;
    color: #222;
    font-weight: 700;
    background: #fff;
    opacity: 1;
  }

  &.disabled {
    border-color: #eee;
    color: #eee;
    background: #fff;
    // cursor: not-allowed;
    opacity: 0.9;
  }
}
</style>

