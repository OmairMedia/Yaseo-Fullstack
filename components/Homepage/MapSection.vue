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
  <!-- Map Section-->
  <section class="map-section">
    <iframe
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.605683720642!2d-0.6162592841226574!3d51.48375182025274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767ae29d07b8cb%3A0x297bac6b6dcf4631!2s58%20The%20Arches%2C%20Windsor%2C%20UK!5e0!3m2!1sen!2s!4v1681141431064!5m2!1sen!2s"
    >
    </iframe>

    <div class="auto-container">
      <div class="info-box">
        <div class="text">
          {{ settings.address }}
        </div>
        <ul class="info-list">
          <li>
            <i class="fa fa-envelope"></i>
            <a :href="`mailto:${settings.email}`">{{ settings.email }}</a>
          </li>
          <li>
            <i class="fa fa-phone-square"></i>
            <a :href="`tel:${settings.phone}`">{{ settings.phone }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!--End Map Section-->
</template>
