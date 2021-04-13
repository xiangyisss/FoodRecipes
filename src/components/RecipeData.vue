<template>
  <div>
    <div v-for="recipe in recipes" :key="recipe.index">
      <router-link :to="{ name: 'recipedetails', params: { id: recipe.id } }">
        <img :src="recipe.image" style="height: 150px" />
        <p>{{ recipe.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["recipes"]),
  created() {
    this.$store.dispatch("defaultRecipes");
  },
};
</script>

<style scoped></style>
