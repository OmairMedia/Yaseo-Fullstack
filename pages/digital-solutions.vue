<template>
  <div>
    <!-- Start main-content -->
    <section
      class="page-title"
      style="background-image: url(/images/background/page-title.jpg)"
    >
      <div class="auto-container">
        <div class="title-outer">
          <h1 class="title">About Us</h1>
          <ul class="page-breadcrumb">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- end main-content -->

    <!-- About Section -->
    <section class="about-section">
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
              <div class="sec-title">
                <span class="sub-title">Get to Know</span>
                <h2>
                  Commited To Your Business Committed To Our Future Your Digital
                  Transformation
                </h2>
                <div class="text">
                  At Yaseo, we deliver digital solutions and transformations
                  that are tailored to your business and your vision. Working
                  together to develop solutions that will take you where you
                  want to go.
                </div>
              </div>

              <ul class="list-style-two">
                <li>
                  <i class="fa fa-check-circle"></i> Empowering your online
                  success
                </li>
                <li>
                  <i class="fa fa-check-circle"></i> Result-driven digital
                  marketing
                </li>
                <li>
                  <i class="fa fa-check-circle"></i> Take your business to new
                  heights
                </li>
              </ul>

              <div class="btn-box">
                <a :href="`tel:${settings.phone}`" class="info-btn">
                  <i class="icon fa fa-phone"></i>
                  <small>Call Anytime</small> {{ settings.phone }}
                </a>
              </div>
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
                <img src="/images/resource/about-1.jpg" alt="" />
              </figure>
              <figure
                class="image-2 overlay-anim wow fadeInRight animated"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <img src="/images/resource/about-2.jpg" alt="" />
              </figure>
              <div class="experience bounce-y">
                <div class="inner">
                  <i class="icon flaticon-discuss"></i>
                  <div class="text">
                    <strong>10+</strong> Years of <br />experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Emd About Section -->

    <AboutServices :settings="settings" :services="services" />

    <!-- Features Section -->
    <section class="features-section">
      <div class="bg bg-pattern-1"></div>
      <div class="auto-container">
        <div class="row">
          <!-- Content Column -->
          <div class="content-column col-xl-5 col-lg-6 col-md-12">
            <div
              class="inner-column wow fadeInRight"
              style="animation-name: none"
            >
              <div class="sec-title">
                <span class="sub-title">Welcome to Yaseo</span>
                <h2>Our Values</h2>
                <p class="mt-2">
                  We believe in the different digital marketing can make, our
                  co-founders have been at the cutting edge of that for decades,
                  doing excellent work for a number of successful multi-national
                  businesses.
                </p>
              </div>

              <div class="feature-block">
                <div class="inner-box">
                  <div class="content">
                    <span class="icon"><i class="fa fa-check"></i></span>
                    <h5 class="title">Our Mission</h5>
                    <div class="text">
                      We want your business to flourish. This means using
                      digital skills and innovation to help your business grow
                      on your terms.
                    </div>
                  </div>
                </div>
              </div>

              <div class="feature-block">
                <div class="inner-box">
                  <div class="content">
                    <span class="icon"><i class="fa fa-check"></i></span>
                    <h5 class="title">Innovation</h5>
                    <div class="text">
                      We believe in the potential of innovation to propel us
                      forward and keep us at the forefront of our industry.
                    </div>
                  </div>
                </div>
              </div>

              <div class="feature-block">
                <div class="inner-box">
                  <div class="content">
                    <span class="icon"><i class="fa fa-check"></i></span>
                    <h5 class="title">Collaboration</h5>
                    <div class="text">
                      Our success is built on collaboration. We value
                      collaboration and understand that by working together, we
                      can accomplish far more than we could separately.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Content Column -->
          <div class="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
            <div
              class="inner-column wow fadeInLeft"
              style=" animation-name: none"
            >
              <div class="image-box">
                <figure class="image">
                  <img src="/images/resource/image-2.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Offer Section -->

    <HomepageProjects
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :categories="categories"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageClients
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
  </div>
</template>

