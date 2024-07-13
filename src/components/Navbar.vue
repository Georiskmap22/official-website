<script setup>
import {ref} from "vue"
import Drop from './Dropdowns/Drop.vue'
import CustomDrop from "./Dropdowns/CustomDrop.vue";
import NavData from "../utils/NavConstants"
import CustomNavData from "../utils/CustomNavConstant";
import MobileNav from './MobileNav.vue';
const showMenu = ref(false);


</script>

<template>
  <nav class=" h-28 break:h-auto bg-brandgray/50 text-white">
<div class="flex mx-auto w-[95%] md:w-[90%] tab2:w-[95%] items-center justify-between py-4 h-full">
  
<div class="flex gap-[5rem]">
  <router-link to="/" class="animate__animated animate__fadeInDown">
      <img src='../assets/icons/GRMI_logo.png' alt="Responsive image" width="183" style="color: green;">
    </router-link>
    <div class=" w-full flex items-center animate__animated animate__fadeInDown">
      <div v-for="link in NavData" :key="link.id" class="flex justify-between items-center break:hidden"> 
        <Drop :model="link" />
      </div>
      <div v-for="link in CustomNavData" :key="link.id" class="flex justify-between items-center break:hidden"> 
        <CustomDrop :model="link" />
      </div>
    </div>
</div>
<div @click="showMenu = !showMenu" class="break:flex hover:scale-105 rounded-lg hidden cursor-pointer transitionAll z-[999999] items-center ">
  <img class="h-12 w-12 transitionAll animate__animated animate__fadeInDown" src="../assets/icons/menu.svg" alt="burger" v-if="!showMenu">
  <div class="">
    <span class="material-icons text-[3rem] transitionAll" v-if="showMenu">close</span>
  </div>
</div>

    <div class="flex break:hidden transitionAll animate__animated animate__fadeInDown">
      <button class=" transitionAll px-6 py-4 text-[1rem] bg-brandgreen text-white hover:text-brandgreen hover:bg-white hover:outline-2 shadow-md  merri rounded-[0.25rem]">
        <a href="https://survey123.arcgis.com/share/a2a25dff0e27487ca82477dca474423f">
          Report Flood
        </a>
      </button>
    </div>
</div>




  </nav>
  <mobile-nav v-if="showMenu" />
</template>

<style scoped>

</style>
