<script setup>
import SiteHeader from './components/SiteHeader.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import ProductGallery from './components/ProductGallery.vue'
import ProductInfo from './components/ProductInfo.vue'
import SiteFooter from './components/SiteFooter.vue'

import { productData } from './data/productData'
import { useProduct } from './composables/useProduct'

const {
  selectedImageIndex,
  selectedColorIndex,
  selectedSizeIndex,
  quantity,
  isWishlisted,
  openAccordionId,
  discountPercentage,
  selectImage,
  selectColor,
  selectSize,
  toggleWishlist,
  toggleAccordion,
  addToCart
} = useProduct(productData)
</script>

<template>
  <div class="app">
    <SiteHeader />
    <Breadcrumb />

    <main class="product-section">
      <ProductGallery
        :images="productData.images"
        :selected-index="selectedImageIndex"
        :badge="productData.badge"
        :is-wishlisted="isWishlisted"
        @select-image="selectImage"
        @toggle-wishlist="toggleWishlist"
      />

      <ProductInfo
        :product="productData"
        :selected-color-index="selectedColorIndex"
        :selected-size-index="selectedSizeIndex"
        :quantity="quantity"
        :open-accordion-id="openAccordionId"
        :discount-percentage="discountPercentage"
        @select-color="selectColor"
        @select-size="selectSize"
        @update:quantity="quantity = $event"
        @toggle-accordion="toggleAccordion"
        @add-to-cart="addToCart"
      />
    </main>

    <SiteFooter />
  </div>
</template>

<style lang="scss">
@use './assets/scss/variables' as *;
@use './assets/scss/mixins' as *;

.product-section {
  max-width: $container-max;
  margin: 0 auto;
  padding: $spacing-md $spacing-xl $spacing-3xl;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-3xl;

  @include lg {
    grid-template-columns: 1fr;
    gap: $spacing-xl;
  }
}
</style>
