<template>
  <div
    class="custom-button"
    :class="variant"
    role="button"
    @click="$emit('press')"
  >
    {{ label }}
  </div>
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
  border-radius: var(--border-radius);
  padding: var(--spacing-sm) var(--spacing-xl);
  transition:
    background-color var(--transition-basic),
    color var(--transition-basic),
    box-shadow var(--transition-basic);
  user-select: none;
  cursor: pointer;
  line-height: var(--font-size-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-wrap: nowrap;
}

.filled {
  background-color: var(--bg-white);
  color: var(--text-dark)
}

.outline {
  background-color: var(--bg-white);
  color: var(--text-dark)
}
</style>
