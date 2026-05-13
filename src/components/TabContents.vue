<template>
  <div
    v-for="(item, index) in props.items"
    :id="item.mboxId"
    :key="item.id ?? index"
    class="tabContent ecm-component-wrapper ecm-mbox-wrapper responsive-devicetype-desktop responsive-devicetype-mobile"
    :class="[item.tabClass, { 'is-active': item.isActive ?? index === 0 }]"
  >
    <div class="mboxDefault">
      <div
        :id="item.textId"
        class="text section ecm-component-wrapper ecm-text-wrapper responsive-devicetype-desktop responsive-devicetype-mobile"
      >
        <p v-for="(line, lineIndex) in item.lines" :key="lineIndex">{{ line }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [
      {
        id: 1,
        mboxId: 'mbox-279838011',
        textId: 'text-1421975030',
        tabClass: 'getReadyTab',
        isActive: true,
        lines: [
          '---- DO NOT NEED TO STYLE BELOW ---- FOR JAVASCRIPT PORTION OF TEST ONLY -----',
          'Get Ready for Baby'
        ]
      },
      {
        id: 2,
        mboxId: 'mbox-279838012',
        textId: 'text-1421975032',
        tabClass: 'nurseryTab',
        lines: ['Nursery Ideas']
      },
      {
        id: 3,
        mboxId: 'mbox-279838013',
        textId: 'text-1421975033',
        tabClass: 'kidBedroomTab',
        lines: ['Kid Bedroom Ideas']
      },
      {
        id: 4,
        mboxId: 'mbox-279838014',
        textId: 'text-1421975034',
        tabClass: 'giftIdeasTab',
        lines: ['Gift Ideas']
      },
      {
        id: 5,
        mboxId: 'mbox-279838015',
        textId: 'text-1421975035',
        tabClass: 'designTab',
        lines: ['Design &amp; How-To Guides']
      },
      {
        id: 6,
        mboxId: 'mbox-279838016',
        textId: 'text-1421975036',
        tabClass: 'backToSchoolTab',
        lines: ['Back To School']
      }
    ]
  }
})
</script>
