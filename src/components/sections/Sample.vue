<template>
    <section class="w-full bg-[#FFFFFF]">
      <div class="w-full">
        <img
          src="https://res.cloudinary.com/dmgwwzsnk/image/upload/v1735128110/Rectangle_6_11zon_resht7.png"
          alt=""
          class="w-full"
        />
      </div>
      <div class="mb-[2.56rem]">
        <div class="w-full pl-[5rem] my-[2.56rem] midDesk:pl-[3rem]">
          <h3 class="text-[#0E1C16] font-cabin font-[500] text-[1.5rem] leading-[1.8rem]">MEDIA FROM LAGOS</h3>
        </div>
        <div class="w-[98%] mx-auto grid grid-cols-customGrid gap-[0.5rem] mob:!grid-cols-2 mob:!w-[95%]">
          <article
            v-for="photo in lagosMedia"
            :key="photo.id"
            ref="mediaRefs"
            class="mb-[0.5rem] shadow-md cursor-pointer overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl w-full h-full"
            :class="{'fade-in': isVisible[photo.id]}"
            :data-id="photo.id"
          >
            <img
              :src="photo.source"
              alt="Media image"
              class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
             
            />
          </article>
        </div>
      </div>
      <div class="">
        <div class="w-full pl-[5rem] my-[2.56rem] midDesk:pl-[3rem]">
          <h3 class="text-[#0E1C16] font-cabin font-[500] text-[1.5rem] leading-[1.8rem]">MEDIA FROM KOGI</h3>
        </div>
        <div class="w-[98%] mx-auto grid grid-cols-customGrid gap-[0.5rem] mob:!grid-cols-2 mob:!w-[95%]">
          <article
            v-for="photo in kogiMedia"
            :key="photo.id"
            ref="mediaRefs"
            class="mb-[0.5rem] shadow-md cursor-pointer overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl w-full h-full"
            :class="{'fade-in': isVisible[photo.id]}"
            :data-id="photo.id"
          >
            <img
              :src="photo.source"
              alt="Media image"
              class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
              
            />
          </article>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue"
  
  const mediaRefs = ref([]);
  const isVisible = ref({});
  
  const kogiMedia = [
      {
          id: 1,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862580/IMG_8606_2_11zon_mc1tak.jpg'
      },
      {
          id: 2,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862579/IMG_8607_1_11zon_t9ts1f.jpg'
      },
      {
          id: 3,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862579/IMG_8603_3_11zon_fag6ug.jpg'
      },
      {
          id: 4,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8507_2_11zon_zqcxqf.jpg'
      },
      {
          id: 5,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8599_1_11zon_ssxude.jpg'
      },
      {
          id: 6,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8598_4_11zon_qsjqf6.jpg'
      },
      {
          id: 7,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862578/IMG_8602_2_11zon_l2hv1c.jpg'
      },
      {
          id: 8,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862577/IMG_8559_3_11zon_wxevkm.jpg'
      },
      {
          id: 9,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8569_4_11zon_bkh0ak.jpg'
      },
      {
          id: 10,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8589_1_11zon_ephhti.jpg'
      },
      {
          id: 11,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862574/IMG_8560_1_11zon_gsdthm.jpg'
      },
      {
          id: 12,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862574/IMG_8558_2_11zon_tyzhui.jpg'
      },
      {
          id: 13,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862572/IMG_8515_4_11zon_wr1t3j.jpg'
      },
      {
          id: 14,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862571/IMG_8513_3_11zon_m0nqzg.jpg'
      }
  ]
  
  const lagosMedia = [
      {
          id: 1,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862581/EIP_0005_13_11zon_hwmw8h.jpg'
      },
      {
          id: 2,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862572/EIP_9998_1_11zon_a1hmnl.jpg'
      },
      {
          id: 3,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862570/IMG_8506_1_11zon_uvsjlj.jpg'
      },
      {
          id: 26,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862577/IMG_8592_3_11zon_zwtgbu.jpg'
      },
      {
          id: 27,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862576/IMG_8591_2_11zon_yoetr2.jpg'
      },
      {
          id: 4,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862570/EIP_9989_18_11zon_azeize.jpg'
      },
      {
          id: 5,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862569/EIP_9995_20_11zon_wkuiqd.jpg'
      },
      {
          id: 6,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_0010_16_11zon_kn7unx.jpg'
      },
      {
          id: 7,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_9980_15_11zon_fzs8ss.jpg'
      },
      {
          id: 8,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862568/EIP_9987_17_11zon_p9ey9c.jpg'
      },
      {
          id: 9,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862566/EIP_9985_16_11zon_lchsff.jpg'
      },
      {
          id: 10,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862565/EIP_9971_13_11zon_ghtp2q.jpg'
      },
      {
          id: 11,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862565/EIP_9970_12_11zon_kzhbpc.jpg'
      },
      {
          id: 12,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862563/EIP_9967_9_11zon_xhuqpq.jpg'
      },
      {
          id: 14,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862562/EIP_9959_5_11zon_exb6w2.jpg'
      },
      {
          id: 15,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862561/EIP_9957_3_11zon_i9pu7i.jpg'
      },
      {
          id: 16,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862559/EIP_9954_11_11zon_f1mejy.jpg'
      },
      {
          id: 17,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862560/EIP_9958_4_11zon_v0afz4.jpg'
      },
      {
          id: 18,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862557/EIP_9929_3_11zon_wy6var.jpg'
      },
      {
          id: 19,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862555/EIP_0020_20_11zon_cozh14.jpg'
      },
      {
          id: 20,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862553/EIP_9930_4_11zon_vxdoi9.jpg'
      },
      {
          id: 21,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862561/EIP_9964_7_11zon_d3vmto.jpg'
      },
      {
          id: 22,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862551/EIP_9935_5_11zon_qy4lip.jpg'
      },
      {
          id: 23,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862550/EIP_0012_17_11zon_qkrayv.jpg'
      },
      {
          id: 24,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862551/EIP_9921_21_11zon_cublwt.jpg'
      },
      {
          id: 25,
          source: 'https://res.cloudinary.com/dmgwwzsnk/image/upload/v1734862551/EIP_0009_15_11zon_tlebhr.jpg'
      },
  ]
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible.value[entry.target.dataset.id] = entry.isIntersecting;
      });
    },
    { threshold: 0.1 }
  );
  
  onMounted(() => {
    mediaRefs.value.forEach((ref) => observer.observe(ref));
  });
  
  onUnmounted(() => {
    observer.disconnect();
  });
  
  </script>
  
  <style scoped>
  .fade-in {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s ease-in, visibility 0.5s ease-in;
  }
  
  article {
    visibility: hidden;
    opacity: 0;
  }
  
  </style>