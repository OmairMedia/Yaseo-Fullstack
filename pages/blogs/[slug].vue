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
              <li><a href="https://yaseo.co.uk">Home</a></li>
              <li><a href="https://yaseo.co.uk/blogs">Blog</a></li>
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
                    src="https://yaseo.co.uk/images/blog/3-search-engine-optimization-tips.jpg"
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
                    <li>
                      <div class="sidebar__post-image">
                        <img
                          src="https://yaseo.co.uk/images/blog/blog-3.jpg"
                          alt=""
                        />
                      </div>
                      <div class="sidebar__post-content">
                        <h3>
                          <span class="sidebar__post-content-meta"
                            ><i class="fas fa-user-circle"></i>Admin</span
                          >
                          <a
                            href="https://yaseo.co.uk/blog/the-importance-of-a-business-plan"
                            >The important of a business plan</a
                          >
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div class="sidebar__post-image">
                        <img
                          src="https://yaseo.co.uk/images/resource/news-2.jpg"
                          alt=""
                        />
                      </div>
                      <div class="sidebar__post-content">
                        <h3>
                          <span class="sidebar__post-content-meta"
                            ><i class="fas fa-user-circle"></i>Teo</span
                          >
                          <a
                            href="https://yaseo.co.uk/blog/domain-and-hosting-a-comprehensive-guide"
                            >Domain and hosting a comprehensive guide</a
                          >
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div class="sidebar__post-image">
                        <img
                          src="https://yaseo.co.uk/images/blog/marketing-ideas.jpg"
                          alt=""
                        />
                      </div>
                      <div class="sidebar__post-content">
                        <h3>
                          <span class="sidebar__post-content-meta"
                            ><i class="fas fa-user-circle"></i>Teo</span
                          >
                          <a href="https://yaseo.co.uk/blog/marketing-ideas"
                            >Marketing Ideas Can Make You Or Break You</a
                          >
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div class="sidebar__post-image">
                        <img
                          src="https://yaseo.co.uk/images/blog/rebranding-vs-revamping.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="sidebar__post-content">
                        <h3>
                          <span class="sidebar__post-content-meta"
                            ><i class="fas fa-user-circle"></i>Teo</span
                          >
                          <a
                            href="https://yaseo.co.uk/blog/rebranding-vs-revamping"
                            >Rebranding vs Revamping</a
                          >
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div class="sidebar__post-image">
                        <img
                          src="https://yaseo.co.uk/images/blog/seo-optimization.jpg"
                          alt=""
                        />
                      </div>
                      <div class="sidebar__post-content">
                        <h3>
                          <span class="sidebar__post-content-meta"
                            ><i class="fas fa-user-circle"></i>Teo</span
                          >
                          <a href="https://yaseo.co.uk/blog/website-seo"
                            >Get your website SEO ready for Holiday Shopping</a
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
const route = useRoute();
import { onValue, ref as databaseRef, query, orderByChild, equalTo } from "firebase/database";
const nuxtApp = useNuxtApp();

const blog = ref(null);

const getBlog = () => {
  blog.value = null;
  const blogsRef = query(databaseRef(nuxtApp.$database, `blogs`),orderByChild('slug', equalTo(route.params.slug)));
  onValue(blogsRef, (snapshot) => {
    if (snapshot.val()) {
      snapshot.forEach((x) => {
        blog.value = x.val();
      })
    }
  });

  console.log(blog.value)
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
