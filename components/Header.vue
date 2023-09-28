<template>
     <!-- Main Header-->
      <header class="main-header header-style-two" v-if="settings">
          <!-- Header Top -->
          <div class="header-top">
            <div class="inner-container">
              <div class="top-left">
                <!-- Info List -->
                <ul class="list-style-one">
                  <li>
                    <i class="fa fa-envelope"></i>
                    <a :href="`mailto:${settings.email}`">{{ settings.email }}</a>
                  </li>
                  <li>
                    <i class="fa fa-map-marker"></i> {{settings.address}}
                  </li>
                </ul>
              </div>

              <div class="top-right">
                <ul class="useful-links">
                  <li v-for="(page,index) in pages" :key="index"><nuxt-link :to="page.slug">{{ page.title }}</nuxt-link></li>
                  <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
                </ul>
                <ul class="social-icon-one">
                  <li>
                    <a :href="settings.twitter"><span class="fab fa-twitter"></span></a>
                  </li>
                  <li>
                    <a :href="settings.facebook"><span class="fab fa-facebook-square"></span></a>
                  </li>
                  <li>
                    <a :href="settings.linkedin"><span class="fab fa-linkedin"></span></a>
                  </li>
                  <li>
                    <a :href="settings.instagram"><span class="fab fa-instagram"></span></a>
                  </li>
                  <li>
                    <a :href="settings.pinterest"><span class="fab fa-pinterest"></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Header Top -->
          <div class="header-lower">
            <div class="container-fluid">
              <!-- Main box -->
              <div class="main-box">
                <div class="logo-box">
                  <div class="logo">
                    <nuxt-link to="/"
                      ><img src="/images/logo-black.svg" alt="Yaseo" title="Yaseo" height="100"
                    /></nuxt-link>
                  </div>
                </div>

                <!--Nav Box-->
                <div class="nav-outer">
                  <nav class="nav main-menu">
                    <ul class="navigation">
                      <li v-for="(navlink,index) in settings.headerNavLinks" :key="index" :class="{'dropdown': navlink.link === '/digital-services'}">
                        <nuxt-link :to="navlink.link">{{ navlink.name }}</nuxt-link>
                        <ul v-if="navlink.link === '/digital-services'">
                          <li v-for="(service,index) in services" :key="index"><nuxt-link :to="'/' + service.meta_slug">{{ service.name }}</nuxt-link></li>
                        </ul>
                      </li>  
                    
                    </ul>
                  </nav>

                </div>

                <div class="outer-box">
                  <a :href="`tel:${settings.phone}`" class="info-btn">
                    <i class="icon fa fa-phone"></i>
                    <small>Call Anytime</small>{{ settings.phone }}
                  </a>

                  <!-- Mobile Nav toggler -->
                  <div class="mobile-nav-toggler">
                    <span class="icon lnr-icon-bars"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Mobile Menu  -->
          <div class="mobile-menu">
            <div class="menu-backdrop"></div>

            <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
            <nav class="menu-box">
              <div class="upper-box">
                <div class="nav-logo">
                  <nuxt-link to="/"
                    ><img src="/images/logo-white.svg" alt="" title=""
                  /></nuxt-link>
                </div>
                <div class="close-btn"><i class="icon fa fa-times"></i></div>
              </div>

              <ul class="navigation clearfix">
                <!--Keep This Empty / Menu will come through Javascript-->
              </ul>
              <ul class="navigation-2">
                <li class="special-link" v-for="(page,index) in pages" :key="index"><nuxt-link :to="page.slug">{{ page.title }}</nuxt-link></li>
              </ul>
              <ul class="contact-list-one">
                <li>
                  <!-- Contact Info Box -->
                  <div class="contact-info-box">
                    <i class="icon lnr-icon-phone-handset"></i>
                    <span class="title">Call Now</span>
                    <a :href="`tel:${settings.phone}`">{{ settings.phone }}</a>
                  </div>
                </li>
                <li>
                  <!-- Contact Info Box -->
                  <div class="contact-info-box">
                    <span class="icon lnr-icon-envelope1"></span>
                    <span class="title">Send Email</span>
                    <a :href="`mailto:${settings.email}`">{{ settings.email }}</a>
                  </div>
                </li>
                <li>
                  <!-- Contact Info Box -->
                  <div class="contact-info-box">
                    <span class="icon lnr-icon-clock"></span>
                    <span class="title">Opening Hours</span>
                     {{ settings.timing1 }}
                    <br>
                    {{ settings.timing2 }}
                  </div>
                </li>
                <li>
                  <!-- Contact Info Box -->
                  <div class="contact-info-box">
                    <span class="icon lnr-icon-map-marker"></span>
                    <span class="title">Location</span>
                    {{ settings.address }} 
                  </div>
                </li>
              </ul>

              <ul class="social-links">
                <li>
                  <a :href="settings.twitter"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a :href="settings.facebook"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a :href="settings.linkedin"><i class="fab fa-linkedin"></i></a>
                </li>
                <li>
                  <a :href="settings.pinterest"><i class="fab fa-pinterest"></i></a>
                </li>
                <li>
                  <a :href="settings.instagram"><i class="fab fa-instagram"></i></a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- End Mobile Menu -->
          <!-- Sticky Header  -->
          <div class="sticky-header">
            <div class="auto-container">
              <div class="inner-container">
                <!--Logo-->
                <div class="logo">
                  <nuxt-link to="/" title=""
                    ><img src="/images/logo-black.svg" alt="" title=""
                  /></nuxt-link>
                </div>

                <!--Right Col-->
                <div class="nav-outer">
                  <!-- Main Menu -->
                  <nav class="main-menu">
                    <div class="navbar-collapse show collapse clearfix">
                      <ul class="navigation clearfix">
                      </ul>
                    </div>
                  </nav>
                  <!-- Main Menu End-->

                  <!--Mobile Navigation Toggler-->
                  <div class="mobile-nav-toggler">
                    <span class="icon lnr-icon-bars"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Sticky Menu -->
      </header>
      <!--End Main Header -->
</template>

<script setup>
import { onValue, ref as databaseRef } from "firebase/database";
const nuxtApp = useNuxtApp();
const settings = ref({})
const unfilteredServices = ref([])
const services = ref([])
const unfilteredPages = ref([])
const pages = ref([])

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
          if(key == 'services') {
            unfilteredServices.value = data[key];
            for(let serviceKey in data[key]) {
              services.value.push(data[key][serviceKey])
            }
           
          }
          if(key == 'pages') {
            unfilteredPages.value = data[key];
            for(let serviceKey in data[key]) {
              pages.value.push(data[key][serviceKey])
            }
           
          }
        }

        pages.value.splice(2)
      }
    })
  } catch (err) {
    console.log('err -> ',err)
  }
}

// await useAsyncData("get-data-for-header", () => getFullData());
// console.log('services -> ',services.value);
// console.log('settings -> ',settings.value);
onMounted(() => {
  getFullData()
})

</script>