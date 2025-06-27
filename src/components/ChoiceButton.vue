<template>
  <button
    v-if="type"
    class="choice-btn"
    :class="[type.toLowerCase(), size]"
  >
    <div class="inner">
      <img :src="`/icons/icon-${type.toLowerCase()}.svg`" :alt="type" />
    </div>
  </button>
  <div v-else class="empty" :class="size" />
</template>

<script setup lang="ts">
import type { Choice } from '@/logic/types'

defineProps<{
  type: Choice | null,
  size: 'small' | 'medium'
}>()
</script>

<style scoped lang="scss">
.choice-btn {
  border-style: solid;
  border-radius: 50%;
  background: var(--bg-white);
  transition: transform var(--transition-basic) ease;

  &.rock {
    border-color: var(--choice-rock);
    box-shadow: 0 6px var(--choice-rock-additional);
  }
  &.paper {
    border-color: var(--choice-paper);
    box-shadow: 0 6px var(--choice-paper-additional);
  }
  &.scissors {
    border-color: var(--choice-scissors);
    box-shadow: 0 6px var(--choice-scissors-additional);
  }
  &.lizard {
    border-color: var(--choice-lizard);
    box-shadow: 0 6px var(--choice-lizard-additional);
  }
  &.spock {
    border-color: var(--choice-spock);
    box-shadow: 0 6px var(--choice-spock-additional);
  }

  &.small {
    border-width: 16px;
    padding: 24px;

    .inner {
      width: 55px;
      height: 55px;
    }
  }

  &.medium {
    border-width: 32px;
    padding: 44px;

    .inner {
      width: 120px;
      height: 120px;
    }
  }

  .inner {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform var(--transition-basic) ease;
    }
  }
}

.empty {
  margin: 40px;
  background: #04040424;
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
</style>