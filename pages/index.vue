<template>
  <div>
    <HomepageBanner
      :video="video"
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageTagline
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageFeatures
      :section1="section1"
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageProjects
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :categories="categories"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageServiceShowcase
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageFunFacts
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageWhatWeOffer
      :video="video"
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageFsb
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageMicrosoft
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageTestimonials
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageProjects
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :categories="categories"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageServicesList
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageVideoSection2
      :video="video"
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageContact
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <HomepageCallToAction
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageBlogs
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
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
    <HomepageMapSection
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
useSeoMeta({
  title: "Digital Marketing | Web Design Company London - Yaseo",
  ogTitle: "Digital Marketing | Web Design Company London - Yaseo",
  description:
    "The best designers and developers at affordable prices with effective graphic designs, online marketing, websites, mobile apps, branding.",
  ogDescription:
    "The best designers and developers at affordable prices with effective graphic designs, online marketing, websites, mobile apps, branding.",
  ogImage: "https://yaseo.co.uk/images/resource/video.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Digital Marketing | Web Design Company London - Yaseo",
  twitterDescription:
    "The best designers and developers at affordable prices with effective graphic designs, online marketing, websites, mobile apps, branding.",
});

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
    banner:"",
    bannerImage:"https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/cases%2F-NeCiiq3btb80ot6vkiZ_banner_banner.png?alt=media&token=6d70da29-1913-4f18-a7dd-891ce1b8092f",
    category:"Graphics & Design",
    client:"Jamie D'souza",
    date:"10 January, 2023",
    description:`<p><span style="color: rgb(106, 106, 106);">Mowana's client came to us and wanted a branding and later an eCommerce website to be built under Mowana.uk later to sell her African-themed lingerie for the large lady-sized market. Her inspiration for the brand was Channel &amp; Dior; very black and white. The name was incorporated with the emoji of 'infinity'; "infinity, the concept of something that is unlimited, endless, without bound"</span></p>`,
    icon:"",
    id:"-NeCiiq3btb80ot6vkiZ",
    image:"https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/cases%2F-NeCiiq3btb80ot6vkiZ_image_3.jpg?alt=media&token=c8e0dbce-45c7-4c7b-8fc2-8d106a30761f",
    location:"New Jersey, USA",
    name:"Mowana",
    slug:"mowana",
    title:"Here to Know About This Case",
    value:"$100",
    website:""
  }
]);
const unfilteredCases = ref([]);
const section1 = ref({});

const getFullData = () => {
  try {
    services.value = [];
    clients.value = [];
    projects.value = [];
    testimonials.value = [];
    video.value = {}
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

const { data, pending, error } = await useAsyncData("get-data-for-index", () =>
  getFullData()
);
</script>
