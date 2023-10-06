<template>
  <div>
    <LazyHomepageBanner
      :video="video"
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageTagline
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageFeatures
      :section1="section1"
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />

    <LazyHomepageServiceShowcase
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageFunFacts
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageWhatWeOffer
      :video="video"
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageFsb
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
      :technologies="technologies"
    />
    <!-- <HomepageMicrosoft
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    /> -->
    <LazyHomepageTestimonials
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageProjects
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :categories="categories"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageServicesList
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageVideoSection2
      :video="video"
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageContact
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageCallToAction
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
    <LazyHomepageClients
      :settings="settings"
      :services="services"
      :testimonials="testimonials"
      :projects="projects"
      :blogs="blogs"
      :clients="clients"
    />
    <LazyHomepageMapSection
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
import moment from 'moment';

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
const services = ref([
  {
    description:`<h3>Service Overview</h3><p>As an independent business, your brand and products matter to you in a way that is no doubt deeply personal. This is why we want to work with you, we aren’t setting out to change the essence of who you are. We want to find a way to help you communicate that identity in clear and innovative terms.</p><p>When it comes to marketing and branding, the power of narrative sells. Stories are not just easy for your audience to relate to, they help to build brand identity. Whether it’s an anecdotal piece of content, or a coherent and powerful mission statement, crafting the stories behind your business will lend your marketing a powerful impact.</p><h3>Our Offering</h3><p>Our team of branding experts works closely with our clients to ensure that their brand strategy aligns with their overall marketing strategy and business goals. We also provide ongoing support to ensure that the brand remains relevant and effective over time, adapting to changing market conditions and customer preferences.</p><blockquote><strong>If you're looking to establish a strong and unique identity for your business or product, our branding services can help. Contact us today to learn more about how we can help your business succeed through effective branding.</strong></blockquote><p><img src="https://yaseo.co.uk/images/services/branding-1.png" alt="images"></p><p><img src="https://yaseo.co.uk/images/services/branding-2.png" alt="images"></p>`,
    faqs: [],
    icon:"flaticon-color-sample",
    id:"-NdfJD02nBqS1FnEaXTj",
    meta_description:"YASEO is a branding and digital marketing agency based in the United Kingdom. We craft and position brands through strategic storytelling.",
    meta_slug:"branding",
    meta_title:"Branding Agency | We Build The World's Most Desirable Brands - YASEO",
    name:"Branding",
    text:"Ready to create the next big thing"
  }
]);
const unfilteredClients = ref([]);
const clients = ref([
  {
    id:"-NeHSHBPa4vZnUT4IVmh",
    image:"https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/clients%2Fundefined_client_sparkle.png?alt=media&token=fc6e481d-1231-4647-b515-f7ddc215be96",
    link:"https://sparklehomecleaning.co.uk/"
  }
]);
const projects = ref([]);
const unfilteredTestimonials = ref([]);
const testimonials = ref([
  {
    answer:"We are a great agency",
    designation:"Owner Joe Audio",
    id:"-NcuCj-8hd9gcMbGsczf",
    name:"Steve Hedge",
    question:"Hey",
    text:"This digital agency exceeded my expectations with its creative designs and exceptional customer service."
  }
]);
const video = ref({
  link: "https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/video%2Fhome-1.mp4?alt=media&token=51b94f8b-b909-40b8-84af-8054ff17ea9b"
});
const categories = ref([
  {
    description:"Projects related to real estate business",
    icon:"flaticon-color-sample",
    id:"-NfhG-kZUbXI_fmP1-fi",
    image:"https://firebasestorage.googleapis.com/v0/b/yaseo-fullstack.appspot.com/o/categories%2F-NfhG-kZUbXI_fmP1-fi_category_property.jpg?alt=media&token=dd308c68-08ae-478a-b833-ca7d0b883d22",
    name:"Property",
    slug:"property"
  }
]);
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
const section1 = ref({
  box_1_description:"We are well recognized for our outstanding work and commitment to excellence in the industry.",
  box_1_icon:"trophy",
  box_1_title:"200+ resources sitting on bench",
  box_2_description:"We understand that quality work is essential to the success of any business.",
  box_2_icon:"medal",
  box_2_title:"Quality work",
  box_3_description:"We are committed to delivering the highest level of service and ensuring that our clients are completely satisfied with our work.",
  box_3_icon:"satisfaction",
  box_3_title:"Satisfaction guarantee",
  heading:"to grow and standout in this noisy digital world.",
  highlighted_text_in_heading:"We help your brand"
});
const unfilteredTechnologies = ref([]);
const technologies = ref([
  {
    answer:"We are a great agency",
    designation:"Owner Joe Audio",
    id:"-NcuCj-8hd9gcMbGsczf",
    name:"Steve Hedge",
    question:"Hey",
    text:"This digital agency exceeded my expectations with its creative designs and exceptional customer service."
  }
]);
const metaData = ref({
  title: 'Digital Marketing | Web Design Company London - Yaseo',
  description: 'The best designers and developers at affordable prices with effective graphic designs, online marketing, websites, mobile apps, branding.',
  ogTitle: 'Digital Marketing | Web Design Company London - Yaseo',
  ogType: 'article',
  ogUrl: `https://yaseo.co.uk`,
  ogImage: 'https://yaseo.co.uk/images/resource/video.jpg',
  ogDescription: 'The best designers and developers at affordable prices with effective graphic designs, online marketing, websites, mobile apps, branding.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Digital Marketing | Web Design Company London - Yaseo',
  twitterDescription: 'The best designers and developers at affordable prices with effective graphic designs, online marketing, websites, mobile apps, branding.',
  twitterSite: '@Yaseo_Digital',
  twitterImage: 'https://yaseo.co.uk/images/resource/video.jpg',
  twitterCreator: '@Yaseo_Digital',
})


const getFullData = () => {
  try {
    blogs.value = [];
    unfilteredblogs.value = [];
    services.value = [];
    clients.value = [];
    projects.value = [];
    testimonials.value = [];
    video.value = {}
    categories.value = [];
    cases.value = [];
    section1.value = {};
    technologies.value = [];
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
            for (let serviceKey in unfilteredServices.value) {
              services.value.push(unfilteredServices.value[serviceKey]);
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
            unfilteredCases.value = data[key];
            for (let serviceKey in unfilteredCases.value) {
              cases.value.push(unfilteredCases.value[serviceKey]);
            }
          }
          if (key == "technologies") {
            unfilteredTechnologies.value = data[key];
            for (let serviceKey in unfilteredTechnologies.value) {
              technologies.value.push(unfilteredTechnologies.value[serviceKey]);
            }
          }
        }
        // blogs.value
        blogs.value.sort((a,b) => {
          let dateA = moment(a.date).valueOf()
          let dateB = moment(b.date).valueOf()
          return dateB - dateA
        })  
        blogs.value.splice(3)
      }
    });
  } catch (err) {
    console.log("err -> ", err);
  }
};

const { data, pending, error } = await useAsyncData("get-data-for-homepage", () =>
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
    { rel: 'canonical', href: `https://yaseo.co.uk` }
  ]
})

</script>
