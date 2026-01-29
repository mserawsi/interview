<script setup>
import IconSet from './icons/IconSet.vue'
import ColorSelector from './ColorSelector.vue'
import SizeSelector from './SizeSelector.vue'
import QuantitySelector from './QuantitySelector.vue'
import ShippingInfo from './ShippingInfo.vue'
import AccordionGroup from './AccordionGroup.vue'
import TrustBadges from './TrustBadges.vue'

defineProps({
  product: {
    type: Object,
    required: true
  },
  selectedColorIndex: {
    type: Number,
    default: 0
  },
  selectedSizeIndex: {
    type: Number,
    default: 0
  },
  quantity: {
    type: Number,
    default: 1
  },
  openAccordionId: {
    type: [Number, null],
    default: null
  },
  discountPercentage: {
    type: Number,
    default: 0
  }
})

defineEmits([
  'select-color',
  'select-size',
  'update:quantity',
  'toggle-accordion',
  'add-to-cart',
  'save'
])

const formatPrice = (price) => `$${price}`
</script>

<template>
  <div class="product-info">
    <span class="product-info__brand">{{ product.brand }}</span>
    <h1 class="product-info__title">{{ product.title }}</h1>

    <div class="product-info__rating">
      <div class="product-info__stars">
        <IconSet
          v-for="i in 5"
          :key="i"
          name="star"
          :size="16"
        />
      </div>
      <span class="product-info__rating-text">
        {{ product.rating }} ({{ product.reviewCount }} reviews) ·
        <a href="#">Write a review</a>
      </span>
    </div>

    <div class="product-info__price">
      <span class="product-info__current-price">
        {{ formatPrice(product.currentPrice) }}
      </span>
      <span class="product-info__original-price">
        {{ formatPrice(product.originalPrice) }}
      </span>
      <span class="product-info__sale-badge">
        SAVE {{ discountPercentage }}%
      </span>
    </div>
    <p class="product-info__klarna">
      or 4 interest-free payments of ${{ product.klarnaPayment }} with Klarna
    </p>

    <ColorSelector
      :colors="product.colors"
      :selected-index="selectedColorIndex"
      @select="$emit('select-color', $event)"
    />

    <SizeSelector
      :sizes="product.sizes"
      :selected-index="selectedSizeIndex"
      @select="$emit('select-size', $event)"
    />

    <QuantitySelector
      :model-value="quantity"
      @update:model-value="$emit('update:quantity', $event)"
    />

    <div class="product-info__actions">
      <button
        class="product-info__cart-btn"
        @click="$emit('add-to-cart')"
      >
        Add to Cart
      </button>
      <button
        class="product-info__save-btn"
        @click="$emit('save')"
        aria-label="Save for later"
      >
        <IconSet name="bookmark" />
      </button>
    </div>

    <ShippingInfo :items="product.shippingInfo" />

    <AccordionGroup
      :items="product.accordionItems"
      :open-id="openAccordionId"
      @toggle="$emit('toggle-accordion', $event)"
    />

    <TrustBadges :badges="product.trustBadges" />
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.product-info {
  padding-top: $spacing-md;

  &__brand {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: $dusty-rose;
    margin-bottom: $spacing-sm;
  }

  &__title {
    @include heading-serif(2.5rem);
    margin-bottom: $spacing-md;

    @include sm {
      font-size: 1.75rem;
    }
  }

  &__rating {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: $spacing-lg;
  }

  &__stars {
    display: flex;
    gap: $spacing-xs;
    color: $gold;
  }

  &__rating-text {
    font-size: 0.85rem;
    color: $warm-gray;

    a {
      color: $charcoal;
      text-decoration: underline;
    }
  }

  &__price {
    display: flex;
    align-items: baseline;
    gap: $spacing-md;
    margin-bottom: $spacing-sm;
  }

  &__current-price {
    font-size: 1.75rem;
    font-weight: 600;
    color: $charcoal;
  }

  &__original-price {
    font-size: 1.1rem;
    color: $warm-gray;
    text-decoration: line-through;
  }

  &__sale-badge {
    background: $dusty-rose;
    color: $white;
    padding: $spacing-xs 0.75rem;
    border-radius: $radius-sm;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  &__klarna {
    font-size: 0.8rem;
    color: $warm-gray;
    margin-bottom: $spacing-xl;
  }

  &__actions {
    display: flex;
    gap: $spacing-md;
    margin-bottom: $spacing-lg;
  }

  &__cart-btn {
    @include button-primary;
    flex: 1;
  }

  &__save-btn {
    @include button-outline;
    @include flex-center;
    width: 56px;
    height: 56px;
    flex-shrink: 0;
  }
}
</style>
