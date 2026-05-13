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
          :class="[`mac-colctrl-lt6a-c${index}`, item.tabClass, { 'is-active': index === 0 }]"
        >
          <div
            :id="item.imageWrapperId"
            class="section imgplaceholder mac-component-wrapper mac-image-wrapper responsive-devicetype-desktop responsive-devicetype-mobile"
          >
            <a :href="item.href" target="_self">
              <img class="" :src="item.icon" :alt="item.label">
            </a>
          </div>
          <div
            :id="item.textWrapperId"
            class="text section mac-component-wrapper mac-text-wrapper responsive-devicetype-desktop responsive-devicetype-mobile"
          >
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
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/003.svg',
        tabClass: 'getReadyTab',
        imageWrapperId: 'imgplaceholder1517963004',
        textWrapperId: 'text1517963005'
      },
      {
        id: 2,
        label: 'Nursery Ideas',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/004.svg',
        tabClass: 'nurseryTab',
        imageWrapperId: 'imgplaceholder1517963007',
        textWrapperId: 'text1517963008'
      },
      {
        id: 3,
        label: 'Kid Bedroom Ideas',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/001.svg',
        tabClass: 'kidBedroomTab',
        imageWrapperId: 'imgplaceholder1517963010',
        textWrapperId: 'text1517963011'
      },
      {
        id: 4,
        label: 'Gift Ideas',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/005.svg',
        tabClass: 'giftIdeasTab',
        imageWrapperId: 'imgplaceholder-187787114',
        textWrapperId: 'text-187787113'
      },
      {
        id: 5,
        label: 'Design &amp; How-To Guides',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/006.svg',
        tabClass: 'designTab',
        imageWrapperId: 'imgplaceholder-187787111',
        textWrapperId: 'text-187787110'
      },
      {
        id: 6,
        label: 'Back To School',
        href: '/',
        icon: 'https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202528/2153/001/002.svg',
        tabClass: 'backToSchoolTab',
        imageWrapperId: 'imgplaceholder-187787108',
        textWrapperId: 'text-187787107'
      }
    ]
  }
})
</script>
