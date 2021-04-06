<template>
  <div>
    <div v-for="recipe in cousine" :key="recipe.index">
      <router-link :to="{ name: 'recipedetails', params: { id: recipe.id } }">
        <img :src="recipe.image" alt="" />
        <p>{{ recipe.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["id"],
  computed: mapState(["cousine"]),
  created() {
    mapActions(["getRecipeDetail"], this.id);
  },
};
</script>

<style lang="scss" scoped></style>
