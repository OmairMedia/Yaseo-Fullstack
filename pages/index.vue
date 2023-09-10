<template>
  <div>
    <HomepageBanner :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageTagline :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageProjects :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageServiceShowcase :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageFunFacts :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageWhatWeOffer :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageFsb :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageMicrosoft :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageTestimonials :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageProjects :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageServicesList :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageVideoSection2 :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageContact :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageCallToAction :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <LazyHomepageBlogs :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageClients :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
    <HomepageMapSection :settings="settings" :services="services" :testimonials="testimonials" :projects="projects" :blogs="blogs" :clients="clients"/>
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

const getFullData = () => {
  const allDataRef = databaseRef(nuxtApp.$database, "/");
  onValue(allDataRef, (snapshot) => {
    if (snapshot.val()) {
      const data = snapshot.val();
      for(let key in data) {
        if(key == 'settings') {
          settings.value = data[key]
        }
        if(key == 'services') {
          unfilteredServices.value = data[key];
          for(let serviceKey in data[key]) {
              services.value.push(data[key][serviceKey])
          }
        }
        if(key == 'projects') {
          unfilteredProjects.value = data[key];
          for(let serviceKey in unfilteredProjects.value) {
              projects.value.push(unfilteredProjects.value[serviceKey])
          }
        }
        if(key == 'clients') {
          unfilteredClients.value = data[key];
          for(let serviceKey in unfilteredClients.value) {
            clients.value.push(unfilteredClients.value[serviceKey])
          }
        }
        if(key == 'blogs') {
          unfilteredblogs.value = data[key];
          for(let serviceKey in unfilteredblogs.value) {
            blogs.value.push(unfilteredblogs.value[serviceKey])
          }
        }
      }
    }
  });
}

const {data, pending, error} = await useAsyncData("get-data-for-index", () => getFullData());
</script>
