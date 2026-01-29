import { ref, computed } from 'vue'

export function useProduct(product) {
  const selectedImageIndex = ref(0)
  const selectedColorIndex = ref(0)
  const selectedSizeIndex = ref(1) // Default to Full/Queen
  const quantity = ref(1)
  const isWishlisted = ref(false)
  const openAccordionId = ref(1)

  // Computed properties
  const selectedImage = computed(() => product.images[selectedImageIndex.value])
  const selectedColor = computed(() => product.colors[selectedColorIndex.value])
  const selectedSize = computed(() => product.sizes[selectedSizeIndex.value])

  const discountPercentage = computed(() => {
    return Math.round((1 - product.currentPrice / product.originalPrice) * 100)
  })

  const totalPrice = computed(() => {
    return selectedSize.value.price * quantity.value
  })

  // Methods
  const selectImage = (index) => {
    selectedImageIndex.value = index
  }

  const selectColor = (index) => {
    selectedColorIndex.value = index
  }

  const selectSize = (index) => {
    selectedSizeIndex.value = index
  }

  const incrementQuantity = () => {
    quantity.value++
  }

  const decrementQuantity = () => {
    if (quantity.value > 1) {
      quantity.value--
    }
  }

  const toggleWishlist = () => {
    isWishlisted.value = !isWishlisted.value
  }

  const toggleAccordion = (id) => {
    openAccordionId.value = openAccordionId.value === id ? null : id
  }

  const addToCart = () => {
    console.log('Adding to cart:', {
      product: product.title,
      color: selectedColor.value.name,
      size: selectedSize.value.name,
      quantity: quantity.value,
      total: totalPrice.value
    })
    // Implement cart logic here
  }

  return {
    // State
    selectedImageIndex,
    selectedColorIndex,
    selectedSizeIndex,
    quantity,
    isWishlisted,
    openAccordionId,

    // Computed
    selectedImage,
    selectedColor,
    selectedSize,
    discountPercentage,
    totalPrice,

    // Methods
    selectImage,
    selectColor,
    selectSize,
    incrementQuantity,
    decrementQuantity,
    toggleWishlist,
    toggleAccordion,
    addToCart
  }
}
