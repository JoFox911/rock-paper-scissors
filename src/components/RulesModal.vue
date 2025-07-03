<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
      <h2 class="modal-title">RULES</h2>
      <img src="/images/image-rules.svg" alt="Rules" class="modal-image" />
      <button class="modal-close" @click="$emit('close')">
        <img src="/images/icon-close.svg" alt="Close" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['close'])
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
}

.modal-content {
  position: relative;
  background-color: white;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  max-width: 400px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  text-align: start;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: none;
    border-radius: 0;
    padding: 20% var(--spacing-md);
    justify-content: space-between;
    text-align: center;
  }
}

.modal-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--text-dark);
}

.modal-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 0 auto;
}

.modal-close {
  background: none;
  border: none;
  cursor: pointer;

  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 0 auto;
  }

  img {
    width: 20px;
    height: 20px;
    opacity: 0.7;
  }
}
</style>
