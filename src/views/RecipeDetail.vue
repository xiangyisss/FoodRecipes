<template>
  <plants-deco />
  <div class="recipe_details">
    <strong>
      <p class="recipename">{{ recipedetails.title }}</p></strong
    >
    <p>HealthScore: {{ recipedetails.healthScore }}</p>
    <p>Ready in : {{ recipedetails.readyInMinutes }} minutes</p>
    <p>Price per serving: {{ recipedetails.pricePerServing }}</p>
    <h3>Dish type:</h3>

    <div class="type">
      <p v-for="dish in recipedetails.dishTypes" :key="dish.index">
        {{ dish }}
      </p>
    </div>

    <h3>Free from:</h3>
    <div class="type">
      <p v-for="diet in recipedetails.diets" :key="diet.index">
        {{ diet }}
      </p>
    </div>
    <img :src="recipedetails.image" alt="" />
    <!-- <p>{{ recipedetails.summary }}</p> -->
    <!-- <p></p> -->
    <div class="step_and_summary">
      <ingredient-and-step :id="id" />

      <summary
        class="instructions"
        v-html="$store.state.recipedetails.instructions"
      ></summary>
      <!-- Price per instructions: {{ recipedetails.instructions }} -->
      <!-- <summary v-html="$store.state.recipedetails.summary"></summary> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import IngredientAndStep from "@/components/IngredientAndStep.vue";
import PlantsDeco from "../components/PlantsDeco.vue";
export default {
  props: ["id"],
  components: { IngredientAndStep, PlantsDeco },
  computed: mapState(["recipedetails"]),
  created() {
    this.$store.dispatch("getRecipeDetails", this.id);
  },
};
</script>
<style scoped>
.recipe_details {
  margin: 20vh auto 0 auto;
  width: 90%;
  display: grid;
  place-items: center;
}
.recipename {
  font-size: 2rem;
}
img {
  padding: 2rem;
  background-color: #fff;
  max-width: 380px;
}
.recipename {
  margin: 2rem;
}
.step_and_summary {
  width: 80%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5rem;
}
.instructions {
  width: 50%;
}
</style>
