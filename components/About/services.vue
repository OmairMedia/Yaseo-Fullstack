<template>
  <div>
    <!-- Services Section -->
    <section class="services-section pt-0">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">What We’re Offering</span>
          <h2>Services we’re offering to <br />our customers.</h2>
        </div>

        <div class="row">
          <div
            class="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
            style="visibility: visible; animation-name: fadeInUp"
            v-for="(sv, index) in services"
            :key="index"
          >
            <div class="inner-box">
              <div class="icon-box">
                <i :class="`icon ${sv.icon}`"></i>
              </div>
              <h5 class="title">
                <nuxt-link :to="sv.slug">{{ sv.name }}</nuxt-link>
              </h5>
              <div class="text">{{ sv.text }}</div>
              <nuxt-link :to="sv.slug" class="read-more"
                ><i class="fa fa-long-arrow-alt-right"></i> Read more</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="bottom-box">
          <div class="text">
            Trust the experts for all your
            <strong>web design &amp; development</strong> needs.
          </div>
          <nuxt-link
            to="digital-services"
            class="theme-btn btn-style-one"
            ><span class="btn-title">Explore now</span></nuxt-link
          >
        </div>
      </div>
    </section>
    <!-- End Services Section-->
  </div>
</template>

<script setup>
const props = defineProps({
  services: Array,
  settings: Object,
});

const settings = ref(props.settings)
const services = ref(props.services);

console.log('services -> ',services)
</script>
