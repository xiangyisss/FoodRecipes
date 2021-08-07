<template>
  <div class="recipe-section">
    <recipe-instruction :id="id" />

    <ingredient-and-step :id="id" />
  </div>
</template>

<script>
import IngredientAndStep from "@/components/IngredientAndStep.vue";
import RecipeInstruction from "../components/Recipe-Instruction.vue";
export default {
  props: ["id"],
  components: { IngredientAndStep, RecipeInstruction },
};
</script>
<style scoped></style>
