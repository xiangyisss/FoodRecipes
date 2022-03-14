<template>
  <div class="home">
    <hero-section />
    <search-section />
    <recipes-info />
  </div>
</template>

<script>
import SearchSection from './Components/SearchSection.vue';
import RecipesInfo from './Components/RecipesInfo.vue';
import HeroSection from './Components/HeroSection.vue';

export default {
  components: { SearchSection, RecipesInfo, HeroSection },
  name: 'Home',
  data() {
    return {
      query: '',
      popular: '',
    };
  },
  mounted() {
    this.$store.dispatch('defaultRecipes');
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  margin-top: 8vh;
}
</style>
