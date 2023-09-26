<script setup>
// import { Splide, SplideSlide } from "@splidejs/vue-splide";
// import "@splidejs/vue-splide/css";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
  services: Array,
  testimonials: Array,
  projects: Array,
  blogs: Array,
  clients: Array,
  settings: Object,
  video: Object
});

const services = ref(props.services);
const settings = ref(props.settings);
const testimonials = ref(props.testimonials);
const projects = ref(props.projects);
const blogs = ref(props.blogs);
const clients = ref(props.clients);


const breakpoints = ref( {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    })
</script>
<template>
  <!-- Services Section Two -->
  <section class="services-section-two">
    <div class="bg bg-pattern-10"></div>

    <div class="auto-container">
      <div class="upper-box row">
        <div class="left-column col-lg-6 col-md-12">
          <div class="sec-title light">
            <span class="sub-title">What We Offer</span>
            <h2>
              Services we offer&nbsp;<br />to our clients to <br />grow their
              businesses
            </h2>
          </div>
        </div>

        <div class="right-column col-lg-6 col-md-12">
          <div class="fact-counter-three">
            <!-- Counter block-->
            <div
              class="counter-block-three wow fadeInUp animated"
              style="visibility: visible; animation-name: fadeInUp"
            >
              <div class="inner">
                <div class="count-box counted">
                  <span class="count-text" data-speed="3000" :data-stop="settings.winningAward || 15"
                    >{{ settings.winningAward || 15 }}</span
                  >+
                </div>
                <h6 class="counter-title">Winning Awards</h6>
              </div>
            </div>

            <!--Counter block-->
            <div class="counter-block-three" data-wow-delay="300ms">
              <div class="inner">
                <div class="count-box counted">
                  <span class="count-text" data-speed="3000" :data-stop="settings.teamMembers || 15"
                    >{{ settings.teamMembers || 15 }}</span
                  >+
                </div>
                <h6 class="counter-title">Team Members</h6>
              </div>
            </div>
          </div>

          <div class="video-box">
            <figure class="image">
              <img src="/images/resource/image-4.jpg" alt="" />
            </figure>
            <a
              :href="video.link"
              class="play-btn"
              data-fancybox="gallery"
              data-caption=""
              ><i class="icon fa fa-play" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="outer-box">
        <div class="services-carousel">
          <carousel :items-to-show="5.5" :wrap-around="false" :transition="500" :breakpoints="breakpoints">
            <slide v-for="(service,index) in services" :key="service.id">
              <div class="service-block-two mx-2">
                <div class="inner-box">
                  <span class="count">{{ index + 1 }}</span>
                  <div class="icon-box">
                    <i :class="`icon ${service.icon}`"></i>
                  </div>
                  <h5 class="title">
                    <nuxt-link :to="`/${service.meta_slug}`">{{ service.name }}</nuxt-link>
                  </h5>
                  <div class="text">
                    {{ service.text }}
                  </div>
                </div>
              </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
          <!-- <Splide
            :options="{
              rewind: true,
              perPage: 4,
              gap: '1rem',
              pagination: false,
            }"
          >
            <SplideSlide v-for="(item, index) in services" :key="index">
              <div class="service-block-two">
                <div class="inner-box">
                  <span class="count">{{ index + 1 }}</span>
                  <div class="icon-box">
                    <i :class="`icon ${item.icon}`"></i>
                  </div>
                  <h5 class="title">
                    <nuxt-link :to="`/${item.meta_slug}`">{{ item.name }}</nuxt-link>
                  </h5>
                  <div class="text">
                    {{ item.text }}
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide> -->
        </div>
      </div>

      <div class="bottom-box">
        <div class="text">
          Make your first quality web and app design &amp; development
          <nuxt-link to="/digital-services" class="theme-btn"
            >Find Your Solution</nuxt-link
          >
        </div>
      </div>
    </div>
  </section>
  <!-- End Services Section-->
</template>
