<template>
  <div>
    <!-- Start main-content -->
    <section
      class="page-title"
      style="
        background-image: url(https://yaseo.co.uk/images/background/page-title.jpg);
      "
    >
      <div class="auto-container">
        <div class="title-outer">
          <h1 class="title">FAQ</h1>
          <ul class="page-breadcrumb">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- end main-content -->

    <!-- FAQ Section -->
    <section class="">
      <div class="container">
        <div class="row">
          <div class="col">
            <ul
              class="accordion-box wow fadeInRight animated"
              style="visibility: visible; animation-name: fadeInRight"
            >
              
              <!--Block-->
              <li class="accordion block" v-for="(faq,index) in faqs" :key="index">
                <div class="acc-btn">
                  {{  faq.question }}
                  <div class="icon fa fa-plus"></div>
                </div>
                <div class="acc-content">
                  <div class="content">
                    <div class="text">
                        {{  faq.answer }}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!--End FAQ Section -->
  </div>
</template>

<script setup>

const faqs = ref([
    {
        id: '3213jh21khjkdad',
        question: 'What services does your agency offer?',
        answer: 'Our agency offers a range of digital services, including web design and development, search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, content marketing, and more.'
    },
    {
        id: '32432465143623',
        question: 'How much do your services cost?',
        answer: 'Our pricing varies depending on the specific services you require and the scope of your project. We offer customized quotes based on your needs, so please contact us to discuss your project and get a quote.'
    },
    {
        id: '32432465143623',
        question: 'How long does it take to complete a project?',
        answer: "The timeline for each project varies depending on its complexity and scope. We'll work with you to determine a realistic timeline based on your needs and priorities."
    },
    {
        id: 'adsad7878412ad',
        question: 'What is your approach to web design and development?',
        answer: "We believe in creating websites that not only look great but also meet the needs of your audience and support your business goals. Our approach is user-centered,data-driven, and collaborative."
    },
    {
        id: 'ds031278asddas',
        question: 'Do you provide social media marketing services?',
        answer: "Yes, we can help you create and execute a social media marketing strategy that aligns with your brand and goals. Our team of social media experts can create compelling content, manage your social media accounts, and analyze your performance to improve results."
    },
    {
        id: 'dsa45674d89sa',
        question: 'Do you offer email marketing services?',
        answer: "Yes, we can help you create and execute effective email marketing campaigns that engage your subscribers and drive conversions. Our email marketing services include strategy, design, copywriting, list management, and analytics."
    },
    {
        id: 'ads8a67d890a6',
        question: 'How do I get started?',
        answer: "To get started, simply contact us with your project details, and we'll schedule a consultation to discuss your needs, goals, and timeline. From there, we'll create a customized proposal and work with you every step of the way to ensure your project is a success."
    }
])


</script>