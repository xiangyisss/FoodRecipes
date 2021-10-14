<template>
  <div class="recipeResult">
    <div class="recipeContainer" v-for="recipe in recipes" :key="recipe.index">
      <router-link :to="{ name: 'recipedetails', params: { id: recipe.id } }">
        <img
          class="recipeImage"
          :src="recipe.image"
          style="aspect-ratio: 2/3"
        />
        <p class="recipeName">{{ recipe.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RecipeData",
  computed: mapState(["recipes"]),
};
</script>

<style scoped>
.recipeResult {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  column-gap: 2rem;
  margin-bottom: 2rem;
}
.recipeContainer {
  display: flex;
}
.recipeImage {
  margin-bottom: 0.75rem;
  max-width: 23rem;
}
.recipeName {
  max-width: 280px;
  font-weight: 600;
  color: black;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
