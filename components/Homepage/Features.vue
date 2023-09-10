<script setup>
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
    <!-- Features Section -->
    <section class="features-section-two">
      <div class="auto-container">
        <div class="outer-box">
          <div class="row">
            <!-- Feature Block Two -->
            <div class="feature-block-two col-lg-4 col-md-12 col-sm-12">
              <div class="inner-box overlay-anim">
                <div class="content">
                  <span class="icon"><i class="flaticon-trophy"></i></span>
                  <h6 class="title text-white">
                    200+ resources sitting on bench
                  </h6>
                  <div class="text">
                    Well recognized for our outstanding work and commitment to
                    excellence in the industry.
                  </div>
                </div>
              </div>
            </div>

            <!-- Feature Block Two -->
            <div class="feature-block-two col-lg-4 col-md-12 col-sm-12">
              <div class="inner-box overlay-anim">
                <div class="content">
                  <span class="icon"><i class="flaticon-medal"></i></span>
                  <h6 class="title">Quality work</h6>
                  <div class="text">
                    We understand that quality work is essential to the success
                    of any business.
                  </div>
                </div>
              </div>
            </div>

            <!-- Feature Block Two -->
            <div class="feature-block-two col-lg-4 col-md-12 col-sm-12">
              <div class="inner-box overlay-anim">
                <div class="content">
                  <span class="icon"
                    ><i class="flaticon-satisfaction"></i
                  ></span>
                  <h6 class="title">Satisfaction guarantee</h6>
                  <div class="text">
                    We are committed to delivering the highest level of service
                    and ensuring that our clients are completely satisfied with
                    our work.
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