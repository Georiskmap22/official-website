<script setup>
import AOS from 'aos';
import { nextTick, onMounted } from 'vue'

onMounted(() => {
  nextTick(() => {
    AOS.refresh();
  });
});
</script>

<template>
      <div class="container-section w-full">
            <div class="container m-auto text-center py-[78px] w-full" >
                <div class="hero-text ">
                        <div class="text-[1.4rem] cabin md:text-[2.2rem] uppercase font-semibold text-center" 
                        style="margin-bottom: 55px;"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        >What we do</div>
                        <p 
                        class="text-center merri leading-20 text-[1rem] md:text-[1.5rem]"
                        data-aos="fade-up"
                        data-aos-duration="1000" data-aos-delay="300"
                        >
                            Geohazards Risk Mapping Initiative focuses on identifying and mapping areas at risk of various natural hazards such as floods, drought, and heatwaves. We leverage on advanced geospatial technology, Artificial Intelligence, and scientific research to create detailed risk maps, which are then used to inform and support disaster preparedness, mitigation, and response efforts.
                        </p>
                    </div>
            </div>
        </div>
</template>

<style scoped>
/* .wrapper {
    max-height: 100px;
} */

.container-section {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../assets/icons/bg3.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0 120px;

}

@media (max-width: 767px) {
    .container-section {
        padding: 0 20px 0 20px;
    }

}


.hero-text {
    max-width: 1488px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    /* position: absolute; */
    /* top: 50%; */
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
    color: white;
}

.hero-text button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;
}

.hero-text button:hover {
    background-color: #555;
    color: white;
}
</style>