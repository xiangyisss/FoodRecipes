<template>
  <div class="home">
    <hero-section />
    <search-section />
    <recipe-data />
  </div>
</template>

<script>
import SearchSection from "../components/SearchSection.vue";
import RecipeData from "../components/RecipeData.vue";
import HeroSection from "../components/HeroSection.vue";

export default {
  components: { SearchSection, RecipeData, HeroSection },
  name: "Home",
  data() {
    return {
      query: "",
      popular: "",
    };
  },
  mounted() {
    this.$store.dispatch("defaultRecipes");
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  /* margin-top: 9vh; */
}
/* .hero {
  margin: 0 auto;
  width: 50rem;
  min-width: 280px;
  height: 80vh;
  background-image: url("../assets/testing.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
} */
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
