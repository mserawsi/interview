<script setup>
import IconSet from './icons/IconSet.vue'

defineProps({
  images: {
    type: Array,
    required: true
  },
  selectedIndex: {
    type: Number,
    default: 0
  },
  badge: {
    type: String,
    default: null
  },
  isWishlisted: {
    type: Boolean,
    default: false
  }
})

defineEmits(['select-image', 'toggle-wishlist'])
</script>

<template>
  <div class="gallery">
    <div class="gallery__thumbnails">
      <button
        v-for="(image, index) in images"
        :key="image.id"
        class="gallery__thumbnail"
        :class="{ 'gallery__thumbnail--active': selectedIndex === index }"
        @click="$emit('select-image', index)"
        :aria-label="`View ${image.alt}`"
      >
        <div
          class="gallery__thumbnail-img"
          :style="{ background: image.bg }"
        />
      </button>
    </div>

    <div class="gallery__main">
      <div
        class="gallery__main-image"
        :style="{ background: images[selectedIndex].bg }"
      >
        <svg class="gallery__placeholder" width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60 10C32.4 10 10 32.4 10 60s22.4 50 50 50 50-22.4 50-50S87.6 10 60 10z" fill="#fff" fill-opacity="0.3"/>
          <path d="M60 25c-5 0-9 4-9 9v16c0 5 4 9 9 9s9-4 9-9V34c0-5-4-9-9-9z" fill="#fff" fill-opacity="0.5"/>
          <path d="M60 65c-5 0-9 4-9 9v16c0 5 4 9 9 9s9-4 9-9V74c0-5-4-9-9-9z" fill="#fff" fill-opacity="0.5"/>
          <circle cx="60" cy="60" r="8" fill="#fff" fill-opacity="0.6"/>
        </svg>
      </div>

      <span v-if="badge" class="gallery__badge">{{ badge }}</span>

      <button
        class="gallery__wishlist"
        :class="{ 'gallery__wishlist--active': isWishlisted }"
        @click="$emit('toggle-wishlist')"
        :aria-label="isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'"
      >
        <IconSet
          name="heart"
          :style="{ fill: isWishlisted ? 'currentColor' : 'none' }"
        />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.gallery {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: $spacing-md;

  @include lg {
    grid-template-columns: 1fr;
  }

  &__thumbnails {
    @include flex-column;
    gap: 0.75rem;

    @include lg {
      flex-direction: row;
      order: 2;
    }
  }

  &__thumbnail {
    width: 80px;
    height: 80px;
    border-radius: $radius-md;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all $transition-base;
    background: none;
    padding: 0;

    &:hover {
      border-color: $dusty-rose;
    }

    &--active {
      border-color: $charcoal;
    }
  }

  &__thumbnail-img {
    width: 100%;
    height: 100%;
  }

  &__main {
    position: relative;
    border-radius: $radius-xl;
    overflow: hidden;
    @include scallop-border;
  }

  &__main-image {
    aspect-ratio: 1;
    @include flex-center;
  }

  &__placeholder {
    opacity: 0.8;
  }

  &__badge {
    position: absolute;
    top: $spacing-lg;
    left: $spacing-lg;
    background: $soft-pink;
    color: $charcoal;
    padding: $spacing-sm $spacing-md;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__wishlist {
    @include icon-button;
    position: absolute;
    top: $spacing-lg;
    right: $spacing-lg;
    color: $charcoal;

    &--active {
      color: $dusty-rose;
    }
  }
}
</style>
