<template>
  <div>
    <HeroSection
      title="Lorem ipsum"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      image="https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202529/2559/001/002.jpg"
      image-alt="Lorem ipsum Hero"
    />
    <NavGrid />
    <TabContents />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import NavGrid from './components/NavGrid.vue'
import TabContents from './components/TabContents.vue'
import { tabNav } from './assets/js/tabNav.js'

onMounted(() => {
  tabNav()
})
</script>

<style lang="scss"></style>
