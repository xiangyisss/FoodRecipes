<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }"><top-logo /></router-link>
    <!-- <plants-deco /> -->
  </div>
  <router-view />
</template>

<script>
// import PlantsDeco from "./components/PlantsDeco.vue";
import TopLogo from "./components/TopLogo.vue";
export default {
  components: { TopLogo },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Comic Neue", cursive;
  color: rgb(28, 31, 25);
}

a {
  text-decoration: none;
}
.nav {
  width: 100%;
  /* position: fixed;
  top: 0;
  left: 0; */
}
</style>
