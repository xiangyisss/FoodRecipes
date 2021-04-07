<template>
  <div>
    <select v-model="type" :placeholder="type">
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
    <button @click="button">Search</button>
  </div>
</template>

<script>
//import { mapState } from "vuex";
export default {
  data() {
    return {
      type: "",
    };
  },
  methods: {
    button() {
      this.$store.dispatch("getMealType", this.type);
    },
  },
};
</script>

<style lang="scss" scoped></style>
