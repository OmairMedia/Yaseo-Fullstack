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
              <div class="time">Mon-Fri 9 am - 6 pm</div>
              <div class="time">Sat 11 am - 2 pm</div>
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
                      required
                    />
                  </div>

                  <div class="form-group col-lg-6 col-md-6">
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div class="form-group col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="phone"
                      name="Phone"
                      placeholder="Contact Number"
                      required
                    />
                  </div>

                  <div class="form-group col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="subject"
                      name="Subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div class="form-group col-lg-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write a Message"
                      required
                    ></textarea>
                  </div>

                  <!-- <div class="form-group col-lg-12">
                        <button
                          id="submit-button"
                          class="theme-btn btn-style-one"
                          type="button"
                          name="submit-form"
                        >
                          <span class="btn-title">Send a message</span>
                        </button>
                      </div>

                      <div id="form-result" class="alert alert-success" role="alert" style="display: none;">
                          
                      </div> -->
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
