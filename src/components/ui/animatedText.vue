<template>
    <div class="w-[83.47%] mx-auto">
      <h3 
        class=""
        ref="textContainer"
      >
        <span
          v-for="(word, index) in text.split(' ')"
          :key="index"
          :class="{ 'highlight': index <= currentWordIndex }"
          class="transition-colors duration-300 font-merri font-[700] text-[1.94rem] leading-[2.3rem] midDesk:text-[1.5rem]"
        >
          {{ word }}
        </span>
        <!-- Add a non-breaking space after each word -->
        <span>&nbsp;</span>
      </h3>
    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
  
  const currentWordIndex = ref(0);
  const textContainer = ref(null);
  
  const handleScroll = () => {
    const container = textContainer.value;
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    // Check if the text is visible
    if (rect.top < windowHeight && rect.bottom > 0) {
      const totalWords = props.text.split(' ').length;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
      currentWordIndex.value = Math.floor(progress * totalWords);
    }
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const posterImages = [
    {
        id: 1,
        source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735121583/Poster1_okkzna.png'
    },
    {
        id: 2,
        source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735121584/Poster6_bv91hm.png'
    },
    {
        id: 3,
        source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735121584/Poster4_b2bpkc.png'
    },
    {
        id: 4,
        source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735121585/Poster5_otwvrj.png'
    },
    {
        id: 5,
        source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735121585/Poster3_ijadnv.png'
    },
    {
        id: 6,
        source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735121586/poster2_eis8yl.png'
    },
    {
        id: 7,
        source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735121587/Poster7_xtfv3g.png'
    },
]
  </script>
  

  <style scoped>
  h3 {
    word-wrap: break-word; /* Ensure words break to fit the container */
    overflow-wrap: anywhere; /* Allow breaking anywhere if necessary */
    white-space: normal; /* Ensure normal text wrapping */
    text-align: justify; /* Optional: Align text for better readability */
  }
  
  h3 span {
    color: #436256; /* Default text color */
    display: inline-block; /* Ensure proper wrapping for each word */
    margin-right: 0.5rem; /* Add spacing between words */
  }
  
  h3 span.highlight {
    color: #E9EBF8; /* Highlight color (e.g., red) */
  }
  </style>
  
  