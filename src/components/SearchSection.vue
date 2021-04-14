<template>
  <div class="search-section">
    <div class="search-bar">
      <div class="">
        <input
          class="form-control"
          type="search"
          @keyup.enter="submit"
          v-model="query"
          placeholder="Find a recipe..."
        />
      </div>
    </div>

    <div class="">
      <div class="form-item">
        <label for="mealtype">MealType</label>
        <select class="form-control" v-model="mealtype" id="mealtype">
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

      <div class="form-item">
        <label for="cuisine">Cuisine</label>
        <select class="form-control" v-model="cuisine" id="cuisine">
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

      <div class="form-item">
        <label for="diettype">DietType</label>
        <select class="form-control" v-model="diettype" id="diettype">
          <option value="null">--------</option>
          <option value="Gluten Free">Gluten Free</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Pescetarian">Pescetarian</option>
          <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
          <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
          <option value="Ketogenic">Ketogenic</option>
        </select>
      </div>

      <div class="form-item">
        <label for="allergie">Allergie</label>
        <select class="" v-model="allergie">
          <option value="null">--------</option>
          <option value="Soy">Soy</option>
          <option value="Peanut">Peanut</option>
          <option value="Sesame">Sesame</option>
          <option value="">Tree Nut</option>
          <option value="Seafood">Seafood</option>
        </select>
      </div>
    </div>

    <div class="">
      <button @click="button">Search</button>

      <button @click="reset">Reset</button>
    </div>
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
