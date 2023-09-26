<script setup>
const props = defineProps({
  services: Array,
  testimonials: Array,
  projects: Array,
  blogs: Array,
  clients: Array,
  settings: Object,
  technologies: Array
});

const services = ref(props.services);
const settings = ref(props.settings);
const testimonials = ref(props.testimonials);
const projects = ref(props.projects);
const blogs = ref(props.blogs);
const clients = ref(props.clients);
const technologies = ref(props.technologies);
</script>
<template>
  <!-- FSB Member -->
  <section class="about-section-four">
    <div class="auto-container">
      <div class="row">
        <div class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInRight animated" data-wow-delay="600ms"
          style="
            visibility: visible;
            animation-delay: 600ms;
            animation-name: fadeInRight;
          ">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">Get to Know</span>
              <h2>FSB Member</h2>
              <div class="text">
                <a href="https://www.fsb.org.uk/" target="_blank">Fsb member</a>
                Yaseo Digital Marketing Services are proud members of the
                Federation Of Small Businesses

                <br>

                <h5 class="title">
              We have 20+ years experience between our Senior Team.
            </h5>
              </div>
            </div>
          
            <div class="sec-title">

              <h2>Microsoft Partner</h2>
              <div class="text">
                Yaseo Digital are proud partners of Microsoft and have the
                technical and sales skills across the full Microsoft products
                and services portfolio, end-to-end. As a Microsoft partner, we
                can support you at any point during your Microsoft journey.

                <br>

                We can provide Microsoft 365 &Azure Technical consultants
                responsible for designing, resourcing and delivering Azure and
                M365 implementation, as well as managing infrastructure
                migration.
              </div>
            </div>
          </div>
        </div>
        <!-- Image Column -->
        <div class="col-xl-6 col-lg-5 col-md-12 col-sm-12">
          <div class="inner-column wow fadeInLeft animated" style="visibility: visible; animation-name: fadeInLeft">
            <p align="left">      
              <a v-for="(technology,index) in technologies" :key="index" :href="technology.link" target="_blank" rel="noreferrer"> 
                <img
                    :src="technology.image"
                    :alt="technology.link" 
                    width="40" 
                    height="40" 
                  /> 
              </a>
            </p>
        </div>
      </div>
    </div>
  </div>
</section></template>
