<template>
  <div class="home">
    <hero-section />
    <search-section />
    <recipe-data />
  </div>
</template>

<script>
import SearchSection from '../components/SearchSection.vue';
import RecipeData from '../components/RecipeData.vue';
import HeroSection from '../components/HeroSection.vue';

export default {
  components: { SearchSection, RecipeData, HeroSection },
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
