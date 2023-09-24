<template>
    <div>
         <!-- Start main-content -->
      <section
        class="page-title"
        style="background-image: url(/images/background/page-title.jpg)"
      >
        <div class="auto-container">
          <div class="title-outer">
            <h1 class="title">{{ route.params.slug }}</h1>
            <ul class="page-breadcrumb">
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li>{{ route.params.slug }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!--Start Services Details-->
      <section class="services-details" v-if="service">
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

      <section class="" v-if="page">
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

const { data, pending, error } = await useAsyncData("get-data-for-dynamic-page", () => {
  try {
    const allDataRef = databaseRef(nuxtApp.$database, `/`);
    onValue(allDataRef, (snapshot) => {
      if(snapshot.val()) {
        const data = snapshot.val();
        for (let key in data) {
          if (key == "services") {
            unfilteredServices.value = data[key];
            for (let serviceKey in data[key]) {
              services.value.push(data[key][serviceKey]);
              if(data[key][serviceKey].meta_slug === route.params.slug) {
                 service.value = data[key][serviceKey];
              }
            }
          }
          if (key == "pages") {
            unfilteredPages.value = data[key];
            for (let serviceKey in data[key]) {
              if(data[key][serviceKey].slug === route.params.slug) {
                 page.value = data[key][serviceKey];
              }
              pages.value.push(data[key][serviceKey]);
            }
          }
          if (key == 'settings') {
            settings.value = data[key]
          }
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

useSeoMeta({
  title: `${ service.value ? service.value.meta_title : page.value.title } - Yaseo`,
  ogTitle: `${ service.value ? service.value.meta_title : page.value.title } - Yaseo`,
  description: `${ service.value ? service.value.meta_description: page.value.meta_description }`,
  ogDescription: `${ service.value ? service.value.meta_description: page.value.meta_description }`,
  ogImage: "/images/resource/video.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: `${ service.value ? service.value.meta_title : page.value.title } - Yaseo`,
  twitterDescription: `${ service.value ? service.value.meta_description: page.value.meta_description }`,
});


</script>