<script setup>
import { onValue, ref as databaseRef } from "firebase/database";
const nuxtApp = useNuxtApp();
const settings = ref({});
const unfilteredblogs = ref([]);
const blogs = ref([
  {
    author: "Sulaiman Nab",
    authorImage:
      "https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/blogs%2F-NdRZ3OaCQLxQUYhA_fK_author_avatar.png?alt=media&token=3ad5616c-3f90-430f-8c76-641f347e7706",
    date: "18 Aug 2023",
    description: `<h3>Conquering the Digital Frontier: Empowering Accountants with SEO</h3><p>Welcome to the ever-changing digital realm, where accountants stand at the forefront of a transformative era. In this blog post, we'll delve into the untapped potential of Search Engine Optimization (SEO) for accountants, showing you how it's no longer just an option but an absolute necessity for growth in the digital age.</p><h3>The Profound Significance of SEO for Accountants</h3><p>SEO is a dynamic process that fine-tunes websites to secure prominent positions on search engine result pages (SERPs). For accountants, the advantages are immense: Unveiling Visibility: In the vast digital landscape, potential clients search for accounting services daily. With SEO, accountants can effortlessly connect with their target audience by securing higher rankings in relevant search queries.</p><h3>Attracting Quality Leads</h3><p>Harnessing SEO's strategic prowess, accountants can draw in a highly targeted audience. By leveraging specific keywords that align with their expertise, they attract genuinely interested visitors, resulting in higher conversion rates. Establishing Trust and Credibility: In the eyes of clients, trust and credibility are paramount. Through SEO-driven strategies, accountants position themselves as industry authorities, instilling confidence and credibility among potential clients.</p><h3>Navigating the Competitive Landscape on Google</h3><p>The digital frontier presents Google as the gateway to information and services. Amidst the vastness of cyberspace, competition on this powerful search engine intensifies, with countless accounting firms vying for visibility.</p><p>Picture a potential client searching for "accounting services in [your city]" on Google. The coveted battlefield for top search results lies on the first page, a prize claimed only by a few accounting firms. Triumphing over the competition calls for a formidable SEO strategy.</p><h3>How SEO Thrusts Accounting Firms to the Forefront</h3><p>Success in the digital age lies in the hands of astute accounting firms, harnessing the transformative force of SEO. Here's how they leverage essential SEO tactics</p><p><span style="color: rgb(51, 51, 51);">Intelligent Keyword Research:</span>&nbsp;Savvy accountants embark on in-depth keyword research to identify relevant and impactful keywords. Strategically weaving these keywords into website content, title tags, and meta descriptions, they elevate their search engine rankings.</p><p><span style="color: rgb(51, 51, 51);">Compelling Content Creation:</span>&nbsp;In the virtual landscape, content reigns supreme. Thriving accounting firms craft valuable, engaging content that addresses their target audience's needs. Informative blogs, guides, and relevant articles establish them as trusted advisors to potential clients.</p><p><span style="color: rgb(51, 51, 51);">Local SEO Dominance:</span>&nbsp;For accountants targeting a specific geographical region, local SEO is a game-changer. By optimizing for local search queries and leveraging Google My Business, they ensure their services pop up when local clients seek their expertise.</p><p><span style="color: rgb(51, 51, 51);">Mobile-Friendly Experience:</span>&nbsp;The rise of mobile devices demands seamless user experiences. SEO-smart accountants prioritize responsive design, earning favor from clients and search engines alike.</p><p><span style="color: rgb(51, 51, 51);">Authority Building Through Linking:</span>&nbsp;Strategic link-building initiatives solidify an accounting firm's industry authority. Garnering reputable backlinks enhances their credibility in the eyes of search engines, resulting in higher rankings.</p><p>The digital age demands accountants to seize the potential of SEO for staying competitive and embracing growth. Optimizing their online presence enables accountants to unlock opportunities, attract quality clients, and establish themselves as trusted leaders in their industry. So, let's embark on this journey together, conquering the digital realm with the unstoppable power of SEO.</p>`,
    excerpt:
      "Welcome to the ever-changing digital realm, where accountants stand at the forefront of a transformative era. In this blog post, we'll delve into the untapped potential of Search Engine Optimization (SEO) for accountants, ",
    id: "-NdRZ3OaCQLxQUYhA_fK",
    image:
      "https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/blogs%2F-NdRZ3OaCQLxQUYhA_fK_blog_blog-3.jpg?alt=media&token=796bb539-ce60-4876-a914-5c20d97f17f3",
    meta_description:
      "In the fiercely competitive world of business, staying ahead requires a strategic approach. As the digital landscape evolves,",
    meta_image: "",
    meta_title: "SEO for accountants",
    slug: "seo-for-accountants",
    title: "SEO for accountants",
  },
]);
const unfilteredServices = ref([]);
const services = ref([]);
const unfilteredClients = ref([]);
const clients = ref([]);
const unfilteredProjects = ref([]);
const projects = ref([]);
const unfilteredTestimonials = ref([]);
const testimonials = ref([]);
const unfilteredVideo = ref([]);
const video = ref([]);
const categories = ref([]);
const unfilteredCategories = ref([]);
const cases = ref([
  {
    banner: "",
    bannerImage:
      "https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/cases%2F-NeCiiq3btb80ot6vkiZ_banner_banner.png?alt=media&token=6d70da29-1913-4f18-a7dd-891ce1b8092f",
    category: "Graphics & Design",
    client: "Jamie D'souza",
    date: "10 January, 2023",
    description: `<p><span style="color: rgb(106, 106, 106);">Mowana's client came to us and wanted a branding and later an eCommerce website to be built under Mowana.uk later to sell her African-themed lingerie for the large lady-sized market. Her inspiration for the brand was Channel &amp; Dior; very black and white. The name was incorporated with the emoji of 'infinity'; "infinity, the concept of something that is unlimited, endless, without bound"</span></p>`,
    icon: "",
    id: "-NeCiiq3btb80ot6vkiZ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/cases%2F-NeCiiq3btb80ot6vkiZ_image_3.jpg?alt=media&token=c8e0dbce-45c7-4c7b-8fc2-8d106a30761f",
    location: "New Jersey, USA",
    name: "Mowana",
    slug: "mowana",
    title: "Here to Know About This Case",
    value: "$100",
    website: "",
  },
]);
const unfilteredCases = ref([]);
const section1 = ref({});
const metaData = ref({
  title: 'Digital Solutions | Digital Marketing Solutions UK - YASEO',
  description: 'We deliver digital solutions tailored to your business. Working together to develop solutions.That will take your business to new heights.',
  ogTitle: 'Digital Solutions | Digital Marketing Solutions UK - YASEO',
  ogType: 'article',
  ogUrl: `https://yaseo.co.uk/digital-solutions`,
  ogImage: 'https://yaseo.co.uk/images/resource/video.jpg',
  ogDescription: 'We deliver digital solutions tailored to your business. Working together to develop solutions.That will take your business to new heights.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Digital Solutions | Digital Marketing Solutions UK - YASEO',
  twitterDescription: 'We deliver digital solutions tailored to your business. Working together to develop solutions.That will take your business to new heights.',
  twitterSite: '@Yaseo_Digital',
  twitterImage: 'https://yaseo.co.uk/images/resource/video.jpg',
  twitterCreator: '@Yaseo_Digital',
})

