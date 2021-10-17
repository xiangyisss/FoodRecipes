<template>
  <div class="plant_deco">
    <img class="plant_left" src="../assets/leafbg.png" alt="" />
    <img class="plant_right" src="../assets/leafbg.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "PlantsDeco",
};
</script>

<style scoped>
.plant_deco {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}
.plant_deco img {
  width: 15%;
}

@media screen and (max-width: 1050px) {
  .plant_deco {
    display: none;
  }
}
</style>
