<template>
    <div id="app">
        <Navbar/>
        <section>
            <header>
                <div class="background min-h-[100vh] h-[100vh] grid place-items-center" :style="{ backgroundImage: `url(${bgImage})` }">
                    <h3 class="font-cabin font-[700] text-[3.1rem] text-[#FFFFFF] leading-[4.9rem]">PHOTOS</h3>
                </div>
            </header>
            <main>
                <div class="w-[80%] mx-auto my-[5rem] columns-1 sm:columns-2 md:columns-3 gap-[0.5rem]">
                    <article 
                        v-for="photo in photos" 
                        :key="photo.id" 
                        class="mb-[0.5rem] shadow-md cursor-pointer overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                        
                        <img :src="getImgUrl(photo.source)" 
                            alt="Masonry image"
                            class="w-full h-auto object-cover transition-opacity duration-300 hover:opacity-90" 
                            loading="lazy">
                    </article>
                </div>

            </main>
        </section>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import img from '../assets/icons/BgImage.png'

const bgImage = img

const getImgUrl = (path) => {
    return new URL(`../../public/${path}`, import.meta.url).href;
};

const photos = [
    {
        id: 1,
        source: 'photo1.jpg'
    },
    {
        id: 2,
        source: 'photo2.jpg'
    },
    {
        id: 3,
        source: 'photo3.jpg'
    },
    {
        id: 4,
        source: 'photo4.jpg'
    },
    // {
    //     id: 5,
    //     source: 'photo5.jpg'
    // },
    {
        id: 6,
        source: 'photo6.jpg'
    },
    {
        id: 7,
        source: 'photo7.jpg'
    },
    {
        id: 8,
        source: 'photo8.jpg'
    },
    // {
    //     id: 9,
    //     source: 'photo9.jpg'
    // },
    {
        id: 10,
        source: 'photo10.jpg'
    },
    {
        id: 11,
        source: 'photo11.jpg'
    },
    {
        id: 12,
        source: 'photo12.jpg'
    },
    {
        id: 13,
        source: 'photo13.jpg'
    },
    {
        id: 14,
        source: 'photo14.jpg'
    },
    {
        id: 15,
        source: 'photo15.jpg'
    },
    {
        id: 16,
        source: 'photo16.jpg'
    },
    {
        id: 17,
        source: 'photo17.jpg'
    },
    {
        id: 18,
        source: 'photo18.jpg'
    },
    {
        id: 19,
        source: 'photo19.jpg'
    },
    // {
    //     id: 20,
    //     source: 'photo20.jpg'
    // },
    {
        id: 21,
        source: 'photo21.jpg'
    },
]

</script>

<style scoped>
    .background {
        background-size: cover;
        /* background-blend-mode: overlay; */
        background-repeat: no-repeat;
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        /* background-size: center; */
        /* background-color: rgba(15, 14, 14, 0.504); */
    }

    .masonry {
       grid-auto-rows: 10px;
    }

    .grid-item:nth-child(odd) {
        grid-row-end: span 20;
    }

    .grid-item:nth-child(even) {
        grid-row-end: span 30;
    }
</style>