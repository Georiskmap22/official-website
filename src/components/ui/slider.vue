<template>
    <div class="w-full mt-[3.75rem] flex gap-[1.56rem] overflow-x-auto no-scrollbar mb-[6.54rem]" ref="logoSlider">
        <article class="w-[12.5rem] h-[12.5rem] shrink-0" v-for="poster in props.posters" :key="poster.id">
            <img :src="poster.source" :alt="'poster image ' + poster.id" class="object-fill w-full h-full">
        </article>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps(['speed', 'posters']);

  
  let scrollAmount = 0;
  const logoSlider = ref(null);
  
  const autoScroll = () => {
    const slider = logoSlider.value;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
  
    if (scrollAmount >= maxScrollLeft) {
      scrollAmount = 0;
    } else {
      scrollAmount += props.speed;
    }
    slider.scrollLeft = scrollAmount;
  };
  
  onMounted(() => {
    const intervalId = setInterval(autoScroll, 10);
  
    onUnmounted(() => {
      clearInterval(intervalId);
    });
  });
  </script>
  
  <style scoped>

  </style>
  