<template>
  <div>
    <img :src="recipedetails.image" alt="" />
    <strong>
      <p>Name: {{ recipedetails.title }}</p></strong
    >
    <!-- <p>{{ recipedetails.summary }}</p> -->
    <!-- <p></p> -->
    <summary v-html="$store.state.recipedetails.summary"></summary>
    <p>HealthScore: {{ recipedetails.healthScore }}</p>
    <p>Ready in : {{ recipedetails.readyInMinutes }} minutes</p>
    <p>Price per serving: {{ recipedetails.pricePerServing }}</p>

    Dish type:
    <div class="type">
      <p v-for="dish in recipedetails.dishTypes" :key="dish.index">
        {{ dish }}
      </p>
    </div>

    Free from:
    <div class="type">
      <p v-for="diet in recipedetails.diets" :key="diet.index">
        {{ diet }}
      </p>
    </div>

    <ingredient-and-step :id="id" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import IngredientAndStep from "@/components/IngredientAndStep.vue";
export default {
  props: ["id"],
  components: { IngredientAndStep },
  computed: mapState(["recipedetails"]),
  created() {
    this.$store.dispatch("getRecipeDetails", this.id);
  },
};
</script>
<style scoped></style>
