<script setup>
const props = defineProps({
  services: Array,
  testimonials: Array,
  projects: Array,
  blogs: Array,
  clients: Array,
  settings: Object,
  section1: Object
});

const services = ref(props.services);
const settings = ref(props.settings);
const testimonials = ref(props.testimonials);
const projects = ref(props.projects);
const blogs = ref(props.blogs);
const clients = ref(props.clients);
</script>
<template>
    <!-- Features Section -->
    <section class="features-section-two">
      <div class="auto-container">
        <div class="outer-box">
          <div class="row">
            <!-- Feature Block Two -->
            <div class="feature-block-two col-lg-4 col-md-12 col-sm-12">
              <div class="inner-box overlay-anim">
                <div class="content">
                  <span class="icon"><i :class="`flaticon-${section1.box_1_icon}`"></i></span>
                  <h6 class="title text-white">
                    {{ section1.box_1_title }}
                  </h6>
                  <div class="text">
                    {{ section1.box_1_description }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Feature Block Two -->
            <div class="feature-block-two col-lg-4 col-md-12 col-sm-12">
              <div class="inner-box overlay-anim">
                <div class="content">
                  <span class="icon"><i :class="`flaticon-${section1.box_2_icon}`"></i></span>
                  <h6 class="title">{{ section1.box_2_title }}</h6>
                  <div class="text">
                    {{ section1.box_2_description }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Feature Block Two -->
            <div class="feature-block-two col-lg-4 col-md-12 col-sm-12">
              <div class="inner-box overlay-anim">
                <div class="content">
                  <span class="icon"><i :class="`flaticon-${section1.box_3_icon}`"></i></span>
                  <h6 class="title">{{ section1.box_3_title }}</h6>
                  <div class="text">
                    {{ section1.box_3_description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Offer Section -->
</template>