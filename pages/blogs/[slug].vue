<template>
  <div>
     <!-- Start main-content -->
     <section
        v-if="blog"
        class="page-title"
        style="
          background-image: url(https://yaseo.co.uk/images/background/page-title.jpg);
        "
      >
        <div class="auto-container">
          <div class="title-outer">
            <h1 class="title">{{ blog.title }}</h1>
            <ul class="page-breadcrumb">
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="/blogs">Blog</nuxt-link></li>
              <li>{{ blog.title }}</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- end main-content -->

      <!--Blog Details Start-->
      <section class="blog-details"  v-if="blog">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-lg-7">
              <div class="blog-details__left">
                <div class="blog-details__img">
                  <img
                    src="/images/blog/3-search-engine-optimization-tips.jpg"
                    alt=""
                  />
                  <div class="blog-details__date">
                    <span class="day">08</span>
                    <span class="month">Nov</span>
                  </div>
                </div>
                <div class="blog-details__content">
                  <ul class="list-unstyled blog-details__meta">
                    <li>
                      <a><i class="fas fa-user-circle"></i> {{ blog.author }}</a>
                    </li>
                  </ul>

                  <p v-html="blog.description"></p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="sidebar">
                <div class="sidebar__single sidebar__post">
                  <h3 class="sidebar__title">Latest Posts</h3>
                  <ul class="sidebar__post-list list-unstyled">
                    <li v-for="(rpost,index) in recentPosts" :key="index">
                      <div class="sidebar__post-image">
                        <img
                          :src="rpost.image"
                          alt=""
                        />
                      </div>
                      <div class="sidebar__post-content">
                        <h3>
                          <span class="sidebar__post-content-meta"
                            ><i class="fas fa-user-circle"></i>{{ rpost.author }}</span
                          >
                          <nuxt-link
                            :to="`blogs/${rpost.slug}`"
                            >{{ rpost.title }}</nuxt-link
                          >
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Blog Details End-->
  </div>
</template>

<script setup>
import moment from 'moment'
const route = useRoute();
import { onValue, ref as databaseRef, query, orderByChild, equalTo } from "firebase/database";
const nuxtApp = useNuxtApp();

const blog = ref(null);
const blogs = ref([]);
const recentPosts = ref([]);

const getBlog = () => {
  blogs.value = [];
  const blogsRef = query(databaseRef(nuxtApp.$database, `blogs`));
  onValue(blogsRef, (snapshot) => {
    if (snapshot.val()) {
      snapshot.forEach((x) => {
        if(x.val().slug === route.params.slug) {
          blog.value = x.val()
        }
        blogs.value.push(x.val())
        recentPosts.value.push(x.val())
      })
      recentPosts.value.sort((a,b) => {
        let dateA = moment(a.date).valueOf()
        let dateB = moment(b.date).valueOf()
        return dateB - dateA
      })  
      recentPosts.value.splice(5)
    }
  });
};

useAsyncData("get-blog-data", () => getBlog());

useSeoMeta({
  title: () => `${blog.meta_title}`,
  ogTitle: () => `${blog.meta_title}`,
  description: () => `${blog.meta_description}`,
  ogDescription: () => `${blog.meta_description}`,
  ogImage: () => `${blog.meta_description}`,
  twitterCard: "summary_large_image",
  twitterTitle: () => `${blog.meta_title}`,
  twitterDescription: () => `${blog.meta_description}`,
});
</script>
