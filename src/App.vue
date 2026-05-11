<script setup>
import HeroSection from './components/HeroSection.vue'
import NavGrid from './components/NavGrid.vue'
import GetReadyTab from './components/TabContent/GetReadyTab.vue'
import NurseryTab from './components/TabContent/NurseryTab.vue'
import KidBedroomTab from './components/TabContent/KidBedroomTab.vue'
import GiftIdeasTab from './components/TabContent/GiftIdeasTab.vue'
import DesignTab from './components/TabContent/DesignTab.vue'
import BackToSchoolTab from './components/TabContent/BackToSchoolTab.vue'
</script>

<template>
  <div>
    <HeroSection
      title="Lorem ipsum"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      image="https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202529/2559/001/002.jpg"
      image-alt="Lorem ipsum Hero"
    />
    <NavGrid />
    <GetReadyTab />
    <NurseryTab />
    <KidBedroomTab />
    <GiftIdeasTab />
    <DesignTab />
    <BackToSchoolTab />
  </div>
</template>

<style lang="scss"></style>
