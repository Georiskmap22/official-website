<template>
  <div class="w-[95.8%] mx-auto transitionAll cursor-pointer" ref="videoContainer"
  @mouseenter="enableMouseTracking"
  @mouseleave="disableMouseTracking"
  >
    <div class="w-full h-[90vh] max-h-[48.5rem] relative rounded-[0.5rem] overflow-hidden">
          <div 
          class="rounded-[0.5rem] w-full h-full" @click="togglePlayPause"
          >
              <img :src="props.imgSource" alt="student with grmi staffs" class="object-cover h-full w-full">
          </div>
          <div
            @click="togglePlayPause"
              class="absolute inset-0 bg-gray-800 opacity-50 transitionAll"
              :class="videoPlayed ? 'hidden' : 'block'"
          ></div>
          
          <div 
          class="w-full h-full absolute top-0 transitionAll overflow-hidden left-0"
          :class="videoPlayed? 'opacity-[1] visible': 'opacity-0 invisible'"
          >
              <video 
              :src="props.vidSource" 
              class="w-full h-full object-cover mob:object-fit"
              frameborder="0" 
              data-ready="true"
              @play="handlePlay"
              @pause="handlePause"
              @click="togglePlayPause"
              ref="vidPlayer"
              controls
              ></video>
          </div>
          <div
          v-if="isTracking"
            class="absolute z-[50] transitionAll"
            @click="togglePlayPause"
            :style="{ 
              top: `${mouse.y - iconOffset}px`, 
              left: `${mouse.x - iconOffset}px` 
            }"
          >
            <component :is="videoPlayed ? closeVideoIcon : playVideoIcon" class=" cursor-pointer transitionAll" />
          </div>
      </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import playVideoIcon from '../icons/playVideoIcon.vue';
import closeVideoIcon from '../icons/closeVideoIcon.vue';

const props = defineProps(['vidSource', 'imgSource'])
const mouse = ref({ x: 0, y: 0 });
const isTracking = ref(false)

const vidPlayer = ref(null);
const videoPlayed = ref(false);
const iconOffset = ref(40); 

const trackMousePosition = (event) => {
  mouse.value = {
    x: event.clientX,
    y: event.clientY,
  };
  console.log(mouse.value)
};

// Function to add mousemove listener
const enableMouseTracking = () => {
  isTracking.value = true
  window.addEventListener('mousemove', trackMousePosition);
};

// Function to remove mousemove listener
const disableMouseTracking = () => {
  isTracking.value = false
  window.removeEventListener('mousemove', trackMousePosition);
};

// Video control function
const vidControl = (manualToggle = false) => {
  if (manualToggle) {
    if (vidPlayer.value.paused) {
      vidPlayer.value.play();
    } else {
      vidPlayer.value.pause();
    }
  }
  videoPlayed.value = !vidPlayer.value.paused;

  if (!videoPlayed.value) {
    vidPlayer.value.setAttribute('controls', 'controls'); // Add controls
  } else {
    vidPlayer.value.removeAttribute('controls'); // Remove controls
  }
};

// Event listeners for play and pause
const handlePlay = () => {
  vidControl();
};

const handlePause = () => {
  vidControl();
};

const togglePlayPause = () => {
  if (vidPlayer.value.paused) {
    vidPlayer.value.play();
    videoPlayed.value = true;
  } else {
    vidPlayer.value.pause();
    videoPlayed.value = false;
  }
};

const videoContainer = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                videoContainer.value.style.width = '95.8%';
            } else {
                videoContainer.value.style.width = '90%';
            }
        },
        { threshold: 0.5 } // Adjust threshold as needed
    );

    if (videoContainer.value) {
        observer.observe(videoContainer.value);
        videoContainer.value.addEventListener('mouseenter', enableMouseTracking);
        videoContainer.value.addEventListener('mouseleave', disableMouseTracking);
    }

    onUnmounted(() => {
        observer.disconnect();
        if (videoContainer.value) {
          videoContainer.value.removeEventListener('mouseenter', enableMouseTracking);
          videoContainer.value.removeEventListener('mouseleave', disableMouseTracking);
        }
        disableMouseTracking()
    });
});

</script>

<style scoped>
    .hide-controls::-webkit-media-controls {
  display: none !important;
}

.hide-controls::-moz-media-controls {
  display: none !important;
}

.hide-controls {
  pointer-events: auto; /* Ensure video interaction remains */
}
</style>