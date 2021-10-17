<template>
  <div class="ingredients_steps">
    <h3>Ingredients</h3>
    <ul>
      <li
        v-for="item in ingredients"
        :key="item.index"
        :class="this.check ? 'activeClass' : ''"
        @click="checkIngredients"
      >
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
  data() {
    return {
      check: false,
      activeColor: "grey",
    };
  },
  methods: {
    checkIngredients() {
      this.check = !this.check;
    },
  },
  computed: mapState(["ingredients"]),
  created() {
    this.$store.dispatch("getIngredients", this.id);
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-top: 0.5rem;
}
ul li::before {
  content: "\2022";
  color: rgb(255, 174, 0);
  font-weight: bold;
  display: inline-block;
  width: 1rem;
}
ul li {
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
  cursor: pointer;
}
.activeClass {
  color: grey;
}
</style>
