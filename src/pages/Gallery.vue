<template>
    <div id="app">
        <Navbar/>
        <section>
            <header>
                <div class="background min-h-[100vh] h-[100vh] grid place-items-center" >
                    <h3 class="font-cabin font-[700] text-[3.1rem] text-[#FFFFFF] leading-[4.9rem]">PHOTOS</h3>
                </div>
            </header>
            <main>
                <div class="w-[80%] mx-auto my-[5rem] columns-1 sm:columns-2 md:columns-3 gap-[0.5rem]">
                    <!-- Skeleton Loader -->
                    <article 
                        v-if="loadingImages"
                        v-for="n in 20" 
                        :key="n" 
                        class="mb-[0.5rem] bg-gray-300 animate-pulse h-[250px] rounded-lg">
                    </article>

                    <!-- Images -->
                    <article 
                        v-else
                        v-for="photo in photos" 
                        :key="photo.id" 
                        class="mb-[0.5rem] shadow-md cursor-pointer overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                        
                        <img 
                            :src="photo.source" 
                            alt="Masonry image"
                            class="w-full h-auto object-cover transition-opacity duration-300 hover:opacity-90"
                            @load="imageLoaded"
                        >
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
import { onMounted, ref } from 'vue';

const loadingImages = ref(true)
const photos = ref([])

onMounted(()=>{
    setTimeout(()=>{
        photos.value = [
            {
                id: 1,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862581/EIP_0005_13_11zon_hwmw8h.jpg',
                lazyLoad: false
            },
            {
                id: 2,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862580/IMG_8606_2_11zon_mc1tak.jpg',
                lazyLoad: false
            },
            {
                id: 3,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862579/IMG_8607_1_11zon_t9ts1f.jpg',
                lazyLoad: false
            },
            {
                id: 4,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862579/IMG_8603_3_11zon_fag6ug.jpg',
                lazyLoad: false
            },
            {
                id: 5,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8507_2_11zon_zqcxqf.jpg',
                lazyLoad: false
            },
            {
                id: 6,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8599_1_11zon_ssxude.jpg',
                lazyLoad: false
            },
            {
                id: 7,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8598_4_11zon_qsjqf6.jpg '
            },
            {
                id: 8,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8602_2_11zon_l2hv1c.jpg'
            },
            {
                id: 9,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862577/IMG_8559_3_11zon_wxevkm.jpg'
            },
            {
                id: 10,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862577/IMG_8592_3_11zon_zwtgbu.jpg'
            },
            {
                id: 11,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8591_2_11zon_yoetr2.jpg'
            },
            {
                id: 12,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8569_4_11zon_bkh0ak.jpg'
            },
            {
                id: 13,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8589_1_11zon_ephhti.jpg'
            },
            {
                id: 14,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862574/IMG_8560_1_11zon_gsdthm.jpg'
            },
            {
                id: 15,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862574/IMG_8558_2_11zon_tyzhui.jpg'
            },
            {
                id: 16,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862572/IMG_8515_4_11zon_wr1t3j.jpg'
            },
            {
                id: 17,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862572/EIP_9998_1_11zon_a1hmnl.jpg'
            },
            {
                id: 18,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862571/IMG_8513_3_11zon_m0nqzg.jpg'
            },
            {
                id: 19,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862571/EIP_9993_19_11zon_jarzzk.jpg'
            },
            {
                id: 20,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862570/EIP_9989_18_11zon_azeize.jpg'
            },
            {
                id: 21,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862570/IMG_8506_1_11zon_uvsjlj.jpg'
            },
            {
                id: 22,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862569/EIP_9995_20_11zon_wkuiqd.jpg'
            },
            {
                id: 23,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_0010_16_11zon_kn7unx.jpg'
            },
            {
                id: 24,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_9980_15_11zon_fzs8ss.jpg'
            },
            {
                id: 25,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_9987_17_11zon_p9ey9c.jpg'
            },
            {
                id: 26,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862566/EIP_9985_16_11zon_lchsff.jpg'
            },
            {
                id: 27,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862565/EIP_9971_13_11zon_ghtp2q.jpg'
            },
            {
                id: 28,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862565/EIP_9970_12_11zon_kzhbpc.jpg'
            },
            {
                id: 29,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862565/EIP_9979_14_11zon_xcqxjw.jpg'
            },
            {
                id: 30,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862564/EIP_9969_11_11zon_rckwgk.jpg'
            },
            {
                id: 31,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862563/EIP_9968_10_11zon_fn6kst.jpg'
            },
            {
                id: 32,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862562/EIP_9959_5_11zon_exb6w2.jpg'
            },
            {
                id: 33,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862561/EIP_9957_3_11zon_i9pu7i.jpg'
            },
            {
                id: 34,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862561/EIP_9964_7_11zon_d3vmto.jpg'
            },
            {
                id: 35,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862560/EIP_9956_2_11zon_jmddwr.jpg'
            },
            {
                id: 36,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862559/EIP_9954_11_11zon_f1mejy.jpg'
            },
            {
                id: 37,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862559/EIP_9952_9_11zon_po0bf4.jpg'
            },
            {
                id: 38,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862558/EIP_9955_12_11zon_lhmsjb.jpg'
            },
            {
                id: 39,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862557/EIP_9929_3_11zon_wy6var.jpg'
            },
            {
                id: 40,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862555/EIP_9953_10_11zon_mbsh7y.jpg'
            },
            {
                id: 41,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862555/EIP_0020_20_11zon_cozh14.jpg'
            },
            {
                id: 42,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862554/EIP_9922_1_11zon_pn1qve.jpg'
            },
            {
                id: 43,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862554/EIP_0019_19_11zon_xqpcqb.jpg'
            },
            {
                id: 44,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862553/EIP_9930_4_11zon_vxdoi9.jpg'
            },
            {
                id: 45,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862553/EIP_0007_14_11zon_qxbx2g.jpg'
            },
            {
                id: 46,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862553/EIP_9936_6_11zon_o5ni4r.jpg'
            },
            {
                id: 47,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862553/EIP_9925_2_11zon_ydsmic.jpg'
            },
            {
                id: 48,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862551/EIP_9921_21_11zon_cublwt.jpg'
            },
            {
                id: 49,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862551/EIP_9935_5_11zon_qy4lip.jpg'
            },
            {
                id: 50,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862550/EIP_0012_17_11zon_qkrayv.jpg'
            },
            {
                id: 51,
                source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862551/EIP_9921_21_11zon_cublwt.jpg'
            },
        ];
        loadingImages.value = false
    }, 2000)
})

