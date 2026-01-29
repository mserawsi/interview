<script setup>
import IconSet from './icons/IconSet.vue'

defineProps({
  items: {
    type: Array,
    required: true
  },
  openId: {
    type: [Number, null],
    default: null
  }
})

defineEmits(['toggle'])
</script>

<template>
  <div class="accordion">
    <div
      v-for="item in items"
      :key="item.id"
      class="accordion__item"
      :class="{ 'accordion__item--open': openId === item.id }"
    >
      <button
        class="accordion__header"
        @click="$emit('toggle', item.id)"
        :aria-expanded="openId === item.id"
      >
        {{ item.title }}
        <IconSet name="chevronDown" class="accordion__icon" :size="16" />
      </button>
      <div class="accordion__content">
        <div class="accordion__body" v-html="item.content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.accordion {
  border-top: 1px solid $light-gray;

  &__item {
    border-bottom: 1px solid $light-gray;

    &--open {
      .accordion__icon {
        transform: rotate(180deg);
      }

      .accordion__content {
        max-height: 500px;
      }
    }
  }

  &__header {
    @include button-base;
    @include flex-between;
    width: 100%;
    padding: 1.25rem 0;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: $charcoal;
    text-align: left;
  }

  &__icon {
    transition: transform $transition-base;
  }

  &__content {
    max-height: 0;
    overflow: hidden;
    transition: max-height $transition-base;
  }

  &__body {
    padding-bottom: $spacing-lg;
    font-size: 0.85rem;
    color: $warm-gray;
    line-height: 1.8;

    :deep(ul) {
      margin-left: 1.25rem;
      margin-top: $spacing-sm;
      list-style: disc;
    }

    :deep(li) {
      margin-bottom: $spacing-xs;
    }

    :deep(strong) {
      color: $charcoal;
    }
  }
}
</style>
