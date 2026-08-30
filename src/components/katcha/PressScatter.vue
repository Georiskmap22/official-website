<template>
  <section class="w-full py-[4.3rem] midDesk:pt-0 mob:pb-0">
    <animatedText :text="text" />

    <!-- Desktop: the clippings scattered and lightly rotated, as on the Children & Disaster
         page. Each is a link back to the piece it was cut from. -->
    <div
      class="h-[58rem] w-[95.8%] mx-auto relative mt-4 window:!w-[80%] midDesk:!hidden"
    >
      <a
        v-for="clip in PressClippings"
        :key="clip.id"
        :href="clip.href"
        target="_blank"
        rel="noopener noreferrer"
        class="absolute max-h-[16.8rem] cursor-pointer transitionAll hover:!z-[999] hover:scale-[1.04]"
        :style="{
          top: clip.top,
          left: clip.left || 'auto',
          right: clip.right || 'auto',
          zIndex: clip.zIndex,
          transform: `rotate(${clip.rotation}deg)`
        }"
      >
        <img
          :src="clip.src"
          :alt="clip.alt"
          loading="lazy"
          class="h-[16.8rem] w-auto bg-white p-[0.35rem] rounded-[2px] shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
        />
      </a>
    </div>

    <!-- Below 800px the absolute offsets have nothing to hold onto, so the same clippings
         stack instead of overlapping off-screen. -->
    <div class="hidden midDesk:!block w-[90%] mx-auto mt-6">
      <a
        v-for="clip in PressClippings"
        :key="clip.id"
        :href="clip.href"
        target="_blank"
        rel="noopener noreferrer"
        class="block mb-[1.25rem] last:mb-0"
      >
        <img
          :src="clip.src"
          :alt="clip.alt"
          loading="lazy"
          class="w-full h-auto bg-white p-[0.3rem] rounded-[2px] shadow-[0_6px_18px_rgba(0,0,0,0.4)]"
        />
      </a>
    </div>
  </section>
</template>

<script setup>
import animatedText from '../ui/animatedText.vue'
import { PressClippings } from '@/utils/KatchaData'

const text = `In Katcha Ward, on the floodplain of the River Niger, flooding has stopped being an event and become a season of its own. The 2024 rains put more than 118,000 hectares of Niger State farmland under water and affected over 41,000 people, and a single release from the Jebba Dam in April 2025 swept through more than thirty communities, reached over 5,000 farmers, and took at least ten lives. Rice covers roughly 65 percent of this ward, so when the water comes it takes the harvest, the income, and the seed a household needs in order to plant again.`
</script>

<style scoped></style>
