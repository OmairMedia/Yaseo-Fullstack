<template>
  <!-- Main Footer -->
  <footer class="main-footer">
    <div class="bg bg-pattern-9"></div>

    <!--Widgets Section-->
    <div class="widgets-section">
      <div class="auto-container">
        <div class="row">
          <!--Footer Column-->
          <div class="footer-column col-xl-3 col-lg-12 col-md-12">
            <div class="footer-widget about-widget">
              <div class="logo">
                <nuxt-link to="/"
                  ><img src="/images/logo-white.svg" alt=""
                /></nuxt-link>
              </div>
              <div class="text">
                We deliver digital solutions and transformations that are
                tailored to your business and your vision. Working together to
                develop solutions that will take you where you want to go.
              </div>
              <ul class="social-icon-two">
                <li>
                  <a :href="settings.facebook"
                    ><i class="fab fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a :href="settings.twitter"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a :href="settings.linkedin"
                    ><i class="fab fa-linkedin"></i
                  ></a>
                </li>
                <li>
                  <a :href="settings.instagram"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a :href="settings.pinterest"
                    ><i class="fab fa-pinterest"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <!--Footer Column-->
          <div class="footer-column col-xl-3 col-lg-4 col-md-4">
            <div class="footer-widget links-widget">
              <h6 class="widget-title">Explore</h6>
              <ul class="user-links">
                <li>
                  <nuxt-link to="/digital-solutions">About Us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/blogs">Blog</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/case-studies">Case Studies</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact-us">Contact</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <!--Footer Column-->
          <div class="footer-column col-xl-3 col-lg-4 col-md-4 col-sm-8">
            <div class="footer-widget gallery-widget">
              <h6 class="widget-title">Case Studies</h6>
              <div class="widget-content">
                <div class="outer clearfix">
                  <figure class="image" v-for="(project,index) in projects" :key="index">
                    <nuxt-link :to="`/case-studies/${project.name}`"
                      ><img
                        :src="`${project.image}`"
                        width="80"
                        height="85"
                        alt="Mowana"
                    /></nuxt-link>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <!--Footer Column-->
          <div class="footer-column col-xl-3 col-lg-4 col-md-4">
            <div class="footer-widget contacts-widget">
              <h6 class="widget-title">Contact</h6>
              <div class="text">
                {{ settings.address }}
              </div>
              <ul class="contact-info">
                <li>
                  <i class="fa fa-envelope"></i>
                  <a :href="`mailto:${settings.email}`">{{ settings.email }}</a
                  ><br />
                </li>
                <li>
                  <i class="fa fa-phone-square"></i>
                  <a :href="`tel:${settings.phone}`">{{ settings.phone }}</a
                  ><br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Footer Bottom-->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="inner-container">
          <div class="copyright-text">
            © Copyright 2017 -
            <span id="current-year">{{ new Date().getFullYear() }}</span> by
            <nuxt-link to="/">yaseo.co.uk</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!--End Main Footer -->
</template>

<script setup>
import { onValue, ref as databaseRef } from "firebase/database";
const nuxtApp = useNuxtApp();
const settings = ref({});
const projects = ref([
  {
    name: 'Mowana',
    slug: 'mowana',
    image: '/images/cases/mowana/logo-10.jpg',
    category: 'branding'
  }
]);

const getFullData = () => {
  try {
    const allDataRef = databaseRef(nuxtApp.$database, "/");
    onValue(allDataRef, (snapshot) => {
      if (snapshot.val()) {
        const data = snapshot.val();
        for(let key in data) {
          if(key == 'settings') {
            settings.value = data[key]
          }
          
        }
      }
    })
  } catch (err) {
    console.log('err -> ',err)
  }
}

onMounted(() => {
  getFullData()
})

</script>
