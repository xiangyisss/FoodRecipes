<template>
  <div class="home">
    <search-section />
    <recipe-data />
  </div>
</template>

<script>
import SearchSection from "../components/SearchSection.vue";
import RecipeData from "../components/RecipeData.vue";

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
