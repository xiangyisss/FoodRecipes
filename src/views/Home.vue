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

    <div v-for="recipe in recipes" :key="recipe.index">
      <router-link :to="{ name: 'recipedetails', params: { id: recipe.id } }">
        <img :src="recipe.image" style="height: 150px" />
        <p>{{ recipe.title }}</p>
      </router-link>
    </div>

    <div v-for="recipe in popular" :key="recipe.index">
      <img :src="recipe.image" alt="" />
      <p>{{ recipe.title }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import MealType from "../components/MealType.vue";

export default {
  components: { MealType },
  name: "Home",
  data() {
    return {
      query: "",
      popular: "",
    };
  },
  computed: mapState(["recipes"]),
  methods: {
    submit() {
      this.$store.dispatch("getData", this.query);
    },
  },
  created() {
    axios
      .get(
        "https://api.spoonacular.com/recipes/complexSearch?&apiKey=376a071d9e3f4a76a57cb68329ff1cff&sort=popularity&number=12"
      )
      .then((res) => (this.popular = res.data.results))
      .catch((err) => console.log(err));
  },
};
</script>
