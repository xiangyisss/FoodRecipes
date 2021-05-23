<template>
  <section class="main-section">
    <div class="recipe-card" v-for="recipe in recipes" :key="recipe.index">
      <router-link :to="{ name: 'recipedetails', params: { id: recipe.id } }">
        <img :src="recipe.image" style="width: 100%" />
        <p class="title">{{ recipe.title }}</p>
      </router-link>
      <p class="text" style="color: #62727b">
        {{ recipedetails.readyInMinutes }}Minutes
      </p>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["recipes", "recipedetails"]),
  created() {
    this.$store.dispatch("defaultRecipes", ("getRecipeDetails", this.id));
  },
};
</script>

<style scoped>
.recipe-card {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  width: 90%;
}

.text {
  margin-top: 8px;
}

@media (min-width: 575px) {
  .main-section {
    width: 90%;
    margin: 0 auto;
    /* display: flex;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .popular-recipes {
    width: 90%;
  }
}
</style>
