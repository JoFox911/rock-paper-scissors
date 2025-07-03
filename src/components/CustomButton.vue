<template>
  <button
    class="custom-button"
    :class="variant"
    type="button"
    @click="$emit('press')"
  >
    {{ label }}
  </button>
</template>
<script setup lang="ts">
defineProps<{
  label: string
  variant: 'filled' | 'outline'
}>()

defineEmits(['press'])
</script>

<style scoped lang="scss">

.custom-button {
  text-align: center;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-sm) var(--spacing-xl);
  transition:
    background-color var(--transition-basic),
    color var(--transition-basic),
    box-shadow var(--transition-basic);
  user-select: none;
  cursor: pointer;
  line-height: var(--font-size-md);
  font-size: var(--font-size-sm);
  letter-spacing: 0.125rem;
  font-weight: var(--font-weight-light);
  text-wrap: nowrap;
  text-transform: uppercase;

  @media (max-width: 768px) {
    padding: var(--spacing-xs) var(--spacing-lg);
    font-size: var(--font-size-xs);
    letter-spacing: 0.05rem;
  }
}

.filled {
  background-color: var(--bg-white);
  color: var(--text-dark)
}

.outline {
  background-color: transparent;
  border: var(--bg-white) 1px solid;
  color: var(--bg-white);
}
</style>
