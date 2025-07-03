<template>
  <div class="game-play">
    <div class="player-pick">
      <p>You Picked</p>
      <div class="choice">
        <ChoiceButton size="medium" :type="playerPick" />
      </div>
    </div>

    <div class="extra">
       <slot />
    </div>

    <div class="player-pick">
      <p>The House Picked</p>
      <div class="choice">
        <ChoiceButton size="medium" :type="housePick" />
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import ChoiceButton from '@/components/ChoiceButton.vue'
import type { Choice } from '@/logic/types'

defineProps<{
  playerPick: Choice | null,
  housePick: Choice | null
}>()
</script>

<style lang="scss" scoped>
.game-play {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  font-size: 1.375rem;
  line-height: 1.55rem;
  letter-spacing: 0.125rem;
  font-weight: 600;
  text-transform: uppercase;

  .player-pick {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 60px;
    height: 100%;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0;

    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;

    .player-pick {
      gap: 20px;
      flex-direction: column-reverse;
    }

    .player-pick:first-of-type {
      width: 50%;
      order: 1;
    }

    .player-pick:last-of-type {
      width: 50%;
      order: 2;
    }

    .extra {
      width: 100%;
      order: 3;
      padding-top: 50px;
    }
  }
}
</style>