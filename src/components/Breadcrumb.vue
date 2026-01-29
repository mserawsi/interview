<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      { label: 'Home', href: '#' },
      { label: 'Bedding', href: '#' },
      { label: 'Duvet Covers', href: '#' },
      { label: 'Scallop Organic Duvet Cover' }
    ]
  }
})
</script>

<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb__list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumb__item"
      >
        <a
          v-if="item.href"
          :href="item.href"
          class="breadcrumb__link"
        >
          {{ item.label }}
        </a>
        <span v-else class="breadcrumb__current">{{ item.label }}</span>
        <span v-if="index < items.length - 1" class="breadcrumb__separator">/</span>
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.breadcrumb {
  max-width: $container-max;
  margin: $spacing-lg auto;
  padding: 0 $spacing-xl;

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 0.75rem;
    color: $warm-gray;
    letter-spacing: 0.05em;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__link {
    color: $warm-gray;
    transition: color 0.3s ease;

    &:hover {
      color: $charcoal;
    }
  }

  &__current {
    color: $charcoal;
  }

  &__separator {
    margin: 0 $spacing-sm;
  }
}
</style>
