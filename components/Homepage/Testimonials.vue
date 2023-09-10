<script setup>
const props = defineProps({
      settings: Object,
});

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const testimonials = ref([
  {
    name: 'Martin Andre',
    designation: 'Owner Ferndale Apartments',
    text: 'This digital agency exceeded my expectations with their creative designs and exceptional customer service.'
  },
  {
    name: 'Steve Hedge',
    designation: 'Owner Joe Audio',
    text: 'I saw immediate results after hiring this agency for my SEO needs. Highly recommend.'
  },
  {
    name: 'Bernard Peters',
    designation: 'CEO Housewaves',
    text: 'The social media content this agency created for me was amazing! They really understood my brand and audience.'
  },
  {
    name: 'Sophia Simpson',
    designation: 'Owner Careful Choices',
    text: "Thanks to Yaseo's website redesign, my online sales have increased significantly. Couldn't be happier with the outcome."
  }
])
</script>
<template>
     <!-- Testimonial Section Two -->
     <section class="testimonial-section-two">
      <div class="bg bg-pattern-11"></div>
      <div class="auto-container">
        <div class="row">
          <div class="image-column col-lg-6 col-md-12">
            <div class="inner-column">
              <div class="image-box">
                <div class="bg-shape"></div>
                <figure class="image image-4">
                  <img
                    src="/images/resource/thumb-4.jpg"
                    alt=""
                  />
                </figure>
                <figure class="image image-3">
                  <img
                    src="/images/resource/thumb-3.jpg"
                    alt=""
                  />
                </figure>
                <figure class="image image-2">
                  <img
                    src="/images/resource/thumb-2.jpg"
                    alt=""
                  />
                </figure>
                <figure class="image image-1">
                  <img
                    src="/images/resource/thumb-1.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>

          <div class="testimonial-column col-lg-6 col-md-12">
            <div class="inner-column">
              <div class="sec-title">
                <span class="sub-title">Our Testimonials</span>
                <h2>What they’re talking <br />about us</h2>
              </div>

              <div class="carousel-outer">
                <Splide :options="{ rewind: true, pagination:false }">
                  <SplideSlide v-for="(item,index) in testimonials" :key="index">
                    <div class="testimonial-block-two">
                      <div class="inner-box">
                        <div class="image-box">
                          <div class="text">
                            {{ item.text }}
                          </div>
                          <div class="info-box">
                            <h6 class="name">{{ item.name }}</h6>
                            <span class="designation"
                              >{{ item.designation }}</span
                            >
                            <span class="icon icon-quote"></span>
                          </div>
                          <div class="rating">
                            <i class="fa fa-star"></i><i class="fa fa-star"></i
                            ><i class="fa fa-star"></i><i class="fa fa-star"></i
                            ><i class="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Testimonial Section Two -->
</template>


