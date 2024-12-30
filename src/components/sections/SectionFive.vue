<template>
   <section class="w-full bg-[#FFFFFF] px-[5rem] py-[6.38rem]">
    <h1 aria-label="grmi articles" class="text-[#0E1C16] font-cabin text-[2.25rem] leading-[2.7rem] mb-[3.5rem]">ARTICLES</h1>
    <div class="grid grid-cols-customGrid gap-[1.5rem]">
        <a 
        href="http://" 
        target="_blank" 
        rel="noopener noreferrer"
        v-for="article in articles"
        :key="article.id"
        class="cursor-pointer"
        >
            <article 
            class="flex flex-col gap-[1.8125rem]">
                <div class="w-full h-full max-h-[10.625rem] rounded-[6px] overflow-hidden">
                    <img :src="article.image" alt="" class="flex-grow object-fill h-full w-full max-h-[10.625rem]">
                </div>
                <h3 class="text-[#0E1C16] font-merri text-[1rem] leading-[1.2rem]">
                    {{ article.text }}
                </h3>
            </article>
        </a>
    </div>
   </section>
</template>

<script setup>

const articles = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735124624/Rectangle_5_j2sox5.png',
        text: 'Understanding the Impact of Flooding on Children and Youths in Lagos: Insights from a Pilot Survey'
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735124623/Rectangle_5_1_qdcpqe.png',
        text: 'Insights from GRMI’s Pilot Survey on Flood Impact on Education in Kogi State'
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735124627/Rectangle_5_2_wneaeg.png',
        text: `Empowering Kogi’s Youth and Children for a Resilient Future: GRMI’s Actions for Flood Risk Reduction`
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735124624/Rectangle_5_3_gye1uz.png',
        text: `Building a resilient future: How GRMI seeks to champion children’s charter for disaster risk reduction in Nigeria`
    },

]
</script>

<style lang="scss" scoped>

</style>