<script setup>
import IconSet from './icons/IconSet.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="shipping-info">
    <div
      v-for="item in items"
      :key="item.id"
      class="shipping-info__row"
    >
      <IconSet :name="item.icon" class="shipping-info__icon" :size="24" />
      <div class="shipping-info__text">
        <div class="shipping-info__title">{{ item.title }}</div>
        <div class="shipping-info__desc">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.shipping-info {
  @include card;
  margin-bottom: $spacing-xl;

  &__row {
    display: flex;
    align-items: flex-start;
    gap: $spacing-md;
    padding: 0.75rem 0;
    border-bottom: 1px solid $light-gray;

    &:last-child {
      border-bottom: none;
    }
  }

  &__icon {
    flex-shrink: 0;
    color: $sage;
  }

  &__text {
    flex: 1;
  }

  &__title {
    font-size: 0.85rem;
    font-weight: 500;
    color: $charcoal;
    margin-bottom: $spacing-xs;
  }

  &__desc {
    font-size: 0.75rem;
    color: $warm-gray;
  }
}
</style>
