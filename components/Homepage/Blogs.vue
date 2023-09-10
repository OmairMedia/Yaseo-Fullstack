<template>
      <!-- News Section -->
      <section class="news-section" v-if="blogs">
        <div class="auto-container">
          <div class="sec-title text-center">
            <span class="sub-title">News &amp; Articles</span>
            <h2>Latest from the blog</h2>
          </div>

          <div class="row">
            <!-- News Block -->
            <div
              v-for="(blog,index) in blogs"
              :key="index"
              class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
              style="visibility: visible; animation-name: fadeInUp"
            >
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <nuxt-link to="/blogs"
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
                    <nuxt-link
                      :to="`/blogs/${blog.slug}`"
                      >{{ blog.title }}</nuxt-link
                    >
                  </h5>
                  <div class="text">
                   {{ blog.excerpt }}
                  </div>
                  <nuxt-link
                    :to="`/blogs/${blog.slug}`"
                    class="read-more"
                    ><i class="fa fa-long-arrow-alt-right"></i> Read More</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End News Section -->
</template>

<script setup>
const props = defineProps({
  services: Array,
  testimonials: Array,
  projects: Array,
  blogs: Array,
  clients: Array,
  settings: Object
});

const services = ref(props.services);
const settings = ref(props.settings);
const testimonials = ref(props.testimonials);
const projects = ref(props.projects);
const blogs = ref(props.blogs);
const clients = ref(props.clients);
</script>