// const photos = [
//     {
//         id: 1,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862581/EIP_0005_13_11zon_hwmw8h.jpg',
//         lazyLoad: false
//     },
//     {
//         id: 2,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862580/IMG_8606_2_11zon_mc1tak.jpg',
//         lazyLoad: false
//     },
//     {
//         id: 3,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862579/IMG_8607_1_11zon_t9ts1f.jpg',
//         lazyLoad: false
//     },
//     {
//         id: 4,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862579/IMG_8603_3_11zon_fag6ug.jpg',
//         lazyLoad: false
//     },
//     {
//         id: 5,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8507_2_11zon_zqcxqf.jpg',
//         lazyLoad: false
//     },
//     {
//         id: 6,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8599_1_11zon_ssxude.jpg',
//         lazyLoad: false
//     },
//     {
//         id: 7,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8598_4_11zon_qsjqf6.jpg '
//     },
//     {
//         id: 8,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8602_2_11zon_l2hv1c.jpg'
//     },
//     {
//         id: 9,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862577/IMG_8559_3_11zon_wxevkm.jpg'
//     },
//     {
//         id: 10,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862577/IMG_8592_3_11zon_zwtgbu.jpg'
//     },
//     {
//         id: 11,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8591_2_11zon_yoetr2.jpg'
//     },
//     {
//         id: 12,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8569_4_11zon_bkh0ak.jpg'
//     },
//     {
//         id: 13,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8589_1_11zon_ephhti.jpg'
//     },
//     {
//         id: 14,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862574/IMG_8560_1_11zon_gsdthm.jpg'
//     },
//     {
//         id: 15,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862574/IMG_8558_2_11zon_tyzhui.jpg'
//     },
//     {
//         id: 16,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862572/IMG_8515_4_11zon_wr1t3j.jpg'
//     },
//     {
//         id: 17,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862572/EIP_9998_1_11zon_a1hmnl.jpg'
//     },
//     {
//         id: 18,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862571/IMG_8513_3_11zon_m0nqzg.jpg'
//     },
//     {
//         id: 19,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862571/EIP_9993_19_11zon_jarzzk.jpg'
//     },
//     {
//         id: 20,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862570/EIP_9989_18_11zon_azeize.jpg'
//     },
//     {
//         id: 21,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862570/IMG_8506_1_11zon_uvsjlj.jpg'
//     },
//     {
//         id: 22,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862569/EIP_9995_20_11zon_wkuiqd.jpg'
//     },
//     {
//         id: 23,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_0010_16_11zon_kn7unx.jpg'
//     },
//     {
//         id: 24,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_9980_15_11zon_fzs8ss.jpg'
//     },
//     {
//         id: 25,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_9987_17_11zon_p9ey9c.jpg'
//     },
//     {
//         id: 26,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862566/EIP_9985_16_11zon_lchsff.jpg'
//     },
//     {
//         id: 27,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862565/EIP_9971_13_11zon_ghtp2q.jpg'
//     },
//     {
//         id: 28,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862565/EIP_9970_12_11zon_kzhbpc.jpg'
//     },
//     {
//         id: 29,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862565/EIP_9979_14_11zon_xcqxjw.jpg'
//     },
//     {
//         id: 30,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862564/EIP_9969_11_11zon_rckwgk.jpg'
//     },
//     {
//         id: 31,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862563/EIP_9968_10_11zon_fn6kst.jpg'
//     },
//     {
//         id: 32,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862562/EIP_9959_5_11zon_exb6w2.jpg'
//     },
//     {
//         id: 33,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862561/EIP_9957_3_11zon_i9pu7i.jpg'
//     },
//     {
//         id: 34,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862561/EIP_9964_7_11zon_d3vmto.jpg'
//     },
//     {
//         id: 35,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862560/EIP_9956_2_11zon_jmddwr.jpg'
//     },
//     {
//         id: 36,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862559/EIP_9954_11_11zon_f1mejy.jpg'
//     },
//     {
//         id: 37,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862559/EIP_9952_9_11zon_po0bf4.jpg'
//     },
//     {
//         id: 38,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862558/EIP_9955_12_11zon_lhmsjb.jpg'
//     },
//     {
//         id: 39,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862557/EIP_9929_3_11zon_wy6var.jpg'
//     },
//     {
//         id: 40,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862555/EIP_9953_10_11zon_mbsh7y.jpg'
//     },
//     {
//         id: 41,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862555/EIP_0020_20_11zon_cozh14.jpg'
//     },
//     {
//         id: 42,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862554/EIP_9922_1_11zon_pn1qve.jpg'
//     },
//     {
//         id: 43,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862554/EIP_0019_19_11zon_xqpcqb.jpg'
//     },
//     {
//         id: 44,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862553/EIP_9930_4_11zon_vxdoi9.jpg'
//     },
//     {
//         id: 45,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862553/EIP_0007_14_11zon_qxbx2g.jpg'
//     },
//     {
//         id: 46,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862553/EIP_9936_6_11zon_o5ni4r.jpg'
//     },
//     {
//         id: 47,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862553/EIP_9925_2_11zon_ydsmic.jpg'
//     },
//     {
//         id: 48,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862551/EIP_9921_21_11zon_cublwt.jpg'
//     },
//     {
//         id: 49,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862551/EIP_9935_5_11zon_qy4lip.jpg'
//     },
//     {
//         id: 50,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862550/EIP_0012_17_11zon_qkrayv.jpg'
//     },
//     {
//         id: 51,
//         source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862551/EIP_9921_21_11zon_cublwt.jpg'
//     },
// ]

</script>

<style scoped>
    .background {
        background-size: cover;
        background-image: url('/public/ins26.png');
        background-color: rgba(0, 255, 255, 0.25);
        background-blend-mode: overlay;
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