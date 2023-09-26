<script setup>

// import { Splide, SplideSlide } from '@splidejs/vue-splide';
// import '@splidejs/vue-splide/css';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const props = defineProps({
  services: Array,
  testimonials: Array,
  projects: Array,
  blogs: Array,
  clients: Array,
  settings: Object,
  clients: Array
});

const services = ref(props.services);
const settings = ref(props.settings);
const testimonials = ref(props.testimonials);
const projects = ref(props.projects);
const blogs = ref(props.blogs);
const clients = ref(props.clients);

</script>
<template>
  <!-- Clients Section -->
  <section class="clients-section style-two">
    <div class="auto-container">
      <!-- Sponsors Outer -->
      <div class="sponsors-outer">
        <Carousel id="gallery" :items-to-show="3.5">
          <Slide v-for="(item,index) in clients" :key="index">
            <li class="slide-item">
              <a :href="item.link"
                ><img
                  :src="item.image"
                  alt=""
              /></a>
            </li>
          </Slide>
        </Carousel>
        <!-- <Splide :options="{ rewind: true, perPage: 3, pagination:false }">
          <SplideSlide v-for="(item,index) in clients" :key="index">
            <li class="slide-item">
              <a :href="item.link"
                ><img
                  :src="item.image"
                  alt=""
              /></a>
            </li>
          </SplideSlide>
        </Splide> -->
      </div>
    </div>
  </section>
  <!--End Clients Section -->
</template>
