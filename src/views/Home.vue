<template>
  <div class="home">
    <label></label>
    <input type="text" @keyup.enter="submit" v-model="query" />

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
export default {
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
