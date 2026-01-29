<script setup>
import IconSet from './icons/IconSet.vue'
import { navigationLinks } from '../data/productData'
</script>

<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">BLOOM & NEST</div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li v-for="link in navigationLinks" :key="link.id">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="header__icons">
        <button class="header__icon-btn" aria-label="Search">
          <IconSet name="search" />
        </button>
        <button class="header__icon-btn" aria-label="Account">
          <IconSet name="user" />
        </button>
        <button class="header__icon-btn" aria-label="Cart">
          <IconSet name="cart" />
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.header {
  background: $white;
  border-bottom: 1px solid $light-gray;
  padding: $spacing-md $spacing-xl;
  position: sticky;
  top: 0;
  z-index: 100;

  &__content {
    max-width: $container-max;
    margin: 0 auto;
    @include flex-between;
  }

  &__logo {
    font-family: $font-serif;
    font-size: 1.75rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: $charcoal;
  }

  &__nav-list {
    display: flex;
    gap: 2.5rem;

    @include lg {
      display: none;
    }

    a {
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: $charcoal;
      transition: color $transition-base;

      &:hover {
        color: $dusty-rose;
      }
    }
  }

  &__icons {
    display: flex;
    gap: $spacing-lg;
    align-items: center;
  }

  &__icon-btn {
    @include button-base;
    background: none;
    color: $charcoal;
    font-size: 1.1rem;

    &:hover {
      color: $dusty-rose;
    }
  }
}
</style>
