<template>
  <div>
    <select v-model="selected">
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

    <button @click="button">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    button() {
      this.$store.dispatch("cousineRecipes", this.selected).then(() => {
        this.$router.push({ name: "cousinelist" });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
