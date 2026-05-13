<template>
  <div id="abox1635797745"
    class="header-nav-wrapper mac-component-wrapper mac-abox-wrapper responsive-devicetype-desktop responsive-devicetype-mobile">
    <div class="aboxDefault">
      <div id=""
        class="mac-component-wrapper mac-column-control responsive-devicetype-desktop responsive-devicetype-mobile par_col mac-colctrl-lt6a header-nav">
        <div
          v-for="(item, index) in props.items"
          :key="item.id ?? index"
          class="par_col tabItem"
          :class="[`mac-colctrl-lt6a-c${index}`, { 'is-active': index === 0 }]"
        >
          <div class="section imgplaceholder mac-component-wrapper mac-image-wrapper responsive-devicetype-desktop responsive-devicetype-mobile">
            <a :href="item.href" target="_self">
              <img class="" :src="item.icon" :alt="item.label">
            </a>
          </div>
          <div class="text section mac-component-wrapper mac-text-wrapper responsive-devicetype-desktop responsive-devicetype-mobile">
            <p><a :href="item.href">{{ item.label }}</a></p>
          </div>
        </div>
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
        label: 'Get Ready For Baby',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/003.svg'
      },
      {
        id: 2,
        label: 'Nursery Ideas',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/004.svg'
      },
      {
        id: 3,
        label: 'Kid Bedroom Ideas',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/001.svg'
      },
      {
        id: 4,
        label: 'Gift Ideas',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/005.svg'
      },
      {
        id: 5,
        label: 'Design &amp; How-To Guides',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/006.svg'
      },
      {
        id: 6,
        label: 'Back To School',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/002.svg'
      }
    ]
  }
})
</script>
