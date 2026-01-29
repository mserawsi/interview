<script setup>
import ExampleImg from './components/ExampleImg.vue'
import HeroSection from './components/HeroSection.vue'
import NavGrid from './components/NavGrid.vue'
</script>

<template>
  <div>
    <ExampleImg />
    <HeroSection
      title="Lorem ipsum"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      image="https://assets.pkimgs.com/pkimgs/ab/images/dp/ecm/202529/2559/001/002.jpg"
      image-alt="Lorem ipsum Hero"
    />
    <NavGrid />
  </div>
</template>

<style lang="scss"></style>
