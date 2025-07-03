<template>
  <ChoiceGrid @pick="choice => $emit('pick', choice)" />
</template>

<script setup lang="ts">
import ChoiceGrid from '@/modules/GameStart/ChoiceGrid.vue'
import { type Choice } from '@/logic/types'

defineEmits<{ (e: 'pick', choice: Choice): void }>()
</script>
