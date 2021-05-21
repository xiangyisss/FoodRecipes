<template>
  <div>
    <strong> <h3>Ingredients</h3></strong>
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
  props: ["id"],
  computed: mapState(["ingredients"]),
  created() {
    this.$store.dispatch("getIngredients", this.id);
  },
};
</script>

<style scoped>
li {
  text-transform: capitalize;
}
</style>
