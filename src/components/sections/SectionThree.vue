<template>
   <section class="w-full bg-[#EAF7F3] py-[4.3rem]">
        <div class="mb-[3.56rem]">
            <div class="w-[83.47%] mx-auto">
                <h3 class="text-[#0E1C16] font-merri font-[700] text-[1.94rem] leading-[2.3rem] mb-[3.56rem] midDesk:text-[1.5rem]">
                    We feature two school children from Lagos states who share their personal experiences with flooding and its impact on their education.
                </h3>
            </div>
            <videoPlayer 
                imgSource="/public/vidThumbnail1.png"
                vidSource="https://res.cloudinary.com/dmgwwzsnk/video/upload/v1735254383/Interview_1_mxpt5u.mp4"
            />
        </div>
        <div class="w-full">
            <div class="w-[83.47%] mx-auto">
                <h3 class="text-[#0E1C16] font-merri font-[700] text-[1.94rem] leading-[2.3rem] mb-[3.56rem] midDesk:text-[1.5rem]">
                    Their accounts provide a powerful first hand perspective on the challenges faced by young people in flood-prone areas of Nigeria.
                </h3>
            </div>
            <videoPlayer 
                imgSource="/public/vidThumbnail2.png"
                vidSource="https://res.cloudinary.com/dmgwwzsnk/video/upload/v1735255737/Interview_2_1_p9nsq8.mp4"
            />
        </div>
    </section>
</template>

<script setup>

import videoPlayer from '@/components/ui/videoPlayer.vue';
</script>

<style lang="scss" scoped>

</style>