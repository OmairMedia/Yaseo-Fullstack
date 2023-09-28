<script setup>
import Swal from 'sweetalert2'

const props = defineProps({
  services: Array,
  testimonials: Array,
  projects: Array,
  blogs: Array,
  clients: Array,
  settings: Object,
});

const services = ref(props.services);
const settings = ref(props.settings);
const testimonials = ref(props.testimonials);
const projects = ref(props.projects);
const blogs = ref(props.blogs);
const clients = ref(props.clients);

const name = ref("");
const email = ref("");
const phone = ref("");
const subject = ref("");
const message = ref("");
const isLoading = ref(false);

const submitForm = async () => {
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
  console.log('data -> ',data.value)

  if(!error) {
    isLoading.value = false;
  }

  Swal.fire({
    title: 'Email Sent!',
    text: 'You will receive a reply soon...',
    icon: 'success'
  })
}


</script>
<template>
  <!-- Contact Section Two -->
  <section class="contact-section-two pull-up pull-down">
    <div class="bg bg-pattern-14"></div>
    <div class="auto-container">
      <div class="row">
        <!-- Title Column -->
        <div class="title-column col-lg-5 col-md-12">
          <div class="inner-column">
            <div class="sec-title light">
              <span class="sub-title">Get In Touch</span>
              <h2>
                We are Here to<br />
                Help You Grow Your<br />
                Business
              </h2>
              <div class="text">
                To take the first step towards growing your business, or to find
                out more about what we offer, there are a number of ways to get
                in touch with us.
              </div>
            </div>
            <div class="timing">
              <span class="tilte">Timings</span>
              <div class="time">{{ settings.timing1 }}</div>
              <div class="time">{{ settings.timing2 }}</div>
            </div>
          </div>
        </div>

        <!-- Form  -->
        <div class="form-column col-lg-7 col-md-12 col-sm-12">
          <div class="inner-column">
            <div
              class="contact-form style-two wow fadeInLeft animated"
              style="visibility: visible; animation-name: fadeInLeft"
            >
              <form method="POST" id="contact-form">
                <div class="row">
                  <div class="form-group col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="name"
                      name="full_name"
                      placeholder="Your Name"
                      v-model="name"
                      required
                    />
                  </div>

                  <div class="form-group col-lg-6 col-md-6">
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      placeholder="Email Address"
                      v-model="email"
                      required
                    />
                  </div>

                  <div class="form-group col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="phone"
                      name="Phone"
                      v-model="phone"
                      placeholder="Contact Number"
                      required
                    />
                  </div>

                  <div class="form-group col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="subject"
                      name="Subject"
                      v-model="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div class="form-group col-lg-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write a Message"
                      v-model="message"
                      required
                    ></textarea>
                  </div>

                  <div class="form-group col-lg-12">
                    <button
                      id="submit-button"
                      class="theme-btn btn-style-one"
                      type="button"
                      name="submit-form"
                      @click="submitForm"
                    >
                      <span class="btn-title">Send a message</span>
                    </button>
                  </div>

                  <div
                    id="form-result"
                    class="alert alert-success"
                    role="alert"
                    style="display: none"
                  ></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
</template>
