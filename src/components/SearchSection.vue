<template>
  <div class="container">
    <div class="search-section">
      <div class="search-bar">
        <input
          id="search"
          type="search"
          @keyup.enter="submit"
          v-model="query"
          placeholder="Search a recipe..."
        />

        <img
          src="../assets/search-icon.svg"
          alt="search-icon"
          class="search-icon"
        />
      </div>

      <div class="filter" @click="show = !show">
        <button>Filter</button>
      </div>

      <transition name="fade">
        <div v-if="!show">
          <form action="url" class="search-by-type">
            <div class="type">
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
          </form>
          <div class="button">
            <button class="btn btn-1" @click="button">Search</button>

            <button class="btn btn-2" @click="reset">Reset</button>
          </div>
        </div>
      </transition>
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
      show: true,
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
  position: relative;
}
.search-icon {
  width: 0.75rem;
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

.search-icon {
  position: absolute;
  top: 30%;
  right: 1rem;
  opacity: 0.7;
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
  overflow: hidden;
}
.fade-enter-to,
.fade-leave-from {
  max-height: 400px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in;
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
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.btn-1 {
  background-color: #16a085;
}
.btn-2 {
  background-color: rgb(236, 74, 74);
}
</style>
