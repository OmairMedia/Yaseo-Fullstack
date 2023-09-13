<script setup>
const props = defineProps({
  services: Array,
  testimonials: Array,
  projects: Array,
  blogs: Array,
  clients: Array,
  settings: Object,
  video: Object
});

const services = ref(props.services);
const settings = ref(props.settings);
const testimonials = ref(props.testimonials);
const projects = ref(props.projects);
const blogs = ref(props.blogs);
const clients = ref(props.clients);
const video = ref(props.video)
</script>

<template>
        <!-- Banner Section -->
        <section class="banner-section">
      <video class="homepage-video" autoplay muted loop>
        <source :src="video.link" type="video/mp4" />
      </video>
      <a class="volume-btn">
        <i class="volume-icon icon fa fa-waveform-lines" aria-hidden="true"></i>
      </a>
    </section>
    <!-- End Banner Section -->
</template>