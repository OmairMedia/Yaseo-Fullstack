<template>
    <div>
        <h2>Dynamic Page - {{ route.params.slug }}</h2>
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
const route = useRoute();
const page = ref(null);

const { data, pending, error } = await useAsyncData("get-data-for-dynamic-page", () => {
  try {
    const allDataRef = databaseRef(nuxtApp.$database, `/pages/${route.params.slug}`);
    onValue(allDataRef, (snapshot) => {
      page.value = snapshot.val() 
    });
  } catch (err) {
    console.log("err -> ", err);
  }
}
);

</script>