<script setup>
defineProps({
  colors: {
    type: Array,
    required: true
  },
  selectedIndex: {
    type: Number,
    default: 0
  }
})

defineEmits(['select'])
</script>

<template>
  <div class="color-selector">
    <div class="color-selector__label">
      Color <span class="color-selector__value">{{ colors[selectedIndex].name }}</span>
    </div>
    <div class="color-selector__options">
      <button
        v-for="(color, index) in colors"
        :key="color.id"
        class="color-selector__swatch"
        :class="{ 'color-selector__swatch--active': selectedIndex === index }"
        :style="{ '--swatch-color': color.hex }"
        @click="$emit('select', index)"
        :title="color.name"
        :aria-label="`Select ${color.name}`"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.color-selector {
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
  }

  &__swatch {
    width: 48px;
    height: 48px;
    border-radius: $radius-full;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all $transition-base;
    position: relative;
    background: none;
    padding: 0;

    &::after {
      content: '';
      position: absolute;
      inset: 3px;
      border-radius: $radius-full;
      background: var(--swatch-color);
    }

    &:hover {
      transform: scale(1.1);
    }

    &--active {
      border-color: $charcoal;
    }
  }
}
</style>
