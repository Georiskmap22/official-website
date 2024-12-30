<template>
   <section class="pt-[4.3rem] pb-[3.19rem]">
    <animatedText :text="text"/>
    <slider :posters="posters" :speed="eventOneSpeed"/>
    <div class="w-full grid place-items-center">
        <button 
        class="bg-[white] rounded-[100px] p-[1.5rem] midDesk:py-4 flex items-center gap-[0.75rem]"
        @click="downloadImages"
        >
            <importIcon />
            <h4 class="text-[#0E1C16] font-merri text-[1.25rem] leading-[1.5rem] midDesk:text-[1rem]">Download Flyers</h4>
        </button>
    </div>
   </section>
</template>

<script setup>
import importIcon from '@/components/icons/importIcon.vue'
import animatedText from '../ui/animatedText.vue'
import slider from '../ui/slider.vue'

const text = ` GRMI aligns its efforts with global frameworks, such as the Children's Charter for Disaster Risk Reduction, to ensure that the unique needs and perspectives of children are at the forefront of disaster preparedness. Through partnerships with organizations like UNICEF and the United Nations Office for Disaster Risk Reduction (UNDRR), GRMI is amplifying the voices of young people and advocating for more inclusive and sustainable disaster risk reduction policies.`

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

const posters = [...posterImages, ...posterImages]
const eventOneSpeed = 0.5

const downloadImages = async () => {
  for (const poster of posterImages) {
    const downloadUrl = poster.source.replace('/upload/', '/upload/fl_attachment/');
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `poster-${poster.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    await new Promise((resolve) => setTimeout(resolve, 200)); // 200ms delay
    console.log(link)
  }
};



</script>

<style scoped>

</style>