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
  <!-- Fun Fact Section -->
  <section
    class="fun-fact-section pt-0"
    style="background-image: url(/images/background/1.png)"
  >
    <div class="auto-container">
      <div class="upper-box">
        <span class="title">Happy customers</span>
        <div class="number-outer">
          <div
            class="numbers"
            style="
              background-image: url(/images/resource/image-1.jpg);
            "
          >
            500+
          </div>
        </div>
      </div>

      <div class="fact-counter">
        <div class="row">
          <!-- Counter block-->
          <div
            class="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <div class="inner">
              <i class="icon flaticon-campaign"></i>
              <div class="count-box counted">
                <span class="count-text" data-speed="3000" data-stop="960"
                  >{{ settings.projectsCompleted || 500 }}</span
                >
              </div>
              <h6 class="counter-title">Projects completed</h6>
            </div>
          </div>

          <!--Counter block-->
          <div
            class="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
            data-wow-delay="300ms"
            style="
              visibility: visible;
              animation-delay: 300ms;
              animation-name: fadeInUp;
            "
          >
            <div class="inner">
              <i class="icon flaticon-reputation"></i>
              <div class="count-box counted">
                <span class="count-text" data-speed="3000" data-stop="32"
                  >{{ settings.activeClients || 15 }}</span
                >
              </div>
              <h6 class="counter-title">Active clients</h6>
            </div>
          </div>

          <!--Counter block-->
          <div
            class="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
            data-wow-delay="600ms"
            style="
              visibility: visible;
              animation-delay: 600ms;
              animation-name: fadeInUp;
            "
          >
            <div class="inner">
              <i class="icon flaticon-coffee"></i>
              <div class="count-box counted">
                <span class="count-text" data-speed="3000" data-stop="89"
                  >{{ settings.cupOfCoffee || 198 }}</span
                >
              </div>
              <h6 class="counter-title">Cups of coffee</h6>
            </div>
          </div>

          <!--Counter block-->
          <div
            class="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
            data-wow-delay="900ms"
            style="
              visibility: visible;
              animation-delay: 900ms;
              animation-name: fadeInUp;
            "
          >
            <div class="inner">
              <i class="icon flaticon-social-campaign"></i>
              <div class="count-box counted">
                <span class="count-text" data-speed="3000" data-stop="763"
                  >{{ settings.satisfiedClients || 500}}</span
                >
              </div>
              <h6 class="counter-title">Satisfied customers</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Fun Fact Section -->
</template>
