<template>
    <Navbar />
    <section class="bg-[#0E1C16]">
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <MediaAppearance />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <Partners />
    </section>
    <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/sections/Header.vue';
import SectionOne from '@/components/sections/SectionOne.vue'
import SectionTwo from '@/components/sections/SectionTwo.vue';
import SectionThree from '@/components/sections/SectionThree.vue';
import SectionFour from '@/components/sections/SectionFour.vue';
import SectionFive from '@/components/sections/SectionFive.vue';
import SectionSix from '@/components/sections/SectionSix.vue';
import SectionSeven from '@/components/sections/SectionSeven.vue';
import MediaAppearance from '@/components/ui/MediaAppearance.vue';
import Partners from '@/components/ui/ChildrenDisasterPartners.vue';
import Footer from '@/components/Footer.vue'
import { usePageHead } from '@/utils/usePageHead'

usePageHead({
  title: 'Children’s Safety in Geohazard Events',
  description: 'Learn how GRMI addresses the unique vulnerabilities of children in disaster-prone areas, with a focus on protection, preparedness, and ensuring child-centered disaster risk management strategies.',
  keywords: ["Children’s Safety", "Disaster Risk Management", "Child Protection in Disasters", "Geohazard Resilience", "Disaster Preparedness for Children", "Vulnerable Populations", "Disaster Risk Reduction"]
  ,
})

</script>

<style scoped>
    @media (max-width: 1280px){
        html {
            font-size: 12.222px !important;
        }
    }
</style>