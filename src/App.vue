<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }"><top-logo /></router-link>
    <leaves-images />
  </div>
  <router-view />
</template>

<script>
import LeavesImages from "./components/LeavesImages.vue";
import TopLogo from "./components/TopLogo.vue";
export default {
  components: { TopLogo, LeavesImages },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Comic Neue", cursive;
}
a {
  text-decoration: none;
}
</style>
