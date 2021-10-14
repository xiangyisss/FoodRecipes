<template>
  <div class="home">
    <!-- <top-logo /> -->
    <!-- <leaves-images /> -->
    <search-section />
    <recipe-data />
  </div>
</template>

<script>
import SearchSection from "../components/SearchSection.vue";
import RecipeData from "../components/RecipeData.vue";
// import LeavesImages from "../components/LeavesImages.vue";
// import TopLogo from "../components/TopLogo.vue";

export default {
  components: { SearchSection, RecipeData },
  name: "Home",
  data() {
    return {
      query: "",
      popular: "",
    };
  },
};
</script>

<style scoped>
.home {
  width: 100%;
}
/* .leafImage {
  background-image: url("../assets/leafbg.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 20%;
  height: 80vh;
  padding: 0;
} */
</style>
