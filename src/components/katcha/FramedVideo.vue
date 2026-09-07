<template>
  <!-- Sibling of ui/videoPlayer.vue, whose frame is a fixed landscape band
       (h-[90vh] object-cover) and would crop the vertical phone footage on this page to a
       slot. The frame here takes its aspect ratio from the file, so nothing is cropped and
       one component serves both the landscape field film and the portrait interviews.
       preload="none" keeps the video off the initial page load; the poster carries the
       frame until someone presses play. -->
  <div
    class="relative w-full overflow-hidden rounded-[0.5rem] shadow-md bg-[#0E1C16]"
    :style="{ aspectRatio: `${width} / ${height}` }"
  >
    <video
      ref="vidPlayer"
      :src="src"
      :poster="poster"
      class="w-full h-full object-cover"
      preload="none"
      playsinline
      :controls="started"
      @play="started = true"
      @click="togglePlayPause"
    ></video>

    <!-- Shown until the first play only: once the native controls are up, a full-bleed
         overlay would swallow every click meant for them. -->
    <button
      v-if="!started"
      type="button"
      class="absolute inset-0 grid place-items-center bg-[#0E1C16]/40 hover:bg-[#0E1C16]/25 transitionAll cursor-pointer"
      :aria-label="`Play ${label}`"
      @click="togglePlayPause"
    >
      <playVideoIcon class="w-[5rem] h-[5rem]" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import playVideoIcon from '../icons/playVideoIcon.vue'

defineProps({
  src: { type: String, required: true },
  poster: { type: String, required: true },
  label: { type: String, default: 'video' },
  width: { type: Number, default: 640 },
  height: { type: Number, default: 794 }
})

const vidPlayer = ref(null)
const started = ref(false)

const togglePlayPause = () => {
  if (vidPlayer.value.paused) {
    vidPlayer.value.play()
  } else {
    vidPlayer.value.pause()
  }
}
</script>

<style scoped></style>
