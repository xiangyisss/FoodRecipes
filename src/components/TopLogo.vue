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
  width: 100%;
  margin: 0 0 0.5rem 0;
  display: grid;
  place-items: center;
  min-height: 8vh;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 3px 5px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
p {
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  color: #335735;
}
</style>
