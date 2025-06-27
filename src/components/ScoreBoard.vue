<template>
  <div class="score-board-container">
    <div class="title">
      <p>Rock</p>
      <p>Paper</p>
      <p>Scissors</p>
      <p>Lizard</p>
      <p>Spock</p>
    </div>

    <div class="score-container">
      <div class="score-label">Score</div>
      <div class="score-value">{{ score }}</div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'

const score = inject('score') as Ref<number>
</script>

<style scoped lang="scss">
.score-board-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 30px;
  width: 100%;
  border: var(--header-outline) 3px solid;
  border-radius: 16px;

  .title {
    font-size: 1.75rem;
    line-height: 1.55rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
  }

  .score-container {
    display: flex;
    flex-direction: column;
    padding: 16px 44px;
    background: var(--bg-white);
    border-radius: 4px;
    text-align: center;

    .score-label {
      color: var(--text-score);
      text-transform: uppercase;
      letter-spacing: 0.125rem;
      font-size: 1.125rem;
      line-height: 1rem;
      font-weight: 600;
    }

    .score-value {
      color: var(--text-dark);
      font-size: 4.5rem;
      line-height: 4.5rem;
      font-weight: 700;
    }
  }
}
</style>