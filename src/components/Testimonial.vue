<script setup>

const testimonials = [
    {
        id: 1,
        name: 'Azeez Tobi Abubakar',
        status: 'World Economic Forum Global Shapers Community,',
        line: 'Ilorin Climate Action Project Lead, Ilorin Hub - Nigeria',
        message: 'The flood maps produced by Geohazard Risk Mapping Initiative were an absolute game changer for our climate action project. With their accurate and detailed mapping, we were able to better assess the communities that are susceptible to floods in Ilorin East and West Local Government Area of Kwara State Nigeria. The maps guide our flood awareness campaign and other climate adaptation project that we conducted in those communities.',
        src: 'testimony1.jpeg'
    },
    {
        id: 2,
        name: 'Christa Campbell',
        status: 'Director | Water, Industry Solutions at Esri - USA.',
        line: '',
        message: 'The flood maps created by the Geohazard Risk Mapping Initiative have offered insightful data that governments, communities, and individuals can use to better prepare for flood events.',
        src: 'testimony2.jpg'
    },
    {
        id: 3,
        name: 'Pauline Okeyo',
        status: 'Senior Solution Engineer, Esri',
        line: '',
        message: `GRMI’s commitment to advancing the application of GIS in tackling flood-related challenges is truly commendable, as they have empowered their communities with essential skills in flood risk mapping. They have enabled more informed decision-making and fostered resilience in communities frequently impacted by floods. Their dedication to leveraging location intelligence for disaster risk reduction is a testament to their vital role in promoting sustainable development and protecting lives and livelihoods in Africa.`,
        src: 'testimony3.png'
    },
]

    const getImgUrl = (path) => {
        return new URL(`../../public/${path}`, import.meta.url).href;
    };
   
</script>

<template>
    <div id="testimonial" class="h-auto pt-[3rem] w-full bg-[#EAF7F3] relative pb-[10rem]">
        <div class=" w-[45rem] max-w-[80%] mx-auto leading-[3rem] font-semibold cabin text-[2.5rem] text-center text-[#134A39] tab:text-[2rem] mob:text-[1.5rem]"> Trusted by Industry Leaders and Experts Worldwide </div>

        <div id="slideContainer" class="mt-[4rem] pl-[5rem] flex overflow-x-auto gap-6 w-full no-scrollbar scroll-smooth tab:pl-0 tab:w-[90%] tab:mx-auto text-[1.25rem] tab:text-[1rem]"
        :class=" testimonials.length <= 2? 'contain': 'pl-[5rem]'">
            <article v-for="testimonial in testimonials" :key="testimonial.id" class="px-[1.9rem] py-[1.5rem] rounded-[0.9rem] flex flex-col gap-[0.6rem] bg-white shadow-md text-[0.9rem] h-100 w-[20rem] grow shrink-0 basis-1/3 tab:basis-3/5 mob:basis-full">
                <div class="flex gap-[1.2rem] items-center font-merri text-[#0B0B0B] font-bold mb-[0.9rem]">
                    <div class="">
                        <div class="w-[2.6rem] h-[2.6rem] rounded-full overflow-hidden">
                            <img :src="getImgUrl(testimonial.src)" class="w-full h-full overflow-hidden" alt="">
                        </div>
                    </div>
                    <div>
                        <h3 class="name">
                            {{ testimonial.name }}
                        </h3>
                        <p class="status text-[#969696] text-[0.7rem]">{{ testimonial.status }}</p>
                        <p v-if="testimonial.line.length > 0" class="status text-[#969696] text-[0.7rem] leading-[1]">{{ testimonial.line }}</p>
                        
                    </div>
                </div>
                <p class="comment">
                    {{ testimonial.message }}
                </p>
            </article>
        </div>
    </div>
</template>

<style scoped>
</style>