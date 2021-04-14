<template>
  <section class="main-section">
    <div class="row">
      <div v-for="recipe in recipes" :key="recipe.index">
        <router-link :to="{ name: 'recipedetails', params: { id: recipe.id } }">
          <img :src="recipe.image" />
          <p>{{ recipe.title }}</p>
        </router-link>
      </div>
    </div>
  </section>
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
