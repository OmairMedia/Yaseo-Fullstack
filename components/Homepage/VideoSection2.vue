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
const video = ref(props.video);

</script>
<template>
  <!-- Video Section Two -->
  <section class="video-section-two p-0">
    <div class="auto-container">
      <div class="video-box-two">
        <figure class="image">
          <img src="/images/resource/video.jpg" alt="" />
          <a
            :href="video.link"
            class="play-now"
            data-fancybox="gallery"
            data-caption=""
            ><i class="icon fa fa-play" aria-hidden="true"></i
            ><span class="ripple"></span
          ></a>
        </figure>

        <div class="info-box">
          <h2 class="title">{{settings.projectsCompleted || 500}}+</h2>
          <div class="text">
            Projects have been<br />
            completed
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Video Section Two -->
</template>
