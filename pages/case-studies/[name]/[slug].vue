<template>
  <div>
    <!-- Start main-content -->
    <section class="page-title" style="background-image: url(/images/cases/mowana/final/banner.png)">
      <div class="auto-container">
        <div class="title-outer">
          <h1 class="title">Mowana</h1>
          <ul class="page-breadcrumb">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/case-studies">Case Studies</nuxt-link></li>
            <li><nuxt-link :to="`/case-studies/${route.params.name}`">{{ route.params.name }}</nuxt-link></li>
            <li>{{ route.params.slug }}</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- end main-content -->

    <!--Project Details Start-->
    <section class="project-details" v-if="casedata">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="project-details__top">
              <div class="project-details__img">
                <img :src="casedata.image" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="project-details__content">
          <div class="row">
            <div class="col-xl-8 col-lg-8">
              <div class="project-details__content-left">
                <h3 class="mb-4">{{ casedata.name }}</h3>
                <p v-html="casedata.description">
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4">
              <div class="project-details__content-right">
                <div class="project-details__details-box">
                  <div class="project-details__bg-shape"></div>
                  <ul class="list-unstyled project-details__details-list">
                    <li>
                      <p class="project-details__client">Date</p>
                      <h4 class="project-details__name">{{ casedata.date }}</h4>
                    </li>
                    <li>
                      <p class="project-details__client">Client</p>
                      <h4 class="project-details__name">{{ casedata.client }}</h4>
                    </li>
                    <li>
                      <p class="project-details__client">Website</p>
                      <h4 class="project-details__name">{{ casedata.website }}</h4>
                    </li>
                    <li>
                      <p class="project-details__client">Location</p>
                      <h4 class="project-details__name">{{ casedata.location }}</h4>
                    </li>
                    <li>
                      <p class="project-details__client">Value</p>
                      <h4 class="project-details__name">{{ casedata.value }}</h4>
                    </li>
                    <!-- <li>
                        <div class="project-details__social">
                          <a href="#"><i class="fab fa-twitter"></i></a>
                          <a href="#"><i class="fab fa-facebook"></i></a>
                          <a href="#"><i class="fab fa-pinterest-p"></i></a>
                          <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                      </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Project Details End-->
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const route = useRoute()
const cases = ref([])
const casedata = ref({
  banner: "",
  bannerImage: `https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/cases%2F-NeCiiq3btb80ot6vkiZ_banner_banner.png?alt=media&token=6d70da29-1913-4f18-a7dd-891ce1b8092f`,
  category: "Graphics & Design",
  client: "Jamie D'souza",
  date: "10 January, 2023",
  description: `<p><span style="color: rgb(106, 106, 106);">Mowana's client came to us and wanted a branding and later an eCommerce website to be built under Mowana.uk later to sell her African-themed lingerie for the large lady-sized market. Her inspiration for the brand was Channel &amp; Dior; very black and white. The name was incorporated with the emoji of 'infinity'; "infinity, the concept of something that is unlimited, endless, without bound"</span></p>`,
  icon: "",
  id: "-NeCiiq3btb80ot6vkiZ",
  image: "https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/cases%2F-NeCiiq3btb80ot6vkiZ_image_3.jpg?alt=media&token=c8e0dbce-45c7-4c7b-8fc2-8d106a30761f",
  location: "New Jersey, USA",
  name: "Mowana",
  slug: "mowana",
  title: "Here to Know About This Case",
  value: "$100",
  website: ""
});
const unfilteredCases = ref([])
import { onValue, ref as databaseRef } from "firebase/database";
const getFullData = () => {
  const allDataRef = databaseRef(nuxtApp.$database, `/cases`);
  onValue(allDataRef, (snapshot) => {
    if (snapshot.val()) {
      console.log('snapshot.val() -> ', snapshot.val());
    }
  });
}

const { data, pending, error } = await useAsyncData("get-data-for-case", getFullData());

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
</script>