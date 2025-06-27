<template>
  <GamePlay :player-pick="playerPick" :house-pick="housePick">
    <div class="result-info">
      <div class="result-text">{{displayedText}}</div>
      <CustomButton label="Play again" variant="filled" @press="$emit('restart')"/>
    </div>
  </GamePlay>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import GamePlay from '@/modules/GamePlay/GamePlay.vue'
import CustomButton from '@/components/CustomButton.vue'
import type { Choice, Result } from '@/logic/types'
import { ResultEnum } from '@/logic/types'

const props = defineProps<{
  playerPick: Choice | null,
  housePick: Choice | null
  gameResult: Result | null
}>()

const displayedText = computed(() => {
  if (!props.gameResult) return '';
  switch (props.gameResult) {
    case ResultEnum.Win:
      return 'You Win!';
    case ResultEnum.Lose:
      return 'You Lose';
    case ResultEnum.Draw:
      return 'It\'s a Draw!';
    default:
      return '';
  }
});
</script>

<style lang="scss" scoped>
.result-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: var(--spacing-sm);
}

.result-text {
  line-height: var(--font-size-xxl);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
  text-wrap: nowrap;
}
</style>
