<template>
  <div class="recipe-detail">
    <img :src="recipedetails.image" alt="" />
    <strong>
      <p>{{ recipedetails.title }}</p></strong
    >
    <p class="instruct">
      Instructions: {{ tidyString(recipedetails.instructions) }}
    </p>

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
export default {
  props: ["id"],
  computed: mapState(["recipedetails"]),
  // created() {
  //   this.$store.dispatch("getRecipeDetails", this.id);
  // },
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

/* .recipe-detail {
  position: absolute;
  top: 56px;
} */

img {
  margin-top: 56px;
  width: 90%;
}

.type {
  width: 50%;
  height: 100px;
  background-color: rgb(248, 115, 115);
}
</style>
