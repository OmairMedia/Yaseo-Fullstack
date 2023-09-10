<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const props = defineProps({
  services: Array,
  testimonials: Array,
  projects: Array,
  blogs: Array,
  clients: Array,
  settings: Object
});

const services = ref(props.services);
const settings = ref(props.settings);
const testimonials = ref(props.testimonials);
const projects = ref(props.projects);
const blogs = ref(props.blogs);
const clients = ref(props.clients);
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
                  <span class="count-text" data-speed="3000" :data-stop="settings.winningAward"
                    >{{ settings.winningAward }}</span
                  >+
                </div>
                <h6 class="counter-title">Winning Awards</h6>s
              </div>
            </div>

            <!--Counter block-->
            <div class="counter-block-three" data-wow-delay="300ms">
              <div class="inner">
                <div class="count-box counted">
                  <span class="count-text" data-speed="3000" :data-stop="settings.teamMembers"
                    >{{ settings.teamMembers }}</span
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
              href="/videos/home-1.mp4"
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
          <Splide
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
          </Splide>
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
