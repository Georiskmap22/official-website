<template>
  <section class="w-full py-[4.3rem] midDesk:pt-0 mob:pb-0">
   <animatedText :text="text"/>
   <div class="h-[100vh] w-[95.8%] mx-auto relative image-layout mob:h-[70vh] mt-4">
    <div 
    v-for="image in images"
    :key="image.id"
    class="image-item absolute cursor-pointer max-h-[16.8rem] hover:!z-[999] transitionAll hover:scale(1.1)"
    :style="{
        top: image.top,
        left: image.left || 'auto',
        right: image.right || 'auto',
        zIndex: image.zIndex,
        transform: `rotate(${image.rotation}deg)`
    }"
    >
        <img :src="getImgUrl(image.source)" alt="news images" class=" h-full transitionAll">
    </div>
   </div>
  </section>
</template>

<script setup>
import animatedText from '../ui/animatedText.vue';

const text = `  Every year, floods displace thousands of children in Nigeria, disrupting their education and exposing them to physical and emotional trauma. In 2023, schools in Nigeria were closed for an average of 53 days due to extreme flood events. Despite the scale of this crisis, 90% of schools in the country lack sufficient disaster preparedness programs.`

const getImgUrl = (path) => {
    return new URL(`../../../public/${path}`, import.meta.url).href;
};

const images = [
   {
       id: 1,
       source: 'papercut1.png',
       top: "0",
       left: "0",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 2,
       source: 'papercut2.png',
       top: "0",
       left: "8.775rem",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 3,
       source: 'papercut3.png',
       top: "0",
       left: "34.5rem",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 4,
       source: 'papercut4.png',
       top: "0",
       right: "27rem",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 5,
       source: 'papercut5.png',
       top: "0",
       right: "4.2rem",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 6,
       source: 'papercut6.png',
       top: "8.19rem",
       left: "16rem",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 7,
       source: 'papercut7.png',
       top: "5.19rem",
       left: "27.3rem",
       rotation: 0,
       zIndex: 2
   },
   {
       id: 8,
       source: 'papercut8.png',
       left: "3.4rem",
       top: "14.44rem",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 9,
       source: 'papercut9.png',
       top: "15.25rem",
       left: "29.63rem",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 10,
       source: 'papercut10.png',
       top: "10.25rem",
       right: "13.06rem",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 11,
       source: 'papercut11.png',
       top: "25.8rem",
       left: "0",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 12,
       source: 'papercut12.png',
       top: "25.44rem",
       left: "30.12rem",
       rotation: 0,
       zIndex: 3
   },
   {
       id: 13,
       source: 'papercut13.png',
       right: "0",
       top: "15.81rem",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 14,
       source: 'papercut14.png',
       top: "31.125rem",
       left: "0",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 15,
       source: 'papercut15.png',
       top: "30.5rem",
       left: "37.99rem",
       rotation: 0,
       zIndex: 4
   },
   {
       id: 16,
       source: 'papercut16.png',
       top: "29rem",
       right: "18.06rem",
       rotation: 0,
       zIndex: 5
   },
]
</script>

<style scoped>
    .image-layout {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.image-item:hover {
  transform: rotate(0deg); /* Remove rotation to straighten */
  z-index: 999; /* Bring to the top */
}

.image-item:hover img {
  transform: scale(1.1); /* Slightly enlarge */
  filter: brightness(1.2); /* Make it stand out */
}
</style>
