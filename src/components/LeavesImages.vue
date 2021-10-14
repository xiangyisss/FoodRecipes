<template>
  <div class="leavesImages">
    <img src="../assets/leafbg.png" alt="" />
    <img src="../assets/leafbg.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "LeavesImages",
};
</script>

<style scoped>
.leavesImages {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
}
.leavesImages img {
  width: 15%;
}
</style>
