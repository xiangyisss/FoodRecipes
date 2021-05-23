<template>
  <div class="container">
    <h1>Recipes</h1>
    <search-section />
    <recipe-data />
    <!-- <article class="main-section">
      <div v-for="recipe in recipes" :key="recipe.index">
        <router-link :to="{ name: 'recipedetails', params: { id: recipe.id } }">
          <img :src="recipe.image" />
          <p>{{ recipe.title }}</p>
        </router-link>
      </div>
    </article> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import RecipeData from "../components/RecipeData.vue";
import SearchSection from "../components/SearchSection.vue";

export default {
  components: { SearchSection, RecipeData },
  data() {
    return {
      query: "",
      mealtype: "null",
      cuisine: "null",
      diettype: "null",
      allergie: "null",
      show: true,
    };
  },
  computed: mapState(["recipes", "recipedetails"]),
  created() {
    this.$store.dispatch("defaultRecipes", ("getRecipeDetails", this.id));
  },
  methods: {
    submit() {
      this.$store.dispatch("getData", {
        query: this.query,
        mealtype: this.mealtype,
        cuisine: this.cuisine,
        diettype: this.diettype,
        allergie: this.allergie,
      });
    },
    button() {
      this.$store.dispatch("getData", {
        query: this.query,
        mealtype: this.mealtype,
        cuisine: this.cuisine,
        diettype: this.diettype,
        allergie: this.allergie,
      });
    },
    reset() {
      location.reload();
    },
    // hideToggleMenu() {
    //   this.show = !this.show;
    //   let myButtons = document.querySelector(".button");
    //   if (this.show) {
    //     myButtons.classList.add("shown");
    //   } else {
    //     myButtons.classList.remove("shown");
    //   }
    // },
  },
};
</script>

<style scoped>
.main-section {
  padding-top: 1rem;
}
.main-section img {
  display: block;
  width: 100%;
}
.main-section p {
  padding: 1rem 0;
}

.type label {
  padding-bottom: 0.5rem;
}
</style>
