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
        src: 'tribune.webp',
        link: `https://tribuneonlineng.com/?p=1026226`
    },
    {
        id: 2,
        src: 'businessday.webp',
        link: 'https://businessday.ng/life/article/how-youth-led-initiative-is-empowering-kogis-future-generation-to-combat-flood-risks-others/ '
    },
    {
        id: 3,
        src: 'telegraph.webp',
        link: 'https://newtelegraphng.com/flooding-ngo-launches-disaster-risk-reduction-initiative-in-kogi/'
    },
    {
        id: 4,
        src: 'vanguard.webp',
        link: 'https://www.vanguardngr.com/2025/01/climate-change-group-calls-for-urgent-govt-actions-to-protect-schools-in-flood-prone-areas/'
    },
    {
        // Second Tribune tile: the Katcha Ward rice/FARO 67 story, distinct from the
        // schools piece on id 1.
        id: 5,
        src: 'tribune.webp',
        link: 'https://tribuneonlineng.com/organisation-trains-rice-farmers-distributes-flood-tolerant-seeds-to-boost-climate-resilience/'
    }
]

const displayedImages = [...mediaAppearances, ...mediaAppearances]

</script>

<style lang="scss" scoped>

</style>