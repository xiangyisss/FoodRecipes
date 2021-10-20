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
// import VPagination from "@hennge/vue3-pagination";
// import "@hennge/vue3-pagination/dist/vue3-pagination.css";
export default {
  name: "RecipeData",
  // components: { VPagination },
  computed: mapState(["recipes"]),
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
  max-width: 280px;
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
