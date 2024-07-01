<template>
   <section>
    <div class="w-[80%] mx-auto my-[4rem] grid grid-cols-temp2 gap-[2rem]">
        <div>
            <h1 class="text-brandgreen font-cabin font-[600] text-[2.5rem] leading-[2rem] mb-[4rem] tab2:text-[2rem] tab2:mb-[2.5rem]">Flood Extent Map</h1>
            <div class="flex flex-col gap-[2rem] mb-[2rem]">
                <div class="w-[90%] tab:w-full">
                    <a href="https://emmanuelemezina1.projects.earthengine.app/view/akosombo-floods">
                        <p class="text-[#484848] font-merri font-[400] text-[0.8rem] mb-[0.5rem] leading-[0] tab2:text-[0.7rem] tab2:mb-[0.2rem]">Ghana</p>
                        <h3 class="text-[#121212] font-merri font-[400] text-[1.3rem] leading-[1.8rem] tab2:text-[1rem] tab2:leading-[1.5rem]">
                            2023 flood inundation within Akosombo and its environ
                        </h3>
                    </a>
                </div>
                <div class="w-[90%] tab:w-full">
                    <a href="https://ee-geohazardrisk-mapping.projects.earthengine.app/view/kogistatefloodassessment2022">
                        <p class="text-[#484848] font-merri font-[400] text-[0.8rem] mb-[0.5rem] leading-[0] tab2:text-[0.7rem] tab2:mb-[0.2rem]">Nigeria</p>
                        <h3 class="text-[#121212] font-merri font-[400] text-[1.3rem] leading-[1.8rem] tab2:text-[1rem] tab2:leading-[1.5rem]">
                            Kogi State 2022 flood inundation along the Benue river and its environ
                        </h3>
                    </a>
                </div>
            </div>
            <button class="transition px-6 py-4 text-[0.8rem] bg-brandgreen text-white hover:text-brandgreen hover:bg-white hover:outline-2 shadow-md  merri rounded-[0.25rem] tab2:px-4 tab2:py-2">View All</button>
        </div>
        <div>
            <img src="../../public/extent_map.png" alt="">
        </div>
    </div>
   </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>