<script setup>
import IconSet from './icons/IconSet.vue'

defineProps({
  badges: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="trust-badges">
    <div
      v-for="badge in badges"
      :key="badge.id"
      class="trust-badges__item"
    >
      <IconSet :name="badge.icon" class="trust-badges__icon" :size="32" />
      <span class="trust-badges__text">
        {{ badge.label }}<br>{{ badge.sublabel }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.trust-badges {
  display: flex;
  justify-content: center;
  gap: $spacing-xl;
  margin-top: $spacing-xl;
  padding: $spacing-lg;
  background: $white;
  border-radius: $radius-lg;

  &__item {
    @include flex-column;
    align-items: center;
    gap: $spacing-sm;
  }

  &__icon {
    color: $sage;
  }

  &__text {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: $warm-gray;
    text-align: center;
    line-height: 1.4;
  }
}
</style>
