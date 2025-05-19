<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">hello world {{ msg }}</div>
</template>

<style scoped></style>
