<template>
  <div class="container">
    <div class="search-section">
      <div class="search-bar">
        <input
          class="search"
          type="search"
          @keyup.enter="submit"
          v-model="query"
          placeholder="Search a recipe..."
        />
      </div>

      <div class="filter" @click="show = !show">
        <button>Filter</button>
      </div>

      <transition name="fade">
        <form action="url" class="search-by-type" v-if="!show">
          <div class="cusine-type">
            <div class="form-item">
              <label for="mealtype">Meal Type</label>
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
              <label for="cuisine">Cuisine Type</label>
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
              <label for="diettype">Diet Type</label>
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
              <select class="form-control" v-model="allergie">
                <option value="null">--------</option>
                <option value="Soy" checked>Soy</option>
                <option value="Peanut">Peanut</option>
                <option value="Sesame">Sesame</option>
                <option value="">Tree Nut</option>
                <option value="Seafood">Seafood</option>
              </select>
            </div>
          </div>

          <div class="button">
            <button class="btn btn-1" @click="button">Search</button>

            <button class="btn btn-2" @click="reset">Reset</button>
          </div>
        </form>
      </transition>
    </div>

    <article class="main-section">
      <div v-for="recipe in recipes" :key="recipe.index">
        <router-link :to="{ name: 'recipedetails', params: { id: recipe.id } }">
          <img :src="recipe.image" />
          <p>{{ recipe.title }}</p>
        </router-link>
        <!-- <p style="margin-bottom: 12px">
            {{ recipedetails.readyInMinutes }}Minutes
          </p> -->
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
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
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
  /* background-color: black; */
}

.search-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-bar {
  margin-top: 50px;
  width: 100%;
}
.search-bar input,
.form-control {
  height: 30px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid #16a085;
  font-size: 0.75rem;
  padding-left: 12px;
  transition: all 1s;
}

.search-bar input:focus {
  border-radius: 30px;
}

.filter button {
  margin: 1.5rem 0;
  width: 5rem;
  padding: 8px;
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  background-color: #16a085;
  color: rgb(247, 244, 240);
  cursor: pointer;
}

.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.form-item label {
  text-align: center;
  padding-bottom: 0.25rem;
}

.fade-enter-from,
.fade-leave-to {
  max-height: 0px;
}
.fade-enter-to,
.fade-leave-from {
  max-height: 280px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s;
}

.search-by-type {
  margin-bottom: 1rem;
}

.button {
  display: flex;
  justify-content: space-around;
}
.btn {
  outline: none;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  color: white;
  font-size: 0.9rem;
}

.btn-1 {
  background-color: #16a085;
}
.btn-2 {
  background-color: rgb(236, 74, 74);
}

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
</style>
