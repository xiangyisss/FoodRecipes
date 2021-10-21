<template>
  <div class="networkissue_box">
    <h3 class="text-warning bg-dark">
      It looks you're experiencing some network issues, please click the back
      button and try again.
    </h3>
    <router-link :to="{ name: 'Home' }"
      >Or go back to the home page.</router-link
    >
  </div>
</template>

<style scoped>
.networkissue_box {
  margin-top: 8vh;
  width: 100%;
  height: 92vh;
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
