<script setup>
</script>

<template>
  <div class="hero-image">
    <div class="hero-text h-full flex flex-col w-full justify-center items-center ">
            <h1 class="text-[2.2rem] md:text-[2.45rem] text-center cabin  lg:text-[3.831rem]  font-semibold">GeoHazards; Predict, Prepare, and Protect.</h1>

            <p class="M20 white text-[0.8rem] md:text-[1.4rem] merri leading-[2rem] text-center" style="margin-bottom: 16px;"
            
            >Promoting a sustainable environment through the           development, generating applications, and <br/>
            dissemination of Geohazard maps using advanced Geospatial Technology and Artificial Intelligence
            </p>
            <div class="flex gap-4 flex-col md:flex-row">
            <router-link class="" :to="{ name: 'floodEvent'}">
              <button class=" text-lg bg-brandgreen transitionAll rounded-[0.5rem] px-10 py-4 w-full">
                View Flood Maps
              </button>
            </router-link>
            <router-link to="/dashboard">
              <button class="px-10 py-4 text-lg border-[#EAF7F3] border bg-none transitionAll rounded-[0.5rem] w-full">View Past Flood Events</button>
            </router-link>
          </div>
    </div>   
  </div> 
</template>

<style scoped> 
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734874726/bg1_11zon_ekilyg.jpg');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
  /* margin-top: 105px; */
}

.hero-container {
  /* padding: 0 40px 0 40px; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hero-text {
  /* height: 100vh; */
  padding: 0 40px 0 40px;
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  color: white;
}

/* .hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
} */

.hero-text button:hover {
  background-color: #555;
  color: white;
}

.btn-success {
  margin-right: 16px;
}

@media (max-width: 485px) {
  .btn-success {
    margin-right: 0;
  }

  /* margin-bottom: 16px; */
}

@media (max-width: 455px) {
  .btn-success {
    margin-bottom: 16px;
  }

  /* margin-bottom: 16px; */
}
</style>