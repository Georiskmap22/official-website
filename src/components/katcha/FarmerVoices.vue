<template>
  <section class="w-full bg-[#EAF7F3] py-[4.3rem]">
    <div class="mb-[3.56rem]">
      <div class="w-[83.47%] mx-auto">
        <h3
          class="text-[#0E1C16] font-merri font-[700] text-[1.94rem] leading-[2.3rem] mb-[3.56rem] midDesk:text-[1.5rem]"
        >
          Farmers of the Katcha Ward Farmers' Association describe what the flood does to a
          season, and what they have learned from growing FARO 44 and FARO 57 before it.
        </h3>

        <!-- Two columns rather than the full-bleed placeholder frame: the footage is a 4:5
             phone recording, so a full-width band would either crop it or leave two black
             pillars. The caption takes the space beside it instead. -->
        <figure
          class="grid grid-cols-[minmax(0,22rem)_minmax(0,1fr)] gap-[3.5rem] items-center tab:!grid-cols-1 tab:!gap-[2rem]"
        >
          <FramedVideo
            src="/media/katcha/video/farmer-interview.mp4"
            poster="/media/katcha/video/farmer-interview-poster.webp"
            label="interview with Ahmad Salihu, Secretary of the Katcha Ward Farmers' Association"
            class="tab:!max-w-[22rem] tab:!mx-auto"
          />

          <figcaption>
            <p
              class="text-[#0E1C16] font-cabin font-[600] text-[2rem] leading-[2.4rem] uppercase tracking-[0.06em] midDesk:text-[1.5rem] midDesk:leading-[1.9rem]"
            >
              Ahmad Salihu
            </p>
            <p
              class="text-[#4E695D] font-merri text-[1.1rem] leading-[1.7rem] mt-[0.75rem] midDesk:text-[0.95rem]"
            >
              Secretary, Katcha Ward Farmers' Association
            </p>
            <p
              class="text-[#4E695D] font-merri text-[1rem] leading-[1.5rem] mt-[1.5rem] pt-[1.5rem] border-t border-[#8FB3A6] max-w-[40ch] midDesk:text-[0.875rem]"
            >
              Recorded in Katcha Ward, July 2026, after the handover of the FARO 67 starter
              packs.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="w-full">
      <div class="w-[83.47%] mx-auto">
        <h3
          class="text-[#0E1C16] font-merri font-[700] text-[1.94rem] leading-[2.3rem] mb-[3.56rem] midDesk:text-[1.5rem]"
        >
          Their accounts of where the water reaches first match, almost exactly, the ground the
          satellite record marks as flooding again and again.
        </h3>

        <!-- Mirrors the block above, with the caption on the left so the two rows do not
             read as one column of video down the page. -->
        <figure
          class="grid grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-[3.5rem] items-center tab:!grid-cols-1 tab:!gap-[2rem]"
        >
          <figcaption class="tab:!order-2">
            <p
              class="text-[#0E1C16] font-cabin font-[600] text-[2rem] leading-[2.4rem] uppercase tracking-[0.06em] midDesk:text-[1.5rem] midDesk:leading-[1.9rem]"
            >
              On the floodplain
            </p>
            <p
              class="text-[#4E695D] font-merri text-[1.1rem] leading-[1.7rem] mt-[0.75rem] midDesk:text-[0.95rem]"
            >
              The chairman of the farmers' association plants FARO 67 on his own farmland
            </p>
            <p
              class="text-[#4E695D] font-merri text-[1rem] leading-[1.5rem] mt-[1.5rem] pt-[1.5rem] border-t border-[#8FB3A6] max-w-[40ch] midDesk:text-[0.875rem]"
            >
              The standing rice that follows is on the ground the Sentinel-1 record marks as
              flooding year after year.
            </p>
          </figcaption>

          <FramedVideo
            src="/media/katcha/video/floodplain.mp4"
            poster="/media/katcha/video/floodplain-poster.webp"
            label="field footage of FARO 67 being planted on the Katcha floodplain"
            :width="540"
            :height="934"
            class="tab:!max-w-[22rem] tab:!mx-auto tab:!order-1"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import FramedVideo from './FramedVideo.vue'
</script>

<style scoped></style>
