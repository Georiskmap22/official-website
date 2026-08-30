<template>
  <section class="py-[7.44rem] mob:pb-[5rem]">
    <div class="text-center w-full mb-[10.9rem] midDesk:mb-[5rem] mob:w-[90%] mx-auto">
      <h1
        class="text-[#FFFFFF] font-cabin font-[600] text-[3.8rem] mb-4 midDesk:text-[2.5rem] midDesk:mb-0"
      >
        <span>{{ titleText }}</span><span class="cursor"></span>
      </h1>
      <p
        class="text-[#E9EBF8] font-merri font-[400] text-[1.9rem] midDesk:text-[1.1rem] leading-[2.3rem]"
      >
        <span>{{ subtitleText }}</span><span class="cursor"></span>
      </p>
    </div>

    <!-- Field film: a 50s landscape cut assembled from the July 2026 field footage
         (handover, planting, the standing rice), reframed shot by shot from the vertical
         original. Runs full-bleed, as the placeholder band did. -->
    <figure class="w-[95.8%] mx-auto">
      <FramedVideo
        src="/media/katcha/video/field-film.mp4"
        poster="/media/katcha/video/field-film-poster.jpg"
        label="field film of the FARO 67 handover and planting in Katcha Ward"
        :width="1280"
        :height="720"
      />
      <figcaption
        class="text-[#436256] font-merri text-[1rem] leading-[1.5rem] text-center mt-[1.5rem] max-w-[46ch] mx-auto midDesk:text-[0.875rem]"
      >
        Katcha Ward, July 2026: twenty members of the farmers' association each receive a
        10 kg pack of FARO 67, the chairman plants his on the floodplain, and the rice comes
        up on ground the satellite record marks as flooding year after year.
      </figcaption>
    </figure>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import FramedVideo from './FramedVideo.vue'

const titleText = ref('')
const subtitleText = ref('')

const typeWriterEffect = (text, targetRef, speed, callback) => {
  let i = 0

  const type = () => {
    if (i < text.length) {
      targetRef.value += text.charAt(i)
      i++
      setTimeout(type, speed)
    } else if (callback) {
      callback()
    }
  }

  type()
}

onMounted(() => {
  typeWriterEffect('Outlast the Flood', titleText, 100, () => {
    typeWriterEffect(
      'Satellite flood mapping and a rice that survives the water, in Katcha Ward, Niger State',
      subtitleText,
      50
    )
  })
})
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
