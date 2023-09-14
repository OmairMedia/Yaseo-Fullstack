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
          <h1 class="title">Case Studies</h1>
          <ul class="page-breadcrumb">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>Case Studies</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- end main-content -->

    <!-- Gallery Section -->
    <section class="">
      <div class="container">
        <div class="row g-3">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <!-- Project Block -->
            <div class="project-block" v-for="(category,index) in cases" :key="index">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <nuxt-link :to="category.slug">
                      <img
                        :src="category.image"
                        alt=""
                    />
                  </nuxt-link>
                  </figure>
                  <div class="info-box">
                    <nuxt-link
                      :to="category.slug"
                      class="read-more"
                      ><i class="fa fa-long-arrow-alt-right"></i
                    ></nuxt-link>
                    <span class="cat">Category</span>
                    <h6 class="title">
                      <nuxt-link :to="category.slug">{{ category.name }}</nuxt-link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Gallery Section -->
  </div>
</template>


<script setup>

useSeoMeta({
  title: 'Digital Marketing | Web Design Company London - Yaseo',
  ogTitle: 'Digital Marketing | Web Design Company London - Yaseo',
  description: 'The best designers and developers at affordable prices with effective graphic designs, online marketing, websites, mobile apps, branding.',
  ogDescription: 'The best designers and developers at affordable prices with effective graphic designs, online marketing, websites, mobile apps, branding.',
  ogImage: 'https://yaseo.co.uk/images/resource/video.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Digital Marketing | Web Design Company London - Yaseo',
  twitterDescription: 'The best designers and developers at affordable prices with effective graphic designs, online marketing, websites, mobile apps, branding.'
})

import { onValue, ref as databaseRef } from "firebase/database";
const nuxtApp = useNuxtApp();
const settings = ref({})
const unfilteredblogs = ref([])
const blogs = ref([])
const unfilteredServices = ref([])
const services = ref([])
const unfilteredClients = ref([])
const clients = ref([])
const unfilteredProjects = ref([])
const projects = ref([])
const testimonials = ref([])
const categories = ref([])
const unfilteredCategories = ref([])
const cases = ref([])
const unfilteredCases = ref([])

const route = useRoute()
const getFullData = () => {
  const allDataRef = databaseRef(nuxtApp.$database, "/");
  onValue(allDataRef, (snapshot) => {
    if (snapshot.val()) {
      const data = snapshot.val();
      for(let key in data) {
        if(key == 'settings') {
          settings.value = data[key]
        }
        if(key == 'cases') {
          unfilteredCases.value = data[key];
          for(let serviceKey in unfilteredCases.value) {
            if(unfilteredCases.value[serviceKey].category == route.params.name){
              cases.value.push(unfilteredCases.value[serviceKey])
            }
          }
        }
        if(key == 'categories') {
          unfilteredCategories.value = data[key];
          for(let serviceKey in unfilteredCategories.value) {
            categories.value.push(unfilteredCategories.value[serviceKey])
          }
        }

      }
    }
  });
}

const {data, pending, error} = await useAsyncData("get-data-for-index", () => getFullData());
</script>