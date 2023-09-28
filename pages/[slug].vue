<template>
    <div>
  
         <!-- Start main-content -->
      <section
        class="page-title"
        style="background-image: url(/images/background/page-title.jpg)"
      >
        <div class="auto-container">
          <div class="title-outer">
            <h1 class="title" v-if="page">{{ page.title }}</h1>
            <h1 class="title" v-if="service">{{ service.name }}</h1>
            <ul class="page-breadcrumb">
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li v-if="page">{{ page.title  }}</li>
              <li v-if="service">{{ service.name  }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!--Start Services Details-->
      <section class="services-details" v-if="service && !page">
        <div class="container">
          <div class="row">
            <!--Start Services Details Sidebar-->
            <div class="col-xl-4 col-lg-4">
              <div class="service-sidebar">
                <!--Start Services Details Sidebar Single-->
                <div class="sidebar-widget service-sidebar-single">
                  <div class="sidebar-service-list">
                    <ul>
                      <li v-for="(serv,index) in services" :key="index" :class="{'current': serv.meta_slug === route.params.slug}">
                        <nuxt-link :to="serv.meta_slug" 
                          ><i class="fas fa-angle-right"></i
                          ><span>{{ serv.name  }}</span></nuxt-link
                        >
                      </li>
                     
                    </ul>
                  </div>

                  <div class="service-details-help">
                    <div class="help-shape-1"></div>
                    <div class="help-shape-2"></div>
                    <h2 class="help-title">
                      Contact with <br />
                      us for any <br />
                      advice
                    </h2>
                    <div class="help-icon">
                      <span class="lnr-icon-phone-handset"></span>
                    </div>
                    <div class="help-contact">
                      <p>Need help? Talk to an expert</p>
                      <nuxt-link :to="`tel:${settings.phone}`">{{ settings.phone }}</nuxt-link>
                    </div>
                  </div>
                </div>
                <!--End Services Details Sidebar-->
              </div>
            </div>

            <!--Start Services Details Content-->
            <div class="col-xl-8 col-lg-8">
              <div class="services-details__content">               
                <div class="content mt-40" v-html="service.description">
                </div>
                <!-- FAQ -->
                <div class="mt-25">
                  <h3>Frequently Asked Question</h3>
                  <ul
                    class="accordion-box wow fadeInRight animated"
                    style="visibility: visible; animation-name: fadeInRight"
                  >
                    <!--Block-->
                    <li class="accordion block" :class="{'active-block': isActive }" v-for="(f,index2) in service.faqs" :key="f.question">
                      <div class="acc-btn" @click="setCurrentTab(index2)"> 
                        {{ f.question }}
                        <div class="icon fa fa-plus"></div>
                      </div>
                      <div class="acc-content" v-if="tab == index2">
                        <div class="content">
                          <div class="text">
                            {{ f.answers }}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--End Services Details Content-->
          </div>
        </div>
      </section>
      <!--End Services Details-->

      <section class="" v-if="page && !service">
        <div class="container">
           <div v-html="page.content"></div>
        </div>
      </section>
    </div>
</template>

<script setup>
import { onValue, ref as databaseRef } from "firebase/database";
const nuxtApp = useNuxtApp();
const route = useRoute();
const page = ref(null);
const tab = ref(0);
const unfilteredServices = ref([]);
const services = ref([]);
const service = ref(null);
const unfilteredPages = ref([]);
const pages = ref([]);
const isActive = ref(false);
const settings = ref({});
const metaData = ref({
  title: '',
  description: '',
  ogTitle: '',
  ogType: 'article',
  ogUrl: `https://yaseo.co.uk/${route.params.slug}`,
  ogImage: '',
  ogDescription: '',
  ogImage: '',
  twitterCard: '',
  twitterTitle: '',
  twitterDescription: '',
  twitterSite: '@Yaseo_Digital',
  twitterImage: 'https://yaseo.co.uk/images/resource/video.jpg',
  twitterCreator: '@Yaseo_Digital',
})

const { data, pending, error } = await useAsyncData("get-data-for-dynamic-page", () => {
  try {
    const allDataRef = databaseRef(nuxtApp.$database, `/`);
    page.value = null;
    service.value = null;
    services.value = [];
    pages.value = [];
    onValue(allDataRef, (snapshot) => {
      if(snapshot.val()) {
        const data = snapshot.val();
        for (let key in data) {
          if (key == "services") {
            unfilteredServices.value = data[key];
            for (let serviceKey in unfilteredServices.value) {
              services.value.push(unfilteredServices.value[serviceKey]);
              if(unfilteredServices.value[serviceKey].meta_slug === route.params.slug) {
                 service.value = unfilteredServices.value[serviceKey];
              }
            }
          }
          if (key == "pages") {
            unfilteredPages.value = data[key];
            for (let serviceKey in unfilteredPages.value) {
              if(unfilteredPages.value[serviceKey].slug === route.params.slug) {
                 page.value = unfilteredPages.value[serviceKey];
              }
              pages.value.push(unfilteredPages.value[serviceKey]);
            }
          }
          if (key == 'settings') {
            settings.value = data[key]
          }
        }
        
        if(page.value) {
          console.log('page.value -> ',page.value)
          metaData.value.title = page.value.meta_title;
          metaData.value.description = page.value.meta_description;
          metaData.value.ogTitle = page.value.meta_title;
          metaData.value.ogDescription = page.value.meta_description;
          metaData.value.ogType = page.value.meta_title;
          metaData.value.ogImage = "/images/resource/video.jpg";
          metaData.value.twitterCard = "summary_large_image";
          metaData.value.twitterTitle = page.value.meta_title;
          metaData.value.twitterDescription = page.value.meta_description;
        }

        if(service.value) {
          console.log('service.value -> ',service.value)

          metaData.value.title = service.value.meta_title;
          metaData.value.description = service.value.meta_description;
          metaData.value.ogTitle = service.value.meta_title;
          metaData.value.ogDescription = service.value.meta_description;
          metaData.value.ogImage = "/images/resource/video.jpg";
          metaData.value.twitterCard = "summary_large_image";
          metaData.value.twitterTitle = service.value.meta_title;
          metaData.value.twitterDescription = service.value.meta_description;
        }
      }
    });
  } catch (err) {
    console.log("err -> ", err);
  }
}
);

const setCurrentTab = (index) => {
  tab.value = index
}

// useHead({
//   title: `${ service.value ? service.value.meta_title : page.value.meta_title } - Yaseo`,
//   meta: [
//   { property: 'og:title', content: `${ service.value ? service.value.meta_title : page.value.meta_title } - Yaseo` }
//   ]
// })



useHead({
  title: `${metaData.value.title}`,
  meta: [
    { name: 'description', content: `${metaData.value.description}` },
    { name: 'og:title', content: `${metaData.value.ogTitle}` },
    { name: 'og:type', content: `${metaData.value.ogType}` },
    { name: 'og:url', content: `${metaData.value.ogUrl}` },
    { name: 'og:image', content: `${metaData.value.ogImage}` },
    { name: 'og:description', content: `${metaData.value.ogDescription}` },
    { name: 'twitter:card', content: `${metaData.value.twitterCard}` },
    { name: 'twitter:title', content: `${metaData.value.twitterTitle}` },
    { name: 'twitter:description', content: `${metaData.value.twitterDescription}` },
    { name: 'twitter:site', content: `${metaData.value.twitterSite}` },
    { name: 'twitter:image', content: `${metaData.value.twitterImage}` },
    { name: 'twitter:creator', content: `${metaData.value.twitterCreator}` },
  ],
  link: [
    { rel: 'canonical', href: `https://yaseo.co.uk/${route.params.slug}` }
  ]
})


// useServerSeoMeta({
//   title: () => `${ metaData.value.title }`,
//   ogTitle: () => `${ metaData.value.ogTitle }`,
//   description: () => `${ metaData.value.description }`,
//   ogDescription: () =>  `${ metaData.value.ogDescription }`,
//   ogImage: () => `${metaData.value.ogImage}`,
//   twitterCard: () => `${metaData.value.twitterCard}`,
//   twitterTitle: () => `${ metaData.value.twitterTitle }`,
//   twitterDescription: () => `${ metaData.value.twitterDescription }`,
// });


</script>