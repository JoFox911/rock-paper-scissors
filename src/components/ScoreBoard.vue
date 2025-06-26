<template>
  <div class="score-board">Score: {{ score }}</div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'

const score = inject('score') as Ref<number>
</script>

<style scoped lang="scss">
</style>