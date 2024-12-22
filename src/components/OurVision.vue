<script setup>
import { nextTick, ref, onMounted } from 'vue';
import AOS from 'aos';

nextTick(() => {
    AOS.refresh();
  });

// onMounted(() => {
//   nextTick(() => {
//     AOS.refresh();
//   });
// });

const vidPlayer = ref(null);
const videoPlayed = ref(false);

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

  // Toggle controls dynamically
  if (videoPlayed.value) {
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
</script>


<template>
    <div class="container-section">
      <div class="m-auto" style="padding:78px 0;">
        <div class="grid grid-cols-2 gap-[4rem] break4:gap-[8rem] break2:grid-cols-1">
          <div class="hero-text text-center break4:w-[90%] mx-auto" 
          data-aos="fade-right"
          data-aos-duration="1000">
            <div class="uppercase font-semibold cabin text-[1.5rem] md:text-[3rem] text-tertiary">Our Vision</div>
            <p class="M31 leading-18 merri text-[1.5rem] text-tertiary" style="margin-top: 27px;">
              To promote a sustainable environment through the development, generating applications, and dissemination of
              Geohazard maps using advanced Geospatial Technology.
            </p>
          </div>
          <div class="relative w-full break4:max-w-[30rem] max-h-[50rem]" 
          data-aos="fade-left"
                                  data-aos-delay="300">
            <!-- Video -->
            <video
              ref="vidPlayer"
              src="https://res.cloudinary.com/dmgwwzsnk/video/upload/v1734875799/introVideo_mavzmw.mp4"
              class="!w-full h-full"
              @play="handlePlay"
              @pause="handlePause"
            ></video>
            
            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-gray-800 opacity-50"
              :class="videoPlayed ? 'hidden' : 'block'"
            ></div>
            
            <!-- Play Button -->
            <div
              class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[5rem] h-[5rem] cursor-pointer"
              @click="vidControl(true)"
              :class="videoPlayed ? 'hidden' : 'block'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 120 119"
                fill="none"
              >
                <path
                  d="M119.435 59.4843C119.435 91.834 92.969 118.066 60.3114 118.066C27.6538 118.066 1.18738 91.834 1.18738 59.4843C1.18738 27.1347 27.6538 0.902344 60.3114 0.902344C92.969 0.902344 119.435 27.1347 119.435 59.4843Z"
                  stroke="#63D8E4"
                />
                <path
                  d="M47.5375 38.3702C47.5375 36.3873 49.8208 35.2745 51.3826 36.4963L81.4338 60.0052C82.71 61.0036 82.6366 62.9578 81.2891 63.8577L51.238 83.9263C49.657 84.9821 47.5375 83.8488 47.5375 81.9477V38.3702Z"
                  fill="#63D8E4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>  

<style scoped>
.container-section {
    background-color: #EAF7F3;
    padding: 0 120px 0 120px;

}

@media (max-width: 767px) {
    .container-section {
        padding: 0 20px 0 20px;
    }

}


.hero-text {
    max-width: 1488px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    /* position: absolute;
    top: 50%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    color: white;
}

.hero-text button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;
}

.hero-text button:hover {
    background-color: #555;
    color: white;
}
</style>