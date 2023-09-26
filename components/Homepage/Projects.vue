<template>
    <!-- Projects section-->
    <section class="projects-section">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">Recent Work</span>
          <h2>Work showcase</h2>
        </div>
          <carousel :items-to-show="3.5">
            <slide v-for="category in categories" :key="category.id">
              <div class="project-block">
                <div class="inner-box">
                  <div class="image-box">
                    <figure class="image">
                      <nuxt-link :to="`case-studies/${category.name}`"
                        ><img
                          :src="category.image"
                          width="400"
                          height="435"
                          alt=""
                      /></nuxt-link>
                    </figure>
                    <div class="info-box">
                      <nuxt-link :to="`case-studies/${category.name}`" class="read-more"
                        ><i class="fa fa-long-arrow-alt-right"></i
                      ></nuxt-link>
                      <span class="cat">Category</span>
                      <h6 class="title">
                        <nuxt-link :to="`case-studies/${category.name}`"
                          >{{ category.name }}</nuxt-link
                        >
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>

        <!-- <Splide :options="{ rewind: true, perPage: 4, pagination:false }">
          <SplideSlide v-for="(item,index) in categories" :key="index">
              <div class="project-block">
                <div class="inner-box">
                  <div class="image-box">
                    <figure class="image">
                      <nuxt-link :to="`case-studies/${item.name}`"
                        ><img
                          :src="item.image"
                          width="400"
                          height="435"
                          alt=""
                      /></nuxt-link>
                    </figure>
                    <div class="info-box">
                      <nuxt-link :to="`case-studies/${item.name}`" class="read-more"
                        ><i class="fa fa-long-arrow-alt-right"></i
                      ></nuxt-link>
                      <span class="cat">Category</span>
                      <h6 class="title">
                        <nuxt-link :to="`case-studies/${item.name}`"
                          >{{ item.name }}</nuxt-link
                        >
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
          </SplideSlide>
        </Splide> -->
      </div>
    </section>
    <!-- End Projects Section -->
</template>

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
  categories: Array
});

const services = ref(props.services);
const settings = ref(props.settings);
const testimonials = ref(props.testimonials);
const projects = ref(props.projects);
const blogs = ref(props.blogs);
const clients = ref(props.clients);
const categories = ref(props.categories);


</script>