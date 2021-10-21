<template>
  <div class="recipeResult">
    <div class="recipeContainer" v-for="recipe in recipes" :key="recipe.index">
      <router-link :to="{ name: 'RecipeDetailPage', params: { id: recipe.id } }">
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
import { mapState } from 'vuex';
export default {
  name: 'RecipesInfo',
  computed: mapState(['recipes']),
  methods: {},
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
  width: 312px;
  height: 286px;
  display: flex;
  background-color: rgba(37, 37, 36, 0.493);
  position: relative;
}
.recipeContainer:hover {
  transform: translate(-4px, -4px);
  border-right: 2px solid #53855483;
  border-bottom: 3px solid #53855483;
}
.recipeImage {
  max-width: 350px;
}
.recipeName {
  width: 312px;
  min-height: 40px;
  font-weight: 700;
  font-size: 1.25rem;
  color: rgb(20, 37, 3);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background-color: #fff;
  padding-top: 1rem;
}
img {
  display: block;
}
</style>
