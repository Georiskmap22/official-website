<script setup>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import {ref} from "vue"

import "../../assets/styles/App.scss"
import ShowMap from '../../components/modals/ShowMap.vue';
import AppsData from '../../utils/AppsData';
import { usePageHead } from '@/utils/usePageHead'

usePageHead({
  title: 'Cartographic Maps',
  description: 'Browse GRMI’s collection of detailed cartographic maps used in geohazard risk assessment, showcasing terrain analysis, flood zones, and spatial data for informed decision-making.',
  keywords: ['GRMI', 'Maps', 'Geohazard', 'Risk Mapping'],
})


// const store = useFrameStore()
const iframeVisible = ref(false);
const selectedSlide = ref(null);
const iframeSrc = ref(null);
const isOpen = ref(false)

const sel = (slide) => {
  selectedSlide.value = slide
}

function showIframe(slide) {
  selectedSlide.value = slide
 if(selectedSlide.value.id){
   isOpen.value = true
 } 
}

function closeIframe() {
  isOpen.value = false;
  iframeVisible.value = false;
}

function closeModal() {
  isOpen.value = false
  iframeVisible.value = false
}
function openModal() {

  isOpen.value = true
}

const getImgUrl = (path) => {
      return new URL(`../../../public/${path}`, import.meta.url).href;
  };

</script>

<template>
    <Navbar />
    <div class="py-12 px-20 tab:px-4" style="background-color: #EAF7F3;min-height: 100vh;">
        <div>
            <div class="row text-center mb-5">
                <div class="C49 cabin text-[3rem] font-bold text-center tab:text-[1.5rem]">
                    CARTOGRAPHIC MAP
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-temp2  gap-[1.2rem]" >
                <div v-for="slide in AppsData" :key="slide.id">
      <div  class="connection-card">
        <div class="card text-white h-[300px] w-full rounded-lg flex items-end relative">
          <div class="absolute top-0 left-0 w-full h-full z-[2] bg-[rgba(0,0,0,0.3)]">
          </div>
          <img :src="getImgUrl(slide.placeholder)" alt="" class="absolute top-0 left-0 w-full h-full z-[1] object-fill">

          <div class="flex flex-col p-3 w-full z-[2]">
            <div class="flex flex-col merri" style="padding: 0;">
              <div class="media-body flex flex-col" style="align-items: flex-start;">
                <div class="M20 text-white font-normal text-[1.4rem] d-block" style="margin-bottom: 4px;">
                 {{ slide.lga }}, {{ slide.state }}
                </div>
                <div class=" text-white font-bold" style="margin-bottom: 8px;">
                 {{ slide.country }}
                </div>
              </div>

              <button @click="showIframe(slide)"
                class="w-full hover:bg-brandgreen hover:text-white bg-[#FFF] font-semibold text-[1.1rem] rounded-md text-tertiary py-4 px-5 min-w-[100px] transition">
                View Maps
              </button>



            </div>
          </div>
        </div>
      </div>
    </div>

            </div>

        </div>
    </div>
    <ShowMap  v-if="isOpen" :slide="selectedSlide"    v-model:show="isOpen" :closeFrame="closeModal" />
    <Footer />
</template>


<style scoped>

</style>
