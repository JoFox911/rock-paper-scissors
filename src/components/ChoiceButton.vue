<template>
  <button
    class="choice-btn"
    :class="type.toLowerCase()"
  >
    <div class="inner">
      <img :src="`/icons/icon-${type.toLowerCase()}.svg`" :alt="type" />
    </div>
  </button>
</template>

<script setup lang="ts">
import type { Choice } from '@/logic/types'

defineProps<{
  type: Choice
}>()
</script>

<style scoped lang="scss">
.choice-btn {
  border: 16px solid;
  border-radius: 50%;
  padding: 1.5rem;
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

  .inner {
    width: 55px;
    height: 55px;
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
</style>