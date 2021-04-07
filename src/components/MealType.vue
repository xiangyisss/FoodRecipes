<template>
  <div>
    <div class="mealtype">
      <select v-model="mealtype">
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
      <select v-model="cuisine">
        <option value="Thai">Thai</option>

        <option value="Greek">Greek</option>
        <option value="German">German</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Korean">Korean</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
        <option value="Mexican">Mexican</option>

        <option value="Chinese">Chinese</option>
        <option value="Japanese">Japanese</option>
        <option value="Vietnamese">Vietnamese</option>
      </select>
    </div>

    <div class="diettype">
      <select v-model="diettype">
        <option value="Gluten Free">Gluten Free</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Pescetarian">Pescetarian</option>
        <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
        <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
        <option value="Ketogenic">Ketogenic</option>
      </select>
    </div>

    <!-- <div>
      <select v-model="time">
        <option value="time">Time</option>
        <option value="vitamin-e">vitamin-e</option>
        <option value="iron">iron</option>
        <option value="protein">protein</option>
      </select>
    </div> -->

    <button @click="button">Search</button>

    <div>
      <div v-for="type in recipetype" :key="type.index">
        <img :src="type.image" alt="" />
        <p>{{ type.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      mealtype: "",
      cuisine: "",
      diettype: "",
      //time: "",
    };
  },
  computed: mapState(["recipetype"]),
  methods: {
    button() {
      this.$store.dispatch(
        "getRecipeType",
        this.mealtype,
        this.cuisine,
        this.diettype
        //this.time
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
