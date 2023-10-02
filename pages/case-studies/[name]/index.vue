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
            <li>{{ route.params.name }}</li>
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
           <div class="project-block" v-for="(category,index) in cases" :key="index">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <nuxt-link :to="`/case-studies/${route.params.name}/${category.slug}`">
                      <img
                        :src="category.image"
                        height="200"
                        width="300"
                        alt=""
                    />
                  </nuxt-link>
                  </figure>
                  <div class="info-box">
                    <nuxt-link
                      :to="`/case-studies/${route.params.name}/${category.slug}`"
                      class="read-more"
                      ><i class="fa fa-long-arrow-alt-right"></i
                    ></nuxt-link>
                    <span class="cat">Category</span>
                    <h6 class="title">
                      <nuxt-link :to="`/case-studies/${route.params.name}/${category.slug}`">{{ category.name }}</nuxt-link>
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
const cases = ref([])
const unfilteredCases = ref([])

const route = useRoute()
const getFullData = () => {
  cases.value = [];
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
            const check = unfilteredCases.value[serviceKey].category.includes(route.params.name);
            if(check) {
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

const {data, pending, error} = await useAsyncData("get-data-for-case-studies", () => getFullData());


const metaData = ref({
  title: `Case Studies | ${route.params.name} - Yaseo`,
  description: 'Yaseo worked with numerous clients in all these years, Yaseo has never failed to fullfill requirements of their project.',
  ogTitle: `Case Studies | ${route.params.name} - Yaseo`,
  ogType: 'article',
  ogUrl: `https://yaseo.co.uk/case-studies/${route.params.name}`,
  ogImage: 'https://yaseo.co.uk/images/resource/video.jpg',
  ogDescription: 'Yaseo worked with numerous clients in all these years, Yaseo has never failed to fullfill requirements of their project.',
  twitterCard: 'summary_large_image',
  twitterTitle: `Case Studies | ${route.params.name} - Yaseo`,
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
    { rel: 'canonical', href: `https://yaseo.co.uk/case-studies/${route.params.name}` }
  ]
})

onMounted(() => {
  console.log('cases->',cases.value)
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