<template>
    <!-- Projects section-->
    <section class="projects-section">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">Recent Work</span>
          <h2>Work showcase</h2>
        </div>


        <Splide :options="{ rewind: true, perPage: 4, pagination:false }">
          <SplideSlide v-for="(item,index) in projects" :key="index">
              <div class="project-block">
                <div class="inner-box">
                  <div class="image-box">
                    <figure class="image">
                      <nuxt-link :to="`case-studies/${item.slug}`"
                        ><img
                          :src="item.image"
                          width="400"
                          height="435"
                          alt=""
                      /></nuxt-link>
                    </figure>
                    <div class="info-box">
                      <nuxt-link :to="item.category" class="read-more"
                        ><i class="fa fa-long-arrow-alt-right"></i
                      ></nuxt-link>
                      <span class="cat">{{ item.category }}</span>
                      <h6 class="title">
                        <nuxt-link :to="`case-studies/${item.slug}`"
                          >{{ item.name }}</nuxt-link
                        >
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
    <!-- End Projects Section -->
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const projects = ref([
  {
    name: 'Mowana',
    slug: 'mowana',
    image: '/images/cases/mowana/logo-10.jpg',
    category: 'branding'
  }
])
</script>