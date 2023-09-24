<template>
  <div>
    <!-- Start main-content -->
    <section
      class="page-title"
      style="
        background-image: url(/images/background/page-title.jpg);
      "
    >
      <div class="auto-container">
        <div class="title-outer">
          <h1 class="title">Services</h1>
          <ul class="page-breadcrumb">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- end main-content -->

    <!-- Services Section -->
    <section class="">
      <div class="container pb-90">
        <div class="row">
          <!-- Service Block -->
          <div
            v-for="(service, index) in services"
            :key="index"
            class="service-block col-lg-4 col-md-6 col-sm-12"
          >
            <div class="inner-box">
              <div class="icon-box">
                <i :class="`icon ${service.icon}`"></i>
              </div>
              <h5 class="title">
                <nuxt-link :to="`/${service.meta_slug}`">{{
                  service.name
                }}</nuxt-link>
              </h5>
              <div class="text">{{ service.text }}</div>
              <nuxt-link
                :to="`/${service.meta_slug}`"
                class="read-more"
                ><i class="fa fa-long-arrow-alt-right"></i> Read more</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section-->
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Web Development | Branding | Digital Marketing - Yaseo",
  ogTitle: "Web Development | Branding | Digital Marketing - Yaseo",
  description:
    "Looking for designers, developers, digital marketers? We at YASEO provide afforable and result oriented solutions to our customers on time!",
  ogDescription:
    "Looking for designers, developers, digital marketers? We at YASEO provide afforable and result oriented solutions to our customers on time!",
  ogImage: "https://yaseo.co.uk/images/resource/video.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Web Development | Branding | Digital Marketing - Yaseo",
  twitterDescription:
    "Looking for designers, developers, digital marketers? We at YASEO provide afforable and result oriented solutions to our customers on time!",
});

import { onValue, ref as databaseRef } from "firebase/database";
const nuxtApp = useNuxtApp();
const services = ref([]);

const getServices = () => {
  const allDataRef = databaseRef(nuxtApp.$database, "/services");
  onValue(allDataRef, (snapshot) => {
    if (snapshot.val()) {
      snapshot.forEach((x) => {
        services.value.push(x.val());
      });
    }
  });
};

const { data, pending, error } = await useAsyncData(
  "get-data-for-services",
  () => getServices()
);

</script>
