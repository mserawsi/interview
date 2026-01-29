<script setup>
defineProps({
  modelValue: {
    type: Number,
    default: 1
  },
  min: {
    type: Number,
    default: 1
  },
  max: {
    type: Number,
    default: 99
  }
})

const emit = defineEmits(['update:modelValue'])

const updateQuantity = (value) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="quantity-selector">
    <div class="quantity-selector__label">Quantity</div>
    <div class="quantity-selector__control">
      <button
        class="quantity-selector__btn"
        @click="updateQuantity(Math.max(min, modelValue - 1))"
        :disabled="modelValue <= min"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        type="number"
        class="quantity-selector__input"
        :value="modelValue"
        @input="updateQuantity(Math.min(max, Math.max(min, parseInt($event.target.value) || min)))"
        :min="min"
        :max="max"
        aria-label="Quantity"
      />
      <button
        class="quantity-selector__btn"
        @click="updateQuantity(Math.min(max, modelValue + 1))"
        :disabled="modelValue >= max"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.quantity-selector {
  margin-bottom: $spacing-xl;

  &__label {
    @include label-uppercase;
    color: $charcoal;
    margin-bottom: $spacing-md;
  }

  &__control {
    display: flex;
    align-items: center;
    border: 1px solid $light-gray;
    border-radius: $radius-md;
    overflow: hidden;
    width: fit-content;
  }

  &__btn {
    @include button-base;
    width: 48px;
    height: 48px;
    background: $white;
    font-size: 1.25rem;
    color: $charcoal;

    &:hover:not(:disabled) {
      background: $cream;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  &__input {
    @include input-base;
    width: 60px;
    height: 48px;
    text-align: center;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
</style>
