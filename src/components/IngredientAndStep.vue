<template>
  <div class="ingredients_steps">
    <h3>Ingredients</h3>
    <ul>
      <li v-for="item in ingredients" :key="item.index">
        {{ item.name }}: {{ item.amount.metric.value }}
        {{ item.amount.metric.unit }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "IngredientAndStep",
  props: ["id"],
  computed: mapState(["ingredients"]),
  created() {
    this.$store.dispatch("getIngredients", this.id);
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
ul li::before {
  content: "\2022";
  color: rgb(255, 174, 0);
  font-weight: bold;
  display: inline-block;
  width: 1rem;
}
ul li {
  padding-top: 0.5rem;
  line-height: 1.5rem;
}
</style>
