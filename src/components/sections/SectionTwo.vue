<template>
    <section class="w-full pt-[5rem]">
        <animatedText :text="text"/>
      <div class="mt-[5.5rem]">
          <img src="../../assets/img/Group9.png" alt="background image">
      </div>
    </section>
  </template>
  

  <script setup>
  import animatedText from '../ui/animatedText.vue';
  
  const text = `The Geohazard Risk Mapping Initiative (GRMI) is at the forefront of engaging children and youth in flood risk management. Through hands-on training, community mapping, and disaster response drills, GRMI empowers young people to become active participants in building resilient communities. By equipping them with essential knowledge and practical tools, GRMI is cultivating a generation of leaders who can safeguard their future from the devastating impacts of disasters.`;
  
  
  </script>

<style scoped>
   
</style>