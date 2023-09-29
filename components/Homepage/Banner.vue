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
        <section class="banner-section" v-if="video">
          <iframe :src="video.link" style="min-height: 700px;" class="homepage-video" autoplay muted loop>
          </iframe>
          <!-- <a class="volume-btn">
            <i class="volume-icon icon fa fa-waveform-lines" aria-hidden="true"></i>
          </a> -->
      </section>
    <!-- End Banner Section -->
</template>