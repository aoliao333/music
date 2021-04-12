<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-if="$route.meta.showTabbar"></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer/index";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style></style>
