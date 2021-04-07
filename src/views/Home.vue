<template>
  <div class="home">
    <input
      type="text"
      @keyup.enter="submit"
      v-model="query"
      placeholder="Find a recipe..."
      class="border py-2 px-3 text-gray-400 focus-within:text-gray-600 ..."
    />

    <meal-type />

    <div v-for="recipe in recipes" :key="recipe">
      <router-link :to="{ name: 'recipedetails', params: { id: recipe.id } }">
        <img :src="recipe.image" style="height: 150px" />
        <p>{{ recipe.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import MealType from "../components/MealType.vue";

export default {
  components: { MealType },
  name: "Home",
  data() {
    return {
      query: "",
    };
  },
  computed: mapState(["recipes"]),
  methods: {
    submit() {
      this.$store.dispatch("getData", this.query);
    },
  },
};
</script>
