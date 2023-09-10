<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const items = ref([
  {
    link: 'https://boltec.co.uk/',
    image: 'https://yaseo.co.uk/images/clients/boltec.png'
  },
  {
    link: 'https://www.housewavesuk.com/',
    image: 'https://yaseo.co.uk/images/clients/housewave.png'
  },
  {
    link: 'https://sparklehomecleaning.co.uk/',
    image: 'https://yaseo.co.uk/images/clients/sparkle.png'
  },
  {
    link: 'https://360apartments.co.uk/',
    image: 'https://yaseo.co.uk/images/clients/360apartments.png'
  },
  {
    link: 'https://360stays.co.uk/',
    image: 'https://yaseo.co.uk/images/clients/360stays.png'
  },
  {
    link: 'https://ariaelcreatives.com/',
    image: 'https://yaseo.co.uk/images/clients/ariaelcreatives.png'
  },
  {
    link: 'https://ferndaleapartments.co.uk/',
    image: 'https://yaseo.co.uk/images/clients/ferndale-apartments.png'
  },
  {
    link: 'https://www.heathrowliving.co.uk/',
    image: 'https://yaseo.co.uk/images/clients/heathrow-living.png'
  },
  {
    link: 'https://hassanazim.com/',
    image: 'https://yaseo.co.uk/images/clients/hitman-hassan.png'
  }
])
</script>
<template>
  <!-- Clients Section -->
  <section class="clients-section style-two">
    <div class="auto-container">
      <!-- Sponsors Outer -->
      <div class="sponsors-outer">
        <Splide :options="{ rewind: true, perPage: 3, pagination:false }">
          <SplideSlide v-for="(item,index) in items" :key="index">
            <li class="slide-item">
              <a :href="item.link"
                ><img
                  :src="item.image"
                  alt=""
              /></a>
            </li>
          </SplideSlide>
        </Splide>
      
      </div>
    </div>
  </section>
  <!--End Clients Section -->
</template>