const getFullData = () => {
  try {
    services.value = [];
    clients.value = [];
    projects.value = [];
    testimonials.value = [];
    video.value = {};
    categories.value = [];
    cases.value = [];
    const allDataRef = databaseRef(nuxtApp.$database, "/");
    onValue(allDataRef, (snapshot) => {
      if (snapshot.val()) {
        const data = snapshot.val();
        for (let key in data) {
          if (key == "settings") {
            settings.value = data[key];
          }
          if (key == "services") {
            unfilteredServices.value = data[key];
            for (let serviceKey in data[key]) {
              services.value.push(data[key][serviceKey]);
            }
          }
          if (key == "clients") {
            unfilteredClients.value = data[key];
            for (let serviceKey in unfilteredClients.value) {
              clients.value.push(unfilteredClients.value[serviceKey]);
            }
          }
          if (key == "blogs") {
            unfilteredblogs.value = data[key];
            for (let serviceKey in unfilteredblogs.value) {
              blogs.value.push(unfilteredblogs.value[serviceKey]);
            }
          }
          if (key == "categories") {
            unfilteredCategories.value = data[key];
            for (let serviceKey in unfilteredCategories.value) {
              categories.value.push(unfilteredCategories.value[serviceKey]);
            }
          }
          if (key == "homepage") {
            unfilteredTestimonials.value = data[key].testimonials;
            video.value = data[key].video;
            section1.value = data[key].section1;
            for (let serviceKey in unfilteredTestimonials.value) {
              testimonials.value.push(unfilteredTestimonials.value[serviceKey]);
            }
          }
          if (key == "cases") {
            unfilteredProjects.value = data[key];
            for (let serviceKey in unfilteredProjects.value) {
              projects.value.push(unfilteredProjects.value[serviceKey]);
            }
          }
        }
      }
    });
  } catch (err) {
    console.log("err -> ", err);
  }
};
const { data, pending, error } = await useAsyncData("get-data-for-aboutus", () =>
  getFullData()
);


useHead({
  title: `${metaData.value.title}`,
  meta: [
    { name: 'description', content: `${metaData.value.description}` },
    { name: 'og:title', content: `${metaData.value.ogTitle}` },
    { name: 'og:type', content: `${metaData.value.ogType}` },
    { name: 'og:url', content: `${metaData.value.ogUrl}` },
    { name: 'og:image', content: `${metaData.value.ogImage}` },
    { name: 'og:description', content: `${metaData.value.ogDescription}` },
    { name: 'twitter:card', content: `${metaData.value.twitterCard}` },
    { name: 'twitter:title', content: `${metaData.value.twitterTitle}` },
    { name: 'twitter:description', content: `${metaData.value.twitterDescription}` },
    { name: 'twitter:site', content: `${metaData.value.twitterSite}` },
    { name: 'twitter:image', content: `${metaData.value.twitterImage}` },
    { name: 'twitter:creator', content: `${metaData.value.twitterCreator}` },
  ],
  link: [
    { rel: 'canonical', href: `https://yaseo.co.uk/digital-solutions` }
  ]
})

</script>
