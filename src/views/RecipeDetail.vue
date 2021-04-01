<template>
  <div>
    <img :src="recipedetails.image" alt="" />
    <p>Name: {{ recipedetails.title }}</p>
    <p>{{ recipedetails.instructions }}</p>
    <p>Dish type: {{ recipedetails.dishTypes }}</p>
    <p>HealthScore: {{ recipedetails.healthScore }}</p>
    <p>Ready in {{ recipedetails.readyInMinutes }} minutes</p>
    <p>Price per serving: {{ recipedetails.pricePerServing }}</p>
    <p>Gluten Free: {{ recipedetails.diets }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["id"],
  computed: mapState(["recipedetails"]),
  created() {
    this.$store.dispatch("getRecipeDetail", this.id);
  },
};
</script>
