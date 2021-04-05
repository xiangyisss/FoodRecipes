<template>
  <div>
    <div v-for="recipe in cousine" :key="recipe.id">
      <img :src="recipe.image" alt="" />
      <a href="" @click="getRecipeDetails">{{ recipe.title }}</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["cousine"]),
  methods: {
    getRecipeDetails() {
      this.$store.dispatch("getRecipeDetail", this.recipe.id).then(() => {
        this.$router.push({ name: "recipedetails" });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
