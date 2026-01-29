<script setup>
import { footerData } from '../data/productData'
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__brand">
        <div class="footer__logo">BLOOM & NEST</div>
        <p class="footer__tagline">{{ footerData.tagline }}</p>
      </div>

      <div
        v-for="section in footerData.sections"
        :key="section.title"
        class="footer__section"
      >
        <h4 class="footer__title">{{ section.title }}</h4>
        <ul class="footer__links">
          <li v-for="link in section.links" :key="link.label">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.footer {
  background: $charcoal;
  color: $white;
  padding: $spacing-3xl $spacing-xl;
  margin-top: $spacing-3xl;

  &__content {
    max-width: $container-max;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $spacing-2xl;

    @include lg {
      grid-template-columns: repeat(2, 1fr);
    }

    @include sm {
      grid-template-columns: 1fr;
    }
  }

  &__logo {
    font-family: $font-serif;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    margin-bottom: $spacing-md;
  }

  &__tagline {
    font-size: 0.85rem;
    color: rgba($white, 0.6);
    line-height: 1.6;
  }

  &__title {
    @include label-uppercase;
    font-size: 0.75rem;
    margin-bottom: $spacing-lg;
  }

  &__links {
    li {
      margin-bottom: 0.75rem;
    }

    a {
      color: rgba($white, 0.6);
      font-size: 0.85rem;
      transition: color $transition-base;

      &:hover {
        color: $white;
      }
    }
  }
}
</style>
