<template>
  <div class="navbar">
    <img src="@/assets/salad.png" alt="" />
    <p>Recipes for Today</p>
  </div>
</template>

<script>
export default {
  name: 'TopLogo',
};
</script>

<style scoped>
.navbar {
  width: 100%;
  margin: 0 0 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 8vh;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 3px 5px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
p {
  margin-left: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  color: #335735;
}
</style>
