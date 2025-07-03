<template>
  <button
    v-if="type"
    class="choice-button"
    :class="[type.toLowerCase(), size]"
  >
    <div class="choice-button__inner">
      <img :src="`icons/icon-${type.toLowerCase()}.svg`" :alt="type" />
    </div>
  </button>

  <div v-else class="choice-button__empty" :class="size" />
</template>

<script setup lang="ts">
import type { Choice } from '@/logic/types'

defineProps<{
  type: Choice | null
  size: 'small' | 'medium'
}>()
</script>

<style scoped lang="scss">
.choice-button {
  --shadow-offset-y: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-radius: 50%;
  background-color: var(--bg-white);
  transition: transform var(--transition-basic);

  &.rock {
    border-color: var(--choice-rock);
    box-shadow: 0 var(--shadow-offset-y) var(--choice-rock-additional);
  }

  &.paper {
    border-color: var(--choice-paper);
    box-shadow: 0 var(--shadow-offset-y) var(--choice-paper-additional);
  }

  &.scissors {
    border-color: var(--choice-scissors);
    box-shadow: 0 var(--shadow-offset-y) var(--choice-scissors-additional);
  }

  &.lizard {
    border-color: var(--choice-lizard);
    box-shadow: 0 var(--shadow-offset-y) var(--choice-lizard-additional);
  }

  &.spock {
    border-color: var(--choice-spock);
    box-shadow: 0 var(--shadow-offset-y) var(--choice-spock-additional);
  }

  &.small {
    border-width: 16px;
    padding: 24px;

    .choice-button__inner {
      width: 55px;
      height: 55px;
    }
  }

  &.medium {
    --shadow-offset-y: 8px;
    border-width: 32px;
    padding: 44px;

    .choice-button__inner {
      width: 120px;
      height: 120px;
    }
  }

  @media (max-width: 768px) {
    &.small {
      border-width: 10px;
      padding: 16px;
      --shadow-offset-y: 2px;

      .choice-button__inner {
        width: 40px;
        height: 40px;
      }
    }

    &.medium {
      border-width: 18px;
      padding: 36px;

      .choice-button__inner {
        width: 60px;
        height: 60px;
      }
    }
  }

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform var(--transition-basic);
    }
  }

  &__empty {
    margin: 40px;
    background: rgba(4, 4, 4, 0.14);
    border-radius: 50%;

    &.small {
      width: 135px;
      height: 135px;
    }

    &.medium {
      width: 192px;
      height: 192px;
    }
  }
}
</style>