<template>
    <section class="bg-white pt-[3rem] !pb-[8rem]">
      <h1 class="text-[#0E1C16] font-cabin font-[500] text-[2.25rem] leading-[2.7rem] ml-[5rem] mb-[2rem] uppercase">Partners</h1>
      <div class="pl-[7.5rem]">
          <slider :images="partners" :speed="0"/>
      </div>
    </section>
  </template>
  
  <script setup>
  import slider from './slider.vue';
  
  const partners = [
      {
          id: 1,
          src: 'thePossibilists.png',
          link: `https://tribuneonlineng.com/?p=1026226`
      },
  ]
  
//   const displayedImages = [...mediaAppearances, ...mediaAppearances]
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>