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


            <div class="d-flex flex-column justify-content-center align-items-center">
              <nav aria-label="Page navigation" v-if="last_page > 1">
                <ul class="pagination pagination-lg">
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
              </nav>
              <p>{{ from }} - {{ to }} of {{ total }}</p>
            </div>
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
const nuxtApp = useNuxtApp();
const blogs = ref([]);
let total = ref(0);
let page = ref(1);
let per_page = ref(10)
let to = ref(1);
let from = ref(1);
let current_page = ref(1)
let last_page = ref(1)

const getAllBlogs = () => {
    blogs.value = [];
    const blogsRef = databaseRef(nuxtApp.$database, "/blogs");
    onValue(blogsRef, (snapshot) => {
      if (snapshot.val()) {
        snapshot.forEach((x) => {
          blogs.value.push(x.val());
        });
        total = blogs.value.length
        from.value = (page.value - 1) * per_page.value + 1;
        to.value = from.value + per_page.value <= total ? from.value + per_page.value - 1 : length;
        current_page.value = page.value;
        last_page.value = total % per_page.value == 0 ? total / per_page.value : Math.floor(total / per_page.value) + 1;
        // Sort if sort is passed
        blogs.value.sort((a, b) =>
            a['date'] > b['date'] ? 1 : b['date'] > a['date'] ? -1 : 0
        );

        blogs.value = blogs.value.slice(from.value - 1, to.value);
      }
    });
  
   

    // if (search) {
    //   var lowSearch = search.toLowerCase();
    //   users = users.filter((obj) => {
    //     console.log(obj);
    //     return Object.values(obj).some((val) =>
    //       String(val).toLowerCase().includes(lowSearch)
    //     );
    //   });
    // }

};
const { pending, error} = await useAsyncData("get-all-blogs", () => getAllBlogs());

useSeoMeta({
  title: "Blog | Yaseo Business Blogs | Yaseo",
  ogTitle: "Blog | Yaseo Business Blogs | Yaseo",
  description:
    "Yaseo blogs provides visitors on help Branding, logo design and branding ideas UX and UI blog. SEO tips and ideas are beneficial for visitors",
  ogDescription:
    "Yaseo blogs provides visitors on help Branding, logo design and branding ideas UX and UI blog. SEO tips and ideas are beneficial for visitors",
  ogImage: "https://yaseo.co.uk/images/resource/video.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Blog | Yaseo Business Blogs | Yaseo",
  twitterDescription:
    "Yaseo blogs provides visitors on help Branding, logo design and branding ideas UX and UI blog. SEO tips and ideas are beneficial for visitors",
});

const nextPage = () => {
  page.value = page.value + 1;
  getAllBlogs()
}
const nextPageSpecific = (page) => {
  page.value = page.value + 1;
  getAllBlogs()
}
const previousPage = () => {
  page.value = page.value - 1;
  getAllBlogs()
}
</script>
