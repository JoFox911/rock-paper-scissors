<template>
  <div class="choice-grid">
    <ChoiceButton :type="ChoiceEnum.Scissors" class="choice pos-top" size="small" @click="$emit('pick', ChoiceEnum.Scissors)"/>
    <ChoiceButton :type="ChoiceEnum.Paper" class="choice pos-right" size="small" @click="$emit('pick', ChoiceEnum.Paper)"/>
    <ChoiceButton :type="ChoiceEnum.Spock" class="choice pos-left" size="small" @click="$emit('pick', ChoiceEnum.Spock)"/>
    <ChoiceButton :type="ChoiceEnum.Rock" class="choice pos-bottom-right" size="small" @click="$emit('pick', ChoiceEnum.Rock)"/>
    <ChoiceButton :type="ChoiceEnum.Lizard" class="choice pos-bottom-left" size="small" @click="$emit('pick', ChoiceEnum.Lizard)"/>
  </div>
</template>

<script setup lang="ts">
import ChoiceButton from '@/components/ChoiceButton.vue'
import { type Choice, ChoiceEnum } from '@/logic/types'

defineEmits<{ (e: 'pick', choice: Choice): void }>()
</script>

<style scoped lang="scss">
.choice-grid {
  position: relative;
  width: min(calc(100vw - 30vw), calc(100vh - 40vh));
  height: min(calc(100vw - 30vw), calc(100vh - 40vh));
  margin: 0 auto;
  background-image: url("/bg-pentagon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75%;

  .choice {
    cursor: pointer;
  }

  .pos-top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .pos-left {
    position: absolute;
    top: 41%;
    left: 0;
    transform: translateY(-50%);
  }

  .pos-right {
    position: absolute;
    top: 41%;
    right: 0;
    transform: translateY(-50%);
  }

  .pos-bottom-left {
    position: absolute;
    bottom: 4%;
    left: 14%;
    transform: translateY(0);
  }

  .pos-bottom-right {
    position: absolute;
    bottom: 4%;
    right: 14%;
    transform: translateY(0);
  }
}

</style>
