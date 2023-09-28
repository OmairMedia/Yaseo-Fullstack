<template>
  <div>
    <!-- Start main-content -->
    <section
      class="page-title"
      style="background-image: url(images/background/page-title.jpg)"
    >
      <div class="auto-container">
        <div class="title-outer">
          <h1 class="title">Contact Us</h1>
          <ul class="page-breadcrumb">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- end main-content -->

    <!--Contact Details Start-->
    <section class="contact-details">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-6 mb-md-60">
            <div class="contact-details__right">
              <div class="sec-title">
                <span class="sub-title">Need any help?</span>
                <h2>Get In Touch</h2>
                <div class="text">
                  To take the first step towards growing your business, or to
                  find out more about what we offer, there are a number of ways
                  to get in touch with us.
                </div>
              </div>
              <ul class="list-unstyled contact-details__info">
                <li>
                  <div class="icon">
                    <span class="lnr-icon-phone-plus"></span>
                  </div>
                  <div class="text">
                    <h6>Any questions?</h6>
                    <a :href="`tel:${settings.phone}`"
                      ><span>Call us free on</span> {{ settings.phone }}</a
                    >
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <span class="lnr-icon-envelope1"></span>
                  </div>
                  <div class="text">
                    <h6>Email us on</h6>
                    <a :href="`mailto:${settings.email}`">{{ settings.email }}</a>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <span class="lnr-icon-location"></span>
                  </div>
                  <div class="text">
                    <h6>
                      We are based near
                      <a
                        target="_blank"
                        href="https://en.wikipedia.org/wiki/Windsor_Castle"
                        >Windsor Castle</a
                      >
                    </h6>
                    <span
                      >{{ settings.address }}</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-7 col-lg-6">
            <!-- Google Map HTML Codes -->
            <div class="map-section-contact">
              <div class="" v-html="settings.findUsIframe"></div>
              <!-- <div class="auto-container">
                  <div class="info-box">
                    <div class="text">
                      58 the Arches, Windsor <br> SL4 3HY United Kingdom. 
                    </div>
                    <ul class="info-list">
                      <li>
                        <i class="fa fa-envelope"></i>
                        <a href="mailto:info@yaseo.co.uk">info@yaseo.co.uk</a>
                      </li>
                      <li>
                        <i class="fa fa-phone-square"></i>
                        <a href="tel:08009991217">0800 999 1217</a>
                      </li>
                    </ul>
                  </div>
                </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Contact Details End-->

    <!--Contact Details Start-->
    <section class="team-contact-form">
      <div class="container pb-100">
        <div class="sec-title text-center">
          <span class="sub-title">To Send us a message</span>
          <h2 class="section-title__title">
            Feel free to send us a message <br />
            one of our senior staff members will be in touch within 24 hours.
          </h2>
        </div>
        <!-- Contact Form -->
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <form id="contact_form" name="contact_form" method="post">
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <input
                      id="name"
                      name="form_name"
                      class="form-control"
                      type="text"
                      placeholder="Enter Name"
                      v-model="name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <input
                      id="email"
                      name="form_email"
                      class="form-control required email"
                      type="email"
                      placeholder="Enter Email"
                      v-model="email"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <input
                      id="subject"
                      name="form_subject"
                      class="form-control required"
                      type="text"
                      placeholder="Enter Subject"
                      v-model="subject"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <input
                      id="phone"
                      name="form_phone"
                      class="form-control"
                      type="text"
                      placeholder="Enter Contact Number"
                      v-model="phone"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <textarea
                  id="message"
                  name="form_message"
                  class="form-control required"
                  rows="5"
                  placeholder="Enter Message"
                  v-model="message"
                ></textarea>
              </div>
              <div class="mb-3 text-center">
                  <input
                    name="form_botcheck"
                    class="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="button"
                    id="submit-button"
                    class="theme-btn btn-style-one"
                    @click="handleSubmit"
                  >
                    <span class="btn-title">Send message</span>
                    <div v-if="isLoading" class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!--Contact Details End-->
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'

const name = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")
const phone = ref("")
const isLoading = ref(false)

import { onValue, ref as databaseRef } from "firebase/database";
const nuxtApp = useNuxtApp();
const settings = ref({
  activeClients:"15",
  address:"58 the Arches, Windsor, SL4 3HY , United Kingdom",
  contactUsDescription:"To take the first step towards growing your business, or to find out more about what we offer, there are a number of ways to get in touch with us.",
  contactUsHeading:"Get In Touch",
  cupOfCoffee:"198",
  email:"info@yaseo.co.uk",
  facebook:"https://www.facebook.com/Yaseo.co.uk/",
  findUsIframe:'<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.605683720642!2d-0.6162592841226574!3d51.48375182025274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767ae29d07b8cb%3A0x297bac6b6dcf4631!2s58%20The%20Arches%2C%20Windsor%2C%20UK!5e0!3m2!1sen!2s!4v1681141431064!5m2!1sen!2s" > </iframe>',
  instagram:"https://linkedin.com/company/yaseo/",
  linkedin:"https://linkedin.com/company/yaseo/",
  mapURLAdress:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.605683720642!2d-0.6162592841226574!3d51.48375182025274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767ae29d07b8cb%3A0x297bac6b6dcf4631!2s58%20The%20Arches%2C%20Windsor%2C%20UK!5e0!3m2!1sen!2s!4v1681141431064!5m2!1sen!2s",
  phone:"0800 999 1217",
  pinterest:"https://pinterest.co.uk/Yaseo_Digital/",
  projectsCompleted:"500",
  satisfiedClients:"500",
  support:"",
  teamMembers:"15",
  twitter:"https://twitter.com/Yaseo_Digital/",
  whatsappNumber:"",
  winningAward:"15"
});

const getFullData = () => {
  try {
    const allDataRef = databaseRef(nuxtApp.$database, "/");
    onValue(allDataRef, (snapshot) => {
      if (snapshot.val()) {
        const data = snapshot.val();
        for (let key in data) {
          if (key == "settings") {
            settings.value = data[key];
          }
        }
      }
    });
  } catch (err) {
    console.log("err -> ", err);
  }
};

const { data, pending, error } = await useAsyncData("get-data-for-contact", () =>
  getFullData()
);

const handleSubmit = async () => {
  isLoading.value = true;
  let bodyData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
    phone: phone.value
  }

  const { data, error } = await useFetch('/api/contact', {
    body: bodyData,
    method: 'post'
  });
 

  if(!error) {
    isLoading.value = false;
  }

  console.log('data -> ',data.value)

  Swal.fire({
    title: 'Email Sent!',
    text: 'You will receive a reply soon...',
    icon: 'success'
  })
}
</script>