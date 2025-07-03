<template>
  <div class="choice-grid">
    <ChoiceButton
      v-for="({ type, position }) in choices"
      :key="type"
      :type="type"
      :class="['choice', position]"
      size="small"
      @click="$emit('pick', type)"
    />
  </div>
</template>

<script setup lang="ts">
import ChoiceButton from '@/components/ChoiceButton.vue'
import { type Choice, ChoiceEnum } from '@/logic/types'

defineEmits<{ (e: 'pick', choice: Choice): void }>()

const choices = [
  { type: ChoiceEnum.Scissors, position: 'pos-top' },
  { type: ChoiceEnum.Paper, position: 'pos-right' },
  { type: ChoiceEnum.Spock, position: 'pos-left' },
  { type: ChoiceEnum.Rock, position: 'pos-bottom-right' },
  { type: ChoiceEnum.Lizard, position: 'pos-bottom-left' }
]
</script>

<style scoped lang="scss">
.choice-grid {
  position: relative;
  width: min(calc(100vw - 30vw), calc(100vh - 40vh));
  height: min(calc(100vw - 30vw), calc(100vh - 40vh));
  margin: 0 auto;
  background-image: url("/images/bg-pentagon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75%;
  aspect-ratio: 1 / 1;

  @media (max-width: 768px) {
    width: min(calc(100vw - 20vw), calc(100vh - 30vh));
    height: min(calc(100vw - 20vw), calc(100vh - 30vh));
  }

  .choice {
    position: absolute;
    cursor: pointer;
  }

  .pos-top {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .pos-left {
    top: 41%;
    left: 0;
    transform: translateY(-50%);
  }

  .pos-right {
    top: 41%;
    right: 0;
    transform: translateY(-50%);
  }

  .pos-bottom-left {
    bottom: 4%;
    left: 14%;
    transform: translateY(0);
  }

  .pos-bottom-right {
    bottom: 4%;
    right: 14%;
    transform: translateY(0);
  }
}
</style>
