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
        <div class="categories-container">
           <!-- Project Block -->
           <div class="project-block" v-for="(category,index) in categories" :key="index">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <nuxt-link :to="`case-studies/${category.name}`">
                      <img
                        :src="category.image"
                        alt=""
                    />
                  </nuxt-link>
                  </figure>
                  <div class="info-box">
                    <nuxt-link
                      :to="`case-studies/${category.name}`"
                      class="read-more"
                      ><i class="fa fa-long-arrow-alt-right"></i
                    ></nuxt-link>
                    <span class="cat">Category</span>
                    <h6 class="title">
                      <nuxt-link :to="`/case-studies/${category.name}`">{{ category.name }}</nuxt-link>
                    </h6>
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

const {data, pending, error} = await useAsyncData("get-data-for-all-case-categories", () => getFullData());

const metaData = ref({
  title: `Case Studies | Our Previous Projects | Yaseo`,
  description: 'Yaseo worked with numerous clients in all these years, Yaseo has never failed to fullfill requirements of their project.',
  ogTitle: `Case Studies | Our Previous Projects | Yaseo`,
  ogType: 'article',
  ogUrl: `https://yaseo.co.uk/case-studies`,
  ogImage: 'https://yaseo.co.uk/images/resource/video.jpg',
  ogDescription: 'Yaseo worked with numerous clients in all these years, Yaseo has never failed to fullfill requirements of their project.',
  twitterCard: 'summary_large_image',
  twitterTitle: `Case Studies | Our Previous Projects | Yaseo`,
  twitterDescription: 'Yaseo worked with numerous clients in all these years, Yaseo has never failed to fullfill requirements of their project.',
  twitterSite: '@Yaseo_Digital',
  twitterImage: 'https://yaseo.co.uk/images/resource/video.jpg',
  twitterCreator: '@Yaseo_Digital',
})

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
    { rel: 'canonical', href: `https://yaseo.co.uk/case-studies` }
  ]
})
</script>


<style scoped>
.categories-container {
  display:flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}

.project-block {
  width: 300px;
  height: 200px;
}
</style>