<template>
  <div class="recipe-section">
    <img :src="recipedetails.image" alt="" />
    <strong>
      <p>{{ recipedetails.title }}</p></strong
    >
    <ingredient-and-step :id="id" />

    <hr />

    <p class="instruct">
      Instructions: {{ tidyString(recipedetails.instructions) }}
    </p>

    <hr />
    <p>HealthScore: {{ recipedetails.healthScore }}</p>
    <p>Total time : {{ recipedetails.readyInMinutes }} minutes</p>
    <p>Price per serving: {{ recipedetails.servings }}</p>

    Course:
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
  methods: {
    tidyString(dirtyString) {
      return dirtyString.replaceAll(
        /(<ul>|<ol>|<li>|<\/li>|<\/ul>|<\/ol>|<p>|<\/p>|<br>)/g,
        "\n"
      );
    },
  },
};
</script>
<style scoped>
p :not(.instruct) {
  text-transform: capitalize;
}
</style>
