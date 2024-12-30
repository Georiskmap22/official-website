<template>
    <section class="w-full bg-[#FFFFFF]">
      <div class="w-full">
        <img src="https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735128110/Rectangle_6_11zon_resht7.png" alt="">
      </div>
  
      <div class="mb-[2.56rem]">
        <div class="w-full pl-[5rem] my-[2.56rem] midDesk:pl-[3rem]">
          <h3 class="text-[#0E1C16] font-cabin font-[500] text-[1.5rem] leading-[1.8rem]">MEDIA FROM LAGOS</h3>
        </div>
        <div class="w-[98%] mx-auto grid grid-cols-customGrid mob:!grid-cols-2 mob:!w-[95%]">
          <article
            v-for="photo in lagosMedia"
            :key="photo.id"
            class="mb-[0.5rem] shadow-md cursor-pointer overflow-hidden transform transition-transform duration-300 hover:shadow-2xl w-full h-full"
          >
            <img
              :src="photo.source"
              :data-src="photo.source"
              alt="Media image"
              class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
              @load="photo.loading = false"
            />
          </article>
        </div>
      </div>
  
      <div>
        <div class="w-full pl-[5rem] my-[2.56rem] midDesk:pl-[3rem]">
          <h3 class="text-[#0E1C16] font-cabin font-[500] text-[1.5rem] leading-[1.8rem]">MEDIA FROM KOGI</h3>
        </div>
        <div class="w-[98%] mx-auto grid grid-cols-customGrid mob:!grid-cols-2 mob:!w-[95%]">
          <article
            v-for="photo in kogiMedia"
            :key="photo.id"
            class="mb-[0.5rem] shadow-md cursor-pointer overflow-hidden transition-transform duration-300 hover:shadow-2xl w-full h-full"
          >
            <img
              :src="photo.source"
              :data-src="photo.source"
              alt="Media image"
              class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
              @load="photo.loading = false"
            />
          </article>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  // Placeholder image URL
  const placeholderImage = 'https://via.placeholder.com/150';
  
  // Define media with a loading state
  const kogiMedia = reactive([
  {
          id: 1,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862580/IMG_8606_2_11zon_mc1tak.jpg',
          loading: true
      },
      {
          id: 2,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862579/IMG_8607_1_11zon_t9ts1f.jpg',
          loading: true
      },
      {
          id: 3,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862579/IMG_8603_3_11zon_fag6ug.jpg',
          loading: true
      },
      {
          id: 4,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8507_2_11zon_zqcxqf.jpg',
          loading: true
      },
      {
          id: 5,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8599_1_11zon_ssxude.jpg',
          loading: true
      },
      {
          id: 6,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8598_4_11zon_qsjqf6.jpg',
          loading: true
      },
      {
          id: 7,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8602_2_11zon_l2hv1c.jpg',
          loading: true
      },
      {
          id: 8,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862577/IMG_8559_3_11zon_wxevkm.jpg',
          loading: true
      },
      {
          id: 9,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8569_4_11zon_bkh0ak.jpg',
          loading: true
      },
      {
          id: 10,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8589_1_11zon_ephhti.jpg',
          loading: true
      },
  ]);
  
  const lagosMedia = reactive([
  {
          id: 1,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862581/EIP_0005_13_11zon_hwmw8h.jpg',
          loading: true
      },
      {
          id: 2,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862572/EIP_9998_1_11zon_a1hmnl.jpg',
          loading: true
      },
      {
          id: 3,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862570/IMG_8506_1_11zon_uvsjlj.jpg',
          loading: true
      },
      {
          id: 26,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862577/IMG_8592_3_11zon_zwtgbu.jpg',
          loading: true
      },
      {
          id: 27,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8591_2_11zon_yoetr2.jpg',
          loading: true
      },
      {
          id: 4,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862570/EIP_9989_18_11zon_azeize.jpg',
          loading: true
      },
      {
          id: 5,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862569/EIP_9995_20_11zon_wkuiqd.jpg',
          loading: true
      },
      {
          id: 6,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_0010_16_11zon_kn7unx.jpg',
          loading: true
      },
      {
          id: 7,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_9980_15_11zon_fzs8ss.jpg',
          loading: true
      },
      {
          id: 8,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_9987_17_11zon_p9ey9c.jpg',
          loading: true
      }
  ]);
  </script>
  