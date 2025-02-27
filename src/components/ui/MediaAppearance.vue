<template>
  <section class="bg-white pt-[6rem]">
    <h1 class="text-[#0E1C16] font-cabin font-[500] text-[2.25rem] leading-[2.7rem] ml-[5rem] mb-[2rem] uppercase">Media Appearances</h1>
    <div>
        <slider :images="displayedImages" :speed="0.5"/>
    </div>
  </section>
</template>

<script setup>
import slider from './slider.vue';

const mediaAppearances = [
    {
        id: 1,
        src: 'tribune.png',
        link: `https://tribuneonlineng.com/?p=1026226`
    },
    {
        id: 2,
        src: 'businessday.png',
        link: 'https://businessday.ng/life/article/how-youth-led-initiative-is-empowering-kogis-future-generation-to-combat-flood-risks-others/ '
    },
    {
        id: 3,
        src: 'telegraph.png',
        link: 'https://newtelegraphng.com/flooding-ngo-launches-disaster-risk-reduction-initiative-in-kogi/'
    },
    {
        id: 4,
        src: 'vanguard.png',
        link: 'https://www.vanguardngr.com/2025/01/climate-change-group-calls-for-urgent-govt-actions-to-protect-schools-in-flood-prone-areas/'
    }
]

const displayedImages = [...mediaAppearances, ...mediaAppearances]

</script>

<style lang="scss" scoped>

</style>