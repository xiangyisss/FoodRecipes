<template>
  <div class="searchSection">
    <div class="search_bar">
      <input
        type="text"
        @keyup.enter="submit"
        v-model="query"
        placeholder="Find a recipe..."
        class="border py-2 px-3 text-gray-400 focus-within:text-gray-600 ..."
      />
    </div>

    <div class="search_by_type">
      <div class="mealtype_section">
        <label for="mealtype">MealType</label>
        <select class="select" v-model="mealtype" name="mealtype">
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

      <div class="cusine_section">
        <label for="cuisine">Cuisine</label>
        <select v-model="cuisine" name="cuisine">
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

      <div class="diettype_section">
        <label for="diettype">DietType</label>
        <select v-model="diettype" name="diettype">
          <option value="null">--------</option>
          <option value="Gluten Free">Gluten Free</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Pescetarian">Pescetarian</option>
          <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
          <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
          <option value="Ketogenic">Ketogenic</option>
        </select>
      </div>

      <div class="allergie_section">
        <label for="allergie">Allergie</label>
        <select v-model="allergie" name="allergie">
          <option value="null">--------</option>
          <option value="Soy">Soy</option>
          <option value="Peanut">Peanut</option>
          <option value="Sesame">Sesame</option>
          <option value="">Tree Nut</option>
          <option value="Seafood">Seafood</option>
        </select>
      </div>
    </div>

    <div class="searchAndSetBtn">
      <button class="btn searchBtn" @click="button">Search</button>
      <button class="btn resetBtn" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchSection",
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

<style scoped>
.searchSection {
  width: 90%;
  margin: 0 auto;
  /* margin-top: 20vh; */
  /* margin: 0 auto; */
  /* display: flex;
  place-items: center; */
  padding: 2rem 1rem 0 1rem;
}
.search_bar {
  width: 100%;
  display: grid;
  place-items: center;
  margin-bottom: 2rem;
}
.search_bar input {
  padding: 0.7rem;
  width: 60%;
  outline: none;
  border: 2px solid #76a78a;
  border-radius: 4px;
}
.search_by_type {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 3rem auto;
  /* margin-bottom: 3rem; */
}
.search_by_type > * {
  display: flex;
  flex-direction: column;
  width: 20%;
}
.search_by_type label {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 800;
  color: #274228;
  margin: 0.75rem;
}
select {
  padding: 0.45rem;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #6a926b5d;
}
.search_bar input:focus {
  border-radius: 1.5rem;
  transition: all 0.3s ease;
}
select option {
  font-size: 1rem;
  background-color: #fff;
  height: 5rem;
}
select:hover {
  border-radius: 1rem;
  transition: all 0.3s ease;
}
.searchAndSetBtn {
  width: 15%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn {
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  margin-bottom: 3rem;
}
.searchBtn {
  border: 1px solid #53855483;
  background-color: transparent;
}
.resetBtn {
  background-color: rgb(56, 138, 170);
  color: white;
}

@media screen and (max-width: 600px) {
  .search_bar input {
    width: 90%;
  }
  .search_by_type {
    width: 90%;
  }
  .search_by_type label {
    font-size: 1rem;
    margin: 0 0 0.25rem 0;
  }
  .searchAndSetBtn {
    width: 35%;
  }
}
</style>
