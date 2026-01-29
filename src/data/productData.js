export const productData = {
  brand: 'Artist Collection',
  title: 'YO Scallop Organic Cotton Duvet Cover & Shams',
  rating: 4.8,
  reviewCount: 127,
  currentPrice: 189,
  originalPrice: 249,
  klarnaPayment: 47.25,
  badge: 'Exclusive',

  images: [
    { id: 1, bg: 'linear-gradient(135deg, #F5E6E0 0%, #E8D5CF 100%)', alt: 'Product main view' },
    { id: 2, bg: 'linear-gradient(135deg, #E8D5CF 0%, #D4C4BE 100%)', alt: 'Product detail view' },
    { id: 3, bg: 'linear-gradient(135deg, #F0E6E2 0%, #E5D9D3 100%)', alt: 'Product lifestyle view' },
    { id: 4, bg: 'linear-gradient(135deg, #FAF5F2 0%, #F0E8E4 100%)', alt: 'Product close-up view' }
  ],

  colors: [
    { id: 1, name: 'Blush Pink', class: 'pink', hex: '#F5E6E0' },
    { id: 2, name: 'Sage Green', class: 'sage', hex: '#B8C4B8' },
    { id: 3, name: 'Soft Blue', class: 'blue', hex: '#C5D5E4' },
    { id: 4, name: 'Natural Cream', class: 'cream', hex: '#F5F0E8' }
  ],

  sizes: [
    { id: 1, name: 'Twin', price: 149 },
    { id: 2, name: 'Full/Queen', price: 189 },
    { id: 3, name: 'King/Cal King', price: 219 }
  ],

  shippingInfo: [
    {
      id: 1,
      icon: 'truck',
      title: 'Free Shipping Over $99',
      description: 'Estimated delivery: 5-7 business days'
    },
    {
      id: 2,
      icon: 'refresh',
      title: 'Easy Returns',
      description: '30-day hassle-free return policy'
    },
    {
      id: 3,
      icon: 'shield',
      title: 'Secure Checkout',
      description: 'SSL encrypted payment processing'
    }
  ],

  accordionItems: [
    {
      id: 1,
      title: 'Product Details',
      content: `<p>Crafted from 100% GOTS-certified organic cotton, this luxuriously soft duvet cover features delicate scalloped edges hand-finished by artisan partners. The natural, breathable fabric ensures comfortable sleep in any season.</p>
      <ul>
        <li>300 thread count sateen weave</li>
        <li>Hidden button closure</li>
        <li>Interior corner ties</li>
        <li>Oeko-Tex certified dyes</li>
      </ul>`
    },
    {
      id: 2,
      title: 'Dimensions & Care',
      content: `<p><strong>Twin:</strong> 68" x 86"<br>
      <strong>Full/Queen:</strong> 88" x 92"<br>
      <strong>King/Cal King:</strong> 106" x 92"</p>
      <p style="margin-top: 1rem;"><strong>Care:</strong> Machine wash cold on gentle cycle. Tumble dry low. Warm iron if needed. Gets softer with every wash.</p>`
    },
    {
      id: 3,
      title: 'Shipping & Returns',
      content: `<p>Free standard shipping on orders over $99. Express shipping available at checkout.</p>
      <p style="margin-top: 0.5rem;">We offer a 30-day return policy for unused items in original packaging. Final sale items are excluded.</p>`
    }
  ],

  trustBadges: [
    { id: 1, icon: 'certified', label: 'GOTS Certified', sublabel: 'Organic' },
    { id: 2, icon: 'location', label: 'Ethically', sublabel: 'Sourced' },
    { id: 3, icon: 'thumbsUp', label: 'Satisfaction', sublabel: 'Guaranteed' }
  ]
}

export const navigationLinks = [
  { id: 1, label: 'Bedding', href: '#' },
  { id: 2, label: 'Furniture', href: '#' },
  { id: 3, label: 'Décor', href: '#' },
  { id: 4, label: 'Bath', href: '#' },
  { id: 5, label: 'Sale', href: '#' }
]

export const footerData = {
  tagline: 'Creating beautiful, sustainable spaces for every stage of life. Thoughtfully designed. Responsibly made.',
  sections: [
    {
      title: 'Shop',
      links: [
        { label: 'Bedding', href: '#' },
        { label: 'Furniture', href: '#' },
        { label: 'Décor', href: '#' },
        { label: 'Bath', href: '#' },
        { label: 'Sale', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '#' },
        { label: 'FAQs', href: '#' },
        { label: 'Shipping', href: '#' },
        { label: 'Returns', href: '#' },
        { label: 'Size Guide', href: '#' }
      ]
    },
    {
      title: 'About',
      links: [
        { label: 'Our Story', href: '#' },
        { label: 'Sustainability', href: '#' },
        { label: 'Artisan Partners', href: '#' },
        { label: 'Careers', href: '#' }
      ]
    }
  ]
}
