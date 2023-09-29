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
            <h1 class="title">Blogs</h1>
            <ul class="page-breadcrumb">
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- end main-content -->

      <!-- News Section -->
      <section class="bg-silver-light" v-if="blogs">
        <div class="container pb-90">
          <div class="">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="query" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary" @click="handleSearch" type="button" id="button-addon2">Submit</button>
            </div>
          </div>
          <div class="row">
            <!-- Seo For Accountants 11 Aug, 2023 -->
            <div 
             class="news-block col-xl-4 col-lg-6 col-md-6"
             v-for="(blog,index) in blogs"
             :key="index"
             
             >
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <nuxt-link :to="'blogs/' + blog.meta_slug"
                      ><img
                        :src="blog.image"
                        alt=""
                    /></nuxt-link>
                  </figure>
                </div>
                <div class="content-box">
                  <span class="date">{{ blog.date }}</span>
                  <span class="post-info"
                    ><i class="fa fa-user-circle"></i> by {{ blog.author }}</span
                  >
                  <h5 class="title">
                    <nuxt-link :to="'blogs/' + blog.slug"
                      >{{ blog.title }}</nuxt-link
                    >
                  </h5>
                  <div class="text">
                    {{ blog.excerpt }}
                  </div>
                  <nuxt-link
                  :to="'blogs/' + blog.slug"
                    class="read-more"
                    ><i class="fa fa-long-arrow-alt-right"></i> Read More</nuxt-link
                  >
                </div>
              </div>
            </div>


            <!-- <div class="d-flex flex-row justify-content-center align-items-center">
              <nav aria-label="Page navigation">
               
              </nav>
             
            </div>
            <div class="">
              <ul class="pagination pagination-sm">
                  <li class="page-item">
                    <button @click="nextPage" class="page-link" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li class="page-item"><button class="page-link" v-for="(page,index) in last_page" @click="nextPageSpecific(page)" :key="index">{{ page }}</button></li>
                  <li class="page-item">
                    <button @click="previousPage" class="page-link" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              <p>{{ from }} - {{ to }} of {{ total }}</p>
            </div> -->
          </div>
        </div>
      </section>
      <!--End News Section -->
      <section v-else>
          <p>Loading...</p>
      </section>
  </div>
</template>

<script setup>

import { onValue, ref as databaseRef } from "firebase/database";
import moment from "moment";
const nuxtApp = useNuxtApp();
const blogs = ref([]);
const query = ref("");
let total = ref(0);
let page = ref(1);
let per_page = ref(2)
let to = ref(1);
let from = ref(1);
let current_page = ref(1)
let last_page = ref(1)

const getAllBlogs = () => {
    blogs.value = [];
    const blogsRef = databaseRef(nuxtApp.$database, "/blogs");
    onValue(blogsRef, (snapshot) => {
      if (snapshot.val()) {
      let allblogs = [];  
      snapshot.forEach((x) => {
         allblogs.push(x.val());
      });

      // Pagination parameters
      // const perPage = per_page.value;
      // const currentPage = page.value;
      // const startIndex = (currentPage - 1) * perPage;
      // const endIndex = startIndex + perPage;
      allblogs.sort((a, b) => {
        let adate = moment(a.date).valueOf()
        let bdate = moment(b.date).valueOf()
        // let total = adate - bdate;
        return bdate > adate
      });
      // Slice the array to get the current page's data
     
      // Set the data and pagination values
      // total.value = blogs.value.length;
      // from.value = startIndex + 1;
      // to.value = Math.min(endIndex, total.value);
      // current_page.value = currentPage;
      // last_page.value = Math.ceil(total.value / perPage);

      if (query.value) {
        const lowSearch = String(query.value).toLowerCase();
        allblogs = allblogs.filter((obj) => {
          return Object.values(obj).some((val) =>
            String(val).toLowerCase().includes(lowSearch)
          );
        });
      }

      blogs.value = allblogs

      }
    });
  
    

};

const { pending, error} = await useAsyncData("get-all-blogs", () => getAllBlogs());

const nextPage = async () => {
  if (page.value < last_page.value) {
    page.value++;
    await getAllBlogs();
  }
}

const nextPageSpecific = async (pageNumber) => {
  if (pageNumber >= 1 && pageNumber <= last_page.value) {
    page.value = pageNumber;
    await getAllBlogs();
  }
}

const previousPage = async () => {
  if (page.value > 1) {
    page.value--;
    await getAllBlogs();
  }
}

const handleSearch = () => {
  console.log('query -> ',query.value)
  getAllBlogs()
}

const metaData = ref({
  title: `Blog | Yaseo Business Blogs | Yaseo`,
  description: 'Yaseo blogs provides visitors on help Branding, logo design and branding ideas UX and UI blog. SEO tips and ideas are beneficial for visitors',
  ogTitle: `Blog | Yaseo Business Blogs | Yaseo`,
  ogType: 'article',
  ogUrl: `https://yaseo.co.uk/blogs`,
  ogImage: 'https://yaseo.co.uk/images/resource/video.jpg',
  ogDescription: 'Yaseo blogs provides visitors on help Branding, logo design and branding ideas UX and UI blog. SEO tips and ideas are beneficial for visitors',
  twitterCard: 'summary_large_image',
  twitterTitle: `Blog | Yaseo Business Blogs | Yaseo`,
  twitterDescription: 'Yaseo blogs provides visitors on help Branding, logo design and branding ideas UX and UI blog. SEO tips and ideas are beneficial for visitors',
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
    { rel: 'canonical', href: `https://yaseo.co.uk/blogs` }
  ]
})
</script>
