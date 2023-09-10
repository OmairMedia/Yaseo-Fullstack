<template>
  <div>
    <HomepageBanner/>
    <HomepageTagline/>
    <HomepageProjects/>
    <HomepageServiceShowcase/>
    <HomepageFunFacts/>
    <HomepageWhatWeOffer :services="services"/>
    <HomepageFsb/>
    <HomepageMicrosoft/>
    <HomepageTestimonials/>
    <HomepageProjects/>
    <HomepageServicesList/>
    <HomepageVideoSection2/>
    <HomepageContact :settings="settings"/>
    <HomepageCallToAction :settings="settings"/>
    <LazyHomepageBlogs :blogs="blogs"/>
    <HomepageClients/>
    <HomepageMapSection :settings="settings"/>
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
const blogs = ref([])
const unfilteredServices = ref([])
const services = ref([])

const getServices = () => {
  const allDataRef = databaseRef(nuxtApp.$database, "/services");
  onValue(allDataRef, (snapshot) => {
    if (snapshot.val()) {
      snapshot.forEach((x) => {
        services.value.push(x.val())
      })
    }
  });
}
const getSettings = async () => {
  const allDataRef = databaseRef(nuxtApp.$database, "/settings");
  onValue(allDataRef, (snapshot) => {
    if (snapshot.val()) {
      const data = snapshot.val();
      settings.value = data;
    }
  });
};
const getAllData = async () => {
  await getServices()
  await getSettings()
};
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
      }
    }
  });
}

const {data, pending, error} = await useAsyncData("get-data-for-index", () => getFullData());
</script>
