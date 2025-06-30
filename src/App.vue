<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/global/navbar.vue";
import HomeView from "@/views/HomeView.vue";
import WhoAreWeView from "@/views/WhoAreWeView.vue";
import Footer from "@/components/global/footer.vue";
</script>

<template>
  <Navbar />
  <!--<RouterView />-->
  <HomeView />
  <WhoAreWeView />
  <Footer />
</template>

<style scoped>

</style>
