<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }"><top-logo /></router-link>
    <scroll-to-top />
    <!-- <plants-deco /> -->
  </div>
  <router-view />
</template>

<script>
// import PlantsDeco from "./components/PlantsDeco.vue";
import TopLogo from "./components/TopLogo.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
export default {
  components: { TopLogo, ScrollToTop },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Comic Neue", cursive;
  /* color: rgb(28, 31, 25); */
  /* color: rgb(19, 20, 18); */
}

a {
  text-decoration: none;
}
.nav {
  width: 100%;
  overflow-x: hidden;
}
</style>
