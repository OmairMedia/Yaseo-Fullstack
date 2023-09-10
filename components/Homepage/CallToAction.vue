<template>
  <!-- Call To Action Two -->
  <section class="call-to-action-two">
    <div class="auto-container">
      <div
        class="outer-box wow fadeIn animated"
        style="visibility: visible; animation-name: fadeIn"
      >
        <div class="title-box">
          <h4 class="title">
            Get your <span class="colored">FREE</span><br />
            web consultation
          </h4>
        </div>
        <div class="icon-box">
          <i class="icon flaticon-phone-call"></i>
        </div>
        <div class="info-box">
          <a :href="`tel:${settings.phone}`" class="num">{{ settings.phone }}</a>
          <a :href="`mailto:${settings.email}`" class="mail">{{ settings.email }}</a>
        </div>
      </div>
    </div>
  </section>
  <!--End Call To Action TWo -->
</template>

<script setup>

const props = defineProps({
      settings: Object,
});
const settings = ref(props.settings)
</script>
