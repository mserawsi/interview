<script setup>
defineProps({
  sizes: {
    type: Array,
    required: true
  },
  selectedIndex: {
    type: Number,
    default: 0
  }
})

defineEmits(['select'])

const formatPrice = (price) => `$${price}`
</script>

<template>
  <div class="size-selector">
    <div class="size-selector__label">
      Size <span class="size-selector__value">{{ sizes[selectedIndex].name }}</span>
    </div>
    <div class="size-selector__options">
      <button
        v-for="(size, index) in sizes"
        :key="size.id"
        class="size-selector__btn"
        :class="{ 'size-selector__btn--active': selectedIndex === index }"
        @click="$emit('select', index)"
      >
        <span class="size-selector__name">{{ size.name }}</span>
        <span class="size-selector__price">{{ formatPrice(size.price) }}</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.size-selector {
  margin-bottom: $spacing-xl;

  &__label {
    @include label-uppercase;
    color: $charcoal;
    margin-bottom: $spacing-md;
    @include flex-between;
  }

  &__value {
    font-weight: 400;
    text-transform: none;
    letter-spacing: normal;
    color: $warm-gray;
  }

  &__options {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  &__btn {
    @include button-outline;
    min-width: 120px;
    padding: $spacing-md $spacing-lg;
    text-align: center;

    &--active {
      border-color: $charcoal;
      background: $cream;
    }
  }

  &__name {
    display: block;
    font-size: 0.85rem;
    font-weight: 500;
    color: $charcoal;
    margin-bottom: $spacing-xs;
  }

  &__price {
    display: block;
    font-size: 0.75rem;
    color: $warm-gray;
  }
}
</style>
