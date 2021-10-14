<template>
  <div class="title">
    <p>Recipes for Today</p>
  </div>
</template>

<script>
export default {
  name: "TopLogo",
};
</script>

<style scoped>
.title {
  margin: 1rem 0 1rem 0;
  display: grid;
  place-items: center;
  min-height: 20vh;
}
p {
  cursor: pointer;
  font-size: 3rem;
  font-weight: 700;
  color: #335735;
}
</style>
