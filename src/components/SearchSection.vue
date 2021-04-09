<template>
  <div>
    <div class="search-bar">
      <input
        type="text"
        @keyup.enter="submit"
        v-model="query"
        placeholder="Find a recipe..."
        class="border py-2 px-3 text-gray-400 focus-within:text-gray-600 ..."
      />
    </div>

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
    <button @click="reset">Reset</button>

    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      mealtype: "null",
      cuisine: "null",
      diettype: "null",
      allergie: "null",
    };
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
  },
};
</script>

<style></style>
