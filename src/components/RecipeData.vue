<template>
  <section class="main-section">
    <div class="title">Popular recipes</div>
    <div class="recipe-card" v-for="recipe in recipes" :key="recipe.index">
      <router-link :to="{ name: 'recipedetails', params: { id: recipe.id } }">
        <img :src="recipe.image" style="width: 100%" />
        <p>{{ recipe.title }}</p>
      </router-link>
      <p class="text">{{ recipedetails.readyInMinutes }}Minutes</p>
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
.title {
  width: 90%;
  margin: 0 auto;
}
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
    display: flex;
    flex-wrap: wrap;
  }
  .recipe-card {
    width: 30%;
  }
}
</style>
