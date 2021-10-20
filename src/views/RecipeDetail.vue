<template>
  <plants-deco />
  <div class="recipe_details">
    <div class="recipename_box">
      <p class="recipename">{{ recipedetails.title }}</p>
    </div>
    <div class="iconAndServing_container">
      <div class="icon_box box_1">
        <img src="../assets/timer.png" alt="" />
        <p><strong>Cook</strong> : {{ recipedetails.readyInMinutes }} mins</p>
      </div>
      <div class="icon_box box_2">
        <img src="../assets/serve.png" alt="" />
        <p><strong>Servings</strong> : {{ recipedetails.servings }}</p>
      </div>
    </div>
    <div class="recipe_image">
      <img :src="recipedetails.image" alt="" />
    </div>

    <div class="step_and_summary">
      <ingredient-and-step v-bind="$attrs" :id="id" />
      <div class="instructions_box">
        <h3>Instructions</h3>
        <summary
          class="instructions"
          v-html="$store.state.recipedetails.instructions"
        ></summary>
      </div>
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
  data() {
    return {
      page: 1,
    };
  },
  computed: mapState(["recipedetails"]),
  created() {
    this.$store.dispatch("getRecipeDetails", this.id);
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.recipe_details {
  margin: 15vh auto 0 auto;
  width: 90%;
  display: grid;
  place-items: center;
}
.recipename_box {
  width: 100%;
}
.recipename {
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  margin: 1rem;
  color: rgb(97, 116, 82);
}
.recipe_image img {
  margin-bottom: 2rem;
  background-color: #fff;
  width: 580px;
  max-width: 540px;
}
.iconAndServing_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1rem 0;
}
.icon_box {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  border-radius: 2rem;
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;
  margin: 0 1rem 1rem 0;
}
.icon_box img {
  margin-right: 0.5rem;
}
.icon_box select {
  outline: none;
  border: none;
  background-color: transparent;
  padding-left: 0.5rem;
  cursor: pointer;
}
.step_and_summary {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 5rem;
}
.instructions_box {
  width: 50%;
}
summary {
  padding-top: 1rem;
  line-height: 1.8rem;
}
strong {
  color: rgb(28, 31, 25);
}
@media screen and (max-width: 850px) {
  .step_and_summary {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .instructions_box {
    margin-top: 1rem;
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .recipe_details {
    margin: 10vh auto 0 auto;
    width: 100%;
    display: grid;
    place-items: center;
  }
  .recipe_image img {
    max-width: 360px;
  }

  .recipename {
    font-size: 1.5rem;
    text-overflow: ellipsis;
    white-space: wrap;
    line-height: 1.5rem;
    text-align: center;
  }
  .iconAndServing_container {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>
