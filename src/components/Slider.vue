<template>
    <div class="logoSlider w-full mx-auto flex gap-5 overflow-x-auto items-center no-scrollbar" ref="logoSlider">
      <div 
        class="flex justify-center items-center shrink-0 basis-[18%] tab2:basis-[30%] mob:basis-[90%]" 
        v-for="image in images" 
        :key="image.id"
        :style="{ height: height, width: width }"
      >
        <img :src="getImgUrl(image.src)" alt="Image Logo" class="h-full object-contain block mob:!object-cover" loading="lazy">
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps(['height', 'width', 'images', 'speed', 'basis']);
  
  const getImgUrl = (path) => {
    return new URL(`../../public/${path}`, import.meta.url).href;
  };
  
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
  