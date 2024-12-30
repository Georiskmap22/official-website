<template>
    <section class="py-[7.44rem] mob:pb-[5rem]">
        <div class="text-center w-full mb-[10.9rem] midDesk:mb-[5rem] mob:w-[90%] mx-auto">
            <h1 class="text-[#FFFFFF] font-cabin font-[600] text-[3.8rem] mb-4 midDesk:text-[2.5rem] midDesk:mb-0">
            <span>{{ titleText }}</span><span class="cursor"></span>
            </h1>
            <p class="text-[#E9EBF8] font-merri font-[400] text-[1.9rem] midDesk:text-[1.2rem] leading-[2.3rem] mob:text-[1rem]">
            <span>{{ subtitleText }}</span><span class="cursor"></span>
            </p>
        </div>

        <!-- <div class="text-center w-full mb-[10.9rem] midDesk:mb-[5rem] mob:w-[90%] mx-auto">
            <h1 class="text-[#FFFFFF] font-cabin font-[600] text-[3.8rem] mb-4 midDesk:text-[2.5rem] midDesk:mb-0">Safeguarding the Next Generation</h1>
            <p class="text-[#E9EBF8] font-merri font-[400] text-[1.9rem] midDesk:text-[1.2rem] leading-[2.3rem] mob:text-[1rem]">Empowering Children in Disaster Risk Reduction</p>
        </div> -->
        <videoPlayer 
            imgSource="https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735037350/Rectangle_2_yj43a6.jpg"
            vidSource="https://res.cloudinary.com/dmgwwzsnk/video/upload/v1735208954/Haleemat_S_Interview_zdxanc.mp4"
        />
    </section>
</template>

<script setup>
import videoPlayer from '@/components/ui/videoPlayer.vue';
import { ref, onMounted } from 'vue';


// Reactive properties for text content
const titleText = ref('');
const subtitleText = ref('');

// Typewriter effect function
const typeWriterEffect = (text, targetRef, speed, callback) => {
  let i = 0;

  const type = () => {
    if (i < text.length) {
      targetRef.value += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  };

  type();
};

// Start the typewriter effect on mounted
onMounted(() => {
  typeWriterEffect(
    'Safeguarding the Next Generation',
    titleText,
    100,
    () => {
      typeWriterEffect(
        'Empowering Children in Disaster Risk Reduction',
        subtitleText,
        50
      );
    }
  );
});

</script>

<style scoped>
.cursor {
  display: inline-block;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.75);
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
 
</style>