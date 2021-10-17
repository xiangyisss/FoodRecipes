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
  background-color: rgba(251, 253, 226, 0.493);
  position: relative;
}

.recipeContainer:hover {
  transform: translate(-4px, -4px);
}
.recipeImage {
  max-width: 23rem;
}
.recipeName {
  max-width: 312px;
  min-height: 80px;
  font-weight: 700;
  font-size: 1.25rem;
  color: rgb(43, 41, 41);
  text-overflow: ellipsis;
  white-space: wrap;
  background-color: #fff;
}
</style>
