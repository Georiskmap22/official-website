<script setup>
// import { RouterView } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Partners from '../components/Partners.vue'
import WhoAreWe from '../components/WhoAreWe.vue'
import WhatWeDo from '../components/WhatWeDo.vue'
import OurVision from '../components/OurVision.vue'
import OurMission from '../components/OurMission.vue'
import AppsAndData from '../components/AppsAndData.vue'
import GetInvolved from '../components/GetInvolved.vue'
import ReportFlood from '../components/ReportFlood.vue'
import Footer from '../components/Footer.vue'
import FloodExtentMap from "../components/FloodExtentMap.vue"
// import "../assets/styles/main.scss"
import "../assets/styles/App.scss"
import { createScrollRevealDirective } from 'vue-scroll-reveal'; 
import Testimonial from '../components/Testimonial.vue'
const vScrollReveal = createScrollRevealDirective({
    delay: 300,
    duration: 150,
});
import AOS from 'aos';
import { nextTick, onMounted } from 'vue'

onMounted(() => {
  nextTick(() => {
    AOS.refresh();
  });
});

</script>


<template>
  <div id="app" class="w-full">
    <Navbar />
    <Hero />
    <Partners class="" data-aos="fade-up"
    data-aos-duration="1000"/>
    <WhoAreWe/>
    <WhatWeDo />
    <OurVision />
    <OurMission data-aos="fade-up"
    data-aos-duration="2000"/>
    <ReportFlood data-aos="fade-up"
    data-aos-duration="3000"/>
    <FloodExtentMap data-aos="fade-up"
    data-aos-duration="4000"/>
    <AppsAndData data-aos="fade-up"
    data-aos-duration="5000"/>
    <Testimonial data-aos="fade-up"
    data-aos-duration="6000"/>
    <GetInvolved data-aos="fade-up"
    data-aos-duration="7000"/>
    <Footer />
              
  </div>
</template>