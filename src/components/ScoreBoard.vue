<template>
  <div class="score-board">
    <div class="score-board__logo">
      <img src="/logo.svg" alt="Rock Paper Scissors Lizard Spock Logo" />
    </div>

    <div class="score-board__score">
      <div class="score-board__label">Score</div>
      <div class="score-board__value">{{ score }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'

const score = inject('score') as Ref<number>
</script>

<style scoped lang="scss">
.score-board {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-lg);
  width: 100%;
  border: 3px solid var(--header-outline);
  border-radius: var(--border-radius-xl, 1rem);

  @media (max-width: 768px) {
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-md);
  }

  &__logo {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;

      @media (max-width: 768px) {
        width: auto;
        height: 60px;
      }
    }
  }

  &__score {
    background: var(--bg-white);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: calc(var(--border-radius-md) / 2);
    text-align: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      padding: var(--spacing-xs) var(--spacing-md);
    }
  }


  &__label {
    color: var(--text-score);
    text-transform: uppercase;
    letter-spacing: 0.125rem;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    line-height: 1.2rem;

    @media (max-width: 768px) {
      font-size: var(--font-size-xxs);
      line-height: var(--font-size-xxs);
      letter-spacing: 0.05rem;
    }
  }

  &__value {
    color: var(--text-dark);
    font-size: var(--font-size-xxxl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height);

    @media (max-width: 768px) {
      font-size: var(--font-size-xxl);
      line-height: var(--font-size-xxl);
    }
  }
}
</style>
