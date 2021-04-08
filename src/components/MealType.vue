<template>
  <div>
    <div class="mealtype">
      <label for="">MealType</label>
      <select v-model="mealtype">
        <option value="null">--------</option>
        <option value="dessert">Dessert</option>
        <option value="breakfast">Breakfast</option>
        <option value="appetizer">Appetizer</option>
        <option value="side dish">Side dish</option>
        <option value="bread">Bread</option>
        <option value="snack">Snack</option>
        <option value="main course">Main course</option>
        <option value="salad">Salad</option>
        <option value="fingerfood">Fingerfood</option>
        <option value="sauce">Sauce</option>
      </select>
    </div>

    <div class="cusine">
      <label for="">Cuisine</label>
      <select v-model="cuisine">
        <option value="null">--------</option>
        <option value="Thai">Thai</option>
        <option value="Greek">Greek</option>
        <option value="German">German</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Korean">Korean</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
        <option value="Mexican">Mexican</option>
        <option value="African">African</option>
        <option value="Chinese">Chinese</option>
        <option value="Japanese">Japanese</option>
        <option value="Vietnamese">Vietnamese</option>
      </select>
    </div>

    <div class="diettype">
      <label for="">DietType</label>
      <select v-model="diettype">
        <option value="null">--------</option>
        <option value="Gluten Free">Gluten Free</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Pescetarian">Pescetarian</option>
        <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
        <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
        <option value="Ketogenic">Ketogenic</option>
      </select>
    </div>

    <div>
      <label for="">Allergie</label>
      <select v-model="allergie">
        <option value="null">--------</option>
        <option value="Soy">Soy</option>
        <option value="Peanut">Peanut</option>
        <option value="Sesame">Sesame</option>
        <option value="">Tree Nut</option>
        <option value="Seafood">Seafood</option>
      </select>
    </div>

    <button @click="button">Search</button>

    <div>
      <div v-for="type in recipetype" :key="type.index">
        <router-link :to="{ name: 'recipedetails', params: { id: type.id } }">
          <img :src="type.image" alt="" />
          <p>{{ type.title }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      mealtype: "null",
      cuisine: "null",
      diettype: "null",
      allergie: "null",
    };
  },
  computed: mapState(["recipetype"]),
  methods: {
    button() {
      this.$store.dispatch("getRecipeType", {
        mealtype: this.mealtype,
        cuisine: this.cuisine,
        diettype: this.diettype,
        allergie: this.allergie,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
