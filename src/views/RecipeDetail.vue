<template>
  <div>
    <img :src="recipedetails.image" alt="" />
    <p>Name: {{ recipedetails.title }}</p>
    <p>{{ recipedetails.summary }}</p>
    <p>HealthScore: {{ recipedetails.healthScore }}</p>
    <p>Ready in {{ recipedetails.readyInMinutes }} minutes</p>
    <p>Price per serving: {{ recipedetails.pricePerServing }}</p>

    Dish type:
    <div class="type">
      <p v-for="dish in recipedetails.dishTypes" :key="dish.index">
        {{ dish }}
      </p>
    </div>

    Gluten Free:
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

<style scoped>
.type {
  height: 80px;
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  overflow-y: scroll;
}
</style>
