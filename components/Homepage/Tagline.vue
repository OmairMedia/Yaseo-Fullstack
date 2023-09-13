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
     <div class="">
      <!-- Tagline -->
     <section class="services-section">
      <div class="auto-container">
        <div class="sec-title text-center">
          <h2 id="top-text">
            <span id="we-help-your-brand">We help your brand</span> to grow and
            <br />standout in this noisy digital world.
          </h2>
        </div>
      </div>
    </section>
     </div>
</template>