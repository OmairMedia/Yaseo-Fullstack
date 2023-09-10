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
  <div>
    <!-- Digital Marketing -->
    <section class="about-section-two">
      <div class="auto-container">
        <div class="row">
          <div
            class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight animated"
            data-wow-delay="600ms"
            style="
              visibility: visible;
              animation-delay: 600ms;
              animation-name: fadeInRight;
            "
          >
            <div class="inner-column">
              <!-- <div class="float-text">Agency</div> -->
              <div class="sec-title">
                <span class="sub-title">Welcome to Yaseo</span>
                <h2>Digital Marketing Experts</h2>
                <div class="text">
                  We help drive more traffic, customers, and sales to your
                  business than any other traditional or digital marketing
                  agency.The #1 spot on Google gets double the visibility and
                  traffic as the #2 spot… and #2 gets double of #3. Get the
                  exposure you deserve.We report to you on a monthly basis what
                  we have done, what results we are achieving, and what we plan
                  to work on next.We will keep you involved every step of the
                  way.
                </div>
              </div>

              <div class="row">
                <div class="about-block col-lg-6 col-md-6">
                  <div class="inner-box">
                    <i class="icon flaticon-user-interface"></i>
                    <h6 class="title">Online Presence</h6>
                    <div class="text">Grow your online presence</div>
                  </div>
                </div>

                <div class="about-block col-lg-6 col-md-6">
                  <div class="inner-box">
                    <i class="icon flaticon-front-end"></i>
                    <h6 class="title">Brand Awareness</h6>
                    <div class="text">
                      Grow your brand's awareness across the globe
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://yaseo.co.uk/digital-marketing"
                class="theme-btn btn-style-one"
                ><span class="btn-title">Explore now</span></a
              >
            </div>
          </div>

          <!-- Image Column -->
          <div class="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
            <div
              class="inner-column wow fadeInLeft animated"
              style="visibility: visible; animation-name: fadeInLeft"
            >
              <figure
                class="image-1 overlay-anim wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
              >
                <img
                  src="/images/resource/about-3.jpg"
                  alt=""
                />
              </figure>
              <figure
                class="image-2 overlay-anim wow fadeInRight animated"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <img
                  src="/images/services/digital-marketing-1.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO -->
    <section class="about-section-two">
      <div class="auto-container">
        <div class="row">
          <div
            class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInLeft animated"
            data-wow-delay="600ms"
            style="
              visibility: visible;
              animation-delay: 600ms;
              animation-name: fadeInLeft;
            "
          >
            <div class="inner-column">
              <!-- <div class="float-text">Agency</div> -->
              <div class="sec-title">
                <span class="sub-title">Welcome to Yaseo</span>
                <h2>SEO Experts</h2>
                <div class="text">
                  Our Search Engine Optimization services are curated
                  formulaically to help your website, social media pages etc
                  rank as high as possible on search engine results pages,
                  driving more traffic to your pages, achieving more clicks and
                  converting more of those clicks into customers. Our Web
                  Development and App Development services will help you create
                  a professional, responsive and user-friendly
                  website/application that will attract and engage your target
                  audience.
                </div>
              </div>

              <div class="row">
                <div class="about-block col-lg-6 col-md-6">
                  <div class="inner-box">
                    <i class="icon flaticon-user-interface"></i>
                    <h6 class="title">Organic Growth</h6>
                    <div class="text">Grow your website's organic traffic</div>
                  </div>
                </div>

                <div class="about-block col-lg-6 col-md-6">
                  <div class="inner-box">
                    <i class="icon flaticon-front-end"></i>
                    <h6 class="title">Technical Optimization</h6>
                    <div class="text">
                      Get your technical seo isses resolved
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://yaseo.co.uk/seo-services"
                class="theme-btn btn-style-one"
                ><span class="btn-title">Explore now</span></a
              >
            </div>
          </div>
          <!-- Image Column -->
          <div class="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
            <div
              class="inner-column wow fadeInRight animated"
              style="visibility: visible; animation-name: fadeInRight"
            >
              <figure
                class="image-1 overlay-anim wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
              >
                <img src="/images/services/seo.png" alt="" />
              </figure>
              <figure
                class="image-2 overlay-anim wow fadeInLeft animated"
                style="visibility: visible; animation-name: fadeInLeft"
              >
                <img
                  src="/images/services/seo-1.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media Marketing -->
    <section class="about-section-two">
      <div class="auto-container">
        <div class="row">
          <div
            class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight animated"
            data-wow-delay="600ms"
            style="
              visibility: visible;
              animation-delay: 600ms;
              animation-name: fadeInRight;
            "
          >
            <div class="inner-column">
              <!-- <div class="float-text">Agency</div> -->
              <div class="sec-title">
                <span class="sub-title">Welcome to Yaseo</span>
                <h2>Social Media Experts</h2>
                <div class="text">
                  Social Media Marketing is critical to your business's success
                  in the digital world that we specialise in. We will work
                  together to create a strong social media presence that will
                  boost brand awareness and increase customer engagement
                  ultimately resulting in more traffic to your websites.
                </div>
              </div>

              <div class="row">
                <div class="about-block col-lg-6 col-md-6">
                  <div class="inner-box">
                    <i class="icon flaticon-user-interface"></i>
                    <h6 class="title">Social Growth</h6>
                    <div class="text">Let social growth for your business</div>
                  </div>
                </div>

                <div class="about-block col-lg-6 col-md-6">
                  <div class="inner-box">
                    <i class="icon flaticon-front-end"></i>
                    <h6 class="title">Ads Campaign</h6>
                    <div class="text">
                      Run effective ad campaigns for you business
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://yaseo.co.uk/social-media-marketing"
                class="theme-btn btn-style-one"
                ><span class="btn-title">Explore now</span></a
              >
            </div>
          </div>
          <!-- Image Column -->
          <div class="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
            <div
              class="inner-column wow fadeInLeft animated"
              style="visibility: visible; animation-name: fadeInLeft"
            >
              <figure
                class="image-1 overlay-anim wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
              >
                <img
                  src="/images/services/social-media-marketing.png"
                  alt=""
                />
              </figure>
              <figure
                class="image-2 overlay-anim wow fadeInRight animated"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <img
                  src="/images/services/social-media-marketing-1.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Marketing -->
    <section class="about-section-two">
      <div class="auto-container">
        <div class="row">
          <div
            class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInRight animated"
            data-wow-delay="600ms"
            style="
              visibility: visible;
              animation-delay: 600ms;
              animation-name: fadeInRight;
            "
          >
            <div class="inner-column">
              <!-- <div class="float-text">Agency</div> -->
              <div class="sec-title">
                <span class="sub-title">Welcome to Yaseo</span>
                <h2>Content Management</h2>
                <div class="text">
                  Finally, our Content Marketing services are designed to help
                  you create high-quality content that will engage your
                  audience, build brand credibility and increase conversations.
                  Whether its blog posts, articles, videos or infographics, our
                  team will aid you in creating content that resonates with your
                  target audience.
                </div>
              </div>

              <div class="row">
                <div class="about-block col-lg-6 col-md-6">
                  <div class="inner-box">
                    <i class="icon flaticon-user-interface"></i>
                    <h6 class="title">Web solutions</h6>
                    <div class="text">
                      Bespoke web solutions matched to your specific business
                      requirements.
                    </div>
                  </div>
                </div>

                <div class="about-block col-lg-6 col-md-6">
                  <div class="inner-box">
                    <i class="icon flaticon-front-end"></i>
                    <h6 class="title">Articles & Blog Posts</h6>
                    <div class="text">
                      Utilize the power of intriguing content with our
                      professional article and blog post writing services.
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://yaseo.co.uk/content-marketing"
                class="theme-btn btn-style-one"
                ><span class="btn-title">Explore now</span></a
              >
            </div>
          </div>
          <!-- Image Column -->
          <div class="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
            <div
              class="inner-column wow fadeInLeft animated"
              style="visibility: visible; animation-name: fadeInLeft"
            >
              <figure
                class="image-1 overlay-anim wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
              >
                <img
                  src="/images/services/content-marketing.png"
                  alt=""
                />
              </figure>
              <figure
                class="image-2 overlay-anim wow fadeInRight animated"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <img
                  src="/images/services/content-marketing-2.png"
                  alt=""
                />
              </figure>
              <!-- <div class="experience bounce-y">
                  <div class="inner">
                    <i class="icon flaticon-design"></i>
                    <div class="text">
                      Founded<br />
                      1966
                    </div>
                  </div>
                </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
