<template>
  <div>
    <select v-model="diettype">
      <option value="Gluten Free">Gluten Free</option>
      <option value="Vegetarian">Vegetarian</option>
      <option value="Pescetarian">Pescetarian</option>
      <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
      <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
      <option value="Ketogenic">Ketogenic</option>
    </select>
    <button @click="button">search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diettype: "",
    };
  },
  methods: {
    button() {
      this.$store.dispatch("getDietType", this.diettype);
    },
  },
};
</script>

<style lang="scss" scoped></style>
