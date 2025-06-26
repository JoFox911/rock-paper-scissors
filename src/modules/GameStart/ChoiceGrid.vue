<template>
  <div class="choice-grid">
    <ChoiceButton :type="ChoiceEnum.Scissors" class="pos-top"/>
    <ChoiceButton :type="ChoiceEnum.Paper" class="pos-right"/>
    <ChoiceButton :type="ChoiceEnum.Spock" class="pos-left"/>
    <ChoiceButton :type="ChoiceEnum.Rock" class="pos-bottom-right"/>
    <ChoiceButton :type="ChoiceEnum.Lizard" class="pos-bottom-left"/>
  </div>
</template>

<script setup lang="ts">
import ChoiceButton from '@/components/ChoiceButton.vue'

import { ChoiceEnum } from '@/logic/types'

</script>

<style scoped lang="scss">
.choice-grid {
  position: relative;
  width: min(calc(100vw - 30vw), calc(100vh - 30vh));
  height: min(calc(100vw - 30vw), calc(100vh - 30vh));
  margin: 0 auto;
  background-image: url("/bg-pentagon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75%;

  .pos-top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .pos-left {
    position: absolute;
    top: 41%;
    left: -2%;
    transform: translateY(-50%);
  }

  .pos-right {
    position: absolute;
    top: 41%;
    right: -2%;
    transform: translateY(-50%);
  }

  .pos-bottom-left {
    position: absolute;
    bottom: 0;
    left: 16%;
    transform: translateY(0);
  }

  .pos-bottom-right {
    position: absolute;
    bottom: 0;
    right: 16%;
    transform: translateY(0);
  }
}

</style>
