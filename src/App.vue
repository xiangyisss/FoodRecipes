<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }"><top-logo /></router-link>
    <scroll-to-top />
  </div>
  <router-view />
</template>

<script>
import TopLogo from '@/Components/LogoComponents/TopLogo.vue';
import ScrollToTop from '@/Components/ScrollToTopComponents/ScrollToTop.vue';
export default {
  components: { TopLogo, ScrollToTop },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Comic Neue', cursive;
}

a {
  text-decoration: none;
}
.nav {
  width: 100%;
  overflow-x: hidden;
}
</style>
